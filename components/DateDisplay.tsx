// components/DateDisplay.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatDateForLanguage } from '@/utils/formatDate';

type DateDisplayProps = {
  date: string; // ISO format: YYYY-MM-DD
  className?: string;
};

const DateDisplay: React.FC<DateDisplayProps> = ({ date, className = '' }) => {
  const { i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) 
    ? i18n.language 
    : 'en') as 'en' | 'fr' | 'de';

  const formattedDate = formatDateForLanguage(date, lang);

  return <span className={className}>{formattedDate}</span>;
};

export default DateDisplay;