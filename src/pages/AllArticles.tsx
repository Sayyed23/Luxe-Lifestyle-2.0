import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';

export default function AllArticles() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)` }}>
        <Link to="/">
          <motion.button
            className="absolute top-8 left-8 z-10 flex items-center text-white hover:text-gray-200 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft size={24} className="mr-2" />
            <span className="text-lg">Back to Home</span>
          </motion.button>
        </Link>
        <motion.div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl px-4">
            <motion.h1 
              className="text-4xl font-serif text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              All Articles
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our complete collection of curated content
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-6">
                <span className="text-sm uppercase tracking-wider text-gray-500">{article.category}</span>
                <h2 className="text-xl font-serif text-gray-900 mt-2 mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link 
                  to={`/${article.category.toLowerCase()}/article/${article.slug}`}
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors inline-flex items-center"
                >
                  Read full article
                  <ArrowLeft size={16} className="ml-2 rotate-180" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}