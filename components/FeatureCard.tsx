import type { ReactNode } from "react";

type Accent = "gold" | "coral" | "leaf" | "teal";

const accentStyles: Record<Accent, string> = {
  gold: "bg-gold/25 text-[#8a6200]",
  coral: "bg-coral/20 text-[#b23f28]",
  leaf: "bg-leaf/15 text-leaf",
  teal: "bg-teal/10 text-teal",
};

type FeatureCardProps = {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  accent?: Accent;
  index?: string;
  className?: string;
};

export default function FeatureCard({ title, children, icon, accent = "teal", index, className = "" }: FeatureCardProps) {
  return (
    <article
      className={`reveal group relative flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-ink/5 transition duration-300 ease-out hover:shadow-lift motion-safe:hover:-translate-y-1 sm:p-7 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        {icon && (
          <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${accentStyles[accent]}`}>{icon}</span>
        )}
        {index && <span className="font-display text-sm font-bold text-ink/25">{index}</span>}
      </div>
      <h3 className="mt-6 font-display text-xl leading-snug font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink/70">{children}</p>
    </article>
  );
}
