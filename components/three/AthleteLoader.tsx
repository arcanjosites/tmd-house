"use client";

export function AthleteLoader() {
  return (
    <div className="flex h-full min-h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-green-highlight"
          aria-hidden="true"
        />
        <p className="font-display text-[10px] uppercase tracking-[0.4em] text-fg-muted">
          Preparando atleta
        </p>
      </div>
    </div>
  );
}
