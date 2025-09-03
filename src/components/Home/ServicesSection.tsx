import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Settings, BarChart2, Layers, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Low Voltage Switchgear',
        icon: Zap,
        desc: 'Reliable, efficient low voltage solutions for all industries.',
    },
    {
        title: 'Electrical Control & Instrumentation',
        icon: Settings,
        desc: 'Advanced control and instrumentation for precision and safety.',
    },
    {
        title: 'Medium & High Voltage Services',
        icon: BarChart2,
        desc: 'Expertise in medium and high voltage systems and maintenance.',
    },
    {
        title: 'Structural, Mechanical, Piping & Platework',
        icon: Layers,
        desc: 'Comprehensive SMPP solutions for complex projects.',
    },
    {
        title: 'Energy & Waste Management',
        icon: Leaf,
        desc: 'Sustainable energy and waste management services.',
    },
    {
        title: 'Quality & Safety Assurance',
        icon: ShieldCheck,
        desc: 'Uncompromising commitment to quality and safety.',
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">Services</h2>
                <p className="text-blue-500 text-base md:text-lg mb-10 text-center max-w-2xl mx-auto">
                    Industrial Solutions. Simplified. Applied Controls Technology delivers exceptional EC&amp;I and SMPP solutions, driven by quality, safety, and customer satisfaction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                className={
                                    `hover-card flex flex-col items-center justify-between rounded-xl p-8 shadow transition group ` +
                                    (idx === 2
                                        ? 'bg-blue-500 text-white scale-105 z-10'
                                        : 'bg-white text-gray-900 border border-blue-100 hover:shadow-lg')
                                }
                                whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)' }}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                                    whileHover={{ scale: 1.2, rotate: 8 }}
                                    className="mb-2"
                                >
                                    <Icon size={32} className={idx === 2 ? 'mx-auto text-white' : 'mx-auto text-blue-500 group-hover:text-blue-500 transition-colors duration-300'} />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                                <p className="text-sm mb-4 text-center opacity-80">{service.desc}</p>
                                {(() => {
                                    let to = '/contact';
                                    switch (service.title) {
                                        case 'Electrical Control & Instrumentation':
                                            to = '/services/electrical-control-instrumentation';
                                            break;
                                        case 'Medium & High Voltage Services':
                                            to = '/services/medium-high-voltage';
                                            break;
                                        case 'Structural, Mechanical, Piping & Platework':
                                            to = '/services/structural-mechanical-piping-platework';
                                            break;
                                        case 'Energy & Waste Management':
                                            to = '/services/energy-waste-management';
                                            break;
                                        default:
                                            to = '/contact';
                                    }
                                    return (
                                        <Link
                                            to={to}
                                            className={
                                                (idx === 2
                                                    ? 'text-white border-white'
                                                    : 'text-blue-500 border-blue-500') +
                                                ' font-semibold border-b-2 pb-1 hover:border-blue-700 transition'
                                            }
                                        >
                                            Learn More
                                        </Link>
                                    );
                                })()}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection; 