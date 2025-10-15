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
import ScrollToTop from "./components/ScrollToTop"
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BookingForm from "./pages/BookingForm";

function App(): React.ReactNode {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tours/cheese-chocolate-trail" element={<CheeseChocolateTrail />} />
        <Route path="/tours/waterfalls" element={<WaterfallsPage />} />
        <Route path="/tours/christmas-trail" element={<ChristmasTrailPage />} />
        <Route path="/tours/cake" element={<Cake />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/book" element={<BookingForm />} />

      </Routes>
    </Layout>
  );
}

export default App;
