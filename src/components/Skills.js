import React, { useState, useEffect, useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, 
  FaPython, FaGitAlt, FaGithub, FaAward, FaCertificate
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNestjs, SiExpress, SiMysql, 
  SiTensorflow, SiNumpy, SiPandas, SiTypescript, SiMongodb,
  SiAnaconda, SiJupyter, SiVisualstudiocode, SiPostman, SiDocker, SiFigma
} from 'react-icons/si';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      color: 'from-accent-blue to-accent-purple',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, level: 88, color: 'text-yellow-500' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: 'text-blue-600' },
        { name: 'React.js', icon: <FaReact />, level: 85, color: 'text-cyan-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: 'text-teal-500' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs />,
      color: 'from-accent-green to-accent-blue',
      skills: [
        { name: 'PHP', icon: <FaPhp />, level: 88, color: 'text-purple-600' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: 'text-green-600' },
        { name: 'Express.js', icon: <SiExpress />, level: 80, color: 'text-gray-600' },
        { name: 'NestJS', icon: <SiNestjs />, level: 85, color: 'text-red-600' },
        { name: 'MySQL', icon: <SiMysql />, level: 82, color: 'text-blue-600' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 78, color: 'text-green-500' }
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: <FaPython />,
      color: 'from-accent-purple to-accent-pink',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 85, color: 'text-blue-500' },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 78, color: 'text-orange-600' },
        { name: 'NumPy', icon: <SiNumpy />, level: 80, color: 'text-blue-400' },
        { name: 'Pandas', icon: <SiPandas />, level: 75, color: 'text-purple-500' },
        { name: 'Anaconda', icon: <SiAnaconda />, level: 82, color: 'text-green-500' },
        { name: 'Jupyter', icon: <SiJupyter />, level: 80, color: 'text-orange-500' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaGitAlt />,
      color: 'from-accent-yellow to-accent-orange',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: 'text-orange-600' },
        { name: 'GitHub', icon: <FaGithub />, level: 88, color: 'text-gray-800' },
        { name: 'VS Code', icon: <SiVisualstudiocode />, level: 90, color: 'text-blue-600' },
        { name: 'Postman', icon: <SiPostman />, level: 85, color: 'text-orange-500' },
        { name: 'Docker', icon: <SiDocker />, level: 70, color: 'text-blue-500' },
        { name: 'Figma', icon: <SiFigma />, level: 75, color: 'text-purple-600' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Top 10% in Software Engineering Program',
      icon: <FaAward />,
      color: 'from-accent-yellow to-accent-orange'
    },
    {
      title: 'Project Leadership',
      description: 'Led 5+ successful team projects',
      icon: <FaCertificate />,
      color: 'from-accent-blue to-accent-purple'
    },
    {
      title: 'Innovation Award',
      description: 'Best ML Project - University Competition',
      icon: <FaAward />,
      color: 'from-accent-pink to-accent-red'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-magazine-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full px-4 py-2 text-accent-yellow text-sm font-medium backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
            Technical Expertise
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-magazine-text mb-4 font-display">
            My <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-magazine-muted max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-magazine-card border border-magazine-border rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-accent-yellow/50 animate-fadeIn"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white text-2xl`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-magazine-text font-heading">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-full mt-2"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item group">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-magazine-text group-hover:text-accent-yellow transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-accent-yellow bg-accent-yellow/10 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full bg-magazine-border/30 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 lg:p-12 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-magazine-text mb-4 font-heading">
                Achievements & <span className="text-accent-yellow">Recognition</span>
              </h3>
              <p className="text-magazine-muted">
                Milestones that showcase my dedication and expertise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center group animate-fadeIn hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-3xl flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-bold text-magazine-text mb-2 group-hover:text-accent-yellow transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-magazine-muted leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '15+', label: 'Projects Completed', color: 'text-accent-yellow' },
            { number: '10+', label: 'Technologies Mastered', color: 'text-accent-orange' },
            { number: '3+', label: 'Years Experience', color: 'text-accent-pink' },
            { number: '95%', label: 'Success Rate', color: 'text-accent-blue' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-magazine-card border border-magazine-border rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className={`text-4xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-magazine-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
    </section>
  );
};

export default Skills;