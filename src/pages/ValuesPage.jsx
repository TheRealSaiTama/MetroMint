import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ValuesPage() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(window.VANTA.TRUNK({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x98465f,
        backgroundColor: 0x222426,
        spacing: 10.00,
        chaos: 10.00
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const sections = [
    {
      navTitle: "Who we are",
      title: "1. Who we are",
      content: [
        "MetroMint is the strategic partner for forward-thinking brands like SNK, Tapasya, and IMB360. We don't just execute; we own the outcome.",
        "We are the architects of your digital existence.",
        "From creating AI influencers to managing complex ad ecosystems, our specialized team becomes an extension of yours—ensuring perfection in every post, every ad, and every interaction."
      ]
    },
    {
      navTitle: "What we think",
      title: "2. What we think",
      content: [
        "In a crowded digital space, average is invisible. Perfection is the only standard that matters.",
        "That is our philosophy.",
        "We believe that true growth comes from the seamless integration of human creativity and AI precision. Whether it's managing your IDs or scaling your ads, we do it flawlessly so you never have to worry."
      ]
    },
    {
      navTitle: "What we stand for",
      title: "3. What we stand for",
      content: [
        "Innovation. Precision. Ownership. Perfection.",
        "These are our non-negotiables.",
        "We stand for complete accountability. When we take on your brand—whether it's generating avatars or running Meta ads—we treat it with the same care and ambition as if it were our own."
      ]
    }
  ];

  const teamMembers = [
    {
      name: "Keshav Kumar Jha",
      role: "Founder",
      image: "/keshav.jpg",
      bio: "Keshav founded MetroMint to help creators and startups build authentic brands through strategic AI-powered content and automation."
    },
    {
      name: "Aakriti Kaushik",
      role: "Co-Founder & Creative Director",
      image: "/aakriti.jpg",
      bio: "Aakriti leads our creative vision, ensuring every piece of content tells a compelling story that resonates with audiences."
    }
  ];

  return (
    <>
      <section ref={vantaRef} className="relative h-[60vh] min-h-[500px] flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 z-10 pt-[80px] text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-display font-semibold text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.1] tracking-tight text-white max-w-[1000px]"
          >
            MetroMint has been pioneering AI-powered content experiences—from the first automated strategies to today&apos;s cutting-edge solutions for world-class creators.
          </motion.h1>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32 lg:self-start space-y-2"
            >
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`flex items-center gap-3 text-left w-full py-2 transition-colors duration-300 ${
                    activeSection === index 
                      ? 'text-white' 
                      : 'text-text-dim hover:text-white/70'
                  }`}
                >
                  {activeSection === index && (
                    <div className="w-4 h-4 bg-white"></div>
                  )}
                  <span className={activeSection === index ? 'font-medium' : ''}>
                    {section.navTitle}
                  </span>
                </button>
              ))}
            </motion.div>

            <div className="space-y-24">
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.0, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-border pt-8"
                  onViewportEnter={() => setActiveSection(index)}
                >
                  <p className="text-sm text-text-dim mb-8">{section.title}</p>
                  <div className="space-y-6">
                    {section.content.map((paragraph, pIndex) => (
                      <motion.p 
                        key={pIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: pIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium text-white max-w-[800px]"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#990000]">
        <div className="container mx-auto px-5 md:px-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-4 h-4 bg-[#ff0000]"></div>
            <h2 className="text-xl font-medium text-[#ff0000]">
              Team <span className="text-text-dim">( Key assets )</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-center items-start max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display font-semibold text-2xl text-white mb-2">{member.name}</h3>
                <p className="text-[#ff0000] text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-4 h-4 bg-white mt-2"></div>
              <h2 className="text-xl font-medium text-white">Our Promise</h2>
            </motion.div>
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium max-w-[800px] text-white"
              >
                We believe in building relationships that last. Every strategy we craft, every piece of content we create, is designed with your long-term success in mind. Your growth is our mission.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
