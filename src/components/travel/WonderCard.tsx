import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WonderModal from './WonderModal';

interface WonderCardProps {
  name: string;
  location: string;
  description: string;
  image: string;
  shortInfo: string;
  wikipediaUrl: string;
  luxuryExperience: string;
}

export default function WonderCard(props: WonderCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        whileHover={{ y: -8 }}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <motion.img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-serif text-gray-900 mb-2">{props.name}</h3>
            <p className="text-gray-600 font-medium">{props.location}</p>
          </div>
          
          <p className="text-gray-700 mb-4 line-clamp-2">{props.description}</p>
          
          <motion.button
            className="inline-flex items-center text-gray-900 font-medium group"
            whileHover={{ x: 4 }}
          >
            <span className="mr-2">Read More</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.article>

      <WonderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        wonder={props}
      />
    </>
  );
}