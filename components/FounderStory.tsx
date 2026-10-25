import Image from "next/image";
import { images } from "@/lib/images";
import SectionHeading from "./SectionHeading";
import { Container } from "./ui";

// One pose cropped from the Mr Fitness model sheet (source px: x 2170, y 740, 580 × 730),
// done with CSS positioning so the original asset is never altered.
const crop = {
  width: `${(2752 / 580) * 100}%`,
  height: `${(1536 / 730) * 100}%`,
  left: `${(-2170 / 580) * 100}%`,
  top: `${(-740 / 730) * 100}%`,
};

export default function FounderStory() {
  return (
    <section id="story" aria-labelledby="story-heading" className="relative overflow-hidden bg-teal py-20 text-cream sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 size-[32rem] rounded-full bg-cream/[0.04]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-40 size-[28rem] rounded-full bg-gold/[0.05]" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-7 lg:order-2">
          <SectionHeading
            id="story-heading"
            eyebrow="Meet Mr Fitness"
            tone="light"
            title="Built from a real transformation—and the questions that followed."
          />
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream/80 text-pretty sm:text-lg">
            After years of research, the founder developed a well-documented system that helped him lose 10 kg in five months and achieve a lean, muscular physique through structured training and intentional eating. The founder continued sharing meal plans and workout routines with friends and acquaintances, both in and out of the gym. Fitfam Life is the next step: making practical, encouraging fitness guidance accessible to far more people.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/55">
            One person&apos;s journey, shared as our starting point—not a promised result. Everyone&apos;s body and progress are
            different.
          </p>

          <figure className="mt-10 max-w-xl border-l-4 border-gold pl-6">
            <blockquote className="font-display text-2xl leading-snug font-bold tracking-tight text-gold text-balance sm:text-[1.75rem]">
              <p>“Know what to train and eat today—and see what is working.”</p>
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-cream/60">The idea behind Fitfam Life</figcaption>
          </figure>
        </div>

        <div className="reveal mx-auto w-full max-w-[22rem] lg:order-1 lg:col-span-5 lg:max-w-[24rem]">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rotate-[-3deg] rounded-[2rem] bg-gold/90" />
            <div className="relative aspect-[580/730] overflow-hidden rounded-[1.75rem] bg-[#fdf0d6] shadow-lift">
              <div className="absolute" style={crop}>
                <Image
                  src={images.modelSheet}
                  alt="Mr Fitness, the Fitfam Life mascot, smiling with one hand on his hip."
                  fill
                  sizes="(min-width: 1024px) 1900px, 1700px"
                  className="object-fill"
                />
              </div>
            </div>
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-2 font-display text-sm font-bold whitespace-nowrap text-ink shadow-soft">
              Mr Fitness · your Fitfam coach
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
