"use client";

import { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  description: string;
}

const skills: SkillItem[] = [
  {
    name: "Azure",
    description:
      "Microsoft Azure is an enterprise cloud platform that provides infrastructure, networking, identity, compute, storage, monitoring, and security services used to build, host, manage, and scale modern cloud-based solutions.",
  },
  {
    name: "Microsoft 365",
    description:
      "Microsoft 365 is a cloud productivity ecosystem that combines communication, collaboration, document management, and administrative services across platforms such as Exchange Online, SharePoint Online, Teams, OneDrive, and Office applications.",
  },
  {
    name: "Microsoft Entra ID",
    description:
      "Microsoft Entra ID is a cloud identity and access management platform used to manage authentication, authorization, single sign-on, conditional access, user lifecycle, and secure identity governance across modern enterprise environments.",
  },
  {
    name: "Windows Troubleshooting",
    description:
      "Windows troubleshooting involves systematic diagnosis and resolution of operating system, application, update, performance, authentication, and endpoint issues to restore usability, maintain productivity, and reduce operational disruption.",
  },
  {
    name: "Python",
    description:
      "Python is a versatile programming language widely used for automation, scripting, backend services, APIs, tooling, data handling, and security-related workflows, making it highly valuable for practical engineering and operations work.",
  },
  {
    name: "FastAPI",
    description:
      "FastAPI is a modern Python framework for building high-performance APIs with clear routing, strong validation, automatic documentation, and clean service architecture, making it well suited for production backend development.",
  },
  {
    name: "Next.js",
    description:
      "Next.js is a React framework used to build modern web applications with routing, server rendering, optimization, API integration, and deployment-ready architecture suitable for professional and scalable frontend solutions.",
  },
  {
    name: "Cloud Security",
    description:
      "Cloud security focuses on protecting cloud-hosted identities, workloads, applications, configurations, and data through secure design, access controls, monitoring, threat reduction, and strong operational security practices.",
  },
  {
    name: "Identity & Access Management",
    description:
      "Identity and Access Management is the discipline of controlling who can access systems, applications, and data through authentication, authorization, least privilege, role-based access, multifactor authentication, and lifecycle governance.",
  },
  {
    name: "Exchange Online",
    description:
      "Exchange Online is Microsoft’s enterprise cloud messaging platform that delivers mailbox services, mail flow management, calendaring, security controls, and administrative capabilities for business communication environments.",
  },
  {
    name: "SharePoint Online",
    description:
      "SharePoint Online is a cloud-based collaboration and content management platform used for document control, intranet solutions, structured information sharing, and team-based productivity across enterprise organizations.",
  },
  {
    name: "Teams",
    description:
      "Microsoft Teams is a collaboration platform that supports messaging, meetings, calling, file sharing, and integrated teamwork, serving as a central communication layer in modern workplace environments.",
  },
  {
    name: "Technical Support",
    description:
      "Technical support is the practice of diagnosing, resolving, and communicating solutions for system, application, and service issues while maintaining service quality, user confidence, and efficient operational outcomes.",
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  useEffect(() => {
    if (!selectedSkill) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSkill(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedSkill]);

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-purple-400 text-base sm:text-lg mb-3 font-medium">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Core Technologies and Professional Focus Areas
          </h2>
          <p className="theme-muted text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Select a skill to view a concise explanation of its technical role
            and relevance within modern IT, cloud, and security environments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill) => (
            <button
              key={skill.name}
              type="button"
              onClick={() => setSelectedSkill(skill)}
              className="px-4 py-2 rounded-full theme-panel border theme-border text-sm sm:text-base hover:scale-105 hover:border-purple-400 hover:text-purple-400 transition"
            >
              {skill.name}
            </button>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 sm:px-6"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-[#12091f]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-6 sm:p-8 lg:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition flex items-center justify-center"
              aria-label="Close skill details"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            <div className="mb-5 sm:mb-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-purple-300/80 mb-3">
                Skill Overview
              </p>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-400 leading-tight">
                {selectedSkill.name}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
              <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
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
