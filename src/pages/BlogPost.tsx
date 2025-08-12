import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
};

const API_BASE = 'https://www.appliedcontrols.co.zw/wp-json/wp/v2';

type Meta = {
  author?: string;
  categories?: { id: number; name: string; slug: string }[];
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WPPost | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<Meta>({});
  const [morePosts, setMorePosts] = useState<WPPost[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        setError(null);
        // Local placeholder content for sidebar items like insight-1, insight-2, ...
        const m = slug.match(/^insight-(\d+)$/);
        if (m) {
          const idx = parseInt(m[1], 10) - 1;
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
          const bodies = [
            '<p>Modern smart metering unlocks granular consumption visibility, enabling accurate billing, demand profiling, and predictive maintenance. In this guide, we outline a phased upgrade path, data governance, and integration pointers for industrial facilities.</p><h3>Benefits</h3><ul><li>Granular load analytics</li><li>Automated anomaly detection</li><li>Improved cost allocation</li></ul><h3>Implementation Steps</h3><ol><li>Meter audit and gap analysis</li><li>Comms selection (Modbus/TCP, LoRaWAN, NB-IoT)</li><li>Gateway and historian integration</li><li>Dashboards and alerts</li></ol>',
            '<p>Switchgear safety is foundational to uptime and personnel protection. This checklist highlights isolation, labeling, IR scanning cadence, interlocks, and lockout/tagout best practices tailored for MV systems.</p><h3>Checklist</h3><ul><li>Thermal scans quarterly</li><li>Torque checks annually</li><li>Interlock verification</li><li>Arc-resistant enclosure review</li></ul>',
            '<p>Energy audits uncover hidden losses and CAPEX-light savings. We cover baseline creation, interval data analysis, KPI tracking, and ROI modeling with practical case studies.</p><h3>Focus Areas</h3><ul><li>Compressed air leaks</li><li>Motor efficiency</li><li>Power factor penalties</li><li>HVAC setpoint drift</li></ul>',
            '<p>SCADA integration demands robust network design, namespace discipline, and secure data flows. Learn naming standards, polling strategies, store-and-forward, and redundancy patterns.</p><h3>Best Practices</h3><ul><li>OPC UA information models</li><li>Time sync (NTP/PTP)</li><li>DMZ and firewall zoning</li><li>HA historians</li></ul>',
            '<p>Arc flash studies reduce risk through accurate modeling, labeling, and PPE policy. We outline IEEE 1584 workflow, protective device coordination, and mitigation through faster clearing times.</p>',
            '<p>Migrating PLC to DCS? Plan conversion mapping, I/O marshaling, alarm rationalization, and cutover rehearsal. This guide provides a proven blueprint.</p>',
            '<p>Power factor correction stabilizes networks and cuts utility penalties. We compare fixed banks vs. automatic capacitor banks and detuning strategies.</p>',
            '<p>Preventive maintenance for MCCs extends asset life. Define inspection intervals, lubrication standards, thermal trending, and spares strategy.</p>',
            '<p>Good cable routing reduces EMI, heat accumulation, and maintenance time. We summarize tray fill limits, segregation rules, and labeling.</p>',
            '<p>IIoT enables remote condition monitoring and analytics. We discuss sensor selection, edge compute, and secure cloud backhaul.</p>',
            '<p>Design a load shedding strategy that prioritizes safety and critical processes. Learn about breaker trip settings, ATS logic, and rolling brownouts.</p>',
            '<p>Commissioning quality relies on strong FAT/SAT. Use checklists, simulation test benches, and clear punch list closure criteria.</p>',
          ];

          const safeIdx = ((idx % titles.length) + titles.length) % titles.length;
          const localPost: WPPost = {
            id: -1000 - safeIdx,
            date: new Date(Date.now() - (safeIdx + 1) * 24 * 60 * 60 * 1000).toISOString(),
            slug,
            link: '#',
            title: { rendered: titles[safeIdx] },
            content: { rendered: bodies[safeIdx] },
            featured_media: 0,
          };
          setPost(localPost);
          setImageUrl(`https://picsum.photos/seed/finegrade-${safeIdx}/1200/800`);
          setMeta({ author: 'FINEGRADE Engineering', categories: [{ id: 1, name: 'Insights', slug: 'insights' }] });
          setLoading(false);
          return;
        }

        const res = await fetch(`${API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`);
        if (!res.ok) throw new Error(`Failed to fetch post (${res.status})`);
        const data: any[] = await res.json();
        if (!data || data.length === 0) throw new Error('Post not found');
        const p = data[0];
        const mapped: WPPost = {
          id: p.id,
          date: p.date,
          slug: p.slug,
          link: p.link,
          title: p.title,
          content: p.content,
          featured_media: p.featured_media,
        };
        setPost(mapped);
        // featured image via _embed
        const media = p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0];
        if (media && media.source_url) setImageUrl(media.source_url as string);

        // author + categories via _embed
        const author = p._embedded && p._embedded.author && p._embedded.author[0]?.name;
        const cats = (p._embedded && p._embedded['wp:term'] && p._embedded['wp:term'][0]) || [];
        const categories = cats.map((c: any) => ({ id: c.id, name: c.name, slug: c.slug }));
        setMeta({ author, categories });
      } catch (e: any) {
        setError(e.message || 'Failed to load post.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  useEffect(() => {
    const loadMore = async () => {
      try {
        if (!post) return;
        const res = await fetch(`${API_BASE}/posts?per_page=3&exclude=${post.id}&_embed`);
        if (!res.ok) return;
        const data: any[] = await res.json();
        const mapped: WPPost[] = data.map((p) => ({
          id: p.id,
          date: p.date,
          slug: p.slug,
          link: p.link,
          title: p.title,
          content: p.content,
          featured_media: p.featured_media,
        }));
        setMorePosts(mapped);
      } catch {
        // ignore
      }
    };
    loadMore();
  }, [post]);

  const readingTime = useMemo(() => {
    if (!post) return '';
    const div = document.createElement('div');
    div.innerHTML = post.content.rendered || '';
    const text = (div.textContent || div.innerText || '').trim();
    const words = text ? text.split(/\s+/).length : 0;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  }, [post]);

  return (
    <div className="w-full">
      {/* Hero */}
      {imageUrl ? (
        <section className="relative border-b border-blue-100">
          <div className="h-72 md:h-[28rem] w-full overflow-hidden">
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
              <Link to="/blog" className="text-blue-500 hover:text-blue-700">← Back to Blog</Link>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-blue-500" dangerouslySetInnerHTML={{ __html: post?.title.rendered || 'Loading…' }} />
              {post && (
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-blue-700 text-sm">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  {readingTime && <span>• {readingTime}</span>}
                  {meta.author && <span>• By {meta.author}</span>}
                </div>
              )}
              {meta.categories && meta.categories.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {meta.categories.map((c) => (
                    <span key={c.id} className="px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700 border border-blue-200">{c.name}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-blue-50 border-b border-blue-100 py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4">
            <Link to="/blog" className="text-blue-500 hover:text-blue-700">← Back to Blog</Link>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-blue-500" dangerouslySetInnerHTML={{ __html: post?.title.rendered || 'Loading…' }} />
            {post && (
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-700 text-sm">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                {readingTime && <span>• {readingTime}</span>}
                {meta.author && <span>• By {meta.author}</span>}
              </div>
            )}
            {meta.categories && meta.categories.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {meta.categories.map((c) => (
                  <span key={c.id} className="px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700 border border-blue-200">{c.name}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4">
          {loading && <p className="text-gray-700">Loading…</p>}
          {error && <div className="text-red-600">{error}</div>}
          {!loading && !error && post && (
            <article className="max-w-none">
              {imageUrl && (
                <img src={imageUrl} alt="" className="w-full h-auto rounded-xl mb-6 border border-blue-100" />
              )}
              <div className="article-content text-gray-800 leading-7">
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              </div>

              {/* Share */}
              <div className="mt-8 border-t border-blue-100 pt-4 flex items-center gap-3">
                <span className="text-gray-700 font-medium">Share:</span>
                {post && (
                  <>
                    <a
                      className="text-blue-500 hover:text-blue-700"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank" rel="noopener noreferrer"
                    >Facebook</a>
                    <a
                      className="text-blue-500 hover:text-blue-700"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title.rendered)}`}
                      target="_blank" rel="noopener noreferrer"
                    >LinkedIn</a>
                    <a
                      className="text-blue-500 hover:text-blue-700"
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title.rendered)}`}
                      target="_blank" rel="noopener noreferrer"
                    >X</a>
                    <a
                      className="text-blue-500 hover:text-blue-700"
                      href={`https://wa.me/?text=${encodeURIComponent(post.title.rendered + ' ' + window.location.href)}`}
                      target="_blank" rel="noopener noreferrer"
                    >WhatsApp</a>
                  </>
                )}
              </div>
            </article>
          )}
        </div>
      </section>

      {/* More from the blog */}
      {morePosts.length > 0 && (
        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xl font-bold text-blue-500 mb-4">More from the blog</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {morePosts.map((p) => (
                <article key={p.id} className="rounded-2xl border border-blue-100 overflow-hidden bg-white">
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-blue-500" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                    <p className="mt-1 text-gray-700 text-sm">{new Date(p.date).toLocaleDateString()}</p>
                    <div className="mt-3">
                      <Link to={`/blog/${p.slug}`} className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-0.5 hover:border-blue-700">Read article</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
