// FloatingContactButton.tsx
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Mail } from 'lucide-react';

interface FloatingContactButtonProps {
  onlyOnHomepage?: boolean;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onlyOnHomepage = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Check if we're on homepage - FIXED LOGIC
  useEffect(() => {
    const checkPage = () => {
      if (onlyOnHomepage) {
        const isHomepage = document.body.getAttribute('data-page') === 'home';
        console.log('FloatingContact - onlyOnHomepage:', onlyOnHomepage, 'data-page:', document.body.getAttribute('data-page'), 'showButton:', isHomepage);
        setShowButton(isHomepage);
      } else {
        console.log('FloatingContact - showing on all pages');
        setShowButton(true);
      }
    };

    // Check immediately
    checkPage();

    // Also check after a short delay (in case the attribute is set after mount)
    const timer = setTimeout(checkPage, 100);

    return () => clearTimeout(timer);
  }, [onlyOnHomepage]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    // TODO: Replace with actual form submission logic (EmailJS, Formspree, etc.)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
      handleClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setErrors({});
    buttonRef.current?.focus();
  };

  // Don't render if button shouldn't show
  if (!showButton) {
    console.log('FloatingContact - not rendering, showButton is false');
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-alpine-green hover:bg-opacity-90 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-alpine-green/50 group"
        aria-label="Open contact form"
      >
        <Mail className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-alpine-green text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Contact Us
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          {/* Modal */}
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-slide-up"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
          >
            {/* Header */}
            <div className="sticky top-0 bg-alpine-green text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <h2 id="contact-form-title" className="text-2xl font-serif font-bold">Quick Contact</h2>
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close contact form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success Message */}
            {isSuccess ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-alpine-green mb-2">Thank You!</h3>
                <p className="text-slate-600">Your message has been sent. We'll get back to you soon.</p>
              </div>
            ) : (
              /* Form */
              <div className="p-6 space-y-5">
                <p className="text-slate-600 text-sm">
                  Have a question? Fill out the form below and we'll respond as soon as possible.
                </p>

                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={100}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-alpine-green focus:border-alpine-green transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-slate-500">{formData.name.length}/100 characters</p>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-alpine-green focus:border-alpine-green transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-alpine-green focus:border-alpine-green transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your inquiry..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-slate-500">{formData.message.length}/1000 characters</p>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-alpine-green hover:bg-opacity-90 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-alpine-green/50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FloatingContactButton;