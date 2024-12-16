import React from 'react';
import { motion } from 'framer-motion';

interface ModalContentProps {
  sections: {
    title: string;
    content: string | React.ReactNode;
    className?: string;
  }[];
}

export default function ModalContent({ sections }: ModalContentProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className={section.className}
        >
          <h3 className="text-xl font-serif text-gray-900 mb-3">{section.title}</h3>
          {typeof section.content === 'string' ? (
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          ) : (
            section.content
          )}
        </motion.div>
      ))}
    </div>
  );
}