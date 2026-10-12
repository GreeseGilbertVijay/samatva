import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  ChevronDown,
  Clock,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  PlayCircle,
  Plus,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const } }),
};

const pad = (n: number) => String(n).padStart(2, '0');

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const SectionHeading = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
  >
    {eyebrow && (
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl dark:text-white">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-gray-600 dark:text-slate-300">{subtitle}</p>}
  </motion.div>
);

type FaqCardProps = {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqCard = ({ question, answer, index, isOpen, onToggle }: FaqCardProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    custom={Math.min(index, 3) * 0.5}
    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
      isOpen
        ? 'border-orange-500 bg-white shadow-xl shadow-orange-500/15 dark:border-orange-500/70 dark:bg-slate-800'
        : 'border-gray-200 bg-white shadow-sm hover:border-orange-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-500/50'
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`home-faq-${index}-content`}
      className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-6"
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold transition-colors duration-300 ${
          isOpen
            ? 'bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30'
            : 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400'
        }`}
      >
        {pad(index + 1)}
      </span>
      <span
        className={`home-faq-q flex-1 text-base font-semibold md:text-lg ${
          isOpen ? 'text-orange-600 dark:text-orange-400' : 'text-gray-900 dark:text-white'
        }`}
      >
        {question}
      </span>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          isOpen
            ? 'rotate-45 border-orange-500 bg-orange-500 text-white'
            : 'border-gray-200 text-gray-500 dark:border-slate-600 dark:text-slate-300'
        }`}
      >
        <Plus className="h-4 w-4" />
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`home-faq-${index}-content`}
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-6 md:pl-[5.5rem] md:pr-8">
            <div className="mb-4 h-px w-full bg-gradient-to-r from-orange-500/40 to-transparent md:hidden" />
            <p className="text-base leading-relaxed text-gray-600 dark:text-slate-300">{answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Index = () => {
  const { t, currentLanguage } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const isEnglish = currentLanguage === 'en';

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.classList.toggle('dark', saved === 'dark');
    }
  }, []);

  // The chatbot widget asks the page to resize its iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'AUDIO_RECORDER_CLICKED') {
        const iframe = document.getElementById('chatbotIframe') as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${event.data.data}`;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const scrollToTrust = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqs = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    q: t(`home.faq.q${n}`),
    a: t(`home.faq.a${n}`),
  }));

  const trustCards = [
    { icon: Clock, label: t('home.trustBuilders.timeline'), description: t('home.trustBuilders.timelineDesc') },
    { icon: Wallet, label: t('home.trustBuilders.freeService'), description: t('home.trustBuilders.freeServiceDesc') },
    {
      icon: ShieldCheck,
      label: t('home.trustBuilders.rbiRegistered'),
      tag: t('home.trustBuilders.rbiNBFC'),
      description: t('home.trustBuilders.rbiRegisteredDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-slate-950" lang={currentLanguage}>
      <style>{`
        @keyframes home-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        .home-float { animation: home-float 8s ease-in-out infinite; }
        .home-float-slow { animation: home-float 11s ease-in-out infinite; }

        /* Impact box: tada shake for the first second of every 4s cycle, and once more on hover */
        @keyframes impact-tada {
          0%, 25%, 100% { transform: scale3d(1, 1, 1); }
          2.5%, 5% { transform: scale3d(0.95, 0.95, 0.95) rotate(-3deg); }
          7.5%, 12.5%, 17.5%, 22.5% { transform: scale3d(1.05, 1.05, 1.05) rotate(3deg); }
          10%, 15%, 20% { transform: scale3d(1.05, 1.05, 1.05) rotate(-3deg); }
        }
        @keyframes impact-tada-once {
          0%, 100% { transform: scale3d(1, 1, 1); }
          10%, 20% { transform: scale3d(0.95, 0.95, 0.95) rotate(-3deg); }
          30%, 50%, 70%, 90% { transform: scale3d(1.05, 1.05, 1.05) rotate(3deg); }
          40%, 60%, 80% { transform: scale3d(1.05, 1.05, 1.05) rotate(-3deg); }
        }
        .impact-shake { animation: impact-tada 4s ease-in-out 1.5s infinite; }
        .impact-shake:hover { animation: impact-tada-once 1s ease-in-out; }
        /* Tamil, Telugu and Kannada words run long, so they get smaller type than the other languages */
        :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main h1 { font-size: 1.25rem; line-height: 1.4; }
        :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main h2 { font-size: 1.0625rem; line-height: 1.45; }
        :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main h3 { font-size: 1rem; line-height: 1.45; }
        :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main p { font-size: 0.8125rem; line-height: 1.7; }
        :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main .home-faq-q { font-size: 0.8125rem; }
        :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main a.rounded-full { font-size: 0.75rem; }
        :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main .tracking-widest { font-size: 0.625rem; }
        @media (min-width: 640px) {
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main h1 { font-size: 1.5rem; }
        }
        @media (min-width: 768px) {
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main h1 { font-size: 1.75rem; }
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main h2 { font-size: 1.375rem; }
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main h3 { font-size: 1.125rem; }
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main p { font-size: 0.875rem; }
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main .home-faq-q { font-size: 0.875rem; }
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main a.rounded-full { font-size: 0.8125rem; }
          :is([lang="ta"], [lang="te"], [lang="kn"]) .home-main .tracking-widest { font-size: 0.6875rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .impact-shake, .impact-shake:hover { animation: none; }
        }

        #chatbotIframe {
          width: 100%;
          border: none;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
        @media (max-width: 780px) {
          #chatbotIframe { height: 250px; }
        }
      `}</style>

      <Navbar />

      <main className="home-main">
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100 text-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-orange-800 dark:text-white">
        <div className="home-float pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/30" />
        <div className="home-float-slow pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/30 blur-3xl dark:bg-orange-400/20" />
        <div
          className="pointer-events-none absolute inset-0 text-gray-900 opacity-[0.06] dark:text-white dark:opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* Left content */}
          <div className="text-center lg:col-span-3 lg:text-left">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-600 backdrop-blur sm:text-sm dark:border-white/20 dark:bg-white/10 dark:text-orange-300"
            >
              <GraduationCap className="h-4 w-4" />
              {t('home.concept.subtitle')}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className={`font-extrabold leading-tight ${
                isEnglish ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl sm:text-4xl md:text-5xl'
              }`}
            >
              <span className="block text-gray-900 dark:text-white">{t('home.concept.title1')}</span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-300">
                {t('home.concept.title2')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl lg:mx-0 dark:text-gray-300"
            >
              {t('home.hero.subtitle1')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-3 rounded-full bg-orange-500 py-3 pl-3 pr-8 font-semibold text-white shadow-lg shadow-orange-500/40 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="h-5 w-5" />
                </span>
                {t('home.hero.cta')}
              </Link>
              <Link
                to="/services"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center rounded-full border-2 border-orange-500 px-8 py-3.5 font-semibold text-orange-600 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white dark:text-orange-300 dark:hover:text-white"
              >
                {t('home.hero.learnMore')}
              </Link>
            </motion.div>
          </div>

          {/* Right content: quick-action cards */}
          <div className="mx-auto w-full max-w-md space-y-5 lg:col-span-2">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}>
              <Link
                to="/credit-doctor"
                onClick={scrollToTop}
                className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 text-white shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 md:p-8 dark:from-orange-600 dark:to-amber-600 dark:shadow-orange-900/40"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
                <div className="pointer-events-none absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-white/10" />
                <div className="relative">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                    <HeartPulse className="h-7 w-7" />
                  </span>
                  <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl">{t('home.hero.popup1')}</h2>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-semibold text-orange-600 shadow-lg">
                    {t('home.hero.popupbutton')}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}>
              <div className="impact-shake">
              <Link
                to="/impact"
                onClick={scrollToTop}
                className="group flex items-center gap-4 rounded-2xl border border-orange-200 bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/15 dark:border-white/15 dark:bg-white/5 dark:hover:border-orange-500/60"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400">
                  <TrendingUp className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('home.hero.impact.title')}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{t('home.hero.impact.description')}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToTrust}
          aria-label="Scroll to next section"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 transition hover:text-orange-500 dark:text-white/70 dark:hover:text-white"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Trust builders */}
      <section id="trust" className="scroll-mt-24 bg-white py-16 transition-colors md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('home.trustBuilders.title')} />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trustCards.map(({ icon: Icon, label, tag, description }, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={index * 0.5}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/15 md:p-8 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-500/70"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-400/10 transition-transform duration-500 group-hover:scale-125" />
                <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400">
                  <Icon className="h-7 w-7" />
                </span>
                {tag && (
                  <span className="relative mb-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                    {tag}
                  </span>
                )}
                <h3 className="relative bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl dark:from-orange-400 dark:to-amber-300">
                  {label}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-gray-600 dark:text-slate-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission video */}
      <section className="bg-gradient-to-b from-orange-50/60 to-white py-16 transition-colors md:py-24 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center lg:col-span-2 lg:text-left"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300">
                <PlayCircle className="h-3.5 w-3.5" />
                Samatva
              </span>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl dark:text-white">
                {t('home.videoSection.title')}
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 lg:mx-0" />
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-slate-300">{t('home.videoSection.subtitle1')}</p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-slate-300">{t('home.videoSection.subtitle2')}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              className="relative mx-auto w-full max-w-3xl lg:col-span-3"
            >
              <div className="absolute -inset-3 rotate-2 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 opacity-20 dark:opacity-40" />
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-black/5">
                {!videoPlaying ? (
                  <button
                    type="button"
                    className="group block h-full w-full focus:outline-none"
                    onClick={() => setVideoPlaying(true)}
                    aria-label="Play video"
                  >
                    <img
                      src="/lovable-uploads/thumbnail.png"
                      alt="Samatva Credit Solutions Video Thumbnail"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-orange-500 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <PlayCircle className="h-12 w-12" />
                      </span>
                    </span>
                  </button>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/LryCtez2-yk?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1"
                    title="Samatva Credit Solutions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <section className="bg-white py-16 transition-colors md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-4 shadow-xl shadow-orange-500/10 md:p-6 dark:border-orange-500/30 dark:from-slate-900 dark:to-slate-800"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30">
                <Bot className="h-5 w-5" />
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">Samatva Assistant</span>
            </div>
            <iframe
              id="chatbotIframe"
              title="Samatva Assistant"
              src="https://shabd.tech/widget/chatpage?name=samatva&authKey=afd9a6b4-03fd-11f0-aabd-047c1692d8ad"
              allow="microphone"
              sandbox="allow-scripts allow-same-origin allow-modals allow-forms allow-popups allow-presentation allow-downloads allow-pointer-lock allow-top-navigation allow-top-navigation-by-user-activation"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 transition-colors md:py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title={t('faq.title')}  />

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <FaqCard
                key={index}
                question={item.q}
                answer={item.a}
                index={index}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/faq"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              <HelpCircle className="h-5 w-5" />
              {t('nav.faq')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gray-50 px-4 pb-20 transition-colors sm:px-6 lg:px-8 dark:bg-slate-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-12 text-center text-white shadow-2xl shadow-orange-500/30 md:px-12 dark:from-orange-600 dark:to-amber-600 dark:shadow-orange-900/40"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />
          <span className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <BadgeCheck className="h-7 w-7" />
          </span>
          <h2 className="relative mx-auto max-w-3xl text-2xl font-bold text-white md:text-4xl">{t('home.cta.title')}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/90">
            {t('home.cta.subtitle')} <span className="font-bold">{t('home.cta.subtitle1')}</span>
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-orange-600 shadow-lg transition hover:-translate-y-0.5"
            >
              {t('home.cta.button')}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              {t('home.hero.learnMore')}
            </Link>
          </div>
        </motion.div>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
