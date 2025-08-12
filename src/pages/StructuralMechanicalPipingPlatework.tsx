import React from 'react';

const StructuralMechanicalPipingPlatework: React.FC = () => {
  return (
    <main className="w-full bg-white text-gray-700">
      <section className="w-full bg-blue-500 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Structural, Mechanical, Piping & Platework Services</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-blue-100 max-w-3xl">
            Expertise in structural, mechanical, piping, and platework projects for various industries.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Building Strong Foundations</h2>
            <p className="mt-3 leading-relaxed">
              Applied Controls Technology provides a comprehensive range of structural, mechanical, piping, and platework
              services for the mining, steel, and commercial manufacturing industries. Our expertise includes:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li><strong>Structural Steel Services:</strong> Design, engineering, fabrication, supply, and erection of structural steel components.</li>
              <li><strong>Mechanical Installations:</strong> Installation and commissioning of mechanical equipment such as pumps, compressors, and conveyors.</li>
              <li><strong>Piping Design and Engineering:</strong> Design, fabrication, and installation of piping systems for various applications.</li>
              <li><strong>Plate Fabrication:</strong> Fabrication of various platework components, including tanks, vessels, and pressure vessels.</li>
              <li><strong>Inspection and Quality Control:</strong> Rigorous quality control procedures to ensure the highest standards of workmanship.</li>
              <li><strong>Conveyor Systems and Material Handling Equipment:</strong> Design, supply, and installation of conveyor systems and other material handling equipment.</li>
            </ul>
            <p className="mt-4 text-blue-500 font-semibold">Structural, Mechanical, Piping &amp; Platework Solutions Harare</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-500">At a Glance</h3>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Structural steel & platework</li>
              <li>Piping, fabrication & install</li>
              <li>Mechanical installs & alignment</li>
              <li>QA/QC and NDT coordination</li>
              <li>Field maintenance & repairs</li>
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
              <p className="mt-2">Optimized plant layout, reduced downtime, and increased productivity.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Enhanced Safety</h3>
              <p className="mt-2">Safe and reliable operation of mechanical systems, minimizing safety hazards.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Cost Savings</h3>
              <p className="mt-2">Reduced construction costs, improved equipment lifespan, and optimized resource utilization.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-500">Increased Productivity</h3>
              <p className="mt-2">Streamlined material flow, reduced labor costs, and improved overall operational efficiency.</p>
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

export default StructuralMechanicalPipingPlatework;
