import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './navigation/MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-serif text-gray-900">LUXE</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
          </div>

          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
}