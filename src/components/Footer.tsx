import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const [theme, setTheme] = useState("light");

  const [logoSrc, setLogoSrc] = useState("/lovable-uploads/samatvalogoblack.png");

  useEffect(() => {
    // Update logo whenever theme changes
    if (theme === 'light') {
      setLogoSrc("/lovable-uploads/samatvalogoblack.png"); // dark mode
    } else {
      setLogoSrc("/lovable-uploads/samatvalogo.png"); // light mode
    }
  }, [theme]);
 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
  return (
    <footer className="bg-white dark:bg-slate-900 text-black dark:text-white border-t border-gray-200 dark:border-slate-700 transition-colors">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        .font-roboto { font-family: 'Roboto', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/" onClick={scrollToTop} className="flex items-center flex-shrink-0">
                <img
                  src={logoSrc}
                  alt="Samatva Awareness"
                  className="h-20 w-auto object-cover"
                />
              </Link>
            </div>
            <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
              {t('footer.mission') ||
                'Our mission is to empower individuals with expert financial guidance and essential resources to build, strengthen, and sustain a resilient credit profile—laying the foundation for lasting financial well-being and opportunity.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-2xl font-bold mb-4 text-orange-500">{t('footer.quickLinks') || 'Quick Links'}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/credit-health" onClick={scrollToTop} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {t('nav.creditHealth') || 'Credit Health'}
                </Link>
              </li>
              <li>
                <Link to="/impact" onClick={scrollToTop} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {t('nav.impact') || 'Impact'}
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {t('nav.services') || 'Services'}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {t('nav.about') || 'About'}
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {t('nav.faq') || 'FAQ'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1 font-roboto">
            <h4 className="text-2xl font-bold mb-4 text-orange-500">{t('footer.contactInfo') || 'Contact Info'}</h4>
            <div className="space-y-3 text-gray-600 dark:text-slate-300">
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-orange-500 dark:text-white mb-2">{t('footer.phone') || 'Phone Numbers'}:</p>
                <p>
                  <a href="tel:+916382097967" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">+91 63820 97967</a>
                </p>
                <p>
                  <a href="mailto:support@samatvaawareness.in" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                    support@samatvaawareness.in
                  </a>
                </p>
              </div>

              <div className="text-sm">
                <p className="font-medium text-orange-500 dark:text-white mb-2">CIN: U70200TN2024PTC167249</p>
              </div>

              <div className="text-sm leading-relaxed">
                <p className="font-medium text-orange-500 dark:text-white mb-2">{t('footer.address') || 'Address'}:</p>
                <p>No.25, Shanthi Apartments, Flat No 3, 1st Floor, Vyasar Street, T.Nagar, Chennai - 600017</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-gray-500 dark:text-slate-400 text-center">
              {t('footer.copyright') || '© 2025 Samatva Awareness Solution Foundation. All rights reserved.'}
            </p>
            <span className="text-xs text-gray-500 dark:text-slate-400 text-center">
              {t('footer.rbiNote') || 'RBI-Registered Financial Institution Partners | Completely Free Service'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
