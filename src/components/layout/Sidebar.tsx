import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, Search, PlusSquare, Heart, User, LogOut,
  Compass, MessageCircle, BookMarked
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/explore' },
    { icon: Compass, label: 'Explore', path: '/discover' },
    { icon: MessageCircle, label: 'Messages', path: '/messages' },
    { icon: Heart, label: 'Notifications', path: '/notifications' },
    { icon: PlusSquare, label: 'Create', path: '/create' },
    { icon: BookMarked, label: 'Saved', path: '/saved' },
  ];

  return (
    <div className="fixed hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-200">
      <div className="p-6">
        <Link to="/" className="text-3xl font-serif">LUXE</Link>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-4 px-4 py-3 mb-2 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </Link>
        ))}

        {user && (
          <>
            <Link
              to={`/profile/${user.username}`}
              className={`flex items-center space-x-4 px-4 py-3 mb-2 rounded-lg transition-colors ${
                location.pathname === `/profile/${user.username}`
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <User size={24} />
              <span>Profile</span>
            </Link>

            <button
              onClick={handleSignOut}
              className="flex items-center space-x-4 px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-gray-50 w-full"
            >
              <LogOut size={24} />
              <span>Sign Out</span>
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;