import React, { useState } from "react";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tour: "",
    departureDate: "",
    travellers: "1",
    dietary: "",
    message: "",
    roomOption: "",
    travelPartnerName: "",
    emergencyContact: "",
    birthDate: "",
    passportNumber: "",
    passportExpiry: "",
    passportCountry: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Example: EmailJS, form backend, or API endpoint
    // Replace this with actual submission logic later.
    console.log("Booking submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-serif text-alpine-green mb-3">Thank you!</h1>
        <p className="text-slate-700 max-w-md">
          Your booking enquiry has been received. Our team will be in touch shortly to confirm details and next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 sm:p-10">
        <h1 className="text-3xl font-serif font-bold text-alpine-green text-center mb-6">
          Book Your Swiss Journey
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tour</label>
              <select
                name="tour"
                value={formData.tour}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              >
                <option value="">Select a tour</option>
                <option>Cheese, Chocolate & Riviera</option>
                <option>Waterfalls & Whiskey</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Number of Travellers</label>
            <select
              name="travellers"
              value={formData.travellers}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Dietary Requirements</label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="e.g. Vegetarian, Gluten Free"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              placeholder="Any special requests or comments?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-alpine-green text-white font-semibold py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
          >
            Submit Booking Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
