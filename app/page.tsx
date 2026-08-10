import { Preloader } from "@/components/layout/Preloader";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { JiuJitsuSection } from "@/components/sections/JiuJitsuSection";
import { Modalidades } from "@/components/sections/Modalidades";
import { Professores } from "@/components/sections/Professores";
import { Faixas } from "@/components/sections/Faixas";
import { Estrutura } from "@/components/sections/Estrutura";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { Horarios } from "@/components/sections/Horarios";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Comunidade } from "@/components/sections/Comunidade";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Manifesto />
      <JiuJitsuSection />
      <Modalidades />
      <Professores />
      <Faixas />
      <Estrutura />
      <PerformanceSection />
      <Horarios />
      <Depoimentos />
      <CTAFinal />
      <Comunidade />
    </>
  );
}
