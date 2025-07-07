import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import UserMenu from './UserMenu';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, loading } = useAuth();

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
      <div className="container mx-auto px-2 py-2 md:px-6 md:py-1">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
          >
            <img 
              src="/GNLOGO.png" 
              alt="Webworks Logo" 
              className="h-20 w-20 md:h-44 md:w-44 transition-transform group-hover:scale-105"
            />
            <span className="text-3xl md:text-3xl font-bold text-white font-poppins">
              Webworks
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button onClick={() => scrollToSection('hero')} className="text-lg text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('process')} className="text-lg text-gray-300 hover:text-white transition-colors font-medium">
              Process
            </button>
            <button onClick={() => scrollToSection('work')} className="text-lg text-gray-300 hover:text-white transition-colors font-medium">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} className="text-lg text-gray-300 hover:text-white transition-colors font-medium">
              About
            </button>
            
            {!loading && (
              <>
                {user ? (
                  <UserMenu />
                ) : (
                  <button 
                    onClick={() => setShowAuthModal(true)}
                                      className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 text-lg font-medium rounded-lg transition-colors whitespace-nowrap"

                  >
                    <LogIn className="h-5 w-5" />
                    Sign In
                  </button>
                )}
                <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  Get Started
                </button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
            <nav className="flex flex-col py-3 px-4 space-y-3">
              <button onClick={() => scrollToSection('hero')} className="text-lg text-gray-300 hover:text-white transition-colors text-left font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('process')} className="text-lg text-gray-300 hover:text-white transition-colors text-left font-medium">
                Process
              </button>
              <button onClick={() => scrollToSection('work')} className="text-lg text-gray-300 hover:text-white transition-colors text-left font-medium">
                Work
              </button>
              <button onClick={() => scrollToSection('about')} className="text-lg text-gray-300 hover:text-white transition-colors text-left font-medium">
                About
              </button>
              
              {!loading && (
                <>
                  {!user && (
                    <button 
                      onClick={() => {
                        setShowAuthModal(true);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 text-lg font-medium rounded-lg transition-colors text-left whitespace-nowrap"
                    >
                      <LogIn className="h-5 w-5" />
                      Sign In
                    </button>
                  )}
                  <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors text-left">
                    Get Started
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={() => {
          // Optional: Add any success handling here
        }}
      />
    </header>
  );
};

export default Header;