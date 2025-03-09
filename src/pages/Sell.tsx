
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PropertyGrid from '@/components/PropertyGrid';
import ListingModal from '@/components/ListingModal';

const Sell = () => {
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Header Section */}
        <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Sell Your Property
            </h1>
            <Button onClick={() => setIsListingModalOpen(true)}>
              <Plus className="mr-2" />
              Create Listing
            </Button>
          </div>
          <p className="text-gray-600 max-w-2xl">
            List your property and reach millions of potential buyers. Our platform makes it easy to showcase your property and connect with serious buyers.
          </p>
        </section>

        {/* My Listings Section */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">My Listings</h2>
            <p className="text-gray-500">Manage your property listings</p>
          </div>
          <PropertyGrid />
        </section>
      </div>

      <ListingModal 
        open={isListingModalOpen}
        onOpenChange={setIsListingModalOpen}
      />

      <Footer />
    </div>
  );
};

export default Sell;
