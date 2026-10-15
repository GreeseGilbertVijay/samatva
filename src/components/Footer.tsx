import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, Phone, Mail, MapPin, Building2, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { INSTAGRAM_GRADIENT, INSTAGRAM_URL, InstagramIcon, LINKEDIN_URL, LinkedinIcon } from '@/components/SocialIcons';

const PHONE_DISPLAY = '+91 63820 97967';
const PHONE_HREF = 'tel:+916382097967';
const EMAIL = 'support@samatvaawareness.in';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const exploreLinks = [
    { to: '/credit-health', label: t('nav.creditHealth') || 'Credit Health' },
    { to: '/credit-doctor', label: 'Credit Doctor' },
    { to: '/services', label: t('nav.services') || 'Services' },
    { to: '/impact', label: t('nav.impact') || 'Impact' },
    { to: '/about', label: t('nav.about') || 'About' },
    { to: '/gallery', label: 'Gallery' },
  ];

  const supportLinks = [
    { to: '/faq', label: t('nav.faq') || 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/privacy-policy', label: t('nav.privacy') || 'Privacy Policy' },
    { to: '/terms-and-conditions', label: t('nav.terms') || 'Terms & Conditions' },
  ];

  const linkClass =
    'group inline-flex items-center gap-1.5 text-slate-300 hover:text-orange-400 focus-visible:text-orange-400 focus-visible:outline-none transition-colors';

  const renderLinks = (links: { to: string; label: string }[]) => (
    <ul className="space-y-3 text-sm">
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} onClick={scrollToTop} className={linkClass}>
            <ChevronRight className="h-3.5 w-3.5 text-orange-500/60 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-400" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="relative bg-slate-900 text-slate-300 font-roboto">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        .font-roboto { font-family: 'Roboto', sans-serif; }
      `}</style>

      {/* Brand accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-sky-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA band */}
        <div className="relative -mb-px py-10 border-b border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-800/40 border border-slate-700/60 p-6 sm:p-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to rebuild your credit?
              </h3>
              <p className="mt-1 text-sm sm:text-base text-slate-400">
                Talk to our team today — guidance is completely free.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-orange-400 hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" onClick={scrollToTop} className="inline-block" aria-label="Samatva Awareness home">
              <img
                src="/lovable-uploads/samatvalogo.png"
                alt="Samatva Awareness"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
              {t('footer.mission') ||
                'Samatva helps unintentional delinquent customers earn their way back into the formal financial system through a clear, disciplined, and humane process.'}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              Completely Free Service
            </div>
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Samatva on Instagram"
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${INSTAGRAM_GRADIENT} text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400`}
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Samatva on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label="Explore">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.quickLinks') || 'Quick Links'}
            </h4>
            {renderLinks(exploreLinks)}
          </nav>

          {/* Support & legal */}
          <nav className="lg:col-span-2" aria-label="Support">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h4>
            {renderLinks(supportLinks)}
          </nav>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.contactInfo') || 'Contact Info'}
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={PHONE_HREF} className="group flex items-start gap-3 hover:text-orange-400 transition-colors">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">{t('footer.phone') || 'Phone Numbers'}</span>
                    <span className="text-slate-200 group-hover:text-orange-400">{PHONE_DISPLAY}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="group flex items-start gap-3 hover:text-orange-400 transition-colors">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">Email</span>
                    <span className="break-all text-slate-200 group-hover:text-orange-400">{EMAIL}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-orange-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">{t('footer.address') || 'Address'}</span>
                  <span className="text-slate-200 leading-relaxed">
                    No.25, Shanthi Apartments, Flat No 3, 1st Floor, Vyasar Street, T.Nagar, Chennai - 600017
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-orange-400">
                  <Building2 className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">CIN</span>
                  <span className="text-slate-200 tracking-wide">U70200TN2024PTC167249</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-slate-800 py-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs sm:text-sm text-slate-500">
              {t('footer.copyright') || '© 2026 Samatva Awareness Solutions Private Limited. All rights reserved.'}
            </p>
            <p className="text-xs text-slate-500">
              {t('footer.rbiNote') || 'RBI-Registered Financial Institution Partners | Completely Free Service'}
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 hover:border-orange-400 hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
