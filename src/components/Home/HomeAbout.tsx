import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout: React.FC = () => {
    return (
        <section className="w-full flex justify-start py-20 bg-transparent relative">
            {/* Orange shape80 at top right */}
            <img
                src="/images/pics/shape80.png"
                alt="Decorative Shape"
                className="absolute top-0 right-0 w-[30rem] h-auto z-10"
                style={{ filter: 'invert(38%) sepia(99%) saturate(7492%) hue-rotate(190deg) brightness(104%) contrast(105%)', maxWidth: '90vw', transform: 'rotate(180deg) scaleX(-1)' }}
            />
            {/* Large faint quote mark as background accent */}
            <span className="absolute left-0 top-0 text-[16rem] font-extrabold text-blue-100 z-0 select-none pointer-events-none leading-none">"</span>
            <div className="max-w-3xl w-full relative z-20 pl-32 pr-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 mt-2 text-left">About Finegrade Safety & Equipment</h2>
                <div className="text-blue-400 text-lg font-semibold mb-6 text-left">Safety is not just a policy—it's our culture.</div>
                <p className="text-gray-800 text-xl leading-relaxed mb-4 text-left">
                    Finegrade Safety & Equipment was founded on the principle that safety comes first—value life, value safety. Our team of industry experts, with years of experience in PPE, is dedicated to providing a safe work environment for everyone.
                </p>
                <p className="text-gray-800 text-xl leading-relaxed text-left">
                    We serve a diverse range of customers, from mining, construction, and manufacturing to healthcare and beyond. As a leading provider of high-quality personal protective equipment (PPE), we aim to deliver innovative solutions that safeguard workers' health and well-being.
                </p>
                <div className="text-left">
                    <Link to="/about" className="mt-8 px-5 py-2 border-2 border-blue-500 text-blue-500 font-bold rounded-full shadow hover:bg-blue-500 hover:text-white transition-colors text-base inline-block bg-transparent">Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;

export { }; 