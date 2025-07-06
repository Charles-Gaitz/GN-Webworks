import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start mb-6">
              <img 
                src="/logo.png" 
                alt="Gaitz Webworks Logo" 
                className="w-mobile-logo h-auto mb-4 opacity-80"
                loading="lazy"
              />
              <span className="text-xl font-bold text-white font-poppins">
                © Gaitz Webworks
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses with modern, results-driven websites using elite development practices, 
              AI-enhanced workflows, and personalized SEO strategies.
            </p>
            <p className="text-gray-400 text-sm">
              Based in Houston, Texas | Serving clients worldwide
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-poppins">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Custom Website Development</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Website Redesigns</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">AI Consulting</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Prompt Engineering</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Monthly Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-poppins">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-orange-500 transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-orange-500 transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Refund Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Warranty Information
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Gaitz Webworks. Made with</span>
              <Heart className="h-4 w-4 text-orange-500" />
              <span>in Houston, Texas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;