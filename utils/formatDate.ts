// utils/formatDate.ts

export const formatDateForLanguage = (
  isoDateString: string,
  language: 'en' | 'fr' | 'de'
): string => {
  try {
    const date = new Date(isoDateString + 'T00:00:00Z'); // Add time to prevent timezone issues
    
    const localeMap: Record<'en' | 'fr' | 'de', string> = {
      en: 'en-US',
      fr: 'fr-FR',
      de: 'de-DE',
    };

    return new Intl.DateTimeFormat(localeMap[language], {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch (error) {
    console.error('Date formatting error:', error);
    return isoDateString; // Fallback to ISO format if something goes wrong
  }
};