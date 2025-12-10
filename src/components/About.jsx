import React from "react";
import { Rocket, BarChart3, Globe, Award } from "lucide-react";

export default function About() {
  const features = [
    { 
      icon: Rocket, 
      title: "Lightning Fast Delivery", 
      desc: "Get your professional website live in just 7 days",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: BarChart3, 
      title: "Proven Track Record", 
      desc: "30+ successful projects delivered with excellence",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Globe, 
      title: "Global Standards", 
      desc: "Built with modern tech and SEO best practices",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Award, 
      title: "Client Satisfaction", 
      desc: "100% satisfaction rate across all our projects",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
  <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 mb-6 shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            About Digioptimized
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">
            Who We Are &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            <span className="font-display font-bold text-blue-600">Digioptimized</span> is Chennai's leading results-driven digital agency 
            empowering small businesses to thrive online. From stunning websites to marketing that converts — 
            we deliver with speed, quality, and care.
          </p>
        </div>

        {/* Premium Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={feature.title}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
