type RoadmapStepProps = {
  stage: string;
  title: string;
  body: string;
  status: string;
  tone: "now" | "next" | "future";
  step: number;
  last?: boolean;
};

const toneStyles = {
  now: { dot: "bg-leaf text-white", pill: "bg-leaf/12 text-leaf" },
  next: { dot: "bg-gold text-ink", pill: "bg-gold/30 text-[#7a5600]" },
  future: { dot: "bg-coral text-ink", pill: "bg-coral/20 text-[#a63a25]" },
};

export default function RoadmapStep({ stage, title, body, status, tone, step, last }: RoadmapStepProps) {
  const t = toneStyles[tone];
  return (
    <li className="reveal relative flex gap-5 pb-10 last:pb-0 md:flex-col md:gap-0 md:pb-0">
      {/* connector: vertical on mobile, horizontal on desktop */}
      {!last && (
        <span
          aria-hidden
          className="absolute top-12 bottom-0 left-[1.3125rem] w-0.5 bg-[repeating-linear-gradient(to_bottom,rgb(16_36_38/0.2)_0_6px,transparent_6px_12px)] md:top-[1.3125rem] md:right-[-2rem] md:bottom-auto md:left-14 md:h-0.5 md:w-auto md:bg-[repeating-linear-gradient(to_right,rgb(16_36_38/0.2)_0_6px,transparent_6px_12px)]"
        />
      )}
      <span
        className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full font-display text-base font-extrabold shadow-soft ${t.dot}`}
        aria-hidden
      >
        {step}
      </span>
      <div className="md:mt-6">
        <p className="flex flex-wrap items-center gap-2">
          <span className="font-display text-sm font-extrabold tracking-[0.14em] text-ink uppercase">{stage}</span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${t.pill}`}>{status}</span>
        </p>
        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{title}</h3>
        <p className="mt-2 max-w-sm leading-relaxed text-ink/70">{body}</p>
      </div>
    </li>
  );
}
