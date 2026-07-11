"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Home,
  Info,
  HeartPulse,
  Flag,
  BookMarked,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About", icon: Info },
  { href: "#expertise", label: "Expertise", icon: HeartPulse },
  { href: "#journey", label: "Journey", icon: Flag },
  { href: "#academics", label: "Academics", icon: BookMarked },
  { href: "#contact", label: "Contact", icon: PhoneCall },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled || menuOpen ? "glass-nav" : "";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-5 md:px-10">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5">
          <span className="shadow-glow-sm grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg transition-transform duration-500 group-hover:rotate-90">
            <Image src="/favicon.svg" alt="" width={36} height={36} className="h-full w-full" />
          </span>
          <span className="font-display text-base font-bold tracking-tight whitespace-nowrap sm:text-lg">
            Dr. Achuth S. Nayak
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#home"
            className="flex items-center gap-1.5 rounded-full bg-teal-400 px-3.5 py-1.5 text-xs font-semibold text-ink transition-transform duration-150 hover:scale-[1.04]"
          >
            <Home size={14} strokeWidth={1.5} />
            Home
          </a>
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-1.5 rounded-full border border-ink/12 px-3.5 py-1.5 text-xs font-medium text-mist transition-colors duration-150 hover:border-teal-400/35 hover:bg-teal-400/8 hover:text-teal-500"
            >
              <Icon size={14} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="shadow-glow-sm hidden h-10 items-center gap-2 rounded-full bg-teal-400 px-5 text-sm font-semibold text-ink transition-all duration-300 hover:scale-[1.04] hover:bg-teal-300 hover:text-white md:inline-flex"
          >
            <PhoneCall size={16} strokeWidth={2} />
            Get in Touch
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-teal-400/10 hover:text-teal-400 lg:hidden"
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="glass-nav border-t border-ink/10 lg:hidden">
          <div className="mx-auto flex w-full max-w-container flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 rounded-md px-3 py-3 text-base font-medium text-mist transition-colors hover:bg-teal-400/10 hover:text-teal-400"
              >
                <Icon size={18} strokeWidth={1.5} />
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-teal-400 font-semibold text-ink"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
