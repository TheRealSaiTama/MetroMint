import { Link } from 'react-router-dom';

export default function Header() {
  const links = [
    { 
      to: "/services", 
      label: "What We Do", 
      className: "hover:bg-[#00ff00] hover:border-[#00ff00] hover:text-black" 
    },
    { 
      to: "/values", 
      label: "Our DNA", 
      className: "hover:bg-[#ff0000] hover:border-[#ff0000] hover:text-black" 
    },
    { 
      to: "/#contact", 
      label: "Contact", 
      className: "hover:bg-white hover:border-white hover:text-black",
      isAnchor: true
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-5 py-5 md:px-10 lg:px-10 pointer-events-none h-header">
      <div className="flex justify-between items-start">
        <Link 
          to="/" 
          className="pointer-events-auto bg-black border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:border-white font-display font-bold text-base"
        >
          MetroMint
        </Link>

        <nav className="hidden md:flex gap-2.5">
          {links.map((link) => (
            link.isAnchor ? (
              <a
                key={link.to}
                href="#contact"
                className={`pointer-events-auto bg-black border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${link.className}`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`pointer-events-auto bg-black border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${link.className}`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
