export default function Services() {
  const services = [
    {
      title: "Social Content",
      description: "Consistent, on-brand posts that keep your audience engaged without you lifting a finger."
    },
    {
      title: "Growth Strategy",
      description: "Clear, actionable plans to attract the right audience and turn followers into customers."
    },
    {
      title: "Smart Automation",
      description: "Lead capture forms, WhatsApp auto-replies, and workflows that work while you sleep."
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
