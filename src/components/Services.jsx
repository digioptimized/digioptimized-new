import React, { useEffect, useRef, useState } from "react";
import { Globe, Search, Target, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  const services = [
    {
      icon: Target,
      title: "Conversion Audits & Strategy",
      desc: "Identify exactly where you''re losing potential customers.",
      bullets: [
        "Website & traffic analysis",
        "Conversion gap identification",
        "Actionable improvement roadmap"
      ],
      color: "emerald"
    },
    {
      icon: Globe,
      title: "Conversion-Focused Website Design",
      desc: "We build websites that don''t just look good � they sell.",
      bullets: [
        "SEO-optimized structure",
        "Clear messaging & positioning",
        "Mobile-first, fast-loading pages",
        "Conversion-driven layouts"
      ],
      color: "indigo"
    },
    {
      icon: Search,
      title: "SEO for Small Businesses",
      desc: "Get found by customers actively searching for your services.",
      bullets: [
        "High-intent service keywords",
        "Local SEO & Google Business Profile",
        "Content that ranks and converts"
      ],
      color: "purple"
    },
    {
      icon: Zap,
      title: "Lead Capture & Automation",
      desc: "Turn visitors into leads automatically � even while you sleep.",
      bullets: [
        "Forms & booking systems",
        "WhatsApp / email follow-ups",
        "Simple, scalable workflows"
      ],
      color: "amber"
    }
  ];

  const colorClasses = {
    indigo: { bg: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", hover: "hover:border-indigo-200", shadow: "group-hover:shadow-indigo-200/50" },
    purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", hover: "hover:border-purple-200", shadow: "group-hover:shadow-purple-200/50" },
    emerald: { bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", hover: "hover:border-emerald-200", shadow: "group-hover:shadow-emerald-200/50" },
    amber: { bg: "bg-amber-500", light: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", hover: "hover:border-amber-200", shadow: "group-hover:shadow-amber-200/50" }
  };

  return (
    <section ref={sectionRef} id="services" className="py-12 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-100 rounded-full text-sm font-semibold text-indigo-600 mb-5 shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight text-gray-900">
            Services Built for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Conversion
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Every service exists to support conversion � not vanity metrics.
          </p>
        </div>

        {/* Services Grid with staggered animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];
            const isCardVisible = visibleCards.has(String(idx));
            return (
              <div 
                key={service.title}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
                className={`group relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 ${colors.hover} hover:shadow-xl ${colors.shadow} transition-all duration-500 hover:-translate-y-2 ${
                  isCardVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Icon with hover animation */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-5 text-[15px]">{service.desc}</p>

                {/* Features with staggered reveal */}
                <ul className="space-y-2.5">
                  {service.bullets.map((bullet, i) => (
                    <li 
                      key={i} 
                      className={`flex items-start gap-3 transition-all duration-300 ${
                        isCardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${(idx * 150) + (i * 75)}ms` }}
                    >
                      <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-700 text-[15px]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-bl-[100px] opacity-50 -z-10 group-hover:opacity-70 transition-opacity`} />
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA with animation */}
        <div className={`mt-12 md:mt-16 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "600ms" }}>
          <a 
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 font-semibold hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
          </a>
        </div>
      </div>
    </section>
  );
}
