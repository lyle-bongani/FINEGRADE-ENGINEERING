import React from 'react';

const MediumHighVoltage: React.FC = () => {
  return (
    <main className="w-full bg-white text-gray-700">
      <section className="w-full bg-blue-500 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Medium and High Voltage Services</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-blue-100 max-w-3xl">
            Comprehensive solutions for medium and high voltage systems, from planning to execution.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-500">High-Voltage Expertise</h2>
            <p className="mt-3 leading-relaxed">
              Applied Controls Technology provides a comprehensive range of medium and high-voltage solutions, ensuring
              reliable and efficient power transmission and distribution. Our expertise includes:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li><strong>Substation Design and Construction:</strong> Design and construction of new substations or the upgrade and refurbishment of existing ones.</li>
              <li><strong>Power Factor Correction and Harmonics Mitigation:</strong> Implementation of solutions to improve power quality and reduce energy losses.</li>
              <li><strong>Protective Relaying and Coordination:</strong> Design, installation, and testing of protective relaying systems to ensure the safety and integrity of electrical systems.</li>
              <li><strong>Switchgear and Transformer Installation:</strong> Installation, testing, and commissioning of high-voltage switchgear and transformers.</li>
              <li><strong>Transmission and Distribution Line Installation:</strong> Installation and maintenance of overhead and underground transmission and distribution lines.</li>
              <li><strong>Circuit Breaker and Switchgear Maintenance:</strong> Preventive and corrective maintenance of circuit breakers, switchgear, and other high-voltage equipment.</li>
            </ul>
            <p className="mt-4 text-blue-500 font-semibold">Medium &amp; High Voltage Solutions Harare byo</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-500">At a Glance</h3>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Substations, switchgear, transformers</li>
              <li>Protection, coordination, testing</li>
              <li>Transmission &amp; distribution lines</li>
              <li>Power factor &amp; harmonics</li>
              <li>Preventive maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-14 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Benefits</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Improved Power Quality</h3>
              <p className="mt-2">Enhanced system stability, reduced energy losses, and improved equipment performance.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Enhanced Reliability</h3>
              <p className="mt-2">Minimized downtime, improved system availability, and increased operational efficiency.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Increased Safety</h3>
              <p className="mt-2">Enhanced safety for personnel and equipment through effective protection and maintenance.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Reduced Costs</h3>
              <p className="mt-2">Lower energy costs, reduced maintenance expenses, and improved overall system efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <a href="/contact" className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600">Contact Us</a>
        </div>
      </section>
    </main>
  );
};

export default MediumHighVoltage;
