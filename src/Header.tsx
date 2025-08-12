import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Linkedin, MessageCircle, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileScopeOpen, setMobileScopeOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full"
        >
            {/* Top Bar */}
            <div className="bg-blue-500 text-white flex flex-wrap justify-between items-center text-sm px-4 md:px-8 h-auto md:h-10 py-2 md:py-0">
                <div className="flex items-center gap-2 w-full md:w-auto mb-2 md:mb-0">
                    <LocationOnIcon fontSize="small" />
                    <span>161 Gleneagles Road, Southerton, Harare</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <EmailIcon fontSize="small" />
                    <span>sales@appliedcontrols.co.zw</span>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <PhoneIcon fontSize="small" />
                    <span>Sales Hotline: (+263) 242 661 304</span>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition" aria-label="Facebook"><FacebookIcon fontSize="small" /></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
                </div>
            </div>
            {/* Main Header */}
            <div className="bg-white flex items-center justify-between py-3 px-4 md:py-4 md:px-8 shadow-sm">
                <div className="flex items-center">
                    <img src="/images/logo/FINEGRADE ENGINEERING Logo.png" alt="FINEGRADE ENGINEERING Logo" className="h-14 md:h-16 w-auto" />
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 ml-8 lg:ml-16">
                    <Link to="/" className="text-blue-500 font-semibold">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">About Us</Link>
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition font-medium focus:outline-none group-hover:text-blue-500" aria-haspopup="true" aria-expanded="false">
                            Scope <span className="text-xs">▼</span>
                        </button>
                        <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg border-t-2 border-blue-500 rounded-b z-20 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200">
                            <Link to="/services/electrical-control-instrumentation" className="block px-6 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition">Electrical Control & Instrumentation</Link>
                            <Link to="/services/medium-high-voltage" className="block px-6 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition">Medium & High Voltage Services</Link>
                            <Link to="/services/structural-mechanical-piping-platework" className="block px-6 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition">Structural, Mechanical, Piping & Platework</Link>
                            <Link to="/services/energy-waste-management" className="block px-6 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition">Energy & Waste Management</Link>
                        </div>
                    </div>
                    <Link to="/gallery" className="text-gray-700 hover:text-blue-500 transition">Gallery</Link>
                    <Link to="/blog" className="text-gray-700 hover:text-blue-500 transition">Blog</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</Link>
                </nav>
                {/* CTA and Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 lg:px-7 py-2 font-bold items-center gap-2 transition">
                        <MessageCircle size={20} /> <span className="hidden lg:inline">FREE QUOTE</span>
                    </button>
                    <button className="md:hidden p-2 rounded-md border border-blue-100" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}>
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Panel */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-blue-100 px-4 py-4 shadow-sm">
                    <nav className="flex flex-col gap-2">
                        <Link to="/" className="py-2 text-blue-500 font-semibold" onClick={() => setMobileOpen(false)}>Home</Link>
                        <Link to="/about" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>About Us</Link>
                        <div>
                            <button
                                className="w-full flex items-center justify-between py-2 text-gray-700"
                                onClick={() => setMobileScopeOpen(v => !v)}
                                aria-expanded={mobileScopeOpen}
                                aria-controls="mobile-scope-menu"
                            >
                                <span>Scope</span>
                                <span className="text-xs">{mobileScopeOpen ? '▲' : '▼'}</span>
                            </button>
                            {mobileScopeOpen && (
                                <div id="mobile-scope-menu" className="ml-3 border-l border-blue-100 pl-3 flex flex-col">
                                    <Link to="/services/electrical-control-instrumentation" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Electrical Control & Instrumentation</Link>
                                    <Link to="/services/medium-high-voltage" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Medium & High Voltage Services</Link>
                                    <Link to="/services/structural-mechanical-piping-platework" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Structural, Mechanical, Piping & Platework</Link>
                                    <Link to="/services/energy-waste-management" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Energy & Waste Management</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/gallery" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Gallery</Link>
                        <Link to="/blog" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Blog</Link>
                        <Link to="/contact" className="py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Contact</Link>
                        <Link to="/contact" className="mt-2 inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 font-bold">
                            <MessageCircle size={18} className="mr-2" /> FREE QUOTE
                        </Link>
                    </nav>
                </div>
            )}
        </motion.header>
    );
};

export default Header; 