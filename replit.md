# TMD House — Website Premium

## Overview
Cinematic, scroll-driven marketing site for the TMD House martial arts academy (Brazilian Jiu-Jitsu focus, plus Muay Thai, Karatê and Performance). Awwwards-style aesthetic inspired by landonorris.com: dark green palette, huge editorial typography, scroll-scrubbed hero, GSAP/Lenis animations. All copy is in Brazilian Portuguese (realistic placeholder content — instructors, schedules, contact are fictional until the client provides real data).

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- GSAP + ScrollTrigger, Lenis smooth scroll, Framer Motion
- Dev server: `npm run dev` on port 5000 (workflow "Start application")

## Structure
- `app/` — home + routes: jiu-jitsu, muay-thai, karate, performance, academia, horarios, contato
- `components/layout/` — Navbar (fullscreen menu), Footer, Preloader, custom Cursor
- `components/sections/` — Hero (canvas image-sequence scroll scrub), Manifesto, JiuJitsuSection (sticky), Modalidades, Professores, Faixas, Estrutura, PerformanceSection, Horarios (tabs), Depoimentos, CTAFinal, Comunidade
- `components/ui/` — LiquidButton (liquid-glass CTA), PageHero, ContatoForm
- `lib/data.ts` — nav links, teachers, belts, schedules, testimonials
- `public/images/` — AI-generated cinematic imagery + real uploaded logo (`logo.jpg`) and athlete photos

## Key decisions
- Hero "video scrubbing" is implemented as a canvas keyframe sequence (6 generated frames crossfaded + Ken Burns zoom driven by scroll) since no real video exists — the brief explicitly allows image/canvas sequence. Swap `FRAMES` in `components/sections/Hero.tsx` when real footage arrives.
- TypeScript pinned to v5 (v7 breaks `next.config` transpilation). Config is `next.config.mjs`.
- Reduced-motion and pointer-coarse fallbacks throughout; custom cursor is desktop-only.

## User preferences
(none recorded yet)

## Diretrizes de conteúdo
- Seguir `ANTI-AI-SLOP.md` (raiz do projeto) em qualquer texto, copy ou design novo.
- Não usar travessões (— ou –) em textos do site; preferir vírgula, dois-pontos, "a" para intervalos e "às" para horários. Títulos usam " | ".
- Depoimentos e professores em `lib/data.ts` são conteúdo fictício de demonstração; trocar por conteúdo real antes da divulgação.
