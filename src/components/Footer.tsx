import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Footer = () => {
  const navLinks = ["Home", "Watches", "About Us", "Contact Us", "Blog"];
  const [email, setEmail] = useState("");
  const [thankYou, setThankYou] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setThankYou("");
    const url = "/api/subscribe";
    console.log("Sending email to:", url);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setEmail("");
        setThankYou("Thank you!");
      } else {
        setThankYou("Something went wrong. Please try again.");
      }
    } catch {
      setThankYou("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

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
              <p>Phone: <a href="tel:+971509977198" className="hover:text-light-goldenrod transition-colors duration-300">+971 50 997 7198</a></p>
              <p>Email: <a href="mailto:ElitistLinks@gmail.com" className="hover:text-light-goldenrod transition-colors duration-300">ElitistLinks@gmail.com</a></p>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-kepler text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/elitist.links"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-gold hover:text-light-goldenrod transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/elitist-links/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-gold hover:text-light-goldenrod transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@elitist_links"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-gold hover:text-light-goldenrod transition-colors duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Sign up for our articles</p>
              <form className="flex space-x-2" onSubmit={handleSubmit}>
                <Input
                  placeholder="Your email"
                  className="bg-charcoal-grey border-champagne-gold text-white-gold placeholder:text-white-gold/60"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                />
                <Button className="bg-light-goldenrod text-charcoal-grey hover:bg-light-goldenrod/90" type="submit" disabled={loading}>
                  {loading ? "..." : "Submit"}
                </Button>
                {thankYou && <span className="ml-2 text-light-goldenrod font-semibold">{thankYou}</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;