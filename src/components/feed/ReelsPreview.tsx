import React from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Heart, MessageCircle, Share2 } from 'lucide-react';

const ReelsPreview = () => {
  const reels = [
    {
      id: 1,
      username: 'luxe_paris',
      video: 'https://example.com/video1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1502274464241-b5c4621694ce',
      likes: 1234,
      comments: 89,
      caption: 'Exploring the hidden gems of Paris ✨'
    },
    {
      id: 2,
      username: 'travel_elite',
      video: 'https://example.com/video2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb',
      likes: 2345,
      comments: 156,
      caption: 'Luxury yacht experience in Monaco 🛥️'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reels.map((reel) => (
        <motion.div
          key={reel.id}
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[9/16] rounded-lg overflow-hidden bg-black"
        >
          <img
            src={reel.thumbnail}
            alt={reel.caption}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Play className="w-12 h-12 text-white" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-center mb-2">
              <img
                src={reel.thumbnail}
                alt={reel.username}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-medium">{reel.username}</span>
            </div>
            <p className="text-sm mb-2">{reel.caption}</p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center">
                <Heart className="w-5 h-5 mr-1" />
                {reel.likes}
              </button>
              <button className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-1" />
                {reel.comments}
              </button>
              <button>
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReelsPreview;