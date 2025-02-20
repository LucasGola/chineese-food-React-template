import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import i18n from '../i18n';
import About from './components/About';
import Contact from './components/Contact';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import getLanguages from './utils/getLanguages';

const App = () => {
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
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className='min-h-screen bg-white'>
          <Routes>
            <Route path='/:language' element={<MyApp />} />
            <Route path='/:language/menu' element={<MyApp />} />
            <Route path='/' element={<Navigate replace to='/en' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

const MyApp = () => {
  const { language } = useParams();

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Delivery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
