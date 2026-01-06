import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState([]);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "What is a conversion system for small businesses?",
      answer: "A conversion system is a complete digital setup designed to turn your website visitors into paying customers. It includes optimized landing pages, clear calls-to-action, lead capture forms, and automated follow-ups—all working together to maximize your results."
    },
    {
      question: "How is Digioptimized different from a digital marketing agency?",
      answer: "Unlike traditional agencies that focus on traffic and impressions, we focus on conversions. We build systems that actually turn visitors into customers—not just vanity metrics. Our approach is results-driven, transparent, and tailored for small businesses."
    },
    {
      question: "Do I need ads or social media to get results?",
      answer: "Not necessarily. While ads can accelerate growth, our conversion systems work with your existing traffic too. We optimize what you already have before recommending additional investment in paid channels."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients start seeing improvements within 2-4 weeks after implementation. However, full optimization typically takes 60-90 days as we test, refine, and scale what works best for your specific business."
    },
    {
      question: "I don't have a website. Can you still help?",
      answer: "Absolutely! We can build you a conversion-optimized website from scratch. In fact, starting fresh often allows us to implement best practices from day one without having to fix existing issues."
    },
    {
      question: "How do I get started with Digioptimized?",
      answer: "Simply click the 'Get Your Conversion Audit' button to schedule a free consultation. We'll analyze your current setup, identify opportunities, and create a custom plan to help your business convert more visitors into customers."
    },
  ];

  useEffect(() => {
    setCardVisible(new Array(faqs.length).fill(false));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the FAQ items
          faqs.forEach((_, idx) => {
            setTimeout(() => {
              setCardVisible(prev => {
                const newState = [...prev];
                newState[idx] = true;
                return newState;
              });
            }, idx * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [faqs.length]);

  return (
    <section ref={sectionRef} id="faq" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-1/4 right-0 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`} />
        <div className={`absolute bottom-1/4 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className={`text-lg text-gray-600 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Got questions? We have got answers!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden ${
                cardVisible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${openIndex === idx ? "ring-2 ring-indigo-500/20" : ""}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-indigo-50/50 transition-colors group"
              >
                <span className="font-bold text-base md:text-lg pr-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === idx ? "bg-indigo-600 rotate-180" : "bg-indigo-100 group-hover:bg-indigo-200"
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === idx ? "text-white" : "text-indigo-600"}`} />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <div className="h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent mb-4" />
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
