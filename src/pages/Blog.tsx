import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

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
          content: p.content,
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

  // Custom authored articles as fallback
  const customArticles: WPPost[] = [
    {
      id: -1001,
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      slug: 'finegrade-automation-trends',
      link: '#',
      title: { rendered: 'Top 5 Automation Trends Transforming African Industry' },
      excerpt: { rendered: 'Explore the latest automation trends driving efficiency and innovation across African manufacturing and utilities.' },
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
    },
    {
      id: -1002,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      slug: 'finegrade-energy-savings',
      link: '#',
      title: { rendered: 'Energy Savings: Real Results from Finegrade Projects' },
      excerpt: { rendered: 'How Finegrade Engineering has helped clients cut energy costs by 30% through smart retrofits and monitoring.' },
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
    },
    {
      id: -1003,
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      slug: 'finegrade-control-upgrades',
      link: '#',
      title: { rendered: 'Control System Upgrades: Before & After' },
      excerpt: { rendered: 'A visual journey through Finegrade’s most impactful control system upgrades, with photos and data.' },
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
    },
    {
      id: -1004,
      date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      slug: 'finegrade-safety-culture',
      link: '#',
      title: { rendered: 'Building a Safety Culture: Lessons from the Field' },
      excerpt: { rendered: 'What Finegrade learned from leading safety workshops and audits in the mining and energy sectors.' },
      content: { rendered: `<p>At Finegrade, safety is more than compliance—it's a core value. Our engineers lead regular workshops and audits to foster a culture of proactive safety in every project.</p>
      <h3>Lessons Learned</h3>
      <ul>
        <li>Empower teams to report near-misses</li>
        <li>Regular toolbox talks and refresher training</li>
        <li>Use of digital checklists and incident tracking</li>
      </ul>
      <p>Finegrade’s 2025 safety drive at a major utility reduced lost-time incidents by 60% in six months. Our approach combines leadership buy-in, practical tools, and continuous improvement.</p>` },
      featured_media: 100004,
    },
    {
      id: -1005,
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      slug: 'finegrade-remote-monitoring',
      link: '#',
      title: { rendered: 'Remote Monitoring: How Finegrade Keeps Clients Connected' },
      excerpt: { rendered: 'A behind-the-scenes look at Finegrade’s remote monitoring solutions for water, power, and industrial clients.' },
      content: { rendered: `<p>Finegrade’s remote monitoring solutions keep critical infrastructure running smoothly. We deploy IIoT sensors, secure gateways, and cloud dashboards for real-time visibility.</p>
      <h3>Deployment Steps</h3>
      <ol>
        <li>Site audit and requirements gathering</li>
        <li>Sensor and gateway installation</li>
        <li>Integration with cloud analytics</li>
      </ol>
      <p>Our clients in water treatment and power distribution can now detect faults instantly and schedule maintenance before failures occur. Finegrade provides 24/7 support and custom reporting dashboards.</p>` },
      featured_media: 100005,
    },
    {
      id: -1006,
      date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      slug: 'finegrade-women-in-engineering',
      link: '#',
      title: { rendered: 'Women in Engineering: Spotlight on Finegrade’s Team' },
      excerpt: { rendered: 'Meet the women driving innovation at Finegrade Engineering and their advice for the next generation.' },
      content: { rendered: `<p>Women are at the forefront of innovation at Finegrade Engineering. We’re proud to showcase the achievements and journeys of our female team members.</p>
      <h3>Spotlight Stories</h3>
      <ul>
        <li>Lead engineer Chipo Moyo on SCADA project delivery</li>
        <li>Project manager Thandi Ndlovu’s tips for client communication</li>
        <li>Mentorship and STEM outreach initiatives</li>
      </ul>
      <p>Read exclusive interviews and advice for young women considering a career in engineering. Finegrade is committed to diversity and inclusion at every level.</p>` },
      featured_media: 100006,
    },
    {
      id: -1007,
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      slug: 'finegrade-digital-twins',
      link: '#',
      title: { rendered: 'Digital Twins: The Future of Plant Management' },
      excerpt: { rendered: 'How digital twin technology is revolutionizing asset management and predictive maintenance for Finegrade clients.' },
      content: { rendered: `<p>Digital twin technology is transforming plant management for Finegrade clients. By creating a virtual replica of assets, we enable predictive maintenance and informed decision-making.</p>
      <h3>How It Works</h3>
      <ul>
        <li>Asset data collection via IIoT sensors</li>
        <li>Real-time simulation and analytics</li>
        <li>Automated alerts for anomalies</li>
      </ul>
      <p>Case Study: Finegrade’s digital twin deployment at a beverage plant reduced breakdowns by 40% and improved OEE by 18%.</p>
      <p>Contact Finegrade for a digital twin assessment and roadmap for your facility.</p>` },
      featured_media: 100007
    },
  ];

  // Prepare grid items: always 10 (1 hero + 9 grid), fill with custom articles if needed
  let gridPosts: WPPost[] = [];
  if (!loading && !error && posts.length > 1) {
    const realGrid = posts.slice(1);
    gridPosts = [...realGrid];
    let customIdx = 0;
    while (gridPosts.length < 9 && customIdx < customArticles.length) {
      gridPosts.push(customArticles[customIdx]);
      customIdx++;
    }
  }

  return (
    <div className="w-full">
      {/* Full-width Hero for Latest Post */}
      {!loading && !error && posts.length > 0 && (
        <section className="relative w-full min-h-[350px] md:min-h-[480px] flex items-end bg-gray-100 overflow-hidden mb-10">
          {getImage(posts[0]) && (
            <img
              src={getImage(posts[0])}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center z-0"
              loading="eager"
              style={{ filter: 'brightness(0.7)' }}
            />
          )}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-10 md:py-16 flex flex-col items-start">
            <span className="mb-2 text-xs md:text-sm uppercase tracking-widest text-white font-bold bg-blue-500 px-3 py-1 rounded">Latest Insight</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg" dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }} />
            <p className="mt-3 text-white text-lg max-w-2xl drop-shadow-md" dangerouslySetInnerHTML={{ __html: posts[0].excerpt.rendered }} />
            <Link to={`/blog/${posts[0].slug}`} className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow-lg transition">Read Full Article</Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {loading && <p className="text-blue-700">Loading posts…</p>}
          {error && (
            <div className="text-red-600">{error}</div>
          )}
          {!loading && !error && posts.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((p, idx) => {
                const overrideImage =
                  p.title.rendered.trim() === 'Women in Engineering: Spotlight on Finegrade’s Team'
                    ? 'https://www.appliedcontrols.co.zw/wp-content/uploads/2024/12/Breast-Cancer-Awareness-2024-1-1536x1024.jpg'
                    : undefined;
                return (
                  <BlogCard
                    key={p.id}
                    image={overrideImage || getImage(p) || `https://picsum.photos/seed/finegrade-demo-${idx}/600/400`}
                    title={p.title.rendered}
                    subtitle={p.slug === 'finegrade-automation-trends' ? 'Industry' : undefined}
                    meta1={new Date(p.date).toLocaleDateString()}
                    excerpt={p.excerpt?.rendered?.replace(/<[^>]+>/g, '') || ''}
                    to={`/blog/${p.slug}`}
                    cta="Read More"
                    tag={p.slug.startsWith('demo-post-') ? 'Demo' : undefined}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;