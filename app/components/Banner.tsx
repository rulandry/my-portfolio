"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const texts = [
  "Azure Support Engineer",
  "Microsoft 365 Admin",
  "Cloud & Security Enthusiast",
];

export default function Banner() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setIsDeleting(true);
          setTypingSpeed(50);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTypingSpeed(100);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, displayedText.length === currentText.length && !isDeleting ? 2000 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-10 lg:gap-16">
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto order-1 lg:order-2">
            <div className="relative">
              <div className="lg:hidden mb-4 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border theme-border theme-panel px-4 py-2">
                  <span className="text-sm sm:text-base">
                    Hello! I am{" "}
                    <span className="text-purple-400 font-medium">Landry Rugomoka</span>
                  </span>
                </div>
              </div>

              <div className="relative mx-auto w-40 sm:w-56 md:w-64 mt-2 sm:mt-0 mb-10 sm:mb-8">
                <Image
                  src="/assets/lan.png"
                  alt="Landry Rugomoka portrait"
                  width={300}
                  height={300}
                  className="absolute inset-0 w-full h-auto"
                  priority
                />

                <Image
                  src="/assets/me-glow.png"
                  alt="Landry Rugomoka portrait glow"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-5 sm:space-y-6 text-center lg:text-left order-2 lg:order-1 mt-2 sm:mt-0">
            <div className="hidden lg:inline-block relative">
              <p className="text-lg">
                Hello! I Am{" "}
                <span className="text-purple-400">Landry Rugomoka</span>
              </p>
            </div>

            <div>
              <p className="text-base sm:text-xl lg:text-2xl theme-muted mb-3">
                An IT professional focused on
              </p>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight font-semibold leading-tight">
                Cloud support,
                <br />
                identity, and{" "}
                <span className="relative inline-block">
                  <span className="relative bg-linear-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    security
                  </span>
                </span>
                .
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg theme-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                I build my career around solving technical problems, improving
                user experience, and growing in cloud and cybersecurity.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-8 sm:pt-10 lg:pt-12 text-center lg:text-left">
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto lg:mx-0">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-sm sm:text-base lg:text-xl theme-muted tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently working in</span>
            <span className="text-blue-400 font-semibold">
              Azure and Microsoft cloud support
            </span>
          </p>

          <p className="text-sm sm:text-base lg:text-lg theme-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
            I have experience supporting Microsoft 365 environments, Windows
            users, and cloud-based services, with growing specialization in
            Microsoft Entra ID, Azure, and security-focused operations.
          </p>
        </div>
      </div>
    </section>
  );
}
