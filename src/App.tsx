import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Delivery from "./components/Delivery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <About />
        <Menu />
        <Delivery />
        <Contact />
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
