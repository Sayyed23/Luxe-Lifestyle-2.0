import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Bell, MessageCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <Link to="/" className="text-2xl font-serif">LUXE</Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/messages" className="text-gray-600">
            <MessageCircle size={24} />
          </Link>
          <Link to="/notifications" className="text-gray-600">
            <Bell size={24} />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 z-50">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>

            <nav className="space-y-4">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Explore
              </Link>
              {user && (
                <Link
                  to={`/profile/${user.username}`}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;