import React from 'react';
import { Target, Binoculars, HandPlatter } from 'lucide-react';

const missionText = `To be customer centric & deliver quality personal protection equipment that create value to our customers, employees & shareholders.`;
const visionText = `To be a preferred supply chain partner for personal protective equipment in the local & regional market.`;

const values = [
    'Integrity',
    'Continuous Improvement',
    'Customer Satisfaction',
    'Quality',
    'Innovation',
];

const MissionVisionValues: React.FC = () => {
    return (
        <section className="w-full">
            {/* Mission Row */}
            <div className="w-full flex flex-col md:flex-row min-h-[260px]">
                <div className="bg-lime-600 text-white flex-1 flex flex-col justify-center p-10">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-wide">OUR MISSION</h3>
                    <p className="text-base md:text-lg font-medium leading-relaxed">{missionText}</p>
                </div>
                <div className="bg-white flex-1 flex items-center justify-center p-10 border-b md:border-b-0 md:border-l border-gray-100">
                    <Target size={90} strokeWidth={1.5} className="text-gray-400" />
                </div>
            </div>
            {/* Vision Row */}
            <div className="w-full flex flex-col md:flex-row min-h-[260px]">
                <div className="bg-white flex-1 flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-gray-100 order-2 md:order-none">
                    <Binoculars size={90} strokeWidth={1.5} className="text-gray-400" />
                </div>
                <div className="bg-[#F47C1C] text-white flex-1 flex flex-col justify-center p-10 order-1 md:order-none">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-wide">OUR VISION</h3>
                    <p className="text-base md:text-lg font-medium leading-relaxed">{visionText}</p>
                </div>
            </div>
            {/* Values Row */}
            <div className="w-full flex flex-col md:flex-row min-h-[260px]">
                <div className="bg-[#2496A8] text-white flex-1 flex flex-col justify-center p-10">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-wide text-center">OUR VALUES</h3>
                    <p className="text-lg md:text-xl font-semibold text-center max-w-2xl mx-auto">
                        Our core values are Integrity, Continuous Improvement, Customer Satisfaction, Quality, and Innovation.
                    </p>
                </div>
                <div className="bg-white flex-1 flex items-center justify-center p-10 border-t md:border-t-0 md:border-l border-gray-100">
                    <HandPlatter size={90} strokeWidth={1.5} className="text-gray-400" />
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues; 