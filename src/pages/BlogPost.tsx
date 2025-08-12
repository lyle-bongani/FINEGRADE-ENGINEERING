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

  useEffect(() => {
    const load = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        setError(null);
        // Check for custom articles by slug
        const customArticles = [
          {
            id: -1001,
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            slug: 'finegrade-automation-trends',
            link: '#',
            title: { rendered: 'Top 5 Automation Trends Transforming African Industry' },
            content: { rendered: `<p><strong>The Fourth Industrial Revolution is here, and African industries are rapidly embracing automation to stay competitive, resilient, and sustainable. At Finegrade Engineering, we’ve seen firsthand how the latest automation trends are transforming manufacturing, utilities, and mining across the continent.</strong></p>

      <h2>Why Automation Matters Now</h2>
      <p>Automation is no longer just about replacing manual labor—it’s about unlocking new levels of efficiency, safety, and data-driven insight. In the wake of global supply chain disruptions and rising energy costs, African businesses are turning to automation to:</p>
      <ul>
        <li>Reduce operational costs and downtime</li>
        <li>Improve product quality and consistency</li>
        <li>Enhance workplace safety</li>
        <li>Enable remote monitoring and control</li>
        <li>Meet increasingly strict regulatory standards</li>
      </ul>

      <h2>Key Trends in 2025</h2>
      <p>Here are the top automation trends shaping industry in Africa today:</p>
      <ol>
        <li><strong>Industry 4.0 Integration:</strong> Factories and plants are connecting legacy equipment to the cloud, enabling real-time data collection and advanced analytics.</li>
        <li><strong>Edge Computing and IIoT:</strong> Smart sensors and edge devices are delivering actionable insights directly from the shop floor, reducing latency and bandwidth costs.</li>
        <li><strong>AI-Powered Process Optimization:</strong> Machine learning algorithms are being used to predict failures, optimize energy use, and dynamically adjust production schedules.</li>
        <li><strong>Collaborative Robotics:</strong> Cobots are working alongside human operators, improving throughput and safety in packaging, assembly, and inspection tasks.</li>
        <li><strong>Cybersecurity for OT:</strong> With increased connectivity comes greater risk—cybersecure architectures are a must for modern automation projects.</li>
      </ol>

      <h2>Finegrade’s Approach: From Assessment to Implementation</h2>
      <p>Our team starts with a detailed site assessment, mapping out existing processes and identifying automation opportunities. We then design tailored solutions that may include:</p>
      <ul>
        <li>Retrofitting PLCs and HMIs to legacy machinery</li>
        <li>Deploying SCADA systems with mobile dashboards</li>
        <li>Integrating IIoT sensors for vibration, temperature, and power monitoring</li>
        <li>Implementing AI-based predictive maintenance platforms</li>
      </ul>
      <p>Every project includes operator training and ongoing support to ensure long-term success.</p>

      <h2>Case Study: Bottling Plant Digital Transformation</h2>
      <p>In 2024, Finegrade partnered with a leading beverage manufacturer to overhaul their production line. We installed smart sensors, upgraded their PLCs, and deployed a cloud-based SCADA system. The results:</p>
      <ul>
        <li>22% reduction in unplanned downtime</li>
        <li>12% decrease in energy consumption</li>
        <li>Real-time alerts reduced maintenance response times from hours to minutes</li>
      </ul>
      <p>Operators can now monitor the entire plant from a tablet, while management receives automated performance reports every morning.</p>

      <h2>What’s Next?</h2>
      <p>As African industry continues to grow, automation will be the key to scaling sustainably and competing globally. Finegrade is committed to helping our clients harness the latest technologies, from digital twins to AI-driven analytics.</p>

      <blockquote>“Finegrade’s automation upgrade was a game-changer for our plant. The data insights alone paid for the project within months.”<br><em>– Plant Manager, Harare</em></blockquote>

      <h2>Ready to Start Your Automation Journey?</h2>
      <p>Contact Finegrade Engineering for a free site assessment and discover how automation can drive your business forward. Our experts are ready to design, implement, and support solutions tailored to your needs.</p>` },
            featured_media: 100001,
            imageUrl: 'https://picsum.photos/seed/finegrade-custom-1/1200/800',
          },
          {
            id: -1002,
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            slug: 'finegrade-energy-savings',
            link: '#',
            title: { rendered: 'Energy Savings: Real Results from Finegrade Projects' },
            content: { rendered: `<p>Finegrade Engineering has helped clients across Zimbabwe and the region achieve significant energy savings through a combination of audits, retrofits, and digital monitoring.</p>
      <h3>Our Approach</h3>
      <ul>
        <li>Comprehensive energy audits</li>
        <li>Implementation of energy-efficient drives and lighting</li>
        <li>Continuous monitoring and reporting</li>
      </ul>
      <p>In one project, a food processing plant saw a 28% reduction in electricity costs after Finegrade installed VSDs and optimized their compressor scheduling.</p>
      <p>Our team provides ongoing support and training to ensure savings are sustained year after year.</p>` },
            featured_media: 100002,
            imageUrl: 'https://picsum.photos/seed/finegrade-custom-2/1200/800',
          },
          {
            id: -1003,
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            slug: 'finegrade-control-upgrades',
            link: '#',
            title: { rendered: 'Control System Upgrades: Before & After' },
            content: { rendered: `<p>Legacy control systems can hold back productivity and increase risk. Finegrade specializes in upgrading outdated PLC and relay-based systems to modern, networked platforms.</p>
      <h3>Upgrade Benefits</h3>
      <ul>
        <li>Improved process reliability and uptime</li>
        <li>Enhanced safety and compliance</li>
        <li>Better data visibility and reporting</li>
      </ul>
      <p>Recent project: A mining client’s MCCs were upgraded with new PLCs, HMI panels, and remote diagnostics—resulting in a 35% drop in unplanned downtime.</p>
      <p>Finegrade manages every step, from design to commissioning and operator training.</p>` },
            featured_media: 100003,
            imageUrl: 'https://picsum.photos/seed/finegrade-custom-3/1200/800',
          },
          {
            id: -1004,
            date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
            slug: 'finegrade-safety-culture',
            link: '#',
            title: { rendered: 'Building a Safety Culture: Lessons from the Field' },
            content: { rendered: `<p>At Finegrade, safety is more than compliance—it's a core value. Our engineers lead regular workshops and audits to foster a culture of proactive safety in every project.</p>
      <h3>Lessons Learned</h3>
      <ul>
        <li>Empower teams to report near-misses</li>
        <li>Regular toolbox talks and refresher training</li>
        <li>Use of digital checklists and incident tracking</li>
      </ul>
      <p>Finegrade’s 2025 safety drive at a major utility reduced lost-time incidents by 60% in six months. Our approach combines leadership buy-in, practical tools, and continuous improvement.</p>` },
            featured_media: 100004,
            imageUrl: 'https://picsum.photos/seed/finegrade-custom-4/1200/800',
          },
          {
            id: -1005,
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            slug: 'finegrade-remote-monitoring',
            link: '#',
            title: { rendered: 'Remote Monitoring: How Finegrade Keeps Clients Connected' },
            content: { rendered: `<p>Finegrade’s remote monitoring solutions keep critical infrastructure running smoothly. We deploy IIoT sensors, secure gateways, and cloud dashboards for real-time visibility.</p>
      <h3>Deployment Steps</h3>
      <ol>
        <li>Site audit and requirements gathering</li>
        <li>Sensor and gateway installation</li>
        <li>Integration with cloud analytics</li>
      </ol>
      <p>Our clients in water treatment and power distribution can now detect faults instantly and schedule maintenance before failures occur. Finegrade provides 24/7 support and custom reporting dashboards.</p>` },
            featured_media: 100005,
            imageUrl: 'https://picsum.photos/seed/finegrade-custom-5/1200/800',
          },
          {
            id: -1006,
            date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
            slug: 'finegrade-women-in-engineering',
            link: '#',
            title: { rendered: 'Women in Engineering: Spotlight on Finegrade’s Team' },
            content: { rendered: `<p>Women are at the forefront of innovation at Finegrade Engineering. We’re proud to showcase the achievements and journeys of our female team members.</p>
      <h3>Spotlight Stories</h3>
      <ul>
        <li>Lead engineer Chipo Moyo on SCADA project delivery</li>
        <li>Project manager Thandi Ndlovu’s tips for client communication</li>
        <li>Mentorship and STEM outreach initiatives</li>
      </ul>
      <p>Read exclusive interviews and advice for young women considering a career in engineering. Finegrade is committed to diversity and inclusion at every level.</p>` },
            featured_media: 100006,
            imageUrl: 'https://picsum.photos/seed/finegrade-custom-6/1200/800',
          },
          {
            id: -1007,
            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            slug: 'finegrade-digital-twins',
            link: '#',
            title: { rendered: 'Digital Twins: The Future of Plant Management' },
            content: { rendered: `<p>Digital twin technology is transforming plant management for Finegrade clients. By creating a virtual replica of assets, we enable predictive maintenance and informed decision-making.</p>
      <h3>How It Works</h3>
      <ul>
        <li>Asset data collection via IIoT sensors</li>
        <li>Real-time simulation and analytics</li>
        <li>Automated alerts for anomalies</li>
      </ul>
      <p>Case Study: Finegrade’s digital twin deployment at a beverage plant reduced breakdowns by 40% and improved OEE by 18%.</p>
      <p>Contact Finegrade for a digital twin assessment and roadmap for your facility.</p>` },
            featured_media: 100007,
            imageUrl: 'https://picsum.photos/seed/finegrade-custom-7/1200/800'
          }
        ];
        const foundCustom = customArticles.find((a) => a.slug === slug);
        if (foundCustom) {
          setPost(foundCustom);
          setImageUrl(foundCustom.imageUrl);
          setMeta({ author: 'FINEGRADE Engineering', categories: [{ id: 1, name: 'Insights', slug: 'insights' }] });
          setLoading(false);
          return;
        }
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

          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
              <Link to="/blog" className="text-white hover:text-blue-200 transition-colors">← Back to Blog</Link>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg" dangerouslySetInnerHTML={{ __html: post?.title.rendered || 'Loading…' }} />
              {post && (
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-white text-shadow text-sm">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  {readingTime && <span>• {readingTime}</span>}
                  {meta.author && <span>• By {meta.author}</span>}
                </div>
              )}
              {meta.categories && meta.categories.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {meta.categories.map((c) => (
                    <span key={c.id} className="px-2 py-0.5 rounded-full text-xs bg-blue-600/80 text-white border border-blue-200/40">{c.name}</span>
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
              {/* Article Content with Drop Cap and Enhanced Typography */}
              <div className="article-content improved-typography text-gray-900 leading-8 text-lg">
                {(() => {
                  // Add drop cap to first paragraph
                  const html = post.content.rendered || '';
                  const div = document.createElement('div');
                  div.innerHTML = html;
                  const firstP = div.querySelector('p');
                  if (firstP && firstP.textContent) {
                    const text = firstP.textContent;
                    if (text.length > 1) {
                      firstP.innerHTML = `<span class='drop-cap'>${text[0]}</span>${text.slice(1)}`;
                    }
                  }
                  return <div dangerouslySetInnerHTML={{ __html: div.innerHTML }} />;
                })()}
              </div>

              {/* Share */}
              <div className="mt-10 border-t border-blue-100 pt-6 flex flex-wrap items-center gap-4">
                <span className="text-gray-700 font-semibold">Share:</span>
                {post && (
                  <>
                    <a
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank" rel="noopener noreferrer"
                    >Facebook</a>
                    <a
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title.rendered)}`}
                      target="_blank" rel="noopener noreferrer"
                    >LinkedIn</a>
                    <a
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title.rendered)}`}
                      target="_blank" rel="noopener noreferrer"
                    >X</a>
                    <a
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      href={`https://wa.me/?text=${encodeURIComponent(post.title.rendered + ' ' + window.location.href)}`}
                      target="_blank" rel="noopener noreferrer"
                    >WhatsApp</a>
                  </>
                )}
              </div>
            </article>
          )}
        </div>
        <style>{`
          .improved-typography h2 {
            font-size: 2rem;
            color: #259ed9;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
          }
          .improved-typography h3 {
            font-size: 1.35rem;
            color: #259ed9;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
          }
          .improved-typography blockquote {
            border-left: 4px solid #259ed9;
            background: #f0f8ff;
            color: #259ed9;
            font-style: italic;
            margin: 2rem 0;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
          }
          .improved-typography .drop-cap {
            float: left;
            font-size: 3.5rem;
            line-height: 1;
            font-weight: 700;
            color: #259ed9;
            margin-right: 0.6rem;
            margin-top: 0.15em;
            font-family: Roboto, Arial, sans-serif;
          }
          .improved-typography p {
            margin-bottom: 1.25em;
          }
        `}</style>
      </section>


    </div>
  );
};

export default BlogPost;
