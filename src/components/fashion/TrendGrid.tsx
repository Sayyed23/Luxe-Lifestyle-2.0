import React from 'react';
import { motion } from 'framer-motion';
import { FashionTrend } from '../../types/fashion';

interface TrendGridProps {
  trends: FashionTrend[];
}

export default function TrendGrid({ trends }: TrendGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {trends.map((trend) => (
        <motion.section
          key={trend.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-serif text-gray-900 mb-6">{trend.title}</h2>
          <div className="grid gap-6">
            {trend.items.map((item) => (
              <TrendingItem key={item.id} item={item} />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}