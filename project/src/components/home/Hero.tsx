import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white pt-24 pb-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-20 w-64 h-64 rounded-full bg-primary-700/20 blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary-700/20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Smart Money Meets 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-500">
                {' '}Ambitious Startups
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg">
              Small Shark connects vetted startups with strategic investors for mutual growth. 
              Discover the next unicorn or find the perfect investor for your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/investor" className="btn btn-accent">
                Become an Investor
              </Link>
              <Link to="/startup" className="btn bg-white text-primary-900 hover:bg-gray-100">
                List Your Startup
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold">4.9/5</span> from 500+ reviews
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
              <div className="absolute -top-6 -left-6 bg-accent-500 rounded-lg p-4 shadow-lg">
                <DollarSign className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 mt-4">Investment Performance</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Angel+ Plan</span>
                    <span className="flex items-center gap-1 text-accent-400">
                      +24.8% <TrendingUp className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Advanced Plan</span>
                    <span className="flex items-center gap-1 text-secondary-400">
                      +16.2% <TrendingUp className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Basic Plan</span>
                    <span className="flex items-center gap-1 text-primary-400">
                      +9.1% <TrendingUp className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-300">Market Trend</p>
                    <p className="font-medium">Outperforming by 11.4%</p>
                  </div>
                  <div className="bg-primary-800/50 p-2 rounded-lg">
                    <LineChart className="w-6 h-6 text-primary-300" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -right-12 top-20 bg-white p-4 rounded-lg shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-2 text-primary-900">
                <div className="bg-success-100 p-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4 text-success-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">Latest Exit</p>
                  <p className="text-sm font-bold">14.2x ROI</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -left-10 bottom-20 bg-white p-4 rounded-lg shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center gap-2 text-primary-900">
                <div className="bg-primary-100 p-1.5 rounded-full">
                  <DollarSign className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">Funding Today</p>
                  <p className="text-sm font-bold">₹2.8 Cr</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;