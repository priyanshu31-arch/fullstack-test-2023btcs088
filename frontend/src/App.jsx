import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection'
const App = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
        <FAQSection />
      </main>
      <ServiceSection/>
    <Footer />
    </div>
  );
};

export default App;

