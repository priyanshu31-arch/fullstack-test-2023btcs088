import React from 'react';

const services = [
  {
    title: 'Admissions',
    description: 'Explore undergraduate and postgraduate programs, scholarships, and application procedures.',
    icon: '🎓',
  },
  {
    title: 'Research',
    description: 'Discover cutting-edge research initiatives and collaboration opportunities.',
    icon: '🔬',
  },
  {
    title: 'Campus Life',
    description: 'Experience vibrant student life, clubs, events, and wellness resources.',
    icon: '🏕️',
  },
  {
    title: 'Library',
    description: 'Access thousands of academic journals, books, and digital resources.',
    icon: '📚',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
