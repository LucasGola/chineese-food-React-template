import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Red Dragon
              <span className="text-red-600">Restaurant</span>
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              <p>123 Dragon Street, Chinatown, NY 10013</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-red-700 transition-colors"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Chinese Cuisine"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
