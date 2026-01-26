import React from "react";
import wadaImg from "../images/dave.jpg";

import {
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaRocket,
  FaAward,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "Fourth-year Software Engineering student at Jimma University",
      color: "from-accent-yellow to-accent-orange",
    },
    {
      icon: <FaCode />,
      title: "Development",
      description: "Full-stack web development with modern technologies",
      color: "from-accent-blue to-accent-purple",
    },
    {
      icon: <FaBrain />,
      title: "AI/ML",
      description: "Machine Learning and Deep Learning enthusiast",
      color: "from-accent-pink to-accent-red",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Passionate about solving real-world problems",
      color: "from-accent-green to-accent-blue",
    },
  ];

  const achievements = [
    { number: "15+", label: "Projects Completed", icon: <FaCode /> },
    { number: "3+", label: "Years Experience", icon: <FaAward /> },
    { number: "10+", label: "Technologies", icon: <FaBrain /> },
    { number: "100%", label: "Dedication", icon: <FaUsers /> },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-magazine-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full px-4 py-2 text-accent-yellow text-sm font-medium backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
            Get to know me
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-magazine-text mb-4 font-display">
            About{" "}
            <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-magazine-muted max-w-3xl mx-auto leading-relaxed">
            A passionate software engineer crafting digital experiences and
            exploring the future of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start animate-slideLeft">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[450px]">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow via-accent-orange via-accent-pink to-accent-purple rounded-3xl animate-gradient bg-300% p-1">
                  <div className="w-full h-full bg-magazine-bg rounded-3xl"></div>
                </div>

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-magazine-card z-20">
                  <img
                    src={wadaImg}
                    alt="Wada Abera"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-magazine-bg/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-2xl p-4 shadow-2xl animate-float">
                  <FaCode size={24} className="text-magazine-bg" />
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-accent-pink to-accent-purple rounded-2xl p-4 shadow-2xl animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <FaBrain size={24} className="text-white" />
                </div>

                {/* Decorative Particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-accent-yellow rounded-full animate-pulse opacity-60"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slideRight space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-magazine-text font-heading">
                Crafting Digital Excellence
              </h3>

              <div className="space-y-4 text-magazine-muted leading-relaxed">
                <p>
                  I am a{" "}
                  <span className="text-accent-yellow font-semibold">
                    fourth-year Software Engineering student
                  </span>{" "}
                  at Jimma University with a strong foundation in programming
                  languages, algorithms, data structures, and software
                  development principles.
                </p>

                <p>
                  My journey in technology spans{" "}
                  <span className="text-accent-orange font-semibold">
                    full-stack development
                  </span>
                  , where I create seamless user experiences, and{" "}
                  <span className="text-accent-pink font-semibold">
                    machine learning
                  </span>
                  , where I explore the possibilities of artificial
                  intelligence.
                </p>

                <p>
                  I believe in{" "}
                  <span className="text-accent-blue font-semibold">
                    continuous learning
                  </span>{" "}
                  and applying engineering principles to solve real-world
                  challenges. Every project is an opportunity to push boundaries
                  and create something meaningful.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-magazine-card border border-magazine-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-magazine-text mb-2 group-hover:text-accent-yellow transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-magazine-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-magazine-text mb-4 font-heading">
                Achievements &{" "}
                <span className="text-accent-yellow">Milestones</span>
              </h3>
              <p className="text-magazine-muted">
                Numbers that reflect my journey and dedication to excellence
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center group animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-2xl flex items-center justify-center text-magazine-bg text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-black text-accent-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-magazine-muted font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-30 ${
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

export default About;
