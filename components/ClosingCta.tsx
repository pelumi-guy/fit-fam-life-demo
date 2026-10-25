"use client";

import { useState } from "react";
import InterestModal from "./InterestModal";
import { ArrowIcon, buttonClass, Container } from "./ui";

export default function ClosingCta() {
  const [open, setOpen] = useState(false);

  return (
    <section aria-labelledby="cta-heading" className="bg-cream pb-20 sm:pb-28">
      <Container>
        <div className="reveal relative isolate overflow-hidden rounded-[2.25rem] bg-gold px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
          {/* paper-cut shapes */}
          <div aria-hidden className="absolute -top-24 -left-20 -z-10 size-72 rounded-full bg-[#ffd457]" />
          <div aria-hidden className="absolute -right-16 -bottom-28 -z-10 size-80 rotate-12 rounded-[4rem] bg-coral/35" />
          <div aria-hidden className="absolute top-10 right-[12%] -z-10 hidden size-6 rounded-full bg-teal/80 sm:block" />
          <div aria-hidden className="absolute bottom-14 left-[10%] -z-10 hidden size-3.5 rounded-full bg-ink/70 sm:block" />

          <h2
            id="cta-heading"
            className="mx-auto max-w-3xl font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-[-0.035em] text-ink text-balance sm:text-5xl lg:text-[3.75rem]"
          >
            Let’s build a fitter, more connected Nigeria.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink/80 text-pretty sm:text-lg">
            Fitfam Life is starting with the daily habits that matter—and growing toward a future where trusted
            guidance, community and fitness access work together.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            className={buttonClass("dark", "mt-9 !min-h-14 !px-8 text-base")}
          >
            Follow the journey <ArrowIcon />
          </button>
        </div>
      </Container>
      <InterestModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
