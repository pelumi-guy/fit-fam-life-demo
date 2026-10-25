import RoadmapStep from "./RoadmapStep";
import SectionHeading from "./SectionHeading";
import { Container } from "./ui";

const steps = [
  {
    stage: "Now",
    status: "In the prototype",
    title: "Daily fitness companion",
    body: "Training, food logging, progress and Fitfam accountability.",
    tone: "now",
  },
  {
    stage: "Next",
    status: "Planned",
    title: "Better support",
    body: "AI-guided coaching and verified trainer discovery.",
    tone: "next",
  },
  {
    stage: "Future",
    status: "Long-term ambition",
    title: "Fitness without boundaries",
    body: "Flexible gym access and a connected wellness ecosystem.",
    tone: "future",
  },
] as const;

export default function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-heading" className="paper-texture bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="vision-heading"
          eyebrow="The long-term vision"
          title="Start with daily consistency. Grow into fitness access for everyone."
          className="reveal max-w-3xl"
        />

        <div className="mt-12 rounded-[2rem] bg-white/70 p-6 shadow-soft ring-1 ring-ink/5 sm:mt-16 sm:p-10 lg:p-12">
          <ol className="grid md:grid-cols-3 md:gap-10" aria-label="Fitfam Life roadmap">
            {steps.map((s, i) => (
              <RoadmapStep key={s.stage} {...s} step={i + 1} last={i === steps.length - 1} />
            ))}
          </ol>
        </div>
        <p className="mt-5 text-sm text-ink/55">
          Trainer discovery and flexible gym access are future product ambitions, not live services today.
        </p>
      </Container>
    </section>
  );
}
