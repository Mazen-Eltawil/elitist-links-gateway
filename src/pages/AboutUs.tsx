import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-on-scroll">
            <h1 className="font-kepler text-5xl md:text-7xl font-bold text-charcoal-grey">
              The Elitist Links Story
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start animate-on-scroll">
            <div className="space-y-6">
              <p className="text-lg text-charcoal-grey/80 leading-relaxed">
                Founded with a passion for horological excellence, Elitist Links has become the trusted bridge between collectors and their dream timepieces. Our expertise spans decades of watch curation, authentication, and advisory services.
              </p>
              <p className="text-lg text-charcoal-grey/80 leading-relaxed">
                We understand that each watch tells a story - of craftsmanship, heritage, and personal significance. That's why we've dedicated ourselves to ensuring every timepiece in our collection meets the highest standards of authenticity and quality.
              </p>
              <p className="text-lg text-charcoal-grey/80 leading-relaxed">
                From vintage Rolex Submariners to modern Patek Philippe complications, every watch in our collection undergoes rigorous authentication and evaluation. We work directly with collectors, estates, and authorized dealers to source only the finest examples of horological artistry.
              </p>
              <p className="text-lg text-charcoal-grey/80 leading-relaxed">
                Our commitment extends beyond mere transactions - we build lasting relationships with collectors who share our appreciation for exceptional timepieces and the stories they tell.
              </p>
            </div>
            <div className="space-y-8">
              <div className="aspect-[4/3] bg-champagne-gold/20 rounded-lg flex items-center justify-center">
                <div className="text-charcoal-grey/60 text-center">
                  <div className="text-6xl mb-4">⌚</div>
                  <div className="text-lg font-kepler">Luxury Timepiece Collection</div>
                </div>
              </div>
              <div className="bg-charcoal-grey p-8 rounded-lg text-white-gold">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-kepler font-bold text-light-goldenrod mb-2">500+</div>
                    <div className="text-sm">Watches Curated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-kepler font-bold text-light-goldenrod mb-2">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-kepler font-bold text-light-goldenrod mb-2">200+</div>
                    <div className="text-sm">Happy Collectors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-kepler text-3xl font-bold text-charcoal-grey text-center">
              Our Mission
            </h2>
            <p className="text-xl text-charcoal-grey/80 leading-relaxed text-center max-w-3xl mx-auto">
              To preserve and celebrate the art of fine watchmaking while making exceptional timepieces accessible to collectors who appreciate true craftsmanship and timeless design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-light-goldenrod/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-light-goldenrod rounded-full"></div>
              </div>
              <h3 className="font-kepler text-xl font-bold text-charcoal-grey">Authentication</h3>
              <p className="text-charcoal-grey/80">Every timepiece is thoroughly authenticated by our expert team using advanced verification methods.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-champagne-gold/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-champagne-gold rounded-full"></div>
              </div>
              <h3 className="font-kepler text-xl font-bold text-charcoal-grey">Curation</h3>
              <p className="text-charcoal-grey/80">We carefully select only the finest examples, ensuring each watch meets our exacting standards.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white-gold/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white-gold rounded-full"></div>
              </div>
              <h3 className="font-kepler text-xl font-bold text-charcoal-grey">Service</h3>
              <p className="text-charcoal-grey/80">Our personalized service ensures a seamless experience from discovery to delivery.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;