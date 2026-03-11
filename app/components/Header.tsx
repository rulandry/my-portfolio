"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 theme-header backdrop-blur-sm border-b theme-border">
      <nav className="px-4 sm:px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="text-lg sm:text-2xl font-bold hover:text-purple-400 transition-colors"
            onClick={closeMenu}
          >
            Landry | Technical Support Engineer L-2
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li>
                <Link href="#home" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-purple-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-purple-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-purple-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
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
              <li>
                <Link href="#home" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}