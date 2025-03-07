import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import CategorySelector from '@/components/CategorySelector';
import PropertyGrid from '@/components/PropertyGrid';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Buy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Search Section */}
        <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Properties for Sale
          </h1>
          
          <div className="w-full">
            <div className="flex items-center bg-white rounded-lg border shadow-sm p-2">
              <Search className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="flex-1 p-3 outline-none bg-transparent"
              />
              <Button className="rounded-lg px-6">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Category Selector */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <CategorySelector />
        </section>

        {/* Property Grid Section */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold">Available Properties</h2>
              <p className="text-gray-500">Showing all properties for sale</p>
            </div>
            <Button variant="outline">Filter</Button>
          </div>
          <PropertyGrid />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
