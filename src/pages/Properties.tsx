
import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/services/propertyData';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 4000000],
    bedrooms: 0,
    bathrooms: 0,
    propertyType: ''
  });
  
  const propertyTypes = ['House', 'Apartment', 'Condo', 'Townhouse'];
  
  // Filter properties based on search and filters
  const filteredProperties = properties.filter(property => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.state.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = 
      property.price >= filters.priceRange[0] && 
      property.price <= filters.priceRange[1];
    
    const matchesBedrooms = 
      filters.bedrooms === 0 || property.bedrooms >= filters.bedrooms;
    
    const matchesBathrooms = 
      filters.bathrooms === 0 || property.bathrooms >= filters.bathrooms;
    
    const matchesType = 
      filters.propertyType === '' || 
      property.type === filters.propertyType;
    
    return matchesSearch && matchesPrice && matchesBedrooms && matchesBathrooms && matchesType;
  });
  
  const handleReset = () => {
    setFilters({
      priceRange: [0, 4000000],
      bedrooms: 0,
      bathrooms: 0,
      propertyType: ''
    });
    setSearchQuery('');
  };
  
  const formatPriceLabel = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gray-100 py-12">
          <div className="container px-4">
            <h1 className="text-3xl font-bold mb-2">Browse Properties</h1>
            <p className="text-gray-600 mb-6">Find your perfect property from our exclusive listings</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location, property name..."
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-estate-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filter Properties</SheetTitle>
                  </SheetHeader>
                  
                  <div className="py-6 space-y-6">
                    <div>
                      <h3 className="font-medium mb-4">Price Range</h3>
                      <Slider
                        value={filters.priceRange}
                        min={0}
                        max={4000000}
                        step={50000}
                        onValueChange={(value) => setFilters({ ...filters, priceRange: value as [number, number] })}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm">
                        <span>{formatPriceLabel(filters.priceRange[0])}</span>
                        <span>{formatPriceLabel(filters.priceRange[1])}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Bedrooms</h3>
                      <div className="flex gap-2 flex-wrap">
                        {[0, 1, 2, 3, 4, 5].map(num => (
                          <button
                            key={num}
                            className={`px-4 py-2 border rounded-full 
                              ${filters.bedrooms === num ? 'bg-estate-primary text-white' : 'bg-white'}
                            `}
                            onClick={() => setFilters({ ...filters, bedrooms: num })}
                          >
                            {num === 0 ? 'Any' : num === 5 ? '5+' : num}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Bathrooms</h3>
                      <div className="flex gap-2 flex-wrap">
                        {[0, 1, 2, 3, 4].map(num => (
                          <button
                            key={num}
                            className={`px-4 py-2 border rounded-full 
                              ${filters.bathrooms === num ? 'bg-estate-primary text-white' : 'bg-white'}
                            `}
                            onClick={() => setFilters({ ...filters, bathrooms: num })}
                          >
                            {num === 0 ? 'Any' : num === 4 ? '4+' : num}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Property Type</h3>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          className={`px-4 py-2 border rounded-full 
                            ${filters.propertyType === '' ? 'bg-estate-primary text-white' : 'bg-white'}
                          `}
                          onClick={() => setFilters({ ...filters, propertyType: '' })}
                        >
                          Any
                        </button>
                        {propertyTypes.map(type => (
                          <button
                            key={type}
                            className={`px-4 py-2 border rounded-full 
                              ${filters.propertyType === type ? 'bg-estate-primary text-white' : 'bg-white'}
                            `}
                            onClick={() => setFilters({ ...filters, propertyType: type })}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                      <SheetClose asChild>
                        <Button className="flex-1 bg-estate-primary hover:bg-blue-700">
                          Apply
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              </p>
              
              {(searchQuery || filters.bedrooms !== 0 || filters.bathrooms !== 0 || filters.propertyType !== '' || 
                filters.priceRange[0] !== 0 || filters.priceRange[1] !== 4000000) && (
                <Button variant="ghost" onClick={handleReset} className="text-estate-primary">
                  Clear filters
                </Button>
              )}
            </div>
            
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                <Button onClick={handleReset}>Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
