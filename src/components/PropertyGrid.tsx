
import PropertyCard from "./PropertyCard";

const mockProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 599000,
    location: "123 Main St, Downtown",
    beds: 2,
    baths: 2,
    sqft: 1200,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  },
  {
    id: 2,
    title: "Luxury Waterfront Villa",
    price: 1299000,
    location: "456 Ocean Drive",
    beds: 4,
    baths: 3,
    sqft: 2800,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    price: 449000,
    location: "789 Maple Avenue",
    beds: 3,
    baths: 2,
    sqft: 1800,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 4,
    title: "Urban Loft Space",
    price: 699000,
    location: "321 City Center",
    beds: 1,
    baths: 2,
    sqft: 1100,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
];

const PropertyGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mockProperties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
