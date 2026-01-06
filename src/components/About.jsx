import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, Target, CheckCircle, X, Users, Sparkles, TrendingDown, DollarSign, Clock, Eye, MousePointer, Zap, ArrowRight, Shield, Award, Rocket, BarChart3, Lightbulb, Building2, Briefcase, GraduationCap, Store } from "lucide-react";

export default function About() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredProblem, setHoveredProblem] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (section) => visibleSections.has(section);

  const problems = [
    { text: "Beautiful websites that don't convert", icon: Eye, stat: "97%", statDesc: "of visitors leave without action" },
    { text: "SEO traffic with zero leads", icon: TrendingDown, stat: "3.5%", statDesc: "average conversion rate" },
    { text: "Confusing user journey", icon: MousePointer, stat: "88%", statDesc: "abandon due to poor UX" },
    { text: "Weak or missing CTAs", icon: X, stat: "70%", statDesc: "don't have clear next steps" },
    { text: "No follow-up system", icon: Clock, stat: "80%", statDesc: "of sales need 5+ touchpoints" },
    { text: "Wasted marketing budget", icon: DollarSign, stat: "$9K+", statDesc: "lost annually on avg" }
  ];

  const whoWeHelp = [
    { title: "Small & Local Businesses", desc: "Restaurants, clinics, salons", icon: Store, color: "from-blue-500 to-cyan-500" },
    { title: "Consultants & Agencies", desc: "Marketing, legal, finance", icon: Briefcase, color: "from-purple-500 to-pink-500" },
    { title: "Coaches & Creators", desc: "Life coaches, course creators", icon: GraduationCap, color: "from-orange-500 to-amber-500" },
    { title: "Startups & SaaS", desc: "Early-stage, bootstrapped", icon: Rocket, color: "from-emerald-500 to-teal-500" }
  ];

  const whyUs = [
    { title: "Conversion-First Design", desc: "Every pixel optimized for results, not aesthetics alone", icon: Target },
    { title: "Built for Small Business", desc: "No enterprise complexity, just what works", icon: Building2 },
    { title: "Simple Tech Stack", desc: "No bloated tools or unnecessary subscriptions", icon: Zap },
    { title: "SEO + CRO Combined", desc: "Traffic AND conversions, not one or the other", icon: BarChart3 },
    { title: "Personalized Systems", desc: "Custom solutions, never cookie-cutter templates", icon: Lightbulb }
  ];

  const approach = [
    { title: "Strategic Copywriting", desc: "Words that connect and convert", icon: "✍️", number: "01" },
    { title: "SEO-Driven Traffic", desc: "Get found by the right people", icon: "🔍", number: "02" },
    { title: "Conversion-Focused UX", desc: "Guide visitors to take action", icon: "🎯", number: "03" },
    { title: "Clear Calls-to-Action", desc: "Remove friction, increase clicks", icon: "🚀", number: "04" }
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: "12s", animationDelay: "4s" }} />
      </div>

      {/* THE PROBLEM SECTION */}
      <div 
        ref={(el) => (sectionRefs.current.problem = el)}
        data-section="problem"
        className="relative py-12 md:py-16 lg:py-20 bg-white"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(239,68,68,0.08) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDuration: "10s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center max-w-4xl mx-auto mb-10 transition-all duration-1000 ${
            isVisible("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-600 mb-6 shadow-sm">
              <AlertTriangle className="w-4 h-4 animate-pulse" />
              The Hidden Problem
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-gray-900">
              Most websites{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600">fail silently</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 -skew-x-3 rounded" />
              </span>
              <br className="hidden sm:block" />
              <span className="text-gray-600">not because of traffic</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
              But because they were never designed to <span className="text-gray-900 font-semibold">convert visitors into customers</span>
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {problems.map((problem, idx) => (
              <div 
                key={problem.text}
                onMouseEnter={() => setHoveredProblem(idx)}
                onMouseLeave={() => setHoveredProblem(null)}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 transition-all duration-500 cursor-pointer ${
                  isVisible("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${hoveredProblem === idx ? "border-red-200 shadow-red-100/50 shadow-xl scale-[1.02]" : "hover:shadow-xl hover:-translate-y-1"}`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  hoveredProblem === idx ? "bg-red-500 scale-110" : "bg-red-50"
                }`}>
                  <problem.icon className={`w-6 h-6 transition-colors ${hoveredProblem === idx ? "text-white" : "text-red-500"}`} />
                </div>
                
                {/* Problem Text */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {problem.text}
                </h3>
                
                {/* Stat */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-red-500">{problem.stat}</span>
                  <span className="text-sm text-gray-500">{problem.statDesc}</span>
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                  hoveredProblem === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}>
                  <ArrowRight className="w-5 h-5 text-red-500" />
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/50 to-transparent transition-opacity duration-300 ${
                  hoveredProblem === idx ? "opacity-100" : "opacity-0"
                }`} />
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className={`relative max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "800ms" }}>
            <div className="relative bg-gradient-to-br from-gray-50 to-red-50/30 rounded-2xl p-8 md:p-10 border border-gray-200 text-center shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-xs font-bold text-white shadow-lg shadow-emerald-500/25">
                THE REALITY
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Your website shouldn't just exist online
              </p>
              <p className="text-lg sm:text-xl text-gray-600 font-medium">
                It should work for your business <span className="text-emerald-600 font-bold">24/7</span>, generating leads while you sleep.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OUR SOLUTION SECTION - COMMENTED OUT
      <div 
        ref={(el) => (sectionRefs.current.solution = el)}
        data-section="solution"
        className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible("solution") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 border border-indigo-200 rounded-full text-sm font-semibold text-indigo-700 mb-6 shadow-sm">
              <Target className="w-4 h-4" />
              Our Core Solution
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-[1.1] text-gray-900">
              The Digioptimized{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Conversion System
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We don't sell isolated services. We build <span className="font-semibold text-gray-900">end-to-end systems</span> designed to convert visitors into paying customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {approach.map((item, idx) => (
              <div 
                key={item.title}
                className={`group relative transition-all duration-700 ${
                  isVisible("solution") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <div className="relative h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50 group-hover:to-purple-50/50 transition-all duration-300 rounded-2xl" />

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">{item.number}</span>
                  </div>

                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{item.title}</h3>
                  <p className="relative text-gray-500 text-sm group-hover:text-gray-600 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 ${
            isVisible("solution") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "600ms" }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-indigo-500/25">
              <Zap className="w-5 h-5 text-white" />
              <p className="text-base sm:text-lg font-bold text-white">
                All aligned toward one goal: more customers
              </p>
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
      END COMMENTED OUT */}

      {/* WHO WE HELP SECTION */}
      <div 
        ref={(el) => (sectionRefs.current.whoWeHelp = el)}
        data-section="whoWeHelp"
        className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(147,51,234,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
          <div className="absolute top-20 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/30 to-indigo-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible("whoWeHelp") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-50 border border-purple-200 rounded-full text-sm font-semibold text-purple-700 mb-6 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default">
              <Users className="w-4 h-4" />
              Perfect Fit
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight text-gray-900">
              Built specifically for
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                  growing businesses
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47.6667 2.16667 141.4 -1.9 199 5.5" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#9333ea"/>
                      <stop offset="1" stopColor="#6366f1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our conversion systems are designed for businesses ready to <span className="font-semibold text-gray-900">grow smarter, not just faster</span>
            </p>
          </div>

          {/* Who We Help Cards - Enhanced */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
            {whoWeHelp.map((item, idx) => (
              <div 
                key={item.title}
                className={`group relative transition-all duration-700 ${
                  isVisible("whoWeHelp") ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden cursor-pointer">
                  {/* Gradient Border Effect on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ margin: "-2px", padding: "2px" }} />
                  <div className="absolute inset-0 rounded-2xl bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50/80 transition-all duration-300" />
                  
                  {/* Floating Particles on Hover */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/40 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
                  </div>
                  
                  {/* Icon Container with Glow Effect */}
                  <div className="relative">
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">{item.desc}</p>
                    
                    {/* Arrow indicator on hover */}
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-semibold text-purple-600">Learn more</span>
                      <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Fit Statement */}
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible("whoWeHelp") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "600ms" }}>
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-xl overflow-hidden">
              {/* Decorative gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500" />
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
                <div className="flex items-center gap-3 px-5 py-2.5 bg-purple-50 rounded-full border border-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Have traffic but poor results? <span className="text-purple-600 font-bold">We're your fit!</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-400">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-sm">
                  Looking for viral marketing or shortcuts? — That's not us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY US SECTION */}
      <div
        ref={(el) => (sectionRefs.current.whyUs = el)}
        data-section="whyUs"
        className="relative py-12 md:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center max-w-4xl mx-auto mb-10 transition-all duration-1000 ${
            isVisible("whyUs") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-50 border border-purple-200 rounded-full text-sm font-semibold text-purple-700 mb-6">
              <Sparkles className="w-4 h-4" />
              The Difference
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Why businesses choose
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Digioptimized
              </span>
            </h2>
          </div>

          {/* Why Us Grid */}
          <div className="max-w-5xl mx-auto mb-12">
            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
              {whyUs.slice(0, 3).map((item, idx) => (
                <div 
                  key={item.title}
                  className={`group relative transition-all duration-700 ${
                    isVisible("whyUs") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${200 + idx * 100}ms` }}
                >
                  <div className="relative h-full bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-2xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Second row - 2 cards centered */}
            <div className="flex justify-center gap-4 md:gap-6">
              {whyUs.slice(3, 5).map((item, idx) => (
                <div 
                  key={item.title}
                  className={`group relative transition-all duration-700 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                    isVisible("whyUs") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  <div className="relative h-full bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-2xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Statement */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible("whyUs") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "700ms" }}>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white shadow-lg shadow-purple-500/25">
              <Shield className="w-5 h-5" />
              <p className="font-bold">
                We don't chase trends. We build systems that work long-term.
              </p>
              <Award className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
