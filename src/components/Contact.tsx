import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {t('contactTitle')}
          </h2>
          <p className='text-lg text-gray-600'>{t('contactText')}</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-4'>
              <Phone className='w-6 h-6 text-red-600' />
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {t('phone')}
                </h3>
                <p className='text-gray-600'>(555) 123-4567</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <Mail className='w-6 h-6 text-red-600' />
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {t('email')}
                </h3>
                <p className='text-gray-600'>info@Reddragon.com</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <MapPin className='w-6 h-6 text-red-600' />
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {t('address')}
                </h3>
                <p className='text-gray-600'>{t('location')}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  {t('name')}
                </label>
                <input
                  type='text'
                  id='name'
                  {...register('name', { required: true })}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500'
                />
                {errors.name && (
                  <span className='text-red-600 text-sm'>{t('nameError')}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  {t('email')}
                </label>
                <input
                  type='email'
                  id='email'
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500'
                />
                {errors.email && (
                  <span className='text-red-600 text-sm'>
                    {t('emailError')}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700'
                >
                  {t('message')}
                </label>
                <textarea
                  id='message'
                  rows={4}
                  {...register('message', { required: true })}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500'
                />
                {errors.message && (
                  <span className='text-red-600 text-sm'>
                    {t('messageError')}
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type='submit'
                className='w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors'
              >
                {t('sendButton')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
