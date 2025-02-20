import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import About from '../components/About';
import Contact from '../components/Contact';
import Delivery from '../components/Delivery';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

const MyApp = () => {
  const { language } = useParams();

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <>
      <Navigation language={language || 'en'} />
      <Hero />
      <About />
      <Delivery />
      <Contact />
      <Footer />
    </>
  );
};

export default MyApp;
