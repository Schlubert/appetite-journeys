import React, { useState, useMemo } from "react";

// --- Tour Data Structure ---
interface Tour {
  id: string;
  name: string;
  dates: string[];
}

const TOURS: Tour[] = [
  {
    id: 'cheese-chocolate',
    name: 'Cheese, Chocolate & the Swiss Riviera',
    dates: ['September 27, 2026'],
  },
  {
    id: 'waterfalls-whiskey',
    name: 'Waterfalls, walnuts & whiskey',
    dates: ['September 13, 2026'],
  },
  
];

// --- Configuration: Which fields are required ---
const REQUIRED_FIELDS = {
  fullName: true,
  email: true,
  phone: true,
  tour: true,
  departureDate: true,
  travellers: true,
  message: false,
  roomOption: true,
  otherTravelerNames: true, // Required when travellers > 1
  emergencyContact: true,
  emergencyPhone: true,

};

// --- Form Data Interface ---
interface FormData {
    fullName: string;
    email: string;
    phone: string;
    tour: string;
    departureDate: string;
    travellers: string;
    message: string;
    roomOption: string;
    otherTravelerNames: string[];
    emergencyContact: string;
    emergencyPhone: string;
    birthDate: string;
    passportNumber: string;
    passportExpiry: string;
    passportCountry: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    tour: "",
    departureDate: "",
    travellers: "1",
    message: "",
    roomOption: "",
    otherTravelerNames: [],
    emergencyContact: "",
    emergencyPhone: "",
    birthDate: "",
    passportNumber: "",
    passportExpiry: "",
    passportCountry: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // --- HANDLER FOR DYNAMIC TRAVELER NAMES ---
  const handleOtherTravellerChange = (index: number, value: string) => {
    setFormData(prevData => {
      const newNames = [...prevData.otherTravelerNames];
      newNames[index] = value;
      return { 
        ...prevData, 
        otherTravelerNames: newNames 
      };
    });
  };

