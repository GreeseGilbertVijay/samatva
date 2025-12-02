import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { FaStar } from 'react-icons/fa';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  const [isStarAnimating, setIsStarAnimating] = useState(false);
  const [theme, setTheme] = useState("light");


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
  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

   // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
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
    <nav className="
  sticky top-0 z-50 
  bg-gray-200 dark:bg-black/90 
  backdrop-blur-md 
  border-b border-slate-300 dark:border-slate-700
  transition-colors
">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
    <div className="flex justify-between items-center h-24">

      {/* Logo */}
      <Link to="/" onClick={scrollToTop} className="flex items-center flex-shrink-0">
        <img
          src={theme === "light" 
            ? "/lovable-uploads/samatvalogoblack.png" 
            : "/lovable-uploads/samatvalogo.png"}
          alt="Samatva Awareness"
          className="h-20 w-auto object-cover"
        />
      </Link>


      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
        <div className="flex items-baseline space-x-2">

          {navItems.map((item) => {
            const isImpact = item.path === "/impact";

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={scrollToTop}
                className={`
                  px-4 py-2 rounded-lg font-medium relative
                  transition-all duration-200
                  ${
                    isActive(item.path)
                      ? "bg-orange-500 text-white shadow-lg scale-105"
                      : "text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                  ${isImpact ? "impact-animated-border" : ""}
                `}
              >
                <span className={isImpact ? "impact-animated-border-inner" : ""}>
                  {item.label}

                  {/* Impact Star Animation */}
                  {isImpact && (
                    <span className="absolute -top-3 -right-3 flex items-center justify-center pointer-events-none">
                      <FaStar
                        className={`
                          text-yellow-400 drop-shadow-md 
                          transition-transform duration-300
                          ${isStarAnimating ? "impact-star-blink" : ""}
                        `}
                        style={{ fontSize: "1.3em", zIndex: 10 }}
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

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme} 
        className="p-2 rounded-full border border-slate-300 dark:border-slate-600 text-black dark:text-white transition"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Right Controls */}
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md 
            text-slate-700 hover:text-orange-500 
            dark:text-slate-300 dark:hover:text-orange-400
            hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="lg:hidden bg-slate-100 dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700 rounded-b-lg">
        
        {/* Mobile Language Switcher */}
        <div className="px-4 py-2 border-b border-slate-300 dark:border-slate-700 mb-2">
          <LanguageSwitcher />
        </div>

        {/* Mobile Nav Items */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

          {navItems.map((item) => {
            const isImpact = item.path === "/impact";

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
                className={`
                  block px-4 py-3 rounded-lg font-medium transition-all
                  ${
                    isActive(item.path)
                      ? "bg-orange-500 text-white"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-orange-500"
                  }
                  ${isImpact ? "impact-animated-border" : ""}
                `}
              >
                <span className={isImpact ? "impact-animated-border-inner" : ""}>
                  {item.label}

                  {isImpact && (
                    <span className="absolute -top-3 -right-3 flex items-center justify-center pointer-events-none">
                      <FaStar
                        className={`text-yellow-400 drop-shadow-md transition-transform duration-300 ${isStarAnimating ? "impact-star-blink" : ""}`}
                        style={{ fontSize: "1.3em", zIndex: 10 }}
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
