import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const Stories = () => {
  const { user } = useAuthStore();
  
  const stories = [
    { id: 1, username: 'luxe_paris', image: 'https://images.unsplash.com/photo-1502274464241-b5c4621694ce' },
    { id: 2, username: 'travel_elite', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb' },
    { id: 3, username: 'fashion_week', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050' },
    { id: 4, username: 'lifestyle_mag', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto">
        {user && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center min-w-[80px]"
          >
            <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-2">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-xs text-gray-600">Add Story</span>
          </motion.div>
        )}
        
        {stories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center min-w-[80px]"
          >
            <div className="w-16 h-16 rounded-full border-2 border-pink-500 p-0.5">
              <img
                src={story.image}
                alt={story.username}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600 mt-2 truncate w-full text-center">
              {story.username}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stories;