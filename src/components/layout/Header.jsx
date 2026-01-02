export default function Header() {
  const links = [
    { 
      href: "#services", 
      label: "What We Do", 
      className: "hover:bg-[#00ff00] hover:border-[#00ff00] hover:text-black" 
    },
    { 
      href: "#values", 
      label: "Our DNA", 
      className: "hover:bg-[#ff0000] hover:border-[#ff0000] hover:text-black" 
    },
    { 
      href: "#contact", 
      label: "Contact", 
      className: "hover:bg-white hover:border-white hover:text-black" 
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-5 py-5 md:px-10 lg:px-10 pointer-events-none h-header">
      <div className="flex justify-between items-start">
        <a 
          href="#" 
          className="pointer-events-auto bg-black border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:border-white font-display font-bold text-base"
        >
          MetroMint
        </a>

        <nav className="hidden md:flex gap-2.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`pointer-events-auto bg-black border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${link.className}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile menu could go here */}
      </div>
    </header>
  );
}
