import { STATS } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="relative py-16 md:py-20" aria-label="Números da TMD House">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="border-l border-line pl-5 md:pl-6">
              <p className="font-display text-4xl font-bold uppercase tracking-tight text-green-highlight md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-fg-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
