
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  Home, 
  MapPin, 
  Phone, 
  Mail,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Property, getPropertyById, formatPrice } from '@/services/propertyData';
import { useToast } from '@/components/ui/use-toast';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    if (id) {
      // Simulate API fetch with a small delay
      setTimeout(() => {
        const foundProperty = getPropertyById(parseInt(id));
        setProperty(foundProperty || null);
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
  const handleScheduleViewing = () => {
    toast({
      title: "Viewing Request Submitted",
      description: "A real estate agent will contact you shortly to confirm your viewing.",
    });
  };
  
  const handleNextImage = () => {
    if (property) {
      setActiveImageIndex((prev) => (prev + 1) % property.images.length);
    }
  };
  
  const handlePrevImage = () => {
    if (property) {
      setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-blue-200 mb-4"></div>
          <div className="h-4 w-48 bg-blue-200 rounded"></div>
        </div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const statusColor = {
    'For Sale': 'bg-green-100 text-green-800',
    'For Rent': 'bg-blue-100 text-blue-800',
    'Sold': 'bg-red-100 text-red-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  }[property.status];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pb-16 pt-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <Link to="/" className="text-estate-primary hover:underline flex items-center mb-2">
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Listings
              </Link>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.address}, {property.city}, {property.state}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
              <div className="flex items-center mb-2">
                <Badge className={`${statusColor} mr-3`}>{property.status}</Badge>
                <span className="text-3xl font-bold text-estate-primary">{formatPrice(property.price)}</span>
              </div>
              <div className="text-sm text-gray-600">
                Property ID: #{property.id}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative rounded-lg overflow-hidden mb-6 bg-gray-100 h-[400px] md:h-[500px]">
                <img 
                  src={property.images[activeImageIndex]} 
                  alt={`${property.title} - Image ${activeImageIndex + 1}`} 
                  className="w-full h-full object-cover"
                />
                
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {property.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full ${
                            index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="flex flex-wrap justify-between bg-gray-50 p-4 rounded-lg mb-8">
                <div className="flex items-center p-2">
                  <Bed className="text-estate-primary mr-2 w-5 h-5" />
                  <div>
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                </div>
                
                <div className="flex items-center p-2">
                  <Bath className="text-estate-primary mr-2 w-5 h-5" />
                  <div>
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                </div>
                
                <div className="flex items-center p-2">
                  <Square className="text-estate-primary mr-2 w-5 h-5" />
                  <div>
                    <div className="font-semibold">{property.sqft.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Square Feet</div>
                  </div>
                </div>
                
                <div className="flex items-center p-2">
                  <Home className="text-estate-primary mr-2 w-5 h-5" />
                  <div>
                    <div className="font-semibold">{property.type}</div>
                    <div className="text-sm text-gray-600">Property Type</div>
                  </div>
                </div>
                
                <div className="flex items-center p-2">
                  <Calendar className="text-estate-primary mr-2 w-5 h-5" />
                  <div>
                    <div className="font-semibold">{property.year_built}</div>
                    <div className="text-sm text-gray-600">Year Built</div>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="description">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="p-4">
                  <h3 className="text-xl font-semibold mb-4">About This Property</h3>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </TabsContent>
                
                <TabsContent value="features" className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-estate-primary rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Property ID</span>
                      <span className="font-medium">{property.id}</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Property Type</span>
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Price</span>
                      <span className="font-medium">{formatPrice(property.price)}</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Bedrooms</span>
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Bathrooms</span>
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Square Feet</span>
                      <span className="font-medium">{property.sqft.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Year Built</span>
                      <span className="font-medium">{property.year_built}</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span className="text-gray-600">Status</span>
                      <span className="font-medium">{property.status}</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 border mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{property.agent.name}</h4>
                    <p className="text-sm text-gray-600">Property Agent</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-estate-primary mr-2" />
                    <a href={`tel:${property.agent.phone}`} className="hover:text-estate-primary">
                      {property.agent.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-estate-primary mr-2" />
                    <a href={`mailto:${property.agent.email}`} className="hover:text-estate-primary">
                      {property.agent.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border">
                <h3 className="text-xl font-semibold mb-4">Schedule a Viewing</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      id="date"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea 
                      id="message"
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      placeholder="Add any additional information..."
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-estate-primary hover:bg-blue-700"
                    onClick={handleScheduleViewing}
                  >
                    Schedule Viewing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
