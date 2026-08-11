import { IMAGES } from "./images";

export const SITE_CONTACT = {
  endereco: "Área Especial QSD AE 04, Lote 04, Loja 03 — Ed. Via Liberte",
  cidade: "Taguatinga Sul, Brasília — DF",
  cep: "72020-022",
  horario: "Segunda a Sábado · 06h às 22h",
  email: "contato@tmdhouse.com.br",
  whatsapp: "556192934771",
  whatsappDisplay: "61 9293-4771",
  instagram: "https://instagram.com/tmdhousebrasilia",
  instagramHandle: "@tmdhousebrasilia",
  mapsLink:
    "https://www.google.com/maps/search/Academia%20De%20Lutas%20Tmd%20House%20Brasilia/@-15.84352970123291,-48.05068588256836,17z?hl=pt-BR",
  mapsEmbed:
    "https://maps.google.com/maps?q=-15.84352970123291,-48.05068588256836&hl=pt-BR&z=17&output=embed",
};

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Olá! Gostaria de agendar uma aula experimental na TMD House."
  );
  return `https://wa.me/${SITE_CONTACT.whatsapp}?text=${text}`;
}

export function agendamentoWhatsAppUrl(data: { nome: string; modalidade: string }) {
  const nome = data.nome.trim();
  const message = `Olá, meu nome é ${nome} e gostaria de agendar uma aula experimental na TMD House na modalidade ${data.modalidade}.`;
  return whatsappUrl(message);
}

export const NAV_LINKS = [
  { label: "Jiu-Jitsu", href: "/jiu-jitsu", img: IMAGES.sections.jiujitsu },
  { label: "Muay Thai", href: "/muay-thai", img: IMAGES.sections.muaythai },
  { label: "Karatê", href: "/karate", img: IMAGES.sections.karate },
  { label: "Kids", href: "/kids", img: IMAGES.team.prof4 },
  { label: "Performance", href: "/performance", img: IMAGES.sections.performance },
  { label: "A Casa", href: "/academia", img: IMAGES.gym.tatame },
  { label: "Horários", href: "/horarios", img: IMAGES.gym.reception },
  { label: "Contato", href: "/contato", img: IMAGES.sections.cta },
];

export const STATS = [
  { value: "12+", label: "Anos de história" },
  { value: "4", label: "Modalidades no tatame" },
  { value: "Kids", label: "Turmas infantis" },
  { value: "1ª", label: "Aula experimental grátis" },
];

export const FAQ = [
  {
    q: "Preciso ter experiência ou kimono?",
    a: "Não. A primeira aula é para sentir o tatame. Kimono e equipamentos podem ser orientados na recepção após você começar.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "Você treina com a turma adequada ao seu nível, conhece os professores e a estrutura. Sem pressão, sem compromisso na primeira visita.",
  },
  {
    q: "Qual a idade mínima para Kids?",
    a: "Trabalhamos com crianças a partir de 4 anos, em turmas separadas por faixa etária para manter técnica, segurança e diversão.",
  },
  {
    q: "Posso treinar mais de uma modalidade?",
    a: "Sim. Muitos alunos combinam Jiu-Jitsu, striking e a área de performance. Nossa equipe ajuda a montar a rotina ideal.",
  },
];

export const PROFESSORES = [
  {
    nome: "Yuri Ávila",
    faixa: "Faixa Preta 1º Grau",
    especialidade: "Head Coach de Jiu-Jitsu",
    anos: 20,
    img: IMAGES.team.prof1,
  },
  {
    nome: "Dan Miller",
    faixa: "Faixa Preta 1º Grau",
    especialidade: "Jiu-Jitsu Adulto",
    anos: 15,
    img: IMAGES.team.prof2,
  },
  {
    nome: "Douglas Milhomem",
    faixa: "Faixa Preta de Kratê",
    especialidade: "Karatê",
    anos: 15,
    img: IMAGES.team.prof3,
  },
  {
    nome: "Pernambuco",
    faixa: "Oreia Seca",
    especialidade: "Apanhar pro Karateka",
    anos: -999,
    img: IMAGES.team.prof4,
  },
];

export const FAIXAS = [
  { nome: "Branca", cor: "#E8E8E4", texto: "Onde tudo começa. Aprender a cair, aprender a ficar.", tempo: "0 a 2 anos" },
  { nome: "Azul", cor: "#2D5C8F", texto: "O jogo ganha forma. A defesa vira linguagem.", tempo: "2 a 4 anos" },
  { nome: "Roxa", cor: "#5B3E8C", texto: "O atleta encontra o próprio estilo. Criação sobre base.", tempo: "4 a 7 anos" },
  { nome: "Marrom", cor: "#5C4030", texto: "Refinamento. Pressão. Detalhes que decidem.", tempo: "7 a 9 anos" },
  { nome: "Preta", cor: "#0B0B0B", texto: "O compromisso de recomeçar todos os dias, agora como referência.", tempo: "9+ anos" },
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
  Kids: [
    { dia: "Terça", horarios: ["18:00 Jiu-Jitsu Kids"] },
    { dia: "Quinta", horarios: ["18:00 Jiu-Jitsu Kids"] },
    { dia: "Segunda", horarios: ["17:00 Karatê Kids"] },
    { dia: "Quarta", horarios: ["17:00 Karatê Kids"] },
    { dia: "Sexta", horarios: ["17:00 Karatê Kids"] },
  ],
  Performance: [
    { dia: "Segunda a Sexta", horarios: ["06:00 às 22:00 Área liberada", "07:00 S&C para lutadores", "17:00 Mobilidade"] },
    { dia: "Sábado", horarios: ["08:00 às 14:00 Área liberada"] },
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

export const INSTAGRAM_GALLERY = [
  { src: IMAGES.athletes.primary, alt: "Atleta da TMD House de kimono azul", href: SITE_CONTACT.instagram },
  { src: IMAGES.hero.frames[2], alt: "Treino de Jiu-Jitsu na TMD House", href: SITE_CONTACT.instagram },
  { src: IMAGES.gym.bags, alt: "Treino de Muay Thai na TMD House", href: SITE_CONTACT.instagram },
];
