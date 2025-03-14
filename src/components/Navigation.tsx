import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigateToBestRoute, useScrollToSection } from '../utils/scrollHelper';
import Cart from './Cart';

interface Props {
  language: string;
}

const Navigation: React.FC<Props> = ({ language }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  useScrollToSection();

  const redDragonLogo =
    'https://banner2.cleanpng.com/20180513/fpq/avcdaf2x4.webp';

  const availableRoutes = [
    { path: `/${language}`, type: 'default' },
    { path: `/${language}/menu`, type: 'menu' },
  ];

  const menuItems = [
    { key: 'home', label: t('home') },
    { key: 'about', label: t('about') },
    { key: 'menu', label: t('menu') },
    { key: 'delivery', label: t('delivery') },
    { key: 'contact', label: t('contact') },
  ];

  const languages: { code: string; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    {
      code: 'pt-br',
      name: 'Português',
      flag: 'https://flagcdn.com/w20/br.png',
    },
    { code: 'es', name: 'Espanhol', flag: 'https://flagcdn.com/w20/es.png' },
    { code: 'ar', name: 'عربى', flag: 'https://flagcdn.com/w20/sa.png' },
    { code: 'bn', name: 'বাংলা', flag: 'https://flagcdn.com/w20/bd.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
    { code: 'he', name: 'עברית', flag: 'https://flagcdn.com/w20/il.png' },
    { code: 'hi', name: 'हिंदी', flag: 'https://flagcdn.com/w20/in.png' },
    {
      code: 'id',
      name: 'Bahasa Indonesia',
      flag: 'https://flagcdn.com/w20/id.png',
    },
    { code: 'ja', name: '日本語', flag: 'https://flagcdn.com/w20/jp.png' },
    { code: 'ko', name: '한국어', flag: 'https://flagcdn.com/w20/kr.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' },
    { code: 'ur', name: 'اردو', flag: 'https://flagcdn.com/w20/pk.png' },
    { code: 'zh', name: '中文', flag: 'https://flagcdn.com/w20/cn.png' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const handleNavigation = (sectionId?: string) => {
    navigateToBestRoute(
      navigate,
      sectionId,
      location.pathname,
      availableRoutes,
      `/${language}`,
    );
  };

  const changeLanguage = (lng: string) => {
    if (lng !== i18n.language) {
      const route = window.location.pathname.replace(i18n.language, lng);
      i18n.changeLanguage(lng);
      navigate(route);
    }
  };

  useEffect(() => {
    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
      changeLanguage(language);
    }
  }, [language, i18n.language]);

  return (
    <nav className='fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex items-center space-x-2 text-2xl font-bold text-red-600'
          >
            <img
              src={redDragonLogo}
              className='w-10 h-8'
              alt='Red Dragon Logo'
            />
            <span>Red Dragon</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center'>
            <div className='ml-10 flex items-center space-x-4'>
              {menuItems.map((item) => (
                <motion.button
                  key={item.key}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(item.key)}
                  className='text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Language Selector Drop-down */}
              <motion.div className='relative'>
                <motion.button
                  key={'language'}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className='text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2'
                >
                  <img
                    src={currentLanguage.flag}
                    alt={currentLanguage.name}
                    className='w-6 h-5'
                  />
                  <span>{currentLanguage.name}</span>
                </motion.button>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='absolute right-0 mt-2 bg-white shadow-md rounded-md z-10 max-h-80 overflow-y-auto'
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full'
                      >
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className='w-6 h-5'
                        />
                        <span>{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Cart */}
              <Cart />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-4'>
            <Cart />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:hidden'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white'>
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className='text-gray-800 hover:text-red-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium'
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Language Selector */}
            <motion.div>
              <motion.button
                key={'language'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className='text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2'
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className='w-6 h-5'
                />
                <span>{currentLanguage.name}</span>
              </motion.button>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='bg-white shadow-md rounded-md mt-2 z-10 max-h-40 overflow-y-auto'
                >
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full'
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className='w-6 h-5'
                      />
                      <span>{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
