import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      <Header />
      
      {/* Main Wrapper with shadow and margin for footer reveal */}
      <div className="relative z-10 bg-bg mb-[600px] lg:mb-[400px] shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
        {children}
      </div>
      
      <Footer />
    </div>
  );
}
