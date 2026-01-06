import React, { useEffect, useRef, useState } from "react";
import { FileSearch, Eye, FileText, ArrowRight, CheckCircle, ClipboardCheck, Send, Lightbulb } from "lucide-react";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) setIsVisible(true);
            if (entry.target === benefitsRef.current) setBenefitsVisible(true);
            if (entry.target.dataset.step) {
              setVisibleSteps((prev) => new Set([...prev, entry.target.dataset.step]));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "50px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    stepRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });

    return () => observer.disconnect();
  }, []);

  const auditBenefits = [
    { icon: Eye, text: "Why visitors aren''t taking action" },
    { icon: Lightbulb, text: "Where you''re losing potential customers" },
    { icon: CheckCircle, text: "What to fix first for maximum impact" }
  ];

  const steps = [
    {
      num: "01",
      icon: Send,
      title: "Request a conversion audit",
      desc: "Fill out a simple form telling us about your business and website.",
      color: "indigo"
    },
    {
      num: "02",
      icon: FileSearch,
      title: "We review your conversion flow",
      desc: "Our team analyzes your entire customer journey to identify gaps.",
      color: "purple"
    },
    {
      num: "03",
      icon: ClipboardCheck,
      title: "Receive your improvement plan",
      desc: "A prioritized roadmap showing exactly what to fix and why.",
      color: "emerald"
    }
  ];

  const colorClasses = {
    indigo: { bg: "bg-indigo-600", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    purple: { bg: "bg-purple-600", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    emerald: { bg: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" }
  };

  return (
    <section ref={sectionRef} id="process" className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-200 rounded-full text-sm font-semibold text-indigo-600 mb-5 shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <FileSearch className="w-4 h-4" />
            The Conversion Audit
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-gray-900">
            Request a{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Conversion Audit
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            If you already know your website isn''t converting the way it should, we can help.
          </p>
        </div>

        {/* Benefits with animation */}
        <div 
          ref={benefitsRef}
          className={`bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8 md:p-10 mb-12 md:mb-16 transition-all duration-700 hover:shadow-xl ${
            benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 text-center">
            Our conversion audit helps you understand:
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {auditBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex items-start gap-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 sm:p-5 border border-indigo-100 hover:shadow-md hover:scale-105 transition-all duration-300 ${
                    benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + idx * 100}ms` }}
                >
                  <Icon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5 gentle-float" style={{ animationDelay: `${idx * 0.3}s` }} />
                  <span className="text-gray-700 font-medium text-[15px]">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Steps with staggered animation */}
        <div className="mb-12 md:mb-16">
          <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`} style={{ transitionDelay: "300ms" }}>
            How it works
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              const isStepVisible = visibleSteps.has(String(idx));
              return (
                <div 
                  key={idx}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  data-step={idx}
                  className={`group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1 ${
                    isStepVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center gap-4 sm:gap-0">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <span className={`sm:hidden text-2xl font-bold ${colors.text}`}>{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`hidden sm:block text-sm font-bold ${colors.text} ${colors.light} px-2.5 py-1 rounded-full transition-all duration-300 ${
                        isStepVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`} style={{ transitionDelay: `${idx * 150 + 200}ms` }}>Step {step.num}</span>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 text-[15px]">{step.desc}</p>
                  </div>
                  
                  {/* Progress line */}
                  {idx < steps.length - 1 && (
                    <div className={`hidden sm:block absolute left-7 top-full w-0.5 h-4 bg-gradient-to-b ${colors.bg} opacity-30`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Note with animation */}
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`} style={{ transitionDelay: "600ms" }}>
          <p className="text-base sm:text-lg text-gray-600 italic">
            Designed for serious business owners who are ready to take action.
          </p>
        </div>

        {/* CTA with animation */}
        <div className={`text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "700ms" }}>
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 font-bold text-base sm:text-lg hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Request Your Conversion Audit</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform relative" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Free for qualified businesses
          </p>
        </div>
      </div>
    </section>
  );
}
