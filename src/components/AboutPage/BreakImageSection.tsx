import React from 'react';

const BreakImageSection: React.FC = () => (
  <section className="w-full flex justify-center items-center py-12 bg-white">
    <img
      src="/images/pics/cover section.webp"
      alt="Break Section Decorative"
      className="w-full h-64 md:h-96 max-h-96 object-cover opacity-90 drop-shadow-xl rounded-xl"
      loading="lazy"
    />
  </section>
);

export default BreakImageSection;
