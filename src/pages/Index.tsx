import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LoanSlider1 from '@/components/LoanSlider1';
import LoanSlider2 from '@/components/LoanSlider2';


const imageList = [
  '/lovable-uploads/entity.png',
  '/lovable-uploads/score.png',
  '/lovable-uploads/interest.png',
  '/lovable-uploads/fee.png',
];
// Second slider images and texts
const imageList2 = [
  '/lovable-uploads/lender.png',
  '/lovable-uploads/loan.png',
  '/lovable-uploads/tenure.png',
  '/lovable-uploads/repayment.png',
];

const Index = () => {
  const { t, currentLanguage } = useLanguage();

  // Add state for tada animation
  const [tada, setTada] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "AUDIO_RECORDER_CLICKED") {
        console.log("🔹 Adjusting iframe height:", event.data.data);
        const iframe = document.getElementById("chatbotIframe") as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${event.data.data}`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTada(true);
      setTimeout(() => setTada(false), 1000); // duration of tada animation
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Use translations for slider texts
  const imageTexts = [
    t('home.hero.second-heading.checks1'),
    t('home.hero.second-heading.checks3'),
    t('home.hero.second-heading.checks5'),
    t('home.hero.second-heading.checks7'),
  ];
  const imageTexts2 = [
    t('home.hero.second-heading.checks2'),
    t('home.hero.second-heading.checks4'),
    t('home.hero.second-heading.checks6'),
    t('home.hero.second-heading.checks8'),
  ];

  return (
    <div className="min-h-screen relative font-raleway" lang={currentLanguage}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        .font-roboto {
          font-family: 'Roboto', sans-serif;
        }

        #chatbotIframe {
          width: 100%;
          border: none;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }

        /* Add cursor animation */
        .animate-slide-in-right::after {
          content: '|';
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Responsive breakpoints */
        @media (max-width: 1920px) {
          .container {
            max-width: 1920px;
          }
          h1 {
            font-size: 56px;
            line-height:52px;
          }
          h2 {
            font-size: 48px;
          }
          h3 {
            font-size: 36px;
          }
          h4{
            font-size:44px;
          }
          h5{
          font-size:24px;
          }
           h6{
          font-size:20px;
          }
          p {
            font-size: 18px;
          }
          /* Non-English font sizes */
          [lang]:not([lang="en"]) h1 {
            font-size: 44px;
          }
          [lang]:not([lang="en"]) h2 {
            font-size: 36px;
          }
          [lang]:not([lang="en"]) h3 {
            font-size: 28px;
          }
          [lang]:not([lang="en"]) h5 {
            font-size: 24px;
          }
          [lang]:not([lang="en"]) h6 {
            font-size: 20px;
          }
          [lang]:not([lang="en"]) p {
            font-size: 18px;
          }
        }

        @media (max-width: 1440px) {
          .container {
            max-width: 1440px;
          }
          h1 {
            font-size: 64px;
            line-height:1em;
          }
          h2 {
            font-size: 48px;
          }
          h3 {
            font-size: 28px;
          }
          h4{
            font-size: 24px;
          }
          h5{
             font-size: 22px;
          }
          h6{
             font-size: 20px;
          }
          p {
            font-size: 18px;
          }
          /* Non-English font sizes */
          [lang]:not([lang="en"]) h1 {
            font-size: 36px;
          }
          [lang]:not([lang="en"]) h2 {
            font-size: 28px;
          }
          [lang]:not([lang="en"]) h3 {
            font-size: 24px;
          }
          [lang]:not([lang="en"]) h5 {
            font-size: 20px;
          }
          [lang]:not([lang="en"]) h6 {
            font-size: 18px;
          }
          [lang]:not([lang="en"]) p {
            font-size: 18px;
          }
        }

        @media (max-width: 780px) {
          #chatbotIframe {
            height: 250px;
          }
          h1 {
            font-size: 36px;
          }
          h2 {
            font-size: 28px;
          }
          h3 {
            font-size: 24px;
          }
          h4{
            font-size: 28px;
          }
          h5{
            font-size: 20px;
          }
          h6{
            font-size: 18px;
          }
          p {
            font-size: 16px;
          }
      
          /* Non-English font sizes */
          [lang]:not([lang="en"]) h1 {
            font-size: 24px;
          }
          [lang]:not([lang="en"]) h2 {
            font-size: 24px;
          }
          [lang]:not([lang="en"]) h3 {
            font-size: 20px;
          }
          [lang]:not([lang="en"]) h5 {
            font-size: 16px;
          }
          [lang]:not([lang="en"]) h6 {
            font-size: 16px;
          }
          [lang]:not([lang="en"]) p {
            font-size: 16px;
          }
          .container {
            max-width: 780px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 24px;
          }
          h2 {
            font-size: 26px;
          }
          h3 {
            font-size: 24px;
          }
          h4 {
            font-size: 22px;
          }
          h5 {
            font-size: 20px;
          }
          h6{
          font-size: 16px;
          }
          p {
            font-size: 14px;
         
          /* Non-English font sizes */
          [lang]:not([lang="en"]) h1 {
            font-size: 36px;
          }
          [lang]:not([lang="en"]) h2 {
            font-size: 20px;
          }
          [lang]:not([lang="en"]) h3 {
            font-size: 18px;
          }
          [lang]:not([lang="en"]) h5 {
            font-size: 16px;
          }
          [lang]:not([lang="en"]) h6 {
            font-size: 16px;
          }
          [lang]:not([lang="en"]) p {
            font-size: 14px;
          }
          .container {
            max-width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden container bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left Content */}
            <div className="text-left animate-fade-in">
              <h1 className="font-bold mb-2">
                {t('home.hero.title1')}
              </h1>
              <h1 className="text-orange-500 font-bold mb-8">
                {t('home.hero.title2')}
              </h1>
              <p className="mb-8 text-slate-300 max-w-xl leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
                {t('home.hero.subtitle')}
              </p>
            </div>

            {/* Right Content - Images and Impact Card */}
            <div className="flex flex-col mb-6 gap-8 items-start">
              <h3 className='text-2xl font-bold'>{t('home.hero.second-heading.title')}</h3>
              {/* Images Row */}
              <div className="flex flex-col gap-4">
                {/* first Slider */}
                <LoanSlider1 imageList={imageList} imageTexts={imageTexts} className="rounded-xl p-2" />
                {/* second Slider */}
                <LoanSlider2 imageList={imageList2} imageTexts={imageTexts2} className="rounded-xl p-2" />
              </div>

              {/* Impact Card */}
              <div className={`bg-gradient-to-br from-orange-500 to-orange-600 transition-all duration-500 rounded-3xl p-6 max-w-sm cursor-pointer transform shadow-2xl ${tada ? 'animate-tada' : ''}`}>
                <Link to="/Impact" onClick={scrollToTop} className="block">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white/20 p-1 rounded-xl animate-pulse-glow">
                      <TrendingUp className="text-white" size={20} />
                    </div>
                    <h4 className="font-bold text-white pl-4">{t('home.hero.impact.title')}</h4>
                  </div>
                  <p className="text-white/95 leading-relaxed">
                    {t('home.hero.impact.description')}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section with Enhanced Background */}
      <section className="pt-16 pb-12 pl-2 pr-2 relative overflow-hidden">
        {/* Enhanced animated background for this section */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-slate-900 to-blue-500 animate-gradient"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-32 w-80 h-80 rounded-full border border-white/20 animate-float-medium"></div>
          <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full border border-orange-500/30 animate-float-slow"></div>
          
          {/* Additional floating elements */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500/20 rounded-full animate-float-particle-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-bold animate-fade-in">
              <span className="text-white block">{t('home.concept.title1')}</span>
            </h2>
            <h2 className="font-bold mb-6 animate-fade-in">
              <span className="text-orange-500 block mb-8">{t('home.concept.title2')}</span>
            </h2>
            <p className="text-orange-400 font-medium mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
              {t('home.concept.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-8xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/Contact" onClick={scrollToTop} className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 text-xs sm:text-lg px-4 sm:px-8 py-3 sm:py-4 min-w-[200px] sm:min-w-[280px]">
              {t('home.hero.cta')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link to="/Services" onClick={scrollToTop} className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center text-xs sm:text-lg px-4 sm:px-8 py-3 sm:py-4 min-w-[200px] sm:min-w-[280px]">
              {t('home.hero.learnMore')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Builders with subtle animations */}
      <section className="pt-16 pb-12 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-float-particle-1"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 animate-fade-in">
              {t('home.trustBuilders.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col  pt-10 pb-10 justify-center items-center h-full text-center bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500 animate-scale-in stagger-1">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-4 font-roboto">
              {t('home.trustBuilders.timeline').split(' ')[0]}
            </div>
            <div className="md:text-2xl font-bold text-white mb-2 md:mb-4 font-roboto">
              {t('home.trustBuilders.timeline').split(' ')[1]}
            </div>
            <p className="text-slate-300 text-base md:text-lg pl-8 pr-8">
              {t('home.trustBuilders.timelineDesc')}
            </p>
          </div>
            
           
           <div className="flex flex-col pt-10 pb-10 justify-center items-center text-center bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500 animate-scale-in stagger-2">
             <div className="text-4xl md:text-4xl font-bold text-green-500 mb-2 md:mb-4">
               {t('home.trustBuilders.freeService').split(' ')[0]}
             </div>
             <div className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
               {t('home.trustBuilders.freeService').split(' ').slice(1).join(' ')}
             </div>
             <p className="text-slate-300 text-base md:text-lg pl-8 pr-8">
               {t('home.trustBuilders.freeServiceDesc')}
             </p>
           </div>
            
            <div className="flex flex-col pt-10 pb-10 justify-center items-center h-full text-center bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500 animate-scale-in stagger-3">
             <div className="md:text-5xl font-bold text-orange-500 mb-2 md:mb-4">
               <h4>{t('home.trustBuilders.rbiNBFC')}</h4>
             </div>
             <div className="md:text-2xl font-bold text-white mb-2 md:mb-4">
               <h5>{t('home.trustBuilders.rbiRegistered')}</h5>
             </div>
             <p className="text-slate-300 text-base md:text-lg pl-8 pr-8">{t('home.trustBuilders.rbiRegisteredDesc')}</p>
           </div>

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="p-8 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-white mb-12 animate-fade-in">
            {t('home.videoSection.title')}
          </h2>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black animate-scale-in">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/LryCtez2-yk?controls=0&rel=0&showinfo=0&modestbranding=1"
            title="Samatva Credit Solutions"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          </div>
        </div>
      </section>

      {/* ChatBot Section */}
      <section className="pt-4 pb-16 pt-lg-5 bg-gradient-to-br from-blue-400 via-blue-800 to-blue-500">
        <iframe 
          id="chatbotIframe"
          src="https://shabd.tech/widget/chatpage?name=samatva&authKey=afd9a6b4-03fd-11f0-aabd-047c1692d8ad"
          allow="microphone"
          sandbox="allow-scripts allow-same-origin allow-modals allow-forms allow-popups allow-presentation allow-downloads allow-pointer-lock allow-top-navigation allow-top-navigation-by-user-activation"
          style={{width: '100%', border: 'none', overflow: 'hidden', transition: 'height 0.3s ease-in-out'}}
        />
      </section>

      {/* FAQ Section */}
      <section className="pt-16 pb-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-white mb-12 text-center animate-fade-in">{t('faq.title')}</h2>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-slate-700 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq1-content');
                  const arrow = document.getElementById('faq1-arrow');
                  if (content && arrow) {
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                  }
                }}
              >
                <h6 className="font-semibold">{t('home.faq.q1')}</h6>
                <svg
                  id="faq1-arrow"
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq1-content" className="hidden px-6 py-4 text-slate-300">
                <p>{t('home.faq.a1')}</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-slate-700 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq2-content');
                  const arrow = document.getElementById('faq2-arrow');
                  if (content && arrow) {
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                  }
                }}
              >
                <h6 className="font-semibold">{t('home.faq.q2')}</h6>
                <svg
                  id="faq2-arrow"
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq2-content" className="hidden px-6 py-4 text-slate-300">
                <p>{t('home.faq.a2')}</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-slate-700 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq3-content');
                  const arrow = document.getElementById('faq3-arrow');
                  if (content && arrow) {
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                  }
                }}
              >
                <h6 className="font-semibold">{t('home.faq.q3')}</h6>
                <svg
                  id="faq3-arrow"
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq3-content" className="hidden px-6 py-4 text-slate-300">
                <p>{t('home.faq.a3')}</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-slate-700 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq4-content');
                  const arrow = document.getElementById('faq4-arrow');
                  if (content && arrow) {
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                  }
                }}
              >
                <h6 className="font-semibold">{t('home.faq.q4')}</h6>
                <svg
                  id="faq4-arrow"
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq4-content" className="hidden px-6 py-4 text-slate-300">
                <p>{t('home.faq.a4')}</p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-slate-700 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq5-content');
                  const arrow = document.getElementById('faq5-arrow');
                  if (content && arrow) {
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                  }
                }}
              >
                <h6 className="font-semibold">{t('home.faq.q5')}</h6>
                <svg
                  id="faq5-arrow"
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq5-content" className="hidden px-6 py-4 text-slate-300">
                <p>{t('home.faq.a5')}</p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-slate-700 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq6-content');
                  const arrow = document.getElementById('faq6-arrow');
                  if (content && arrow) {
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                  }
                }}
              >
                <h6 className="font-semibold">{t('home.faq.q6')}</h6>
                <svg
                  id="faq6-arrow"
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq6-content" className="hidden px-6 py-4 text-slate-300">
                <p>{t('home.faq.a6')}</p>
              </div>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-slate-700 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq7-content');
                  const arrow = document.getElementById('faq7-arrow');
                  if (content && arrow) {
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                  }
                }}
              >
                <h6 className="font-semibold">{t('home.faq.q7')}</h6>
                <svg
                  id="faq7-arrow"
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq7-content" className="hidden px-6 py-4 text-slate-300">
                <p>{t('home.faq.a7')}</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-blue-400 via-slate-900 to-blue-500">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-6 text-white animate-fade-in">
          {t('home.cta.title')}
        </h2>
        <p className="mb-10 text-orange-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          {t('home.cta.subtitle')}
        </p>
        <Link to="/Contact" onClick={scrollToTop} className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3 shadow-2xl animate-scale-in text-xs sm:text-lg" style={{animationDelay: '0.4s'}}>
          {t('home.cta.button')}
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;