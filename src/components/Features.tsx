
import React from 'react';
import { 
  Building,
  Search,
  MessageSquare,
  Calendar,
  Briefcase,
  BarChart3
} from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Building className="w-10 h-10 text-estate-primary" />,
      title: "Property Management",
      description: "Manage your property listings with ease. Add new properties, update details, and mark as sold."
    },
    {
      icon: <Search className="w-10 h-10 text-estate-primary" />,
      title: "Smart Search",
      description: "Our AI-powered search helps clients find exactly what they're looking for, matching preferences perfectly."
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-estate-primary" />,
      title: "AI Assistant",
      description: "24/7 AI assistant answers client questions instantly, providing property details and scheduling viewings."
    },
    {
      icon: <Calendar className="w-10 h-10 text-estate-primary" />,
      title: "Appointment Scheduling",
      description: "Clients can schedule property viewings directly through our platform, syncing with your calendar."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-estate-primary" />,
      title: "Document Management",
      description: "Store and manage all your property documents securely in one place for easy access."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-estate-primary" />,
      title: "Market Analytics",
      description: "Get insights on property market trends, helping you make informed decisions for your clients."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Real Estate Agents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform helps you manage your real estate business more efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
