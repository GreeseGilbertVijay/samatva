import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CREDIT_DOCTOR_URL = 'https://samatva-case-buddy.lovable.app/credit-doctor';
const CREDIT_DOCTOR_ORIGIN = new URL(CREDIT_DOCTOR_URL).origin;

const CreditDoctor = () => {
  // Height reported by the embedded page; until then, fill the screen below the navbar
  const [frameHeight, setFrameHeight] = useState<number | null>(null);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== CREDIT_DOCTOR_ORIGIN) return;
      const data = event.data;
      if (data?.type === 'credit-doctor-height' && typeof data.height === 'number') {
        setFrameHeight(Math.ceil(data.height));
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const autoSized = frameHeight !== null;

  return (
    <div>
      <Navbar />

      <main className="flex-1 w-full">
        {/* Cross-origin iframe can't be styled, so until it reports its height,
            widen it and clip its scrollbar off the right edge */}
        <div
          className="w-full overflow-hidden"
          style={{ height: autoSized ? frameHeight : 'calc(180vh - 6rem)' }}
        >
          <iframe
            src={CREDIT_DOCTOR_URL}
            title="Credit Doctor"
            className="border-0 block h-full"
            style={{ width: autoSized ? '100%' : 'calc(100% + 20px)' }}
            scrolling={autoSized ? 'no' : 'auto'}
            allow="clipboard-write; microphone; camera"
          />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-slate-400 py-3">
          Page not loading?{' '}
          <a
            href={CREDIT_DOCTOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Open Credit Doctor in a new tab
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default CreditDoctor;
