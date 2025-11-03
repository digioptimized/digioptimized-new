import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sanjay Kumar",
      role: "E-commerce Owner",
      rating: 5,
      text: "Digioptimized transformed my online store completely! Sales tripled in just 2 months. The team is professional, creative, and truly cares about results."
    },
    {
      name: "Priya Sharma",
      role: "Tech Startup Founder",
      rating: 5,
      text: "Best decision ever! Our website looks stunning and the SEO results are incredible. We're ranking on page 1 for all our key terms. Highly recommend!"
    },
    {
      name: "Amit Reddy",
      role: "Restaurant Owner",
      rating: 5,
      text: "The GMB setup and local SEO brought us so many new customers. We're now the top-rated restaurant in our area. Thank you Digioptimized!"
    },
  ];

  return (
  <section id="testimonials" className="py-12 md:py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it — hear from businesses we've helped grow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="glass rounded-2xl p-8 hover-lift relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Client Info (photo removed; showing name and role) */}
              <div className="mt-4">
                <div className="font-display font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
