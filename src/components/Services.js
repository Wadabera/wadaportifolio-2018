import React from 'react';
import { 
  FaCode, FaServer, FaMobile, FaDatabase, 
  FaBrain, FaRocket, FaCog, FaUsers, FaChartLine
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks like React.js and styling with Tailwind CSS.',
      features: [
        'Responsive Web Design',
        'UI/UX Implementation',
        'Cross-browser Compatibility',
        'Performance Optimization',
        'Modern JavaScript (ES6+)',
        'Component-based Architecture'
      ],
      color: 'from-accent-blue to-accent-purple',
      popular: false
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs using Node.js, NestJS, and PHP with proper architecture patterns.',
      features: [
        'RESTful API Development',
        'Database Integration',
        'Authentication & Authorization',
        'Server Architecture',
        'Microservices Design',
        'Real-time Features'
      ],
      color: 'from-accent-green to-accent-blue',
      popular: true
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database schemas and optimizing queries for better performance.',
      features: [
        'Database Schema Design',
        'Query Optimization',
        'Data Migration',
        'Database Security',
        'Performance Tuning',
        'Backup Strategies'
      ],
      color: 'from-accent-purple to-accent-pink',
      popular: false
    },
    {
      icon: <FaBrain />,
      title: 'Machine Learning',
      description: 'Developing intelligent systems using machine learning and deep learning techniques for various applications.',
      features: [
        'Image Classification',
        'Data Preprocessing',
        'Model Training & Evaluation',
        'Deep Learning Solutions',
        'Computer Vision',
        'Predictive Analytics'
      ],
      color: 'from-accent-orange to-accent-red',
      popular: false
    },
    {
      icon: <FaMobile />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web application development from concept to deployment with modern technologies.',
      features: [
        'Complete Web Applications',
        'System Integration',
        'Deployment & DevOps',
        'Maintenance & Support',
        'Scalable Architecture',
        'Cloud Integration'
      ],
      color: 'from-accent-pink to-accent-purple',
      popular: true
    },
    {
      icon: <FaCog />,
      title: 'Software Engineering',
      description: 'Applying software engineering principles to build scalable, maintainable, and efficient software solutions.',
      features: [
        'Software Architecture',
        'Code Quality & Testing',
        'Version Control',
        'Agile Development',
        'Documentation',
        'Performance Monitoring'
      ],
      color: 'from-accent-yellow to-accent-orange',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project roadmap.',
      icon: <FaUsers />
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Creating wireframes, mockups, and technical architecture for your project.',
      icon: <FaCog />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your solution with clean code and comprehensive testing.',
      icon: <FaCode />
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launching your project and providing ongoing maintenance and support.',
      icon: <FaRocket />
    }
  ];

  return (
    <section id="services" className="section-padding bg-magazine-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full px-4 py-2 text-accent-yellow text-sm font-medium backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
            What I Offer
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-magazine-text mb-4 font-display">
            My <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-magazine-muted max-w-3xl mx-auto leading-relaxed">
            Comprehensive software development services tailored to meet your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-magazine-card border border-magazine-border rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-accent-yellow/50 relative overflow-hidden animate-fadeIn ${
                service.popular ? 'ring-2 ring-accent-yellow/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg text-xs font-bold px-4 py-2 rounded-full transform rotate-12">
                  POPULAR
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Service Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {service.icon}
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-bold text-magazine-text mb-4 group-hover:text-accent-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-magazine-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-magazine-muted">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 lg:p-12 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-magazine-text mb-4 font-heading">
                My <span className="text-accent-yellow">Process</span>
              </h3>
              <p className="text-magazine-muted max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery from start to finish
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-full flex items-center justify-center text-magazine-bg font-black text-xl mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full flex items-center justify-center text-white text-sm">
                      {step.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-magazine-text mb-3 group-hover:text-accent-yellow transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-magazine-muted text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent-yellow/50 to-transparent transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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

export default Services;