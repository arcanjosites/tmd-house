"use client";

import Link from "next/link";
import { useRef } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
};

export function LiquidButton({ href, children, className = "", size = "md" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      data-cursor="OPEN"
      className={`liquid-btn inline-flex items-center gap-3 rounded-full font-display font-medium uppercase tracking-[0.18em] text-fg ${
        size === "lg" ? "px-10 py-5 text-sm md:text-base" : "px-7 py-3.5 text-xs md:text-sm"
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 text-green-highlight" aria-hidden>
        →
      </span>
    </Link>
  );
}
