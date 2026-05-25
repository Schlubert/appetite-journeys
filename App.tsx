import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import CheeseChocolateTrail from './pages/CheeseChocolateRiviera';
import WaterfallsPage from './pages/WaterfallsWalnuts';
import ToursPage from "./pages/ToursPage";
import ChristmasTrailPage from "./pages/ChristmasTrail";
import Cake from "./pages/Cake";
import TravelPartnersPage from "./pages/zzzTravelPartnersPage";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BookingForm from "./pages/BookingForm";
import GatewayPage from "./pages/GatewayPage";
import NewZealand from "./pages/NewZealand";
import SouthernDelights from "./pages/tours/SouthernDelights";
import SlowRoad from './pages/tours/SlowRoad';
import DineEdin from './pages/tours/DineEdin';
import RegionPage from './pages/RegionPage';
import SwitzerlandAboutPage from './pages/about/SwitzerlandAboutPage';
import EuropeAboutPage from './pages/about/EuropeAboutPage';
import NewZealandAboutPage from './pages/about/NewZealandAboutPage';

function App(): React.ReactNode {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GatewayPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tours/cheese-chocolate-trail" element={<CheeseChocolateTrail />} />
        <Route path="/tours/waterfalls" element={<WaterfallsPage />} />
        <Route path="/tours/christmas-trail" element={<ChristmasTrailPage />} />
        <Route path="/tours/cake" element={<Cake />} />
        <Route path="/tours" element={<ToursPage />} />        
        <Route path="/new-zealand" element={<NewZealand />} />        
        <Route path="/travel-partners" element={<TravelPartnersPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/gateway-preview" element={<GatewayPage />} />
        <Route path="/tours/southern-delights" element={<SouthernDelights />} />
        <Route path="/tours/slow-road" element={<SlowRoad />} />
        <Route path="/tours/dine-edin" element={<DineEdin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/switzerland" element={<SwitzerlandAboutPage />} />
        <Route path="/about/europe" element={<EuropeAboutPage />} />
        <Route path="/about/new-zealand" element={<NewZealandAboutPage />} />

        {/* Catch-all for dynamic regions (switzerland, europe, etc.) */}
        <Route path="/:region" element={<RegionPage />} />
      </Routes>
    </Layout>
  );
}

export default App;