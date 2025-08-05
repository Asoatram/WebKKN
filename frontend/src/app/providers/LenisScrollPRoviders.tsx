"use client"; // This directive is essential for client-side execution

import { useEffect, useRef } from "react";
import Lenis from "lenis"; // Import the core lenis library
import { usePathname } from "next/navigation"; // For resetting scroll on route change

interface LenisClientProps {
  children: React.ReactNode;
}

const LenisClient: React.FC<LenisClientProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();


  useEffect(() => {
    // Initialize Lenis only on the client side
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      // Add other Lenis options here
    });

    lenisRef.current = lenis; // Store the instance in a ref

    // Optional: Log scroll events for debugging
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress });
    });

    // Request Animation Frame loop for Lenis
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); // Start the RAF loop

    // Cleanup function: destroy Lenis instance when component unmounts
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Optional: Reset scroll to top on Next.js route changes
  // This is a common pattern to ensure new pages start from the top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]); // Re-run when pathname or searchParams change

  return <>{children}</>;
};

export default LenisClient;