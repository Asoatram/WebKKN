import AboutSection from '@/components/AboutSection';
import CarouselHero from '@/components/Carousel';
import HomestayCarousel from '@/components/HomestayCarousel';
import NewsSection from '@/components/NewsSection';
import VacationSpotCarousel from '@/components/VacationSpotCarousel';
import React from 'react';

// Optional: Metadata for the page
export const metadata = {
  title: 'Rupat Utara',
  description: 'A very long page to test Lenis smooth scrolling (Function Syntax).',
};

// This is the desired function declaration syntax for the page component
export default function LongTestPage() {

  return (
    <div className="long-test-page-container">
      {/* Hero section */}
      <section
        id="hero-section"
      >
        <CarouselHero></CarouselHero>
      </section>


    <AboutSection/>
    <NewsSection/>
    <VacationSpotCarousel/>
    <HomestayCarousel/>

    </div>
  );
}