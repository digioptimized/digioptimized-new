import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Legal from "./pages/Legal";

export default function App() {
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash : '');

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const showLegal = hash && hash.startsWith('#legal');

  useEffect(() => {
    // Smooth page-to-page transitions with Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('visible', 'page-transition-active');

          // If this element wants staggered children, apply the helper class
          if (el.classList.contains('stagger')) {
            el.classList.add('stagger-children');
          }
        } else {
          // keep visible if already animated in to avoid jank on small scrolls
          // but remove page-transition-active so repeated enters re-trigger
          el.classList.remove('page-transition-active');
        }
      });
    }, observerOptions);

    // Observe elements that explicitly opt-in for animation by using
    // the `animate-on-scroll` class or any section element.
    const targets = document.querySelectorAll('section, .animate-on-scroll');
    targets.forEach(t => observer.observe(t));

    return () => {
      targets.forEach(t => observer.unobserve(t));
    };
  }, []);

  // Trigger a lightweight page transition when the hash (route) changes.
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    // Add a quick "out" state so content looks like it's transitioning away
    main.classList.add('page-transition-out');

    // After a short delay remove the out class and re-animate children in
    const t = setTimeout(() => {
      main.classList.remove('page-transition-out');

      const children = Array.from(main.querySelectorAll(':scope > *'));
      children.forEach((c, i) => {
        // trigger reflow so the animation restarts
        c.classList.remove('page-transition-active');
        void c.offsetWidth;
        c.classList.add('page-transition-active');
      });
    }, 160);

    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Enhanced Page Content with Smooth Transitions */}
      <main className="relative">
        {/* Animated Background Gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50/40 via-white to-cyan-50/40 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        </div>

        {/* Smooth Animated Sections */}
        {!showLegal ? (
          <>
            <div className="smooth-appear">
              <Hero />
            </div>
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Process />
            <FAQ />
            <Contact />
          </>
        ) : (
          <Legal />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
