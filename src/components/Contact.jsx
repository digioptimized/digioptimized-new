import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill your name, email and message before sending.");
      return;
    }

    setLoading(true);

    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    if (web3Key) {
      try {
        const payload = {
          access_key: web3Key,
          subject: `Website Contact: ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "",
          message: formData.message,
        };

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const json = await res.json();
        if (res.ok && json.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
          setLoading(false);
          setError(null);
          return;
        } else {
          console.error("Web3Forms error", json);
          setError("There was an issue sending via Web3Forms.");
        }
      } catch (err) {
        console.error("Web3Forms exception", err);
        setError("Failed to send via Web3Forms.");
      }
    }

    if (serviceId && templateId && userId) {
      try {
        const payload = {
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || "",
            message: formData.message,
          },
        };

        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("EmailJS error:", text);
          setError("There was an issue sending your message.");
        } else {
          setSubmitted(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
          setLoading(false);
          setError(null);
          return;
        }
      } catch (err) {
        console.error(err);
        setError("Failed to send message via EmailJS.");
        setLoading(false);
        return;
      }
    }

    setError("Email sending is not configured. Contact us at digioptimized@gmail.com");
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, color: "bg-indigo-600", title: "Email Us", value: "digioptimized@gmail.com", href: "mailto:digioptimized@gmail.com" },
    { icon: Phone, color: "bg-purple-600", title: "Call Us", value: "+91 8438689782", href: "tel:+918438689782" },
    { icon: MapPin, color: "bg-emerald-600", title: "Location", value: "Chennai, Tamil Nadu, India", href: null }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gray-50">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-100 rounded-full text-sm font-semibold text-indigo-600 mb-5 shadow-sm">
            <MessageSquare className="w-4 h-4" />
            Get Your Conversion Audit
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-gray-900">
            Your traffic is valuable.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Your business deserves a system that converts.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Ready to stop losing potential customers? Get your conversion audit today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`} style={{ transitionDelay: "200ms" }}>
            <h3 className="font-bold text-xl sm:text-2xl mb-6 text-gray-900">Request Your Audit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "phone", "message"].map((field, idx) => (
                <div key={field} className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${300 + idx * 100}ms` }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field === "name" ? "Your Name" : field === "email" ? "Email Address" : field === "phone" ? "Phone Number" : "Tell us about your project"}
                    {field === "phone" && <span className="text-gray-400 ml-1">(optional)</span>}
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={field !== "phone"}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                      placeholder="What is your biggest challenge with conversions?"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={field !== "phone"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder={field === "name" ? "John Doe" : field === "email" ? "john@company.com" : "+91 98765 43210"}
                    />
                  )}
                </div>
              ))}

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 animate-pulse">
                  <div className="text-sm">{error}</div>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => { navigator.clipboard?.writeText("digioptimized@gmail.com"); alert("Email copied!"); }}
                      className="px-3 py-1 rounded-md bg-red-600 text-white text-sm hover:bg-red-700 transition-colors"
                    >
                      Copy Email
                    </button>
                    <a 
                      href={`mailto:digioptimized@gmail.com?subject=Website contact: ${formData.name}&body=Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`}
                      className="text-sm text-red-600 underline py-1"
                    >
                      Open mail client
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`group w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold flex items-center justify-center gap-2 relative overflow-hidden ${loading ? "opacity-70 cursor-wait" : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "700ms" }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-bounce" />
                    Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="relative">Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`} style={{ transitionDelay: "300ms" }}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="font-bold text-xl sm:text-2xl mb-6 text-gray-900">Get in touch</h3>
              
              <div className="space-y-5">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <div key={idx} className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: `${400 + idx * 100}ms` }}>
                      <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110 hover:rotate-6`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                        <Wrapper {...(item.href ? { href: item.href, className: "text-indigo-600 hover:underline text-sm sm:text-base" } : { className: "text-gray-600 text-sm sm:text-base" })}>
                          {item.value}
                        </Wrapper>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "600ms" }}>
              <h4 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                Business Hours
              </h4>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "Closed" },
                  { day: "Sunday", hours: "Closed" }
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${700 + idx * 50}ms` }}>
                    <span className="text-gray-600">{item.day}</span>
                    <span className={`font-semibold ${item.hours === "Closed" ? "text-red-500" : "text-gray-900"}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
