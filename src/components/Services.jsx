import React from "react";
import { Globe, Search, MapPin, Target, Palette, Megaphone } from "lucide-react";

export default function Services() {
  const services = [
    { 
      icon: Globe, 
      title: "Web Development", 
      desc: "Responsive, modern websites optimized for conversions and user experience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Search, 
      title: "SEO Optimization", 
      desc: "Rank higher on Google and attract quality organic traffic to your business.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: MapPin, 
      title: "Google Business Profile", 
      desc: "Get visible on Google Maps and dominate local search results.",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      icon: Target, 
      title: "Meta Ads Management", 
      desc: "Strategic ad campaigns on Facebook & Instagram for maximum ROI.",
      gradient: "from-green-500 to-emerald-500"
    },
    
  ];

  return (
  <section id="services" className="py-12 md:py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Everything Your Business <span className="gradient-text">Needs to Grow</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital solutions tailored for your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, idx) => (
            <div 
              key={service.title}
              className="group glass rounded-2xl p-8 hover-lift card-shine relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-semibold"
          >
            Get a Custom Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
