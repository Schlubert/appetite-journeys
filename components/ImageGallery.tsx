import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images?: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-zoom-in"
            onClick={() => setLightboxSrc(image)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxSrc(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxSrc}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;