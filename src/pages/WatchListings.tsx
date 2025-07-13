import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Footer from "@/components/Footer";
import { client, urlFor } from "@/lib/sanityClient";

interface Watch {
  _id: string;
  brand: string;
  referenceNumber: string;
  price: number;
  mainImage: any;
}

const WatchListings = () => {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [priceRange, setPriceRange] = useState([10000, 100000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedDialColors, setSelectedDialColors] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  // TODO: These filters are not yet connected to the data
  const brands = ["Rolex", "AP", "PP", "RM"];
  const materials = ["Gold", "Steel", "Titanium"];
  const dialColors = [
    { name: "Blue", color: "#1e40af" },
    { name: "Green", color: "#15803d" },
    { name: "Champagne", color: "#a59371" }
  ];
  const conditions = ["New", "Like New", "Pre-owned"];

  useEffect(() => {
    const query = '*[_type == "watch" && status == "active"]';
    client.fetch(query).then((data) => {
      setWatches(data);
    });
  }, []);

  const toggleSelection = (item: string, selected: string[], setSelected: (items: string[]) => void) => {
    if (selected.includes(item)) {
      setSelected(selected.filter(s => s !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 bg-card p-6 rounded-lg border">
              <h2 className="font-kepler text-xl font-bold text-charcoal-grey">Filters</h2>
              
              {/* Brand Filter */}
              <div className="space-y-3">
                <h3 className="font-kepler font-semibold text-charcoal-grey">Brand</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
                      className={`px-3 py-1 rounded-full text-sm smooth-transition ${
                        selectedBrands.includes(brand)
                          ? "bg-light-goldenrod text-charcoal-grey"
                          : "bg-champagne-gold/20 text-charcoal-grey hover-glow"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="space-y-3">
                <h3 className="font-kepler font-semibold text-charcoal-grey">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox 
                        id={material}
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={() => toggleSelection(material, selectedMaterials, setSelectedMaterials)}
                      />
                      <label htmlFor={material} className="text-sm text-charcoal-grey">
                        {material}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dial Color Filter */}
              <div className="space-y-3">
                <h3 className="font-kepler font-semibold text-charcoal-grey">Dial Color</h3>
                <div className="flex space-x-3">
                  {dialColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleSelection(color.name, selectedDialColors, setSelectedDialColors)}
                      className={`w-8 h-8 rounded-full border-2 smooth-transition hover:scale-110 ${
                        selectedDialColors.includes(color.name)
                          ? "border-charcoal-grey ring-2 ring-light-goldenrod"
                          : "border-gray-300 hover:border-charcoal-grey"
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div className="space-y-3">
                <h3 className="font-kepler font-semibold text-charcoal-grey">Condition</h3>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox 
                        id={condition}
                        checked={selectedConditions.includes(condition)}
                        onCheckedChange={() => toggleSelection(condition, selectedConditions, setSelectedConditions)}
                      />
                      <label htmlFor={condition} className="text-sm text-charcoal-grey">
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-3">
                <h3 className="font-kepler font-semibold text-charcoal-grey">Price Range</h3>
                <div className="px-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={200000}
                    min={5000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-charcoal-grey/60 mt-2">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sort By */}
            <div className="flex justify-between items-center">
              <h1 className="font-kepler text-3xl font-bold text-charcoal-grey">
                Watch Collection
              </h1>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="brand">Brand A-Z</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {watches.map((watch) => (
                <div key={watch._id} className="bg-card rounded-lg overflow-hidden border hover-lift">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={urlFor(watch.mainImage).width(400).height(400).fit('crop').crop('center').url()} 
                      alt={`${watch.brand} ${watch.referenceNumber}`}
                      className="w-full h-full object-cover image-lazy-load smooth-transition hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="text-sm font-medium text-champagne-gold">
                      {watch.brand}
                    </div>
                    <h3 className="font-kepler font-bold text-lg text-charcoal-grey">
                      {watch.referenceNumber}
                    </h3>
                    <div className="font-kepler text-xl font-bold text-light-goldenrod">
                      {`$${watch.price.toLocaleString()}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WatchListings;