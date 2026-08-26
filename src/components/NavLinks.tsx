"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ authButton }: { authButton: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/assessment", label: "Assessment" },
    { href: "/roadmap", label: "Learning Roadmap" },
    { href: "/results", label: "Hasil Saya" },
    { href: "/profil", label: "Profil" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full relative">
      
      {/* 1. Div Logo */}
      <div className="flex-1 flex justify-start">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105 animate-slide-from-left"
        >
          <img src="/Asset 1.png" alt="Gapless Explorer Logo" className="h-10 w-auto" />
          <span className="font-bold text-slate-900 text-2xl">Gapless</span>
        </Link>
      </div>

      {/* 2. Div Links (Desktop) */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-7 animate-slide-from-right">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[15px] whitespace-nowrap transition-colors ${
              pathname === link.href
                ? "text-slate-900 font-semibold"
                : "text-slate-700 hover:text-slate-900 font-normal"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* 3. Div Login & Mobile Toggle */}
      <div className="flex-1 flex justify-end items-center gap-4 animate-slide-from-right">
        {authButton}
        
        {/* Mobile Hamburger Toggle (only visible on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-100 py-4 px-6 flex flex-col gap-4 md:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-base transition-colors ${
                pathname === link.href
                  ? "text-slate-900 font-semibold"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
