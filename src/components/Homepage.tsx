import { Button } from "@/components/ui/button";
import Footer from "./Footer";

const Homepage = () => {
  const brandLogos = [
    { name: "Rolex", src: "/images/rolex-logo.png" },
    { name: "Audemars Piguet", src: "/images/ap-logo.png" },
    { name: "Patek Philippe", src: "/images/patek-logo.png" },
    { name: "Richard Mille", src: "/images/rm-logo.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-charcoal-grey flex items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="font-kepler text-6xl md:text-8xl font-bold text-white-gold leading-tight">
            Timeless Legacy.<br />
            Modern Curation.
          </h1>
          <Button className="bg-light-goldenrod text-charcoal-grey hover:bg-light-goldenrod/90 font-kepler uppercase tracking-wider px-8 py-4 text-lg">
            Explore The Collection
          </Button>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-kepler text-4xl md:text-5xl font-bold text-charcoal-grey mb-8">
              Trusted by Collectors of the World's Finest Brands
            </h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="/images/rolex-logo.png"
                  alt="Rolex Logo"
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/ap-logo.png"
                  alt="Audemars Piguet Logo"
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/patek-logo.png"
                  alt="Patek Philippe Logo"
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/rm-logo.png"
                  alt="Richard Mille Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-on-scroll items-center justify-items-center">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center h-24 w-full"
              >
                <img 
                  src={brand.src} 
                  alt={brand.name} 
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Consignment Section */}
      <section className="py-24 bg-charcoal-grey">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto animate-on-scroll">
            {/* Looking for something special */}
            <div className="text-center space-y-6">
              <h2 className="font-kepler text-3xl font-bold text-white-gold">
                Looking for something special?
              </h2>
              <p className="text-white-gold/80 text-lg leading-relaxed">
                Our curated collection features the world's most sought-after timepieces.
              </p>
              <Button className="bg-transparent border-2 border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-charcoal-grey font-kepler uppercase tracking-wider px-6 py-3 smooth-transition">
                Browse Collection
              </Button>
            </div>

            {/* Have a watch to sell */}
            <div className="text-center space-y-6">
              <h2 className="font-kepler text-3xl font-bold text-white-gold">
                Have a watch to sell?
              </h2>
              <p className="text-white-gold/80 text-lg leading-relaxed">
                Partner with us to connect your timepiece with the right collector.
              </p>
              <Button className="bg-transparent border-2 border-light-goldenrod text-light-goldenrod hover:bg-light-goldenrod hover:text-charcoal-grey font-kepler uppercase tracking-wider px-6 py-3 smooth-transition">
                Start Consignment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;