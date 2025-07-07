import AboutSection from '@/components/AboutSection';
import CarouselHero from '@/components/Carousel';
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

      {/* Footer-like section */}
      <section
        id="end-section"
        style={{
          minHeight: '50vh', // Shorter final section
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#222',
          color: 'white',
          fontSize: '2em',
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <h3>End of Test Page</h3>
        <p style={{ fontSize: '0.6em' }}>
          You've reached the bottom! Now test the "Scroll to Top" button.
        </p>
      </section>
    </div>
  );
}