import React from 'react';


import { useState } from 'react';

const faqs = [
  {
    question: 'What are your core service areas?',
    answer: 'We specialize in Electrical Control & Instrumentation, Medium & High Voltage Systems, Structural & Mechanical Engineering, and Energy & Waste Management. Our team delivers end-to-end solutions tailored to your project\'s needs.',
  },
  {
    question: 'How do we start a project with Finegrade Engineering?',
    answer: 'The best way to start is by contacting our team through the form below or giving us a call. We\'ll schedule an initial consultation to understand your requirements, scope, and goals to provide a detailed proposal.',
  },
  {
    question: 'What is your approach to safety and compliance?',
    answer: 'Safety is our top priority. We adhere to the strictest industry standards and regulations in all our projects. Our team is fully certified and continuously trained to ensure the safest and most compliant outcomes.',
  },
  {
    question: 'Do you offer support after project completion?',
    answer: 'Yes, we offer post-project support and maintenance services to ensure the long-term success and reliability of our solutions. We believe in building lasting partnerships with our clients.',
  },
];

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" stroke="#D1D5DB"/>
    <path d="M12 8V16M8 12H16" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" fill="#259ed9" stroke="#259ed9"/>
    <path d="M8 12H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);


const NewsletterSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left Column */}
        <div className="w-full lg:w-2/5 lg:flex-shrink-0 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Your Questions, Answered</h2>
          <p className="text-gray-500 mb-8">Find quick answers to common questions about our services and process.</p>
          
          <div className="bg-blue-600 rounded-xl p-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2 text-white">
                <ChatIcon />
                <h3 className="font-bold text-lg">Can't Find Your Answer?</h3>
            </div>
            <p className="text-white text-sm mb-5 ml-1">Our experts are ready to provide detailed answers to all your project-specific questions.</p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-blue-600 font-semibold text-sm shadow-sm transition-colors border-2 border-transparent hover:bg-blue-700 hover:text-white hover:border-white">
                <ContactIcon />
                Contact Our Team
            </a>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className="w-full lg:w-3/5">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button 
                  onClick={() => handleToggle(index)} 
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold ${openIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>{faq.question}</span>
                  <span>{openIndex === index ? <MinusIcon /> : <PlusIcon />}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                    <p className="text-gray-600 pt-2 pr-8 text-left">
                        {faq.answer}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;