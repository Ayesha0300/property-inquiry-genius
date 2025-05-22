
import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '@/services/propertyData';

const PropertyGrid: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
          <a href="/properties" className="text-estate-primary hover:underline font-medium">
            View All Properties
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 6).map(property => (
            <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${property.id * 100}ms` }}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
