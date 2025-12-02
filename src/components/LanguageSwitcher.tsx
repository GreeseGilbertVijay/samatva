import React from 'react';
import { ChevronDown, Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, languages } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  
  const currentLangInfo = languages.find(lang => lang.code === currentLanguage);

  return (
    <DropdownMenu>
      {/* Trigger Button */}
      <DropdownMenuTrigger
        className="
          flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors group
          text-black dark:text-slate-300
          bg-white dark:bg-transparent
          hover:bg-orange-100 dark:hover:bg-slate-800
          hover:text-orange-500 dark:hover:text-orange-400
        "
      >
        <Languages size={18} />

        {/* Language print text */}
        <div className="text-sm font-medium hidden sm:block">
          <span className="text-orange-500 dark:text-orange-300">
            {currentLangInfo?.nativeName}
          </span>
          {currentLangInfo?.code !== 'en' && (
            <span className="text-gray-600 dark:text-slate-400 ml-1">
              / {currentLangInfo?.name}
            </span>
          )}
        </div>

        <ChevronDown
          size={16}
          className="opacity-60 group-hover:opacity-100"
        />
      </DropdownMenuTrigger>

      {/* DROPDOWN MENU */}
      <DropdownMenuContent
        className="
          min-w-[200px] border rounded-lg shadow-lg
          bg-white text-black border-gray-200
          dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700
        "
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`
              cursor-pointer p-3 rounded-md transition-colors
              
              /* Light mode */
              hover:bg-orange-100 hover:text-orange-500 
              ${currentLanguage === language.code ? 'bg-orange-100 text-orange-600 font-semibold' : ''}

              /* Dark mode overrides */
              dark:hover:bg-slate-700 dark:hover:text-orange-400 
              ${currentLanguage === language.code 
                ? 'dark:bg-slate-700 dark:text-orange-400 dark:font-semibold'
                : ''
              }
            `}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between w-full">
                <span className="text-base font-medium">
                  {language.nativeName}
                </span>

                {currentLanguage === language.code && (
                  <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                )}
              </div>

              {language.code !== 'en' && (
                <span className="text-sm text-gray-600 dark:text-slate-400">
                  {language.name}
                </span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
