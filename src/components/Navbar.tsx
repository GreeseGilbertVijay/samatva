import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { FaStar } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  const [isStarAnimating, setIsStarAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsStarAnimating(true);
      setTimeout(() => setIsStarAnimating(false), 2000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/credit-health', label: t('nav.creditHealth') },
    { path: '/impact', label: t('nav.impact') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;
  const fontSize = currentLanguage === 'en' ? '16px' : '14px';

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img 
                src="/lovable-uploads/samatvalogosvg.png" 
                alt="Samatva Awareness" 
                className="h-20 w-auto object-cover"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => {
                const isImpact = item.path === '/impact';
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={scrollToTop}
                    style={{ fontSize, position: 'relative', display: 'inline-block' }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? isImpact
                          ? 'text-white scale-105 border-2 border-transparent bg-slate-900 relative z-10'
                          : 'bg-orange-500 text-white shadow-lg'
                        : isImpact
                          ? 'text-yellow-400 hover:bg-yellow-900/30 hover:text-yellow-300 border-2 border-transparent bg-slate-900 relative z-10'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-orange-400'
                    } ${isImpact ? 'impact-animated-border' : ''}`}
                  >
                    <span className={isImpact ? 'impact-animated-border-inner' : ''}>
                      {item.label}
                      {isImpact && (
                        <span
                          className="absolute -top-3 -right-3 flex items-center justify-center"
                          style={{ pointerEvents: 'none' }}
                        >
                          <FaStar
                            className={`text-yellow-400 drop-shadow-lg transition-transform duration-300 ${isStarAnimating ? 'impact-star-blink' : ''}`}
                            style={{ fontSize: '1.3em', zIndex: 10 }}
                          />
                          <span
                            className="absolute inset-0 rounded-full bg-yellow-400 opacity-50 animate-ping-impact"
                            style={{ zIndex: 1 }}
                          />
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-orange-400 hover:bg-slate-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700 rounded-b-lg">
              {/* Mobile Language Switcher */}
              <div className="px-4 py-2 border-b border-slate-700 mb-2">
                <LanguageSwitcher />
              </div>
              
              {navItems.map((item) => {
                const isImpact = item.path === '/impact';
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                    style={{ fontSize, position: isImpact ? 'relative' : undefined, display: isImpact ? 'inline-block' : undefined }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive(item.path)
                        ? 'bg-orange-500 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-orange-400'
                    } ${isImpact ? 'impact-animated-border' : ''}`}
                  >
                    <span className={isImpact ? 'impact-animated-border-inner' : ''}>
                      {item.label}
                      {isImpact && (
                        <span
                          className="absolute -top-3 -right-3 flex items-center justify-center"
                          style={{ pointerEvents: 'none' }}
                        >
                          <FaStar
                            className={`text-yellow-400 drop-shadow-lg transition-transform duration-300 ${isStarAnimating ? 'impact-star-blink' : ''}`}
                            style={{ fontSize: '1.3em', zIndex: 10 }}
                          />
                          <span
                            className="absolute inset-0 rounded-full bg-yellow-400 opacity-50 animate-ping-impact"
                            style={{ zIndex: 1 }}
                          />
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
