import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const cloudSvg = (
    <svg viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-24">
        <path d="M0 80V40C80 0 160 80 240 40C320 0 400 80 480 40C560 0 640 80 720 40C760 20 800 80 800 80V0H0V80Z" fill="#fff" />
    </svg>
);

const cityscapeSvg = (
    <svg viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-24">
        <rect x="0" y="60" width="800" height="20" fill="#60a5fa" />
        <rect x="40" y="40" width="30" height="40" fill="#60a5fa" />
        <rect x="100" y="50" width="20" height="30" fill="#60a5fa" />
        <rect x="160" y="30" width="40" height="50" fill="#60a5fa" />
        <rect x="220" y="55" width="15" height="25" fill="#60a5fa" />
        <rect x="260" y="45" width="30" height="35" fill="#60a5fa" />
        <rect x="320" y="35" width="25" height="45" fill="#60a5fa" />
        <rect x="370" y="50" width="20" height="30" fill="#60a5fa" />
        <rect x="410" y="40" width="35" height="40" fill="#60a5fa" />
        <rect x="470" y="55" width="15" height="25" fill="#60a5fa" />
        <rect x="510" y="30" width="40" height="50" fill="#60a5fa" />
        <rect x="570" y="50" width="20" height="30" fill="#60a5fa" />
        <rect x="630" y="45" width="30" height="35" fill="#60a5fa" />
        <rect x="690" y="35" width="25" height="45" fill="#60a5fa" />
        <rect x="740" y="50" width="20" height="30" fill="#60a5fa" />
    </svg>
);

const NewsletterSection: React.FC = () => {
    return (
        <section className="w-full py-24 bg-blue-500 flex justify-center items-center">
            <div className="relative w-full max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-blue-100 flex flex-col items-center">
                {/* Cloud Illustration */}
                <div className="w-full bg-blue-500">{cloudSvg}</div>
                <div className="flex flex-col items-center px-6 pb-12 pt-4 w-full">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-2 mt-4 text-center">Subscribe to our Newsletter</h2>
                    <form className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mb-6 mt-4">
                        <input
                            type="email"
                            placeholder="email address"
                            className="w-full sm:w-auto flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg shadow-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-orange-600 transition text-lg shadow-md"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                    <div className="text-blue-600 font-semibold mb-2">Follow Us:</div>
                    <div className="flex gap-4 mb-4">
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>
                {/* Cityscape Illustration */}
                <div className="w-full absolute left-0 bottom-0">{cityscapeSvg}</div>
            </div>
        </section>
    );
};

export default NewsletterSection; 