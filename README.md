# Fitfam Life — ISF Forum pitch demo

A single-page teaser site for Fitfam Life, built for the Ibadan Startup Forum pitch. It's a concept prototype: there's no backend, no auth, no data collection and no external APIs.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- `next/font` (Manrope for headings, Inter for body) and `next/image` for all imagery

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm run start   # production build
```

## Structure

```
app/            layout, page, global styles, icon.png (favicon from the logo)
components/     Navbar, Hero, WhyFitfam, ProductPreview, FounderStory, Vision,
                ClosingCta, InterestModal, Footer, FeatureCard, SectionHeading,
                RoadmapStep, MascotIcon, icons, ui (Container, buttons, badges)
lib/images.ts   static image imports
public/images/  ASCII-named copies of the source art
assets/         original supplied artwork (left untouched)
```

## Assets

The originals in `assets/` are left as they are. Copies with ASCII filenames sit in `public/images/`:

| Original | Copy |
| --- | --- |
| `FITFAM_LIFE_TENTATIVE_LOGO_V1.png` | `fitfam-logo.png` |
| `Fitness_coach_website_hero_illus…_20261024045407.jpg` | `hero-illustration.jpg` |
| `Creating_product_preview_montage_20261024045346.jpg` | `product-montage.jpg` |
| `Character_model_sheet_for_fitnes…_2K_20261023011137.jpg` | `mr-fitness-model-sheet.jpg` |

The mascot icon and the founder-section portrait are cropped with CSS only, so no image file has been edited. `app/icon.png` is a 256 px resize of the logo.

## Notes

- The "Follow the journey" button opens a confirmation dialog. It has no form and stores nothing.
- Entrance animations use CSS scroll-driven animations as a progressive enhancement. They're turned off when `prefers-reduced-motion` is set.
- Trainer discovery and gym access appear only as future roadmap ambitions.
