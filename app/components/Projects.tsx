import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Personal Vault App",
    description:
      "A secure personal vault application built to store sensitive personal information in a protected environment. The project focuses on privacy, authentication, controlled access, and backend logic, reflecting my interest in secure software design, database integration, and practical cybersecurity-oriented development.",
    link: "https://github.com/rulandry",
    image: "/projects/vlt.png",
    tags: ["Python", "FastAPI", "Authentication", "Security", "SQL"],
  },
  {
    id: 2,
    title: "Loan Tracker App",
    description:
      "A loan tracking application developed to help monitor payments, balances, and financial records in a clear and organized way. This project demonstrates my ability to build practical solutions with Python, handle structured data, and design applications that solve real everyday problems through simple and effective user-focused functionality.",
    link: "https://github.com/rulandry",
    image: "/projects/loan.png",
    tags: ["Python", "Tkinter", "JSON", "Finance Tracking", "UI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 text-center">
          <p className="text-purple-400 text-base sm:text-lg lg:text-xl mb-3 font-medium">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Projects that reflect my interest in secure systems, practical tools,
            and user-focused solutions
          </h2>
          <p className="theme-muted text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            These projects highlight my hands-on work in building useful
            applications while growing my skills in software development,
            security, and problem solving.
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

                  {project.link && (
                    <div className="flex justify-center lg:justify-start gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
                        aria-label={`Visit ${project.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span className="text-sm sm:text-base">View Project</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
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
    </section>
  );
}