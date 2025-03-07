
import { Building2, Home, Warehouse, Building, Hotel } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { label: "All", icon: Home },
  { label: "Houses", icon: Building2 },
  { label: "Apartments", icon: Building },
  { label: "Condos", icon: Hotel },
  { label: "Commercial", icon: Warehouse },
];

const CategorySelector = () => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max px-4 md:px-0">
        {categories.map((category) => (
          <Button
            key={category.label}
            variant="outline"
            className="flex items-center gap-2 rounded-full"
          >
            <category.icon className="h-4 w-4" />
            <span>{category.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
