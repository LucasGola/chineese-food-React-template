import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import i18n from '../i18n';
import About from './components/About';
import Contact from './components/Contact';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import getLanguages from './utils/getLanguages';

export default function App() {
  const [lngs, setLngs] = useState<string[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const languages = await getLanguages();
      setLngs(languages);
    };

    fetchLanguages();
  }, []);

  if (lngs.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {lngs.map((lng) => (
          <Route path={`/${lng}`} element={<MyApp lng={lng} />} key={lng} />
        ))}
        <Route path='/' element={<Navigate replace to='/en' />} />
      </Routes>
    </BrowserRouter>
  );
}

const MyApp: React.FC<MyAppProps> = ({ lng }) => {
  useEffect(() => {
    i18n.changeLanguage(lng);
  });

  return (
    <I18nextProvider i18n={i18n}>
      <div className='min-h-screen bg-white'>
        <Navigation />
        <Hero />
        <About />
        <Menu />
        <Delivery />
        <Contact />
        <Footer />
      </div>
    </I18nextProvider>
  );
};

interface MyAppProps {
  lng: string;
}
