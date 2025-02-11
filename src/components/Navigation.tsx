import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import redDragonLogo from '../assets/images/red-dragon-logo.webp';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const menuItems = [
    { key: 'home', label: t('home') },
    { key: 'about', label: t('about') },
    { key: 'menu', label: t('menu') },
    { key: 'delivery', label: t('delivery') },
    { key: 'contact', label: t('contact') },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w20/br.png' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
          <div className='hidden md:flex'>
            <div
              className='ml-10 flex items-baseline space-x-4'
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.key}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.key)}
                  className='text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Language Selector Drop-down */}
              <motion.div>
                <motion.button
                  key={'language'}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className='text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2'
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
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
                    className='absolute bg-white shadow-md rounded-md mt-2 z-10'
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
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
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
                onClick={() => scrollToSection(item.key)}
                className='text-gray-800 hover:text-red-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium'
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Language Selector */}
            <div className='flex flex-col items-stretch space-y-2 px-3 py-2'>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className='flex items-center space-x-2 px-4 py-2 text-base text-gray-800 hover:bg-gray-100 w-full'
                >
                  <img src={lang.flag} alt={lang.name} className='w-6 h-5' />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
