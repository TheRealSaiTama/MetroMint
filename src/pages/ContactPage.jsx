import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EncryptedText from '../components/ui/EncryptedText';

function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-sm text-text-dim">
      {time.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true, 
        timeZone: 'Asia/Kolkata' 
      })} IST
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg text-white relative overflow-hidden flex flex-col justify-center">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-tight"
            >
              Let&apos;s talk.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-right"
            >
              <div className="text-xs uppercase tracking-widest text-text-dim mb-1">Local Time (HQ)</div>
              <TimeDisplay />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-sm font-medium text-text-dim uppercase tracking-wider mb-4">
                  <EncryptedText text="Visit Us" />
                </h2>
                <p className="text-2xl font-light leading-relaxed">
                  Sector-37,<br />
                  Faridabad,<br />
                  Haryana, India
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium text-text-dim uppercase tracking-wider mb-4">
                   <EncryptedText text="Call Us" />
                </h2>
                <a 
                  href="tel:+919599015933" 
                  className="text-2xl font-light hover:text-white/70 transition-colors block w-fit"
                >
                  +91 95990 15933
                </a>
              </div>

              <div>
                <h2 className="text-sm font-medium text-text-dim uppercase tracking-wider mb-4">
                   <EncryptedText text="Email" />
                </h2>
                <a 
                  href="mailto:keshavsde@gmail.com" 
                  className="text-2xl font-light hover:text-white/70 transition-colors block w-fit"
                >
                  keshavsde@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-text-dim uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-text-dim uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-text-dim uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    rows="4"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group flex items-center gap-4 text-xl font-medium pt-8 hover:opacity-80 transition-opacity"
                >
                  Send Message
                  <span className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-300"></span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
