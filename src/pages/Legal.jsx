import { motion } from 'framer-motion';

export default function Legal() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg text-white relative">
      <div className="container mx-auto px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-12"
          >
            Privacy Policy
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 text-lg font-light leading-relaxed text-white/80"
          >
            <section>
              <h2 className="text-white font-medium text-xl mb-4">1. Introduction</h2>
              <p>
                At MetroMint ("we", "our", or "us"), we respect your digital sovereignty. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our digital ecosystem. By using our services, you entrust us with your data, and we take that responsibility as seriously as we take our code.
              </p>
            </section>

            <section>
              <h2 className="text-white font-medium text-xl mb-4">2. Data Collection</h2>
              <p className="mb-4">
                We collect information necessary to provide our high-precision services, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personal identifiers (Name, Email, Phone Number) provided via our contact channels.</li>
                <li>Digital footprint data (IP address, browser type) to optimize our platform's performance.</li>
                <li>Client-specific data required for AI model training and campaign management, strictly protected under NDA.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-medium text-xl mb-4">3. Usage of Information</h2>
              <p>
                Your data fuels the engine of our collaboration. We use it to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Execute tailored marketing strategies and AI generation.</li>
                <li>Communicate project updates and strategic insights.</li>
                <li>Improve our internal algorithms and service delivery mechanisms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-medium text-xl mb-4">4. Data Protection</h2>
              <p>
                We employ industry-standard encryption and security protocols. Your data is stored in secure, access-controlled environments. We do not sell your personal data to third parties. We are the guardians of your digital assets.
              </p>
            </section>

            <section>
              <h2 className="text-white font-medium text-xl mb-4">5. Contact</h2>
              <p>
                For any privacy-related inquiries, please contact us at: <a href="mailto:keshavsde@gmail.com" className="text-white underline hover:no-underline">keshavsde@gmail.com</a>.
              </p>
            </section>

            <div className="pt-8 border-t border-white/10 text-sm text-text-dim">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
