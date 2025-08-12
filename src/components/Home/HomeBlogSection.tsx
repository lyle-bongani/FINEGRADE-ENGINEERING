import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
};

const API_BASE = 'https://www.appliedcontrols.co.zw/wp-json/wp/v2';

const HomeBlogSection: React.FC = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [mediaMap, setMediaMap] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_BASE}/posts?per_page=5&_embed`);
        if (!res.ok) throw new Error(`Failed to fetch posts (${res.status})`);
        const data: any[] = await res.json();
        const mapped: WPPost[] = data.map((p) => ({
          id: p.id,
          date: p.date,
          slug: p.slug,
          link: p.link,
          title: p.title,
          excerpt: p.excerpt,
          featured_media: p.featured_media,
        }));
        const mm: Record<number, string> = {};
        data.forEach((p: any) => {
          const media = p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0];
          if (media && media.id && media.source_url) mm[media.id] = media.source_url as string;
        });
        setPosts(mapped);
        setMediaMap(mm);
      } catch (e: any) {
        setError(e.message || 'Failed to load posts.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const getImage = (p: WPPost) => (p.featured_media ? mediaMap[p.featured_media] : undefined);

  // Build featured + others (+ one demo appended to others)
  const featured = posts[0];
  const realOthers = posts.slice(1, 4);
  const demo: WPPost | null = posts.length > 0 ? {
    id: -9999,
    date: new Date().toISOString(),
    slug: 'insight-1',
    link: '#',
    title: { rendered: 'SCADA Integration Best Practices' },
    excerpt: { rendered: 'Design patterns for reliable plant-wide telemetry and secure connectivity.' },
    featured_media: 100123,
  } : null;
  // Provide demo image via picsum if needed
  if (demo && !mediaMap[demo.featured_media]) {
    mediaMap[demo.featured_media] = 'https://picsum.photos/seed/finegrade-home-demo/800/600';
  }
  const others: WPPost[] = demo ? [...realOthers, demo] : realOthers;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight relative text-left">
              WHAT'S HAPPENING
              <span className="block w-16 h-1 bg-blue-500 mt-2 rounded"></span>
            </h2>
          </div>
          <Link to="/blog" className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition text-sm mt-4 md:mt-0 md:ml-8 text-left">See More News</Link>
        </div>
        {error && <div className="text-red-600 mb-6">{error}</div>}
        {loading ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Featured skeleton */}
            <div className="flex-1 rounded-2xl overflow-hidden relative min-h-[340px] bg-gray-200 animate-pulse" />
            {/* Others skeleton */}
            <div className="flex flex-col gap-6 w-full lg:w-[340px]">
              {[0,1,2].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                    <div className="h-3 bg-gray-200 rounded w-1/3 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Post */}
          <div className="flex-1 rounded-2xl overflow-hidden relative min-h-[340px] flex items-end shadow-lg bg-gray-900">
            {featured && getImage(featured) && (
              <img src={getImage(featured)!} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            )}
            <div className="relative z-10 p-8 w-full text-left">
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 drop-shadow-lg" style={{ textShadow: '2px 2px 8px #000' }} dangerouslySetInnerHTML={{ __html: featured?.title.rendered || '' }} />
              <p className="text-white text-sm md:text-base mb-3 drop-shadow" style={{ textShadow: '1px 1px 6px #000' }} dangerouslySetInnerHTML={{ __html: featured?.excerpt.rendered || '' }} />
              {featured && (
                <Link to={`/blog/${featured.slug}`} className="inline-block relative font-semibold text-blue-500 cursor-pointer group">
                  Read More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-200 -z-10 group-hover:bg-blue-500 transition-all"></span>
                </Link>
              )}
            </div>
          </div>
          {/* Other Posts */}
          <div className="flex flex-col gap-6 w-full lg:w-[340px]">
            {others.map(post => (
              <div key={post.id} className="flex items-center gap-4">
                {getImage(post) && (
                  <img src={getImage(post)!} alt="" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                )}
                <div className="flex-1 text-left">
                  <h4 className="text-lg font-bold text-gray-900 mb-1 leading-tight line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div className="text-gray-500 text-xs mb-2">{new Date(post.date).toLocaleDateString()}</div>
                  <Link to={`/blog/${post.slug}`} className="inline-block relative font-semibold text-blue-500 cursor-pointer group text-sm">
                    Read More
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-200 -z-10 group-hover:bg-blue-500 transition-all"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBlogSection;