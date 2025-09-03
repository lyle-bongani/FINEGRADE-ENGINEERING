import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout: React.FC = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-start justify-between py-10 md:py-20 bg-transparent relative">
            {/* Blue shape80 at top right, hidden on mobile */}
            <img
                src="/images/pics/shape80.png"
                alt="Decorative Shape"
                className="hidden md:block absolute top-0 right-0 w-[30rem] h-auto z-10"
                style={{ filter: 'invert(38%) sepia(99%) saturate(7492%) hue-rotate(190deg) brightness(104%) contrast(105%)', maxWidth: '90vw', transform: 'rotate(180deg) scaleX(-1)' }}
            />
            {/* Large faint quote mark as background accent, smaller on mobile */}
            <span className="absolute left-2 top-0 text-[7rem] md:text-[16rem] font-extrabold text-blue-100 z-0 select-none pointer-events-none leading-none">"</span>
            <div className="w-full md:w-1/2 max-w-3xl relative z-20 px-4 md:pl-32 md:pr-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-500 mb-2 mt-2 text-left">Finegrade Engineering</h2>
                <div className="text-blue-400 text-base sm:text-lg font-semibold mb-6 text-left">Delivering Excellence in Engineering Solutions</div>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-4 text-left">
                    Finegrade Engineering is a specialist project management construction company dedicated to delivering mechanical and electrical spares and services. We operate in the supply and installation of Structural, Mechanical, Piping, Platework, Electrical, and Instrumentation fields across the mining, steel, and commercial manufacturing industries.
                </p>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed text-left">
                    Our robust network of suppliers, sub-contractors, and effective project management controls ensure timely delivery for projects of all sizes, while our strong safety record reflects our commitment to a safe working environment.
                </p>
                <div className="text-left">
                    <Link to="/about" className="mt-6 sm:mt-8 px-5 py-2 border-2 border-blue-500 text-blue-500 font-bold rounded-full shadow hover:bg-blue-500 hover:text-white transition-colors text-base inline-block bg-transparent">Learn More</Link>
                </div>
            </div>
            {/* Right image next to text on desktop */}
            <div className="w-full md:w-1/2 px-4 md:pr-32 md:pl-8 mt-8 md:mt-0 flex items-center justify-center relative z-10">
                <img
                    src="/images/pics/aboutabout.jpg"
                    alt="About Finegrade Engineering"
                    className="w-full max-w-xl h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] rounded-2xl shadow-lg object-cover"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default HomeAbout;
export { }; 