import React, { useEffect, useRef, useState } from "react";
import { Mail, Instagram, Linkedin, ArrowRight, Rocket, Heart } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Conversion Audits", href: "#services" },
    { name: "Website Design", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Lead Automation", href: "#services" }
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:digioptimized@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/digioptimized", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/digioptimized/", label: "LinkedIn" }
  ];

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white">
      {/* CTA Section with animation */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Your traffic is valuable.
              </h2>
              <p className="text-indigo-100 text-base sm:text-lg">
                Your business deserves a system that converts.
              </p>
            </div>
            <a 
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-indigo-100/50 to-transparent" />
              <span className="relative">Get Your Conversion Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand with animation */}
          <div className={`col-span-2 md:col-span-1 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "100ms" }}>
            <a href="#home" className="flex items-center gap-2.5 font-bold text-xl text-white mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-500 group-hover:rotate-12 transition-all duration-300">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="group-hover:text-indigo-400 transition-colors">Digioptimized</span>
            </a>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Conversion Systems for Small Businesses. Helping businesses turn traffic into customers.
            </p>
            {/* Social with animation */}
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{ transitionDelay: `${200 + idx * 100}ms` }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links with animation */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "200ms" }}>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className={`text-gray-400 hover:text-white text-sm transition-all hover:translate-x-1 inline-block ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${300 + idx * 50}ms` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services with animation */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "300ms" }}>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              {services.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className={`text-gray-400 hover:text-white text-sm transition-all hover:translate-x-1 inline-block ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${400 + idx * 50}ms` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with animation */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "400ms" }}>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+918438689782" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                  +91 8438689782
                </a>
              </li>
              <li>
                <a href="mailto:digioptimized@gmail.com" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                  digioptimized@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/digioptimized" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                  @digioptimized
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom with animation */}
        <div className={`mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`} style={{ transitionDelay: "500ms" }}>
          <p className="text-gray-500 text-sm flex items-center gap-1">
             {currentYear} Digioptimized. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a 
              href="#legal/privacy" 
              onClick={(e) => { e.preventDefault(); window.location.hash = '#legal/privacy'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href="#legal/terms" 
              onClick={(e) => { e.preventDefault(); window.location.hash = '#legal/terms'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
