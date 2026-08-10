import Image from "next/image";
import { LiquidButton } from "@/components/ui/LiquidButton";

export function PerformanceSection() {
  return (
    <section className="relative overflow-hidden bg-bg" aria-label="Performance e musculação">
      <div className="relative min-h-[80vh]">
        <Image
          src="/images/sections/performance.jpg"
          alt="Atleta treinando força na área de performance"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-[1600px] flex-col justify-center px-6 py-28 md:px-10">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Performance</p>
          <h2 className="font-display mt-4 max-w-4xl text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-6xl">
            Força fora do tatame.<br />
            <span className="text-fg-muted">Para render mais dentro dele.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
            A área de musculação da TMD House existe por um motivo: sustentar a sua luta.
            Preparação física orientada para grappling e striking — mobilidade, força e condicionamento
            construídos em função do combate.
          </p>
          <div className="mt-10">
            <LiquidButton href="/performance">Ver programa de performance</LiquidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
