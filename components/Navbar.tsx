"use client";

import React, { useState } from "react";
import { IconGithub, IconMail } from "./Icons";

const navItems = [
  { name: "About", href: "#about" },
  { name: "News", href: "#news" },
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Awards", href: "#awards" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-slate-200/80 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#about"
            className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors"
          >
            Guoqing (KuoCh&apos;ing) Zhang
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Kyoto Univ · Ph.D.
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-2.5 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Quick Social Icons & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/KuoChing-cmd"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="GitHub"
          >
            <IconGithub className="w-4 h-4" />
          </a>
          <a
            href="mailto:kuochingchang@agent.soc.i.kyoto-u.ac.jp"
            aria-label="Email KuoCh'ing Chang"
            className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            title="Send Email"
          >
            <IconMail className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-4 space-y-1 shadow-lg backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
