import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Rocket, ArrowRight, Phone, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Always keep navbar visible
    setIsVisible(true);
    setLastScrollY(currentScrollY);
    
    // Background change
    setScrolled(currentScrollY > 20);
    
    // Update active section
    const sections = ["home", "about", "services", "testimonials", "faq", "contact"];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Keyboard navigation
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }

    
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 top-0 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-100" 
            : "bg-white/80 backdrop-blur-md lg:bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group"
              aria-label="Digioptimized - Home"
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-indigo-500/25">
                  <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg lg:text-xl text-gray-900 leading-tight">Digioptimized</span>
                <span className="text-[10px] lg:text-xs text-gray-500 font-medium tracking-wide hidden sm:block">Conversion Systems</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-gray-100/80 backdrop-blur-sm rounded-full p-1.5">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "text-white bg-gray-900 shadow-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/80"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 -z-10" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="tel:+918438689782"
                className="flex items-center gap-2 px-4 py-2.5 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="hidden xl:inline">Call Us</span>
              </a>
              <a 
                href="#contact" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get Audit</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setOpen(!open)} 
              className="lg:hidden relative p-2.5 -mr-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? "top-3 rotate-45" : "top-1"}`} />
                <span className={`absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0 translate-x-2" : "opacity-100"}`} />
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? "top-3 -rotate-45" : "top-5"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[300px] sm:w-[320px] bg-white z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">Menu</span>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item, idx) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span>{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                  )}
                </a>
              ))}
            </div>

            {/* Contact Info in Mobile */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">Contact Us</p>
              <a 
                href="mailto:digioptimized@gmail.com" 
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <span className="text-sm">digioptimized@gmail.com</span>
              </a>
              <a 
                href="tel:+918438689782" 
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm">+91 8438689782</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
              onClick={() => setOpen(false)}
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-gray-500 mt-3">No commitment required</p>
          </div>
        </div>
      </div>
    </>
  );
}
