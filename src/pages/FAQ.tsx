import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, HelpCircle, MessageCircle, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

type FaqItem = { question: string; answer: string };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const } }),
};

const pad = (n: number) => String(n).padStart(2, '0');

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

type FaqCardProps = {
  faq: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqCard = ({ faq, index, isOpen, onToggle }: FaqCardProps) => (
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
      aria-controls={`faq-${index}-content`}
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
        className={`flex-1 text-base font-semibold md:text-lg ${
          isOpen ? 'text-orange-600 dark:text-orange-400' : 'text-gray-900 dark:text-white'
        }`}
      >
        {faq.question}
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
          id={`faq-${index}-content`}
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-6 md:pl-[5.5rem] md:pr-8">
            <div className="mb-4 h-px w-full bg-gradient-to-r from-orange-500/40 to-transparent md:hidden" />
            <p className="text-base leading-relaxed text-gray-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const { t, translations, currentLanguage } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = t('faqPage.questions') as unknown;
  const faqs: FaqItem[] = Array.isArray(questions) ? questions : [];
  const isEnglish = currentLanguage === 'en';

  const scrollToQuestions = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('questions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Don't render content until translations are loaded
  if (!translations || Object.keys(translations).length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-slate-950" lang={currentLanguage}>
      <style>{`
        @keyframes faq-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        .faq-float { animation: faq-float 8s ease-in-out infinite; }
        .faq-float-slow { animation: faq-float 11s ease-in-out infinite; }
      `}</style>

      <Navbar />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100 text-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-orange-800 dark:text-white">
        <div className="faq-float pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/30" />
        <div className="faq-float-slow pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/30 blur-3xl dark:bg-orange-400/20" />
        <div
          className="pointer-events-none absolute inset-0 text-gray-900 opacity-[0.06] dark:text-white dark:opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-orange-600 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-orange-300"
          >
            <HelpCircle className="h-4 w-4" />
            FAQ
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className={`max-w-4xl font-extrabold leading-tight ${
              isEnglish ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl sm:text-4xl md:text-5xl'
            }`}
          >
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-300">
              {t('faqPage.title')}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300"
          >
            {t('faqPage.subtitle')}
          </motion.p>
        </div>

        <button
          type="button"
          onClick={scrollToQuestions}
          aria-label="Scroll to questions"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 transition hover:text-orange-500 dark:text-white/70 dark:hover:text-white"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Questions */}
      <section id="questions" className="scroll-mt-24 bg-white py-16 transition-colors md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqCard
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-white px-4 pb-20 transition-colors sm:px-6 lg:px-8 dark:bg-slate-950">
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
            <MessageCircle className="h-7 w-7" />
          </span>
          <h2 className="relative text-2xl font-bold text-white md:text-4xl">{t('faqPage.stillHaveQuestions')}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/90">{t('faqPage.getInTouch')}</p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-orange-600 shadow-lg transition hover:-translate-y-0.5"
            >
              {t('faqPage.contactUs')}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              {t('faqPage.learnServices')}
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
