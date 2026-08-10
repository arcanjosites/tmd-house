"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDone(true);
      return;
    }
    const start = performance.now();
    const dur = 1800;
    let raf: number;
    let timeout: ReturnType<typeof setTimeout>;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timeout = setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          aria-hidden="true"
        >
          {/* tatami lines */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(113,193,138,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(113,193,138,0.6) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/logo.jpg"
              alt=""
              width={110}
              height={110}
              className="rounded-full"
              priority
            />
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 flex items-end justify-between px-8 md:px-14">
            <p className="font-display text-xs uppercase tracking-[0.4em] text-fg-muted">
              Instituto Brazilian Jiu-Jitsu
            </p>
            <p className="font-display text-6xl font-semibold tabular-nums text-fg md:text-8xl">
              {count}
            </p>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-px bg-green-highlight"
            style={{ width: `${count}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
