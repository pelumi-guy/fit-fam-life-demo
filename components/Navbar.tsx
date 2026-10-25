"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import { ButtonLink, Container, DemoBadge } from "./ui";

const links = [
  { href: "#why", label: "Why Fitfam" },
  { href: "#product", label: "The Product" },
  { href: "#vision", label: "The Vision" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/90 backdrop-blur-md supports-[backdrop-filter]:bg-cream/80">
      <Container className="flex h-[4.5rem] items-center gap-3 lg:h-20">
        <a href="#main" className="flex shrink-0 items-center rounded-xl" aria-label="Fitfam Life — back to top">
          <Image
            src={images.logo}
            alt="Fitfam Life logo featuring the Mr Fitness mascot"
            className="size-[3.75rem] object-contain lg:size-[4.25rem]"
            sizes="68px"
            loading="eager"
          />
        </a>
        {/* <DemoBadge className="max-[359px]:hidden" /> */}

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <ButtonLink href="#product" className="ml-3 !min-h-11 !px-5 text-sm">
            Explore the demo
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="ml-auto grid size-11 cursor-pointer place-items-center rounded-full ring-1 ring-ink/15 transition hover:bg-ink/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </Container>

      <div id="mobile-menu" hidden={!open} className="border-t border-ink/8 bg-cream md:hidden">
        <Container className="pb-5 pt-2">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-ink/8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 font-display text-lg font-bold text-ink"
                  >
                    {l.label}
                    <span aria-hidden className="text-ink/30">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink href="#product" onClick={() => setOpen(false)} className="mt-4 w-full">
              Explore the demo
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  );
}
