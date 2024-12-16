import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1532453288672-3a27e9be9efd)` }}>
        <motion.div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to LUXE
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your window into the world of luxury lifestyle, fashion, and sophisticated living
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/about"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Discover More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-gray-600">Dive into our specialized content sections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/fashion" className="group">
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                  alt="Fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white">Fashion</h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/travel" className="group">
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
                  alt="Travel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white">Travel</h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/lifestyle" className="group">
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                  alt="Lifestyle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white">Lifestyle</h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}