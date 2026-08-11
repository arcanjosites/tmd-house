/**
 * Mapa de imagens em public/images/
 *
 * hero/     → sequência do Hero (frame-1…6)
 * sections/ → modalidades, CTAs, páginas
 * gym/      → estrutura, academia, horários
 * team/     → professores e programa Kids
 * athlete-* → retratos reais TMD (comunidade, contato)
 */

export const IMAGES = {
  logo: "/images/logo.jpg",

  athletes: {
    primary: "/images/athlete-1.jpg",
    secondary: "/images/athlete-2.jpg",
  },

  hero: {
    frames: [
      "/images/hero/frame-1.jpg",
      "/images/hero/frame-2.jpg",
      "/images/hero/frame-3.jpg",
      "/images/hero/frame-4.jpg",
      "/images/hero/frame-5.jpg",
      "/images/hero/frame-6.jpg",
    ],
  },

  sections: {
    jiujitsu: "/images/sections/jiujitsu.jpg",
    muaythai: "/images/sections/muaythai.jpg",
    karate: "/images/sections/karate.jpg",
    performance: "/images/sections/performance.jpg",
    cta: "/images/sections/cta.jpg",
  },

  gym: {
    tatame: "/images/gym/tatame.jpg",
    weights: "/images/gym/weights.jpg",
    bags: "/images/gym/bags.jpg",
    reception: "/images/gym/reception.jpg",
  },

  team: {
    prof1: "/images/team/prof-1.jpg",
    prof2: "/images/team/prof-2.png",
    prof3: "/images/team/prof-3.png",
    prof4: "/images/team/prof-4.jpg",
  },
} as const;
