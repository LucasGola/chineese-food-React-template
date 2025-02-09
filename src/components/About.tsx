import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const About = () => {
  const hours = [
    { day: "Monday - Friday", time: "11:00 AM - 10:00 PM" },
    { day: "Saturday", time: "12:00 PM - 11:00 PM" },
    { day: "Sunday", time: "12:00 PM - 9:00 PM" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="about" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving authentic Chinese cuisine since 1985, Red Dragon brings the
            flavors of China to New York City.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Opening Hours
            </h3>
            <div className="space-y-2">
              {hours.map(({ day, time }) => (
                <div key={day} className="text-gray-600">
                  <p className="font-medium">{day}</p>
                  <p>{time}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-red-600"
                >
                  <Icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Messages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Customer Reviews
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 italic">
                "Best dim sum in the city! Authentic flavors and great service."
              </p>
              <p className="text-gray-500 text-sm">- John D.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
