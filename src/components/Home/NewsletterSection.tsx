import React from 'react';
import { Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const cloudSvg = (
    <svg viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-24">
        <path d="M0 80V40C80 0 160 80 240 40C320 0 400 80 480 40C560 0 640 80 720 40C760 20 800 80 800 80V0H0V80Z" fill="#fff" />
    </svg>
);

const cityscapeSvg = (
    <svg viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-24">
        <rect x="0" y="60" width="800" height="20" fill="#ffb366" />
        <rect x="40" y="40" width="30" height="40" fill="#ffb366" />
        <rect x="100" y="50" width="20" height="30" fill="#ffb366" />
        <rect x="160" y="30" width="40" height="50" fill="#ffb366" />
        <rect x="220" y="55" width="15" height="25" fill="#ffb366" />
        <rect x="260" y="45" width="30" height="35" fill="#ffb366" />
        <rect x="320" y="35" width="25" height="45" fill="#ffb366" />
        <rect x="370" y="50" width="20" height="30" fill="#ffb366" />
        <rect x="410" y="40" width="35" height="40" fill="#ffb366" />
        <rect x="470" y="55" width="15" height="25" fill="#ffb366" />
        <rect x="510" y="30" width="40" height="50" fill="#ffb366" />
        <rect x="570" y="50" width="20" height="30" fill="#ffb366" />
        <rect x="630" y="45" width="30" height="35" fill="#ffb366" />
        <rect x="690" y="35" width="25" height="45" fill="#ffb366" />
        <rect x="740" y="50" width="20" height="30" fill="#ffb366" />
    </svg>
);

const NewsletterSection: React.FC = () => {
    return (
        <section className="w-full py-24 bg-orange-500 flex justify-center items-center">
            <div className="relative w-full max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-orange-100 flex flex-col items-center">
                {/* Cloud Illustration */}
                <div className="w-full bg-orange-500">{cloudSvg}</div>
                <div className="flex flex-col items-center px-6 pb-12 pt-4 w-full">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 mb-2 mt-4 text-center">Subscribe to our Newsletter</h2>
                    <form className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mb-6 mt-4">
                        <input
                            type="email"
                            placeholder="email address"
                            className="w-full sm:w-auto flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg shadow-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition text-lg shadow-md"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                    <div className="text-orange-600 font-semibold mb-2">Follow Us:</div>
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="hover:text-orange-500 text-orange-400"><Facebook size={24} /></a>
                        <a href="#" className="hover:text-orange-500 text-orange-400"><Twitter size={24} /></a>
                        <a href="#" className="hover:text-orange-500 text-orange-400"><Linkedin size={24} /></a>
                        <a href="#" className="hover:text-orange-500 text-orange-400"><Instagram size={24} /></a>
                    </div>
                </div>
                {/* Cityscape Illustration */}
                <div className="w-full absolute left-0 bottom-0">{cityscapeSvg}</div>
            </div>
        </section>
    );
};

export default NewsletterSection; 