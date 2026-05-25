import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
 const { t } = useTranslation(); 
  return (
    <footer className="bg-alpine-green text-snow-white">
      <div className="container mx-auto px-4 py-6">
        {/* Top Row: Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm mb-4">
          <Link to="/about" className="hover:text-snow-white text-gray-200 transition-colors">{t('footer.about')}</Link>
          <Link to="/contact" className="hover:text-snow-white text-gray-200 transition-colors">{t('footer.contact')}</Link>
          <Link to="/terms" className="hover:text-snow-white text-gray-200 transition-colors">{t('footer.terms')}</Link>
          <Link to="/privacy" className="hover:text-snow-white text-gray-200 transition-colors">{t('footer.privacy')}</Link>
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
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <p className="text-gray-300">{t('footer.ggroup')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
