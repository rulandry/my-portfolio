import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Azure Support Engineer",
    description:
      "Providing technical support for Azure-related issues, helping customers troubleshoot cloud service problems, investigate incidents, and maintain reliable solutions across Microsoft cloud environments.",
    icon: "/cards/azure.webp",
    link: "https://learn.microsoft.com/azure/",
  },
  {
    id: 2,
    title: "Microsoft 365 Support Engineer",
    description:
      "Supported administrators and users across Microsoft 365 services including Exchange Online, SharePoint Online, Teams, and Office, with a focus on tenant functionality, secure configurations, and service troubleshooting.",
    icon: "/cards/admin.png",
    link: "https://www.microsoft.com/microsoft-365",
  },
  {
    id: 3,
    title: "Windows & End-User Support",
    description:
      "Delivered user-focused technical support by troubleshooting Windows issues, resolving system and access problems, and helping users maintain productivity through effective issue diagnosis and communication.",
    icon: "/cards/techsup.jpg",
    link: "https://www.microsoft.com/windows/",
  },
  {
    id: 4,
    title: "Cloud Security & Identity Growth",
    description:
      "Building hands-on knowledge in cybersecurity, cloud security, AWS, and identity management, with strong interest in SOC operations, Microsoft Entra ID, secure access, and modern cloud administration.",
    icon: "/cards/sec.jpg",
    link: "https://aws.amazon.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 text-center">
          Work Experience
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

                <p className="theme-muted text-sm sm:text-base mb-4 leading-relaxed">
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base transition-colors inline-block"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}