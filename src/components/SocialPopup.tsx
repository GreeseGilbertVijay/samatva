import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import { INSTAGRAM_GRADIENT, INSTAGRAM_URL, InstagramIcon, LINKEDIN_URL, LinkedinIcon } from '@/components/SocialIcons';

// Little "burst" strokes drawn beside the title and icons
const Burst = ({ flip = false, colors }: { flip?: boolean; colors: [string, string, string] }) => (
  // Lines radiate from the text: top slants down toward it, middle is flat, bottom slants up
  <svg width="30" height="40" viewBox="0 0 30 40" className={`shrink-0 ${flip ? '-scale-x-100' : ''}`} aria-hidden="true">
    <line x1="15" y1="5" x2="24" y2="11" stroke={colors[0]} strokeWidth="3" strokeLinecap="round" />
    <line x1="5" y1="20" x2="22" y2="20" stroke={colors[1]} strokeWidth="3" strokeLinecap="round" />
    <line x1="15" y1="35" x2="24" y2="29" stroke={colors[2]} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SocialPopup = () => {
  const [open, setOpen] = useState(false);

  // Show on every visit to the home page, 3 seconds after it loads
  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="social-popup-title"
            className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white px-6 pb-10 pt-12 text-center shadow-2xl sm:px-10"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Soft decorative blobs in the corners */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-pink-100/70" />
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-44 w-44 rounded-full border-[14px] border-blue-50" />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex items-center justify-center gap-3 sm:gap-5">
              <Burst colors={['#ec4899', '#f97316', '#fb7185']} />
              <h2
                id="social-popup-title"
                className="text-5xl text-blue-950 sm:text-6xl"
                style={{ fontFamily: "'Kaushan Script', cursive" }}
              >
                Stay Inspired.
              </h2>
              <Burst flip colors={['#8b5cf6', '#ec4899', '#fb7185']} />
            </div>

            <p className="relative mt-4 text-xl font-bold text-blue-950 sm:text-2xl">
              Follow Us on{' '}
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                Instagram
              </span>{' '}
              &amp; <span className="text-[#0a66c2]">LinkedIn</span>
            </p>

            <div className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 via-pink-50 to-blue-50 px-5 py-2 shadow-sm">
              <Eye className="h-5 w-5 text-pink-500" />
              <span className="text-base font-semibold text-blue-950 sm:text-lg">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl">
                  3.5 Crore+
                </span>{' '}
                Viewers
              </span>
            </div>

            <div className="relative mt-6 flex items-center justify-center gap-4 sm:gap-6">
              <Burst colors={['#ec4899', '#d946ef', '#ec4899']} />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Samatva on Instagram"
                className="rounded-full bg-pink-100 p-2 transition-transform hover:scale-110"
              >
                <span className={`flex h-16 w-16 items-center justify-center rounded-full ${INSTAGRAM_GRADIENT} text-white shadow-lg`}>
                  <InstagramIcon className="h-9 w-9" />
                </span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Samatva on LinkedIn"
                className="rounded-full bg-blue-100 p-2 transition-transform hover:scale-110"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-lg">
                  <LinkedinIcon className="h-8 w-8" />
                </span>
              </a>
              <Burst flip colors={['#3b82f6', '#0a66c2', '#3b82f6']} />
            </div>

            {/* Smile-shaped underline */}
            <svg viewBox="0 0 200 20" className="relative mx-auto mt-5 h-5 w-48" aria-hidden="true">
              <defs>
                <linearGradient id="social-popup-smile" x1="0" x2="1">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path d="M6 6 Q100 22 194 6" fill="none" stroke="url(#social-popup-smile)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialPopup;
