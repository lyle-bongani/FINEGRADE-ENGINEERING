import React from 'react';

import { motion } from 'framer-motion';

const svgStyle = {
  filter: 'invert(1) brightness(2)'
};

const AboutHero: React.FC = () => (
  <section
    className="w-full relative flex flex-col items-center justify-center text-center h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden"
    style={{
      backgroundImage: 'url(/images/pics/hero.jpg)',
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
      animate={{ x: [0, 120, 60, 0], y: [0, 120, 60, 0], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.img
      src="/images/svg/noun-crane-tower-1758335.svg"
      alt="Crane Tower"
      className="absolute top-10 left-1/4 w-12 h-12 z-10 opacity-40"
      style={svgStyle}
      initial={{ x: 0, y: 0 }}
      animate={{ x: [0, -100, -60, 0], y: [0, 100, 50, 0], rotate: [0, -8, 8, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
    <div className="absolute z-10 flex flex-col items-center w-full" style={{ bottom: '30%', left: 0 }}>
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-500 mb-4 drop-shadow text-center drop-shadow-[0_2px_2px_white]">
        About Finegrade Engineering
      </h1>
      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow text-center">
        Finegrade Engineering is dedicated to delivering mechanical and electrical spares and services, specializing in project management, construction, and engineering solutions for the mining, steel, and manufacturing industries.
      </p>
    </div>
    {/* Decorative Shape */}
    <img
      src="/images/pics/shape80.png"
      alt="Decorative Shape"
      className="absolute bottom-0 right-0 w-[22rem] h-auto z-20 pointer-events-none select-none"
      style={{ maxWidth: '90vw' }}
    />
  </section>
);


export default AboutHero;
