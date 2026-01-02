import EncryptedText from '../ui/EncryptedText';

export default function Values() {
  const values = ["Excellence.", "Agility.", "Commitment."];

  return (
    <section id="values" className="py-[10vh] border-t border-border">
      <div className="container mx-auto px-5 md:px-10">
        <div className="mb-[100px]">
          {values.map((value, index) => (
            <div key={index} className="border-b border-border py-10">
              <h2 className="font-display font-semibold text-[clamp(3rem,8vw,9rem)] tracking-tight leading-none">
                <EncryptedText text={value} />
              </h2>
            </div>
          ))}
        </div>
        
        <div className="ml-auto max-w-[600px] text-[1.1rem] md:text-[1.5rem] leading-[1.4]">
          <p>
            From Paris to the world&apos;s most prestigious locations, we serve luxury brands with unwavering commitment to excellence and innovation. 
            <a href="#contact" className="ml-2 text-text-dim hover:text-white transition-colors text-[1.2rem]">
              Get in touch →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
