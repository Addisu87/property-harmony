
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Home, MapPin, DollarSign, ImagePlus } from 'lucide-react';

interface ListingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ListingModal = ({ open, onOpenChange }: ListingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Listing</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Property Details */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Home className="w-4 h-4" />
              Property Title
            </label>
            <input
              type="text"
              placeholder="Enter property title"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Location
            </label>
            <input
              type="text"
              placeholder="Enter property address"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <DollarSign className="w-4 h-4" />
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Images */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <ImagePlus className="w-4 h-4" />
              Property Images
            </label>
            <div className="border-2 border-dashed rounded-md p-8 text-center">
              <Button variant="outline">Upload Images</Button>
              <p className="mt-2 text-sm text-gray-500">
                Upload up to 10 images of your property
              </p>
            </div>
          </div>

          <Button className="w-full">
            Create Listing
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ListingModal;
