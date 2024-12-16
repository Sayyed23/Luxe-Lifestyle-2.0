import React from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';

const SuggestedUsers = () => {
  const { user } = useAuthStore();
  
  const suggestions = [
    { username: 'luxe_paris', avatar: 'https://images.unsplash.com/photo-1502274464241-b5c4621694ce', followers: 12500 },
    { username: 'travel_elite', avatar: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb', followers: 8900 },
    { username: 'fashion_week', avatar: 'https://images.unsplash.com/photo-1445205170230-053b83016050', followers: 15600 },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      {user && (
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-200 mr-3">
            {user.avatar_url ? (
              <img
                src={user.avatar_url}
                alt={user.username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-300 text-gray-600">
                {user.username[0].toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-gray-900">{user.username}</p>
            <p className="text-sm text-gray-500">Welcome back!</p>
          </div>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500">Suggested for you</h3>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <motion.div
            key={suggestion.username}
            whileHover={{ x: 4 }}
            className="flex items-center"
          >
            <img
              src={suggestion.avatar}
              alt={suggestion.username}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{suggestion.username}</p>
              <p className="text-xs text-gray-500">
                {suggestion.followers.toLocaleString()} followers
              </p>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Follow
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;