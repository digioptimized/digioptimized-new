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
  <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 mb-6 shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">
            Everything Your Business{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Needs to Grow
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Comprehensive digital solutions tailored for your success
          </p>
        </div>

        {/* Ultra-Modern Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, idx) => (
            <div 
              key={service.title}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
              
              {/* Icon */}
              <div className="relative z-10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
                
                {/* Hover arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="text-center fade-in-up">
          <a
            href="https://forms.gle/sUr1uxnakHbk4Tyv8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-12 py-6 rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 font-bold text-lg overflow-hidden"
          >
            <span className="relative z-10">Get a Custom Quote</span>
            <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
