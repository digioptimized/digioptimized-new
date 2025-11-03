import React from "react";
import { Eye, Calendar, Monitor, Code, Megaphone, LifeBuoy, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Eye,
      title: "O — Observe",
      desc: "We start by understanding your business, goals, and target audience. We don’t just build websites; we build around your brand’s purpose.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "P — Plan",
      desc: "Our team creates a clear strategy for your design, content, and timeline. A perfect plan ensures fast delivery within 7 days.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "T — Transform",
      desc: "We convert your ideas into a modern, visually stunning web design. Your vision starts taking digital shape here.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "I — Implement",
      desc: "Our developers bring the design to life with clean, optimized code. Every click, every scroll, built for performance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: "M — Market",
      desc: "We integrate SEO, Google My Business, and Meta Ads setup to help you grow. Because a website should work for your business, not just look good.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: LifeBuoy,
      title: "A — Assist",
      desc: "After delivery, we stay with you for updates and performance tracking. Your growth journey continues with DigiOptimized.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
  <section id="process" className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            The OPTIMA Process — Our 6-Step Success Formula
          </h2>
          <p className="text-lg text-gray-600">
            "Every project we take goes through OPTIMA — our signature process built to deliver success, fast."
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={step.title}
              className="relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                    <step.icon className="w-12 h-12 text-white" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center font-display font-bold text-blue-600">
                      {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 glass rounded-2xl p-6 hover-lift">
                  <h3 className="font-display font-bold text-2xl mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-blue-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in-up">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-semibold"
          >
            Start Your 7-Day Journey
            <Rocket className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
