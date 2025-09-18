import React, { useState } from 'react';


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </button>
      {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
    const faqs = [
    {
      question: 'What is the deadline for registration?',
      answer: 'The registration deadline for the upcoming academic year is August 31st. We encourage you to register as early as possible to secure your spot.'
    },
    {
      question: 'Are there any registration fees?',
      answer: 'No, there are no fees for registering your interest through this platform. Any applicable tuition or university fees will be handled separately through the official admissions office.'
    },
    {
      question: 'Who can I contact for more information?',
      answer: 'For any further questions, you can reach out to our admissions team at admissions@university.edu or call us at (123) 456-7890 during office hours.'
    },
     {
      question: 'What happens after I register?',
      answer: 'After you submit your registration, you will receive a confirmation email with the next steps. Our team will review your information and contact you regarding the admission process.'
    }
  ];
  
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-4">Find answers to common questions about our registration process.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
