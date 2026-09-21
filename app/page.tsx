import { Preloader } from "@/components/layout/Preloader";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { JiuJitsuSection } from "@/components/sections/JiuJitsuSection";
import { Modalidades } from "@/components/sections/Modalidades";
import { AulasKidsSection } from "@/components/sections/AulasKidsSection";
import { Professores } from "@/components/sections/Professores";
import { StatsSection } from "@/components/sections/StatsSection";
import { Faixas } from "@/components/sections/Faixas";
import { Estrutura } from "@/components/sections/Estrutura";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { Horarios } from "@/components/sections/Horarios";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Comunidade } from "@/components/sections/Comunidade";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <SectionDivider />
      <Manifesto />
      <SectionDivider />
      <JiuJitsuSection />
      <SectionDivider />
      <Modalidades />
      <AulasKidsSection />
      <SectionDivider />
      <Professores />
      <StatsSection />
      <Faixas />
      <SectionDivider />
      <Estrutura />
      <PerformanceSection />
      <SectionDivider />
      <Horarios compact />
      <Depoimentos />
      <FAQSection />
      <CTAFinal />
      <Comunidade />
    </>
  );
}
