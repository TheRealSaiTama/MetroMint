import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DotMap from '../ui/DotMap';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const mapY = useTransform(scrollY, [0, 1000], [0, 100]);
  const mapScale = useTransform(scrollY, [0, 1000], [1.1, 1.2]);
  const mapOpacity = useTransform(scrollY, [0, 600], [0.6, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative h-screen flex flex-col justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: mapY,
          scale: mapScale,
          opacity: mapOpacity
        }}
      >
        <DotMap />
      </motion.div>

      <div className="container mx-auto px-5 md:px-10 z-10 pt-[100px] text-left">
        <h1 className="font-display font-semibold text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tight">
          <span className="block">Crafting your vision</span>
          <span className="block">one dot at a time.</span>
        </h1>
      </div>

      <div className="absolute bottom-[60px] left-5 right-5 md:left-10 md:right-10 max-w-[1600px] mx-auto z-10">
        <div className="max-w-[800px]">
           <p className="text-[1.1rem] md:text-[1.5rem] leading-[1.4]">
             From pioneering AI workflows to advancing growth strategies — MetroMint brings your inspiration to life. 
             <a href="#about" className="ml-2 text-text-dim hover:text-white transition-colors text-[1.2rem]">
               Learn More →
             </a>
           </p>
        </div>
      </div>
    </section>
  );
}
