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
  <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 mb-6 shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Client Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Don't just take our word for it — hear from businesses we've helped grow
          </p>
        </div>

        {/* Ultra-Premium Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-blue-300 mb-6" />
                
                {/* Premium Rating */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  "{testimonial.text}"
                </p>

                {/* Enhanced Client Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="font-display font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{testimonial.name}</div>
                  <div className="text-sm font-medium text-gray-500 mt-1">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
