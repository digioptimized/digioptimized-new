import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import PercentCounter from "./PercentCounter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 pt-24 overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 fade-in-up">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Launch in Just 7 Days</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 leading-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
          Transform Your Business with{" "}
          <span className="gradient-text">Stunning</span>{" "}
          <span className="gradient-text">Websites</span> 
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
          Professional web development, SEO optimization, Meta Ads & GMB setup — 
          all handled by <span className="font-display font-bold text-blue-600">Digioptimized</span>. 
          Get noticed. Get customers. Get results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 font-semibold"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio" 
            className="inline-flex items-center justify-center gap-2 glass border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all font-semibold"
          >
            View Our Work
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1 fade-in-up" style={{ animationDelay: '0.45s' }}>
                10+
              </div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">7</div>
            <div className="text-sm text-gray-600">Days Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <PercentCounter from={1} to={100} duration={1400} suffix="%" />
            </div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>

      
      
    </section>
  );
}
