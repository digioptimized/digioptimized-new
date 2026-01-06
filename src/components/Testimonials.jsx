import React, { useEffect, useRef, useState } from "react";
import { Star, TrendingUp, Users, Award } from "lucide-react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Extended testimonials for the marquee effect
  const testimonials = [
    {
      name: "Sanjay Kumar",
      company: "m2f.shop",
      text: "Digioptimized transformed my online store completely! Sales tripled in just 2 months. The team is professional, creative, and truly cares about results.",
      result: "3x Sales Growth",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "TechStart Solutions",
      text: "Best decision ever! Our website looks stunning and the SEO results are incredible. We are now ranking on page 1 for all our key terms.",
      result: "Page 1 Rankings",
      rating: 5
    },
    {
      name: "Amit Reddy",
      company: "Spice Garden Restaurant",
      text: "The GMB setup and local SEO brought us so many new customers. We are now the top-rated restaurant in our area. Thank you Digioptimized!",
      result: "Top Local Ranking",
      rating: 5
    },
    {
      name: "Deepika Menon",
      company: "ArivuAI",
      text: "Our conversion rate jumped from 2% to 8% after the website redesign. The lead automation system saves us hours every day. Incredible ROI!",
      result: "4x Conversions",
      rating: 5
    },
    {
      name: "Rajesh Patel",
      company: "AMJ Academy",
      text: "The LMS platform they built is intuitive and our student enrollment increased by 150%. Professional team that delivers on time every time.",
      result: "150% More Students",
      rating: 5
    },
    {
      name: "Ananya Iyer",
      company: "Bloom Boutique",
      text: "From zero online presence to a fully optimized e-commerce store in just 7 days. Our monthly revenue has grown 5x since launch.",
      result: "5x Revenue Growth",
      rating: 5
    },
    {
      name: "Vikram Singh",
      company: "FitLife Gym",
      text: "Data-rich, stress-free, and beautifully designed. Cut our customer acquisition cost by 35% in two months. Clear, actionable insights every day.",
      result: "35% Lower CAC",
      rating: 5
    },
    {
      name: "Meera Krishnan",
      company: "Wellness Studio",
      text: "Our marketing reports used to be cobbled together from five different platforms. Now everything is in one place. Saves our team over 10 hours a week.",
      result: "10+ Hours Saved Weekly",
      rating: 5
    },
    {
      name: "Arun Nair",
      company: "CloudTech Services",
      text: "Digioptimized gave us exactly what we were missing: clarity. With real-time insights, we finally understand whats working. Our ROI shows it.",
      result: "Clear ROI Tracking",
      rating: 5
    },
    {
      name: "Kavitha Rajan",
      company: "Green Earth Organics",
      text: "They turned our data chaos into clear, confident decisions. Our team runs faster and smarter. The conversion system pays for itself every month.",
      result: "Self-Funding System",
      rating: 5
    },
    {
      name: "Suresh Babu",
      company: "AutoParts Plus",
      text: "Professional team, stunning results. Our Google Business Profile now brings in 40+ leads per week. Best investment we have made for our business.",
      result: "40+ Weekly Leads",
      rating: 5
    },
    {
      name: "Lakshmi Devi",
      company: "Artisan Crafts",
      text: "From concept to launch in record time. The attention to detail and conversion-focused design has made all the difference. Highly recommend!",
      result: "Record Fast Delivery",
      rating: 5
    }
  ];

  const stats = [
    { value: "10+", label: "Projects Completed", icon: Award },
    { value: "4.9", label: "Client Rating", icon: Star, hasStars: true },
    { value: "100%", label: "Satisfaction Rate", icon: Users }
  ];

  // Split testimonials into 3 columns
  const column1 = testimonials.filter((_, i) => i % 3 === 0);
  const column2 = testimonials.filter((_, i) => i % 3 === 1);
  const column3 = testimonials.filter((_, i) => i % 3 === 2);

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 group cursor-default">
      {/* Rating */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </p>

      {/* Result Badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold mb-4">
        <TrendingUp className="w-3 h-3" />
        {testimonial.result}
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
          {testimonial.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );

  const MarqueeColumn = ({ testimonials, direction = "up", speed = "normal" }) => {
    const speedClass = speed === "slow" ? "[animation-duration:55s]" : speed === "fast" ? "[animation-duration:40s]" : "[animation-duration:45s]";
    
    return (
      <div 
        className="flex flex-col gap-4 overflow-hidden h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`flex flex-col gap-4 ${direction === "up" ? "animate-marquee-up" : "animate-marquee-down"} ${speedClass}`}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {/* Double the testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <TestimonialCard key={`${testimonial.name}-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{stat.value}</span>
                {stat.hasStars && (
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-indigo-500 text-indigo-500" />
                    ))}
                  </div>
                )}
              </div>
              <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "200ms" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-100 rounded-full text-sm font-semibold text-indigo-600 mb-5 shadow-sm">
            <Award className="w-4 h-4" />
            Client Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-gray-900">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Join 10+ businesses that have transformed their online presence with us
          </p>
        </div>

        {/* Testimonials Marquee Grid */}
        <div className={`relative transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`} style={{ transitionDelay: "400ms" }}>
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 h-[550px] md:h-[650px] overflow-hidden">
            {/* Column 1 - Scroll Up */}
            <div className="hidden md:block h-full">
              <MarqueeColumn testimonials={column1} direction="up" speed="normal" />
            </div>

            {/* Column 2 - Scroll Down (visible on mobile) */}
            <div className="h-full">
              <MarqueeColumn testimonials={column2} direction="down" speed="slow" />
            </div>

            {/* Column 3 - Scroll Up */}
            <div className="hidden md:block h-full">
              <MarqueeColumn testimonials={column3} direction="up" speed="fast" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "600ms" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all hover:-translate-y-1"
          >
            Get Your Success Story
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
