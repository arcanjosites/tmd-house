"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  kicker: string;
  title: string;
  text?: string;
  img: string;
  alt: string;
};

export function PageHero({ kicker, title, text, img, alt }: Props) {
  return (
    <section className="relative overflow-hidden" aria-label={title}>
      <div className="relative min-h-[75vh]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={img} alt={alt} fill priority sizes="100vw" className="object-cover opacity-45" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/30 to-bg" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-[1600px] flex-col justify-end px-6 pb-20 pt-40 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight"
          >
            {kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-6xl font-bold uppercase leading-[0.95] tracking-tight md:text-[8vw]"
          >
            {title}
          </motion.h1>
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 max-w-lg text-sm leading-relaxed text-fg-muted md:text-base"
            >
              {text}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
