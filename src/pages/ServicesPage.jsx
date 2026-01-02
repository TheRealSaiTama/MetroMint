import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

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
        color: 0x00ff00,
        backgroundColor: 0x222222
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const services = [
    {
      number: "1",
      title: "AI Avatars & Influencers",
      description: "We create hyper-realistic AI-generated avatars and influencers that embody your brand's identity and engage audiences 24/7."
    },
    {
      number: "2",
      title: "Social Media & Account Management",
      description: "We take full care of your IDs. From content creation to posting and community management—we do it all perfectly."
    },
    {
      number: "3",
      title: "Meta Ads & Performance",
      description: "Precision-targeted campaigns designed to maximize ROI, driving real traffic and conversions for your business."
    }
  ];

  const howWeDoIt = [
    "Analyzing your brand DNA & goals",
    "Generating custom AI avatars & assets",
    "Executing precision Meta ad campaigns",
    "Flawless account management & posting",
    "Continuous optimization & perfection"
  ];

  return (
    <>
      <section ref={vantaRef} className="relative h-[60vh] min-h-[500px] flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 z-10 pt-[80px] text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-display font-semibold text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] tracking-tight text-white max-w-[1100px]"
          >
            We create AI-generated avatars, run precision Meta ads, and manage your entire digital existence.
          </motion.h1>
         </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="max-w-[800px] ml-auto mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-medium text-white"
            >
              We can solve any problems by delivering innovative solutions in partnership with each brand department involved. Furthermore, we find the most appropriate answer to each client&apos;s problem, including environmental and artistic criteria.
            </motion.p>
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
              <h2 className="text-xl font-medium text-white">What we do</h2>
            </motion.div>
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div 
                  key={service.number} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.0, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-border pt-8"
                >
                  <p className="text-sm text-text-dim mb-4">{service.number}. {service.title}</p>
                  <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-medium text-white">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#006600]">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-4 h-4 bg-[#00ff00] mt-2"></div>
              <h2 className="text-xl font-medium text-[#00ff00]">How we do it</h2>
            </motion.div>
            <div className="space-y-4">
              {howWeDoIt.map((item, index) => (
                <motion.p 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                  className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium text-[#00ff00] flex items-start gap-4"
                >
                  <span className="text-text-dim">→</span>
                  {item}
                </motion.p>
              ))}
            </div>
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
              <h2 className="text-xl font-medium text-white">Our Commitment</h2>
            </motion.div>
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium max-w-[800px] text-white"
              >
                From sustainable practices to responsible growth strategies, we design each part of our services in a mindful way. We aim to find the best balance between performance, design and responsibility through each step of the entire process.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
