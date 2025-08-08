import React from 'react';
import { Eye, Target } from 'lucide-react';

const MissionVisionSection: React.FC = () => (
  <section className="w-full py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 mt-2 text-center">Mission & Vision</h2>
      <div className="text-blue-400 text-lg font-semibold mb-6 text-center">Guiding Our Path Forward</div>
      <div className="flex flex-col md:flex-row gap-8 mt-8 w-full">
        {/* Vision Card */}
        <div className="flex-1 min-w-[380px] max-w-2xl bg-white rounded-3xl shadow-2xl border-t-8 border-blue-400 p-16 flex flex-col items-center transition-transform hover:scale-105 duration-200">
          <div className="bg-blue-100 p-4 rounded-full shadow-lg mb-4 flex items-center justify-center">
            <Eye className="text-blue-500" size={36} />
          </div>
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Vision</h3>
          <p className="text-lg text-gray-700 text-center">To be the preferred partner in providing engineering solutions.</p>
        </div>
        {/* Mission Card */}
        <div className="flex-1 min-w-[380px] max-w-2xl bg-white rounded-3xl shadow-2xl border-t-8 border-blue-400 p-16 flex flex-col items-center transition-transform hover:scale-105 duration-200">
          <div className="bg-blue-100 p-4 rounded-full shadow-lg mb-4 flex items-center justify-center">
            <Target className="text-blue-500" size={36} />
          </div>
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Mission</h3>
          <p className="text-lg text-gray-700 text-center">To be customer centric and delivering comprehensive project solutions.</p>
        </div>
      </div>
    </div>
  </section>
);


export default MissionVisionSection;
