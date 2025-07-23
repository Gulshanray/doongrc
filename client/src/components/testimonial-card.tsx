import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex space-x-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>
      <p className="text-gray-600 italic mb-4">"{testimonial.message}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold mr-3">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold brand-dark">{testimonial.name}</div>
          <div className="text-gray-500 text-sm">
            {testimonial.profession}, {testimonial.location}
          </div>
        </div>
      </div>
    </div>
  );
}
