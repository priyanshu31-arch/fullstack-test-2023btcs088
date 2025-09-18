import React  from 'react'
import Footer from './components/footer';
import Header from './components/header';
import Contact from './components/contact';
import FAQSection from './components/FAQSection';
import About from './components/about';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection/>
        <About />
        <Contact />
        <FAQSection />
      </main>
      <Services />
      <Footer />
    </div>
  );
};

export default App;
