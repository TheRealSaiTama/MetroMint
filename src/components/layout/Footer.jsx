export default function Footer() {
  return (
    <footer 
      id="contact" 
      className="fixed bottom-0 left-0 right-0 h-[600px] lg:h-[400px] z-0 bg-[#232323] flex items-center pb-10"
    >
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-4">MetroMint Paris</h4>
            <p className="text-base text-white leading-relaxed">
              6-8 Rue de l&apos;Équerre<br />75019 Paris<br />France
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-4">MetroMint Hong Kong</h4>
            <p className="text-base text-white leading-relaxed">
              Unit 2302A, 23/F, The Centrium<br />60 Wyndham street<br />Central, Hong Kong
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="#" 
                className="text-base text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all duration-300 w-fit"
              >
                Linkedin
              </a>
              <a 
                href="#" 
                className="text-base text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all duration-300 w-fit"
              >
                Privacy policy
              </a>
              <span className="text-neutral-600 text-sm mt-4">© {new Date().getFullYear()} MetroMint</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
