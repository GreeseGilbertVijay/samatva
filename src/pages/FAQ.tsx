import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const { t, translations } = useLanguage();
  const questions = t('faqPage.questions');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render content until translations are loaded
  if (!translations || Object.keys(translations).length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-raleway">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        @media (max-width: 1920px) {
          h1 { font-size: 56px; }
          h2 { font-size: 48px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 24px; }
          h2 { font-size: 22px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 24px; }
          [lang]:not([lang="en"]) h2 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 text-white py-20 overflow-hidden">
        <div className="w-[95%] mx-auto text-center">
          <h1 className="font-bold mb-8 text-orange-500 dark:text-white leading-tight animate-slide-in-right">
            {t('faqPage.title')}
          </h1>
          <p className="font-bold text-black dark:text-orange-400">
            {t('faqPage.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-16 pb-12 pl-2 pr-2 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {Array.isArray(questions) && questions.map((faq: any, index: number) => (
              <div key={index} className="bg-gray-300 dark:bg-slate-800 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-black dark:text-white hover:bg-slate-400 transition-colors"
                  onClick={() => {
                    const content = document.getElementById(`faq-${index}-content`);
                    const arrow = document.getElementById(`faq-${index}-arrow`);
                    if (content && arrow) {
                      content.classList.toggle('hidden');
                      arrow.classList.toggle('rotate-180');
                    }
                  }}
                >
                  <span className="font-semibold">
                    <span className="text-blue-800 dark:text-blue-400 mr-2">Q{index + 1}.</span>
                    {faq.question}
                  </span>
                  <svg
                    id={`faq-${index}-arrow`}
                    className="w-5 h-5 transform transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id={`faq-${index}-content`} className="hidden px-6 py-4 text-black dark:text-slate-300">
                  <span className="text-blue-800 dark:text-blue-400 mr-2">A{index + 1}.</span>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pt-16 pb-12 bg-white dark:bg-gradient-to-br dark:from-blue-400 dark:via-slate-900 dark:to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-orange-500 dark:text-white mb-4">
            {t('faqPage.stillHaveQuestions')}
          </h2>
          <p className="text-black dark:text-white mb-8">
            {t('faqPage.getInTouch')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact" onClick={scrollToTop} className="border-2 border-orange-600 text-white bg-orange-500 hover:text-orange-500 hover:bg-white px-8 py-4 rounded-lg font-semibold  transition-colors">
              {t('faqPage.contactUs')}
            </Link>
            <Link to="/Services" onClick={scrollToTop} className="border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold  transition-colors">
              {t('faqPage.learnServices')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
