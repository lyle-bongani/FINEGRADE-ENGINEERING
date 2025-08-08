import React, { useState } from 'react';
// For a simple carousel without external dependencies, we'll use scroll snapping

const projects = [
  {
    customer: 'National Foods Maize',
    name: 'MV Panel Extension & Upgrades',
    year: '2020',
    desc: 'MV panel extension, cable laying, and new RMU installation.'
  },
  {
    customer: 'National Foods Maize',
    name: '2 x 560KVA Generator',
    year: '2022',
    desc: 'Supply, installation & commissioning of generators.'
  },
  {
    customer: 'Murowa Diamonds',
    name: 'Powerline & Substation',
    year: '2021-2022',
    desc: '65km overhead powerline and 30MVA substation.'
  },
  {
    customer: 'National Foods Maize',
    name: '575KVA Generator Synchronization',
    year: '2021-2022',
    desc: 'Synchronization of 2 x 575KVA generators.'
  },
  {
    customer: 'Dairibord Chipinge',
    name: 'Ice Plant Upgrade',
    year: '2022',
    desc: 'Refrigeration/ice plant, piping, MCC & controls.'
  },
  {
    customer: 'Dairibord Zimbabwe',
    name: '1ML Water Tank',
    year: '2023-2024',
    desc: 'Erection and installation of 1ML water tanks.'
  },
  {
    customer: 'Dairibord Zimbabwe',
    name: '1MVA Generator for Chipinge',
    year: '2023',
    desc: 'Supply, installation & commissioning.'
  },
  {
    customer: 'Blanket Mine',
    name: 'TSF Pump Station MCCs',
    year: '2023-2024',
    desc: 'MCCs, cable racks, field equipment, and radio.'
  },
  // Pending
  {
    customer: 'Valley Visions',
    name: 'Meat Processing Plant & Abattoir',
    year: '2022-2025',
    desc: 'Construction of plant and abattoir.'
  },
  {
    customer: 'Valley Visions',
    name: '3000SQM Factory Shell',
    year: '2024-2025',
    desc: 'Construction of factory shell.'
  },
  {
    customer: 'Valley Visions',
    name: '375KVA Generator',
    year: '2024',
    desc: 'Supply, installation & commissioning.'
  },
];



const OurWorkSection: React.FC = () => {
  const [centerIdx, setCenterIdx] = useState(1);
  const total = projects.length;

  // Get indices for prev, center, next (looping)
  const getDisplayIndices = () => {
    const prev = (centerIdx - 1 + total) % total;
    const next = (centerIdx + 1) % total;
    return [prev, centerIdx, next];
  };
  const [prev, center, next] = getDisplayIndices();

  // Card click handler
  const handleCardClick = (idx: number) => {
    setCenterIdx(idx);
  };

  return (
    <section className="w-screen max-w-none py-20 bg-white flex flex-col items-center">
      <div className="w-full max-w-7xl rounded-3xl shadow-2xl bg-white py-16 px-4 md:px-16 flex flex-col items-center relative overflow-visible">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 text-center">Our Work</h2>
        <div className="text-blue-400 text-lg font-medium mb-12 text-center">A Selection of Signature Projects</div>
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 min-h-[480px]">
            {/* Left Card */}
            <div
              className="hidden md:flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 w-80 h-[480px] z-10 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleCardClick(prev)}
              style={{ opacity: 0.8 }}
            >
              <div className="text-4xl font-extrabold text-blue-300 mb-2">{projects[prev].year}</div>
              <div className="text-lg font-bold text-blue-700 mb-1 text-center">{projects[prev].name}</div>
              <div className="text-blue-400 text-base mb-2 text-center">{projects[prev].customer}</div>
              <div className="text-gray-500 text-sm mb-4 text-center">{projects[prev].desc}</div>
              <div className="w-full h-28 bg-blue-50 rounded-xl flex items-center justify-center overflow-hidden">
                <span className="text-blue-200 text-2xl font-bold">IMG</span>
              </div>
            </div>
            {/* Center Card */}
            <div
              className="flex flex-col items-center rounded-3xl shadow-2xl p-10 w-96 h-[480px] z-20 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 text-white scale-110 md:-mx-8 relative cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => {}}
              style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.18)' }}
            >
              <div className="text-4xl font-extrabold mb-2">{projects[center].year}</div>
              <div className="text-lg font-bold mb-1 text-center">{projects[center].name}</div>
              <div className="text-blue-100 text-base mb-2 text-center">{projects[center].customer}</div>
              <div className="text-blue-50 text-sm mb-4 text-center">{projects[center].desc}</div>
              <div className="w-full h-32 bg-blue-300/30 rounded-xl flex items-center justify-center overflow-hidden mt-2">
                <span className="text-blue-100 text-2xl font-bold">IMG</span>
              </div>
            </div>
            {/* Right Card */}
            <div
              className="hidden md:flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 w-80 h-[480px] z-10 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleCardClick(next)}
              style={{ opacity: 0.8 }}
            >
              <div className="text-4xl font-extrabold text-blue-300 mb-2">{projects[next].year}</div>
              <div className="text-lg font-bold text-blue-700 mb-1 text-center">{projects[next].name}</div>
              <div className="text-blue-400 text-base mb-2 text-center">{projects[next].customer}</div>
              <div className="text-gray-500 text-sm mb-4 text-center">{projects[next].desc}</div>
              <div className="w-full h-28 bg-blue-50 rounded-xl flex items-center justify-center overflow-hidden">
                <span className="text-blue-200 text-2xl font-bold">IMG</span>
              </div>
            </div>
          </div>
          {/* Mobile stacked cards */}
          <div className="flex flex-col gap-8 w-full md:hidden mt-8">
            {[prev, center, next].map((i, idx) => (
              <div
                key={i}
                className={`rounded-2xl shadow-xl p-8 w-full ${idx===1 ? 'bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 text-white' : 'bg-white text-blue-900'} cursor-pointer`}
                onClick={() => handleCardClick(i)}
              >
                <div className={`text-3xl font-extrabold mb-2 ${idx===1 ? 'text-white' : 'text-blue-400'}`}>{projects[i].year}</div>
                <div className="text-lg font-bold mb-1 text-center">{projects[i].name}</div>
                <div className={`text-base mb-2 text-center ${idx===1 ? 'text-blue-100' : 'text-blue-400'}`}>{projects[i].customer}</div>
                <div className={`text-sm mb-4 text-center ${idx===1 ? 'text-blue-50' : 'text-gray-500'}`}>{projects[i].desc}</div>
                <div className={`w-full h-28 rounded-xl flex items-center justify-center overflow-hidden ${idx===1 ? 'bg-blue-300/30' : 'bg-blue-50'}`}>
                  <span className={`text-2xl font-bold ${idx===1 ? 'text-blue-100' : 'text-blue-200'}`}>IMG</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWorkSection;
