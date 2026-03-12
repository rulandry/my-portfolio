"use client";

import { FormEvent, useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const phoneNumber = "+250782150042";
const emailAddress = "rulandry10@gmail.com";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | "";
    message: string;
  }>({ type: "", message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPhoneQr, setShowPhoneQr] = useState(false);
  const [showContactNotice, setShowContactNotice] = useState(false);

  useEffect(() => {
    if (!status.message) return;
    const timeout = setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPhoneQr(false);
        setShowContactNotice(false);
      }
    };

    if (showPhoneQr || showContactNotice) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showPhoneQr, showContactNotice]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Temporary behavior:
    // Instead of sending the message to the backend, we show a modal explaining
    // that direct form messaging is temporarily unavailable on the current hosting setup.
    setShowContactNotice(true);

    // Optional: keep a small info status under the form as well.
    setStatus({
      type: "info",
      message:
        "Direct form sending is temporarily unavailable. Please use email or phone for now.",
    });

    // ------------------------------------------------------------------
    // COMMENTED OUT ON PURPOSE
    // The code below is the real backend submission logic.
    // It sends the form data to your FastAPI backend API.
    // We are keeping it here for later use when you upgrade hosting
    // or switch to an email API service.
    // ------------------------------------------------------------------

    /*
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          Array.isArray(data.detail)
            ? data.detail
                .map((item: { loc?: unknown[]; msg?: string }) => {
                  const field = item?.loc?.[item.loc.length - 1] ?? "field";
                  return `${field}: ${item.msg ?? "Invalid value"}`;
                })
                .join(" | ")
            : data.detail || data.message || "Failed to send message."
        );
      }

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  return (
    <footer id="contact" className="py-10 sm:py-12 px-4 sm:px-6 border-t theme-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6">
            Contact Me
          </h2>

          <p className="theme-muted text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed px-2 sm:px-0">
            I&apos;m open to opportunities in Azure support, Microsoft 365,
            cloud administration, identity management, and security-focused
            roles. If you would like to connect, collaborate, or discuss a
            project, feel free to reach out.
          </p>

          <div className="space-y-3 flex flex-col items-center">
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-3 text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors break-all text-center"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m22 8-10 7L2 8"
                />
              </svg>
              <span>{emailAddress}</span>
            </a>

            <button
              type="button"
              onClick={() => setShowPhoneQr(true)}
              className="flex items-center gap-3 text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.27a2 2 0 0 1 2.11-.45c.85.28 1.73.49 2.63.61A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <span>{phoneNumber}</span>
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-5 sm:space-y-6 mb-10 sm:mb-12"
        >
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full rounded-xl theme-panel border theme-border px-4 py-3 text-sm sm:text-base placeholder:text-gray-400 outline-none focus:border-purple-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl theme-panel border theme-border px-4 py-3 text-sm sm:text-base placeholder:text-gray-400 outline-none focus:border-purple-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength={3}
            className="w-full rounded-xl theme-panel border theme-border px-4 py-3 text-sm sm:text-base placeholder:text-gray-400 outline-none focus:border-purple-400"
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            rows={6}
            className="w-full rounded-xl theme-panel border theme-border px-4 py-3 text-sm sm:text-base placeholder:text-gray-400 outline-none focus:border-purple-400 resize-none"
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status.message && (
            <div
              className={`text-center text-sm px-4 py-3 rounded-xl border ${
                status.type === "success"
                  ? "bg-green-500/10 border-green-500/30 text-green-400"
                  : status.type === "info"
                  ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-300"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">
          <a
            href={`mailto:${emailAddress}`}
            className="group relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full theme-panel border theme-border hover:scale-105 transition-all"
            aria-label="Email"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m22 8-10 7L2 8"
              />
            </svg>
            <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/85 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200">
              Send Email
            </span>
          </a>

          <button
            type="button"
            onClick={() => setShowPhoneQr(true)}
            className="group relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full theme-panel border theme-border hover:scale-105 transition-all"
            aria-label="Phone QR"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.27a2 2 0 0 1 2.11-.45c.85.28 1.73.49 2.63.61A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/85 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200">
              Call me
            </span>
          </button>

          <a
            href="/Landry-Rugomoka-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full theme-panel border theme-border hover:scale-105 transition-all"
            aria-label="Download CV"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
            </svg>
            <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/85 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200">
              Download CV
            </span>
          </a>

          <a
            href="https://github.com/rulandry"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full theme-panel border theme-border hover:scale-105 transition-all"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/85 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200">
              View GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/landry-rugomoka-374b37272"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full theme-panel border theme-border hover:scale-105 transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/85 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200">
              View LinkedIn
            </span>
          </a>
        </div>

        <div className="text-center mt-10 sm:mt-12 pt-6 sm:pt-8 border-t theme-border">
          <p className="theme-muted text-xs sm:text-sm px-2">
            © {new Date().getFullYear()} Landry Rugomoka. All rights reserved.
          </p>
        </div>
      </div>

      {showPhoneQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 sm:px-6"
          onClick={() => setShowPhoneQr(false)}
        >
          <div
            className="theme-panel-strong border theme-border rounded-2xl p-5 sm:p-6 max-w-sm w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPhoneQr(false)}
              className="absolute top-3 right-3 theme-muted hover:text-current text-xl"
              aria-label="Close QR modal"
            >
              ×
            </button>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3">Scan to Call</h3>
            <p className="theme-muted text-sm sm:text-base mb-5">
              Scan this QR code to open the dial pad.
            </p>

            <div className="bg-white inline-flex p-3 sm:p-4 rounded-xl max-w-full">
              <QRCodeSVG value={`tel:${phoneNumber}`} size={160} />
            </div>

            <p className="mt-4 text-sm sm:text-base text-purple-400 break-all">
              {phoneNumber}
            </p>

            <a
              href={`tel:${phoneNumber}`}
              className="inline-block mt-5 w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      )}

      {showContactNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 sm:px-6"
          onClick={() => setShowContactNotice(false)}
        >
          <div
            className="theme-panel-strong border theme-border rounded-2xl p-6 sm:p-7 max-w-lg w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowContactNotice(false)}
              className="absolute top-3 right-3 theme-muted hover:text-current text-xl"
              aria-label="Close notice modal"
            >
              ×
            </button>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400">
              Messaging temporarily unavailable
            </h3>

            <p className="theme-muted text-sm sm:text-base leading-relaxed mb-6">
              Direct form sending is not available at the moment.
              Please feel free to reach out directly by email or phone instead.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${emailAddress}`}
                className="block w-full rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium px-5 py-3 transition-colors"
              >
                Email Me
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="block w-full rounded-xl theme-panel border theme-border px-5 py-3 hover:border-purple-400 transition-colors"
              >
                Call Me
              </a>
            </div>

            <p className="text-xs sm:text-sm theme-muted">
              This form submission logic will be re-enabled later. Thank you!
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}