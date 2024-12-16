import React from 'react';
import { motion } from 'framer-motion';
import CategoryHeader from '../components/CategoryHeader';
import TrendGrid from '../components/fashion/TrendGrid';
import { useFashionTrends } from '../hooks/useFashionTrends';

const Fashion = () => {
  const { trends, isLoading, isError, isEmpty } = useFashionTrends();

  return (
    <div className="pt-20">
      <CategoryHeader 
        title="Fashion" 
        description="Discover the latest trends and styles in luxury fashion"
        image="https://images.unsplash.com/photo-1445205170230-053b83016050"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600"
          >
            <p>Failed to load fashion trends. Please try again later.</p>
          </motion.div>
        )}

        {isEmpty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600"
          >
            <p>No trends available at the moment. Check back soon!</p>
          </motion.div>
        )}

        {!isLoading && !isError && !isEmpty && <TrendGrid trends={trends} />}
      </div>
    </div>
  );
};

export default Fashion;