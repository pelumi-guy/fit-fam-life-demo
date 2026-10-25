import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";
import { Container } from "./ui";
import { BowlIcon, CommunityIcon, TodayIcon, TrendIcon } from "./icons";

const features = [
  {
    title: "Know what to do today",
    body: "Guided training plans and simple daily actions.",
    icon: <TodayIcon />,
    accent: "teal",
  },
  {
    title: "Log food without the confusion",
    body: "Familiar meals, gram-based portions and goal-aware calorie tracking.",
    icon: <BowlIcon />,
    accent: "gold",
  },
  {
    title: "See what is working",
    body: "Weekly check-ins that account for consistency, recovery and incomplete data.",
    icon: <TrendIcon />,
    accent: "leaf",
  },
  {
    title: "Stay accountable together",
    body: "A lively Fitfam community built around encouragement, progress and healthy competition.",
    icon: <CommunityIcon />,
    accent: "coral",
  },
] as const;

export default function WhyFitfam() {
  return (
    <section id="why" aria-labelledby="why-heading" className="paper-texture relative bg-cream py-20 sm:py-28">
      <Container>
        <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <SectionHeading
            id="why-heading"
            eyebrow="Why Fitfam Life"
            title="Fitness should not feel like guesswork."
            className="lg:col-span-7"
          />
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-ink/75 text-pretty sm:text-lg lg:col-span-5 lg:pb-2">
            Many people begin with motivation but lose momentum when workouts, food tracking, progress and community
            live in different places. Fitfam Life brings the daily essentials together in one practical experience.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {features.map((f, i) => (
            <li key={f.title}>
              <FeatureCard title={f.title} icon={f.icon} accent={f.accent} index={`0${i + 1}`}>
                {f.body}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
