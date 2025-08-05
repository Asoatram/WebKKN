import React, { Suspense } from "react";
import AboutSection from "@/components/AboutSection";
import CarouselHero from "@/components/Carousel";
import HomestayCarousel from "@/components/HomestayCarousel";
import NewsSection from "@/components/NewsSection";
import VacationSpotCarousel from "@/components/VacationSpotCarousel";
import LenisClient from "./providers/LenisScrollPRoviders";

export default function LongTestPage() {
  return (
    <LenisClient>
      <Suspense fallback={<div>Loading page...</div>}>
        <div className="long-test-page-container">
          {/* Hero section */}
          <section id="hero-section">
            <CarouselHero />
          </section>

          <AboutSection />
          <NewsSection />
          <VacationSpotCarousel />
          <HomestayCarousel />
        </div>
      </Suspense>
    </LenisClient>
  );
}
