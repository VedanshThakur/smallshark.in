import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { PieChart, BarChart, FileText, Upload } from 'lucide-react';

const InvestorDashboard = () => {
  const { user } = useAuth();
  
  useEffect(() => {
    // Update page title
    document.title = 'Investor Dashboard | Small Shark';
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Investor Dashboard</h1>
            <p className="text-xl text-gray-600">
              Welcome back, {user?.email}
            </p>
          </div>
          
          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">Total Investment</h3>
              <p className="text-3xl font-bold">₹28,50,000</p>
              <p className="text-sm text-gray-500 mt-1">Across 7 startups</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">Current Value</h3>
              <p className="text-3xl font-bold text-success-600">₹32,80,500</p>
              <p className="text-sm text-success-500 mt-1">+15.1% overall</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">Available Funds</h3>
              <p className="text-3xl font-bold">₹12,50,000</p>
              <p className="text-sm text-gray-500 mt-1">Ready to invest</p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Your Investments</h2>
                  <button className="text-primary-600 text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left font-medium text-gray-500 text-sm py-3">Startup</th>
                        <th className="text-left font-medium text-gray-500 text-sm py-3">Sector</th>
                        <th className="text-right font-medium text-gray-500 text-sm py-3">Investment</th>
                        <th className="text-right font-medium text-gray-500 text-sm py-3">Current Value</th>
                        <th className="text-right font-medium text-gray-500 text-sm py-3">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-3">
                              TC
                            </div>
                            <span className="font-medium">TechCube</span>
                          </div>
                        </td>
                        <td className="py-4 text-gray-600">SaaS</td>
                        <td className="py-4 text-right">₹5,00,000</td>
                        <td className="py-4 text-right">₹6,25,000</td>
                        <td className="py-4 text-right text-success-600">+25.0%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-secondary-100 text-secondary-700 rounded-full flex items-center justify-center mr-3">
                              HT
                            </div>
                            <span className="font-medium">HealthTech</span>
                          </div>
                        </td>
                        <td className="py-4 text-gray-600">Healthcare</td>
                        <td className="py-4 text-right">₹7,50,000</td>
                        <td className="py-4 text-right">₹8,10,000</td>
                        <td className="py-4 text-right text-success-600">+8.0%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-accent-100 text-accent-700 rounded-full flex items-center justify-center mr-3">
                              FP
                            </div>
                            <span className="font-medium">FinPay</span>
                          </div>
                        </td>
                        <td className="py-4 text-gray-600">Fintech</td>
                        <td className="py-4 text-right">₹10,00,000</td>
                        <td className="py-4 text-right">₹12,20,000</td>
                        <td className="py-4 text-right text-success-600">+22.0%</td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-error-100 text-error-700 rounded-full flex items-center justify-center mr-3">
                              EL
                            </div>
                            <span className="font-medium">EduLearn</span>
                          </div>
                        </td>
                        <td className="py-4 text-gray-600">EdTech</td>
                        <td className="py-4 text-right">₹6,00,000</td>
                        <td className="py-4 text-right">₹5,70,000</td>
                        <td className="py-4 text-right text-error-600">-5.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">New Opportunities</h2>
                  <button className="text-primary-600 text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">GreenEnergy Solutions</h3>
                        <p className="text-sm text-gray-600">Clean Energy</p>
                      </div>
                      <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Advanced Plan
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Developing innovative solar energy storage solutions for residential and commercial applications.
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">Funding Target</p>
                        <p className="font-medium">₹2.5 Cr</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Min. Investment</p>
                        <p className="font-medium">₹5 Lakhs</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Expected ROI</p>
                        <p className="font-medium text-success-600">12-15%</p>
                      </div>
                      <button className="btn btn-sm btn-primary">View Details</button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">FoodTech Innovations</h3>
                        <p className="text-sm text-gray-600">Food & Agriculture</p>
                      </div>
                      <span className="bg-accent-100 text-accent-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Angel+ Plan
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Revolutionizing farm-to-table supply chain with blockchain and IoT technology to reduce waste and increase efficiency.
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">Funding Target</p>
                        <p className="font-medium">₹3.8 Cr</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Min. Investment</p>
                        <p className="font-medium">₹10 Lakhs</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Expected ROI</p>
                        <p className="font-medium text-success-600">18-22%</p>
                      </div>
                      <button className="btn btn-sm btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Sector Allocation</h2>
                <div className="flex items-center justify-center py-4">
                  <PieChart size={180} className="text-gray-300" />
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                      <span className="text-sm">Fintech</span>
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></div>
                      <span className="text-sm">Healthcare</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent-500 rounded-full mr-2"></div>
                      <span className="text-sm">EdTech</span>
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-success-500 rounded-full mr-2"></div>
                      <span className="text-sm">SaaS</span>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-warning-500 rounded-full mr-2"></div>
                      <span className="text-sm">Others</span>
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <Upload className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">Add Funds</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <BarChart className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">Performance</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <FileText className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">Tax Reports</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <Upload className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">KYC Upload</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-sm text-gray-500">July 15, 2025 • 2:00 PM</p>
                    <h3 className="font-medium">Q2 Portfolio Review</h3>
                    <p className="text-sm text-gray-600">Online Webinar</p>
                  </div>
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <p className="text-sm text-gray-500">July 22, 2025 • 5:30 PM</p>
                    <h3 className="font-medium">Startup Showcase</h3>
                    <p className="text-sm text-gray-600">Mumbai • Hybrid Event</p>
                  </div>
                  <div className="border-l-4 border-accent-500 pl-4">
                    <p className="text-sm text-gray-500">August 5, 2025 • 3:00 PM</p>
                    <h3 className="font-medium">Tax Planning Workshop</h3>
                    <p className="text-sm text-gray-600">Online Webinar</p>
                  </div>
                </div>
                <button className="w-full mt-4 text-sm text-primary-600 font-medium hover:underline">
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorDashboard;