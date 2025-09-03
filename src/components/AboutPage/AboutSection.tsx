import React from 'react';

const AboutSection: React.FC = () => (
  <section className="w-full py-20 bg-white">
    <div className="w-full mx-auto px-4 md:px-8">
      <div className="p-0 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: All text */}
          <div className="md:col-span-6 lg:col-span-6 text-left">
            <div className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2">About Us</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 leading-tight text-left">Finegrade Engineering</h2>
            <p className="text-gray-600 font-semibold mt-2 text-left">Delivering Excellence in Engineering Solutions</p>
            <div className="mt-5 h-1 w-16 bg-blue-500 rounded"></div>

            <div className="mt-8 space-y-5 text-left">
              <p className="text-gray-800 text-lg leading-relaxed text-left">
                Finegrade Engineering is a specialist project management construction company dedicated to delivering mechanical and electrical spares and services. We operate in the supply and installation of Structural, Mechanical, Piping, Platework, Electrical, and Instrumentation fields across the mining, steel, and commercial manufacturing industries. Our robust network of suppliers, sub-contractors, and effective project management controls ensure timely delivery for projects of all sizes, while our strong safety record reflects our commitment to a safe working environment.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed text-left">
                As a prominent leader in the industry, we prioritize quality products and services that exceed customer expectations. Our extensive product range is tailored to meet the unique needs of our clients, offering reliable and innovative solutions. Through strong partnerships with leading brands, we provide a diverse selection of high-quality products and exceptional value.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-start">
            <img
              src="/images/pics/aboutabout.jpg"
              alt="About Finegrade Engineering"
              className="w-full max-w-2xl h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