  // --- MODIFIED GENERAL CHANGE HANDLER ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'tour') {
      setFormData(prevData => ({
        ...prevData,
        tour: value,
        departureDate: "",
      }));
    } else if (name === 'travellers') {
        const newCount = parseInt(value);
        const currentNames = formData.otherTravelerNames;
        
        // Create a new array of the correct size, preserving existing names if possible
        const newNames = Array(newCount - 1).fill('').map((_, i) => currentNames[i] || '');
        
        // Reset room option if changing to single traveler
        const newRoomOption = newCount === 1 ? 'single' : formData.roomOption;
        
        setFormData(prevData => ({
            ...prevData,
            travellers: value,
            otherTravelerNames: newNames,
            roomOption: newRoomOption,
        }));
    } else {
      setFormData(prevData => ({ 
        ...prevData, 
        [name]: value 
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Netlify Forms submission
    const form = e.currentTarget as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString()
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  // --- Dynamic Dates Calculation ---
  const currentTourDates = useMemo(() => {
    const selectedTour = TOURS.find(tour => tour.id === formData.tour);
    return selectedTour ? selectedTour.dates : [];
  }, [formData.tour]);

  // Helper function to render required indicator
  const RequiredIndicator = () => (
    <span className="text-red-500 ml-1">*</span>
  );

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
        <h1 className="text-3xl font-serif font-bold text-alpine-green text-center mb-2">
          Book Your Swiss Journey
        </h1>
        <p className="text-sm text-slate-600 text-center mb-6">
          Fields marked with <span className="text-red-500">*</span> are required
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-5" name="booking-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="booking-form" />
          <input type="hidden" name="bot-field" />
          
          {/* Hidden field to capture all traveler names */}
          <input type="hidden" name="otherTravelerNames" value={formData.otherTravelerNames.join(', ')} />
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name (Lead Traveler)
              {REQUIRED_FIELDS.fullName && <RequiredIndicator />}
            </label>
            <input
              required={REQUIRED_FIELDS.fullName}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
                {REQUIRED_FIELDS.email && <RequiredIndicator />}
              </label>
              <input
                required={REQUIRED_FIELDS.email}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone
                {REQUIRED_FIELDS.phone && <RequiredIndicator />}
              </label>
              <input
                required={REQUIRED_FIELDS.phone}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              />
            </div>
          </div>

          {/* Tour & Departure Date */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Tour Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Tour
                {REQUIRED_FIELDS.tour && <RequiredIndicator />}
              </label>
              <select
                name="tour"
                value={formData.tour}
                onChange={handleChange}
                required={REQUIRED_FIELDS.tour}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              >
                <option value="" disabled>Select a tour</option>
                {TOURS.map(tour => (
                    <option key={tour.id} value={tour.id}>
                        {tour.name}
                    </option>
                ))}
              </select>
            </div>

            {/* Departure Date Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Departure Date
                {REQUIRED_FIELDS.departureDate && <RequiredIndicator />}
              </label>
              
              <div className="space-y-3">
                {formData.tour === "" ? (
                    <p className="text-sm text-slate-500 italic py-3 px-3 border border-slate-200 rounded-lg">
                        Please select a tour first to see available dates.
                    </p>
                ) : currentTourDates.length > 0 ? (
                  currentTourDates.map((date, index) => (
                    <label 
                      key={index}
                      className={`
                        flex items-center p-3 rounded-lg border cursor-pointer 
                        transition-colors duration-200 
                        ${formData.departureDate === date 
                          ? 'border-alpine-green bg-alpine-green/10 ring-2 ring-alpine-green shadow-inner'
                          : 'border-slate-300 hover:bg-slate-50'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="departureDate"
                        value={date}
                        required={REQUIRED_FIELDS.departureDate}
                        checked={formData.departureDate === date}
                        onChange={handleChange}
                        className="h-4 w-4 text-alpine-green focus:ring-alpine-green border-slate-300 mr-3"
                      />
                      <span className="text-slate-900 font-medium">
                        {date}
                      </span>
                    </label>
                  ))
                ) : (
                    <p className="text-sm text-red-500 italic">No available dates for this tour.</p>
                )}
              </div>
            </div>
          </div>

          {/* Number of Travellers */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Number of Travellers
              {REQUIRED_FIELDS.travellers && <RequiredIndicator />}
            </label>
            <select
              name="travellers"
              value={formData.travellers}
              onChange={handleChange}
              required={REQUIRED_FIELDS.travellers}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* --- DYNAMIC OTHER TRAVELERS NAMES SECTION --- */}
          {parseInt(formData.travellers) > 1 && (
            <div className="space-y-4 pt-3 border-t">
              <h2 className="text-xl font-serif font-bold text-slate-700">
                Other Traveler Names
                {REQUIRED_FIELDS.otherTravelerNames && <RequiredIndicator />}
              </h2>
              <p className="text-sm text-slate-600">Please provide the full name for each additional traveler in your group.</p>
              
              {[...Array(parseInt(formData.travellers) - 1)].map((_, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name of Traveler #{index + 2}
                    {REQUIRED_FIELDS.otherTravelerNames && <RequiredIndicator />}
                  </label>
                  <input
                    type="text"
                    name={`traveler-${index + 2}`}
                    value={formData.otherTravelerNames[index] || ''}
                    onChange={(e) => handleOtherTravellerChange(index, e.target.value)}
                    required={REQUIRED_FIELDS.otherTravelerNames}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
                    placeholder={`Full Name of Traveler ${index + 2}`}
                  />
                </div>
              ))}
            </div>
          )}
          
          {/* --- Room Option Selection --- */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Room Preference
              {REQUIRED_FIELDS.roomOption && <RequiredIndicator />}
            </label>
            <div className="flex space-x-4">
              {/* Only show Twin Share if travellers > 1 */}
              {parseInt(formData.travellers) > 1 && (
                <label className={`
                    flex items-center p-3 rounded-lg border cursor-pointer flex-1
                    ${formData.roomOption === 'twin' 
                      ? 'border-alpine-green bg-alpine-green/10 ring-2 ring-alpine-green' 
                      : 'border-slate-300 hover:bg-slate-50'
                    }
                `}>
                  <input
                    type="radio"
                    name="roomOption"
                    value="twin"
                    checked={formData.roomOption === 'twin'}
                    onChange={handleChange}
                    required={REQUIRED_FIELDS.roomOption}
                    className="h-4 w-4 text-alpine-green focus:ring-alpine-green border-slate-300 mr-2"
                  />
                  <span className="text-slate-900 font-medium">Twin Share</span>
                </label>
              )}

              {/* Single Occupancy Option */}
              <label className={`
                  flex items-center p-3 rounded-lg border cursor-pointer flex-1
                  ${formData.roomOption === 'single' 
                    ? 'border-alpine-green bg-alpine-green/10 ring-2 ring-alpine-green' 
                    : 'border-slate-300 hover:bg-slate-50'
                  }
              `}>
                <input
                  type="radio"
                  name="roomOption"
                  value="single"
                  checked={formData.roomOption === 'single'}
                  onChange={handleChange}
                  required={REQUIRED_FIELDS.roomOption}
                  className="h-4 w-4 text-alpine-green focus:ring-alpine-green border-slate-300 mr-2"
                />
                <span className="text-slate-900 font-medium">Single Supplement</span>
              </label>
            </div>
          </div>

          <h2 className="text-xl font-serif font-bold text-slate-700 pt-3 border-t mt-5">Essential Traveller Details</h2>

          {/* Emergency Contact */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Emergency Contact Name
                {REQUIRED_FIELDS.emergencyContact && <RequiredIndicator />}
              </label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="e.g. Jane Smith"
                required={REQUIRED_FIELDS.emergencyContact}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Emergency Contact Phone
                {REQUIRED_FIELDS.emergencyPhone && <RequiredIndicator />}
              </label>
              <input
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                placeholder="e.g. +1 555 123 4567"
                required={REQUIRED_FIELDS.emergencyPhone}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-alpine-green outline-none"
              />
            </div>
          </div>
          
          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Additional Notes
              {REQUIRED_FIELDS.message && <RequiredIndicator />}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required={REQUIRED_FIELDS.message}
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