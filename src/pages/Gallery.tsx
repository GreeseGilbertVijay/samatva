import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Instagram, Lightbulb, Play, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AUTOPLAY_DELAY = 4000;

const instagramReels = [
  'DZRXQX4xWvC',
  'DZZ_xvSBt54',
  'DZkCHm3hWkD',
  'DZr9QFZhcpA',
  'DZzs2XSqn9f',
  'DZ-Bc2tvm7n',
  'DaFusoEy4Ay',
  'DaQBj_GSs54',
  'Da78FekyE-4',
  'DbN277hSM4v',
  'Dbas3XbSCTw',
  'Dbhlmx9xT1c',
  'DbqJ8KdB1hh',
  'Db-y2p9BePS',
  'DcQ0I-7KVUX',
  'DcXxpnsRT1S',
  'DcgSlGhhw9r',
  'DctFvd5BDvM',
  'Dc5_dpiyFfT',
  'DdB02h3SYMi',
  'DdRF3chhvMa',
  'Ddbad6RKES4',
  'DdocHkuyJHa',
  'DdtrMaHBJ9q',
  'DdwR4GgyIub',
  'DdyoA1XSXdC',
  'Dd30St-yjE-',
];

const reelUrl = (id: string) => `https://www.instagram.com/reel/${id}/`;

const highlights = [
  { icon: Lightbulb, label: 'Credit tips' },
  { icon: Play, label: 'Loan advice' },
  { icon: Users, label: 'Real stories' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const } }),
};

type InstagramCardProps = {
  id: string;
  isActive: boolean;
};

// Height of the "Add a comment..." bar at the bottom of Instagram's embed, which we crop off
const COMMENT_BAR_HEIGHT = 56;

const InstagramCard = ({ id, isActive }: InstagramCardProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  // The embed reports its content height via postMessage; use it to crop the comment bar
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://www.instagram.com' || e.source !== iframeRef.current?.contentWindow) return;
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data?.type === 'MEASURE' && data.details?.height) setContentHeight(data.details.height);
      } catch {
        // ignore non-JSON messages
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div
      className={`relative h-full overflow-hidden rounded-3xl bg-white transition-all duration-700 ease-out ${
        isActive
          ? '-translate-y-2 scale-100 opacity-100 shadow-2xl shadow-orange-500/25 ring-4 ring-orange-500'
          : 'scale-[0.9] opacity-50 shadow-lg ring-1 ring-gray-200'
      }`}
      style={contentHeight ? { maxHeight: contentHeight - COMMENT_BAR_HEIGHT } : undefined}
    >
      <iframe
        ref={iframeRef}
        src={`${reelUrl(id)}embed/`}
        title={`Samatva Instagram reel ${id}`}
        loading="lazy"
        scrolling="no"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        className="block h-full w-full overflow-hidden border-0"
        style={contentHeight ? { height: contentHeight } : undefined}
      />
    </div>
  );
};

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false, duration: 30 });
  const [selected, setSelected] = useState(0);
  const [hovering, setHovering] = useState(false);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-slide while nobody is hovering
  useEffect(() => {
    if (!emblaApi || hovering) return;
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [emblaApi, hovering, selected]);

  const scrollToVideos = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes gallery-progress { from { width: 0% } to { width: 100% } }
        @keyframes gallery-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        .gallery-float { animation: gallery-float 8s ease-in-out infinite; }
        .gallery-float-slow { animation: gallery-float 11s ease-in-out infinite; }
      `}</style>

      <Navbar />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-orange-800 text-white">
        <div className="gallery-float pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange-500/30 blur-3xl" />
        <div className="gallery-float-slow pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-orange-400/20 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-orange-300 backdrop-blur"
          >
            <Instagram className="h-4 w-4" />
            Samatva Gallery
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl"
          >
            Real Stories.
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Real Change.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
          >
            Watch how Samatva helps people rebuild their credit, avoid costly loan mistakes and find their way back into
            the formal financial system.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
              >
                <Icon className="h-4 w-4 text-orange-400" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            href="#videos"
            onClick={scrollToVideos}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 py-3 pl-3 pr-8 font-semibold text-white shadow-lg shadow-orange-500/40 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-0.5 h-5 w-5 fill-orange-500" />
            </span>
            Watch Videos
          </motion.a>
        </div>

        <button
          type="button"
          onClick={scrollToVideos}
          aria-label="Scroll to videos"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70 transition hover:text-white"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Video slider */}
      <section id="videos" className="relative scroll-mt-24 overflow-hidden bg-white py-16 md:py-24">
        {/* Header: title on the left, counter and arrows on the right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 md:flex-row md:items-end md:justify-between md:text-left lg:px-8"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-orange-600">
              <Instagram className="h-4 w-4" />
              Watch &amp; learn
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-5xl">
              Video <span className="text-orange-500">Gallery</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 md:mx-0" />
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              Quick money tips and real stories from the Samatva community.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="font-mono">
              <span className="text-4xl font-bold text-orange-500">{pad(selected + 1)}</span>
              <span className="text-lg text-gray-400"> / {pad(instagramReels.length)}</span>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous video"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next video"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          className="relative mt-12"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="overflow-hidden pb-6 pt-4" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {instagramReels.map((id, i) => (
                <div
                  key={id}
                  className="min-w-0 flex-[0_0_78%] px-3 sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                >
                  <div className="aspect-[9/16]">
                    <InstagramCard id={id} isActive={i === selected} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft white fade on both edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent md:w-24" />
        </motion.div>

        {/* Progress line right below the videos */}
        <div className="mx-auto mt-2 w-full max-w-sm px-4">
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
            {!hovering && (
              <div
                key={selected}
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                style={{ animation: `gallery-progress ${AUTOPLAY_DELAY}ms linear forwards` }}
              />
            )}
          </div>
        </div>

        {/* Instagram link */}
        <div className="mx-auto mt-8 flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <a
            href={reelUrl(instagramReels[selected])}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-amber-400 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5"
          >
            <Instagram className="h-5 w-5" />
            Watch on Instagram
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-12 text-center text-white shadow-2xl shadow-orange-500/30 md:px-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />
          <h2 className="relative text-2xl font-bold text-white md:text-4xl">Ready to write your own story?</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/90">
            Talk to our team and take the first step back into the formal financial system.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-orange-600 shadow-lg transition hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
