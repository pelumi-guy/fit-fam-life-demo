import Image from "next/image";
import { images } from "@/lib/images";
import { ArrowIcon, ButtonLink, Container } from "./ui";
import { CheckIcon } from "./icons";

const proofChips = ["Built around familiar foods", "Beginner-friendly guidance", "Designed for consistency"];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-teal-hero text-cream">
      <Container className="relative z-10 pt-12 pb-4 sm:pt-16 lg:pt-20 xl:flex xl:min-h-[clamp(40rem,56vw,52rem)] xl:items-center xl:py-20">
        <div className="hero-enter max-w-xl lg:max-w-2xl xl:max-w-[33rem] 2xl:max-w-[36rem]">
          <h1
            id="hero-heading"
            className="font-display text-[2.45rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance min-[400px]:text-[2.75rem] sm:text-[3.4rem] lg:text-[3.9rem] xl:text-[3.6rem] 2xl:text-[4.15rem]"
          >
            Train smarter. Eat with clarity. <span className="text-gold">Grow with your Fitfam.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-cream/80 text-pretty sm:text-lg">
            Fitfam Life is a Nigerian-first fitness companion that turns a health goal into simple daily action—what to
            train, what to eat, how you are progressing, and who is cheering you on.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <ButtonLink href="#product">
              Explore the product <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="#story" variant="ghost-light">
              Meet Mr Fitness
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="What makes Fitfam Life different">
            {proofChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-2 rounded-full bg-cream/8 px-3.5 py-2 text-[0.82rem] font-medium text-cream/90 ring-1 ring-cream/15"
              >
                <span className="grid size-4.5 place-items-center rounded-full bg-gold text-ink">
                  <CheckIcon className="size-3" />
                </span>
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Mobile/tablet: the art sits below the copy, cropped from the left so only quiet negative space is lost.
          Wide screens (xl): it fills the section height, anchored right, leaving its empty left side for the copy. */}
      <Image
        src={images.hero}
        alt="Illustration of Mr Fitness, the Fitfam Life coach, beside cards for progress tracking, a balanced Nigerian meal, running and a smiling fitness community."
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
        sizes="(min-width: 1280px) 110vw, (min-width: 768px) 120vw, 180vw"
        className="block aspect-square w-full object-cover object-right md:aspect-[3/2] xl:absolute xl:inset-y-0 xl:right-0 xl:aspect-auto xl:h-full xl:w-auto xl:max-w-none"
      />
      {/* Soft blend for very wide screens where the art is narrower than the viewport */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden aspect-[1376/768] h-full bg-gradient-to-r from-teal-hero to-transparent to-[12%] xl:block"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-teal-hero/60 to-transparent" />
    </section>
  );
}
