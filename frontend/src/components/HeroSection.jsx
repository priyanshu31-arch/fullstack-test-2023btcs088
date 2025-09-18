import React from 'react'


  const HeroSection = () => {
  return (
    <section className="bg-indigo-700 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Welcome to University Connect</h2>
        <p className="text-lg md:text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">Your gateway to seamless registration and information for the upcoming academic year. Join us and be part of our vibrant community.</p>
        <a href="#contact" className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
          Get Started
        </a>
      </div>
    </section>
  );
};

  


export default HeroSection;