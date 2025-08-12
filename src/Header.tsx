import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Linkedin, MessageCircle, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileScopeOpen, setMobileScopeOpen] = useState(false);

    const menuVariants: Variants = {
        hidden: { x: '100%' },
        visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full relative z-50"
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
                    <Link to="/" className={isActive('/') ? 'text-blue-500 font-bold underline' : 'text-gray-700 hover:text-blue-500 transition'}>Home</Link>
                    <Link to="/about" className={isActive('/about') ? 'text-blue-500 font-bold underline' : 'text-gray-700 hover:text-blue-500 transition'}>About Us</Link>
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
                    <Link to="/gallery" className={isActive('/gallery') ? 'text-blue-500 font-bold underline' : 'text-gray-700 hover:text-blue-500 transition'}>Gallery</Link>
                    <Link to="/blog" className={isActive('/blog') ? 'text-blue-500 font-bold underline' : 'text-gray-700 hover:text-blue-500 transition'}>Blog</Link>
                    <Link to="/contact" className={isActive('/contact') ? 'text-blue-500 font-bold underline' : 'text-gray-700 hover:text-blue-500 transition'}>Contact</Link>
                </nav>
                {/* CTA and Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Link to="/contact" className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 lg:px-7 py-2 font-bold items-center gap-2 transition">
                        <MessageCircle size={20} /> <span className="hidden lg:inline">FREE QUOTE</span>
                    </Link>
                    {!mobileOpen && (
                        <button className="md:hidden p-2 z-50" aria-label="Toggle menu" onClick={() => setMobileOpen(true)}>
                            <Menu size={22} className="text-gray-700" />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Nav Panel */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/50 z-30"
                        />
                        <motion.div
                            key="menu"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-40 shadow-xl"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-8">
                                    <img src="/images/logo/FINEGRADE ENGINEERING Logo.png" alt="Logo" className="h-12" />
                                    <button onClick={() => setMobileOpen(false)} className="p-2">
                                        <X size={24} className="text-gray-600" />
                                    </button>
                                </div>
                                <nav className="flex flex-col gap-1 text-lg">
                                    <Link to="/" className={isActive('/') ? 'py-3 px-3 rounded-md bg-blue-500 text-white font-bold' : 'py-3 px-3 rounded-md text-gray-700 hover:bg-blue-50'} onClick={() => setMobileOpen(false)}>Home</Link>
                                    <Link to="/about" className={isActive('/about') ? 'py-3 px-3 rounded-md bg-blue-500 text-white font-bold' : 'py-3 px-3 rounded-md text-gray-700 hover:bg-blue-50'} onClick={() => setMobileOpen(false)}>About Us</Link>
                                    <div>
    <button
        className={isActive('/services') ? 'w-full py-3 px-3 rounded-md bg-blue-500 text-white font-bold text-center' : 'w-full py-3 px-3 rounded-md text-gray-700 hover:bg-blue-50 font-normal text-center'}
        style={{appearance: 'none', background: 'none', border: 'none'}} // remove button default styling
        onClick={() => setMobileScopeOpen(true)}
    >
        Scope
    </button>
    <AnimatePresence>
        {mobileScopeOpen && (
            <>
                <motion.div
                    key="scope-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/40 z-50"
                    onClick={() => setMobileScopeOpen(false)}
                />
                <motion.div
                    key="scope-modal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.22 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    <div
                        className="relative w-[90vw] max-w-xs rounded-2xl p-6 flex flex-col gap-2 shadow-2xl"
                        style={{
                            background: 'rgba(255,255,255,0.75)',
                            backdropFilter: 'blur(18px) saturate(1.5)',
                            WebkitBackdropFilter: 'blur(18px) saturate(1.5)',
                            border: '1.5px solid rgba(255,255,255,0.25)',
                        }}
                    >
                        <button
                            className="absolute top-3 right-3 p-1 rounded-full hover:bg-blue-100"
                            onClick={() => setMobileScopeOpen(false)}
                            aria-label="Close Scope menu"
                        >
                            <X size={22} className="text-gray-600" />
                        </button>
                        <div className="flex flex-col gap-1 mt-2">
                            <Link to="/services/electrical-control-instrumentation" className="py-3 px-3 rounded-lg text-base text-gray-700 font-medium hover:bg-blue-50 transition" onClick={() => { setMobileScopeOpen(false); setMobileOpen(false); }}>Electrical Control & Instrumentation</Link>
                            <Link to="/services/medium-high-voltage" className="py-3 px-3 rounded-lg text-base text-gray-700 font-medium hover:bg-blue-50 transition" onClick={() => { setMobileScopeOpen(false); setMobileOpen(false); }}>Medium & High Voltage Services</Link>
                            <Link to="/services/structural-mechanical-piping-platework" className="py-3 px-3 rounded-lg text-base text-gray-700 font-medium hover:bg-blue-50 transition" onClick={() => { setMobileScopeOpen(false); setMobileOpen(false); }}>Structural, Mechanical, Piping & Platework</Link>
                            <Link to="/services/energy-waste-management" className="py-3 px-3 rounded-lg text-base text-gray-700 font-medium hover:bg-blue-50 transition" onClick={() => { setMobileScopeOpen(false); setMobileOpen(false); }}>Energy & Waste Management</Link>
                        </div>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
</div>
                                    <Link to="/gallery" className={isActive('/gallery') ? 'py-3 px-3 rounded-md bg-blue-500 text-white font-bold' : 'py-3 px-3 rounded-md text-gray-700 hover:bg-blue-50'} onClick={() => setMobileOpen(false)}>Gallery</Link>
                                    <Link to="/blog" className={isActive('/blog') ? 'py-3 px-3 rounded-md bg-blue-500 text-white font-bold' : 'py-3 px-3 rounded-md text-gray-700 hover:bg-blue-50'} onClick={() => setMobileOpen(false)}>Blog</Link>
                                    <Link to="/contact" className={isActive('/contact') ? 'py-3 px-3 rounded-md bg-blue-500 text-white font-bold' : 'py-3 px-3 rounded-md text-gray-700 hover:bg-blue-50'} onClick={() => setMobileOpen(false)}>Contact</Link>
                                </nav>
                                <div className="mt-auto">
                                    <Link to="/contact" className="w-full inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-3 font-bold">
                                        <MessageCircle size={18} className="mr-2" /> FREE QUOTE
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header; 