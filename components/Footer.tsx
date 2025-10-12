
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-alpine-green text-snow-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="font-serif text-lg">&copy; {new Date().getFullYear()} Alpine Appetite Tours. All Rights Reserved.</p>
          <p className="mt-2 text-sm text-gray-300">Part of The Gilbert's Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
