
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Property, formatPrice } from '@/services/propertyData';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    id,
    title,
    address,
    city,
    state,
    price,
    bedrooms,
    bathrooms,
    sqft,
    type,
    status,
    images
  } = property;

  const statusColor = {
    'For Sale': 'bg-green-100 text-green-800',
    'For Rent': 'bg-blue-100 text-blue-800',
    'Sold': 'bg-red-100 text-red-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  }[status];

  return (
    <Link to={`/property/${id}`}>
      <Card className="property-card overflow-hidden h-full">
        <div className="relative">
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img 
              src={images[0]} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="absolute top-3 right-3">
            <Badge className={`${statusColor}`}>{status}</Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg line-clamp-1 text-gray-900">{title}</h3>
          </div>
          
          <p className="text-2xl font-bold text-estate-primary mb-2">{formatPrice(price)}</p>
          
          <p className="text-sm text-gray-500 mb-4 line-clamp-1">
            {address}, {city}, {state}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{bedrooms} bd</span>
            </div>
            
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{bathrooms} ba</span>
            </div>
            
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{sqft.toLocaleString()} sf</span>
            </div>
            
            <div className="flex items-center">
              <Home className="w-4 h-4 mr-1" />
              <span>{type}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
