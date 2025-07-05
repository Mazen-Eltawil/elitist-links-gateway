import { Button } from "@/components/ui/button";
import Header from "./Header";
import Footer from "./Footer";

const Homepage = () => {
  const brandLogos = [
    { name: "Rolex", placeholder: "R" },
    { name: "Audemars Piguet", placeholder: "AP" },
    { name: "Patek Philippe", placeholder: "PP" },
    { name: "Richard Mille", placeholder: "RM" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-4xl mx-auto">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center h-32 border border-champagne-gold/20 rounded-lg hover:border-champagne-gold transition-colors duration-300"
              >
                <span className="font-kepler text-2xl font-bold text-charcoal-grey">
                  {brand.placeholder}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Consignment Section */}
      <section className="py-24 bg-charcoal-grey">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Looking for something special */}
            <div className="text-center space-y-6">
              <h2 className="font-kepler text-3xl font-bold text-white-gold">
                Looking for something special?
              </h2>
              <p className="text-white-gold/80 text-lg leading-relaxed">
                Our curated collection features the world's most sought-after timepieces.
              </p>
              <Button className="bg-transparent border-2 border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-charcoal-grey font-kepler uppercase tracking-wider px-6 py-3">
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
              <Button className="bg-transparent border-2 border-light-goldenrod text-light-goldenrod hover:bg-light-goldenrod hover:text-charcoal-grey font-kepler uppercase tracking-wider px-6 py-3">
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