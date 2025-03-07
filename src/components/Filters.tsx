
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { 
  BedDouble, 
  Bath, 
  HomeIcon, 
  DollarSign,
  Filter
} from 'lucide-react';

const Filters = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Filters</h3>
        <Button variant="ghost" size="sm">
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
          <Slider defaultValue={[0, 1000000]} max={1000000} step={10000} />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">$0</span>
            <span className="text-sm text-muted-foreground">$1M+</span>
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
                <Button key={num} variant="outline" size="sm">
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
                <Button key={num} variant="outline" size="sm">
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
              <Button key={type} variant="outline" size="sm">
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
