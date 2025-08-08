import React from 'react';

const AboutSection: React.FC = () => (
  <section className="w-full py-20 bg-transparent relative">
    {/* Decorative shape at top right */}
    <img
      src="/images/pics/shape80.png"
      alt="Decorative Shape"
      className="absolute top-0 right-0 w-[22rem] h-auto z-10"
      style={{ filter: 'invert(38%) sepia(99%) saturate(7492%) hue-rotate(190deg) brightness(104%) contrast(105%)', maxWidth: '90vw', transform: 'rotate(180deg) scaleX(-1)' }}
    />
    {/* Large faint quote mark as background accent */}
    <span className="absolute left-0 top-0 text-[12rem] md:text-[16rem] font-extrabold text-blue-100 z-0 select-none pointer-events-none leading-none">"</span>
    <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 mt-2 text-left">About Finegrade Engineering</h2>
        <div className="text-blue-400 text-lg font-semibold mb-6 text-left">Delivering Excellence in Engineering Solutions</div>
        <p className="text-gray-800 text-xl leading-relaxed mb-4 text-left">
          Finegrade Engineering is a specialist project management construction company dedicated to delivering mechanical and electrical spares and services. We operate in the supply and installation of Structural, Mechanical, Piping, Platework, Electrical, and Instrumentation fields across the mining, steel, and commercial manufacturing industries. Our robust network of suppliers, sub-contractors, and effective project management controls ensure timely delivery for projects of all sizes, while our strong safety record reflects our commitment to a safe working environment.
        </p>
        <p className="text-gray-800 text-xl leading-relaxed text-left">
          As a prominent leader in the industry, we prioritize quality products and services that exceed customer expectations. Our extensive product range is tailored to meet the unique needs of our clients, offering reliable and innovative solutions. Through strong partnerships with leading brands, we provide a diverse selection of high-quality products and exceptional value.
        </p>
      </div>
      {/* Image Content */}
      <div className="flex-1 flex justify-center items-center w-full md:w-auto">
        <img
          src="/images/pics/safety-supplies-1.png"
          alt="Finegrade Engineering Team"
          className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
          style={{ minWidth: '240px', maxHeight: '420px' }}
        />
      </div>
    </div>
  </section>
);


export default AboutSection;
