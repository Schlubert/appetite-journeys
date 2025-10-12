// SocialMediaSection.tsx
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const socialIconProps = {
  className: "w-10 h-10",
  "aria-hidden": true,
};

const SocialIcons: { [key: string]: React.ReactNode } = {
  'Instagram': (
    <svg {...socialIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  'Facebook': (
    <svg {...socialIconProps} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  'Twitter': (
    <svg {...socialIconProps} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
  ),
  'YouTube': (
    <svg {...socialIconProps} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
    </svg>
  ),
  'LinkedIn': (
    <svg {...socialIconProps} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-.25 px-2">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Text on the left */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-alpine-green mb-2">
              Follow Our Journey
            </h3>
            <p className="text-base text-slate-600">
              Join us on social media for travel tips, behind-the-scenes moments, and Swiss inspiration
            </p>
          </div>
          
          {/* Social icons on the right */}
          <div className="flex items-center gap-6 flex-shrink-0">
            {SOCIAL_LINKS.map(social => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rock-gray hover:text-alpine-green transition-all duration-300 transform hover:scale-110"
                aria-label={`Follow us on ${social.label}`}
              >
                {SocialIcons[social.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;