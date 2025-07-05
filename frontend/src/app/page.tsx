import React from 'react';

// Optional: Metadata for the page
export const metadata = {
  title: 'Rupat Utara',
  description: 'A very long page to test Lenis smooth scrolling (Function Syntax).',
};

// This is the desired function declaration syntax for the page component
export default function LongTestPage() {
  // Array to generate multiple sections
  const sections = Array.from({ length: 15 }, (_, i) => i + 1);

  // Helper to generate a random color for each section
  const getRandomColor = (index: number) => {
    const colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50',
      '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="long-test-page-container">
      {/* Hero section */}
      <section
        id="hero-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#333',
          color: 'white',
          fontSize: '3em',
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <h1>Welcome to the Lenis Scroll Test!</h1>
        <p style={{ fontSize: '0.5em', maxWidth: '800px', lineHeight: '1.5' }}>
          This page is designed to be very long to help you thoroughly test
          the smooth scrolling provided by Lenis.
        </p>
        <p style={{ fontSize: '0.4em' }}>
          Scroll down or use the navigation above.
        </p>
      </section>

      {/* Dynamically generated sections */}
      {sections.map((sectionNum) => (
        <section
          key={sectionNum}
          id={`section${sectionNum}`}
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getRandomColor(sectionNum - 1),
            color: 'white',
            fontSize: '2.5em',
            textAlign: 'center',
            padding: '20px',
            borderBottom: '2px solid rgba(255,255,255,0.2)'
          }}
        >
          <h2>Section {sectionNum}</h2>
          <p style={{ fontSize: '0.6em', maxWidth: '700px', lineHeight: '1.4' }}>
            This is the content for Section {sectionNum}. We are adding enough content
            to ensure each section takes up at least a full viewport height.
            Feel the smooth scroll!
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div style={{ marginTop: '20px', fontSize: '0.5em' }}>
            Scroll position will vary greatly on this page.
          </div>
        </section>
      ))}

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