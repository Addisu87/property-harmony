
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search, MapPin, DollarSign } from 'lucide-react';

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search Properties</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <DollarSign className="w-4 h-4" />
              Price Range
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <Button className="w-full">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
