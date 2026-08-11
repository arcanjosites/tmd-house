export function SiteAtmosphere() {
  return (
    <div className="site-atmosphere pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg2 to-surface" />

      <div
        className="site-glow-drift absolute -left-[15%] top-[5%] h-[65%] w-[55%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(22, 59, 39, 0.48) 0%, transparent 68%)",
          filter: "blur(80px)",
          opacity: 0.5,
        }}
      />
      <div
        className="site-glow-drift-alt absolute -right-[10%] top-[35%] h-[50%] w-[48%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(60, 140, 90, 0.2) 0%, transparent 72%)",
          filter: "blur(96px)",
          opacity: 0.42,
        }}
      />
      <div
        className="site-glow-drift absolute left-[20%] bottom-[10%] h-[45%] w-[40%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(33, 86, 58, 0.18) 0%, transparent 70%)",
          filter: "blur(72px)",
          opacity: 0.35,
          animationDelay: "-11s",
        }}
      />
      <div
        className="absolute left-1/2 top-0 h-[55%] w-[90%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 75% 100% at 50% 0%, rgba(113, 193, 138, 0.1) 0%, transparent 65%)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg2/40 via-transparent to-bg2/30" />

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
