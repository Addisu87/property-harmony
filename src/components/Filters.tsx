
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, HomeIcon, DollarSign, Filter } from 'lucide-react';
import { useFilters } from '@/contexts/FilterContext';
import { cn } from '@/lib/utils';

const Filters = () => {
  const {
    priceRange,
    setPriceRange,
    bedrooms,
    setBedrooms,
    bathrooms,
    setBathrooms,
    homeType,
    setHomeType
  } = useFilters();

  const handleClearAll = () => {
    setPriceRange([0, 1000000]);
    setBedrooms(null);
    setBathrooms(null);
    setHomeType(null);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
    return `$${price}`;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <h3 className="font-semibold">Filters</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={handleClearAll}>
          Clear all
        </Button>
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4" />
            <span>Price Range</span>
          </label>
          <Slider 
            defaultValue={priceRange}
            value={priceRange}
            max={1000000} 
            step={10000}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="mt-2"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">{formatPrice(priceRange[0])}</span>
            <span className="text-sm text-muted-foreground">{formatPrice(priceRange[1])}</span>
          </div>
        </div>

        {/* Beds & Baths */}
        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 mb-2">
              <BedDouble className="w-4 h-4" />
              <span>Bedrooms</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, "5+"].map((num) => (
                <Button
                  key={num}
                  variant={bedrooms === String(num) ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBedrooms(bedrooms === String(num) ? null : String(num))}
                >
                  {num}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2">
              <Bath className="w-4 h-4" />
              <span>Bathrooms</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, "4+"].map((num) => (
                <Button
                  key={num}
                  variant={bathrooms === String(num) ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBathrooms(bathrooms === String(num) ? null : String(num))}
                >
                  {num}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Home Type */}
        <div>
          <label className="flex items-center gap-2 mb-2">
            <HomeIcon className="w-4 h-4" />
            <span>Home Type</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {["House", "Condo", "Townhouse", "Multi-family", "Land"].map((type) => (
              <Button
                key={type}
                variant={homeType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setHomeType(homeType === type ? null : type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
