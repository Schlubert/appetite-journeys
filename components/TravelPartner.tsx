import React from 'react';
import { Plane, Hotel, MapPin, Shield, Users, HeartHandshake, Globe, CheckCircle } from 'lucide-react';

const TravelPartnersPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">

      {/* Hero Section */}
      <header className="text-center">
        <div className="inline-block bg-alpine-green bg-opacity-10 p-4 rounded-full mb-4">
          <Globe className="w-12 h-12 text-alpine-green" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-rock-gray mb-4">
          Planning Your Trip
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Your Appetite Journeys tour is fully taken care of once you arrive at the starting point. 
          Getting there — and making the most of your time before or after — is where a good travel 
          agent can make all the difference.
        </p>
      </header>

      {/* What we cover vs what we don't */}
      <section className="grid sm:grid-cols-2 gap-6">
        <div className="bg-alpine-green/5 border border-alpine-green/20 rounded-xl p-6">
          <h2 className="font-bold text-alpine-green text-lg mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            What Appetite Journeys covers
          </h2>
          <ul className="text-slate-600 text-sm space-y-2">
            <li>✓ All accommodation during the tour</li>
            <li>✓ All transportation within the tour</li>
            <li>✓ All included meals and activities</li>
            <li>✓ Luggage transfers between hotels</li>
            <li>✓ Experienced tour leadership throughout</li>
            <li>✓ Pre-departure advice and support</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="font-bold text-rock-gray text-lg mb-4 flex items-center gap-2">
            <Plane className="w-5 h-5 text-slate-500" />
            What you'll need to arrange separately
          </h2>
          <ul className="text-slate-600 text-sm space-y-2">
            <li>→ International and domestic flights</li>
            <li>→ Accommodation before and after the tour</li>
            <li>→ Travel insurance (required)</li>
            <li>→ Visas and entry requirements</li>
            <li>→ Pre or post-tour experiences</li>
            <li>→ Personal spending money</li>
          </ul>
        </div>
      </section>

      {/* Why use a travel agent */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-rock-gray mb-2">
          Why book through a travel agent?
        </h2>
        <p className="text-slate-500 mb-8 text-sm">
          You're welcome to book flights and accommodation yourself — but there are real advantages 
          to working with a professional, particularly for international travel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="bg-alpine-green/10 p-3 rounded-lg h-fit flex-shrink-0">
              <Shield className="w-5 h-5 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-1">Expert advice</h3>
              <p className="text-slate-600 text-sm">
                A good agent knows the best routes, airlines, and connections for your specific 
                destinations — and can often find options you wouldn't find searching yourself.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green/10 p-3 rounded-lg h-fit flex-shrink-0">
              <HeartHandshake className="w-5 h-5 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-1">Someone in your corner</h3>
              <p className="text-slate-600 text-sm">
                If flights are delayed, cancelled, or rescheduled, your agent handles it. 
                That peace of mind is particularly valuable when travelling internationally.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green/10 p-3 rounded-lg h-fit flex-shrink-0">
              <Hotel className="w-5 h-5 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-1">Pre and post-tour stays</h3>
              <p className="text-slate-600 text-sm">
                Many of our guests extend their trip to explore more of Europe or New Zealand. 
                An agent can design an itinerary that complements your tour perfectly.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green/10 p-3 rounded-lg h-fit flex-shrink-0">
              <MapPin className="w-5 h-5 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-1">Tour coordination</h3>
              <p className="text-slate-600 text-sm">
                Let your agent know your tour start date, location, and welcome meeting time — 
                they'll ensure your flights and any pre-tour accommodation line up perfectly.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green/10 p-3 rounded-lg h-fit flex-shrink-0">
              <Users className="w-5 h-5 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-1">Groups and couples</h3>
              <p className="text-slate-600 text-sm">
                Travelling with friends or family who aren't on the tour? An agent can coordinate 
                everyone's arrangements so you all arrive and depart together.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-alpine-green/10 p-3 rounded-lg h-fit flex-shrink-0">
              <Globe className="w-5 h-5 text-alpine-green" />
            </div>
            <div>
              <h3 className="font-bold text-rock-gray mb-1">Travel insurance</h3>
              <p className="text-slate-600 text-sm">
                Comprehensive travel insurance is required for all Appetite Journeys tours. 
                Your agent can recommend and arrange appropriate cover alongside your flights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-gradient-to-br from-alpine-green to-alpine-green/80 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">How to book your tour</h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
          Your Appetite Journeys experience is booked directly through us — either via our website 
          or by getting in touch. Your travel agent handles everything else.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
          {[
            { step: '1', title: 'Book your tour', body: 'Reserve your place on an Appetite Journeys tour through our website or by contacting us directly.' },
            { step: '2', title: 'Contact a travel agent', body: 'Share your tour start date and location. They\'ll arrange flights, insurance, and any extra stays.' },
            { step: '3', title: 'Enjoy the journey', body: 'Arrive at the starting point and leave the rest to us. We take care of everything from there.' },
          ].map(item => (
            <div key={item.step} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm mb-3">
                {item.step}
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm opacity-85">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important notes */}
      <section className="bg-slate-50 rounded-lg p-6 border-l-4 border-alpine-green">
        <h3 className="font-bold text-rock-gray mb-3">A few things to keep in mind</h3>
        <ul className="text-slate-600 space-y-2 text-sm">
          <li>✓ <strong>Confirm your tour booking first</strong> — book your Appetite Journeys place before arranging flights, as tour numbers are limited and dates can sell out.</li>
          <li>✓ <strong>Allow plenty of arrival time</strong> — we recommend arriving at the tour starting point the day before departure to avoid any travel delays affecting your start.</li>
          <li>✓ <strong>Welcome meeting attendance is essential</strong> — please ensure your travel arrangements allow you to attend the welcome meeting on the first evening of the tour.</li>
          <li>✓ <strong>Travel insurance is compulsory</strong> — comprehensive cover including cancellation, medical, and travel disruption must be in place before your tour begins.</li>
          <li>✓ <strong>Share your tour details with your agent</strong> — give them the tour name, start date, starting city, and welcome meeting time so they can plan accordingly.</li>
        </ul>
      </section>

    </div>
  );
};

export default TravelPartnersPage;