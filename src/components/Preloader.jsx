import React, { useEffect, useState } from 'react';
import { Sparkles, Rocket, Zap, Code2, Palette, TrendingUp } from 'lucide-react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);

  const phases = [
    { label: 'Initializing...', icon: Code2 },
    { label: 'Loading Assets...', icon: Palette },
    { label: 'Optimizing Experience...', icon: TrendingUp },
    { label: 'Almost Ready...', icon: Sparkles },
  ];

  useEffect(() => {
    // Smooth progress animation with phases
    const duration = 2500; // 2.5 seconds for better experience
    const steps = 100;
    const increment = 100 / steps;
    const delay = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(currentStep * increment, 100);
      setProgress(newProgress);

      // Update phase based on progress
      if (newProgress < 25) setCurrentPhase(0);
      else if (newProgress < 50) setCurrentPhase(1);
      else if (newProgress < 75) setCurrentPhase(2);
      else setCurrentPhase(3);

      // Pulse glow intensity
      setGlowIntensity(Math.sin(currentStep * 0.1) * 0.5 + 0.5);

      if (currentStep >= steps) {
        clearInterval(interval);
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // Match exit animation duration
        }, 300);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [onComplete]);

  const CurrentPhaseIcon = phases[currentPhase].icon;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: '#ffffff',
      }}
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant Gradient Mesh */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-2000"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, ${0.1 + glowIntensity * 0.08}) 0%, transparent 60%)`,
            animation: 'blob 8s infinite ease-in-out',
            transform: `translate(${Math.sin(glowIntensity * 6.28) * 20}px, ${Math.cos(glowIntensity * 6.28) * 20}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-2000"
          style={{
            background: `radial-gradient(circle, rgba(168, 85, 247, ${0.1 + glowIntensity * 0.08}) 0%, transparent 60%)`,
            animation: 'blob 8s infinite ease-in-out 2s',
            transform: `translate(${-Math.sin(glowIntensity * 6.28) * 20}px, ${-Math.cos(glowIntensity * 6.28) * 20}px)`,
          }}
        />
        
        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: i % 3 === 0 ? '4px' : '3px',
              height: i % 3 === 0 ? '4px' : '3px',
              left: `${15 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`,
              background: ['#3b82f6', '#8b5cf6', '#06b6d4'][i % 3],
              opacity: 0.2,
              borderRadius: i % 2 === 0 ? '50%' : '1px',
              animation: `float ${8 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Premium Dotted Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #475569 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Premium Logo with Multi-layer Design */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            {/* Outer Animated Glow Ring */}
            <div 
              className="absolute -inset-8 rounded-full transition-all duration-700"
              style={{
                background: `conic-gradient(from ${progress * 3.6}deg, 
                  rgba(59, 130, 246, 0.15), 
                  rgba(168, 85, 247, 0.15), 
                  rgba(6, 182, 212, 0.15), 
                  rgba(59, 130, 246, 0.15))`,
                transform: `scale(${1 + glowIntensity * 0.15})`,
                filter: 'blur(20px)',
              }}
            />
            
            {/* Dual Rotating Rings with opposite directions */}
            <div 
              className="absolute inset-0 w-32 h-32 rounded-full border-[3px] border-transparent animate-spin" 
              style={{ 
                animationDuration: '4s',
                borderTopColor: 'rgba(59, 130, 246, 0.4)',
                borderRightColor: 'rgba(168, 85, 247, 0.3)',
                borderBottomColor: 'rgba(6, 182, 212, 0.2)',
              }} 
            />
            <div 
              className="absolute inset-2 w-28 h-28 rounded-full border-[2px] border-transparent animate-spin-reverse" 
              style={{ 
                animationDuration: '3s',
                borderTopColor: 'rgba(168, 85, 247, 0.3)',
                borderLeftColor: 'rgba(6, 182, 212, 0.4)',
              }} 
            />
            
            {/* Center Icon Container with premium styling */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Background Circle with Gradient Border */}
              <div 
                className="absolute inset-[22px] rounded-full"
                style={{
                  background: 'white',
                  boxShadow: `
                    0 0 0 3px rgba(59, 130, 246, 0.1),
                    0 10px 40px rgba(59, 130, 246, ${0.15 + glowIntensity * 0.15}),
                    0 0 60px rgba(168, 85, 247, ${0.1 + glowIntensity * 0.1})
                  `,
                }}
              />
              
              <div 
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                  transform: `scale(${1 + Math.sin(progress / 10) * 0.05})`,
                }}
              >
                {/* Glossy Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
                  }}
                />
                <Rocket 
                  className="w-9 h-9 text-white relative z-10 transition-transform duration-500"
                  style={{
                    transform: `translateY(${-Math.sin(progress / 15) * 3}px) rotate(${Math.sin(progress / 30) * 5}deg)`,
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name with Premium Typography */}
        <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
          <span 
            className="bg-clip-text text-transparent relative"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #0891b2 100%)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            DigiOptimized
          </span>
        </h1>

        {/* Elegant Subtitle */}
        <p className="text-sm text-gray-500 mb-8 font-medium tracking-wide">
          Digital Excellence in Motion
        </p>

        {/* Dynamic Phase Indicator with Icon */}
        <div className="mb-10 h-8 flex items-center justify-center gap-3 transition-all duration-500">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${
                currentPhase === 0 ? '#dbeafe' : 
                currentPhase === 1 ? '#ede9fe' : 
                currentPhase === 2 ? '#cffafe' : '#d1fae5'
              } 0%, white 100%)`,
            }}
          >
            <CurrentPhaseIcon 
              className="w-4 h-4 transition-all duration-500"
              style={{
                color: currentPhase === 0 ? '#2563eb' : currentPhase === 1 ? '#7c3aed' : currentPhase === 2 ? '#0891b2' : '#059669',
              }}
            />
          </div>
          <p className="text-sm font-semibold text-gray-700 transition-all duration-500">
            {phases[currentPhase].label}
          </p>
        </div>

        {/* Premium Progress Bar with Gradient Track */}
        <div className="w-96 max-w-[85vw] mx-auto">
          {/* Progress Container with subtle shadow */}
          <div 
            className="relative h-2.5 rounded-full overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(to right, #f1f5f9, #e2e8f0, #f1f5f9)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
            }}
          >
            {/* Progress Fill with animated gradient */}
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                boxShadow: `0 0 20px rgba(59, 130, 246, ${0.3 + glowIntensity * 0.2})`,
              }}
            >
              {/* Animated shimmer effect */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
                  animation: 'shimmer 2s infinite',
                }}
              />
              
              {/* Progress tip glow */}
              {progress > 5 && (
                <div 
                  className="absolute right-0 top-0 bottom-0 w-8"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4))',
                  }}
                />
              )}
            </div>
          </div>
          
          {/* Progress Text with better styling */}
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {Math.round(progress)}%
              </span>
              <span className="text-xs text-gray-400">Complete</span>
            </div>
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              Premium Experience
            </span>
          </div>
        </div>

        {/* Elegant Loading Indicators */}
        <div className="mt-10 flex justify-center items-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative"
            >
              {/* Outer ring */}
              <div 
                className="w-3 h-3 rounded-full animate-bounce"
                style={{ 
                  background: ['#3b82f6', '#8b5cf6', '#06b6d4'][i],
                  boxShadow: `0 0 15px ${['rgba(59, 130, 246, 0.4)', 'rgba(139, 92, 246, 0.4)', 'rgba(6, 182, 212, 0.4)'][i]}`,
                  animationDelay: `${i * 150}ms`,
                  animationDuration: '0.8s',
                }} 
              />
            </div>
          ))}
        </div>

        {/* Premium Status Message */}
        <p 
          className="mt-8 text-xs font-medium tracking-wider uppercase transition-opacity duration-500"
          style={{ 
            color: '#94a3b8',
            opacity: progress > 30 ? 1 : 0.5,
            letterSpacing: '0.1em',
          }}
        >
          Crafting Your Experience
        </p>
      </div>
    </div>
  );
};

export default Preloader;
