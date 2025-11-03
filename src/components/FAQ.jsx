import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "We deliver professional websites in just 7 days! This includes design, development, content setup, and SEO optimization."
    },
    {
      question: "What's included in your web development package?",
      answer: "Every package includes responsive design, SEO optimization, mobile-friendly layout, contact forms, Google My Business setup, and 30 days of free support."
    },
    {
      question: "Do you offer website maintenance after launch?",
      answer: "Yes! We offer ongoing maintenance packages including updates, security monitoring, content changes, and technical support."
    },
    {
      question: "Can you help with digital marketing and ads?",
      answer: "Absolutely! We offer comprehensive digital marketing services including Meta Ads management, Google Ads, SEO, and social media marketing."
    },
    {
      question: "What makes Digioptimized different?",
      answer: "We combine speed, quality, and results. Our 7-day delivery, 100% satisfaction rate, and personalized approach make us the perfect partner for your business growth."
    },
    {
      question: "Do I own my website after it's built?",
      answer: "Yes, you have full ownership of your website, including all files, content, and domain. We provide complete documentation and training."
    },
  ];

  return (
  <section id="faq" className="py-12 md:py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="glass rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-blue-50/50 transition-colors"
              >
                <span className="font-display font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 glass border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
