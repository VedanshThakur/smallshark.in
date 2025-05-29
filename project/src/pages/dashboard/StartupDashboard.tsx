import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { LineChart, Users, DollarSign, ArrowUpRight, Upload } from 'lucide-react';

const StartupDashboard = () => {
  const { user } = useAuth();
  
  useEffect(() => {
    // Update page title
    document.title = 'Startup Dashboard | Small Shark';
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
            <h1 className="text-3xl font-bold mb-2">Startup Dashboard</h1>
            <p className="text-xl text-gray-600">
              Welcome back, {user?.email}
            </p>
          </div>
          
          {/* Application Status */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Application Status</h2>
              <span className="bg-warning-100 text-warning-800 text-xs font-medium px-2.5 py-0.5 rounded">
                In Review
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Initial Screening</span>
                  <span className="text-sm text-success-600">Completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-success-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Due Diligence</span>
                  <span className="text-sm text-warning-600">In Progress</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-warning-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Investor Matching</span>
                  <span className="text-sm text-gray-500">Pending</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Pitch Preparation</span>
                  <span className="text-sm text-gray-500">Pending</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Funding</span>
                  <span className="text-sm text-gray-500">Pending</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-medium mb-2">Next Steps</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Our team is reviewing your financial projections and market analysis
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Please upload the additional documents requested by our due diligence team
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Schedule a follow-up call with your assigned advisor
                </li>
              </ul>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Document Checklist</h2>
                  <button className="text-primary-600 text-sm font-medium hover:underline">
                    Upload Documents
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                        checked={true}
                        readOnly
                      />
                      <span className="ml-3 text-gray-700">Business Registration</span>
                    </div>
                    <span className="text-xs bg-success-100 text-success-800 px-2 py-0.5 rounded">Verified</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                        checked={true}
                        readOnly
                      />
                      <span className="ml-3 text-gray-700">Pitch Deck</span>
                    </div>
                    <span className="text-xs bg-success-100 text-success-800 px-2 py-0.5 rounded">Verified</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                        checked={true}
                        readOnly
                      />
                      <span className="ml-3 text-gray-700">Financial Statements</span>
                    </div>
                    <span className="text-xs bg-warning-100 text-warning-800 px-2 py-0.5 rounded">Under Review</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                        checked={false}
                        readOnly
                      />
                      <span className="ml-3 text-gray-700">Market Analysis</span>
                    </div>
                    <span className="text-xs bg-error-100 text-error-800 px-2 py-0.5 rounded">Required</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                        checked={false}
                        readOnly
                      />
                      <span className="ml-3 text-gray-700">Team Profiles</span>
                    </div>
                    <span className="text-xs bg-error-100 text-error-800 px-2 py-0.5 rounded">Required</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Messages</h2>
                  <button className="text-primary-600 text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4 py-2">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">Rahul Sharma, Due Diligence Team</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Please provide additional information about your customer acquisition strategy and unit economics in your next submission.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-200 pl-4 py-2">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">Neha Patel, Financial Advisor</p>
                      <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Your financial projections look promising. I've added some comments to the document for your review. Let's discuss in our next call.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-200 pl-4 py-2">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">Vikram Mehta, Investor Relations</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Welcome to Small Shark! I'll be your main point of contact throughout the funding process. Looking forward to helping your startup grow.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500"
                    rows={3}
                    placeholder="Type your message here..."
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Funding Progress</h2>
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="58"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-primary-600"
                        strokeWidth="8"
                        strokeDasharray={364}
                        strokeDashoffset={364 * 0.6}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="58"
                        cx="64"
                        cy="64"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-3xl font-bold">40%</p>
                      <p className="text-sm text-gray-500">Completed</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium">₹1.6 Cr / ₹4 Cr</p>
                  <p className="text-sm text-gray-500 mt-1">Target Funding</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Interest Level</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-success-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <Upload className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">Upload Files</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <LineChart className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">Update Metrics</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <Users className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">Team Profile</span>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                    <DollarSign className="mx-auto mb-2 text-primary-600" size={24} />
                    <span className="text-sm font-medium block">Funding Goals</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-sm text-gray-500">Tomorrow • 11:00 AM</p>
                    <h3 className="font-medium">Due Diligence Call</h3>
                    <p className="text-sm text-gray-600">With Rahul Sharma</p>
                  </div>
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <p className="text-sm text-gray-500">July 18, 2025 • 2:30 PM</p>
                    <h3 className="font-medium">Financial Review</h3>
                    <p className="text-sm text-gray-600">With Neha Patel</p>
                  </div>
                  <div className="border-l-4 border-accent-500 pl-4">
                    <p className="text-sm text-gray-500">July 22, 2025 • 5:30 PM</p>
                    <h3 className="font-medium">Startup Showcase</h3>
                    <p className="text-sm text-gray-600">Mumbai • Hybrid Event</p>
                  </div>
                </div>
                <button className="w-full mt-4 text-sm text-primary-600 font-medium hover:underline">
                  View Calendar
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-6 rounded-xl shadow-md text-white">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold">Growth Tip</h2>
                  <ArrowUpRight size={20} />
                </div>
                <p className="mb-4">
                  Investors value traction. Update your metrics regularly and highlight customer growth in your next submission.
                </p>
                <button className="text-sm font-medium underline">View More Tips</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupDashboard;