import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Search, Home, Key, Building2 } from 'lucide-react';
import CategorySelector from '@/components/CategorySelector';
import PropertyGrid from '@/components/PropertyGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect Place
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover your dream home with our curated selection of properties for sale and rent
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-lg p-2">
              <Search className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="flex-1 p-3 outline-none bg-transparent"
              />
              <Button className="rounded-full px-6">
                Search
              </Button>
            </div>
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
          <h2 className="text-2xl font-semibold">Featured Properties</h2>
          <Button variant="outline">View All</Button>
        </div>
        <PropertyGrid />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buy Feature */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300 animate-slideUp">
              <Home className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buy a Home</h3>
              <p className="text-gray-600 mb-4">
                Find your place with an immersive photo experience and the most listings
              </p>
              <Button variant="outline" className="w-full">
                Browse Homes
              </Button>
            </div>

            {/* Rent Feature */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <Key className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rent a Home</h3>
              <p className="text-gray-600 mb-4">
                We're creating a seamless online experience from shopping to signing
              </p>
              <Button variant="outline" className="w-full">
                Find Rentals
              </Button>
            </div>

            {/* Sell Feature */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-lg transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <Building2 className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sell a Home</h3>
              <p className="text-gray-600 mb-4">
                Whether selling or renting, we can help you move forward
              </p>
              <Button variant="outline" className="w-full">
                See Your Options
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
