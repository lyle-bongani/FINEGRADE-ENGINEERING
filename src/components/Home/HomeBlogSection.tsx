import React from 'react';
import blogs from '../../data/blogs.json';

const HomeBlogSection: React.FC = () => {
    const posts = blogs.slice(0, 5);
    const featured = posts[0];
    const others = posts.slice(1, 4);

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
                    <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition text-sm mt-4 md:mt-0 md:ml-8 text-left">See More News</button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Featured Post */}
                    <div className="flex-1 rounded-2xl overflow-hidden relative min-h-[340px] flex items-end shadow-lg bg-gray-900">
                        <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover opacity-70" />
                        <div className="relative z-10 p-8 w-full text-left">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 8px #000' }}>{featured.title}</h3>
                            <p className="text-white text-base md:text-lg mb-4 drop-shadow" style={{ textShadow: '1px 1px 6px #000' }}>{featured.excerpt}</p>
                            <span className="inline-block relative font-semibold text-blue-500 cursor-pointer group">
                                Read More
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-200 -z-10 group-hover:bg-blue-500 transition-all"></span>
                            </span>
                        </div>
                    </div>
                    {/* Other Posts */}
                    <div className="flex flex-col gap-6 w-full lg:w-[340px]">
                        {others.map(post => (
                            <div key={post.id} className="flex items-center gap-4">
                                <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                                <div className="flex-1 text-left">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1 leading-tight line-clamp-2">{post.title}</h4>
                                    <div className="text-gray-500 text-xs mb-2">2 days ago</div>
                                    <span className="inline-block relative font-semibold text-blue-500 cursor-pointer group text-sm">
                                        Read More
                                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-200 -z-10 group-hover:bg-blue-500 transition-all"></span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSection; 