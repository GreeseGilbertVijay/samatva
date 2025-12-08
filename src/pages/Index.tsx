import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, ArrowRight, PlayCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const imageList = [
  '/lovable-uploads/entity.png',
  '/lovable-uploads/lender.png',
  '/lovable-uploads/score.png',
  '/lovable-uploads/loan.png',
];
// Second slider images and texts
const imageList2 = [
  '/lovable-uploads/interest.png',
  '/lovable-uploads/tenure.png',
  '/lovable-uploads/fee.png',
  '/lovable-uploads/repayment.png',
];

const Index = () => {
  const { t, currentLanguage } = useLanguage();
  const [theme, setTheme] = useState("light");

  // Add state for tada animation
  const [tada, setTada] = useState(false);
  // Add state for wave animation
  const [wave, setWave] = useState(false);
  const waveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tadaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Animation states for image fade-in
  const [showRows, setShowRows] = useState(false);
  const totalCells = imageList.length + imageList2.length;
  const [visibleCells, setVisibleCells] = useState(0);

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

  // Animation effect:
  useEffect(() => {
    let timeout;
    if (showRows && visibleCells < totalCells) {
      timeout = setTimeout(() => setVisibleCells(visibleCells + 1), 600);
    }
    return () => clearTimeout(timeout);
  }, [showRows, visibleCells, totalCells]);

  // Use translations for slider texts
  const imageTexts = [
    t('home.hero.second-heading.checks1'),
    t('home.hero.second-heading.checks2'),
    t('home.hero.second-heading.checks3'),
    t('home.hero.second-heading.checks4'),
  ];
  const imageTexts2 = [
    t('home.hero.second-heading.checks5'),
    t('home.hero.second-heading.checks6'),
    t('home.hero.second-heading.checks7'),
    t('home.hero.second-heading.checks8'),
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { q: t("home.faq.q1"), a: t("home.faq.a1") },
    { q: t("home.faq.q2"), a: t("home.faq.a2") },
    { q: t("home.faq.q3"), a: t("home.faq.a3") },
    { q: t("home.faq.q4"), a: t("home.faq.a4") },
    { q: t("home.faq.q5"), a: t("home.faq.a5") },
    { q: t("home.faq.q6"), a: t("home.faq.a6") },
    { q: t("home.faq.q7"), a: t("home.faq.a7") },
  ];

  // Periodically trigger wave and tada animations
  useEffect(() => {
    const triggerWaveAndTada = () => {
      setWave(true);
      setTada(true);
      // Remove wave after animation duration
      waveTimeoutRef.current = setTimeout(() => setWave(false), 1200);
      // Remove tada after animation duration
      tadaTimeoutRef.current = setTimeout(() => setTada(false), 1000);
    };
    triggerWaveAndTada();
    const interval = setInterval(triggerWaveAndTada, 4000);
    return () => {
      clearInterval(interval);
      if (waveTimeoutRef.current) clearTimeout(waveTimeoutRef.current);
      if (tadaTimeoutRef.current) clearTimeout(tadaTimeoutRef.current);
    };
  }, []);

  // Trigger tada on hover
  const handleImpactHover = () => {
    setTada(true);
    if (tadaTimeoutRef.current) clearTimeout(tadaTimeoutRef.current);
    tadaTimeoutRef.current = setTimeout(() => setTada(false), 1000);
  };

  // Video play state for custom thumbnail
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    let showTimeout: NodeJS.Timeout;

    if (!showRows) {
      // Show rows after 2 seconds
      showTimeout = setTimeout(() => {
        setShowRows(true);
        setVisibleCells(0);
      }, 2000);
    } else if (visibleCells === totalCells) {
      // Animation finished, hide after 2 seconds
      hideTimeout = setTimeout(() => {
        setShowRows(false);
      }, 4000);
    }

    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      if (showTimeout) clearTimeout(showTimeout);
    };
  }, [showRows, visibleCells, totalCells]);

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
        .ml-1 {
            color: #fff;
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
            font-size: 26px;
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
            font-size: 26px;
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
            font-size: 16px;
          }
          /* Non-English font sizes */
          [lang]:not([lang="en"]) h1 {
            font-size: 36px;
          }
          [lang]:not([lang="en"]) h2 {
            font-size: 28px;
          }
          [lang]:not([lang="en"]) h3 {
            font-size: 22px;
          }
          [lang]:not([lang="en"]) h5 {
            font-size: 20px;
          }
          [lang]:not([lang="en"]) h6 {
            font-size: 18px;
          }
          [lang]:not([lang="en"]) p {
            font-size: 16px;
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
            font-size: 20px;
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
            font-size: 12px;
         
          /* Non-English font sizes */
          [lang]:not([lang="en"]) h1 {
            font-size: 28px;
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
            font-size: 12px;
          }
          .container {
            max-width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 0.7s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        /* Tada animation */
        @keyframes tada {
          0% { transform: scale3d(1, 1, 1); }
          10%, 20% { transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg); }
          30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate(3deg); }
          40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg); }
          100% { transform: scale3d(1, 1, 1); }
        }
        .animate-tada {
          animation: tada 1s;
        }
        /* Impact Card hover scale */
        .impact-card {
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s;
        }
        .impact-card:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 32px 0 rgba(255,140,0,0.25);
        }
        /* Orange wave animation */
        .impact-wave {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          pointer-events: none;
          z-index: 1;
        }
        .impact-wave-animate {
          animation: impactWaveSpread 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes impactWaveSpread {
          0% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.7);
          }
          60% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.5);
          }
        }
      `}</style>

      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden container bg-white text-black
         dark:bg-gradient-to-br dark:from-blue-900 dark:via-slate-800 dark:to-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">

            {/* Left Content */}
            <div className="text-left animate-fade-in">
              <h1 className="font-bold text-orange-500 dark:text-white mt-4 mb-2">
                {t('home.hero.title1')}
              </h1>

              <h1 className="text-orange-500  font-bold mb-8">
                {t('home.hero.title2')}
              </h1>

              <p className="max-w-xl text-center leading-relaxed animate-fade-in text-slate-600 dark:text-slate-300 " style={{ animationDelay: '0.6s' }}>
                <span>{t('home.hero.subtitle1')}</span>
                <span> {t('home.hero.subtitle2')}</span>
                <span> {t('home.hero.subtitle3')}</span>
              </p>
              <p className='font-bold text-center text-blue-900 dark:text-orange-500'  style={{ animationDelay: '0.6s' }}>{t('home.hero.subtitle4')}</p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col mb-6 gap-8 items-center">

              {/* Images Row */}
              <div className="flex flex-col gap-0 w-full">

                {/* Heading */}
                <div
                  className={`
              text-lg font-bold text-center transition-opacity duration-700
              ${showRows ? 'opacity-100' : 'opacity-0'}
            `}
                >
                  <h3 className="text-base text-orange-500 dark:text-white">{t('home.hero.second-heading.title')}</h3>
                  <h3 className="text-base text-orange-500 mb-4 dark:text-white">{t('home.hero.second-heading.title1')}</h3>
                </div>

                {/* Image Grid */}
                <div className={`transition-opacity duration-700 ${showRows ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-2">

                    {imageList.map((img, idx) => (
                      <div
                        key={img}
                        className="flex flex-col items-center justify-center flex-1 min-w-0 h-32"
                      >
                        <img
                          src={img}
                          alt={imageTexts[idx]}
                          className={` rounded-xl p-2 w-16 h-16 object-contain bg-black/10 dark:bg-white/10 transition-all duration-500           
                                       ${visibleCells > idx ? 'opacity-100 animate-fade-in' : 'opacity-0'} `} />
                        <span
                          className={` mt-2 text-center text-xs font-medium w-full h-10 overflow-hidden transition-all duration-500 text-black dark:text-white
                             ${visibleCells > idx ? 'opacity-100' : 'opacity-0'}`}
                        >
                          {visibleCells > idx ? imageTexts[idx] : ''}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* 2nd Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-2">
                    {imageList2.map((img, idx) => (
                      <div
                        key={img}
                        className="flex flex-col items-center justify-center flex-1 min-w-0 h-32"
                      >
                        <img
                          src={img}
                          alt={imageTexts2[idx]}
                          className={`
                      rounded-xl p-2 w-16 h-16 object-contain
                      bg-black/10 dark:bg-white/10
                      transition-all duration-500 
                      ${visibleCells > idx + imageList.length ? 'opacity-100 animate-fade-in' : 'opacity-0'}
                    `}
                        />
                        <span
                          className={`
                      mt-2 text-center text-xs font-medium w-full h-10 overflow-hidden
                      text-black dark:text-white
                      transition-all duration-500
                      ${visibleCells > idx + imageList.length ? 'opacity-100' : 'opacity-0'}
                    `}
                        >
                          {visibleCells > idx + imageList.length ? imageTexts2[idx] : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Card */}
              <div
                className={`
                  impact-card 
                  bg-orange-500 dark:bg-gradient-to-br dark:from-orange-500 dark:to-orange-600
                  transition-all duration-500 rounded-3xl p-6 max-w-[400px] cursor-pointer 
                  shadow-2xl relative mx-auto 
                  ${tada ? 'animate-tada' : ''}
                `} onMouseEnter={handleImpactHover} >
                {wave && (
                  <span
                    className="impact-wave impact-wave-animate"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,140,0,0.25) 0%, rgba(255,140,0,0.10) 60%, transparent 100%)',
                    }}
                  />
                )}

                <Link to="/Impact" onClick={scrollToTop} className="block relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white/20 p-1 rounded-xl animate-pulse-glow">
                      <TrendingUp className="text-white" size={20} />
                    </div>
                    <h5 className="font-bold text-white pl-4">
                      {t('home.hero.impact.title')}
                    </h5>
                  </div>

                  <p className="text-white/95 leading-relaxed">
                    {t('home.hero.impact.description')}
                  </p>
                </Link>
              </div>

            </div>

            <div className='absolute top-0 left-0 w-[50%] text-left '>
          
            </div>
          </div>
        </div>
      </section>


      {/* Concept Section with Enhanced Background */}
      <section className=" pt-16 pb-12 pl-2 pr-2 relative overflow-hidden bg-white text-black dark:bg-gradient-to-br dark:from-blue-400 dark:via-slate-900 dark:to-blue-500 dark:text-white ">
        {/* Floating elements only in dark mode */}
        <div className="absolute inset-0 opacity-5 hidden dark:block">
          <div className="absolute top-32 right-32 w-80 h-80 rounded-full border border-white/20 animate-float-medium"></div>
          <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full border border-orange-500/30 animate-float-slow"></div>

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

        {/* Content */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-16">
            <h2 className="font-bold animate-fade-in">
              {/* Light → black ; Dark → white */}
              <span className="block text-orange-500 dark:text-white">
                {t('home.concept.title1')}
              </span>
            </h2>

            <h2 className="font-bold mb-6 animate-fade-in">
              {/* Always Orange */}
              <span className="text-orange-500 block mb-8">
                {t('home.concept.title2')}
              </span>
            </h2>

            <p className="mb-12 animate-fade-in text-blue-900 font-bold dark:text-white" style={{ animationDelay: '0.3s' }} >
              {t('home.concept.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="
        flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center 
        max-w-8xl mx-auto animate-fade-in
      "
            style={{ animationDelay: '0.6s' }}
          >
            {/* Primary Orange Button */}
            <Link
              to="/Contact"
              onClick={scrollToTop}
              className="
          w-full sm:w-auto 
          bg-orange-500 hover:bg-orange-600 text-white 
          rounded-full font-semibold transition-all duration-300 
          transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 
          flex items-center justify-center gap-2 
          text-xs sm:text-lg px-4 sm:px-8 py-3 sm:py-4 
          min-w-[200px] sm:min-w-[280px]
        "
            >
              {t('home.hero.cta')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Outline Button */}
            <Link
              to="/Services"
              onClick={scrollToTop}
              className="
          w-full sm:w-auto 
          border-2 border-orange-500 
          text-orange-600 dark:text-orange-500 
          hover:bg-orange-500 hover:text-white 
          rounded-full font-semibold transition-all duration-300 
          hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 
          flex items-center justify-center 
          text-xs sm:text-lg px-4 sm:px-8 py-3 sm:py-4 
          min-w-[200px] sm:min-w-[280px]
        "
            >
              {t('home.hero.learnMore')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

        </div>
      </section>


      {/* Trust Builders with subtle animations */}
      <section
        className="pt-16 pb-12 relative overflow-hidden bg-white dark:bg-slate-800 dark:text-white" >
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className=" absolute w-1 h-1 rounded-full bg-black/10 dark:bg-white/10 animate-float-particle-1 "
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-bold text-orange-500 dark:text-white mb-6 animate-fade-in">
              {t("home.trustBuilders.title")}
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div
              className=" flex flex-col pt-10 pb-10 justify-center items-center h-full text-center rounded-3xl transition-all hover:scale-105 animate-scale-in stagger-1 bg-white dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-600
                          border border-orange-300 dark:border-slate-500 shadow-md dark:shadow-none ">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-4 font-roboto">
                {t("home.trustBuilders.timeline").split(" ")[0]}
              </div>
              <div className="md:text-2xl font-bold text-orange-500 dark:text-white mb-2 md:mb-4 font-roboto">
                {t("home.trustBuilders.timeline").split(" ")[1]}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg px-8">
                {t("home.trustBuilders.timelineDesc")}
              </p>
            </div>

            {/* Card 2 */}
            <div
              className=" flex flex-col pt-10 pb-10 justify-center items-center text-center rounded-3xl transition-all hover:scale-105 animate-scale-in stagger-2 
                          bg-white dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-600 border border-orange-300 dark:border-slate-500 shadow-md dark:shadow-none ">
              <div className="text-4xl md:text-4xl font-bold text-blue-900 dark:text-green-500 mb-2 md:mb-4">
                {t("home.trustBuilders.freeService").split(" ")[0]}
              </div>
              <div className="text-xl md:text-2xl font-bold text-orange-500 dark:text-white mb-2 md:mb-4">
                {t("home.trustBuilders.freeService").split(" ").slice(1).join(" ")}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg px-8">
                {t("home.trustBuilders.freeServiceDesc")}
              </p>
            </div>

            {/* Card 3 */}
            <div
              className=" flex flex-col pt-10 pb-10 justify-center items-center h-full text-center rounded-3xl transition-all hover:scale-105 animate-scale-in stagger-3
                          bg-white dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-600 border border-orange-300 dark:border-slate-500 shadow-md dark:shadow-none ">
              <div className="md:text-5xl font-bold text-orange-500 mb-2 md:mb-4">
                <h4>{t("home.trustBuilders.rbiNBFC")}</h4>
              </div>
              <div className="md:text-2xl font-bold text-orange-500 dark:text-white mb-2 md:mb-4">
                <h5>{t("home.trustBuilders.rbiRegistered")}</h5>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg px-8">
                {t("home.trustBuilders.rbiRegisteredDesc")}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Video Section */}
      <section className="p-8 bg-white dark:bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-orange-500 dark:text-white mb-12 animate-fade-in">
            {t('home.videoSection.title')}
          </h2>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-black animate-scale-in" style={{ minHeight: 300 }}>
            {!videoPlaying ? (
              <button
                className="group w-full h-full block focus:outline-none"
                style={{ position: 'relative', width: '100%', minHeight: 300 }}
                onClick={() => setVideoPlaying(true)}
                aria-label="Play video"
              >
                <img
                  src="/lovable-uploads/thumbnail.png"
                  alt="Samatva Credit Solutions Video Thumbnail"
                  className="w-full h-[300px] sm:h-[500px] object-cover object-center block"
                  style={{ display: 'block' }}
                />
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ pointerEvents: 'none' }}
                >
                  <PlayCircle size={80} className="text-white/90 group-hover:text-orange-500 transition-colors drop-shadow-lg" />
                </span>
              </button>
            ) : (
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/LryCtez2-yk?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1"
                title="Samatva Credit Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ display: 'block', width: '100%', height: 500 }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ChatBot Section */}
      <section className="pt-4 pb-16 pt-lg-5 bg-gray-400 dark:bg-gradient-to-br dark:from-blue-400 dark:via-blue-800 dark:to-blue-500">
        <iframe
          id="chatbotIframe"
          src="https://shabd.tech/widget/chatpage?name=samatva&authKey=afd9a6b4-03fd-11f0-aabd-047c1692d8ad"
          allow="microphone"
          sandbox="allow-scripts allow-same-origin allow-modals allow-forms allow-popups allow-presentation allow-downloads allow-pointer-lock allow-top-navigation allow-top-navigation-by-user-activation"
          style={{ width: '100%', border: 'none', overflow: 'hidden', transition: 'height 0.3s ease-in-out' }}
        />
      </section>

      {/* FAQ Section */}
       <section className="pt-16 pb-12 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="font-bold text-blue-900 dark:text-white mb-12 text-center">
          {t("faq.title")}
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow border border-slate-200 dark:border-slate-700"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left 
                           text-orange-500 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700
                           transition-colors"
                onClick={() => toggleFAQ(i)}
              >
                <h6 className="font-semibold">{item.q}</h6>

                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openFAQ === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openFAQ === i && (
                <div className="px-6 py-4 text-gray-600 dark:text-slate-300">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>

      {/* CTA Section */}
      <section className=" pt-16 pb-12 bg-white dark:bg-gradient-to-br dark:from-blue-400 dark:via-slate-900 dark:to-blue-500 transition-colors" >
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-6 text-orange-500 dark:text-white animate-fade-in ">
          {t('home.cta.title')}
        </h2>
        <p className="mb-10 text-gray-700 dark:text-orange-100 max-w-3xl mx-auto animate-fade-in " style={{ animationDelay: "0.2s" }} >
          <span>{t("home.cta.subtitle")}</span><span className='font-bold'> {t("home.cta.subtitle1")}</span>
        </p>

        <Link
          to="/Contact"
          onClick={scrollToTop}
          className=" w-full sm:w-auto bg-orange-500 dark:bg-white text-white dark:text-orange-600 hover:bg-orange-600 dark:hover:bg-orange-50 px-6 sm:px-10 py-3 sm:py-5
            rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3 shadow-xl animate-scale-intext-xs sm:text-lg " style={{ animationDelay: "0.4s" }} >
          {t("home.cta.button")}
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
        </div>
       </section>
      <Footer />
    </div>
  );
};

export default Index;