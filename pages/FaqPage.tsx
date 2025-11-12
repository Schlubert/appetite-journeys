import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ContentDisplay from '../components/ContentDisplay';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is included in the tour price?",
    answer: `
      <p>We've tried to include as much as possible in the tour price while still leaving the chance for you to make the trip 'yours'. Included in the price are:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Hotel accommodation (twin share)</li>
        <li>Daily breakfasts</li>
        <li>Lunches and dinners provided varies by tour.</li>
        <li>All transportation within Switzerland including air conditioned coach transport, trains, and funiculars (when as part of the tour)</li>
        <li>All activities mentioned in the itinerary</li>
        <li>Services of an experienced tour leader fluent in the languages of Switzerland</li>
        <li>Insights and explanations from a baker and chef with more than 30 years experience in the food industry</li>
        <li>All entrance fees for places visited as part of the tour</li>
        <li>All applicable taxes </li>
        <li>Luggage transfers between hotels</li>
        <li>Special Appetite Journeys gifts</li>
        <li>Advice and support prior to and during the tour including travel tips, plus lots of foodie and insider recommendations</li>
              </ul>
    `,
  },

{
  question: "What is NOT included in the tour price?",
  answer: `
    <ul class="list-disc list-inside space-y-1">
      <li>International flights or travel to/from start/end points</li>
      <li>Travel insurance (obligatory)</li>
      <li>Visa / ETAs</li>
      <li>Beverages and snacks (when not as part of the activities)</li>
      <li>Personal expenses</li>
      <li>Tip kitty</li>
      <li>Optional excursions</li>
      <li>Meals not mentioned in the itinerary</li>
    </ul>
  `
},
{
    question: "What are the payment terms?",
    answer: `
    <ul class="list-disc list-inside space-y-1">
      <li>All pricing is correct as at October 2025</li>
      <li>Prices are subject to change based on exchange rate fluctuations</li>
      <li>Payment Method: 
      <ul class="list-[circle] pl-6 mt-1 space-y-1">
        <li>Bank Transfer</li>
        <li>All payments are made in New Zealand dollars</li>
        <li>20% deposit is required at time of booking (non-refundable*)</li>
        <li>Final balance is due 90 days before departure.</ul></li>
      
    </ul> 
    <p class="mt-4 text-xs italic text-gray-600"> 
        *For more information on our cancellation policy, please see our Terms and Conditions.
    </p>
    `
  
  },
  
{
    question: "What fitness level is required?",
    answer: "To enjoy this trip, you'll need to be able to spend time on your feet and regularly walk for 3-4 hours without assistance, including regular stints walking uphill. Daily activities might include: walking on uneven and hilly ground, getting on and off various forms of transportation, climbing stairs. You may also encounter over-the-bath showers in some of the accommodations. It will be impossible to enjoy your trip if you're not able to do a walking tour for a full afternoon and be able to keep up with the group. Unfortunately, this tour cannot accommodate people requiring a walking aid."
  },
  
  {
    question: "How many people are on the tour?",
    answer: "Our tours are intimate and personalized, with a maximum of 12 guests per group. That being said, we do require a minimum of 8 guests to run a tour. If we do not reach this minimum, you will be offered a full refund or the option to transfer to another tour."
  },
  {
    question: "What luggage can I bring?",
    answer: "1 piece (max 23kg) per person with 1 day pack. There is only so much room in the bus, so please keep your luggage to a minimum. We recommend a suitcase or duffel bag with wheels and a day pack for daily excursions."
  },
  // ➡️ Add more FAQs here
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleToggle = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    // Scroll to the opened FAQ item
    if (newIndex !== null && faqRefs.current[newIndex]) {
      setTimeout(() => {
        const element = faqRefs.current[newIndex];
        if (element) {
          const navbarHeight = 80; // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50); // Small delay to allow the accordion to expand first
    }
  };

  return (
    <>
    <SEO {...seoConfig.faq} />
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-alpine-green mb-12 text-center">
        Frequently Asked Questions
      </h1>
      
      <div className="space-y-6">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              ref={(el) => { faqRefs.current[index] = el; }}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition hover:shadow-md"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-mountain-blue text-left">
                  {faq.question}
                </h2>
                {isOpen ? (
                  <ChevronUp className="text-alpine-green w-6 h-6" />
                ) : (
                  <ChevronDown className="text-alpine-green w-6 h-6" />
                )}
              </button>
              {isOpen && (
                <div className="px-6 pb-6 bg-white text-gray-700 leading-relaxed animate-fadeIn">
                  <ContentDisplay content={faq.answer} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default FaqPage;