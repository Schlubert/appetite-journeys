
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const MountainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-alpine-green" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a.75.75 0 01.696.442l4.5 9a.75.75 0 01-1.392.696L10 6.236 6.196 12.138a.75.75 0 11-1.392-.696l4.5-9A.75.75 0 0110 2zM5.504 15.5a.75.75 0 01.625-1.06l4-1.5a.75.75 0 01.742 0l4 1.5a.75.75 0 01-.129 1.488l-10 2.5a.75.75 0 01-.734-1.428l1.496-.374z" clipRule="evenodd" />
    </svg>
  );

  return (
    <header className="bg-snow-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
              <img 
                src="../images/zzzGilberts blank sml.png" 
                alt="Gilberts Tours logo" 
                className="h-12 w-auto"
              />
          <span className="text-2xl font-bold font-serif text-alpine-green">Some Tour name and logo</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-lg font-semibold transition-colors duration-300 ${
                    isActive ? 'text-swiss-red' : 'text-rock-gray hover:text-mountain-blue'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
