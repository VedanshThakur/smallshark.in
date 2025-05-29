import { Link } from 'react-router-dom';
import { Triangle, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Triangle 
                  size={32} 
                  className="text-white transform rotate-[30deg] translate-y-[-2px]"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-xl font-display font-bold text-white">
                Small<span className="text-accent-400">Shark</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Connecting ambitious startups with strategic investors for mutual growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/smallshark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/smallshark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/smallshark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/investor" className="text-gray-400 hover:text-white transition-colors">
                  For Investors
                </Link>
              </li>
              <li>
                <Link to="/startup" className="text-gray-400 hover:text-white transition-colors">
                  For Startups
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Small Shark. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;