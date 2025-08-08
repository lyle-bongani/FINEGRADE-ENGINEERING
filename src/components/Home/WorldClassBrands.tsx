import React from 'react';

const WorldClassBrands: React.FC = () => {
    return (
        <section className="w-full pt-24 pb-16 bg-white">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 mt-2 text-left pl-4 md:pl-12">World-Class Brands</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-400 font-medium text-left pt-6 pl-4 md:pl-12">Bringing You the Best from Global Leaders</p>
            <div className="flex justify-center">
                <img src="/images/pics/Applied-Control-Map-Landscape-1536x1004 (1).webp" alt="World-Class Brands Map" className="max-w-full h-auto" />
            </div>
        </section>
    );
};

export default WorldClassBrands; 