import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';

const MenuPage = () => {
  const { language } = useParams();

  return (
    <div>
      <Navigation language={language || 'en'} />
      <Menu />
    </div>
  );
};

export default MenuPage;
