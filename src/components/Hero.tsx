
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center md:py-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Find Your Dream Home with AI
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-blue-100 mb-8">
          PropertyPro AI matches you with your perfect property using advanced artificial intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button className="w-full sm:w-auto text-lg bg-white text-blue-700 hover:bg-blue-50">
            View Listings
          </Button>
          <Button variant="outline" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white/10">
            Talk to AI Assistant
          </Button>
        </div>
        
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden p-1">
            <input 
              type="text" 
              placeholder="Search for properties..." 
              className="w-full px-6 py-4 text-gray-900 focus:outline-none"
            />
            <Button className="mr-1 bg-estate-primary hover:bg-blue-700">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
