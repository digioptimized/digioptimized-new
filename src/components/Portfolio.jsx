import React from "react";
import { ExternalLink, Star } from "lucide-react";
import m2fImg from "../assets/portfolio/m2f.shop.png";
import arivuImg from "../assets/portfolio/Arivuai.png";
import amjImg from "../assets/portfolio/amj-academy.png";

export default function Portfolio() {
  const projects = [
    {
      title: "m2f.shop",
      category: "E‑commerce Website", 
      image: m2fImg,
      testimonial: "A fast, conversion-focused store built to scale.",
      client: "m2f.shop",
      rating: 5,
      url: "https://m2f.shop"
    },
    {
      title: "ArivuAI",
      category: "AI Services Website",
      image: arivuImg,
      testimonial: "Modern look and clear messaging for AI services.",
      client: "ArivuAI",
      rating: 5,
      url: "http://arivuai.in"
    },
    {
      title: "AMJ Academy",
      category: "Education / LMS",
      image: amjImg,
      testimonial: "An intuitive learning platform with fast onboarding.",
      client: "AMJ Academy",
      rating: 5,
      url: "http://amjacademy.in"
    }
  ];

  return (
  <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 mb-6 shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Our Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            See how we've transformed businesses like yours
          </p>
        </div>

        {/* Ultra-Modern Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Project Image with Enhanced Overlay */}
              <div className="relative h-72 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105">
                      Visit Site
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105">
                      View Details
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Enhanced Project Info */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold uppercase tracking-wide rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-2xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                
                {/* Premium Testimonial Card */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 mb-3 border border-blue-100">
                  <div className="flex gap-1 mb-2">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-700 mb-2">"{project.testimonial}"</p>
                  <p className="text-xs font-medium text-gray-600">— {project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12 fade-in-up">
          <a 
            href="#contact" 
            className="inline-block glass border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all font-semibold"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
