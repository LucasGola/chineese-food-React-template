import { motion } from 'framer-motion';
import { ChevronRight, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuMock from '../assets/mocks/Menu.json';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { dispatch } = useCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const menuItems = Object.entries(MenuMock).map(([category, items]) => ({
    category,
    items,
  }));

  const filteredMenuItems = menuItems
    .map(({ category, items }) => ({
      category,
      items: items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -100; // Adjust for fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setSelectedCategory(categoryId);
    }
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[itemId] || 0;
      const newQuantity = Math.max(0, current + delta);
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const addToCart = (item: any) => {
    const quantity = quantities[item.name] || 0;
    if (quantity > 0) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: item.name,
          name: item.name,
          price: parseFloat(item.price.replace('$', '')),
          quantity,
          image: item.image,
        },
      });
      setQuantities((prev) => ({ ...prev, [item.id]: 0 }));
      setQuantities((prev) => {
        const current = prev[item.name] || 0;
        const newQuantity = Math.max(0, current - current);
        return { ...prev, [item.name]: newQuantity };
      });
    }
  };

  return (
    <div className='py-20 flex flex-col md:flex-row'>
      {/* Categories Sidebar - Desktop */}
      <div className='hidden md:block w-64 h-[calc(100vh-4rem)] sticky top-16 bg-white border-r border-gray-200 overflow-y-auto'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-4'>{t('menuCategories')}</h3>
          <div className='space-y-2'>
            {menuItems.map(({ category }) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'hover:bg-red-50 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Horizontal Scroll - Mobile */}
      <div className='md:hidden sticky top-16 bg-white z-10 border-b border-gray-200'>
        <div className='overflow-x-auto whitespace-nowrap px-4 py-3'>
          {menuItems.map(({ category }) => (
            <button
              key={category}
              onClick={() => scrollToCategory(category)}
              className={`inline-block px-4 py-2 mr-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-red-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className='flex-1 min-h-screen bg-white p-4 md:p-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {t('menuTitle')}
          </h2>
          <p className='text-lg text-gray-600'>{t('menuText')}</p>
        </motion.div>

        <div className='mb-8 flex justify-center'>
          <input
            type='text'
            placeholder={t('menuSearchText')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
          />
        </div>

        <div className='space-y-12'>
          {filteredMenuItems.length > 0 ? (
            filteredMenuItems.map((category, index) => (
              <div key={category.category} id={category.category}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-2xl font-semibold text-gray-900 mb-6 flex items-center'
                >
                  <ChevronRight className='w-6 h-6 text-red-600 mr-2' />
                  {category.category}
                </motion.h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {/* START CARD */}
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + itemIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative'
                    >
                      <div className='aspect-w-16 aspect-h-9'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-full h-48 object-cover'
                        />
                      </div>
                      <div className='p-6 flex-1 flex flex-col justify-between h-full border rounded shadow-md'>
                        <div className='flex justify-between items-start mb-2'>
                          <h4 className='text-xl font-semibold text-gray-900'>
                            {item.name}
                          </h4>
                          <span className='text-red-600 font-semibold'>
                            {item.price}
                          </span>
                        </div>
                        <p className='text-gray-600 mb-4'>{item.description}</p>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <button
                              onClick={() => updateQuantity(item.name, -1)}
                              className='p-1 hover:bg-gray-100 rounded'
                            >
                              <Minus className='w-4 h-4' />
                            </button>
                            <span className='w-8 text-center'>
                              {quantities[item.name] || 0}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, 1)}
                              className='p-1 hover:bg-gray-100 rounded'
                            >
                              <Plus className='w-4 h-4' />
                            </button>
                          </div>
                          <button
                            onClick={() => addToCart(item)}
                            disabled={!quantities[item.name]}
                            className={`px-4 py-2 rounded-md ${
                              quantities[item.name]
                                ? 'bg-red-600 text-white hover:bg-red-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            } transition-colors`}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* END CARD */}
              </div>
            ))
          ) : (
            <p className='text-center text-gray-600'>
              {t('noResults') || 'No items found.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
