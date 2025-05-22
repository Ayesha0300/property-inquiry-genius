
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';
import { properties } from '@/services/propertyData';
import { Card, CardContent } from '@/components/ui/card';

const Assistant = () => {
  // Sample demo questions for users to try
  const demoQuestions = [
    "What properties do you have available in Miami?",
    "I'm looking for a 3-bedroom house under $800,000",
    "Tell me about the Downtown Penthouse listing",
    "What features does the Waterfront Estate have?",
    "Can I schedule a viewing for the Modern Luxury Villa?",
    "What's the current market trend in Seattle?"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">AI Real Estate Assistant</h1>
              <p className="text-gray-600">
                Get instant answers to your real estate questions, property information, and market insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <ChatInterface />
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-3">Try asking about:</h3>
                    <ul className="space-y-2">
                      {demoQuestions.map((question, index) => (
                        <li key={index} className="bg-gray-50 p-2 rounded text-sm hover:bg-gray-100 cursor-pointer">
                          "{question}"
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-3">Available Properties</h3>
                    <ul className="space-y-2 text-sm">
                      {properties.slice(0, 5).map(property => (
                        <li key={property.id} className="flex justify-between border-b pb-2">
                          <span className="font-medium">{property.title}</span>
                          <span className="text-estate-primary">${property.price.toLocaleString()}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-3">What I can do</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">✓</div>
                        <span>Answer questions about properties</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">✓</div>
                        <span>Help search for properties by criteria</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">✓</div>
                        <span>Schedule property viewings</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">✓</div>
                        <span>Provide market insights and trends</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">✓</div>
                        <span>Connect you with a human agent</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assistant;
