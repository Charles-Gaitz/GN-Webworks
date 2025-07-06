import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
          >
            <img 
              src="/logo.png" 
              alt="Gaitz Webworks Logo" 
              className="w-mobile-logo md:w-desktop-logo h-auto transition-transform group-hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-bold text-white font-poppins">
              Gaitz Webworks
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-white transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('work')} className="text-gray-300 hover:text-white transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-white transition-colors text-left">
                Process
              </button>
              <button onClick={() => scrollToSection('work')} className="text-gray-300 hover:text-white transition-colors text-left">
                Work
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors text-left">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;