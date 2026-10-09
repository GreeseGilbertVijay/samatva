import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const } }),
};

const pad = (n: number) => String(n).padStart(2, '0');

const Contact = () => {
  const { t, currentLanguage } = useLanguage();
  const isEnglish = currentLanguage === 'en';

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const contactCards: { icon: typeof Mail; title: string; lines: React.ReactNode[]; note?: string }[] = [
    {
      icon: Mail,

      
      title: t('contact.email'),
      lines: [
        <a key="mail" href="mailto:support@samatvaawareness.in" className="hover:text-orange-600 hover:underline dark:hover:text-orange-400">
          support@samatvaawareness.in
        </a>,
      ],
      note: t('contact.emailDesc'),
    },
    {
      icon: Phone,
      title: t('contact.call'),
      lines: [
        <a key="tel" href="tel:+916382097967" className="hover:text-orange-600 hover:underline dark:hover:text-orange-400">
          +91 63820 97967
        </a>,
      ],
      note: t('contact.callDesc'),
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  const serviceAreas = [t('contact.box1'), t('contact.box2'), t('contact.box3'), t('contact.box4')];

  const steps = [
    { title: t('contact.step1'), description: t('contact.step1Desc') },
    { title: t('contact.step2'), description: t('contact.step2Desc') },
    { title: t('contact.step3'), description: t('contact.step3Desc') },
    { title: t('contact.step4'), description: t('contact.step4Desc') },
    { title: t('contact.step5'), description: t('contact.step5Desc') },
  ];

  const whyAnswers = [t('contact.whyAns1'), t('contact.whyAns2'), t('contact.whyAns3'), t('contact.whyAns4')];

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-slate-950" lang={currentLanguage}>
      <style>{`
        @keyframes contact-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        .contact-float { animation: contact-float 8s ease-in-out infinite; }
        .contact-float-slow { animation: contact-float 11s ease-in-out infinite; }
      `}</style>

      <Navbar />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100 text-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-orange-800 dark:text-white">
        <div className="contact-float pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/30" />
        <div className="contact-float-slow pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/30 blur-3xl dark:bg-orange-400/20" />
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
            <MessageCircle className="h-4 w-4" />
            Contact Us
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
              {t('contact.title')}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300"
          >
            {t('contact.subtitle')}
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            href="#contact-form"
            onClick={scrollToForm}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 py-3 pl-3 pr-8 font-semibold text-white shadow-lg shadow-orange-500/40 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 transition-transform duration-300 group-hover:scale-110">
              <ArrowRight className="h-5 w-5" />
            </span>
            {t('contact.startConsultation')}
          </motion.a>
        </div>

        <button
          type="button"
          onClick={scrollToForm}
          aria-label="Scroll to form"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 transition hover:text-orange-500 dark:text-white/70 dark:hover:text-white"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-16 transition-colors md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl dark:text-white">{t('contact.contactInfo')}</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactCards.map(({ icon: Icon, title, lines, note }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 0.5}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-500/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <div className="mt-2 space-y-1 text-base text-gray-700 dark:text-slate-200">
                  {lines.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
                {note && <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">{note}</p>}
              </motion.div>
            ))}
          </div>

          {/* Service areas */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-center text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              {t('contact.serviceAreas')}
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {serviceAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50 p-4 dark:border-orange-500/20 dark:bg-orange-500/10"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-orange-500 dark:text-orange-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next steps + why us */}
      <section className="bg-gradient-to-b from-white to-orange-50/60 py-16 transition-colors md:py-24 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">{t('contact.nextSteps')}</h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />

            <div className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={Math.min(i, 3) * 0.5}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 font-mono text-sm font-bold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                    {pad(i + 1)}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 md:text-lg dark:text-white">{step.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-slate-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="self-start rounded-3xl border border-orange-200 bg-white p-8 shadow-xl shadow-orange-500/10 lg:sticky lg:top-28 dark:border-orange-500/30 dark:bg-slate-800"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">{t('contact.whyQuest')}</h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            <ul className="mt-6 space-y-4">
              {whyAnswers.map((answer, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span
                    className={
                      i === 1
                        ? 'font-bold text-orange-600 dark:text-orange-400'
                        : 'text-gray-700 dark:text-slate-200'
                    }
                  >
                    {answer}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section id="contact-form" className="scroll-mt-24 bg-white transition-colors dark:bg-slate-950">
        <Form />
      </section>

      {/* Google Maps Section */}
      <section className="w-full h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.987187456456!2d80.2342!3d13.0475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52689a3a3a3a3a%3A0x3a3a3a3a3a3a3a3a!2sVyasar%20St%2C%20T.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600017!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Samatva Awareness Location - T. Nagar, Chennai"
        ></iframe>
      </section>

      {/* Call to action */}
      <section className="bg-white px-4 py-20 transition-colors sm:px-6 lg:px-8 dark:bg-slate-950">
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
            <Phone className="h-7 w-7" />
          </span>
          <h2 className="relative text-2xl font-bold text-white md:text-4xl">{t('contact.takeFirstStep')}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/90">{t('contact.takeFirstStepDesc')}</p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:support@samatvaawareness.in"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-orange-600 shadow-lg transition hover:-translate-y-0.5"
            >
              {t('contact.startConsultation')}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+916382097967"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              {t('contact.callNow')}
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
