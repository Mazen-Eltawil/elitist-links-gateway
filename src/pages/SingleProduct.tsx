import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SingleProduct = () => {
  const watchSpecs = [
    { label: "Year", value: "2023" },
    { label: "Condition", value: "Like New" },
    { label: "Case Material", value: "Stainless Steel" },
    { label: "Case Size", value: "40mm" },
    { label: "Movement", value: "Automatic" },
    { label: "Water Resistance", value: "100m" },
    { label: "Bracelet", value: "Oyster Bracelet" },
    { label: "Box & Papers", value: "Yes" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&crop=center"
                alt="Luxury Watch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer border-2 border-transparent hover:border-champagne-gold transition-colors">
                  <img 
                    src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&crop=center&seed=${i}`}
                    alt={`Watch view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-champagne-gold/20 text-champagne-gold font-kepler uppercase tracking-wide">
                Rolex
              </Badge>
              <h1 className="font-kepler text-4xl md:text-5xl font-bold text-charcoal-grey leading-tight">
                Submariner Date
              </h1>
              <div className="font-kepler text-3xl font-bold text-light-goldenrod">
                $12,500
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-charcoal-grey/80 text-lg leading-relaxed">
                This exceptional Rolex Submariner Date represents the pinnacle of dive watch engineering. 
                With its robust construction, legendary reliability, and iconic design, this timepiece 
                embodies the perfect fusion of functionality and luxury.
              </p>
              <p className="text-charcoal-grey/80 leading-relaxed">
                Featuring the renowned Caliber 3235 movement, this watch offers superior precision and 
                a power reserve of approximately 70 hours. The Cerachrom bezel insert and Oystersteel 
                case ensure durability while maintaining the elegant aesthetic Rolex is known for.
              </p>
            </div>

            {/* Watch Specifications */}
            <div className="space-y-4">
              <h2 className="font-kepler text-2xl font-bold text-charcoal-grey">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {watchSpecs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-2 border-b border-champagne-gold/20">
                    <span className="text-charcoal-grey/70 font-medium">{spec.label}</span>
                    <span className="text-charcoal-grey font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Condition & Authenticity */}
            <div className="bg-champagne-gold/10 p-6 rounded-lg space-y-3">
              <h3 className="font-kepler text-lg font-bold text-charcoal-grey">
                Condition & Authenticity
              </h3>
              <p className="text-charcoal-grey/80 text-sm">
                This timepiece has been thoroughly inspected and authenticated by our expert team. 
                It shows minimal signs of wear and includes original box and papers. All components 
                are original and in excellent working condition.
              </p>
              <div className="flex items-center space-x-2">
                <Badge className="bg-light-goldenrod/20 text-light-goldenrod">
                  Authenticated
                </Badge>
                <Badge className="bg-light-goldenrod/20 text-light-goldenrod">
                  Warranty Included
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full bg-light-goldenrod text-charcoal-grey hover:bg-light-goldenrod/90 font-kepler uppercase tracking-wider py-4 text-lg"
                size="lg"
              >
                Inquire for Purchase
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-charcoal-grey font-kepler uppercase tracking-wider"
                >
                  Schedule Viewing
                </Button>
                <Button 
                  variant="outline" 
                  className="border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-charcoal-grey font-kepler uppercase tracking-wider"
                >
                  Request Info
                </Button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4 pt-4 border-t border-champagne-gold/20">
              <div className="text-sm text-charcoal-grey/60 space-y-2">
                <p>• Free worldwide shipping on all orders</p>
                <p>• 30-day return policy for peace of mind</p>
                <p>• Professional authentication guarantee</p>
                <p>• White-glove delivery service available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;