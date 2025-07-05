import { Search } from "lucide-react";

const Header = () => {
  const navLinks = ["Home", "Watches", "About Us", "Contact Us", "Blog"];

  return (
    <header className="sticky top-0 z-50 bg-charcoal-grey border-b border-champagne-gold">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo placeholder */}
        <div className="flex items-center">
          <div className="w-32 h-8 bg-white-gold/20 rounded flex items-center justify-center text-white-gold text-sm">
            LOGO
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-kepler uppercase tracking-widest text-sm text-white-gold hover:text-light-goldenrod transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Search Icon */}
        <div className="flex items-center">
          <button className="text-white-gold hover:text-light-goldenrod transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;