import { useRef, useEffect, useState } from 'react';

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
      title: "Content Strategy & Creation",
      description: "We craft compelling, on-brand content that resonates with your audience and drives engagement across all platforms."
    },
    {
      number: "2",
      title: "Growth & Analytics",
      description: "Data-driven strategies that attract the right audience and convert followers into loyal customers."
    },
    {
      number: "3",
      title: "Automation & Workflows",
      description: "Streamlined systems that handle lead capture, follow-ups, and engagement while you focus on your business."
    }
  ];

  const howWeDoIt = [
    "Understanding your brand voice and goals",
    "Creating tailored content calendars",
    "Implementing smart automation workflows",
    "Continuous optimization based on analytics",
    "24/7 engagement monitoring"
  ];

  return (
    <>
      <section ref={vantaRef} className="relative h-[60vh] min-h-[500px] flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 z-10 pt-[80px] text-left">
          <h1 className="font-display font-semibold text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] tracking-tight text-white max-w-[900px]">
            We create tailor-made digital solutions so you can focus on your core business.
          </h1>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="max-w-[800px] ml-auto mb-20">
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-medium text-white">
              We can solve any problems by delivering innovative solutions in partnership with each brand department involved. Furthermore, we find the most appropriate answer to each client&apos;s problem, including environmental and artistic criteria.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-bg">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-white mt-2"></div>
              <h2 className="text-xl font-medium text-white">What we do</h2>
            </div>
            <div className="space-y-16">
              {services.map((service) => (
                <div key={service.number} className="border-t border-border pt-8">
                  <p className="text-sm text-text-dim mb-4">{service.number}. {service.title}</p>
                  <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-medium text-white">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#006600]">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-[#00ff00] mt-2"></div>
              <h2 className="text-xl font-medium text-[#00ff00]">How we do it</h2>
            </div>
            <div className="space-y-4">
              {howWeDoIt.map((item, index) => (
                <p key={index} className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium text-[#00ff00] flex items-start gap-4">
                  <span className="text-text-dim">→</span>
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
              <h2 className="text-xl font-medium text-white">Our Commitment</h2>
            </div>
            <div>
              <p className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] font-medium max-w-[800px] text-white">
                From sustainable practices to responsible growth strategies, we design each part of our services in a mindful way. We aim to find the best balance between performance, design and responsibility through each step of the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
