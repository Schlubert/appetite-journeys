import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-alpine-green text-snow-white">
      <div className="container mx-auto px-4 py-6">
        {/* Top Row: Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm mb-4">
          <Link to="/about" className="hover:text-snow-white text-gray-200 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-snow-white text-gray-200 transition-colors">Contact</Link>
          <Link to="/terms" className="hover:text-snow-white text-gray-200 transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-snow-white text-gray-200 transition-colors">Privacy</Link>
        </div>

        {/* Middle Row: Social Icons */}
        <div className="flex justify-center gap-5 mb-3">
          <a href="mailto:info@appetitejourneys.com" aria-label="Email us" className="hover:text-swiss-red transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://facebook.com/appetitejourneys" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-swiss-red transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/appetitejourneys" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-swiss-red transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="text-center text-xs text-gray-200 space-y-1">
          <p>&copy; {new Date().getFullYear()} Appetite Journeys. All Rights Reserved.</p>
          <p className="text-gray-300">Part of The Gilbert&apos;s Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
