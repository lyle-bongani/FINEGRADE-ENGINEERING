import React from 'react';
import { motion } from 'framer-motion';

const svgStyle = {
    filter: 'invert(1) brightness(2)', // makes black SVGs appear white
};

const HeroSection: React.FC = () => {
    return (
        <section
            className="w-full relative flex flex-col items-center justify-center text-center h-[85vh] md:h-[500px] lg:h-[600px] overflow-hidden"
            style={{
                backgroundImage:
                    'url(/images/pics/hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <motion.img
                src="/images/svg/noun-safety-helmet-1758336.svg"
                alt="Safety Helmet"
                className="absolute top-8 left-8 w-12 h-12 z-10 opacity-40"
                style={svgStyle}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 320, 180, 0], y: [0, 320, 180, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
                src="/images/svg/noun-crane-tower-1758335.svg"
                alt="Crane Tower"
                className="absolute top-10 left-1/4 w-12 h-12 z-10 opacity-40"
                style={svgStyle}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, -200, -120, 0], y: [0, 200, 100, 0], rotate: [0, -8, 8, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
                src="/images/svg/noun-wheelbarrow-1758343.svg"
                alt="Wheelbarrow"
                className="absolute bottom-16 left-20 w-12 h-12 z-10 opacity-40"
                style={svgStyle}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 220, 120, 0], y: [0, -220, -80, 0], rotate: [0, 12, -12, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
                src="/images/svg/noun-circular-saw-1758334.svg"
                alt="Circular Saw"
                className="absolute bottom-10 left-1/4 w-16 h-16 z-10 opacity-40"
                style={svgStyle}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, -180, -80, 0], y: [0, -220, -120, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
                src="/images/svg/noun-industry-7883620.svg"
                alt="Industry Icon 1"
                className="absolute top-1/2 left-1/4 w-16 h-16 z-10 opacity-40"
                style={svgStyle}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, -180, -100, 0], y: [0, -180, -100, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
                src="/images/svg/noun-industry-7869857.svg"
                alt="Industry Icon 2"
                className="absolute top-1/2 left-1/4 w-16 h-16 z-10 opacity-40"
                style={svgStyle}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 140, 80, 0], y: [0, -200, -100, 0], rotate: [0, -8, 8, 0] }}
                transition={{ duration: 23, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute z-10 flex flex-col items-start text-left w-full pl-8" style={{ bottom: '30%', left: 0 }}>
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-500 mb-4 drop-shadow text-left drop-shadow-[0_2px_2px_white]">
                    Expert Industrial Engineering<br />
                    Solutions Partner.
                </h1>
                <button className="mt-8 px-8 py-3 border-2 border-blue-500 text-white rounded-full font-semibold text-2xl md:text-3xl bg-transparent hover:bg-blue-500 hover:text-white transition-colors drop-shadow">
                    Our Scope
                </button>
            </div>
            {/* Shape80 PNG at bottom right (always visible) */}
            <img
                src="/images/pics/shape80.png"
                alt="Decorative Shape"
                className="absolute bottom-0 right-0 w-[30rem] h-auto z-20 pointer-events-none select-none"
                style={{ maxWidth: '90vw' }}
            />
        </section>
    );
};

export default HeroSection; 