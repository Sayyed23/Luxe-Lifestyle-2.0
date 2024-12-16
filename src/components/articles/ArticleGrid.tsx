import React from 'react';
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';

interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readMore: string;
}

interface ArticleGridProps {
  articles: Article[];
  category: string;
}

export default function ArticleGrid({ articles, category }: ArticleGridProps) {
  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            {...article}
          />
        ))}
      </div>
    </motion.div>
  );
}