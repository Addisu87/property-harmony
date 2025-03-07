
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

interface PropertyCardProps {
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}

const PropertyCard = ({
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  imageUrl,
}: PropertyCardProps) => {
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/80 hover:bg-white/90"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-2xl font-bold">${price.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
        
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{beds} beds</span>
          <span>{baths} baths</span>
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
