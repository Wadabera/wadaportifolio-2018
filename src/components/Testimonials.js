import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
  FaGraduationCap,
  FaCode,
  FaUsers,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import batiImg from "../images/baatii2.jpg";
import falmiImg from "../images/falmi.jpg";
import boazImg from "../images/boaz.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Baatii Shilashi",
      role: "Software Engineer  and junior fulstack developer and ceo founder",
      company: "Yai software Campany founder",
      image: batiImg,
      rating: 5,
      text: "Wada is an exceptional student with outstanding problem-solving abilities. His dedication to learning and applying software engineering principles is remarkable. He consistently delivers high-quality projects and demonstrates strong leadership skills in team collaborations.",
      icon: <FaGraduationCap />,
      color: "from-accent-yellow to-accent-orange",
      verified: true,
    },
    {
      id: 2,
      name: "Falmi  Tasfaye",
      role: "Senior Full-Stack Developer",
      company: "BSC software Engineering Student and Team meamber",
      image: falmiImg,
      rating: 5,
      text: "Working with Wada on our web development project was a fantastic experience. His technical expertise in React and NestJS, combined with his ability to understand complex requirements, made him an invaluable team member. Highly recommended!",
      icon: <FaCode />,
      color: "from-accent-blue to-accent-purple",
      verified: true,
    },
    {
      id: 3,
      name: "Boaz TUllu",
      role: " Project Manager and AI Engineer ",
      company: "Leacturer at University of Filorida, America",
      image: boazImg,
      rating: 5,
      text: "Wada's approach to full-stack development is impressive. He writes clean, maintainable code and has a deep understanding of both frontend and backend technologies. His machine learning projects showcase his versatility and passion for emerging technologies.",
      icon: <FaLinkedin />,
      color: "from-accent-pink to-accent-red",
      verified: true,
    }
    
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? "text-accent-yellow" : "text-magazine-border"
        } transition-colors duration-300 hover:scale-110`}
      />
    ));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-magazine-bg relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-yellow/15 to-accent-orange/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent-pink/15 to-accent-purple/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent-blue/10 to-accent-green/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full px-6 py-3 text-accent-yellow text-sm font-bold backdrop-blur-sm mb-6 animate-pulse">
            <div className="w-3 h-3 bg-accent-yellow rounded-full animate-ping"></div>
            Client Testimonials
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-magazine-text mb-6 font-display leading-tight">
            What People{" "}
            <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent animate-gradient bg-300%">
              Say
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-magazine-muted max-w-4xl mx-auto leading-relaxed mb-8">
            Feedback from professors, colleagues, and collaborators I've worked
            with
          </p>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="inline-flex items-center gap-2 bg-magazine-card border border-magazine-border rounded-full px-4 py-2 text-magazine-muted hover:text-accent-yellow transition-colors duration-300"
          >
            {isAutoPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
            <span className="text-sm font-medium">
              {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
            </span>
          </button>
        </div>

        {/* Enhanced Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div
            className="bg-magazine-card border border-magazine-border rounded-3xl p-8 lg:p-16 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Enhanced Background Quote Icon */}
            <div className="absolute top-8 left-8 text-9xl text-accent-yellow/20 animate-pulse">
              <FaQuoteLeft />
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-full shadow-2xl flex items-center justify-center text-magazine-bg hover:scale-125 transition-all duration-300 z-20 group hover:rotate-12"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-pink rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-125 transition-all duration-300 z-20 group hover:rotate-12"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Enhanced Testimonials Display */}
            <div className="grid lg:grid-cols-3 gap-8 relative z-10 px-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`text-center transition-all duration-700 ${
                    index === 1
                      ? "lg:scale-110 lg:z-30 transform lg:-translate-y-4"
                      : "lg:scale-95 lg:opacity-70 hover:opacity-90"
                  }`}
                >
                  {/* Enhanced Profile Image with Multiple Borders */}
                  <div className="relative mb-8 mx-auto w-28 h-28 lg:w-36 lg:h-36">
                    {/* Outer Rotating Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full animate-spin-slow p-1`}
                    >
                      <div className="w-full h-full bg-magazine-bg rounded-full"></div>
                    </div>

                    {/* Inner Gradient Border */}
                    <div
                      className={`absolute inset-2 bg-gradient-to-r ${testimonial.color} rounded-full p-1 animate-pulse`}
                    >
                      <div className="w-full h-full bg-magazine-bg rounded-full"></div>
                    </div>

                    {/* Profile Image */}
                    <div className="absolute inset-4 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/images/placeholder-avatar.png";
                        }}
                      />
                    </div>

                    {/* Enhanced Role Icon with Verification */}
                    <div
                      className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white shadow-lg border-2 border-magazine-bg`}
                    >
                      {testimonial.icon}
                    </div>

                    {/* Verification Badge */}
                    {testimonial.verified && (
                      <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white text-xs border-2 border-magazine-bg">
                        ✓
                      </div>
                    )}
                  </div>

                  {/* Enhanced Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Enhanced Testimonial Text */}
                  <blockquote
                    className={`text-magazine-muted mb-8 leading-relaxed italic relative ${
                      index === 1
                        ? "text-lg lg:text-xl"
                        : "text-base lg:text-lg"
                    }`}
                  >
                    <span className="text-accent-yellow text-2xl absolute -top-2 -left-2">
                      "
                    </span>
                    {testimonial.text}
                    <span className="text-accent-yellow text-2xl absolute -bottom-4 -right-2">
                      "
                    </span>
                  </blockquote>

                  {/* Enhanced Author Info */}
                  <div className="relative">
                    <h4 className="text-xl lg:text-2xl font-black text-magazine-text mb-2 hover:text-accent-yellow transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-accent-yellow font-bold mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-magazine-muted text-sm font-medium">
                      {testimonial.company}
                    </p>

                    {/* Company Badge */}
                    <div className="inline-flex items-center gap-2 mt-3 bg-magazine-bg/50 border border-magazine-border rounded-full px-3 py-1">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${testimonial.color} rounded-full`}
                      ></div>
                      <span className="text-xs text-magazine-muted font-medium">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Progress Bar */}
            <div className="mt-12 mb-8">
              <div className="w-full bg-magazine-border/30 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink transition-all duration-300"
                  style={{
                    width: `${
                      ((currentIndex + 1) / testimonials.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Enhanced Dots Indicator */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? "w-8 h-4 bg-gradient-to-r from-accent-yellow to-accent-orange"
                      : "w-4 h-4 bg-magazine-border hover:bg-accent-yellow/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-accent-yellow/50 group">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              💯
            </div>
            <div className="text-5xl font-black text-accent-yellow mb-3 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-magazine-muted font-semibold">
              Client Satisfaction
            </div>
          </div>

          <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-accent-orange/50 group">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-pink rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <div className="text-5xl font-black text-accent-orange mb-3 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-magazine-muted font-semibold">
              Successful Projects
            </div>
          </div>

          <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-accent-pink/50 group">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-pink to-accent-purple rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              ⭐
            </div>
            <div className="text-5xl font-black text-accent-pink mb-3 group-hover:scale-110 transition-transform duration-300">
              4.9/5
            </div>
            <div className="text-magazine-muted font-semibold">
              Average Rating
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float opacity-40 ${
              i % 5 === 0
                ? "w-3 h-3 bg-accent-yellow"
                : i % 5 === 1
                ? "w-2 h-2 bg-accent-pink"
                : i % 5 === 2
                ? "w-2 h-2 bg-accent-blue"
                : i % 5 === 3
                ? "w-1 h-1 bg-accent-purple"
                : "w-1.5 h-1.5 bg-accent-orange"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
