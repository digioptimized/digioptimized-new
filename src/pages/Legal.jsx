import React, { useMemo, useEffect, useRef, useState } from "react";
import { FileText, ShieldCheck, Clock, Mail, ArrowLeft, Sparkles } from "lucide-react";

function PrivacyContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 id="privacy-intro" className="text-lg font-semibold text-gray-900">Overview</h3>
          <p className="text-sm text-gray-600 mt-1">At Digioptimized, accessible from <a className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium" href="https://digioptimized.in">https://digioptimized.in</a>, your privacy is one of our top priorities. This document explains what we collect and why.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
          <h4 className="font-semibold text-gray-900">Information We Collect</h4>
          <p className="text-sm text-gray-600 mt-2">We collect personal and business information only when necessary to deliver services or improve your experience. Examples include:</p>
          <ul className="mt-3 text-sm space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>Name, email address, and phone number</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>Company or business details (if applicable)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>Website URLs and related business data for SEO, Web Development, or GBP services</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>Payment details (processed securely through third-party gateways)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>Technical data such as IP, browser, and device information</li>
          </ul>
        </div>

        <div className="p-5 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
          <h4 className="font-semibold text-gray-900">How We Use Your Information</h4>
          <p className="text-sm text-gray-600 mt-2">We use collected data to provide and improve services, communicate with you, and meet legal obligations.</p>
          <ol className="mt-3 text-sm text-gray-700 space-y-2">
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>Provide, operate, and maintain our services</li>
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>Personalize and expand our offerings</li>
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>Communicate updates, invoices and (with consent) promotions</li>
            <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>Prevent fraud and comply with legal requirements</li>
          </ol>
        </div>
      </div>

      <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100">
            <Clock className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Data Protection & Retention</h4>
            <p className="text-sm text-gray-600 mt-1">We take data security seriously. Only authorized personnel have access, and we retain data only as long as necessary for service delivery or legal requirements.</p>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-white/20">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm text-indigo-100">Questions or data requests?</div>
            <div className="text-sm font-medium">Email us at <a className="text-white underline hover:no-underline" href="mailto:digioptimized@gmail.com">digioptimized@gmail.com</a> or call <span className="font-mono">+91 84386 89782</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h3 id="terms-intro" className="text-lg font-semibold text-gray-900">Overview</h3>
          <p className="text-sm text-gray-600 mt-1">Welcome to Digioptimized! These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
          <h4 className="font-semibold text-gray-900">Company & Services</h4>
          <p className="text-sm text-gray-600 mt-2">Digioptimized provides web development, SEO, Google Business Profile management, Meta Ads and related services. Services are customized per client.</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
          <h4 className="font-semibold text-gray-900">Payments & Refunds</h4>
          <p className="text-sm text-gray-600 mt-2">Payments are taken as milestones. We accept secure gateways such as Razorpay. Fees are non-refundable once work begins unless stated otherwise.</p>
        </div>
      </div>

      <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <h4 className="font-semibold text-gray-900">Intellectual Property & Liability</h4>
        <p className="text-sm text-gray-600 mt-2">Work remains Digioptimized property until full payment. We are not liable for indirect damages and cannot guarantee specific rankings or ad results.</p>
      </div>

      <div className="p-5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-white/20">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm text-purple-100">Questions about terms?</div>
            <div className="text-sm font-medium">Email us at <a className="text-white underline hover:no-underline" href="mailto:digioptimized@gmail.com">digioptimized@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Legal() {
  // decide which tab to show based on hash
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  const tab = useMemo(() => {
    if (hash.includes('/terms')) return 'terms';
    return 'privacy';
  }, [hash]);

  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when switching
    if (contentRef.current) contentRef.current.scrollTop = 0;
    setIsVisible(true);
  }, [tab]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 pt-28 lg:pt-32 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => { window.location.hash = '#home'; window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-indigo-200 transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600 group-hover:-translate-x-1 transition-transform" />
              <span className="text-gray-700 font-medium">Back</span>
            </button>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full text-xs font-semibold text-indigo-600 mb-1">
                <Sparkles className="w-3 h-3" />
                Legal
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                {tab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h1>
            </div>
          </div>
        </div>

        {/* Mobile tabs */}
        <div className={`block lg:hidden mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2 border border-gray-100">
            <a 
              href="#legal/privacy" 
              className={`flex-1 text-center px-4 py-3 rounded-xl font-medium transition-all ${tab==='privacy' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Privacy Policy
            </a>
            <a 
              href="#legal/terms" 
              className={`flex-1 text-center px-4 py-3 rounded-xl font-medium transition-all ${tab==='terms' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className={`hidden lg:block lg:col-span-1 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100 sticky top-32">
              <nav className="space-y-2">
                <a 
                  href="#legal/privacy" 
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${tab==='privacy' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                >
                  <ShieldCheck className="w-5 h-5" />
                  Privacy Policy
                </a>
                <a 
                  href="#legal/terms" 
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${tab==='terms' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                >
                  <FileText className="w-5 h-5" />
                  Terms & Conditions
                </a>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Quick sections</div>
                <div className="space-y-2">
                  <a href="#privacy-intro" className="block text-sm text-gray-500 hover:text-indigo-600 transition-colors">Privacy overview</a>
                  <a href="#info-collect" className="block text-sm text-gray-500 hover:text-indigo-600 transition-colors">Info we collect</a>
                  <a href="#how-used" className="block text-sm text-gray-500 hover:text-indigo-600 transition-colors">How we use data</a>
                  <a href="#contact" className="block text-sm text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div ref={contentRef} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 lg:max-h-[75vh] max-h-none overflow-auto">
              <div className="prose lg:prose-lg text-gray-800">
                {tab === 'privacy' ? <PrivacyContent /> : <TermsContent />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
