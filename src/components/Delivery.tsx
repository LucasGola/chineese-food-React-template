import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import uberLogo from "../assets/images/uber-eats.svg";
import doordashLogo from "../assets/images/DoorDash_Logo.svg.png";
import grubhubLogo from "../assets/images//grubhub-logo-4.png";

const Delivery = () => {
  const deliveryApps = [
    {
      name: "UberEats",
      logo: uberLogo,
      link: "#",
    },
    {
      name: "DoorDash",
      logo: doordashLogo,
      link: "#",
    },
    {
      name: "Grubhub",
      logo: grubhubLogo,
      link: "#",
    },
  ];

  return (
    <section id="delivery" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Order Delivery
          </h2>
          <p className="text-lg text-gray-600">
            Get your favorite dishes delivered to your doorstep
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryApps.map((app, index) => (
            <motion.a
              key={app.name}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {app.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={app.logo}
                    alt={`Order through ${app.name}`}
                    className="w-full h-32 object-contain"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
