"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    overview: string;
    audience: string;
    problem: string;
    features: string[];
    value: string;
  };
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Personal Vault App",
    description:
      "A secure personal vault application designed to help keep important personal information private, organized, and accessible only to the right person.",
    image: "/projects/vlt.png",
    tags: ["Privacy", "Personal Records", "Secure Access", "Organization"],
    details: {
      overview:
        "The Personal Vault App is a digital space designed to help a person keep important private information in one secure and organized place. Instead of storing sensitive details in scattered notes, documents, or memory, the app gives the user a single location where personal records can be managed more safely and more clearly.",
      audience:
        "This app is intended for individuals who want a safer and more organized way to manage private personal information such as important records, confidential notes, or details they do not want easily exposed.",
      problem:
        "Many people keep important personal information in places that are difficult to manage or not very secure. This increases the chance of losing information, forgetting key details, or exposing private data in ways they did not intend.",
      features: [
        "A protected space where private information can be stored in an organized way",
        "Controlled access so the information is intended for the owner only",
        "A cleaner way to manage important personal details in one place",
        "A structured layout that helps reduce confusion and makes records easier to find",
        "A design approach focused on privacy, clarity, and personal control",
      ],
      value:
        "The app gives users more confidence and peace of mind by helping them keep sensitive information private, organized, and easier to manage. It turns a scattered and risky process into something more secure and practical.",
    },
  },
  {
    id: 2,
    title: "LoanLux",
    description:
      "A practical application built to help track loans, payments, and remaining balances in a simple, clear, and organized way.",
    image: "/projects/loan.png",
    tags: ["Finance Tracking", "Payments", "Organization", "Personal Use"],
    details: {
      overview:
        "LoanLux is designed to help a user keep a clear record of borrowed money, payments made, and the balance still remaining. It gives a simpler and more understandable way to monitor loan progress without relying on scattered notes or manual calculations.",
      audience:
        "This app is useful for individuals who want a straightforward way to manage loan records, follow payment progress, and stay aware of what has already been paid and what is still due.",
      problem:
        "Loan information can become difficult to follow when payments are recorded manually or spread across different places. This can lead to confusion, missed details, and a poor understanding of the remaining balance.",
      features: [
        "A clear record of total loan amount, payments made, and current balance",
        "An organized view of payment history to make tracking easier",
        "A simpler way to understand financial progress over time",
        "A structured format that reduces mistakes from manual tracking",
        "A practical design focused on clarity and day-to-day usefulness",
      ],
      value:
        "The app helps users stay organized and more financially aware by making loan tracking easier to understand. It supports better record keeping, clearer payment visibility, and more confidence when following repayment progress.",
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 text-center">
          <p className="text-purple-400 text-base sm:text-lg lg:text-xl mb-3 font-medium">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Projects that reflect my interest in practical problem solving and
            user-focused solutions
          </h2>
          <p className="theme-muted text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            These projects highlight my work in building useful solutions that
            are focused on real needs, clarity, and everyday usefulness.
          </p>
        </div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-16 sm:mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-base sm:text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full theme-panel border theme-border text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative z-10 mb-5 sm:mb-6">
                    <div
                      className={`theme-panel border theme-border rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg ${
                        isEven
                          ? "lg:ml-[-10%] xl:ml-[-20%]"
                          : "lg:w-[calc(100%+10%)] xl:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="theme-muted text-sm sm:text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-start gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm sm:text-base font-medium transition-colors"
                      aria-label={`View details for ${project.title}`}
                    >
                      View Project
                    </button>
                  </div>
                </div>

                <div
                  className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden theme-panel p-2 sm:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md px-4 sm:px-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#12091f]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-6 sm:p-8 lg:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition flex items-center justify-center"
              aria-label="Close project details"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            <div className="mb-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-purple-300/80 mb-3">
                Project Overview
              </p>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-400 leading-tight">
                {selectedProject.title}
              </h3>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  What this app is about
                </h4>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {selectedProject.details.overview}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Who it is for
                </h4>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {selectedProject.details.audience}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Problem it helps solve
                </h4>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {selectedProject.details.problem}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Main features
                </h4>
                <ul className="space-y-3 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {selectedProject.details.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Why it matters
                </h4>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {selectedProject.details.value}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
