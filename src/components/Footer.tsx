
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-6 h-6 text-estate-primary" />
              <span className="text-xl font-bold text-white">PropertyPro AI</span>
            </div>
            <p className="mb-6 opacity-80">
              AI-powered real estate assistant for your small home business. Making property management simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-white transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/assistant" className="hover:text-white transition-colors">AI Assistant</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Market Trends</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Agent Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Help Center</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-estate-primary" />
                <span>contact@propertyproai.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-estate-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li>
                <a href="#" className="inline-block bg-estate-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {year} PropertyPro AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
