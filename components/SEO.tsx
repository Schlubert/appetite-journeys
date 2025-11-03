// components/SEO.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Alpine Appetite Tours | Luxury Food & Wine Tours of Switzerland',
  description = 'Experience Switzerland through its food and wine. Join our small-group culinary tours exploring cheese makers, chocolate factories, vineyards, and Alpine cuisine.',
  keywords = 'Switzerland tours, Swiss food tours, chocolate tours Switzerland, cheese tours, wine tours Switzerland, culinary tours',
  image = 'https://www.appetitejourneys.nz/og-image.jpg',
  url,
  type = 'website',
  schema
}) => {
  const location = useLocation();
  const currentUrl = url || `https://www.appetitejourneys.nz${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Add/Update Schema.org JSON-LD if provided
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"][data-dynamic]');
      
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('data-dynamic', 'true');
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, image, currentUrl, type, schema]);

  return null;
};

export default SEO;