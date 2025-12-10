import React, { useEffect, useState } from "react";
import { Sparkles, ArrowRight, Play, TrendingUp, Award, Zap } from "lucide-react";
import PercentCounter from "./PercentCounter";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"
    >
      {/* Ultra-Modern Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Mesh */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 50%)`,
            transition: 'background 0.3s ease',
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
      </div>

      <div className="max-w-7xl w-full z-10 space-y-12">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full shadow-lg shadow-blue-500/10 backdrop-blur-sm mb-8 fade-in-up hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <div className="absolute inset-0 bg-blue-400 blur-md opacity-50" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🚀 Launch Your Dream Website in 7 Days
          </span>
        </div>

        {/* Hero Headline - Ultra Modern */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1] tracking-tight fade-in-up">
            <span className="block mb-2">Transform Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
            <span className="block mt-2 text-gray-800">Into Revenue</span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed font-light fade-in-up" style={{ animationDelay: '0.15s' }}>
            Premium <span className="font-semibold text-blue-600">web development</span>, 
            <span className="font-semibold text-cyan-600"> SEO mastery</span>, and 
            <span className="font-semibold text-purple-600"> performance marketing</span> — 
            all delivered by Chennai's leading digital agency.
          </p>
        </div>

        {/* Dual Premium CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center fade-in-up" style={{ animationDelay: '0.25s' }}>
          {/* Primary CTA */}
          <a 
            href="https://forms.gle/sUr1uxnakHbk4Tyv8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-10 py-5 rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 font-bold text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>

          {/* Secondary CTA */}
          <a 
            href="#portfolio" 
            className="group inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-10 py-5 rounded-2xl hover:bg-white shadow-lg hover:shadow-xl transition-all font-bold text-lg"
          >
            <Play className="w-5 h-5 fill-current" />
            View Our Work
          </a>
        </div>

        {/* Modern Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto fade-in-up" style={{ animationDelay: '0.35s' }}>
          {/* Stat 1 */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4 mx-auto shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm font-medium text-gray-600">Projects Delivered</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                7
              </div>
              <div className="text-sm font-medium text-gray-600">Days Delivery</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-4 mx-auto shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                <PercentCounter from={1} to={100} duration={1400} suffix="%" />
              </div>
              <div className="text-sm font-medium text-gray-600">Satisfaction Rate</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 mx-auto shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm font-medium text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Social Proof - Client Trust Badges */}
        <div className="mt-16 fade-in-up" style={{ animationDelay: '0.45s' }}>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Trusted by Leading Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Client Badges */}
            <div className="group px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">m2f.shop</span>
            </div>
            <div className="group px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ArivuAI</span>
            </div>
            <div className="group px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">AMJ Academy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
