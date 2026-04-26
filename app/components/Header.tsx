"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function NavIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 shrink-0">
      {children}
    </span>
  );
}

function NavLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="nav-label pointer-events-none absolute left-1/2 top-[calc(100%+0.35rem)] -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs opacity-0 shadow-lg transition-all duration-200 z-50">
      {children}
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 theme-header backdrop-blur-sm border-b theme-border">
      <nav className="px-4 sm:px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-bold hover:text-purple-400 transition-colors"
            onClick={closeMenu}
          >
            <span className="block sm:hidden text-xl leading-tight">
              Landry
            </span>
            <span className="hidden sm:block text-base md:text-xl lg:text-2xl whitespace-nowrap">
              Welcome to my portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <ul className="flex items-center gap-4 lg:gap-5 list-none m-0 p-0 whitespace-nowrap">
              <li>
                <Link href="#home" aria-label="Home" title="Home" className="nav-icon-link relative hover:text-purple-400 transition-colors inline-flex items-center justify-center w-9 h-9">
                  <NavIcon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75V21h13.5V9.75" />
                    </svg>
                  </NavIcon>
                  <NavLabel>Home</NavLabel>
                </Link>
              </li>
              <li>
                <Link href="#about" aria-label="About" title="About" className="nav-icon-link relative hover:text-purple-400 transition-colors inline-flex items-center justify-center w-9 h-9">
                  <NavIcon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="3.25" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 20a7 7 0 0 1 14 0" />
                    </svg>
                  </NavIcon>
                  <NavLabel>About</NavLabel>
                </Link>
              </li>
              <li>
                <Link href="#skills" aria-label="Skills" title="Skills" className="nav-icon-link relative hover:text-purple-400 transition-colors inline-flex items-center justify-center w-9 h-9">
                  <NavIcon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 6 18 10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 14 10 18" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 20 20 8.5a2.121 2.121 0 1 0-3-3L5.5 17a2.121 2.121 0 0 0 3 3Z" />
                    </svg>
                  </NavIcon>
                  <NavLabel>Skills</NavLabel>
                </Link>
              </li>
              <li>
                <Link href="#experience" aria-label="Experience" title="Experience" className="nav-icon-link relative hover:text-purple-400 transition-colors inline-flex items-center justify-center w-9 h-9">
                  <NavIcon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  </NavIcon>
                  <NavLabel>Experience</NavLabel>
                </Link>
              </li>
              <li>
                <Link href="#certificates" aria-label="Certs&Badges" title="Certs&Badges" className="nav-icon-link relative hover:text-purple-400 transition-colors inline-flex items-center justify-center w-9 h-9">
                  <NavIcon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m10 12-1 8 3-2 3 2-1-8" />
                    </svg>
                  </NavIcon>
                  <NavLabel>Certs&Badges</NavLabel>
                </Link>
              </li>
              <li>
                <Link href="#projects" aria-label="Projects" title="Projects" className="nav-icon-link relative hover:text-purple-400 transition-colors inline-flex items-center justify-center w-9 h-9">
                  <NavIcon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5A1.5 1.5 0 0 1 4.5 6H9l1.5 2H19.5A1.5 1.5 0 0 1 21 9.5v8A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-10Z" />
                    </svg>
                  </NavIcon>
                  <NavLabel>Projects</NavLabel>
                </Link>
              </li>
              <li>
                <Link href="#contact" aria-label="Contact Me" title="Contact Me" className="nav-icon-link relative hover:text-purple-400 transition-colors inline-flex items-center justify-center w-9 h-9">
                  <NavIcon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                    </svg>
                  </NavIcon>
                  <NavLabel>Contact Me</NavLabel>
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <button
              type="button"
              className="text-current"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 rounded-xl border theme-border theme-panel p-4">
            <ul className="flex flex-col gap-4">
              <li><Link href="#home" onClick={closeMenu} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2"><NavIcon><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75V21h13.5V9.75" /></svg></NavIcon><span>Home</span></Link></li>
              <li><Link href="#about" onClick={closeMenu} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2"><NavIcon><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="3.25" /><path strokeLinecap="round" strokeLinejoin="round" d="M5 20a7 7 0 0 1 14 0" /></svg></NavIcon><span>About</span></Link></li>
              <li><Link href="#skills" onClick={closeMenu} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2"><NavIcon><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 6 18 10" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 14 10 18" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.5 20 20 8.5a2.121 2.121 0 1 0-3-3L5.5 17a2.121 2.121 0 0 0 3 3Z" /></svg></NavIcon><span>Skills</span></Link></li>
              <li><Link href="#experience" onClick={closeMenu} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2"><NavIcon><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg></NavIcon><span>Experience</span></Link></li>
              <li><Link href="#certificates" onClick={closeMenu} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2"><NavIcon><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="m10 12-1 8 3-2 3 2-1-8" /></svg></NavIcon><span>Certs&Badges</span></Link></li>
              <li><Link href="#projects" onClick={closeMenu} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2"><NavIcon><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5A1.5 1.5 0 0 1 4.5 6H9l1.5 2H19.5A1.5 1.5 0 0 1 21 9.5v8A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-10Z" /></svg></NavIcon><span>Projects</span></Link></li>
              <li><Link href="#contact" onClick={closeMenu} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2"><NavIcon><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" /></svg></NavIcon><span>Contact Me</span></Link></li>
            </ul>
          </div>
        )}

        <style jsx>{`
          .nav-icon-link:hover .nav-label,
          .nav-icon-link:focus-visible .nav-label {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }

          .nav-label {
            transform: translateX(-50%) translateY(-4px);
            background: var(--panel-strong);
            color: var(--foreground);
            border: 1px solid var(--border);
          }
        `}</style>
      </nav>
    </header>
  );
}
