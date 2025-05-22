
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Home,
  Users,
  MessageSquare,
  Calendar,
  TrendingUp,
  Settings
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { properties } from '@/services/propertyData';
import { formatPrice } from '@/services/propertyData';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample data for charts
const performanceData = [
  { month: 'Jan', inquiries: 65, viewings: 28, sales: 2 },
  { month: 'Feb', inquiries: 59, viewings: 32, sales: 3 },
  { month: 'Mar', inquiries: 80, viewings: 41, sales: 4 },
  { month: 'Apr', inquiries: 81, viewings: 39, sales: 3 },
  { month: 'May', inquiries: 56, viewings: 24, sales: 2 },
  { month: 'Jun', inquiries: 55, viewings: 35, sales: 5 },
  { month: 'Jul', inquiries: 40, viewings: 22, sales: 3 },
];

const clientInquiries = [
  {
    id: 1,
    client: 'John Doe',
    email: 'john@example.com',
    message: "I'm interested in the Waterfront Estate. Is it still available?",
    property: 'Waterfront Estate',
    date: '2023-05-21T10:30:00',
    status: 'New'
  },
  {
    id: 2,
    client: 'Sarah Williams',
    email: 'sarah@example.com',
    message: "Can I schedule a viewing for the Modern Luxury Villa this weekend?",
    property: 'Modern Luxury Villa',
    date: '2023-05-20T14:15:00',
    status: 'Responded'
  },
  {
    id: 3,
    client: 'Mike Johnson',
    email: 'mike@example.com',
    message: "What's the lowest price you can offer for the Downtown Penthouse?",
    property: 'Downtown Penthouse',
    date: '2023-05-19T09:45:00',
    status: 'Closed'
  },
  {
    id: 4,
    client: 'Emma Garcia',
    email: 'emma@example.com',
    message: "I'd like more information about the Craftsman Family Home.",
    property: 'Craftsman Family Home',
    date: '2023-05-18T16:20:00',
    status: 'New'
  },
  {
    id: 5,
    client: 'Alex Turner',
    email: 'alex@example.com',
    message: "Is the Urban Loft Apartment pet-friendly?",
    property: 'Urban Loft Apartment',
    date: '2023-05-17T11:10:00',
    status: 'Responded'
  },
];

const upcomingViewings = [
  {
    id: 1,
    client: 'Rachel Green',
    property: 'Modern Luxury Villa',
    date: '2023-05-23T13:00:00',
    status: 'Confirmed'
  },
  {
    id: 2,
    client: 'Ross Geller',
    property: 'Downtown Penthouse',
    date: '2023-05-24T10:30:00',
    status: 'Pending'
  },
  {
    id: 3,
    client: 'Monica Bing',
    property: 'Waterfront Estate',
    date: '2023-05-24T15:45:00',
    status: 'Confirmed'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container px-4">
          <h1 className="text-3xl font-bold mb-6">Agent Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Properties</p>
                    <h3 className="text-2xl font-bold">{properties.length}</h3>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-md">
                    <Home className="w-6 h-6 text-estate-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Active Inquiries</p>
                    <h3 className="text-2xl font-bold">{clientInquiries.filter(i => i.status !== 'Closed').length}</h3>
                  </div>
                  <div className="p-2 bg-green-100 rounded-md">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Upcoming Viewings</p>
                    <h3 className="text-2xl font-bold">{upcomingViewings.length}</h3>
                  </div>
                  <div className="p-2 bg-purple-100 rounded-md">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Clients</p>
                    <h3 className="text-2xl font-bold">24</h3>
                  </div>
                  <div className="p-2 bg-amber-100 rounded-md">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="properties">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="viewings">Viewings</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="properties">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Your Properties</CardTitle>
                    <Button className="bg-estate-primary hover:bg-blue-700">
                      Add New Property
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Property</th>
                          <th className="text-left py-3 px-4">Location</th>
                          <th className="text-left py-3 px-4">Price</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map(property => (
                          <tr key={property.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded overflow-hidden mr-3 bg-gray-100 flex-shrink-0">
                                  <img 
                                    src={property.images[0]} 
                                    alt={property.title} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="font-medium">{property.title}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">{property.city}, {property.state}</td>
                            <td className="py-3 px-4">{formatPrice(property.price)}</td>
                            <td className="py-3 px-4">
                              <Badge className={
                                property.status === 'For Sale' ? 'bg-green-100 text-green-800' :
                                property.status === 'For Rent' ? 'bg-blue-100 text-blue-800' :
                                property.status === 'Sold' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }>
                                {property.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="inquiries">
              <Card>
                <CardHeader>
                  <CardTitle>Client Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Client</th>
                          <th className="text-left py-3 px-4">Message</th>
                          <th className="text-left py-3 px-4">Property</th>
                          <th className="text-left py-3 px-4">Date</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientInquiries.map(inquiry => (
                          <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium">{inquiry.client}</div>
                                <div className="text-gray-500 text-xs">{inquiry.email}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="max-w-xs truncate">{inquiry.message}</div>
                            </td>
                            <td className="py-3 px-4">{inquiry.property}</td>
                            <td className="py-3 px-4">
                              {new Date(inquiry.date).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4">
                              <Badge className={
                                inquiry.status === 'New' ? 'bg-blue-100 text-blue-800' :
                                inquiry.status === 'Responded' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }>
                                {inquiry.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Button variant="outline" size="sm">Respond</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="viewings">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Property Viewings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingViewings.map(viewing => (
                      <Card key={viewing.id}>
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            <div>
                              <h3 className="font-semibold">{viewing.property}</h3>
                              <p className="text-gray-500 text-sm">
                                Client: {viewing.client}
                              </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                              <div className="bg-gray-100 px-3 py-1 rounded text-sm">
                                {new Date(viewing.date).toLocaleDateString()} at {new Date(viewing.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              </div>
                              <Badge className={
                                viewing.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                'bg-yellow-100 text-yellow-800'
                              }>
                                {viewing.status}
                              </Badge>
                              <Button variant="outline" size="sm">Manage</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="inquiries" stroke="#3b82f6" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="viewings" stroke="#10b981" />
                        <Line type="monotone" dataKey="sales" stroke="#f59e0b" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Property Interest by Type</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { type: 'House', count: 45 },
                        { type: 'Condo', count: 28 },
                        { type: 'Townhouse', count: 15 },
                        { type: 'Apartment', count: 12 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="type" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
