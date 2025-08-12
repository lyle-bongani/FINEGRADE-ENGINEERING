import React, { useState } from 'react';
import GalleryModal from '../components/GalleryModal';

type GalleryItem = { srcs: string[]; alt: string };

const seedImages: GalleryItem[] = [
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-5-1536x1024.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Session 5',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-4-1536x1025.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Engagement 4',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-3.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Presentation 3',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-2-1536x1024.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Team session 2',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-1-1536x1024.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Group photo 1',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-7.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Photo 7',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-6-1536x1025.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Photo 6',
  },
];


const Gallery: React.FC = () => {
  const [items] = useState<GalleryItem[]>(seedImages);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const [modalSrcs, setModalSrcs] = useState<string[]>([]);
  const [modalAlt, setModalAlt] = useState('');

  const openModal = (item: GalleryItem) => {
    setModalSrcs(item.srcs);
    setModalAlt(item.alt);
    setModalIdx(0);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevModal = () => setModalIdx(i => (i > 0 ? i - 1 : modalSrcs.length - 1));
  const nextModal = () => setModalIdx(i => (i < modalSrcs.length - 1 ? i + 1 : 0));

  


  return (
    <div className="w-full">
  {/* Full-width Hero */}
  <section className="relative h-[340px] md:h-[420px] w-full flex items-center justify-center bg-black/60">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80" alt="Gallery Hero" className="absolute inset-0 w-full h-full object-cover object-center" />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative z-10 flex flex-col items-center justify-center w-full">
      <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg tracking-wide">Gallery Full Width</h1>
      <p className="mt-3 text-lg text-white/90 font-medium drop-shadow">Moments | Gallery</p>
    </div>
  </section>

  {/* Classic Gallery Section */}
  <section className="w-full bg-white pb-16 pt-8">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2 md:mb-0">
          <span className="border-b-2 border-gray-300 pb-1 pr-4">From Our Gallery</span>
        </h2>
        <div className="flex gap-4 text-gray-400 text-sm font-medium">
          <span className="hover:text-blue-500 cursor-pointer">All</span>
          <span>|</span>
          <span className="hover:text-blue-500 cursor-pointer">Projects</span>
          <span>|</span>
          <span className="hover:text-blue-500 cursor-pointer">People</span>
          <span>|</span>
          <span className="hover:text-blue-500 cursor-pointer">Events</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Tall/featured image (center left, spans 2 rows) */}
        {items[0] && (
          <div className="row-span-2 col-span-1 md:col-span-1 rounded-xl overflow-hidden shadow bg-white flex flex-col">
            <div className="flex-1 cursor-pointer group relative" onClick={() => openModal(items[0])}>
              <img src={items[0].srcs[0]} alt={items[0].alt} className="object-cover w-full h-full min-h-[320px] group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-base drop-shadow">{items[0].alt}</span>
              </div>
            </div>
          </div>
        )}
        {/* Normal images */}
        {items.slice(1, 5).map((img, idx) => (
          <div key={img.srcs[0]} className="rounded-xl overflow-hidden shadow bg-white flex flex-col">
            <div className="flex-1 cursor-pointer group relative" onClick={() => openModal(img)}>
              <img src={img.srcs[0]} alt={img.alt} className="object-cover w-full h-[180px] group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium">{img.alt}</span>
              </div>
            </div>
          </div>
        ))}
        {/* Featured vertical card (center, spans 2 rows) */}
        <div className="row-span-2 col-span-1 md:col-span-1 rounded-xl overflow-hidden shadow bg-white flex flex-col items-center justify-center p-8 border border-dashed border-gray-300">
          <div className="flex flex-col items-center">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#e5e7eb"/><path d="M12 8v4l3 3" stroke="#259ed9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div className="mt-3 text-gray-500 text-center font-medium">Original and inspiring. Modern impressions on site.</div>
          </div>
        </div>
        {/* More images (bottom row) */}
        {items.slice(5, 9).map((img, idx) => (
          <div key={img.srcs[0]} className="rounded-xl overflow-hidden shadow bg-white flex flex-col">
            <div className="flex-1 cursor-pointer group relative" onClick={() => openModal(img)}>
              <img src={img.srcs[0]} alt={img.alt} className="object-cover w-full h-[180px] group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium">{img.alt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && (
        <p className="text-center text-gray-700">No images yet. Please provide image URLs to display here.</p>
      )}
    </div>
    <GalleryModal
      open={modalOpen}
      images={modalSrcs}
      alt={modalAlt}
      index={modalIdx}
      onClose={closeModal}
      onPrev={prevModal}
      onNext={nextModal}
    />
  </section>
</div>
  );
};

export default Gallery;