"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  kind: "certificate" | "badge";
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cybersecurity Certificate",
    issuer: "ALX",
    issueDate: "14 April 2026",
    image: "/certificates/cybersecurity.png",
    kind: "certificate",
  },
  {
    id: 5,
    title: "Freelancer Academy Certificate",
    issuer: "ALX",
    issueDate: "27 July 2025",
    image: "/certificates/freelancer-academy.png",
    kind: "certificate",
  },
  {
    id: 3,
    title: "Professional Foundation Certificate",
    issuer: "ALX",
    issueDate: "15 April 2025",
    image: "/certificates/professional-foundations.png",
    kind: "certificate",
  },
  {
    id: 7,
    title: "AI Career Essentials (AICE) Certificate",
    issuer: "ALX",
    issueDate: "24 September 2024",
    image: "/certificates/AICE.png",
    kind: "certificate",
  },
  {
    id: 9,
    title: "Network Fundamentals Certificate",
    issuer: "Cybrary",
    issueDate: "29 September 2024",
    image: "/certificates/Network-fundamentals.png",
    kind: "certificate",
  },
  {
    id: 10,
    title:
      "M365 MW Microsoft 365 Copilot for Commerce: End-to-End Purchasing, Licensing, and Support Essentials",
    issuer: "QA",
    issueDate: "14 November 2025",
    image: "/certificates/Copilot-commerce.png",
    kind: "certificate",
  },
  {
    id: 11,
    title: "M365 MW Copilot Essentials in Office for Support Engineers",
    issuer: "QA",
    issueDate: "14 November 2025",
    image: "/certificates/Copilot-Office-SE.png",
    kind: "certificate",
  },
  {
    id: 12,
    title:
      "MW M365 Concierge Office: Server Troubleshooting Foundational Learning Path",
    issuer: "QA",
    issueDate: "12 November 2025",
    image: "/certificates/Server-troubleshooting.png",
    kind: "certificate",
  },
  {
    id: 13,
    title:
      "MW M365 Concierge Office: Features and Applications Foundational Learning Path",
    issuer: "QA",
    issueDate: "11 November 2025",
    image: "/certificates/Office-features&apps.png",
    kind: "certificate",
  },
  {
    id: 14,
    title:
      "MW M365 Concierge Office: Installation and Activation Foundational Learning Path",
    issuer: "QA",
    issueDate: "10 November 2025",
    image: "/certificates/Installation&Activation-Office-apps.png",
    kind: "certificate",
  },
  {
    id: 15,
    title: "Loop Training",
    issuer: "QA",
    issueDate: "4 November 2025",
    image: "/certificates/Loop.png",
    kind: "certificate",
  },
  {
    id: 16,
    title: "Office 2024 Long Term Servicing Channel (LTSC)",
    issuer: "QA",
    issueDate: "4 November 2025",
    image: "/certificates/LTSC.png",
    kind: "certificate",
  },
  {
    id: 17,
    title: "Microsoft Office - Troubleshooting Office Application Guard",
    issuer: "QA",
    issueDate: "4 November 2025",
    image: "/certificates/Office-apps-troubleshooting.png",
    kind: "certificate",
  },
  {
    id: 2,
    title: "Computer Hardware Basics Certificate",
    issuer: "Cisco",
    issueDate: "23 May 2025",
    image: "/certificates/Comp-Hardware-Basics.png",
    kind: "certificate",
  },
  {
    id: 6,
    title: "Introduction to Internet of Things Certificate",
    issuer: "Cisco",
    issueDate: "22 June 2025",
    image: "/certificates/IoT-Cert.png",
    kind: "certificate",
  },
  {
    id: 8,
    title: "Introduction to Cybersecurity Certificate",
    issuer: "Cisco",
    issueDate: "5 October 2024",
    image: "/certificates/Intro-Cybersecurity.png",
    kind: "certificate",
  },
  {
    id: 4,
    title: "Building AI Agents with MongoDB Badge",
    issuer: "MongoDB",
    issueDate: "23 April 2025",
    image: "/certificates/building-ai-agents-with-mongodb.png",
    kind: "badge",
  },
];

