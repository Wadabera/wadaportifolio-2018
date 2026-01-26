import React, { useState, useEffect } from "react";
import wadapct from "../images/photo_WADA1.jpg";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaCode,
  FaBrain,
  FaRocket,
} from "react-icons/fa";
import { PERSONAL_INFO } from "../utils/constants";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = [
      "Software Engineering Student",
      "Full-Stack Web Developer",
      "Machine Learning Enthusiast",
      "Problem Solver & Innovator",
    ];

    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    try {
      // Method 1: Try direct download with correct filename
      const link = document.createElement("a");
      link.href = `${process.env.PUBLIC_URL}/cv/Wada_Abera_CV_Two_Column (1).pdf`;
      link.download = "Wada_Abera_CV_Two_Column.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Method 2: Fallback to window.open
      console.log("Direct download failed, trying window.open");
      window.open(
        `${process.env.PUBLIC_URL}/cv/Wada_Abera_CV_Two_Column (1).pdf`,
        "_blank"
      );
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-magazine-bg relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-accent-yellow/20 to-accent-orange/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-accent-pink/20 to-accent-purple/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-yellow/30 to-transparent animate-pulse"></div>
          <div
            className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-pink/30 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container-custom relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-slideLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full px-4 py-2 text-accent-yellow text-sm font-medium backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
              Available for opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-magazine-text leading-none">
                <span className="block">I'M</span>
                <span className="block bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent animate-gradient bg-300% font-display">
                  {PERSONAL_INFO.name.split(" ")[0]}
                </span>
                <span className="block text-accent-yellow font-display">
                  {PERSONAL_INFO.name.split(" ")[1]}
                </span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="h-16 flex items-center">
              <div className="text-2xl lg:text-3xl font-bold text-magazine-muted">
                <span className="typewriter text-accent-orange">
                  {displayText}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-magazine-muted leading-relaxed max-w-xl">
              Creating{" "}
              <span className="text-accent-yellow font-semibold">
                innovative digital experiences
              </span>{" "}
              and exploring the frontiers of{" "}
              <span className="text-accent-pink font-semibold">
                machine learning
              </span>
              . Currently pursuing Software Engineering at Jimma University.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-accent-yellow">
                  15+
                </div>
                <div className="text-sm text-magazine-muted">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent-orange">3+</div>
                <div className="text-sm text-magazine-muted">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent-pink">10+</div>
                <div className="text-sm text-magazine-muted">Technologies</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToAbout}
                className="group relative bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket className="group-hover:animate-bounce" />
                  Let's Create Something Amazing
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                className="group border-2 border-accent-yellow text-accent-yellow font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-accent-yellow hover:text-magazine-bg"
                onClick={downloadCV}
              >
                <span className="flex items-center gap-2">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download CV
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                {
                  icon: FaGithub,
                  color: "hover:bg-accent-yellow",
                  href: "https://github.com/Wadabera",
                },
                {
                  icon: FaLinkedin,
                  color: "hover:bg-accent-blue",
                  href: "https://www.linkedin.com/in/wada-abera",
                },
                {
                  icon: FaTelegram,
                  color: "hover:bg-accent-pink",
                  href: "https://t.me/promisepact",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-14 h-14 bg-magazine-card border border-magazine-border rounded-xl flex items-center justify-center text-magazine-muted ${social.color} hover:text-magazine-bg transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Profile */}
          <div className="flex justify-center lg:justify-end animate-slideRight">
            <div className="relative group">
              {/* Main Profile Container */}
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
                {/* Rotating Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow via-accent-orange via-accent-pink to-accent-purple rounded-full animate-spin-slow p-1">
                  <div className="w-full h-full bg-magazine-bg rounded-full"></div>
                </div>

                {/* Profile Image - Optimized for Circular Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-magazine-card group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-accent-purple via-accent-blue to-accent-pink">
                  <img
                    src={wadapct}
                    alt="Wada Abera - Fullstack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
                      objectPosition: "center center",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-magazine-bg/10 to-transparent"></div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-2xl p-4 shadow-2xl animate-float">
                  <FaCode size={24} className="text-magazine-bg" />
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-accent-pink to-accent-purple rounded-2xl p-4 shadow-2xl animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <FaBrain size={24} className="text-white" />
                </div>

                <div
                  className="absolute top-1/2 -right-8 bg-gradient-to-r from-accent-blue to-accent-green rounded-xl p-3 shadow-2xl animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <FaRocket size={20} className="text-white" />
                </div>

                {/* Skill Indicators */}
                <div className="absolute top-8 left-8 space-y-2">
                  {["React", "Node.js", "Python"].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-magazine-card/80 backdrop-blur-sm border border-magazine-border rounded-lg px-3 py-1 text-xs text-accent-yellow font-medium animate-slideLeft"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Decorative Particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-accent-yellow rounded-full animate-pulse opacity-60"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-magazine-muted hover:text-accent-yellow transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Explore More</span>
            <div className="w-6 h-10 border-2 border-magazine-border group-hover:border-accent-yellow rounded-full flex justify-center transition-colors duration-300">
              <div className="w-1 h-3 bg-accent-yellow rounded-full mt-2 animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-40 ${
              i % 3 === 0
                ? "bg-accent-yellow"
                : i % 3 === 1
                ? "bg-accent-pink"
                : "bg-accent-blue"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
