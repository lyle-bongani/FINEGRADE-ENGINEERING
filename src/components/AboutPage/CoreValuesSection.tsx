import React from 'react';
import { ShieldCheck, TrendingUp, Smile, CheckCircle, Sparkles } from 'lucide-react';

const coreValues = [
  {
    icon: <ShieldCheck className="text-blue-500" size={32} />, title: 'Integrity',
    desc: 'We uphold the highest standards of honesty and ethical conduct in all our actions.'
  },
  {
    icon: <TrendingUp className="text-blue-500" size={32} />, title: 'Continuous Improvement',
    desc: 'We strive to constantly improve our processes, services, and ourselves.'
  },
  {
    icon: <Smile className="text-blue-500" size={32} />, title: 'Customer Satisfaction',
    desc: 'We are dedicated to exceeding customer expectations in every project.'
  },
  {
    icon: <CheckCircle className="text-blue-500" size={32} />, title: 'Quality',
    desc: 'We deliver only the highest quality products and services.'
  },
  {
    icon: <Sparkles className="text-blue-500" size={32} />, title: 'Innovation',
    desc: 'We foster creativity and embrace new ideas to drive progress.'
  },
];

const CoreValuesSection: React.FC = () => (
  <section className="w-full py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 mt-2 text-center">Core Values</h2>
      <div className="text-blue-400 text-lg font-semibold mb-10 text-center">What Drives Us</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {coreValues.slice(0, 3).map((value) => (
          <div
            key={value.title}
            className="bg-white rounded-3xl shadow-xl border-t-8 border-blue-400 p-8 flex-1 min-w-[220px] max-w-xs flex flex-col items-center text-center transition-transform hover:scale-105 duration-200"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">{value.title}</h3>
            <p className="text-gray-700 text-base">{value.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        {coreValues.slice(3).map((value) => (
          <div
            key={value.title}
            className="bg-white rounded-3xl shadow-xl border-t-8 border-blue-400 p-8 flex-1 min-w-[220px] max-w-xs flex flex-col items-center text-center transition-transform hover:scale-105 duration-200"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">{value.title}</h3>
            <p className="text-gray-700 text-base">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValuesSection;
