"use client";

import { useEffect, useState } from "react";
import InfiniteCarousel from "./InfiniteCarousel";

interface SkillItem {
  name: string;
  description: string;
}

const skills: SkillItem[] = [
  {
    name: "Azure",
    description:
      "Hands-on experience deploying and managing Azure resources, including virtual machines, virtual networks, and storage. Skilled in configuring cloud infrastructure, applying basic security controls, and troubleshooting performance and connectivity issues.",
  },
  {
    name: "Microsoft 365",
    description:
      "Experienced in administering Microsoft 365 services, supporting users, and resolving issues across Exchange Online, Teams, and SharePoint to ensure seamless collaboration and service availability.",
  },
  {
    name: "Microsoft Entra ID",
    description:
      "Managing identities, authentication methods, and access controls within Entra ID. Experienced in user lifecycle management, role assignments, and resolving identity-related access challenges.",
  },
  {
    name: "Active Directory Domain Services (AD DS)",
    description:
      "Administering on-premises Active Directory, including user and group management, OU structuring, and Group Policy configuration to enforce security and organizational policies.",
  },
  {
    name: "Hybrid Identity & Directory Synchronization (Entra ID ↔ AD DS)",
    description:
      "Hands-on experience configuring and managing directory synchronization using Azure AD Connect. Ensuring identity consistency across environments, troubleshooting sync issues, and maintaining a secure hybrid identity infrastructure.",
  },
  {
    name: "Cross-Tenant Synchronization (Microsoft Entra ID)",
    description:
      "Configuring and managing cross-tenant synchronization to enable secure collaboration between organizations, including user provisioning, lifecycle management, and access control across tenants.",
  },
  {
    name: "Identity & Access Management (IAM)",
    description:
      "Applying IAM principles such as role-based access control (RBAC) and least privilege to secure access to systems and data.",
  },
  {
    name: "Multi-Factor Authentication (MFA)",
    description:
      "Implementing and troubleshooting MFA to enhance account security, reduce unauthorized access risks, and support secure authentication processes.",
  },
  {
    name: "Conditional Access",
    description:
      "Designing and enforcing Conditional Access policies based on user risk, device compliance, and location to strengthen security posture.",
  },
  {
    name: "Identity Troubleshooting (Hybrid Environments)",
    description:
      "Diagnosing and resolving identity and synchronization issues, including login failures, sync errors, and access inconsistencies between AD DS and Entra ID.",
  },
  {
    name: "Cloud Security",
    description:
      "Applying cloud security best practices, including identity protection, secure configurations, and minimizing potential attack surfaces in Microsoft cloud environments.",
  },
  {
    name: "Security Monitoring & Incident Response",
    description:
      "Monitoring security alerts, identifying suspicious activities, and supporting initial investigation and response to potential security incidents.",
  },
  {
    name: "Log Analysis (KQL Basics)",
    description:
      "Analyzing logs using KQL to detect anomalies, troubleshoot issues, and support security investigations.",
  },
  {
    name: "Endpoint Security",
    description:
      "Understanding endpoint protection strategies, including system hardening, updates, and monitoring to reduce vulnerabilities.",
  },
  {
    name: "Windows Troubleshooting",
    description:
      "Diagnosing and resolving Windows OS issues, including system errors, performance degradation, configuration problems, and user profile issues. Includes troubleshooting hardware peripherals such as printers, scanners, and connectivity-related issues to ensure stable end-user environments.",
  },
  {
    name: "Technical Support",
    description:
      "Providing end-user support in enterprise environments, resolving technical issues efficiently while maintaining strong communication and customer satisfaction.",
  },
  {
    name: "Exchange Online",
    description:
      "Managing mailboxes, troubleshooting mail flow issues, and resolving email-related incidents.",
  },
  {
    name: "SharePoint Online",
    description:
      "Supporting SharePoint environments by managing permissions, resolving access issues, and enabling collaboration.",
  },
  {
    name: "Microsoft Teams",
    description:
      "Troubleshooting Teams-related issues including meetings, calls, and service integrations.",
  },
  {
    name: "Python",
    description:
      "Using Python for scripting, automation, and backend logic development to improve efficiency and problem-solving.",
  },
  {
    name: "FastAPI",
    description:
      "Developing high-performance APIs with clean architecture and efficient request handling.",
  },
  {
    name: "Next.js",
    description:
      "Building responsive and modern web applications with a focus on performance and user experience.",
  },
  {
    name: "Networking Fundamentals",
    description:
      "Understanding IP addressing, DNS, VPNs, and firewall concepts in cloud and enterprise environments.",
  },
  {
    name: "Virtualization (Cloud & VM Concepts)",
    description:
      "Working with virtual machines and understanding virtualization principles in cloud infrastructure.",
  },
  {
    name: "Authentication Protocols",
    description:
      "Understanding both cloud and on-premises authentication protocols used in enterprise environments. Includes OAuth, SAML, and OpenID Connect for modern identity federation, as well as Kerberos and NTLM for on-premises Active Directory authentication. Supports secure authentication, authorization, and identity trust across hybrid environments.",
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

        <InfiniteCarousel ariaLabel="skill" itemWidthClassName="w-auto">
          {skills.map((skill) => (
            <button
              key={skill.name}
              type="button"
              onClick={() => setSelectedSkill(skill)}
              className="px-4 py-2 rounded-full theme-panel border theme-border text-sm sm:text-base hover:scale-105 hover:border-purple-400 hover:text-purple-400 transition whitespace-nowrap"
            >
              {skill.name}
            </button>
          ))}
        </InfiniteCarousel>
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
              <span className="text-2xl leading-none">x</span>
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
