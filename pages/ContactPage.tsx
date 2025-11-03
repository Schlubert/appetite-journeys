// ContactPage.tsx
import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const socialIconProps = {
    className: "w-8 h-8",
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
    'YouTube': (
         <svg {...socialIconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768 C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
        </svg>
    ),
    'LinkedIn': (
        <svg {...socialIconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    ),
};


const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString()
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <>
        <SEO {...seoConfig.contact} />
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-alpine-green mb-4 text-center">Get in Touch</h1>
            <p className="text-lg text-center text-rock-gray mb-10">We'd love to hear from you! Whether you have a question about our tours, or just want to say hello, feel free to reach out.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div>
                    <h2 className="text-3xl font-serif font-semibold text-alpine-green mb-6">Send Us a Message</h2>
                    {submitted ? (
                        <div className="bg-alpine-green/10 border-l-4 border-alpine-green text-alpine-green p-6 rounded-r-lg h-full flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-serif font-semibold">Thank You!</h3>
                            <p className="mt-2 text-center">Your message has been sent. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6" name="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact-form" />
                            <input type="hidden" name="bot-field" />
                            
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold text-rock-gray mb-2">Full Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue focus:border-mountain-blue transition" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold text-rock-gray mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue focus:border-mountain-blue transition" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-semibold text-rock-gray mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue focus:border-mountain-blue transition"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-swiss-red text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 text-lg">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Contact Info & Socials */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-serif font-semibold text-alpine-green mb-3">Contact Information</h3>
                        <p className="text-lg text-rock-gray mb-3"><strong>Email:</strong> office@appetitejourneys.nz</p>
                                            
                    
                        <div className="flex space-x-6">
                            {SOCIAL_LINKS.map(social => (
                        <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-rock-gray hover:text-mountain-blue transition-colors duration-300">
                      {SocialIcons[social.label]}
                      <span className="sr-only">{social.label}</span>
                         </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactPage;