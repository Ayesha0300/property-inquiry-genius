
export interface Property {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'House' | 'Apartment' | 'Condo' | 'Townhouse';
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  year_built: number;
  description: string;
  images: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    address: "123 Lakefront Dr",
    city: "Miami",
    state: "FL",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    type: "House",
    status: "For Sale",
    year_built: 2020,
    description: "This stunning modern villa offers breathtaking lakefront views with an open floor plan perfect for entertaining. Features include a chef's kitchen, home office, and a luxurious primary suite with spa-like bathroom.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613545325268-d8e0e4e62d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Pool", "Smart Home", "Home Office", "Wine Cellar", "Fireplace"],
    agent: {
      name: "Jennifer Blake",
      phone: "(305) 555-7890",
      email: "jennifer@propertyproai.com"
    }
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    address: "456 Urban Ave, Unit 2001",
    city: "Chicago",
    state: "IL",
    price: 890000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    type: "Condo",
    status: "For Sale",
    year_built: 2018,
    description: "Exclusive penthouse with panoramic city views, featuring floor-to-ceiling windows, premium finishes, and two private balconies. Building amenities include 24/7 concierge, fitness center, and rooftop lounge.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Balcony", "Concierge", "Fitness Center", "Pet Friendly", "In-unit Laundry"],
    agent: {
      name: "Michael Rodriguez",
      phone: "(312) 555-1234",
      email: "michael@propertyproai.com"
    }
  },
  {
    id: 3,
    title: "Craftsman Family Home",
    address: "789 Maple Lane",
    city: "Seattle",
    state: "WA",
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: "House",
    status: "For Sale",
    year_built: 1935,
    description: "Charming craftsman home in a desirable neighborhood, beautifully updated while preserving original character. Features include hardwood floors, built-ins, updated kitchen, and a landscaped backyard with deck.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448075-32cab7bd9b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Hardwood Floors", "Fireplace", "Deck", "Garden", "Updated Kitchen"],
    agent: {
      name: "Sarah Johnson",
      phone: "(206) 555-9876",
      email: "sarah@propertyproai.com"
    }
  },
  {
    id: 4,
    title: "Luxury Townhome",
    address: "234 Highland Ave",
    city: "Austin",
    state: "TX",
    price: 550000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1950,
    type: "Townhouse",
    status: "For Sale",
    year_built: 2021,
    description: "Brand new luxury townhome in a gated community with high-end finishes throughout. Featuring an open concept main floor, private rooftop terrace, and two-car garage. Energy efficient and smart home ready.",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Rooftop Terrace", "Smart Home", "Garage", "Gated Community", "Energy Efficient"],
    agent: {
      name: "David Wong",
      phone: "(512) 555-4321",
      email: "david@propertyproai.com"
    }
  },
  {
    id: 5,
    title: "Waterfront Estate",
    address: "567 Shoreline Rd",
    city: "San Francisco",
    state: "CA",
    price: 3750000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4800,
    type: "House",
    status: "For Sale",
    year_built: 2015,
    description: "Spectacular waterfront estate with unobstructed bay views. This architectural masterpiece features a gourmet kitchen, wine cellar, home theater, infinity pool, and private dock. Smart home throughout.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-a17cb119144e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Waterfront", "Pool", "Home Theater", "Wine Cellar", "Private Dock"],
    agent: {
      name: "Lisa Chen",
      phone: "(415) 555-6543",
      email: "lisa@propertyproai.com"
    }
  },
  {
    id: 6,
    title: "Urban Loft Apartment",
    address: "101 Arts District Blvd, Unit 405",
    city: "Portland",
    state: "OR",
    price: 425000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 950,
    type: "Apartment",
    status: "For Sale",
    year_built: 2010,
    description: "Stylish urban loft in the heart of the Arts District with exposed brick walls, concrete floors, and industrial elements. Features include high ceilings, large windows, modern kitchen, and secure parking.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448075-d03ef277f6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Exposed Brick", "High Ceilings", "Secure Parking", "Pet Friendly", "In-unit Laundry"],
    agent: {
      name: "James Wilson",
      phone: "(503) 555-8765",
      email: "james@propertyproai.com"
    }
  }
];

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};
