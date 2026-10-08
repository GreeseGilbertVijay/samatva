import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/+916382097973', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className=" w-[40px] h-[40px] p-2 rounded-[50%] shadow-lg bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 border-2 border-white flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white text-8xl" />
        </button>
      )}
      <div
        className={`transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={handleClick}
          className={`relative p-4 rounded-full shadow-lg transition-all duration-300 ${
            isHovered ? 'bg-[#25D366]' : 'bg-[#25D366]'
          }`}
        >
          <FaWhatsapp className="text-white text-3xl" />
          {(isHovered || isAnimating) && (
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton; 