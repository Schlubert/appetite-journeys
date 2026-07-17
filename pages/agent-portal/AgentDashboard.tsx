import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import {
  Play, LogOut, Clock, Download, Mail, Phone,
  Calendar, DollarSign, BookOpen, Bell, ChevronRight,
} from 'lucide-react';

// ─── Webinars ─────────────────────────────────────────────────────────────────
const WEBINARS = [
  {
    id: '1',
    title: 'Introduction to Appetite Journeys',
    description: 'An introduction to Appetite Journeys and an overview of our tours, our story, and why your clients will love travelling with us.',
    duration: '~29 min',
    date: 'Coming soon: 15th July 2026',
    image: '/images/intro_webinar.png',
    youtubeId: 'mWT_VY-7SkU',
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'What type of hotels do we use?',
    answer: [
      'We use a range of 3-4 star and boutique hotels. Accommodations is carefully selected for comfort, cleanliness, and local character. We prioritise hotels that offer a unique experience and are conveniently located to minimise travel time.',
      'Some examples are:',
    ],
    hotels: [
      { name: 'Hotel Beausite', location: 'Interlaken', url: 'https://www.beausite.ch/en/hotel' },
      { name: 'Boutique Hotel KARL', location: 'Luzern', url: 'https://www.hotel-karl.ch/en' },
      { name: 'Central Plaza Hotel', location: 'Zurich', url: 'https://www.central.ch/en' },
      { name: 'Altstadthotel Stadtkrug', location: 'Salzburg', url: 'https://www.stadtkrug.at' },
      { name: 'Boutique Hotel Nossek', location: 'Vienna', url: 'https://nossek.boutiquehotel.org/' },
    ],
  },
  {
    question: 'What vehicle do we use?',
    answer: 'We work with an in-country partner who provides a modern, comfortable van. The van is fully insured and meets all local safety standards. The driver (Kevin) holds all  necessary licences and insurance, and is experienced driving in the region.',
    images: [
      { src: '/images/ch/van1.jpg', caption: 'Van exterior' },
      { src: '/images/ch/van2.jpg', caption: 'Van interior' },
      { src: '/images/ch/van3.jpg', caption: 'Van interior' },
    ],
  },
  {
    question: 'How do we safeguard client funds?',
    answer: 'We hold client funds in a dedicated account until the tour is underway.',
  },
  {
    question: 'What do we do if minimum numbers are not met?',
    answer: 'As we only need 6 pax to run a tour, this is rarely an issue. If minimum numbers are not met, we will contact you to discuss options. This may include rescheduling the tour, offering alternative dates, or providing a refund. The final date to make a decision is 90 days prior to departure, which is when the final balance is due.',
  },
];

// ─── Upcoming departures ──────────────────────────────────────────────────────
const DEPARTURES = [
  { tour: 'Cheese, Chocolate & the Swiss Riviera', date: '30 March 2027', status: 'available', spaces: 8 },
  { tour: 'Waterfalls, Whiskey & Walnuts', date: '22 August 2027', status: 'available', spaces: 10 },
  { tour: 'Cheese, Chocolate & the Swiss Riviera', date: '5 September 2027', status: 'available', spaces: 12 },
  { tour: 'Cakes, Tortes & Coffeehouses', date: '25 September 2027', status: 'available', spaces: 10 },
];

// ─── Downloads ────────────────────────────────────────────────────────────────
const DOWNLOADS = [
  { title: 'Appetite Journeys — Client Brochure', subtitle: '1-page overview of CH & EU tours, PDF', href: '/images/flyer.pdf', image: '/images/flyer.jpg' },
  { title: 'Appetite Journeys — ', titleBold: 'AGENT BROCHURE', subtitle: '2-page overview of all tours with greater detail including maps, PDF', href: '/images/agentflyer.pdf', image: '/images/agentflyer.jpg' },
  { title: 'Terms and Conditions', subtitle: 'A PDF of our terms and conditions for easier printing and reference', href: '/images/terms.pdf', image: '/images/terms.jpg' },
  { title: 'Webinar slide deck', subtitle: 'A PDF of the slides used in our webinar for reference', href: '/images/Webinar slide deck.pdf', image: '/images/ch/pdf.png' },
];

