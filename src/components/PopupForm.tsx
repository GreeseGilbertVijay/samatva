import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const PopupForm = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <>
      {/* Popup Text and Button */}
     <div className="absolute top-0 left-0 cursor-pointer z-49">
        <h3 className="text-base font-bold text-orange-500 dark:text-white"
        style={
          ["ta", "hi", "te", "kn"].includes(currentLanguage)
            ? { fontSize: "12px" }
            : {}
        }>{t('home.hero.popup1')}</h3>
        <Link to="/credit-doctor" className="blink-element sm:w-auto bg-blue-900 dark:bg-white text-white dark:text-orange-600 hover:bg-orange-600 dark:hover:bg-orange-50
        px-6 sm:px-10 py-0 sm:py-1 mt-2 rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3 shadow-xl animate-scale-in text-xs sm:text-lg" style={
          ["ta", "hi", "te", "kn"].includes(currentLanguage)
            ? { fontSize: "12px" }
            : {}
        }>{t('home.hero.popupbutton')}</Link>
     </div>
    </>
  );
};

export default PopupForm;
