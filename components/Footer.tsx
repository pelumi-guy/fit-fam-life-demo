import Image from "next/image";
import { images } from "@/lib/images";
import { Container, DemoBadge } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <Image src={images.logo} alt="Fitfam Life logo featuring the Mr Fitness mascot" sizes="112px" className="size-24 object-contain sm:size-28" />
          {/* <div>
            <DemoBadge className="bg-cream/10" />
            <p className="mt-2 font-display font-semibold">Built for the ISF Forum pitch demo</p>
          </div> */}
        </div>
        <div className="space-y-1.5 text-sm text-cream/65 sm:text-right">
          <p>© 2026 Fitfam Life by Mr Fitness</p>
          <p className="text-xs text-cream/45">Concept prototype — features and availability may evolve.</p>
        </div>
      </Container>
    </footer>
  );
}
