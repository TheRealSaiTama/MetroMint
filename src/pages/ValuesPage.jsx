import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ValuesPage() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(window.VANTA.TOPOLOGY({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff0000,
        backgroundColor: 0x990000
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
        "MetroMint has been pioneering AI-powered content strategies for startups and creators—helping brands stay consistent without burning out.",
        "This is our mission.",
        "This legacy, blending technical expertise with a creative, human-first approach, is the very DNA of MetroMint, where strategic automation serves the brand's storytelling."
      ]
    },
    {
      navTitle: "What we think",
      title: "2. What we think",
      content: [
        "Regardless of the platform, what really matters is the story and its perfect delivery to create an authentic connection.",
        "That is our vision.",
        "At MetroMint, we stand beside our clients as true partners. We recognize the strategic role that consistent content has as the primary means of building trust with customers."
      ]
    },
    {
      navTitle: "What we stand for",
      title: "3. What we stand for",
      content: [
        "Excellence. Agility. Trust. Commitment.",
        "Those are our values.",
        "Because client satisfaction is our DNA, we always strive to offer you the best possible solution, no matter what.",
        "It is equally essential for us to be reliable partners for our clients and to establish trusting relationships built on transparency and results."
      ]
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      color: "bg-[#00ff00]",
      bio: "Alex founded MetroMint to help creators and startups build authentic brands through strategic content."
    },
    {
      name: "Jordan Rivera",
      role: "Head of Strategy",
      color: "bg-[#0088ff]",
      bio: "Jordan brings 10+ years of digital marketing expertise, specializing in growth hacking and community building."
    },
    {
      name: "Sam Taylor",
      role: "Creative Director",
      color: "bg-[#ff0000]",
      bio: "Sam leads our creative vision, ensuring every piece of content tells a compelling story that resonates."
    },
    {
      name: "Morgan Lee",
      role: "Automation Lead",
      color: "bg-[#ff00ff]",
      bio: "Morgan architects our AI-powered workflows, making consistent content feel effortless for clients."
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className={`aspect-square ${member.color} mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1 opacity-50">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-white/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-white mb-1">{member.name}</h3>
                <p className="text-sm text-text-dim mb-4">{member.role}</p>
                <p className="text-sm text-text-dim leading-relaxed">{member.bio}</p>
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
