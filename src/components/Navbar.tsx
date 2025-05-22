
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Search, 
  MessageSquare, 
  BarChart, 
  Menu,
  X
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Home className="w-6 h-6 text-estate-primary" />
          <span className="hidden md:block text-xl font-bold text-estate-dark">PropertyPro AI</span>
        </Link>
        
        {!isMobile ? (
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-estate-secondary hover:text-estate-primary transition-colors">
              Home
            </Link>
            <Link to="/properties" className="text-estate-secondary hover:text-estate-primary transition-colors">
              Listings
            </Link>
            <Link to="/assistant" className="text-estate-secondary hover:text-estate-primary transition-colors">
              AI Assistant
            </Link>
            <Link to="/dashboard" className="text-estate-secondary hover:text-estate-primary transition-colors">
              Agent Dashboard
            </Link>
          </nav>
        ) : null}
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-estate-secondary">
            <Search className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-estate-secondary md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          
          <Button className="hidden md:inline-flex bg-estate-primary hover:bg-blue-700 text-white">
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-md animate-fade-in">
          <div className="container flex flex-col py-4 px-4">
            <Link to="/" className="py-3 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/properties" className="py-3 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>
              Listings
            </Link>
            <Link to="/assistant" className="py-3 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>
              AI Assistant
            </Link>
            <Link to="/dashboard" className="py-3 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>
              Agent Dashboard
            </Link>
            <Button className="mt-4 bg-estate-primary hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
