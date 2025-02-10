import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Red Dragon</h3>
            <p className="text-gray-400">{t("footerAbout")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>{t("footerHoursText.text1")}</li>
              <li>{t("footerHoursText.text2")}</li>
              <li>{t("footerHoursText.text3")}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">{t("contact")}</h3>
            <ul className="text-gray-400 space-y-2">
              <li>123 Dragon Street</li>
              <li>Chinatown, NY 10013</li>
              <li>(555) 123-4567</li>
              <li>info@Reddragon.com</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">
              {t("footerConnectionsTitle")}
            </h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {t("footerRights")}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
