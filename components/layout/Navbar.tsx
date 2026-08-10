"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverImg, setHoverImg] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      // move focus into the menu
      requestAnimationFrame(() => {
        menuRef.current?.querySelector<HTMLElement>("a")?.focus();
      });
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        // trap focus inside menu + toggle button
        const focusables = [
          ...(menuRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []),
          toggleRef.current,
        ].filter(Boolean) as HTMLElement[];
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? "bg-bg/70 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="TMD House — início" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.jpg"
              alt="Logo TMD House"
              width={44}
              height={44}
              className="rounded-full"
              priority
            />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em]">
              TMD House
            </span>
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/contato"
              className="liquid-btn hidden rounded-full px-6 py-2.5 font-display text-xs font-medium uppercase tracking-[0.18em] sm:inline-flex"
            >
              <span className="relative z-10">Agende uma aula</span>
            </Link>
            <button
              ref={toggleRef}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="fullscreen-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="group flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-line bg-surface/50 backdrop-blur-md"
              data-cursor={open ? "CLOSE" : "MENU"}
            >
              <span
                className={`h-px w-5 bg-fg transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-5 bg-fg transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            id="fullscreen-menu"
            key="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg2"
            aria-label="Menu principal"
          >
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <AnimatePresence>
                {hoverImg && (
                  <motion.div
                    key={hoverImg}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image src={hoverImg} alt="" fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-bg/30" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative flex h-full flex-col justify-center px-6 md:px-16 lg:px-24">
              <ul className="space-y-1 md:space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      onMouseEnter={() => setHoverImg(link.img)}
                      onMouseLeave={() => setHoverImg(null)}
                      data-cursor="OPEN"
                      className="group flex items-baseline gap-4"
                    >
                      <span className="font-display text-xs text-green-accent">
                        0{i + 1}
                      </span>
                      <span className="font-display text-5xl font-semibold uppercase leading-[1.05] tracking-tight text-fg-muted transition-colors duration-300 group-hover:text-fg md:text-7xl lg:text-8xl">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-fg-muted"
              >
                <span>@tmdhouse</span>
                <span>#nascidosparavencer</span>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
