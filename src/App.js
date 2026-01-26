import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from './components/Toast';
import AccessibilityProvider from './components/AccessibilityProvider';
import PerformanceMonitor from './components/PerformanceMonitor';
import useToast from './hooks/useToast';

function App() {
  const { toasts, removeToast } = useToast();

  return (
    <AccessibilityProvider>
      <div className="App bg-magazine-bg text-magazine-text min-h-screen relative overflow-x-hidden">
        {/* Performance Monitoring */}
        <PerformanceMonitor />
        
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-accent-yellow/5 to-accent-orange/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-pink/5 to-accent-purple/5 rounded-full blur-3xl animate-float-fast"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-blue/3 to-accent-green/3 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main role="main" id="main-content">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Services />
            <Certificates />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>

        {/* Utility Components */}
        <ScrollToTop />
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        
        {/* Floating Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float opacity-20 ${
                i % 4 === 0 ? 'bg-accent-yellow' : 
                i % 4 === 1 ? 'bg-accent-orange' : 
                i % 4 === 2 ? 'bg-accent-pink' : 'bg-accent-blue'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Skip to main content link for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-yellow text-magazine-bg px-4 py-2 rounded-lg font-medium z-50"
        >
          Skip to main content
        </a>
      </div>
    </AccessibilityProvider>
  );
}

export default App;