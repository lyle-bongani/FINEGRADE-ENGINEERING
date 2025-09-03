import React from 'react';
import { Link } from 'react-router-dom';

import { Award, ShieldCheck, Users } from 'lucide-react';

const badges = [
  { icon: <Award className="text-blue-400 mr-2" size={20} />, label: 'Engineering Excellence' },
  { icon: <ShieldCheck className="text-blue-400 mr-2" size={20} />, label: 'Trusted & Reliable' },
  { icon: <Users className="text-blue-400 mr-2" size={20} />, label: 'Industry Specialists' },
];

const services = [
  {
    title: 'ELECTRICAL CONTROL AND INSTRUMENTATION',
    desc: 'Design, installation, and maintenance of advanced control and instrumentation systems.'
  },
  {
    title: 'MEDIUM AND HIGH VOLTAGE SERVICES',
    desc: 'Comprehensive solutions for medium and high voltage systems, from planning to execution.'
  },
  {
    title: 'STRUCTURAL, MECHANICAL, PIPPING AND PLATEWORK SERVICES',
    desc: 'Expertise in structural, mechanical, piping, and platework projects for various industries.'
  },
  {
    title: 'ENERGY & WASTE MANAGEMENT',
    desc: 'Innovative energy and waste management services for sustainable operations.'
  },
];

const OurServicesSection: React.FC = () => (
  <section className="w-full py-0 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl my-20">
      {/* Left: Badges and Title */}
      <div className="bg-blue-500 text-white flex flex-col justify-center items-start p-10 md:w-1/3 w-full min-h-[400px]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Services</h2>
        <div className="space-y-4 w-full">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center bg-white border border-blue-200 rounded-full px-4 py-2 font-semibold text-blue-600 text-base shadow-md"
            >
              {badge.icon}
              {badge.label}
            </div>
          ))}
        </div>
        <div className="mt-8 hidden md:flex">
          <span className="text-white font-bold tracking-widest">Finegrade Engineering</span>
        </div>
      </div>
      {/* Right: Services Grid */}
      <div className="bg-white flex-1 p-8 md:p-14 flex flex-col justify-center items-center">
        <div className="mb-10 text-center">
          <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">What Do You Need? We Can Do It</div>
          <div className="text-blue-400 max-w-xl mx-auto">Our experienced team delivers a wide range of engineering solutions tailored to your project needs.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`hover-card rounded-2xl border border-blue-100 p-7 flex flex-col items-start shadow-md transition-all duration-200 ${idx === 0 ? 'bg-blue-500 text-white border-blue-500 shadow-xl' : 'bg-white text-blue-900 hover:border-blue-400 hover:shadow-lg'}`}
            >
              <div className="flex items-center mb-2">
                <span className={`inline-block w-2 h-2 rounded-full mr-3 ${idx === 0 ? 'bg-white' : 'bg-blue-400'}`}></span>
                <span className="text-lg font-bold">{service.title}</span>
              </div>
              <div className={`text-base mb-4 ${idx === 0 ? 'text-white' : 'text-blue-700'}`}>{service.desc}</div>
              <Link
                to={
                  idx === 0
                    ? '/services/electrical-control-instrumentation'
                    : idx === 1
                    ? '/services/medium-high-voltage'
                    : idx === 2
                    ? '/services/structural-mechanical-piping-platework'
                    : '/services/energy-waste-management'
                }
                className="mt-auto px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 bg-white text-blue-600 hover:bg-blue-50"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);


export default OurServicesSection;
