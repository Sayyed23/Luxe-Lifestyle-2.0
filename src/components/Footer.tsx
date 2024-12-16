import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">LUXE</h3>
            <p className="text-gray-400">A window into the world of luxury lifestyle, fashion, and sophisticated living.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Fashion</a></li>
              <li><a href="#" className="hover:text-white">Travel</a></li>
              <li><a href="#" className="hover:text-white">Lifestyle</a></li>
              <li><a href="#" className="hover:text-white">Culture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/Ismailsayyed76?t=4fYwMa5cRAF3FUnHczQD5A&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/ismailsayyed75/profilecard/?igsh=cmNpOTA0YjdibWZs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
               <a 
                href="https://www.facebook.com/share/15NhBLYPi6/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-400 transition-colors"
              className="hover:text-gray-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
               <a 
                href="https://youtube.com/@chichapatti2?si=XFRjepM_fySlJBg8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-400 transition-colors"
              
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}