
import React, { createContext, useContext, useState } from 'react';

type FilterContextType = {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  bedrooms: string | null;
  setBedrooms: (beds: string | null) => void;
  bathrooms: string | null;
  setBathrooms: (baths: string | null) => void;
  homeType: string | null;
  setHomeType: (type: string | null) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [bedrooms, setBedrooms] = useState<string | null>(null);
  const [bathrooms, setBathrooms] = useState<string | null>(null);
  const [homeType, setHomeType] = useState<string | null>(null);

  return (
    <FilterContext.Provider 
      value={{
        priceRange,
        setPriceRange,
        bedrooms,
        setBedrooms,
        bathrooms,
        setBathrooms,
        homeType,
        setHomeType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};
