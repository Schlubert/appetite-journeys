import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { getImagePath } from '@/utils/paths';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Lang = 'en' | 'fr' | 'de';

const NAV_LABEL_KEYS: Record<string, string> = {
  '/':          'nav.home',
  '/tours':     'nav.tours',
  '/faq':       'nav.faq',
  '/about':     'nav.about',
  '/contact':   'nav.contact',
  '/terms':     'nav.terms',
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang: Lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;

  const LangToggle = () => (
    <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-1 py-1">
      <Globe className="w-3.5 h-3.5 text-rock-gray ml-1 mr-0.5" />
      {(['en', 'fr', 'de'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => handleLanguageChange(l)}
          className={`px-2 py-0.5 rounded-md text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
            currentLang === l
              ? 'bg-alpine-green text-white'
              : 'text-rock-gray hover:text-alpine-green hover:bg-gray-100'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="bg-snow-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={getImagePath('appetite_tours_logo.png')}
              alt="Gilberts Tours logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
  console.log('href:', link.href, 'key:', NAV_LABEL_KEYS[link.href]);
  return (
    <NavLink
      key={link.href}
      to={link.href}
      className={({ isActive }) =>
        `text-lg font-semibold transition-colors duration-300 ${
          isActive
            ? 'text-swiss-red'
            : 'text-rock-gray hover:text-mountain-blue'
        }`
      }
    >
      {t(NAV_LABEL_KEYS[link.href] || link.label)}
    </NavLink>
  );
})}
            <LangToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-alpine-green focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4 animate-fadeIn">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'bg-alpine-green text-white'
                      : 'text-rock-gray hover:bg-gray-100 hover:text-alpine-green'
                  }`
                }
              >
                {t(NAV_LABEL_KEYS[link.href] || link.label)}
              </NavLink>
            ))}
            {/* Language toggle in mobile menu */}
            <div className="px-3 py-2">
              <LangToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;