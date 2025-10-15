import React from "react";
import { Link } from "react-router-dom";
import { CalendarHeart } from "lucide-react";

const BookNowButton: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => {
  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "lg"
      ? "px-8 py-4 text-lg"
      : "px-6 py-3 text-base";

  return (
    <Link
      to="/book"
      className={`inline-flex items-center justify-center gap-2 bg-alpine-green text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ${sizeClasses}`}
    >
      <CalendarHeart className="w-5 h-5" />
      Book Now
    </Link>
  );
};

export default BookNowButton;
