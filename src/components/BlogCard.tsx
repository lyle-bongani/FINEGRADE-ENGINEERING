import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  image: string;
  title: string;
  subtitle?: string;
  meta1?: string;
  meta2?: string;
  price?: string;
  oldPrice?: string;
  excerpt: string;
  cta?: string;
  tag?: string;
  sale?: boolean;
  iconUrl?: string;
  to: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  subtitle,
  meta1,
  meta2,
  price,
  oldPrice,
  excerpt,
  cta = 'DETAILS',
  tag,
  sale,
  iconUrl,
  to,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col relative group transition-all duration-200">
      <div className="relative">
        <img src={image} alt="" className="w-full h-64 object-cover" />
        {sale && (
          <span className="absolute top-3 right-3 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">SALE</span>
        )}
        {iconUrl && (
          <span className="absolute bottom-[-24px] right-5 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center">
            <img src={iconUrl} alt="icon" className="w-7 h-7" />
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col px-6 pt-8 pb-6 text-left">
        <div className="mb-2 text-left">
          <h3 className="text-xl font-bold text-gray-900 mb-1 text-left">{title}</h3>
          {subtitle && <div className="text-gray-400 text-sm mb-2 text-left">{subtitle}</div>}
        </div>
        <div className="flex flex-row gap-4 mb-2 text-left">
          {meta1 && <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold text-left">{meta1}</div>}
          {meta2 && <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold text-left">{meta2}</div>}
        </div>
        {(price || oldPrice) && (
          <div className="flex items-center gap-2 mb-2 text-left">
            {oldPrice && <span className="text-gray-400 line-through text-lg text-left">{oldPrice}</span>}
            {price && <span className="text-blue-500 text-2xl font-bold text-left">{price}</span>}
          </div>
        )}
        <div className="text-gray-500 text-sm mb-4 line-clamp-3 text-left">{excerpt}</div>
        <Link to={to} className="mt-auto inline-block px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm shadow transition text-left w-auto" style={{width:'fit-content'}}>{cta}</Link>
      </div>
      {tag && (
        <span className="absolute top-5 left-5 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">{tag}</span>
      )}
    </div>
  );
};

export default BlogCard;
