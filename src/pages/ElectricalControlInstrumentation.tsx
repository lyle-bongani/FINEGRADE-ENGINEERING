import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import MemoryIcon from '@mui/icons-material/Memory';
import RouterIcon from '@mui/icons-material/Router';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldIcon from '@mui/icons-material/Shield';
import TuneIcon from '@mui/icons-material/Tune';
import SavingsIcon from '@mui/icons-material/Savings';

const ElectricalControlInstrumentation: React.FC = () => {
  return (
    <main className="w-full bg-white text-gray-700">
      {/* Hero */}
      <section className="w-full bg-blue-500 text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-[40vh] pb-12 md:pb-20 lg:pb-28">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Electrical Control & Instrumentation</h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-blue-100 max-w-3xl">
            Design, installation, and maintenance of advanced control and instrumentation systems.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="md:col-span-6 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500">Powering Smart Solutions</h2>
            <div className="mt-4 h-1 w-16 bg-blue-500 rounded" />
            <p className="mt-5 text-gray-700 leading-relaxed text-lg">
              We provide comprehensive electrical and automation solutions that improve efficiency, safety, and visibility
              across your operations. From switchgear and MCCs to PLC/SCADA integration and precision instrumentation,
              our team delivers robust, scalable systems engineered for uptime and control.
            </p>
            {/* At a glance as icon list (no cards) */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>MV/LV switchgear & MCCs</span></li>
              <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>PLC, HMI, and SCADA</span></li>
              <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Instrumentation & calibration</span></li>
              <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Power quality & distribution</span></li>
              <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 mt-0.5" fontSize="small" /><span>Installations & maintenance</span></li>
            </ul>
          </div>
          {/* Right image */}
          <div className="md:col-span-6">
            <img
              src="https://www.appliedcontrols.co.zw/wp-content/uploads/elementor/thumbs/Electrical-Automation-Solutions-Harare-r616y1qm2dtwpi0nsyd5t9w5pv82kiguycxhk91vqw.webp"
              alt="Electrical Automation Solutions Harare"
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
                <ElectricalServicesIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Low and Medium Voltage Switchgear</h3>
              <p className="mt-2 text-gray-700 text-sm">Design, installation, and maintenance of switchgear for safe and reliable power distribution.</p>

            </div>
            {/* 2 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <BoltIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Power Distribution & Control Systems</h3>
              <p className="mt-2 text-gray-700 text-sm">MCCs, power factor correction, harmonic filtering, and distribution engineering.</p>

            </div>
            {/* 3 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <MemoryIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">PLC Programming & HMI Design</h3>
              <p className="mt-2 text-gray-700 text-sm">Robust PLC code and intuitive HMIs for efficient process control and monitoring.</p>

            </div>
            {/* 4 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <RouterIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">SCADA Integration & Monitoring</h3>
              <p className="mt-2 text-gray-700 text-sm">Real-time data acquisition, monitoring, and control across sites and processes.</p>

            </div>
            {/* 5 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <PrecisionManufacturingIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Instrumentation & Control</h3>
              <p className="mt-2 text-gray-700 text-sm">Selection, installation, and calibration of sensors, transmitters, and analyzers.</p>

            </div>
            {/* 6 */}
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-10 pb-6 px-4 min-h-[220px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md w-20 h-20 flex items-center justify-center z-10">
                <BuildCircleIcon className="text-blue-500" style={{ fontSize: 48 }} />
              </div>
              <h3 className="mt-8 font-bold text-gray-900 text-lg">Electrical Installations & Maintenance</h3>
              <p className="mt-2 text-gray-700 text-sm">Professional wiring, cabling, lighting, and responsive maintenance services.</p>

            </div>
          </div>
        </div>
      </section>

      {/* Benefits (two-column, icon list, no cards) */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Left: heading + intro */}
            <div className="md:col-span-5 lg:col-span-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Benefits</h2>
              <p className="mt-4 text-white/90 leading-relaxed">
                Unlock measurable value from your electrical and automation investments with safer, smarter, and more efficient operations.
              </p>
            </div>
            {/* Right: 2x2 feature list */}
            <div className="md:col-span-7 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <SpeedIcon className="text-white" fontSize="large" />
                    <h3 className="font-semibold text-white">Improved Efficiency</h3>
                    <p className="text-white/90">Optimized power utilization, reduced downtime, and increased productivity.</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <ShieldIcon className="text-white" fontSize="large" />
                    <h3 className="font-semibold text-white">Enhanced Safety</h3>
                    <p className="text-white/90">Safe and reliable operation of electrical systems, minimizing hazards.</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <TuneIcon className="text-white" fontSize="large" />
                    <h3 className="font-semibold text-white">Better Control</h3>
                    <p className="text-white/90">Real-time monitoring and control for faster, better decision-making.</p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="rounded-2xl p-1 border-2 border-white/80">
                <div className="rounded-xl border border-white/50 p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <SavingsIcon className="text-white" fontSize="large" />
                    <h3 className="font-semibold text-white">Reduced Costs</h3>
                    <p className="text-white/90">Energy savings, lower maintenance, and longer equipment lifespan.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Ready to modernize your control & instrumentation?</h2>
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

export default ElectricalControlInstrumentation;
