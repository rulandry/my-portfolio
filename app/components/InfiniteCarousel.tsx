"use client";

import { Children, type ReactNode, useCallback, useEffect, useRef } from "react";

interface InfiniteCarouselProps {
  ariaLabel: string;
  children: ReactNode;
  itemWidthClassName: string;
}

export default function InfiniteCarousel({
  ariaLabel,
  children,
  itemWidthClassName,
}: InfiniteCarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const dragStateRef = useRef({
    pressed: false,
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });

  const items = Children.toArray(children);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const pauseAutoScroll = useCallback(
    (resumeDelay = 0) => {
      pausedRef.current = true;
      clearResumeTimer();

      if (resumeDelay > 0) {
        resumeTimerRef.current = window.setTimeout(() => {
          pausedRef.current = false;
          resumeTimerRef.current = null;
        }, resumeDelay);
      }
    },
    [clearResumeTimer]
  );

  const scrollByCard = useCallback(
    (direction: "previous" | "next") => {
      const slider = sliderRef.current;

      if (!slider) {
        return;
      }

      const firstCard = slider.querySelector<HTMLElement>(".carousel-item");
      const track = slider.querySelector<HTMLElement>(".carousel-track");
      const gapValue = track
        ? window.getComputedStyle(track).columnGap ||
          window.getComputedStyle(track).gap ||
          "0"
        : "0";
      const gap = Number.parseFloat(gapValue);
      const step = (firstCard?.offsetWidth || 0) + (Number.isNaN(gap) ? 0 : gap);

      if (!step) {
        return;
      }

      pauseAutoScroll(1800);
      slider.scrollBy({
        left: direction === "next" ? step : -step,
        behavior: "smooth",
      });
    },
    [pauseAutoScroll]
  );

  useEffect(() => {
    const slider = sliderRef.current;
    const firstGroup = firstGroupRef.current;

    if (!slider || !firstGroup) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frameId = 0;
    let lastTimestamp = 0;
    let loopWidth = 0;

    const syncLoopPosition = () => {
      if (loopWidth <= 0) {
        return;
      }

      if (slider.scrollLeft >= loopWidth * 2) {
        slider.scrollLeft -= loopWidth;
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft += loopWidth;
      }
    };

    const updateLoopWidth = () => {
      const track = firstGroup.parentElement;

      if (!track) {
        return;
      }

      const styles = window.getComputedStyle(track);
      const gapValue = styles.columnGap || styles.gap || "0";
      const gap = Number.parseFloat(gapValue);
      loopWidth = firstGroup.offsetWidth + (Number.isNaN(gap) ? 0 : gap);

      if (loopWidth > 0 && slider.scrollLeft === 0) {
        slider.scrollLeft = loopWidth;
      }

      syncLoopPosition();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      dragStateRef.current = {
        pressed: true,
        active: false,
        pointerId: event.pointerId,
        startX: event.clientX,
        startScrollLeft: slider.scrollLeft,
      };
    };

    const onPointerMove = (event: PointerEvent) => {
      if (
        !dragStateRef.current.pressed ||
        dragStateRef.current.pointerId !== event.pointerId
      ) {
        return;
      }

      const deltaX = event.clientX - dragStateRef.current.startX;

      if (!dragStateRef.current.active) {
        if (Math.abs(deltaX) < 8) {
          return;
        }

        dragStateRef.current.active = true;
        slider.classList.add("is-dragging");
        slider.setPointerCapture(event.pointerId);
        pauseAutoScroll();
      }

      slider.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
      syncLoopPosition();
    };

    const endDrag = (pointerId?: number) => {
      if (!dragStateRef.current.pressed) {
        return;
      }

      const wasDragging = dragStateRef.current.active;
      dragStateRef.current.pressed = false;
      dragStateRef.current.active = false;

      if (wasDragging) {
        slider.classList.remove("is-dragging");
      }

      if (pointerId !== undefined && slider.hasPointerCapture(pointerId)) {
        slider.releasePointerCapture(pointerId);
      }

      if (wasDragging) {
        syncLoopPosition();
        pauseAutoScroll(1800);
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      endDrag(event.pointerId);
    };

    const onPointerCancel = (event: PointerEvent) => {
      endDrag(event.pointerId);
    };

    const onScroll = () => {
      syncLoopPosition();
    };

    const resizeObserver = new ResizeObserver(() => {
      updateLoopWidth();
    });

    updateLoopWidth();
    resizeObserver.observe(slider);
    resizeObserver.observe(firstGroup);

    slider.addEventListener("pointerdown", onPointerDown);
    slider.addEventListener("pointermove", onPointerMove);
    slider.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("pointercancel", onPointerCancel);
    slider.addEventListener("scroll", onScroll, { passive: true });

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!prefersReducedMotion && !pausedRef.current && loopWidth > 0) {
        slider.scrollLeft += delta * 0.035;
        syncLoopPosition();
      }

      frameId = window.requestAnimationFrame(animate);
    };

    if (!prefersReducedMotion) {
      frameId = window.requestAnimationFrame(animate);
    }

    return () => {
      clearResumeTimer();
      slider.removeEventListener("pointerdown", onPointerDown);
      slider.removeEventListener("pointermove", onPointerMove);
      slider.removeEventListener("pointerup", onPointerUp);
      slider.removeEventListener("pointercancel", onPointerCancel);
      slider.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [clearResumeTimer, pauseAutoScroll]);

  return (
    <div className="carousel-shell relative">
      <button
        type="button"
        className="carousel-arrow carousel-arrow-left theme-panel border theme-border"
        aria-label={`Previous ${ariaLabel}`}
        onClick={() => scrollByCard("previous")}
      >
        {"<"}
      </button>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right theme-panel border theme-border"
        aria-label={`Next ${ariaLabel}`}
        onClick={() => scrollByCard("next")}
      >
        {">"}
      </button>

      <div
        ref={sliderRef}
        className="carousel-slider relative overflow-x-auto overflow-y-hidden"
        onMouseEnter={() => {
          pauseAutoScroll();
        }}
        onMouseLeave={() => {
          if (!dragStateRef.current.active) {
            pauseAutoScroll(1200);
          }
        }}
        onTouchStart={() => {
          pauseAutoScroll();
        }}
        onTouchEnd={() => {
          if (!dragStateRef.current.active) {
            pauseAutoScroll(1200);
          }
        }}
      >
        <div className="carousel-track flex w-max items-stretch gap-5 sm:gap-6">
          {[0, 1, 2].map((groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 1 ? firstGroupRef : undefined}
              className="flex shrink-0 items-stretch gap-5 sm:gap-6"
              aria-hidden={groupIndex !== 1}
            >
              {items.map((item, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className={`carousel-item shrink-0 ${itemWidthClassName}`}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-slider {
          scrollbar-width: none;
          cursor: grab;
          touch-action: pan-y pinch-zoom;
          -webkit-overflow-scrolling: touch;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 6%,
            black 94%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 6%,
            black 94%,
            transparent
          );
        }

        .carousel-slider.is-dragging {
          cursor: grabbing;
        }

        .carousel-slider::-webkit-scrollbar {
          display: none;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 9999px;
          font-size: 1.3rem;
          line-height: 1;
          transform: translateY(-50%);
          transition:
            opacity 0.25s ease,
            visibility 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .carousel-shell:hover .carousel-arrow,
        .carousel-shell:focus-within .carousel-arrow {
          opacity: 1;
          visibility: visible;
        }

        .carousel-arrow:hover {
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
        }

        .carousel-arrow-left {
          left: 0.5rem;
        }

        .carousel-arrow-right {
          right: 0.5rem;
        }

        @media (max-width: 639px) {
          .carousel-arrow {
            width: 2.35rem;
            height: 2.35rem;
            font-size: 1.1rem;
            opacity: 1;
            visibility: visible;
          }

          .carousel-arrow-left {
            left: 0.25rem;
          }

          .carousel-arrow-right {
            right: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
}
