import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Dive Into the Future of Startup Investing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-200 mb-10"
          >
            Join Small Shark today and be part of India's most exciting investment opportunities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/investor"
              className="btn bg-white text-primary-900 hover:bg-gray-100 group"
            >
              <span>Become an Investor</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/startup"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 group"
            >
              <span>List Your Startup</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;