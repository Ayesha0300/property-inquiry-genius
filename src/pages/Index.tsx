
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyGrid from '@/components/PropertyGrid';
import Features from '@/components/Features';
import ChatInterface from '@/components/ChatInterface';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PropertyGrid />
        
        <section className="py-16 container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Your AI Real Estate Assistant</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI assistant helps you manage your real estate business efficiently. It can answer client questions, 
                provide property information, and even schedule viewings - all available 24/7.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span>Instant responses to client inquiries</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span>Detailed property information on demand</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span>Scheduling and appointment management</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span>Market trend analysis and insights</span>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in">
              <ChatInterface />
            </div>
          </div>
        </section>
        
        <Features />
        <Testimonials />
        
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Real Estate Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join other successful agents who are using PropertyPro AI to grow their business and provide exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

// Helper component for the button
const Button = ({ children, className, variant = "default" }: { children: React.ReactNode; className?: string; variant?: "default" | "outline" }) => {
  return (
    <button 
      className={`
        px-6 py-3 rounded-md font-medium transition-colors
        ${variant === "default" ? "bg-estate-primary text-white hover:bg-blue-700" : ""}
        ${variant === "outline" ? "bg-transparent border border-current hover:bg-white/10" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
