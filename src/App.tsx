import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import i18n from '../i18n';
import { CartProvider } from './context/CartContext';
import MenuPage from './pages/MenuPage';
import MyApp from './pages/MyApp';

const App = () => {
  return (
    <CartProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <div className='min-h-screen bg-white'>
            <Routes>
              <Route path='/:language' element={<MyApp />} />
              <Route path='/:language/menu' element={<MenuPage />} />
              <Route path='/' element={<Navigate replace to='/en' />} />
            </Routes>
          </div>
        </BrowserRouter>
      </I18nextProvider>
    </CartProvider>
  );
};

export default App;
