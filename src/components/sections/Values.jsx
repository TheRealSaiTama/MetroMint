import { Link } from 'react-router-dom';
import EncryptedText from '../ui/EncryptedText';

export default function Values() {
  const values = ["Innovation.", "Precision.", "Perfection."];

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
        
        <div className="ml-auto max-w-[700px] text-[1.1rem] md:text-[1.5rem] leading-[1.4]">
          <p>
            From Faridabad to the global digital stage, we serve forward-thinking brands like <b>SNK</b> and <b>IMB360</b> with an unwavering commitment to excellence and automation.
            <Link to="/contact" className="ml-2 text-text-dim hover:text-white transition-colors text-[1.2rem]">
              Get in touch →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
