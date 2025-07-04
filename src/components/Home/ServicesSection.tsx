import React from 'react';
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

const iconAnim = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        },
    },
};

const ServicesSection: React.FC = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">Services</h2>
                <p className="text-gray-500 text-base md:text-lg mb-10 text-center max-w-2xl mx-auto">
                    Industrial Solutions. Simplified. Applied Controls Technology delivers exceptional EC&amp;I and SMPP solutions, driven by quality, safety, and customer satisfaction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                className={
                                    `flex flex-col items-center justify-between rounded-xl p-8 shadow transition group ` +
                                    (idx === 2
                                        ? 'bg-orange-500 text-white scale-105 z-10'
                                        : 'bg-gray-100 text-gray-900 hover:shadow-lg')
                                }
                                whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(245, 93, 0, 0.15)' }}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                                    whileHover={{ scale: 1.2, rotate: 8 }}
                                    className="mb-2"
                                >
                                    <Icon size={32} className={idx === 2 ? 'mx-auto text-white' : 'mx-auto text-gray-500 group-hover:text-orange-500 transition-colors duration-300'} />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                                <p className="text-sm mb-4 text-center opacity-80">{service.desc}</p>
                                <a
                                    href="#"
                                    className={
                                        (idx === 2
                                            ? 'text-white border-white'
                                            : 'text-orange-500 border-orange-500') +
                                        ' font-semibold border-b-2 pb-1 hover:border-orange-700 transition'
                                    }
                                >
                                    Learn More
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection; 