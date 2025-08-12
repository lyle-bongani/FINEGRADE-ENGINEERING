import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  featured_media: number;
};

const API_BASE = 'https://www.appliedcontrols.co.zw/wp-json/wp/v2';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [mediaMap, setMediaMap] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAll = async () => {
      try {
        setLoading(true);
        setError(null);

        const perPage = 100; // WP max is typically 100
        const firstUrl = `${API_BASE}/posts?per_page=${perPage}&page=1&_embed`;
        const firstRes = await fetch(firstUrl);
        if (!firstRes.ok) throw new Error(`Failed to fetch posts (${firstRes.status})`);
        const totalPagesStr = firstRes.headers.get('X-WP-TotalPages');
        const totalPages = totalPagesStr ? parseInt(totalPagesStr, 10) : 1;
        const firstData: any[] = await firstRes.json();

        const allData: any[] = [...firstData];
        // Fetch remaining pages sequentially (could be parallel if needed)
        for (let page = 2; page <= totalPages; page += 1) {
          const url = `${API_BASE}/posts?per_page=${perPage}&page=${page}&_embed`;
          const res = await fetch(url);
          if (!res.ok) throw new Error(`Failed to fetch posts page ${page} (${res.status})`);
          const pageData: any[] = await res.json();
          allData.push(...pageData);
        }

        // Map posts
        const mapped: WPPost[] = allData.map((p) => ({
          id: p.id,
          date: p.date,
          slug: p.slug,
          link: p.link,
          title: p.title,
          excerpt: p.excerpt,
          featured_media: p.featured_media,
        }));
        // Use only real posts for the main layout

        // Build media map from _embedded across all pages
        const mm: Record<number, string> = {};
        allData.forEach((p: any) => {
          const media = p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0];
          if (media && media.id && media.source_url) {
            mm[media.id] = media.source_url as string;
          }
        });
        // If fewer than 10 posts, add placeholder IMAGES to media map only (used by sidebar)
        if (mapped.length < 10) {
          const need = 10 - mapped.length;
          for (let i = 0; i < need; i += 1) {
            const fmId = 100000 + i; // synthetic media id for placeholders
            mm[fmId] = `https://picsum.photos/seed/finegrade-${i}/1200/800`;
          }
        }

        setPosts(mapped);
        setMediaMap(mm);
      } catch (e: any) {
        setError(e.message || 'Failed to load blog posts.');
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  const getImage = (p: WPPost) => (p.featured_media ? mediaMap[p.featured_media] : undefined);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white border-b border-blue-100 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-500 tracking-tight">Insights & Stories</h1>
          <p className="mt-2 text-blue-700 max-w-3xl">Engineering, automation, maintenance and more — curated by FINEGRADE Engineering.</p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {loading && <p className="text-blue-700">Loading posts…</p>}
          {error && (
            <div className="text-red-600">{error}</div>
          )}
          {!loading && !error && posts.length > 0 && (
            <>
              {posts.length <= 3 ? (
                <div className="grid grid-cols-1 lg:[grid-template-columns:minmax(0,1fr)_280px] gap-10">
                  <div className="space-y-12">
                    {posts.map((p) => (
                      <article key={p.id} className="max-w-4xl">
                        {getImage(p) && (
                          <img src={getImage(p)} alt="" className="w-full aspect-[16/9] object-cover" loading="lazy" />
                        )}
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-blue-700 text-xs">
                          <span>{new Date(p.date).toLocaleDateString()}</span>
                        </div>
                        <Link to={`/blog/${p.slug}`}>
                          <h3 className="mt-2 text-xl font-bold text-blue-500" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                        </Link>
                        <div className="mt-2 text-blue-700 text-sm" dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
                        <div className="mt-4">
                          <Link to={`/blog/${p.slug}`} className="inline-block px-4 py-2 border border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700">Read more</Link>
                        </div>
                      </article>
                    ))}
                  </div>
                  <aside className="space-y-6">
                    <h4 className="text-lg font-bold text-blue-500">Recent Posts</h4>
                    <ul className="space-y-4">
                      {(() => {
                        const titles = [
                          'Smart Metering Upgrades for Industrial Plants',
                          'Medium-Voltage Switchgear Safety Checklist',
                          'Energy Audits: Cutting Operational Costs',
                          'SCADA Integration Best Practices',
                          'Arc Flash Studies: What to Know',
                          'PLC to DCS Migration Guide',
                          'Power Factor Correction Essentials',
                          'Preventive Maintenance for MCCs',
                          'Cable Routing and Tray Standards',
                          'Remote Monitoring with IIoT',
                          'Load Shedding Strategy for Facilities',
                          'Commissioning and FAT/SAT Tips',
                        ];
                        const excerpts = [
                          'How modern metering improves visibility and billing accuracy.',
                          'Practical checks to reduce risk and improve uptime.',
                          'Identify savings with structured assessments and KPIs.',
                          'Design patterns for reliable plant-wide telemetry.',
                          'Mitigating hazards with proper study and labeling.',
                          'Key steps for a smooth controls migration.',
                          'Reduce penalties and stabilize your network.',
                          'Extend asset life with a proactive plan.',
                          'Compliance-focused routes for clean installs.',
                          'From sensors to dashboards—what to consider.',
                          'Prioritize loads intelligently during outages.',
                          'Closeout quality with robust test procedures.',
                        ];
                        const remaining = Math.max(0, 10 - posts.length);
                        const placeholders: WPPost[] = Array.from({ length: remaining }, (_, i) => ({
                          id: -1 - i,
                          date: new Date(Date.now() - (i + 1) * 24 * 60 * 60 * 1000).toISOString(),
                          slug: `insight-${i + 1}`,
                          link: '#',
                          title: { rendered: titles[i % titles.length] },
                          excerpt: { rendered: excerpts[i % excerpts.length] },
                          featured_media: 100000 + i,
                        }));
                        const items: WPPost[] = [...posts, ...placeholders];
                        return items.map((p) => (
                          <li key={`recent-${p.id}`}>
                            <Link to={`/blog/${p.slug}`} className="flex items-center gap-3 group">
                              {getImage(p) && (
                                <img src={getImage(p)} alt="" className="h-14 w-20 object-cover" loading="lazy" />
                              )}
                              <div>
                                <div className="text-xs text-blue-700">{new Date(p.date).toLocaleDateString()}</div>
                                <div className="text-sm font-semibold text-blue-500 group-hover:text-blue-600" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                              </div>
                            </Link>
                          </li>
                        ));
                      })()}
                    </ul>
                  </aside>
                </div>
              ) : (
                <>
                  {/* Vogue-style top: left and right stacks, huge center feature */}
                  <div className="grid grid-cols-1 gap-8 mb-12 lg:[grid-template-columns:260px_1fr_260px]">
                    {/* Left stack */}
                    <div className="flex flex-col gap-10">
                      {posts.slice(1, 3).map((p) => (
                        <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
                          {getImage(p) && (
                            <img src={getImage(p)} alt="" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                          )}
                          <div className="mt-3">
                            <div className="text-xs tracking-widest font-semibold uppercase text-blue-600">Category</div>
                            <h3 className="mt-1 text-lg font-bold text-blue-500 group-hover:text-blue-600" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                            <div className="mt-1 text-xs uppercase tracking-widest text-blue-700">By FINEGRADE</div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Center feature */}
                    <div>
                      <Link to={`/blog/${posts[0].slug}`} className="group block">
                        {getImage(posts[0]) && (
                          <img src={getImage(posts[0])} alt="" className="w-full aspect-[3/2] object-cover" loading="lazy" />
                        )}
                        <div className="mt-3 text-center">
                          <div className="text-xs tracking-widest font-semibold uppercase text-blue-600">Featured</div>
                          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-blue-500" dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }} />
                        </div>
                      </Link>
                    </div>

                    {/* Right stack */}
                    <div className="flex flex-col gap-10">
                      {posts.slice(3, 5).map((p) => (
                        <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
                          {getImage(p) && (
                            <img src={getImage(p)} alt="" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                          )}
                          <div className="mt-3">
                            <div className="text-xs tracking-widest font-semibold uppercase text-blue-600">Category</div>
                            <h3 className="mt-1 text-lg font-bold text-blue-500 group-hover:text-blue-600" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                            <div className="mt-1 text-xs uppercase tracking-widest text-blue-700">By FINEGRADE</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* More stories grid: unique posts after rails */}
                  {posts.length > 5 && (
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(5).map((p) => (
                          <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
                            {getImage(p) && (
                              <img src={getImage(p)} alt="" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                            )}
                            <div className="mt-3">
                              <div className="text-xs tracking-widest font-semibold uppercase text-blue-600">Category</div>
                              <h4 className="mt-1 text-lg font-bold text-blue-500 group-hover:text-blue-600" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                              <div className="mt-1 text-xs uppercase tracking-widest text-blue-700">By FINEGRADE</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;