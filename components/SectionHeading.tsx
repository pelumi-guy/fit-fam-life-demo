import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({ id, eyebrow, title, intro, tone = "dark", className = "" }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={className}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`font-display text-[2rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance sm:text-[2.6rem] lg:text-[3rem] ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 max-w-xl text-[1.05rem] leading-relaxed text-pretty sm:text-lg ${light ? "text-cream/80" : "text-ink/75"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
