import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode, FaRocket } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-magazine-bg/95 backdrop-blur-md border-b border-magazine-border shadow-2xl py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo - Circular Design */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Circular Logo Container */}
              <div className="w-12 h-12 bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink rounded-full p-0.5 animate-spin-slow">
                <div className="w-full h-full bg-magazine-bg rounded-full flex items-center justify-center">
                  <span className="text-lg font-black text-accent-yellow">WA</span>
                </div>
              </div>
              {/* Pulsing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-yellow to-accent-orange opacity-20 animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-black font-display leading-none">
                <span className="text-accent-yellow">Wada</span>
                <span className="text-magazine-text"> Abera</span>
              </div>
              <div className="text-xs text-magazine-muted font-medium">
                Fullstack Developer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-magazine-text hover:text-accent-yellow font-medium transition-all duration-300 group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-yellow to-accent-orange group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg font-bold py-2 px-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <FaRocket className="inline mr-2" />
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-magazine-card border border-magazine-border rounded-xl flex items-center justify-center text-magazine-text hover:text-accent-yellow transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideDown">
            <div className="bg-magazine-card border border-magazine-border rounded-2xl p-6 backdrop-blur-md">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-magazine-text hover:text-accent-yellow font-medium transition-colors duration-300 py-2 border-b border-magazine-border/50 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg font-bold py-3 px-6 rounded-xl mt-4 hover:scale-105 transition-all duration-300">
                  <FaRocket className="inline mr-2" />
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;