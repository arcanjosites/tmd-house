import { SITE_CONTACT } from "@/lib/data";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm border border-line ${className}`}>
      <iframe
        title="Localização TMD House"
        src={SITE_CONTACT.mapsEmbed}
        width="100%"
        height="100%"
        className="min-h-[280px] w-full border-0 grayscale opacity-80 contrast-[1.05] md:min-h-[360px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="border-t border-line bg-surface/80 px-4 py-3 text-xs text-fg-muted">
        <a href={SITE_CONTACT.mapsLink} target="_blank" rel="noreferrer" className="text-fg hover:text-green-highlight">
          {SITE_CONTACT.endereco} · {SITE_CONTACT.cidade}
        </a>
      </div>
    </div>
  );
}