export default function Certificates() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const scrollByCard = (direction: "previous" | "next") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>(".certificates-card");
    const track = slider.querySelector<HTMLElement>(".certificates-track");
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

    pausedRef.current = true;

    slider.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      pausedRef.current = false;
    }, 1200);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const firstGroup = firstGroupRef.current;

    if (!slider || !firstGroup) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;
    let lastTimestamp = 0;
    let loopWidth = 0;

    const updateLoopWidth = () => {
      const track = firstGroup.parentElement;

      if (!track) {
        return;
      }

      const styles = window.getComputedStyle(track);
      const gapValue = styles.columnGap || styles.gap || "0";
      const gap = Number.parseFloat(gapValue);
      loopWidth = firstGroup.offsetWidth + (Number.isNaN(gap) ? 0 : gap);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateLoopWidth();

      if (loopWidth > 0 && slider.scrollLeft >= loopWidth) {
        slider.scrollLeft %= loopWidth;
      }
    });

    updateLoopWidth();
    resizeObserver.observe(slider);
    resizeObserver.observe(firstGroup);

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!pausedRef.current && loopWidth > 0) {
        slider.scrollLeft += delta * 0.035;

        if (slider.scrollLeft >= loopWidth) {
          slider.scrollLeft -= loopWidth;
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section id="certificates" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 text-center">
          Certificates and badges
        </h2>

        <div className="certificates-carousel relative">
          <button
            type="button"
            className="certificate-arrow certificate-arrow-left theme-panel border theme-border"
            aria-label="Previous certificate"
            onClick={() => {
              scrollByCard("previous");
            }}
          >
            {"<"}
          </button>

          <button
            type="button"
            className="certificate-arrow certificate-arrow-right theme-panel border theme-border"
            aria-label="Next certificate"
            onClick={() => {
              scrollByCard("next");
            }}
          >
            {">"}
          </button>

          <div
            ref={sliderRef}
            className="certificates-slider relative overflow-hidden"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
            <div className="certificates-track flex w-max items-stretch gap-5 sm:gap-6">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  ref={groupIndex === 0 ? firstGroupRef : undefined}
                  className="flex shrink-0 items-stretch gap-5 sm:gap-6"
                  aria-hidden={groupIndex === 1}
                >
                  {certificates.map((certificate) => (
                    <article
                      key={`${groupIndex}-${certificate.id}`}
                      className="certificates-card theme-panel border theme-border rounded-xl p-4 sm:p-5 text-center shrink-0 w-[260px] sm:w-[290px] lg:w-[320px]"
                    >
                      <button
                        type="button"
                        className="block w-full cursor-pointer text-left text-inherit"
                        onClick={() => {
                          setSelectedCertificate(certificate);
                        }}
                      >
                        <div
                          className={`certificate-image-frame relative overflow-hidden rounded-lg ${
                            certificate.kind === "badge"
                              ? "certificate-image-frame-badge"
                              : ""
                          }`}
                        >
                          <Image
                            src={certificate.image}
                            alt={certificate.title}
                            width={400}
                            height={250}
                            quality={100}
                            sizes="(min-width: 1024px) 320px, (min-width: 640px) 290px, 260px"
                            className={`w-full transition-transform duration-300 ${
                              certificate.kind === "badge"
                                ? "h-36 sm:h-40 lg:h-44 object-contain"
                                : "h-44 sm:h-48 lg:h-52 object-contain"
                            }`}
                          />
                        </div>

                        <div className="pt-4 sm:pt-5 text-center">
                          <h3 className="text-base sm:text-lg font-semibold leading-snug">
                            {certificate.title}
                          </h3>
                          <p className="theme-muted text-sm sm:text-base mt-1">
                            {certificate.issuer}
                          </p>
                          <p className="theme-muted text-sm mt-1">
                            {certificate.issueDate}
                          </p>
                        </div>
                      </button>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate ? (
        <div
          className="certificate-preview"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={() => {
            setSelectedCertificate(null);
          }}
        >
          <div
            className="certificate-preview-panel theme-panel border theme-border rounded-2xl p-4 sm:p-5"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <button
              type="button"
              className="certificate-preview-close theme-muted"
              aria-label="Close certificate preview"
              onClick={() => {
                setSelectedCertificate(null);
              }}
            >
              x
            </button>

            <div className="certificate-preview-image relative overflow-hidden rounded-xl">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={1200}
                height={750}
                quality={100}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="pt-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold">
                {selectedCertificate.title}
              </h3>
              <p className="theme-muted mt-1">{selectedCertificate.issuer}</p>
              <p className="theme-muted mt-1">{selectedCertificate.issueDate}</p>
            </div>
          </div>
        </div>
      ) : null}

      <style jsx>{`
        .certificates-slider {
          scrollbar-width: none;
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

        .certificates-slider::-webkit-scrollbar {
          display: none;
        }

        .certificate-arrow {
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
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .certificates-carousel:hover .certificate-arrow,
        .certificates-carousel:focus-within .certificate-arrow {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .certificate-arrow:hover {
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
        }

        .certificate-arrow-left {
          left: 0.5rem;
        }

        .certificate-arrow-right {
          right: 0.5rem;
        }

        .certificates-card {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .certificates-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.12);
        }

        .certificates-card:hover :global(img) {
          transform: scale(1.03);
        }

        .certificates-card button {
          appearance: none;
          background: transparent;
          border: 0;
          padding: 0;
        }

        .certificate-image-frame {
          background: transparent;
          padding: 0;
        }

        .certificate-image-frame-badge {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .certificate-preview {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(6px);
        }

        .certificate-preview-panel {
          position: relative;
          width: min(100%, 860px);
          max-height: 90vh;
          overflow: auto;
        }

        .certificate-preview-image {
          background: rgba(255, 255, 255, 0.96);
        }

        .certificate-preview-close {
          position: absolute;
          top: 0.75rem;
          right: 0.9rem;
          z-index: 1;
          font-size: 1.1rem;
          line-height: 1;
          text-transform: uppercase;
        }

        @media (prefers-reduced-motion: reduce) {
          .certificates-card,
          .certificates-card :global(img) {
            transition: none;
          }
        }

        @media (max-width: 639px) {
          .certificate-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
