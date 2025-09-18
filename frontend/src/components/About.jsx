import React from 'react'

const About = () => {
  
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Our Platform</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">University Connect is designed to streamline the student registration process, providing a one-stop solution for all your needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
            <p className="text-gray-600">A simple and intuitive form to get you registered in minutes.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
             <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
            <p className="text-gray-600">Receive an immediate confirmation email upon successful registration.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
             <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
               <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Academic Resources</h3>
            <p className="text-gray-600">Access important information and resources for your academic journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

  

export default About;