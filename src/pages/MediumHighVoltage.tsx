import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import BuildIcon from '@mui/icons-material/Build';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import SecurityIcon from '@mui/icons-material/Security';
import SavingsIcon from '@mui/icons-material/Savings';
import ShieldIcon from '@mui/icons-material/Shield';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const MediumHighVoltage: React.FC = () => {
  return (
    <main className="w-full bg-white text-gray-700">
      {/* Hero */}
      <section className="w-full bg-blue-500 text-white min-h-[30vh]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-[8vh] pb-8 md:pb-12 lg:pb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Medium and High Voltage Services</h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-blue-100 max-w-3xl">
            Comprehensive solutions for medium and high voltage systems, from planning to execution.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="md:col-span-6 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500">Powering Reliable Energy</h2>
            <div className="mt-4 h-1 w-16 bg-blue-500 rounded" />
            <p className="mt-5 text-gray-700 leading-relaxed text-lg">
              We deliver expert medium and high voltage solutions for safe, efficient, and reliable power transmission and distribution. Our services cover substations, switchgear, transformers, protection, and more.
            </p>
            {/* At a glance as icon list (no cards) */}
            <ul className="mt-6 space-y-3">
  <li className="flex items-start gap-3"><BoltIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Substation Design & Construction</span></li>
  <li className="flex items-start gap-3"><ElectricalServicesIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Switchgear & Transformer Installation</span></li>
  <li className="flex items-start gap-3"><BuildIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Protection & Relaying Systems</span></li>
  <li className="flex items-start gap-3"><BuildIcon style={{ fontSize: 20 }} className="text-blue-500 mt-0.5" /><span>Transmission & Distribution Lines</span></li>
  <li className="flex items-start gap-3"><FactCheckIcon style={{ fontSize: 20 }} className="text-blue-500 mt-0.5" /><span>Maintenance & Upgrades</span></li>
</ul>
          </div>
          {/* Right image */}
          <div className="md:col-span-6">
            <img
              src="https://www.appliedcontrols.co.zw/wp-content/uploads/elementor/thumbs/Medium-High-Voltage-Solutions-Harare-byo-r616y3mag1whcpxxhz6ey9f2wmyszwobmm8gisz3eg.webp"
              alt="Medium & High Voltage Solutions Harare"
              className="w-full h-auto max-h-[700px] object-contain rounded-2xl bg-white p-2"
            />
          </div>
        </div>
      </section>

      {/* Services (floating-icon card style) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500">Services</h2>
          <div className="mt-8 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {/* 1 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              {/* Floating icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <BoltIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Substation Design & Construction</h3>
              <p className="mt-2 text-gray-700 text-sm">Design, construction, and upgrades for substations to ensure reliable power delivery.</p>
            </div>
            {/* 2 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <ElectricalServicesIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Switchgear & Transformer Installation</h3>
              <p className="mt-2 text-gray-700 text-sm">Installation, testing, and commissioning of high-voltage switchgear and transformers.</p>
            </div>
            {/* 3 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <SettingsInputComponentIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Protection & Relaying Systems</h3>
              <p className="mt-2 text-gray-700 text-sm">Design, installation, and testing of advanced protection and relaying systems.</p>
            </div>
            {/* 4 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <BuildIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Transmission & Distribution Lines</h3>
              <p className="mt-2 text-gray-700 text-sm">Installation and maintenance of overhead and underground lines.</p>
            </div>
            {/* 5 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <FactCheckIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Maintenance & Upgrades</h3>
              <p className="mt-2 text-gray-700 text-sm">Preventive and corrective maintenance for all HV/MV equipment.</p>
            </div>
            {/* 6 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <span className="text-blue-500 text-5xl">🔄</span>
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Testing & Commissioning</h3>
              <p className="mt-2 text-gray-700 text-sm">Comprehensive testing and commissioning for safe, compliant operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits (two-column, icon cards) */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Left: heading + intro */}
            <div className="md:col-span-5 lg:col-span-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Benefits</h2>
              <p className="mt-4 text-white/90 leading-relaxed">
                Unlock the full potential and safety of your power infrastructure with our expert services.
              </p>
            </div>
            {/* Right: 2x2 feature list */}
            <div className="md:col-span-7 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <BoltIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Improved Power Quality</h3>
                    <p className="text-white/90">Enhanced stability, reduced losses, and better equipment performance.</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <ShieldIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Enhanced Reliability</h3>
                    <p className="text-white/90">Minimized downtime and increased operational efficiency.</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <SecurityIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Increased Safety</h3>
                    <p className="text-white/90">Effective protection for personnel and equipment.</p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <SavingsIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Reduced Costs</h3>
                    <p className="text-white/90">Lower energy and maintenance costs, improved efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (two-column, form style) */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-lg px-6 md:px-16 py-10 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center text-left md:pr-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Ready to modernize your medium & high voltage systems?</h2>
              <p className="text-lg text-gray-700 mb-3">Talk to our engineers about your plant or project.</p>
              <p className="text-gray-500 text-base">Have questions or need assistance? Contact our friendly engineering team for a free consult.</p>
            </div>
            {/* Right: Form */}
            <div className="flex-1 max-w-md w-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Contact an Engineer</h3>
              <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email Address" className="rounded-md border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input type="text" placeholder="Your Name" className="rounded-md border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <textarea placeholder="How can we help?" rows={3} className="rounded-md border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
                <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-3 text-base shadow transition-colors">Contact Us</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MediumHighVoltage;
