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
  <section id="about" className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Who We Are & <span className="gradient-text">What We Do</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-display font-bold text-blue-600">Digioptimized</span> is a results-driven digital agency 
            empowering small businesses to thrive online. From stunning websites to marketing that converts — 
            we deliver with speed, quality, and care.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={feature.title}
              className="group glass rounded-2xl p-6 hover-lift card-shine"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
