import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DotMap from '../components/ui/DotMap';
import EncryptedText from '../components/ui/EncryptedText';

export default function ValuesPage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const mapY = useTransform(scrollY, [0, 1000], [0, 100]);
  const mapScale = useTransform(scrollY, [0, 1000], [1.1, 1.2]);
  const mapOpacity = useTransform(scrollY, [0, 600], [0.6, 0]);

  const values = [
    {
      title: "Excellence",
      description: "We pursue the highest standards in everything we do, from strategy to execution."
    },
    {
      title: "Agility",
      description: "We adapt quickly to changing markets and evolving client needs with nimble solutions."
    },
    {
      title: "Commitment",
      description: "We are dedicated to your success, treating every project as if it were our own."
    }
  ];

  const principles = [
    "Client success is our success",
    "Innovation drives every solution",
    "Transparency in all communications",
    "Quality over quantity, always",
    "Long-term partnerships over quick wins"
  ];

  return (
    <>
      <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#ff0000]">
        <motion.div 
          className="absolute inset-0 z-0 mix-blend-multiply"
          style={{ 
            y: mapY,
            scale: mapScale,
            opacity: mapOpacity
          }}
        >
          <DotMap />
        </motion.div>

        <div className="container mx-auto px-5 md:px-10 z-10 pt-[120px] pb-20 text-left">
          <h1 className="font-display font-semibold text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] tracking-tight text-black max-w-[900px]">
            Built on values that drive results and foster lasting partnerships.
          </h1>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="max-w-[800px] ml-auto mb-20">
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-medium">
              At MetroMint, our DNA is defined by the principles that guide every decision, every strategy, and every interaction with our clients and partners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-white mt-2"></div>
              <h2 className="text-xl font-medium">Our Values</h2>
            </div>
            <div className="space-y-16">
              {values.map((value, index) => (
                <div key={index} className="border-t border-border pt-8">
                  <h3 className="font-display font-semibold text-[clamp(2rem,4vw,4rem)] tracking-tight leading-none mb-6">
                    <EncryptedText text={`${value.title}.`} />
                  </h3>
                  <p className="text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.4] text-text-dim max-w-[600px]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#990000]">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-[#ff0000] mt-2"></div>
              <h2 className="text-xl font-medium text-[#ff0000]">Our Principles</h2>
            </div>
            <div className="space-y-4">
              {principles.map((item, index) => (
                <p key={index} className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium text-[#ff0000] flex items-start gap-4">
                  <span className="text-white/50">→</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-white mt-2"></div>
              <h2 className="text-xl font-medium">Our Promise</h2>
            </div>
            <div>
              <p className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium max-w-[800px]">
                We believe in building relationships that last. Every strategy we craft, every piece of content we create, is designed with your long-term success in mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
