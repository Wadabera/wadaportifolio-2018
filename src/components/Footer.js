import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaHeart, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full-Stack Solutions',
    'Machine Learning',
    'Database Design',
    'Software Engineering'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-magazine-bg border-t border-magazine-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-2xl flex items-center justify-center text-white text-2xl">
                  <FaRocket />
                </div>
                <div>
                  <h3 className="text-4xl font-black font-display text-magazine-text">
                    <span className="text-accent-yellow">Wada</span>
                    <span className="text-magazine-text">.dev</span>
                  </h3>
                  <p className="text-magazine-muted font-medium">Software Engineering Student & Full-Stack Developer</p>
                </div>
              </div>
              
              <p className="text-magazine-muted leading-relaxed max-w-md text-lg">
                Passionate about creating innovative solutions and exploring the frontiers of technology. 
                Currently pursuing Software Engineering at Jimma University with hands-on experience in modern web technologies.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-magazine-muted hover:text-accent-yellow transition-colors duration-300">
                  <FaEnvelope className="text-accent-yellow" />
                  <span className="font-medium">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 text-magazine-muted hover:text-accent-orange transition-colors duration-300">
                  <FaPhone className="text-accent-orange" />
                  <span className="font-medium">{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-magazine-muted hover:text-accent-pink transition-colors duration-300">
                  <FaMapMarkerAlt className="text-accent-pink" />
                  <span className="font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-magazine-card border border-magazine-border rounded-2xl flex items-center justify-center text-magazine-muted hover:bg-gradient-to-r hover:from-accent-yellow hover:to-accent-orange hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-magazine-card border border-magazine-border rounded-2xl flex items-center justify-center text-magazine-muted hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-purple hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={SOCIAL_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-magazine-card border border-magazine-border rounded-2xl flex items-center justify-center text-magazine-muted hover:bg-gradient-to-r hover:from-accent-pink hover:to-accent-red hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                  aria-label="Telegram"
                >
                  <FaTelegram size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-accent-yellow mb-6 font-heading flex items-center gap-2">
                <div className="w-1 h-6 bg-accent-yellow rounded-full"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-magazine-muted hover:text-accent-yellow transition-all duration-300 hover:translate-x-2 block font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-accent-orange mb-6 font-heading flex items-center gap-2">
                <div className="w-1 h-6 bg-accent-orange rounded-full"></div>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-magazine-muted hover:text-accent-orange transition-colors duration-300 font-medium">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-12 border-t border-magazine-border">
            <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-accent-orange/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-black text-magazine-text mb-4 font-display">
                  Let's Build Something <span className="text-accent-yellow">Amazing</span> Together
                </h3>
                <p className="text-magazine-muted mb-8 max-w-2xl mx-auto text-lg">
                  Ready to start your next project? I'm available for freelance work and exciting collaborations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  >
                    Start a Project
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="border-2 border-accent-yellow text-accent-yellow font-bold py-4 px-8 rounded-2xl hover:bg-accent-yellow hover:text-magazine-bg transition-all duration-300"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-magazine-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-magazine-muted">
                <span>© {currentYear} {PERSONAL_INFO.name}. Made with</span>
                <FaHeart className="text-accent-pink animate-pulse" />
                <span>in {PERSONAL_INFO.location}</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-magazine-muted">
                <span>All rights reserved</span>
                <span>•</span>
                <button className="hover:text-accent-yellow transition-colors duration-300">
                  Privacy Policy
                </button>
                <span>•</span>
                <button className="hover:text-accent-yellow transition-colors duration-300">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-accent-pink to-accent-purple text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-neon-pink hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="group-hover:animate-bounce" />
      </button>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-30 ${
              i % 3 === 0 ? 'bg-accent-yellow' : i % 3 === 1 ? 'bg-accent-pink' : 'bg-accent-blue'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;