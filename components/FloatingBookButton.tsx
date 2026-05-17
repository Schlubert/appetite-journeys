import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from 'lucide-react';

type FloatingBookButtonProps = {
  tourName: string;
  price?: { en: string; fr: string; de: string } | string;
};

const FloatingBookButton: React.FC<FloatingBookButtonProps> = ({ tourName, price }) => {
  const { i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) 
    ? i18n.language 
    : 'en') as 'en' | 'fr' | 'de';

  // Handle both multilingual object and plain string
  const displayPrice = typeof price === 'string' 
    ? price 
    : price?.[lang];

  return (
    <button className="fixed bottom-6 right-6 bg-alpine-green text-white rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-all z-40 flex items-center gap-2">
      <ShoppingCart className="w-5 h-5" />
      <div className="text-sm text-right">
        <div className="font-bold">{tourName}</div>
        {displayPrice && <div className="text-xs">{displayPrice}</div>}
      </div>
    </button>
  );
};

export default FloatingBookButton;