import React from 'react';

const EnergyWasteManagement: React.FC = () => {
  return (
    <main className="w-full bg-white text-gray-700">
      <section className="w-full bg-blue-500 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Energy & Waste Management</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-blue-100 max-w-3xl">
            Innovative energy and waste management services for sustainable operations.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Sustainable Solutions</h2>
            <p className="mt-3 leading-relaxed">
              Applied Controls Technology provides a range of sustainable energy and waste management solutions, helping
              clients reduce their environmental impact and improve operational efficiency. Our expertise includes:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li><strong>Power Optimization Solutions:</strong> Implementation of energy-saving measures such as power factor correction, demand-side management, and energy audits.</li>
              <li><strong>Water Treatment Plant Reticulation:</strong> Design, installation, and maintenance of water treatment plant reticulation systems.</li>
              <li><strong>Energy Audits & Smart Metering:</strong> Conducting energy audits and implementing smart metering systems to identify and address energy inefficiencies.</li>
              <li><strong>Portable Water Solutions:</strong> Provision of portable water solutions for remote locations and construction sites.</li>
            </ul>
            <p className="mt-4 text-blue-500 font-semibold">ENERGY &amp; WASTE MANAGEMENT</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-500">At a Glance</h3>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Power optimization & audits</li>
              <li>Water treatment reticulation</li>
              <li>Smart metering & analytics</li>
              <li>Portable water solutions</li>
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
              <h3 className="font-semibold text-blue-500">Improved Efficiency</h3>
              <p className="mt-2">Optimized power utilization, reduced downtime, increased productivity.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Enhanced Safety</h3>
              <p className="mt-2">Safe and reliable operation of electrical systems, minimizing safety hazards.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Better Control</h3>
              <p className="mt-2">Real-time monitoring and control of processes, leading to improved decision-making.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Reduced Costs</h3>
              <p className="mt-2">Energy savings, minimized maintenance costs, and improved equipment lifespan.</p>
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

export default EnergyWasteManagement;
