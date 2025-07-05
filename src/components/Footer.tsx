import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const navLinks = ["Home", "Watches", "About Us", "Contact Us", "Blog"];

  return (
    <footer className="bg-charcoal-grey text-white-gold py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-kepler text-xl font-bold text-light-goldenrod">
              Elitist Links
            </h3>
            <p className="text-sm leading-relaxed">
              Timeless luxury watches curated for the discerning collector.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-kepler text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm hover:text-light-goldenrod transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-kepler text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>123 Luxury Avenue<br />New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@elitistlinks.com</p>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-kepler text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white-gold hover:text-light-goldenrod transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white-gold hover:text-light-goldenrod transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Sign up for our articles</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-charcoal-grey border-champagne-gold text-white-gold placeholder:text-white-gold/60"
                />
                <Button className="bg-light-goldenrod text-charcoal-grey hover:bg-light-goldenrod/90">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;