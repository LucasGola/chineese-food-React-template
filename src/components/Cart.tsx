import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  return (
    <>
      {/* Cart Icon with Counter */}
      <button
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
        className='relative p-2'
      >
        <ShoppingCart className='w-6 h-6' />
        {state.items.length > 0 && (
          <span className='absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
            {state.items.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            key='cart-container'
            className='fixed inset-0 z-4 inline-block'
            style={{ height: '65vh' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <motion.div
              key='cart-overlay'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className='inset-0 bg-black inline-block'
            />

            {/* Cart Panel */}
            <motion.div
              key='cart-panel'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className='absolute right-0 top-0 h-full w-screen sm:w-[400px] md:w-[500px] bg-white shadow-xl z-50 flex flex-col'
            >
              <div className='flex items-center justify-between p-4 border-b'>
                <h2 className='text-lg font-semibold'>Shopping Cart</h2>
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                  className='p-2 hover:bg-gray-100 rounded-full'
                >
                  <X className='w-5 h-5' />
                </button>
              </div>

              <div className='flex-1 overflow-y-auto p-4'>
                {state.items.length === 0 ? (
                  <div className='text-center text-gray-500 mt-8'>
                    Your cart is empty
                  </div>
                ) : (
                  <AnimatePresence>
                    <div className='space-y-4'>
                      {state.items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className='flex items-center space-x-4 bg-white rounded-lg p-2 shadow-sm'
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className='w-20 h-20 object-cover rounded-md'
                          />
                          <div className='flex-1'>
                            <h3 className='font-medium'>{item.name}</h3>
                            <p className='text-red-600 font-semibold'>
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <div className='flex items-center space-x-2 mt-2'>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className='p-1 hover:bg-gray-100 rounded'
                              >
                                <Minus className='w-4 h-4' />
                              </button>
                              <span className='w-8 text-center'>
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className='p-1 hover:bg-gray-100 rounded'
                              >
                                <Plus className='w-4 h-4' />
                              </button>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: 'REMOVE_ITEM',
                                    payload: item.id,
                                  })
                                }
                                className='p-1 hover:bg-red-100 text-red-600 rounded ml-2'
                              >
                                <Trash2 className='w-4 h-4' />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatePresence>
                )}
              </div>

              {state.items.length > 0 && (
                <div className='border-t p-4'>
                  <div className='flex justify-between items-center mb-4'>
                    <span className='font-semibold'>Total:</span>
                    <span className='text-xl font-bold'>
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button className='w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors'>
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
