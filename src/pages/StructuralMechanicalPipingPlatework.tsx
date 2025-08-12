import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import FactoryIcon from '@mui/icons-material/Factory';
import SearchIcon from '@mui/icons-material/Search';
import SavingsIcon from '@mui/icons-material/Savings';
import ShieldIcon from '@mui/icons-material/Shield';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const StructuralMechanicalPipingPlatework: React.FC = () => {
  return (
    <main className="w-full bg-white text-gray-700">
      {/* Hero */}
      <section className="w-full bg-blue-500 text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-[40vh] pb-12 md:pb-20 lg:pb-28">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Structural, Mechanical, Piping & Platework Services</h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-blue-100 max-w-3xl">
            Expertise in structural, mechanical, piping, and platework projects for various industries.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="md:col-span-6 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500">Building Strong Foundations</h2>
            <div className="mt-4 h-1 w-16 bg-blue-500 rounded" />
            <p className="mt-5 text-gray-700 leading-relaxed text-lg">
              Applied Controls Technology provides a comprehensive range of structural, mechanical, piping, and platework services for the mining, steel, and commercial manufacturing industries.
            </p>
            {/* At a glance as icon list (no cards) */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3"><span className="text-blue-500 mt-0.5">🏗️</span><span>Structural Steel Services</span></li>
              <li className="flex items-start gap-3"><SettingsInputComponentIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Mechanical Installations</span></li>
              <li className="flex items-start gap-3"><BuildIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Piping Design & Engineering</span></li>
              <li className="flex items-start gap-3"><FactoryIcon style={{ fontSize: 20 }} className="text-blue-500 mt-0.5" /><span>Platework Fabrication</span></li>
              <li className="flex items-start gap-3"><SavingsIcon style={{ fontSize: 20 }} className="text-blue-500 mt-0.5" /><span>Cost Optimization</span></li>
              <li className="flex items-start gap-3"><ShieldIcon style={{ fontSize: 20 }} className="text-blue-500 mt-0.5" /><span>Safety & Compliance</span></li>
            </ul>
          </div>
          {/* Right image */}
          <div className="md:col-span-6">
            <img
              src="https://www.appliedcontrols.co.zw/wp-content/uploads/elementor/thumbs/Structural-Mechanical-Piping-Platework-Solutions-Harare-r616yb4zyq6rxln0a2ffi7irnpxqphi6bngcd0ny0o.webp"
              alt="Structural, Mechanical, Piping & Platework"
              className="w-full h-full max-h-[520px] object-cover rounded-2xl"
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
                <EngineeringIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Structural Steel Services</h3>
              <p className="mt-2 text-gray-700 text-sm">Design, engineering, fabrication, supply, and erection of structural steel components.</p>
            </div>
            {/* 2 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <SettingsInputComponentIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Mechanical Installations</h3>
              <p className="mt-2 text-gray-700 text-sm">Installation and commissioning of mechanical equipment such as pumps, compressors, and conveyors.</p>
            </div>
            {/* 3 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <BuildIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Piping Design & Engineering</h3>
              <p className="mt-2 text-gray-700 text-sm">Design, fabrication, and installation of piping systems for various applications.</p>
            </div>
            {/* 4 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <FactoryIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Plate Fabrication</h3>
              <p className="mt-2 text-gray-700 text-sm">Fabrication of tanks, vessels, and pressure vessels for various industries.</p>
            </div>
            {/* 5 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <SearchIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Inspection & Quality Control</h3>
              <p className="mt-2 text-gray-700 text-sm">Rigorous quality control procedures for the highest standards of workmanship.</p>
            </div>
            {/* 6 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <DirectionsCarIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Conveyor & Material Handling</h3>
              <p className="mt-2 text-gray-700 text-sm">Design, supply, and installation of conveyor systems and material handling equipment.</p>
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
                Unlock greater productivity, safety, and value with our structural and mechanical expertise.
              </p>
            </div>
            {/* Right: 2x2 feature list */}
            <div className="md:col-span-7 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <BoltIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Improved Efficiency</h3>
                    <p className="text-white/90">Optimized plant layout, reduced downtime, and increased productivity.</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <ShieldIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Enhanced Safety</h3>
                    <p className="text-white/90">Safe and reliable operation of mechanical systems, minimizing hazards.</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <SavingsIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Cost Savings</h3>
                    <p className="text-white/90">Reduced construction costs, improved equipment lifespan, and optimized resources.</p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <EngineeringIcon className="text-white" style={{ fontSize: 40 }} />
                    <h3 className="font-semibold text-white">Increased Productivity</h3>
                    <p className="text-white/90">Streamlined material flow and improved operational efficiency.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Ready to build with confidence?</h2>
              <p className="text-lg text-gray-700 mb-3">Talk to our engineers about your next project.</p>
              <p className="text-gray-500 text-base">Have questions or need assistance? Contact our engineering team for a free consult.</p>
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

export default StructuralMechanicalPipingPlatework;
