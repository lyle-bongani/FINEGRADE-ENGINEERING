import React from 'react';

const CustomerSupplierCommunitySection: React.FC = () => (
  <section className="w-full bg-white py-0">
    <video
      className="w-full h-auto object-contain"
      style={{ maxHeight: '600px' }}
      src="/images/pics/videosection.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  </section>
);

export default CustomerSupplierCommunitySection;
