import React from 'react';

const ElectricalControlInstrumentation: React.FC = () => {
  return (
    <main className="w-full bg-white text-gray-700">
      {/* Hero */}
      <section className="w-full bg-blue-500 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Electrical Control & Instrumentation</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-blue-100 max-w-3xl">
            Design, installation, and maintenance of advanced control and instrumentation systems.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Powering Smart Solutions</h2>
            <p className="mt-3 leading-relaxed">
              We provide comprehensive electrical and automation solutions that improve efficiency, safety, and visibility
              across your operations. From switchgear and MCCs to PLC/SCADA integration and precision instrumentation,
              our team delivers robust, scalable systems engineered for uptime and control.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-500">At a glance</h3>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>MV/LV switchgear & MCCs</li>
              <li>PLC, HMI, and SCADA</li>
              <li>Instrumentation & calibration</li>
              <li>Power quality & distribution</li>
              <li>Installations & maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Services</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-500">Low and Medium Voltage Switchgear</h3>
              <p className="mt-2">Design, installation, and maintenance of switchgear for safe and reliable power distribution.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-500">Power Distribution & Control Systems</h3>
              <p className="mt-2">MCCs, power factor correction, harmonic filtering, and distribution engineering.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-500">PLC Programming & HMI Design</h3>
              <p className="mt-2">Robust PLC code and intuitive HMIs for efficient process control and monitoring.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-500">SCADA Integration & Monitoring</h3>
              <p className="mt-2">Real-time data acquisition, monitoring, and control across sites and processes.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-500">Instrumentation & Control</h3>
              <p className="mt-2">Selection, installation, and calibration of sensors, transmitters, and analyzers.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-500">Electrical Installations & Maintenance</h3>
              <p className="mt-2">Professional wiring, cabling, lighting, and responsive maintenance services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-14 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Benefits</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Improved Efficiency</h3>
              <p className="mt-2">Optimized power utilization, reduced downtime, and increased productivity.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Enhanced Safety</h3>
              <p className="mt-2">Safe and reliable operation of electrical systems, minimizing hazards.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Better Control</h3>
              <p className="mt-2">Real-time monitoring and control for faster, better decision-making.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Reduced Costs</h3>
              <p className="mt-2">Energy savings, lower maintenance, and longer equipment lifespan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-blue-500 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Ready to modernize your control & instrumentation?</h3>
              <p className="text-blue-100 mt-1">Talk to our engineers about your plant or project.</p>
            </div>
            <a href="/contact" className="mt-4 md:mt-0 inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg border-2 border-white">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ElectricalControlInstrumentation;