// ─── Updates ─────────────────────────────────────────────────────────────────
const UPDATES = [
  {
    date: '22nd June 2026',
    title: 'Webinar announced: Introduction to Appetite Journeys',
    body: "An introduction to Appetite Journeys and an overview of our tours, our story, and why your clients will love travelling with us. Coming 15th July 2026.",
  },
  {
    date: '15th May 2026',
    title: '2027 departure dates released',
    body: "We've just released our departure dates for 2027! Check out the Upcoming Departures section for details and contact us to hold space for your clients.",
  },
  {
    date: '12th April 2026',
    title: 'Commission structure updated',
    body: 'Standard agent commission has increased to 10% for all bookings.',
  },
];

// ─── Status badge ─────────────────────────────────────────────────────────────
const StatusBadge: React.FC<{ status: string; spaces: number }> = ({ status, spaces }) => {
  if (status === 'sold-out') {
    return <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Sold Out</span>;
  }
  if (spaces <= 4) {
    return <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">{spaces} spaces left</span>;
  }
  return <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{spaces} spaces</span>;
};

// ─── Section heading ──────────────────────────────────────────────────────────
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-serif font-bold text-alpine-green mb-6">{children}</h2>
);

// ─── Main component ───────────────────────────────────────────────────────────
const AgentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [agentEmail, setAgentEmail] = useState('');
  const [agentName, setAgentName] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/agent-portal');
        return;
      }
      setAgentEmail(session.user.email ?? '');
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, agency_name')
        .eq('id', session.user.id)
        .single();
      if (profile) {
        setAgentName(profile.full_name ?? '');
      }
    };
    checkSession();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/agent-portal');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full rounded-xl shadow-2xl"
            />
            {lightbox.caption && (
              <p className="text-white text-sm text-center mt-3 opacity-75">{lightbox.caption}</p>
            )}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/70 transition text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-end relative">
        <p className="text-2xl font-serif font-bold text-alpine-green hidden sm:block absolute left-1/2 -translate-x-1/2">
          {agentName ? `Welcome to Appetite Journeys' Travel Agents Portal` : ''}
        </p>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-alpine-green transition"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* ── Updates + Upcoming Departures ────────────────────────────────── */}
        <section className="grid lg:grid-cols-2 gap-8 items-start">

          <div>
            <SectionHeading>News &amp; Updates</SectionHeading>
            <div className="space-y-4">
              {UPDATES.map((update, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <p className="text-xs text-gray-400 mb-1">{update.date}</p>
                  <h3 className="font-semibold text-gray-800 mb-1">{update.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{update.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>Upcoming Departures</SectionHeading>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Tour</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Departure</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {DEPARTURES.map((dep, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-5 py-4 font-medium text-gray-800">{dep.tour}</td>
                      <td className="px-5 py-4 text-gray-500">{dep.date}</td>
                      <td className="px-5 py-4">
                        <StatusBadge status={dep.status} spaces={dep.spaces} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Availability updates daily. Contact us to hold space for a client.
            </p>
          </div>

        </section>

        {/* ── Commission & Booking ─────────────────────────────────────────── */}
        <section>
          <SectionHeading>Commission &amp; Booking</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-gray-800">Commission</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Standard rate</span>
                  <span className="font-semibold text-alpine-green">10%</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Calculated on</span>
                  <span className="font-semibold">Tour price excl. optionals</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Paid</span>
                  <span className="font-semibold">7 days prior to departure</span>
                </li>
                <li className="flex justify-between">
                  <span>Currency</span>
                  <span className="font-semibold">NZD</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-gray-800">How to Book</h3>
              <ol className="text-sm text-gray-600 space-y-3 list-decimal list-inside">
                <li>Contact us to check availability and hold space</li>
                <li>Confirm booking via email</li>
                <li>20% non-refundable deposit secures the place</li>
                <li>Final balance due 90 days before departure</li>
                <li>Commission paid 7 days prior to departure</li>
              </ol>
              <a
                href="mailto:hello@appetitejourneys.nz"
                className="inline-flex items-center gap-2 text-sm text-alpine-green font-semibold hover:underline mt-2"
              >
                <Mail className="w-4 h-4" />
                Email us to make a booking
              </a>
            </div>

          </div>
        </section>

        {/* ── Webinar Library + FAQ ────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          <div>
            <SectionHeading>Webinar Library</SectionHeading>
            <p className="text-gray-500 mb-8 -mt-4">
              Watch at your own pace. All recordings are available anytime.
            </p>
            <div className="grid gap-6">
              {WEBINARS.map(webinar => (
                <div
                  key={webinar.id}
                  className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition ${
                    webinar.youtubeId ? 'hover:shadow-md cursor-pointer' : 'opacity-75 cursor-default'
                  }`}
                  onClick={() => webinar.youtubeId && navigate(`/agent-portal/webinar/${webinar.id}`)}
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={
                        webinar.youtubeId
                          ? `https://img.youtube.com/vi/${webinar.youtubeId}/maxresdefault.jpg`
                          : webinar.image
                      }
                      alt={webinar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-alpine-green ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 mb-2 leading-tight">{webinar.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{webinar.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {webinar.duration}
                      </span>
                      <span>{webinar.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            {/* ── FAQs ────────────────────────────────────────────────────── */}
          <div>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <div className="space-y-2">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-800 text-sm pr-4">{faq.question}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-4">
                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((para, pIdx) => (
                          <p key={pIdx} className="text-sm text-gray-500 leading-relaxed mb-2 last:mb-0">{para}</p>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                      )}

                      {faq.hotels && (
                        <ul className="space-y-1.5 mt-1">
                          {faq.hotels.map((hotel, hIdx) => (
                            <li key={hIdx} className="text-sm text-gray-500">
                              <span>• </span>
                              <a
                                href={hotel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-alpine-green font-medium hover:underline"
                              >
                                {hotel.name}
                              </a>
                              <span> in {hotel.location}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {faq.images && (
                        <div className="flex gap-3 mt-4 flex-wrap">
                          {faq.images.map((img, imgIdx) => (
                            <div key={imgIdx} className="flex flex-col gap-1">
                              <img
                                src={img.src}
                                alt={img.caption}
                                className="w-40 h-28 object-cover rounded-lg border border-gray-200 cursor-pointer hover:opacity-90 transition"
                                onClick={() => setLightbox({ src: img.src, caption: img.caption })}
                              />
                              {img.caption && (
                                <p className="text-xs text-gray-400 text-center">{img.caption}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Downloads ────────────────────────────────────────────────────── */}
        <section>
          <SectionHeading>Downloads</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {DOWNLOADS.map((file, idx) => (
              <a
                key={idx}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-alpine-green transition group"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={file.image}
                    alt={file.title}
                    className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-alpine-green transition text-sm">
                      {file.title}{file.titleBold && <strong>{file.titleBold}</strong>}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{file.subtitle}</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-alpine-green transition flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            More resources added regularly. Contact us if you need something specific.
          </p>
        </section>

        {/* ── Contact ──────────────────────────────────────────────────────── */}
        <section>
          <SectionHeading>Your Contacts at Appetite Journeys</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: 'Kevin Gilbert',
                role: 'Co-founder & Culinary Director',
                email: 'hello@appetitejourneys.nz',
                phone: '+64 (0)27 485 9001',
                note: 'Tour content, itinerary questions, culinary expertise',
                image: '/images/kevin.jpg',
              },
              {
                name: 'Esther Gilbert',
                role: 'Co-founder & Tour Director',
                email: 'hello@appetitejourneys.nz',
                phone: '+64 (0)27 353 6303',
                note: 'Bookings, availability, agent support, general enquiries',
                image: '/images/esther.jpg',
              },
            ].map((contact, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-1">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{contact.name}</h3>
                    <p className="text-sm text-alpine-green font-medium">{contact.role}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-alpine-green transition"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-alpine-green transition"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {contact.phone}
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">{contact.note}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AgentDashboard;