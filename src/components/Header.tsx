import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Watches", path: "/watches" }, 
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-charcoal-grey border-b border-champagne-gold">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/aff64c40-bb63-4ec8-894d-3048a1a404b5.png" 
            alt="Elitist Links" 
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-kepler uppercase tracking-widest text-sm text-white-gold hover:text-light-goldenrod smooth-transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Icon */}
        <div className="flex items-center">
          <button className="text-white-gold hover:text-light-goldenrod smooth-transition">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;