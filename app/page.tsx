import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyFitfam from "@/components/WhyFitfam";
import ProductPreview from "@/components/ProductPreview";
import FounderStory from "@/components/FounderStory";
import Vision from "@/components/Vision";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <WhyFitfam />
        <ProductPreview />
        <FounderStory />
        <Vision />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
