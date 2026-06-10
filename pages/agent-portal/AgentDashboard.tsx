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
    description: 'An overview of our tours, our story, and why your clients will love travelling with us.',
    duration: '2 min',
    date: 'March 2025',
    youtubeId: 'TfkcbfA6SHk',
  },
  {
    id: '2',
    title: 'Switzerland Tours Deep Dive',
    description: 'A detailed walkthrough of our Swiss itineraries — what makes each one unique and which clients they suit best.',
    duration: '20 min',
    date: 'April 2025',
    youtubeId: '1rg-UiIOyZ0',
  },
  {
    id: '3',
    title: 'New Zealand Tours Overview',
    description: 'Everything you need to know about our South Island food and wine experiences.',
    duration: '2 min',
    date: 'May 2025',
    youtubeId: '64J2NrKa4QE',
  },
];

// ─── Upcoming departures ──────────────────────────────────────────────────────
// Update this list as departures change
const DEPARTURES = [
  { tour: 'Waterfalls, Whiskey & Walnuts', date: 'August 22, 2027', status: 'available', spaces: 10 },
  { tour: 'Cheese, Chocolate & the Swiss Riviera', date: 'March 30, 2027', status: 'available', spaces: 10 },
  { tour: 'Cheese, Chocolate & the Swiss Riviera', date: 'September 5, 2027', status: 'available', spaces: 10 },
  { tour: 'Cakes, Tortes & Coffeehouses', date: 'September 25, 2027', status: 'available', spaces: 10 },
];

// ─── Downloads ────────────────────────────────────────────────────────────────
// Replace href values with real file URLs once uploaded
const DOWNLOADS = [
  { title: 'Appetite Journeys — Agent Brochure', subtitle: 'Full overview of all tours, PDF', href: '#' },
  { title: 'Waterfalls, Whiskey & Walnuts — Fact Sheet', subtitle: 'Itinerary summary, inclusions, pricing', href: '#' },
  { title: 'Cheese, Chocolate & the Swiss Riviera — Fact Sheet', subtitle: 'Itinerary summary, inclusions, pricing', href: '#' },
  { title: 'Southern Delights — Fact Sheet', subtitle: 'NZ South Island tour summary', href: '#' },
  { title: 'Cakes, Tortes & Coffeehouses — Fact Sheet', subtitle: 'Multi-country Europe tour summary', href: '#' },
  { title: 'Commission & Booking Guide', subtitle: 'Rates, booking process, payment terms', href: '#' },
];

// ─── Updates ─────────────────────────────────────────────────────────────────
const UPDATES = [
  {
    date: '8th June 2026',
    title: 'New tour announced — Slow Road to Queenstown',
    body: 'Our third New Zealand itinerary is now confirmed for 2027. Fact sheet and pricing coming soon.',
  },
  {
    date: '5th May 2026',
    title: 'Additional 2027 departure dates released',
    body: 'Due to strong demand we have added extra departures for the Cheese, Chocolate & Swiss Riviera and Waterfalls tours in 2027.',
  },
  {
    date: '12th April 2026',
    title: 'Commission structure updated',
    body: 'Standard agent commission has increased to 10% for all bookings made before 31 December 2025. See the Commission Guide for details.',
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

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-serif font-bold text-alpine-green">Agent Portal</h1>
          <p className="text-xs text-gray-500 mt-0.5">{agentEmail}</p>
        </div>
        <p className="text-2xl font-serif font-bold text-alpine-green hidden sm:block">
          {agentName ? `Welcome, ${agentName}` : ''}
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

        {/* ── Quick info cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <DollarSign className="w-5 h-5" />, label: 'Commission', value: '10%', sub: 'on all bookings' },
            { icon: <BookOpen className="w-5 h-5" />, label: 'Active Tours', value: '6', sub: 'across 3 regions' },
            { icon: <Calendar className="w-5 h-5" />, label: 'Next Departure', value: 'Sep 13', sub: 'Waterfalls & Walnuts' },
            { icon: <Play className="w-5 h-5" />, label: 'Webinars', value: `${WEBINARS.length}`, sub: 'available to watch' },
          ].map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="text-alpine-green mb-3">{card.icon}</div>
              <p className="text-xs text-gray-500 mb-1">{card.label}</p>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>
            </div>
          ))}
        </div>
        <section className="grid lg:grid-cols-2 gap-8 items-start">
        {/* ── Updates ──────────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading>News & Updates</SectionHeading>
          </div>
          
          <div className="space-y-4">
            {UPDATES.map((update, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{update.date}</p>
                    <h3 className="font-semibold text-gray-800 mb-1">{update.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{update.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        

        {/* ── Upcoming departures ───────────────────────────────────────────── */}
       <div>
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading>Upcoming Departures</SectionHeading>
          </div>
          
          <div className="space-y-4">
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
          </div>
          
        </section>

        {/* ── Commission & booking ──────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading>Commission & Booking</SectionHeading>
          </div>
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
                  <span className="font-semibold">After final payment received</span>
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
                <li>Client completes the online booking form</li>
                <li>20% non-refundable deposit secures the place</li>
                <li>Final balance due 90 days before departure</li>
                <li>Commission paid within 30 days of final payment</li>
              </ol>
              <a
                href="mailto:info@appetitejourneys.com"
                className="inline-flex items-center gap-2 text-sm text-alpine-green font-semibold hover:underline mt-2"
              >
                <Mail className="w-4 h-4" />
                Email us to make a booking
              </a>
            </div>
          </div>
        </section>

        {/* ── Webinar library ───────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading>Webinar Library</SectionHeading>
          </div>
          <p className="text-gray-500 mb-8 -mt-4">
            Watch at your own pace. All recordings are available anytime.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WEBINARS.map(webinar => (
              <div
                key={webinar.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/agent-portal/webinar/${webinar.id}`)}
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={`https://img.youtube.com/vi/${webinar.youtubeId}/maxresdefault.jpg`}
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
        </section>

        {/* ── Downloads ─────────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading>Downloads</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {DOWNLOADS.map((file, idx) => (
              <a
                key={idx}
                href={file.href}
                className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-alpine-green transition group"
              >
                <div>
                  <p className="font-medium text-gray-800 group-hover:text-alpine-green transition text-sm">
                    {file.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{file.subtitle}</p>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-alpine-green transition flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            More resources added regularly. Contact us if you need something specific.
          </p>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────────── */}
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
              },
              {
                name: 'Esther Gilbert',
                role: 'Co-founder & Tour Director',
                email: 'hello@appetitejourneys.nz',
                phone: '+64 (0)27 353 6303',
                note: 'Bookings, availability, agent support, general enquiries',
              },
            ].map((contact, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 text-lg">{contact.name}</h3>
                <p className="text-sm text-alpine-green font-medium mb-4">{contact.role}</p>
                <div className="space-y-2">
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