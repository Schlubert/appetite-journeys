import React from 'react';
import { Plane, Hotel, MapPin, Shield, Mail, Globe} from 'lucide-react';

const TravelPartnersPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Hero Section */}
      <header className="text-center">
        <div className="inline-block bg-alpine-green bg-opacity-10 p-4 rounded-full mb-4">
          <Plane className="w-12 h-12 text-alpine-green" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-rock-gray mb-4">
          Travel Partners
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Need help with flights or planning extended stays? We've partnered with trusted 
          travel experts who understand our tours and can help with all your travel arrangements.
        </p>
      </header>

      {/* Why Use Our Partners */}
      <section className="bg-slate-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-rock-gray mb-6">Why Use Our Travel Partners?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="bg-alpine-green bg-opacity-10 p-3 rounded-lg h-fit">
              <Shield className="w-6 h-6 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-2">Tour Expertise</h3>
              <p className="text-slate-600 text-sm">
                Our partners know our tours inside-out and can ensure your flights and 
                accommodation perfectly align with tour dates and locations.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green bg-opacity-10 p-3 rounded-lg h-fit">
              <Plane className="w-6 h-6 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-2">Competitive Pricing</h3>
              <p className="text-slate-600 text-sm">
                Access to competitive fares and package deals that might not be available 
                when booking separately.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green bg-opacity-10 p-3 rounded-lg h-fit">
              <Hotel className="w-6 h-6 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-2">Extended Stays</h3>
              <p className="text-slate-600 text-sm">
                Want to explore more of Europe? Our partners can help you design pre or 
                post-tour experiences that complement your Appetite Journeys adventure.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green bg-opacity-10 p-3 rounded-lg h-fit">
              <MapPin className="w-6 h-6 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-2">Peace of Mind</h3>
              <p className="text-slate-600 text-sm">
                Professional travel insurance advice and support if any travel disruptions occur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section>
        <h2 className="text-2xl font-bold text-rock-gray mb-6">Services Available</h2>
        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
          <div className="p-6">
            <h3 className="font-bold text-lg text-rock-gray mb-2">✈️ Flight Arrangements</h3>
            <ul className="text-slate-600 space-y-2 ml-4">
              <li>• International flights to/from Zurich</li>
              <li>• Optimal routing and connection times</li>
              <li>• Business class upgrades available</li>
              <li>• Group booking discounts</li>
            </ul>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-rock-gray mb-2">🏨 Pre & Post Tour Accommodation</h3>
            <ul className="text-slate-600 space-y-2 ml-4">
              <li>• Hotels near Zurich airport or city center</li>
              <li>• Arrival day early check-in arrangements</li>
              <li>• Post-tour accommodation anywhere in Switzerland</li>
              <li>• Airport transfer coordination</li>
            </ul>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-rock-gray mb-2">🗺️ Extended Itineraries</h3>
            <ul className="text-slate-600 space-y-2 ml-4">
              <li>• Pre-tour city breaks in Europe</li>
              <li>• Post-tour extensions (Paris, Rome, Munich, etc.)</li>
              <li>• Multi-country European packages</li>
              <li>• Rail pass arrangements</li>
            </ul>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-lg text-rock-gray mb-2">🛡️ Travel Insurance & Protection</h3>
            <ul className="text-slate-600 space-y-2 ml-4">
              <li>• Comprehensive travel insurance options</li>
              <li>• Cancellation and interruption protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Our Partner */}
      <section className="bg-gradient-to-r from-alpine-green to-alpine-green bg-opacity-90 rounded-xl p-8 text-white">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-lg opacity-90">
            Ready to start planning your complete Swiss experience?
          </p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-semibold">Email</p>
                <a 
                  href="mailto:travel-agent@example.com?subject=Appetite%20Journeys%20Travel%20Inquiry" 
                  className="hover:underline"
                >
                  travel-agent@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-semibold">Website</p>
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white border-opacity-20">
            <p className="text-sm text-center opacity-90">
              <strong>Please mention you're an Appetite Journeys guest</strong><br />
              Include your tour name and departure date for faster assistance
            </p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-slate-50 rounded-lg p-6 border-l-4 border-alpine-green">
        <h3 className="font-bold text-rock-gray mb-3">Important Information</h3>
        <ul className="text-slate-600 space-y-2 text-sm">
          <li>
            ✓ <strong>Optional Service:</strong> Using our travel partners is completely optional. 
            You're welcome to book your own flights and accommodation.
          </li>
          <li>
            ✓ <strong>Independent Business:</strong> Our travel partners operate independently. 
            All bookings are made directly with them.
          </li>
          <li>
            ✓ <strong>Tour Confirmation:</strong> You must confirm your Appetite Journeys tour booking 
            separately before arranging flights.
          </li>
          <li>
            ✓ <strong>Arrival Requirements:</strong> Please arrive in Zurich by 2:00 PM on your 
            tour start date to attend the welcome meeting at 6:00 PM.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TravelPartnersPage;