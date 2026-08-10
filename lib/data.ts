export const NAV_LINKS = [
  { label: "Jiu-Jitsu", href: "/jiu-jitsu", img: "/images/sections/jiujitsu.jpg" },
  { label: "Muay Thai", href: "/muay-thai", img: "/images/sections/muaythai.jpg" },
  { label: "Karatê", href: "/karate", img: "/images/sections/karate.jpg" },
  { label: "Performance", href: "/performance", img: "/images/sections/performance.jpg" },
  { label: "A Casa", href: "/academia", img: "/images/gym/tatame.jpg" },
  { label: "Horários", href: "/horarios", img: "/images/gym/reception.jpg" },
  { label: "Contato", href: "/contato", img: "/images/sections/cta.jpg" },
];

export const PROFESSORES = [
  {
    nome: "Rafael Duarte",
    faixa: "Faixa Preta 3º Grau",
    especialidade: "Jiu-Jitsu — Head Coach",
    anos: 18,
    img: "/images/team/prof-1.jpg",
  },
  {
    nome: "Camila Rocha",
    faixa: "Faixa Marrom",
    especialidade: "Jiu-Jitsu Feminino & Kids",
    anos: 9,
    img: "/images/team/prof-2.jpg",
  },
  {
    nome: "Édson Lima",
    faixa: "Kru",
    especialidade: "Muay Thai",
    anos: 15,
    img: "/images/team/prof-3.jpg",
  },
  {
    nome: "Bruno Sales",
    faixa: "CREF 041233",
    especialidade: "Performance & Preparação Física",
    anos: 7,
    img: "/images/team/prof-4.jpg",
  },
];

export const FAIXAS = [
  { nome: "Branca", cor: "#E8E8E4", texto: "Onde tudo começa. Aprender a cair, aprender a ficar.", tempo: "0 — 2 anos" },
  { nome: "Azul", cor: "#2D5C8F", texto: "O jogo ganha forma. A defesa vira linguagem.", tempo: "2 — 4 anos" },
  { nome: "Roxa", cor: "#5B3E8C", texto: "O atleta encontra o próprio estilo. Criação sobre base.", tempo: "4 — 7 anos" },
  { nome: "Marrom", cor: "#5C4030", texto: "Refinamento. Pressão. Detalhes que decidem.", tempo: "7 — 9 anos" },
  { nome: "Preta", cor: "#0B0B0B", texto: "Não é o fim. É o compromisso de recomeçar todos os dias.", tempo: "9+ anos" },
];

export type Aula = { dia: string; horarios: string[] };

export const HORARIOS: Record<string, Aula[]> = {
  "Jiu-Jitsu": [
    { dia: "Segunda", horarios: ["06:30 Fundamentos", "12:00 All Levels", "19:00 Avançado", "20:30 No-Gi"] },
    { dia: "Terça", horarios: ["06:30 Drilling", "12:00 All Levels", "18:00 Kids", "19:00 Fundamentos"] },
    { dia: "Quarta", horarios: ["06:30 Fundamentos", "12:00 All Levels", "19:00 Avançado", "20:30 Sparring"] },
    { dia: "Quinta", horarios: ["06:30 Drilling", "12:00 All Levels", "18:00 Kids", "19:00 Fundamentos"] },
    { dia: "Sexta", horarios: ["06:30 All Levels", "12:00 No-Gi", "19:00 Open Mat"] },
    { dia: "Sábado", horarios: ["10:00 Open Mat", "11:30 Competição"] },
  ],
  "Muay Thai": [
    { dia: "Segunda", horarios: ["07:30 Técnica", "18:00 All Levels", "20:00 Avançado"] },
    { dia: "Terça", horarios: ["12:00 All Levels", "18:00 Iniciantes"] },
    { dia: "Quarta", horarios: ["07:30 Técnica", "18:00 All Levels", "20:00 Sparring"] },
    { dia: "Quinta", horarios: ["12:00 All Levels", "18:00 Iniciantes"] },
    { dia: "Sexta", horarios: ["18:00 Clinch & Sparring"] },
  ],
  "Karatê": [
    { dia: "Segunda", horarios: ["17:00 Kids", "18:30 Adulto"] },
    { dia: "Quarta", horarios: ["17:00 Kids", "18:30 Adulto"] },
    { dia: "Sexta", horarios: ["17:00 Kids", "18:30 Kata & Kumite"] },
  ],
  Performance: [
    { dia: "Segunda a Sexta", horarios: ["06:00 — 22:00 Área liberada", "07:00 S&C para lutadores", "17:00 Mobilidade"] },
    { dia: "Sábado", horarios: ["08:00 — 14:00 Área liberada"] },
  ],
};

export const DEPOIMENTOS = [
  {
    texto: "Entrei para perder o medo. Fiquei porque encontrei uma família que exige o meu melhor todos os dias.",
    nome: "Marina C.",
    detalhe: "Faixa azul · 3 anos de TMD",
  },
  {
    texto: "Treinei em três países. O nível técnico e o respeito no tatame da TMD não devem nada a ninguém.",
    nome: "Lucas F.",
    detalhe: "Faixa roxa · competidor",
  },
  {
    texto: "Meu filho mudou na escola, em casa, em tudo. O tatame ensinou o que eu não conseguia explicar.",
    nome: "Renata M.",
    detalhe: "Mãe de aluno Kids",
  },
];
