"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Info,
  HeartPulse,
  Flag,
  BookMarked,
  PhoneCall,
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

  // Lock body scroll while the mobile menu is open so the page behind the
  // overlay can't scroll, and restore it (and the scroll position) on close.
  useEffect(() => {
    if (!menuOpen) return;
    const { body } = document;
    const scrollY = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navBg = scrolled || menuOpen ? "glass-nav" : "";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-5 md:px-10">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5">
          <span className="shadow-glow-sm grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg transition-transform duration-500 group-hover:rotate-90">
            <Image src="/favicon.svg" alt="" width={36} height={36} className="h-full w-full" />
          </span>
          <span className="font-display truncate text-sm font-bold tracking-tight whitespace-nowrap sm:text-lg">
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
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-teal-400/10 active:bg-teal-400/15 lg:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              key="backdrop"
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 bottom-0 top-20 -z-10 cursor-default bg-ink/20 backdrop-blur-sm lg:hidden"
            />
            {/* Sliding panel */}
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="glass-nav overflow-hidden border-t border-ink/10 lg:hidden"
            >
              <motion.div
                className="mx-auto flex w-full max-w-container flex-col gap-1 px-5 py-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                  closed: {},
                }}
              >
                {[{ href: "#home", label: "Home", icon: Home }, ...NAV_LINKS].map(
                  ({ href, label, icon: Icon }) => (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -16 },
                      }}
                      className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-base font-medium text-mist transition-colors hover:bg-teal-400/10 hover:text-teal-500 active:bg-teal-400/15"
                    >
                      <Icon size={18} strokeWidth={1.5} className="text-teal-400" />
                      {label}
                    </motion.a>
                  )
                )}
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -16 },
                  }}
                  className="shadow-glow-sm mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal-400 font-semibold text-ink"
                >
                  <PhoneCall size={16} strokeWidth={2} />
                  Get in Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Animated hamburger ↔ close icon: two bars that cross into an X. */
function MenuIcon({ open }: { open: boolean }) {
  const bar = "absolute left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-current";
  const transition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const };
  return (
    <span className="relative block h-5 w-5 text-ink" aria-hidden="true">
      <motion.span
        className={bar}
        initial={false}
        animate={open ? { top: "50%", y: "-50%", rotate: 45 } : { top: "32%", y: "0%", rotate: 0 }}
        transition={transition}
      />
      <motion.span
        className={bar}
        style={{ top: "50%", y: "-50%" }}
        initial={false}
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.18 }}
      />
      <motion.span
        className={bar}
        initial={false}
        animate={open ? { top: "50%", y: "-50%", rotate: -45 } : { top: "68%", y: "0%", rotate: 0 }}
        transition={transition}
      />
    </span>
  );
}
