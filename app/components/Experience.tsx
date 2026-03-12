import Image from "next/image";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Azure Support Engineer",
    description:
      "Provide technical support across Microsoft Azure environments by diagnosing service issues, analyzing incidents, validating platform behavior, and guiding customers toward stable, scalable, and operationally sound cloud solutions.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Microsoft 365 Support Engineer",
    description:
      "Support Microsoft 365 workloads including Exchange Online, SharePoint Online, Teams, and Office services, with focus on tenant functionality, service reliability, administrative troubleshooting, and secure configuration practices.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Windows & End-User Support",
    description:
      "Resolve Windows and user productivity issues through structured troubleshooting, system analysis, access restoration, client communication, and practical remediation that minimizes disruption and improves user experience.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Cloud Security & Identity Focus",
    description:
      "Actively building technical depth in cloud security, Microsoft Entra ID, identity and access management, AWS, and security operations, with strong interest in secure administration, access control, and modern defensive practices.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 text-center">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="theme-panel border theme-border rounded-xl p-5 sm:p-6 hover:shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left"
            >
              <div className="shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {card.title}
                </h3>

                <p className="theme-muted text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}