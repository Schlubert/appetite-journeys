import React from 'react';

interface ImageGalleryProps {
  images?: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Handle broken images by hiding them
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;