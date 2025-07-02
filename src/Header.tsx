import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Linkedin, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full"
        >
            {/* Top Bar */}
            <div className="bg-orange-500 text-white flex justify-between items-center text-sm px-8 h-10">
                <div className="flex items-center gap-2">
                    <LocationOnIcon fontSize="small" />
                    <span>161 Gleneagles Road, Southerton, Harare</span>
                </div>
                <div className="flex items-center gap-2">
                    <EmailIcon fontSize="small" />
                    <span>sales@appliedcontrols.co.zw</span>
                </div>
                <div className="flex items-center gap-4">
                    <PhoneIcon fontSize="small" />
                    <span>Sales Hotline: (+263) 242 661 304</span>
                    <a href="#" className="hover:text-orange-200 transition"><FacebookIcon fontSize="small" /></a>
                    <a href="#" className="hover:text-orange-200 transition"><Linkedin size={18} /></a>
                </div>
            </div>
            {/* Main Header */}
            <div className="bg-white flex items-center justify-between py-4 px-8 shadow-sm">
                <div className="flex items-center">
                    <img src="/images/logo/FINEGRADE ENGINEERING Logo.png" alt="FINEGRADE ENGINEERING Logo" className="h-16 w-auto" />
                </div>
                <nav className="flex items-center gap-8 ml-16">
                    <Link to="/" className="text-orange-500 font-semibold">Home</Link>
                    <Link to="/about" className="text-gray-800 hover:text-orange-500 transition">About Us</Link>
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-gray-800 hover:text-orange-500 transition font-medium focus:outline-none group-hover:text-orange-500">
                            Scope <span className="text-xs">▼</span>
                        </button>
                        <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg border-t-2 border-orange-500 rounded-b z-20 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200">
                            <Link to="/scope/electrical" className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition">Electrical Control & Instrumentation</Link>
                            <Link to="/scope/voltage" className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition">Medium & High Voltage Services</Link>
                            <Link to="/scope/structural" className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition">Structural, Mechanical, Piping & Platework</Link>
                            <Link to="/scope/energy" className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition">Energy & Waste Management</Link>
                        </div>
                    </div>
                    <Link to="/gallery" className="text-gray-800 hover:text-orange-500 transition">Gallery</Link>
                    <Link to="/blog" className="text-gray-800 hover:text-orange-500 transition">Blog</Link>
                    <Link to="/contact" className="text-gray-800 hover:text-orange-500 transition">Contact</Link>
                </nav>
                <div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-7 py-2 font-bold flex items-center gap-2 transition">
                        <MessageCircle size={20} /> FREE QUOTE
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header; 