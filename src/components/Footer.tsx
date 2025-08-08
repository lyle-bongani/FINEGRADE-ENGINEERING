import React from 'react';
import { MapPin, Phone, Facebook, Linkedin } from 'lucide-react';

const galleryImages = [
    '/images/pics/Breast-Cancer-Awareness-2024-6.jpg',
    '/images/pics/hero.jpg',
    '/images/pics/safety-supplies-1.png',
    '/images/pics/shape80.png',
    '/images/pics/hero.jpg',
    '/images/pics/Breast-Cancer-Awareness-2024-6.jpg',
];

const Footer: React.FC = () => {
    return (
        <footer className="relative w-full bg-[#1a1200] bg-opacity-90 text-white pt-12 pb-4 px-4">
            {/* Overlay for background image effect */}
            <div className="absolute inset-0 bg-[#1a1200] bg-opacity-80 pointer-events-none z-0" />
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                {/* Logo and Socials */}
                <div className="flex flex-col items-start md:w-1/4 mb-8 md:mb-0 text-left">
                    <img src="/images/logo/FINEGRADE ENGINEERING Logo.png" alt="Applied Controls Technology Logo" className="h-24 w-auto mb-6" />
                    <div className="flex gap-3 mt-2">
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 rounded p-2 hover:bg-blue-500 transition" aria-label="Facebook"><Facebook size={22} className="text-blue-500" /></a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 rounded p-2 hover:bg-blue-500 transition" aria-label="LinkedIn"><Linkedin size={22} className="text-blue-500" /></a>
                    </div>
                </div>
                {/* Offices */}
                <div className="flex-1 flex flex-col md:flex-row gap-8 justify-center text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Harare Office</h3>
                        <div className="w-10 h-1 bg-blue-500 mb-4 rounded" />
                        <div className="flex items-center gap-2 mb-2"><MapPin size={18} className="text-blue-400" />161 Gleneagles Road, Southerton, Harare</div>
                        <div className="flex items-center gap-2"><Phone size={18} className="text-blue-400" />+263 242 661 304</div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Bulawayo Office</h3>
                        <div className="w-10 h-1 bg-blue-500 mb-4 rounded" />
                        <div className="flex items-center gap-2 mb-2"><MapPin size={18} className="text-blue-400" />4 Sheffield Road, Belmont, Bulawayo</div>
                        <div className="flex items-center gap-2"><Phone size={18} className="text-blue-400" />+263 292 260 106</div>
                    </div>
                </div>
                {/* Gallery */}
                <div className="md:w-1/4 text-left">
                    <h3 className="text-xl font-bold mb-2">Gallery</h3>
                    <div className="w-10 h-1 bg-blue-500 mb-4 rounded" />
                    <div className="grid grid-cols-3 gap-2">
                        {galleryImages.map((img, i) => (
                            <img key={i} src={img} alt="Gallery" className="w-16 h-16 object-cover rounded" />
                        ))}
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="relative z-10 mt-8 border-t border-gray-700 pt-4 text-left text-gray-300 text-sm">
                © 2025 Applied Controls Technology | SpeMEDIA Website Design
            </div>
        </footer>
    );
};

export default Footer; 