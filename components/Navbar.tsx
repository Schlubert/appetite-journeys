import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { getImagePath } from '@/utils/paths';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Lang = 'en' | 'fr' | 'de';

// Updated to support optional submenu items
interface NavLink {
  href: string;
  label: string;
  submenu?: NavLink[];
}

const NAV_LABEL_KEYS: Record<string, string> = {
  '/':                  'nav.home',
  '/gateway-preview':   'nav.home',
  '/tours':             'nav.tours',
  '/tours/southern-delights': 'nav.tours',
  '/switzerland':       'nav.switzerland',
  '/europe':            'nav.europe',
  '/new-zealand':       'nav.newZealand',
  '/about':             'nav.about',
  '/about/appetite-journeys': 'nav.aboutCompany',
  '/about/switzerland': 'nav.aboutSwitzerland',
  '/about/europe':      'nav.aboutEurope',
  '/about/new-zealand': 'nav.aboutNewZealand',
  '/faq':               'nav.faq',
  '/contact':           'nav.contact',
  '/terms':             'nav.terms',
};

const DROPDOWN_ITEMS: Record<string, NavLink[]> = {
  '/tours': [
    { href: '/switzerland', label: 'Switzerland' },
    { href: '/europe', label: 'Europe' },
    { href: '/new-zealand', label: 'New Zealand' },
    { href: '/tours', label: 'All Tours' },
  ],
  '/about': [
    { href: '/about', label: 'About Appetite Journeys' },
    { href: '/about/switzerland', label: 'Switzerland' },
    { href: '/about/europe', label: 'Europe' },
    { href: '/about/new-zealand', label: 'New Zealand' },
  ],
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

  // Desktop dropdown component
  const DesktopDropdown: React.FC<{ href: string; label: string }> = ({ href, label }) => {
    const items = DROPDOWN_ITEMS[href];
    if (!items) return null;

    const isOpen = openDropdown === href;

    return (
      <div
        className="relative group"
        onMouseEnter={() => setOpenDropdown(href)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button className="flex items-center gap-1 text-lg font-semibold text-rock-gray hover:text-mountain-blue transition-colors duration-300 py-2">
          {t(NAV_LABEL_KEYS[href] || label)}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown menu */}
        <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-40">
          {items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-alpine-green/10 text-alpine-green'
                    : 'text-rock-gray hover:bg-gray-100 hover:text-alpine-green'
                }`
              }
            >
              {t(NAV_LABEL_KEYS[item.href] || item.label)}
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

  // Mobile dropdown component
  const MobileDropdown: React.FC<{ href: string; label: string }> = ({ href, label }) => {
    const items = DROPDOWN_ITEMS[href];
    if (!items) return null;

    const isOpen = openDropdown === href;

    return (
      <div className="flex flex-col">
        <button
          onClick={() => setOpenDropdown(isOpen ? null : href)}
          className="flex items-center justify-between px-3 py-2 rounded-lg text-base font-semibold text-rock-gray hover:bg-gray-100 hover:text-alpine-green transition-colors duration-200"
        >
          {t(NAV_LABEL_KEYS[href] || label)}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Mobile submenu */}
        {isOpen && (
          <div className="pl-4 flex flex-col space-y-1 bg-gray-50 rounded-lg mt-1">
            {items.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpenDropdown(null);
                }}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-alpine-green text-white'
                      : 'text-rock-gray hover:bg-gray-100 hover:text-alpine-green'
                  }`
                }
              >
                {t(NAV_LABEL_KEYS[item.href] || item.label)}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-snow-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={getImagePath('appetite_tours_logo.png')}
              alt="Appetite Journeys logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const hasDropdown = DROPDOWN_ITEMS[link.href];

              if (hasDropdown) {
                return (
                  <DesktopDropdown
                    key={link.href}
                    href={link.href}
                    label={link.label}
                  />
                );
              }

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
            {NAV_LINKS.map((link) => {
              const hasDropdown = DROPDOWN_ITEMS[link.href];

              if (hasDropdown) {
                return (
                  <MobileDropdown
                    key={link.href}
                    href={link.href}
                    label={link.label}
                  />
                );
              }

              return (
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
              );
            })}
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