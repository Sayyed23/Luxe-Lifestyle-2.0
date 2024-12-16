import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readMore: string;
}

export default function ArticleCard({
  slug,
  category,
  title,
  excerpt,
  image,
  readMore
}: ArticleCardProps) {
  return (
    <Link to={`/${category.toLowerCase()}/article/${slug}`}>
      <motion.article
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="p-6">
          <span className="text-sm uppercase tracking-wider text-gray-500">{category}</span>
          <h3 className="text-xl font-serif mt-2 mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center text-gray-900 group">
            <span className="mr-2">Read More</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}