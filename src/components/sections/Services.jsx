export default function Services() {
  const services = [
    {
      title: "AI Avatars & Influencers",
      description: "Custom AI-generated personas and influencers that represent your brand 24/7."
    },
    {
      title: "Meta Ads & Performance",
      description: "High-ROI ad campaigns targeting your exact audience for maximum conversion."
    },
    {
      title: "Complete Management",
      description: "From post creation to handling your IDs—we do it all perfectly."
    }
  ];

  return (
    <section id="services" className="py-[100px] pb-[150px] border-t border-border bg-bg">
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h3 className="text-xl text-text-dim uppercase tracking-wider">
                {service.title}
              </h3>
              <p className="text-2xl md:text-[2rem] leading-[1.3] font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
