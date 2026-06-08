import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { ChevronLeft } from 'lucide-react';

const WEBINARS: Record<string, { title: string; description: string; youtubeId: string }> = {
  '1': {
    title: 'Introduction to Appetite Journeys',
    description: 'An overview of our tours, our story, and why your clients will love travelling with us.',
    youtubeId: 'TfkcbfA6SHk',
  },
  '2': {
    title: 'Switzerland Tours Deep Dive',
    description: 'A detailed walkthrough of our Swiss itineraries — what makes each one unique and which clients they suit best.',
    youtubeId: '1rg-UiIOyZ0',
  },
  '3': {
    title: 'New Zealand Tours Overview',
    description: 'Everything you need to know about our South Island food and wine experiences.',
    youtubeId: '64J2NrKa4QE',
  },
};

const AgentWebinar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const webinar = id ? WEBINARS[id] : null;

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate('/agent-portal');
    };
    checkSession();
  }, [navigate]);

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Webinar not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <button
          onClick={() => navigate('/agent-portal/dashboard')}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-alpine-green transition mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to library
        </button>

        <h1 className="text-3xl font-serif font-bold text-alpine-green mb-3">
          {webinar.title}
        </h1>
        <p className="text-gray-500 mb-8">{webinar.description}</p>

        {/* YouTube embed */}
        <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${webinar.youtubeId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={webinar.title}
/>
        </div>

      </div>
    </div>
  );
};

export default AgentWebinar;