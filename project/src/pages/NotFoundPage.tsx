import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fish, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          <Fish className="w-24 h-24 text-primary-500 mx-auto mb-6" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Looks like you've ventured into uncharted waters. The page you're looking for doesn't exist.
          </p>
          
          <Link to="/" className="btn btn-primary inline-flex items-center">
            <Home className="mr-2" size={20} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;