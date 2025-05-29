import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart, Shield, TrendingUp, Users } from 'lucide-react';
import InvestmentPlans from '../components/investor/InvestmentPlans';
import ROICalculator from '../components/investor/ROICalculator';

const InvestorPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Investor Portal | Small Shark';
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white pt-24 pb-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Discover Curated
              <span className="text-accent-400"> Investment</span> Opportunities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Access a portfolio of vetted startups with transparent performance metrics and flexible investment plans.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/signup?userType=investor" className="btn bg-accent-500 hover:bg-accent-600 text-white">
                Become an Investor
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold mb-4"
            >
              Why Invest with <span className="text-primary-600">Small Shark</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              We combine industry expertise with cutting-edge technology to deliver superior investment experiences.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vetted Startups</h3>
              <p className="text-gray-600">All startups undergo a rigorous due diligence process before being listed on our platform.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-gray-600">Monitor your investments with real-time updates and comprehensive performance analytics.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Above-Market Returns</h3>
              <p className="text-gray-600">Our carefully selected startups have historically delivered returns above market averages.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-success-50 text-success-600 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Investor Community</h3>
              <p className="text-gray-600">Join a community of like-minded investors and gain access to exclusive events and insights.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <InvestmentPlans />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* CTA section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Start Your Investment Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600 mb-8"
            >
              Join thousands of investors who have already discovered the potential of startup investing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/signup?userType=investor" className="btn btn-primary">
                Create Investor Account
              </Link>
              <Link to="/faq" className="btn btn-outline">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorPage;