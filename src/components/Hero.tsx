import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Red Dragon
              <span className="text-red-600">{t("restaurant")}</span>
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              <p>{t("location")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
