import React, { useMemo, useEffect, useRef } from "react";
import { FileText, ShieldCheck, Clock, Mail } from "lucide-react";

function PrivacyContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 id="privacy-intro" className="text-lg font-semibold">Overview</h3>
          <p className="text-sm text-slate-600 mt-1">At Digioptimized, accessible from <a className="text-blue-600 hover:underline" href="https://digioptimized.in">https://digioptimized.in</a>, your privacy is one of our top priorities. This document explains what we collect and why.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-400">
          <h4 className="font-semibold">Information We Collect</h4>
          <p className="text-sm text-slate-600 mt-2">We collect personal and business information only when necessary to deliver services or improve your experience. Examples include:</p>
          <ul className="mt-2 text-sm space-y-1 list-disc list-inside text-slate-700">
            <li>Name, email address, and phone number</li>
            <li>Company or business details (if applicable)</li>
            <li>Website URLs and related business data for SEO, Web Development, or GBP services</li>
            <li>Payment details (processed securely through third-party gateways)</li>
            <li>Technical data such as IP, browser, and device information</li>
          </ul>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-cyan-400">
          <h4 className="font-semibold">How We Use Your Information</h4>
          <p className="text-sm text-slate-600 mt-2">We use collected data to provide and improve services, communicate with you, and meet legal obligations.</p>
          <ol className="mt-2 text-sm list-decimal list-inside text-slate-700 space-y-1">
            <li>Provide, operate, and maintain our services</li>
            <li>Personalize and expand our offerings</li>
            <li>Communicate updates, invoices and (with consent) promotions</li>
            <li>Prevent fraud and comply with legal requirements</li>
          </ol>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-white/80">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold">Data Protection & Retention</h4>
            <p className="text-sm text-slate-600 mt-1">We take data security seriously. Only authorized personnel have access, and we retain data only as long as necessary for service delivery or legal requirements.</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-white">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-slate-700">Questions or data requests?</div>
            <div className="text-sm font-medium text-slate-800">Email us at <a className="text-blue-600" href="mailto:digioptimized@gmail.com">digioptimized@gmail.com</a> or call <span className="font-mono">+91 84386 89782</span></div>
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
        <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 text-yellow-700">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h3 id="terms-intro" className="text-lg font-semibold">Overview</h3>
          <p className="text-sm text-slate-600 mt-1">Welcome to Digioptimized! These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-yellow-400">
          <h4 className="font-semibold">Company & Services</h4>
          <p className="text-sm text-slate-600 mt-2">Digioptimized provides web development, SEO, Google Business Profile management, Meta Ads and related services. Services are customized per client.</p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-amber-400">
          <h4 className="font-semibold">Payments & Refunds</h4>
          <p className="text-sm text-slate-600 mt-2">Payments are taken as milestones. We accept secure gateways such as Razorpay. Fees are non-refundable once work begins unless stated otherwise.</p>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h4 className="font-semibold">Intellectual Property & Liability</h4>
        <p className="text-sm text-slate-600 mt-2">Work remains Digioptimized property until full payment. We are not liable for indirect damages and cannot guarantee specific rankings or ad results.</p>
      </div>

      <div className="mt-2 p-4 rounded-lg bg-gradient-to-r from-white to-yellow-50 border border-yellow-100">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-white">
            <Mail className="w-5 h-5 text-yellow-700" />
          </div>
          <div>
            <div className="text-sm text-slate-700">Questions about terms?</div>
            <div className="text-sm font-medium text-slate-800">Email us at <a className="text-blue-600" href="mailto:digioptimized@gmail.com">digioptimized@gmail.com</a></div>
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

  useEffect(() => {
    // Scroll to top when switching
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [tab]);

  // no open/print buttons — simplified navigation only


  return (
    <section className="min-h-screen bg-slate-50 pt-28 lg:pt-32 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header: stacks vertically on small screens */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button onClick={() => { window.location.hash = '#home'; window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow hover:shadow-md">
              ← Back
            </button>
            <h1 className="text-xl sm:text-2xl font-display font-bold">Legal — {tab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</h1>
          </div>

        
        </div>

        {/* Mobile tabs (visible on small screens) */}
        <div className="block lg:hidden mb-4">
          <div className="bg-white rounded-xl shadow p-2 flex gap-2 overflow-auto">
            <a href="#legal/privacy" className={`flex-1 text-center px-3 py-2 rounded ${tab==='privacy' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>Privacy Policy</a>
            <a href="#legal/terms" className={`flex-1 text-center px-3 py-2 rounded ${tab==='terms' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>Terms &amp; Conditions</a>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Aside: hidden on small, sticky on large */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-xl p-4 shadow sticky top-32">
              <nav className="space-y-2">
                <a href="#legal/privacy" className={`block px-3 py-2 rounded ${tab==='privacy' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>Privacy Policy</a>
                <a href="#legal/terms" className={`block px-3 py-2 rounded ${tab==='terms' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>Terms &amp; Conditions</a>
              </nav>

              <div className="mt-4 border-t pt-4 text-sm text-slate-500">
                <div className="font-semibold mb-2">Quick sections</div>
                <a href="#privacy-intro" className="block hover:underline">Privacy overview</a>
                <a href="#info-collect" className="block hover:underline">Info we collect</a>
                <a href="#how-used" className="block hover:underline">How we use data</a>
                <a href="#contact" className="block hover:underline">Contact</a>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div ref={contentRef} className="bg-white rounded-2xl p-6 md:p-8 shadow lg:max-h-[75vh] max-h-none overflow-auto">
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
