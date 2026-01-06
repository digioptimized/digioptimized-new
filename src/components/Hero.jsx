import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Play, Star, TrendingUp, Shield } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 80,
          y: (e.clientY - rect.top - rect.height / 2) / 80
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "3x", label: "Avg. Conversion Lift" },
    { value: "100%", label: "Satisfaction Rate" }
  ];

  const trustPoints = [
    { icon: CheckCircle, text: "No guesswork" },
    { icon: Shield, text: "No generic templates" },
    { icon: TrendingUp, text: "Only systems built to convert" }
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        
        {/* Floating gradient orbs */}
        <div 
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/40 to-purple-200/30 rounded-full blur-3xl"
          style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl"
          style={{ transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-indigo-100/30 via-transparent to-transparent rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
      {/* Main Headline */}
        <div className="text-center mb-6 md:mb-8">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <span className="text-gray-900 block mb-2">We Build</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Conversion Systems
              </span>
            </span>
            <span className="text-gray-900 block mt-2">That Actually Work</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Stop losing visitors. We design <span className="text-indigo-600 font-semibold">conversion-first websites</span> and <span className="text-indigo-600 font-semibold">SEO systems</span> that guide your visitors step-by-step to become paying customers.
          </p>
        </div>

        {/* Trust Points */}
        <div 
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          {trustPoints.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 hover:bg-white transition-all duration-300 group"
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          {/* Primary CTA */}
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold text-base rounded-full hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Get Your Conversion Audit</span>
            <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Secondary CTA */}
          <a 
            href="#portfolio" 
            className="group inline-flex items-center gap-3 px-6 py-4 text-gray-700 font-medium hover:text-indigo-600 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-gray-100">
              <Play className="w-5 h-5 text-indigo-600 ml-0.5" />
            </div>
            <span>See Our Work</span>
          </a>
        </div>

        {/* Stats Row */}
        <div 
          className={`flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2 hover:border-indigo-400 transition-colors cursor-pointer">
          <div className="w-1.5 h-2.5 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
