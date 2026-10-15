import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronDown,
  GraduationCap,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';

type Advantage = { title: string; description: string };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const } }),
};

const pad = (n: number) => String(n).padStart(2, '0');

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const advantageIcons = [Check, Shield, Users, TrendingUp];

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
    <h2 className="text-3xl font-bold leading-tight text-blue-950 md:text-4xl dark:text-white">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-gray-600 dark:text-slate-300">{subtitle}</p>}
  </motion.div>
);

type LeaderCardProps = {
  name: string;
  position: string;
  description: string;
  image: string;
  initials: string;
  linkedin: string;
  index: number;
};

const LeaderCard = ({ name, position, description, image, initials, linkedin, index }: LeaderCardProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/15 md:p-8 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-500/60"
  >
    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-400/10 transition-transform duration-500 group-hover:scale-125" />
    <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
      <div className="shrink-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 p-1 shadow-lg shadow-orange-500/30">
        <Avatar className="h-24 w-24 border-4 border-white dark:border-slate-800">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback className="bg-gradient-to-br from-gray-400 to-gray-600 text-xl font-bold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-blue-950 md:text-2xl dark:text-white">{name}</h3>
            <span className="mt-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
              {position}
            </span>
          </div>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:text-blue-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  const { t, translations, currentLanguage } = useLanguage();

  const advantagesRaw = t('about.whyChoose.advantages') as unknown;
  const advantages: Advantage[] = Array.isArray(advantagesRaw) ? advantagesRaw : [];
  const isEnglish = currentLanguage === 'en';

  const processSteps = [
    t('about.process.step1'),
    t('about.process.step2'),
    t('about.process.step3'),
    t('about.process.step4'),
  ];

  const highlights = [
    { icon: GraduationCap, text: t('about.leadership.description2') },
    { icon: Building2, text: t('about.leadership.description3') },
    { icon: Landmark, text: t('about.leadership.description4') },
  ];

  const scrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        @keyframes about-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        .about-float { animation: about-float 8s ease-in-out infinite; }
        .about-float-slow { animation: about-float 11s ease-in-out infinite; }
      `}</style>

      <Navbar />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100 text-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-orange-800 dark:text-white">
        <div className="about-float pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/30" />
        <div className="about-float-slow pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/30 blur-3xl dark:bg-orange-400/20" />
        <div
          className="pointer-events-none absolute inset-0 text-blue-950 opacity-[0.06] dark:text-white dark:opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto grid min-h-[60vh] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-orange-600 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-orange-300"
            >
              <Users className="h-4 w-4" />
              {t('about.hero.title')}
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
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-300">
                {t('about.title')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl lg:mx-0 dark:text-gray-300"
            >
              {t('about.hero.subtitle1')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mx-auto mt-8 flex max-w-xl items-start gap-3 rounded-2xl border border-orange-200 bg-white/70 p-4 text-left backdrop-blur lg:mx-0 dark:border-white/15 dark:bg-white/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30">
                <Award className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-gray-700 md:text-base dark:text-gray-200">
                {t('about.hero.description')}
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 opacity-20 dark:opacity-40" />
            <img
              alt="Debt Counselling Session"
              className="relative w-full rounded-3xl shadow-2xl ring-1 ring-black/5"
              src="/lovable-uploads/about-us-banner-image-samatva.png"
            />
          </motion.div>
        </div>

        <button
          type="button"
          onClick={scrollToStory}
          aria-label="Scroll to our story"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 transition hover:text-orange-500 dark:text-white/70 dark:hover:text-white"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Leadership story */}
      <section id="story" className="scroll-mt-24 bg-white py-16 transition-colors md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t('about.hero.title')} title={t('about.leadership.title')} />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-600 dark:text-slate-300"
          >
            {t('about.leadership.description1')}
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-500/50"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-base leading-relaxed text-gray-700 dark:text-slate-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="bg-gradient-to-b from-orange-50/60 to-white py-16 transition-colors md:py-24 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('about.process.title')} />

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative mx-auto w-full max-w-lg lg:sticky lg:top-28 lg:col-span-2"
            >
              <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 opacity-20 dark:opacity-40" />
              <img
                alt="Credit Counselling Session"
                className="relative w-full rounded-3xl shadow-xl ring-1 ring-black/5"
                src="/lovable-uploads/your-credit-profile-samatva-about-us.png"
              />
            </motion.div>

            <div className="relative lg:col-span-3">
              <div className="absolute bottom-6 left-[1.375rem] top-6 hidden w-px bg-gradient-to-b from-orange-500/60 via-orange-300/40 to-transparent sm:block" />
              <div className="space-y-5">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index * 0.5}
                    className="relative flex gap-4"
                  >
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 font-mono text-sm font-bold text-white shadow-lg shadow-orange-500/30">
                      {pad(index + 1)}
                    </span>
                    <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-md md:p-6 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-500/50">
                      <p className="text-base leading-relaxed text-gray-700 dark:text-slate-300">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-6 sm:pl-[3.75rem]"
              >
                <Link
                  to="/impact"
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5"
                >
                  {t('about.process.step5')}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Samatva */}
      <section className="bg-white py-16 transition-colors md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('about.whyChoose.title')}
            subtitle={t('about.whyChoose.subtitle')}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const Icon = advantageIcons[index % advantageIcons.length];
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index * 0.5}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/15 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-500/70"
                >
                  <span className="absolute right-5 top-5 font-mono text-sm font-bold text-gray-300 transition-colors group-hover:text-orange-400 dark:text-slate-600">
                    {pad(index + 1)}
                  </span>
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-blue-950 dark:text-white">{advantage.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600 dark:text-slate-300">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission — echoes the footer palette */}
      <section className="relative overflow-hidden bg-gray-700 py-16 text-white transition-colors md:py-20 dark:bg-slate-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <Quote className="mx-auto mb-6 h-10 w-10 text-orange-500" />
          <h2 className="mb-6 text-2xl font-bold text-orange-500 md:text-3xl">{t('about.mission')}</h2>
          <p className="text-xl font-medium leading-relaxed text-white md:text-2xl">{t('about.missionDesc')}</p>
        </motion.div>
      </section>

      {/* Management */}
      <section className="bg-gray-50 py-16 transition-colors md:py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('about.management.title')}
            subtitle={t('about.management.subtitle')}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <LeaderCard
              index={0}
              name={t('about.management.thallam.name')}
              position={t('about.management.thallam.position')}
              description={t('about.management.thallam.description')}
              image="/lovable-uploads/thallam- sreekumar-samatva.png"
              initials="TS"
              linkedin="https://www.linkedin.com/in/thallam-sreekumar-6421a6a/"
            />
            <LeaderCard
              index={1}
              name={t('about.management.venkat.name')}
              position={t('about.management.venkat.position')}
              description={t('about.management.venkat.description')}
              image="/lovable-uploads/venkatramanan-tm-samatva.png"
              initials="VT"
              linkedin="https://www.linkedin.com/in/venkatramanan-murthy-1434687/"
            />
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="bg-gray-50 px-4 pb-20 transition-colors sm:px-6 lg:px-8 dark:bg-slate-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-12 text-white shadow-2xl shadow-orange-500/30 md:px-12 dark:from-orange-600 dark:to-amber-600 dark:shadow-orange-900/40"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white md:text-4xl">{t('about.contact.title')}</h2>
              <p className="mt-3 text-white/90">{t('faqPage.getInTouch')}</p>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-orange-600 shadow-lg transition hover:-translate-y-0.5"
              >
                {t('faqPage.contactUs')}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-3 rounded-2xl bg-white/15 p-5 backdrop-blur md:p-6">
              <a href="tel:+916382097967" className="flex items-center gap-3 transition hover:text-white/80">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="font-semibold">+91 63820 97967</span>
              </a>
              <a
                href="mailto:support@samatvaawareness.in"
                className="flex items-center gap-3 break-all transition hover:text-white/80"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="font-semibold">support@samatvaawareness.in</span>
              </a>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-sm leading-relaxed text-white/90">{t('about.contact.address')}</span>
              </div>
              <p className="border-t border-white/20 pt-3 text-xs font-medium tracking-wide text-white/80">
                CIN: U70200TN2024PTC167249
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
