import Image from "next/image";
import { images } from "@/lib/images";
import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";
import { Container } from "./ui";
import { HomeIcon, PlusNoteIcon, TrendIcon } from "./icons";

const explainers = [
  {
    title: "Your day, made simple",
    body: "Training, meals, water and next actions in one clear home.",
    icon: <HomeIcon />,
    accent: "teal",
  },
  {
    title: "Log the habits that matter",
    body: "Food, workouts and personal notes without unnecessary friction.",
    icon: <PlusNoteIcon />,
    accent: "gold",
  },
  {
    title: "Progress you can understand",
    body: "Trends, streaks and weekly reflection—not guilt or guesswork.",
    icon: <TrendIcon />,
    accent: "leaf",
  },
] as const;

export default function ProductPreview() {
  return (
    <section id="product" aria-labelledby="product-heading" className="relative border-t border-ink/5 bg-paper py-20 sm:py-28">
      <Container className="max-w-[84rem]">
        <div className="relative">
          {/* On wide screens the copy sits in the montage's own empty left space. */}
          <SectionHeading
            id="product-heading"
            eyebrow="See the product in action"
            title="A coach, tracker and fitfam in your pocket."
            intro="From your first logged meal to your next personal best, Fitfam Life helps turn small daily actions into lasting progress."
            className="reveal relative z-10 max-w-2xl xl:absolute xl:top-[14%] xl:left-0 xl:w-[35%] xl:max-w-none"
          />

          <figure className="reveal -mx-5 mt-10 sm:-mx-8 md:mx-0 xl:mt-0">
            <Image
              src={images.montage}
              alt="Three Fitfam Life app screens: a daily home with streak and calorie progress, a quick log for food, workouts and water with a coach's note, and a weekly progress chart with milestones."
              placeholder="blur"
              sizes="(min-width: 1344px) 1300px, (min-width: 768px) 100vw, 160vw"
              className="block aspect-[906/768] h-auto w-full object-cover object-right md:aspect-auto md:object-contain md:[mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]"
            />
            <figcaption className="sr-only">Concept screens from the Fitfam Life prototype.</figcaption>
          </figure>
        </div>

        <ul className="relative z-10 mt-6 grid gap-4 md:grid-cols-3 md:gap-5 xl:-mt-10 xl:ml-[34%]">
          {explainers.map((e) => (
            <li key={e.title}>
              <FeatureCard title={e.title} icon={e.icon} accent={e.accent}>
                {e.body}
              </FeatureCard>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-ink/50 xl:ml-[34%] xl:text-left">
          Concept screens from the pitch prototype. Details shown are illustrative.
        </p>
      </Container>
    </section>
  );
}
