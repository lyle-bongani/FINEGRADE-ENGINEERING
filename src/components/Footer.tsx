import React from 'react';
import { MapPin, Phone, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative w-full bg-[#000000] text-white pt-12 pb-4 px-4">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 md:grid md:grid-cols-3 md:items-start">
                {/* Logo and Socials */}
                <div className="flex flex-col items-start mb-8 md:mb-0 text-left md:place-self-start">
                    <img src="/images/logo/FINEGRADE ENGINEERING Logo white.svg" alt="Finegrade Engineering Logo" className="h-24 w-auto mb-6" />
                    <div className="flex gap-3 mt-2">
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition" aria-label="Facebook"><Facebook size={22} className="text-white" /></a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition" aria-label="LinkedIn"><Linkedin size={22} className="text-white" /></a>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="mb-8 md:mb-0 text-left flex flex-col items-start md:place-self-center">
                    <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                    <div className="w-10 h-1 bg-blue-500 mb-4 rounded" />
                    <nav className="flex flex-col gap-2 items-start">
                        <a href="/" className="hover:text-blue-400 transition font-medium">Home</a>
                        <a href="/about" className="hover:text-blue-400 transition font-medium">About Us</a>
                        <a href="/services/electrical-control-instrumentation" className="hover:text-blue-400 transition font-medium">Services</a>
                        <a href="/contact" className="hover:text-blue-400 transition font-medium">Contact</a>
                    </nav>
                </div>
                {/* Offices */}
                <div className="flex flex-col gap-4 justify-center text-left md:place-self-end">
  <h3 className="text-xl font-bold mb-2 text-white">HEADOFFICE</h3>
  <div className="w-10 h-1 bg-blue-500 mb-4 rounded" />
  <div className="flex items-center gap-2 mb-2"><MapPin size={18} className="text-blue-400" /><span className="text-white">154 Zebra Street, Nkana East, Kitwe.</span></div>
  <div className="flex items-center gap-2 mb-2"><Phone size={18} className="text-blue-400" /><span className="text-white">+260 212 222 249 | +260 212 222 250</span></div>
  <div className="flex items-center gap-2 mb-2"><Phone size={18} className="text-blue-400" /><span className="text-white">+260769104568 | +260769104865</span></div>
  <div className="flex items-center gap-2 mb-2"><span className="text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M2 4v16h20V4H2zm2 2h16v12H4V6zm2 2v2h2V8H6zm0 4v2h2v-2H6zm4-4v2h8V8h-8zm0 4v2h8v-2h-8zm0 4v2h8v-2h-8z" fill="currentColor"/></svg></span><a href="mailto:sales@fge.co.zm" className="underline text-blue-300 hover:text-blue-200">sales@fge.co.zm</a></div>
</div>
            </div>
            {/* Bottom Bar */}
            <div className="relative z-10 mt-8 border-t border-gray-700 pt-4 text-left text-gray-300 text-sm">
                © 2025 Finegrade Engineering | <a href="https://www.spemedia.co.zw/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 underline">SpeMedia</a>
            </div>
        </footer>
    );
};

export default Footer; 