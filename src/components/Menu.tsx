import React from "react";
import { motion } from "framer-motion";
import MenuMock from "../assets/mocks/Menu.json";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  const menuItems = Object.entries(MenuMock).map(([category, items]) => ({
    category,
    items,
  }));

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("menuTitle")}
          </h2>
          <p className="text-lg text-gray-600">{t("menuText")}</p>
        </motion.div>

        <div className="space-y-12">
          {menuItems.map((category, index) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-gray-900 mb-6"
              >
                {category.category}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {item.name}
                        </h4>
                        <span className="text-red-600 font-semibold">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
