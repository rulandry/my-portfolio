"use client";

import { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  description: string;
}

const skills: SkillItem[] = [
  {
    name: "Azure Administration",
    description:
      "Microsoft Azure is a cloud computing platform that provides services for hosting applications, virtual machines, networking, storage, security, identity, monitoring, and many other enterprise cloud solutions.",
  },
  {
    name: "Microsoft 365 Administration",
    description:
      "Microsoft 365 is a cloud-based productivity platform that includes services such as Exchange Online, SharePoint Online, Teams, OneDrive, and Office apps. It helps organizations collaborate, communicate, and manage work securely.",
  },
  {
    name: "Windows Troubleshooting",
    description:
      "Windows troubleshooting involves diagnosing and resolving operating system, user profile, update, performance, login, application, and connectivity issues to keep users productive and systems stable.",
  },
  {
    name: "Python",
    description:
      "Python is a versatile programming language used for automation, scripting, backend development, APIs, data handling, and security-related projects. It is known for being readable and efficient for practical development.",
  },
  {
    name: "FastAPI",
    description:
      "FastAPI is a modern Python framework used for building fast and efficient APIs. It supports data validation, clean routing, automatic documentation, and is ideal for backend services like contact forms and application APIs.",
  },
  {
    name: "Next.js",
    description:
      "Next.js is a React framework used for building modern web applications. It supports server-side rendering, routing, API integration, performance optimization, and is a strong choice for professional portfolio and production websites.",
  },
  {
    name: "Cloud Security",
    description:
      "Cloud security focuses on protecting cloud environments, identities, applications, and data. It includes secure access, monitoring, threat detection, least privilege, identity controls, and security best practices.",
  },
  {
    name: "Identity & Access Management",
    description:
      "Identity and Access Management is the process of controlling who can access systems and resources. It includes authentication, authorization, MFA, role-based access, SSO, and lifecycle management of user identities.",
  },
  {
    name: "Exchange Online Administration",
    description:
      "Exchange Online is Microsoft’s cloud email platform. It provides mailbox hosting, mail flow management, security features, calendaring, and administrative controls for enterprise messaging environments.",
  },
  {
    name: "SharePoint Online Administration",
    description:
      "SharePoint Online is a Microsoft 365 service used for document management, intranet collaboration, file sharing, and team content organization within cloud-based work environments.",
  },
  {
    name: "Microsoft Teams Administration",
    description:
      "Microsoft Teams is a collaboration platform for meetings, chat, calling, teamwork, and app integration. It is widely used for communication and productivity in modern workplaces.",
  },
  {
    name: "Technical Support",
    description:
      "Technical support involves assisting users and organizations in diagnosing, resolving, and preventing technology issues while maintaining a strong focus on communication, problem solving, and service quality.",
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
            Core technologies and areas of focus
          </h2>
          <p className="theme-muted text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Click on any skill to view a short explanation of what it is about.
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