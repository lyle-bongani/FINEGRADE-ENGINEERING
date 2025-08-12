import React, { useEffect, useMemo, useState } from 'react';

type GalleryItem = { srcs: string[]; alt: string };

const seedImages: GalleryItem[] = [
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-1-1536x1024.jpg',
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-1.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Group photo 1',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-2-1536x1024.jpg',
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-2.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Team session 2',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-3-1536x1024.jpg',
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-3.jpg',
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-3-1024x683.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Presentation 3',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-4-1536x1024.jpg',
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-4.jpg',
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-4-1024x683.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Engagement 4',
  },
  {
    srcs: [
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-5.jpg',
      'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-5-1024x683.jpg',
    ],
    alt: 'Breast Cancer Awareness Workshop 2024 – Session 5',
  },
];

const ImageWithFallback: React.FC<{ item: GalleryItem }> = ({ item }) => {
  const [idx, setIdx] = useState(0);
  const src = item.srcs[Math.min(idx, item.srcs.length - 1)];
  return (
    <img
      src={src}
      alt={item.alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      onError={() => setIdx(i => (i < item.srcs.length - 1 ? i + 1 : i))}
    />
  );
};

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>(seedImages);

  const makeVariants = useMemo(() => (n: number) => {
    const base = `https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-${n}`;
    return [
      `${base}-1536x1024.jpg`,
      `${base}-1024x683.jpg`,
      `${base}.jpg`,
    ];
  }, []);

  useEffect(() => {
    let mounted = true;

    const hasAlt = (alt: string) => items.some(i => i.alt === alt);

    const loadFirstValid = (variants: string[]) =>
      new Promise<string | null>((resolve) => {
        let idx = 0;
        const tryNext = () => {
          if (idx >= variants.length) return resolve(null);
          const test = new Image();
          test.onload = () => resolve(variants[idx]);
          test.onerror = () => { idx += 1; tryNext(); };
          test.referrerPolicy = 'no-referrer-when-downgrade';
          test.src = variants[idx];
        };
        tryNext();
      });

    const run = async () => {
      // Probe images 1..12, skip ones we already seeded
      for (let n = 1; n <= 12; n += 1) {
        const alt = `Breast Cancer Awareness Workshop 2024 – Photo ${n}`;
        if (hasAlt(alt)) continue;
        const variants = makeVariants(n);
        const ok = await loadFirstValid(variants);
        if (!mounted || !ok) continue;
        setItems(prev => {
          // de-dupe by src
          const exists = prev.some(p => p.srcs.includes(ok));
          if (exists) return prev;
          return [...prev, { srcs: variants, alt }];
        });
      }
    };

    run();
    return () => { mounted = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-blue-50 border-b border-blue-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500">Gallery</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">A look at our people, projects, and facilities.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((img) => (
              <a
                key={img.srcs[0]}
                href={img.srcs[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-blue-100 bg-white"
                aria-label={img.alt}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ImageWithFallback item={img} />
                </div>
              </a>
            ))}
          </div>
          {items.length === 0 && (
            <p className="text-center text-gray-700">No images yet. Please provide image URLs to display here.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;