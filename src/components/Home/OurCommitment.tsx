import React, { useRef, useEffect, useState } from 'react';

const OurCommitment: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const [imgHeight, setImgHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        function updateHeight() {
            if (window.innerWidth >= 768 && textRef.current) {
                setImgHeight(textRef.current.offsetHeight);
            } else {
                setImgHeight(undefined);
            }
        }
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
                {/* Text Content */}
                <div className="flex-1" ref={textRef}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 mt-2 text-left">Our Commitment</h2>
                    <p className="text-lg md:text-xl mb-6 text-gray-400 font-medium text-left">Building Strong Partnerships for Lasting Success.</p>
                    <p className="text-lg text-gray-800 mb-6 text-left">
                        At Applied Controls Technology, we are committed to building strong, long-term partnerships with our clients based on trust, integrity, and a shared commitment to success.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base md:text-lg text-left">
                        <li><span className="font-bold text-blue-500">Quality Assurance:</span> We are committed to delivering the highest quality products and services that meet or exceed industry standards.</li>
                        <li><span className="font-bold text-blue-500">Safety First:</span> Safety is paramount. We prioritize the safety of our employees, subcontractors, and clients in all our operations.</li>
                        <li><span className="font-bold text-blue-500">Environmental Responsibility:</span> We are committed to minimizing our environmental impact and promoting sustainable practices.</li>
                        <li><span className="font-bold text-blue-500">Continuous Improvement:</span> We strive for continuous improvement in all aspects of our business, from project execution to customer service.</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="flex-1 flex justify-center items-stretch">
                    <img
                        src="/images/pics/Breast-Cancer-Awareness-2024-6.jpg"
                        alt="Our Commitment"
                        className="rounded-xl shadow-lg max-w-full w-[520px] object-cover"
                        style={imgHeight ? { height: imgHeight } : { minHeight: 320 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default OurCommitment; 