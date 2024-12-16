import React from 'react';
import { motion } from 'framer-motion';
import WonderCard from './WonderCard';
import { wonders } from '../../data/wondersData';

export default function WondersSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Seven Wonders of the World</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embark on a journey to discover these magnificent monuments that showcase human ingenuity,
            architectural brilliance, and cultural significance across civilizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wonders.map((wonder) => (
            <WonderCard key={wonder.id} {...wonder} />
          ))}
        </div>
      </div>
    </section>
  );
}