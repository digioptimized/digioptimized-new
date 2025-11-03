import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill your name, email and message before sending.");
      return;
    }

    setLoading(true);

    // Web3Forms key (preferred if provided) and EmailJS fallback
    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    // Try Web3Forms first (client-only, easy to set up)
    if (web3Key) {
      try {
        const payload = {
          access_key: web3Key,
          subject: `Website Contact: ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          message: formData.message,
        };

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const json = await res.json();
        if (res.ok && json.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setSubmitted(false), 3000);
          setLoading(false);
          setError(null);
          return;
        } else {
          console.error('Web3Forms error', json);
          setError('There was an issue sending via Web3Forms. Falling back to EmailJS if available.');
        }
      } catch (err) {
        console.error('Web3Forms exception', err);
        setError('Failed to send via Web3Forms. Falling back to EmailJS if available.');
      }
    }

    // If Web3Forms didn't run or failed, try EmailJS (if configured)
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
          setError("There was an issue sending your message. Please try again later.");
        } else {
          setSubmitted(true);
          // Optionally clear form
          setFormData({ name: "", email: "", phone: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
          setLoading(false);
          setError(null);
          return;
        }
      } catch (err) {
        console.error(err);
        setError("Failed to send message via EmailJS. Please try again later.");
        // do not open mail client automatically; user must configure EmailJS to send
        setLoading(false);
        return;
      }
    }
    // If we reach here, EmailJS env vars were missing. Show an actionable fallback.
    setError("Email sending is not configured. You can contact us directly at digioptimized@gmail.com or open your mail client to send the message (pre-filled).");
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ready to transform your business? Get in touch for a free consultation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 hover-lift">
            <h3 className="font-display font-bold text-2xl mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Your Phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

                  {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-100 text-red-700">
                          <div className="text-sm whitespace-pre-line">{error}</div>
                          <div className="mt-2">
                            <button
                              type="button"
                              onClick={() => {
                                navigator.clipboard && navigator.clipboard.writeText('digioptimized@gmail.com');
                                alert('Email address copied to clipboard: digioptimized@gmail.com');
                              }}
                              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600 text-white text-sm"
                            >
                              Copy Email
                            </button>
                            {(() => {
                              const supportEmail = 'digioptimized@gmail.com';
                              const subject = `Website contact: ${formData.name || ""}`;
                              const body = `Name: ${formData.name || ""}\nEmail: ${formData.email || ""}\nPhone: ${formData.phone || ""}\n\n${formData.message || ""}`;
                              const href = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                              return (
                                <a href={href} className="ml-3 text-sm text-red-600 underline">Open mail client</a>
                              );
                            })()}
                          </div>
                    </div>
                  )}

                  <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 font-semibold flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-wait' : ''}`}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : loading ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8 hover-lift">
              <h3 className="font-display font-bold text-2xl mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <a href="mailto:digioptimized@gmail.com" className="text-blue-600 hover:underline">
                      digioptimized@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                      +91 8438689782
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <p className="text-gray-600">
                     chennai, Tamil nadu<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass rounded-3xl p-8">
              <h4 className="font-display font-bold text-xl mb-4">Business Hours</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
