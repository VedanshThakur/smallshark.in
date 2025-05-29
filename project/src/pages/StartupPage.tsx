import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, TrendingUp, Users, DollarSign } from 'lucide-react';
import WaitlistForm from '../components/startup/WaitlistForm';

const StartupPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Startup Portal | Small Shark';
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-900 text-white pt-24 pb-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Accelerate Your 
              <span className="text-accent-400"> Startup Growth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Connect with strategic investors who provide not just capital, but mentorship and networks to fuel your success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#startup-form" className="btn bg-accent-500 hover:bg-accent-600 text-white">
                Apply for Funding
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
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
              Why Choose <span className="text-primary-600">Small Shark</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              We're more than just a funding platform. We're partners in your growth journey.
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
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Access to Capital</h3>
              <p className="text-gray-600">Connect with investors looking specifically for opportunities in your sector and stage.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Network</h3>
              <p className="text-gray-600">Tap into our extensive network of industry experts, mentors, and potential clients.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mb-4">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Acceleration</h3>
              <p className="text-gray-600">Benefit from our tailored growth programs designed to help you scale efficiently.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-success-50 text-success-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Visibility</h3>
              <p className="text-gray-600">Gain exposure to our community of investors, partners, and potential customers.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold mb-4"
            >
              Our <span className="text-primary-600">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              From application to funding, we've designed a transparent and efficient process.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute top-0 left-6 bottom-0 w-1 bg-primary-100"></div>
                <div className="absolute top-0 left-5 w-3 h-3 rounded-full bg-primary-500 shadow-lg"></div>
                <div className="pl-16">
                  <h3 className="text-xl font-semibold mb-2">1. Application</h3>
                  <p className="text-gray-600">
                    Fill out our detailed application form with information about your startup, team, and funding needs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute top-0 left-6 bottom-0 w-1 bg-primary-100"></div>
                <div className="absolute top-0 left-5 w-3 h-3 rounded-full bg-primary-500 shadow-lg"></div>
                <div className="pl-16">
                  <h3 className="text-xl font-semibold mb-2">2. Initial Screening</h3>
                  <p className="text-gray-600">
                    Our team reviews your application and evaluates the potential fit with our investor network.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute top-0 left-6 bottom-0 w-1 bg-primary-100"></div>
                <div className="absolute top-0 left-5 w-3 h-3 rounded-full bg-primary-500 shadow-lg"></div>
                <div className="pl-16">
                  <h3 className="text-xl font-semibold mb-2">3. Due Diligence</h3>
                  <p className="text-gray-600">
                    For selected startups, we conduct a thorough review of your business model, financials, and market opportunity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute top-0 left-6 bottom-0 w-1 bg-primary-100"></div>
                <div className="absolute top-0 left-5 w-3 h-3 rounded-full bg-primary-500 shadow-lg"></div>
                <div className="pl-16">
                  <h3 className="text-xl font-semibold mb-2">4. Investor Matching</h3>
                  <p className="text-gray-600">
                    We match you with investors whose interests and investment criteria align with your startup.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute top-0 left-6 bottom-0 w-1 bg-primary-100"></div>
                <div className="absolute top-0 left-5 w-3 h-3 rounded-full bg-primary-500 shadow-lg"></div>
                <div className="pl-16">
                  <h3 className="text-xl font-semibold mb-2">5. Pitch Preparation</h3>
                  <p className="text-gray-600">
                    We help you prepare a compelling pitch that highlights your unique value proposition and growth potential.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute top-0 left-5 w-3 h-3 rounded-full bg-primary-500 shadow-lg"></div>
                <div className="pl-16">
                  <h3 className="text-xl font-semibold mb-2">6. Funding & Growth</h3>
                  <p className="text-gray-600">
                    Receive funding and ongoing support to help accelerate your startup's growth and success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Application form section */}
      <section id="startup-form" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl font-bold mb-4"
              >
                Apply for <span className="text-primary-600">Funding</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-xl text-gray-600"
              >
                Fill out the form below to start your journey with Small Shark.
              </motion.p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Take Your Startup to the Next Level?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-200 mb-8"
            >
              Join the hundreds of founders who have successfully raised funding through Small Shark.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#startup-form" className="btn bg-white text-primary-900 hover:bg-gray-100">
                Apply Now
              </a>
              <Link to="/faq" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupPage;