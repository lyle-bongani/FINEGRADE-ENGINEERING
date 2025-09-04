import React from 'react';

const CustomerSupplierCommunitySection: React.FC = () => (
  <section className="w-full bg-white" style={{ padding: 0, margin: 0, border: 'none', outline: 'none' }}>
    <video
      className="w-full h-auto object-contain"
      style={{ 
        maxHeight: '600px', 
        display: 'block', 
        margin: 0, 
        padding: 0,
        border: 'none',
        outline: 'none',
        verticalAlign: 'top'
      }}
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
