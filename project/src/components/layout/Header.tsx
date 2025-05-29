import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Triangle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Triangle 
              size={32} 
              className="text-primary-600 transform rotate-[30deg] translate-y-[-2px]"
              strokeWidth={2.5}
            />
          </div>
          <span className="text-xl font-display font-bold text-primary-900">
            Small<span className="text-accent-600">Shark</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/investor"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/investor' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Investors
          </Link>
          <Link
            to="/startup"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/startup' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Startups
          </Link>

          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary-600 transition-colors">
                Account <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                <div className="py-2 px-3 border-b border-gray-100">
                  <p className="text-sm text-gray-500">Signed in as</p>
                  <p className="font-medium truncate">{user.email}</p>
                </div>
                <div className="py-1">
                  <Link
                    to={`/dashboard/${user.role}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                Log in
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign up
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                to="/"
                className={`font-medium py-2 ${
                  location.pathname === '/' ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/investor"
                className={`font-medium py-2 ${
                  location.pathname === '/investor' ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Investors
              </Link>
              <Link
                to="/startup"
                className={`font-medium py-2 ${
                  location.pathname === '/startup' ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Startups
              </Link>

              {user ? (
                <>
                  <Link
                    to={`/dashboard/${user.role}`}
                    className="font-medium py-2 text-gray-700"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="font-medium py-2 text-gray-700 text-left"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3 mt-2">
                  <Link to="/login" className="btn btn-outline w-full">
                    Log in
                  </Link>
                  <Link to="/signup" className="btn btn-primary w-full">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;