import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const missionText = `To be customer centric & deliver quality personal protection equipment that create value to our customers, employees & shareholders.`;
const visionText = `To be a preferred supply chain partner for personal protective equipment in the local & regional market.`;

const MissionVisionValues: React.FC = () => {
    return (
        <section className="w-full bg-white min-h-[420px] md:min-h-[520px]">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full h-full">
                    {/* Mission - Gray column */}
                    <div className="bg-gray-600 text-white px-8 py-14 flex flex-col items-center justify-center text-center h-full min-h-[420px] md:min-h-[520px]">
                        <Target className="text-white mb-5" size={96} />
                        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 tracking-wide">MISSION</h3>
                        <p className="text-white/95 leading-relaxed text-base md:text-lg max-w-md">{missionText}</p>
                    </div>

                    {/* Vision - White column */}
                    <div className="bg-white text-gray-800 px-8 py-14 flex flex-col items-center justify-center text-center h-full min-h-[420px] md:min-h-[520px]">
                        <Eye className="text-blue-500 mb-5" size={96} />
                        <h3 className="text-xl md:text-2xl font-extrabold text-blue-500 mb-3 tracking-wide">VISION</h3>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-md">{visionText}</p>
                    </div>

                    {/* Values - Blue column */}
                    <div className="bg-blue-500 text-white px-8 py-14 flex flex-col items-center justify-center text-center h-full min-h-[420px] md:min-h-[520px]">
                        <Award className="text-white mb-5" size={96} />
                        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 tracking-wide">VALUES</h3>
                        <p className="text-white/95 leading-relaxed text-base md:text-lg max-w-md">Our core values are Integrity, Continuous Improvement, Customer Satisfaction, Quality, and Innovation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;