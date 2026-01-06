import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Star, Sparkles } from "lucide-react";
import m2fImg from "../assets/portfolio/m2f.shop.png";
import arivuImg from "../assets/portfolio/Arivuai.png";
import amjImg from "../assets/portfolio/amj-academy.png";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const projects = [
    {
      title: "m2f.shop",
      category: "E-commerce Website",
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

  useEffect(() => {
    setCardVisible(new Array(projects.length).fill(false));
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setCardVisible(prev => {
              const newState = [...prev];
              newState[idx] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, [projects.length]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000 ${isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"}`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"}`} />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-full text-sm font-semibold text-indigo-700 mb-6 shadow-lg shadow-indigo-500/10">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Our Portfolio
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Real Results from{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Real Businesses
            </span>
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            See how we have transformed businesses like yours
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              ref={el => cardRefs.current[idx] = el}
              data-index={idx}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${
                cardVisible[idx] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Animated shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />

              {/* Project Image */}
              <div className="relative h-64 md:h-72 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      Visit Site
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105">
                      View Details
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wide rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {/* Testimonial Card */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100">
                  <div className="flex gap-1 mb-2">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 fill-yellow-400 text-yellow-400 transition-all duration-300 ${
                          cardVisible[idx] ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${idx * 150 + 400 + i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-700 mb-2">{project.testimonial}</p>
                  <p className="text-xs font-medium text-gray-600">- {project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "600ms" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-600 hover:text-white transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Start Your Project Today
            <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
