import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaEye,
  FaPlay,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGamepad,
  FaShoppingCart,
  FaCloudSun,
  FaCalculator,
  FaHome,
  FaListUl,
  FaServer,
  FaBrain,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaRobot,
  FaLeaf,
  FaApple,
  FaDatabase,
  FaMedkit,
  FaBook,
  FaGraduationCap,
  FaHeart,
} from "react-icons/fa";
import ProjectDemo from "./ProjectDemo";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const projects = [
    // Frontend Projects
    {
      id: 1,
      title: "Apple Homepage Clone",
      category: "Frontend",
      description:
        "Pixel-perfect recreation of Apple's homepage using modern web technologies with responsive design and smooth animations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/2017project",
      githubRepo: "2017project",
      demo: "https://wadabera.github.io/apple-homepage",
      features: [
        "Responsive Design",
        "Smooth Animations",
        "Modern UI/UX",
        "Cross-browser Compatible",
      ],
      color: "from-gray-600 to-gray-800",
      icon: <FaHome />,
    },
    {
      id: 2,
      title: "Makmaksa Afan Oromo",
      category: "Frontend",
      description:
        "Cultural web application showcasing Afan Oromo language and culture with interactive features and educational content.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/2017project",
      githubRepo: "2017project",
      demo: "https://wadabera.github.io/makmaksa-afan-oromo",
      features: [
        "Cultural Content",
        "Interactive Learning",
        "Responsive Layout",
        "Educational Resources",
      ],
      color: "from-green-500 to-yellow-500",
      icon: <FaCode />,
    },
    {
      id: 3,
      title: "Simple Calculator",
      category: "Frontend",
      description:
        "Clean and functional calculator application with basic arithmetic operations and modern design interface.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/simple-calculator",
      githubRepo: "simple-calculator",
      demo: "https://wadabera.github.io/simple-calculator",
      features: [
        "Basic Operations",
        "Clean Interface",
        "Keyboard Support",
        "Error Handling",
      ],
      color: "from-blue-500 to-purple-600",
      icon: <FaCalculator />,
    },
    {
      id: 4,
      title: "Personal Portfolio",
      category: "Frontend",
      description:
        "Professional portfolio website showcasing skills, projects, and experience with modern design and animations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/wadaportifolio",
      githubRepo: "wadaportifolio",
      demo: "https://wadabera.github.io/portfolio",
      features: [
        "Responsive Design",
        "Smooth Scrolling",
        "Contact Form",
        "Project Showcase",
      ],
      color: "from-purple-500 to-pink-500",
      icon: <FaCode />,
    },
    {
      id: 5,
      title: "Wada's Shopping Cart",
      category: "React",
      description:
        "Full-featured e-commerce shopping cart application with product management, cart functionality, and checkout process.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/wada-cart-with-react",
      githubRepo: "wada-cart-with-react",
      demo: "https://wada-shopping-cart.netlify.app",
      features: [
        "Add to Cart",
        "Remove Items",
        "Quantity Control",
        "Total Calculation",
      ],
      color: "from-orange-500 to-red-500",
      icon: <FaShoppingCart />,
    },
    {
      id: 6,
      title: "Crazy React App",
      category: "React",
      description:
        "Creative and interactive React application demonstrating advanced React concepts with dynamic components and state management.",
      technologies: ["React", "JavaScript", "CSS3", "React Hooks"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/crazy--react-project",
      githubRepo: "crazy--react-project",
      demo: "https://crazy-react-app.netlify.app",
      features: [
        "Dynamic Components",
        "State Management",
        "Interactive UI",
        "Modern React Patterns",
      ],
      color: "from-cyan-500 to-blue-500",
      icon: <FaReact />,
    },
    {
      id: 7,
      title: "Amazing Todo List",
      category: "React",
      description:
        "Feature-rich todo list application with CRUD operations, local storage, filtering, and beautiful user interface.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/Todolist-by-react",
      githubRepo: "Todolist-by-react",
      demo: "https://amazing-todo-list.netlify.app",
      features: [
        "Add/Edit/Delete Tasks",
        "Mark Complete",
        "Filter Options",
        "Persistent Storage",
      ],
      color: "from-green-500 to-teal-500",
      icon: <FaListUl />,
    },
    {
      id: 8,
      title: "E-commerce Landing Page",
      category: "React",
      description:
        "Modern e-commerce landing page with product showcase, responsive design, and smooth animations built with React.",
      technologies: ["React", "JavaScript", "CSS3", "React Router"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/ecommerce-landing-page-with-react-",
      githubRepo: "ecommerce-landing-page-with-react-",
      demo: "https://ecommerce-landing-react.netlify.app",
      features: [
        "Product Showcase",
        "Responsive Design",
        "Smooth Animations",
        "Modern UI",
      ],
      color: "from-indigo-500 to-purple-600",
      icon: <FaShoppingCart />,
    },
    {
      id: 9,
      title: "Weather Fetch API",
      category: "Frontend",
      description:
        "Weather application using fetch API to get real-time weather data with location search and detailed forecasts.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/weather-fetch-api",
      githubRepo: "weather-fetch-api",
      demo: "https://wadabera.github.io/weather-fetch-api",
      features: [
        "Real-time Weather",
        "Location Search",
        "Detailed Forecast",
        "Responsive Design",
      ],
      color: "from-blue-400 to-cyan-500",
      icon: <FaCloudSun />,
    },
    {
      id: 10,
      title: "Tic Tac Toe Game",
      category: "Frontend",
      description:
        "Interactive Tic Tac Toe game with smart AI opponent, score tracking, and beautiful animations.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/tictoe-game",
      githubRepo: "tictoe-game",
      demo: "https://wadabera.github.io/tictoe-game",
      features: [
        "Player vs AI",
        "Score Tracking",
        "Smooth Animations",
        "Responsive Design",
      ],
      color: "from-red-500 to-pink-500",
      icon: <FaGamepad />,
    },
    // Backend/Fullstack Projects
    {
      id: 11,
      title: "Chella API",
      category: "Backend",
      description:
        "Scalable RESTful API built with NestJS and MongoDB, featuring modular architecture, JWT authentication, and real-time capabilities.",
      technologies: ["NestJS", "MongoDB", "TypeScript", "JWT", "WebSocket"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/chelle-api",
      githubRepo: "chelle-api",
      demo: "https://chella-api-docs.herokuapp.com",
      features: [
        "RESTful API",
        "JWT Authentication",
        "Real-time Updates",
        "Modular Architecture",
      ],
      color: "from-emerald-600 to-teal-600",
      icon: <FaServer />,
    },
    {
      id: 12,
      title: "Student SRS System",
      category: "Fullstack",
      description:
        "Comprehensive Student Software Requirement Specification management system with role-based access control and document generation.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/student-srs-system",
      githubRepo: "student-srs-system",
      demo: "https://student-srs-demo.herokuapp.com",
      features: [
        "Student Management",
        "Document Generation",
        "Role-based Access",
        "Report Analytics",
      ],
      color: "from-blue-600 to-indigo-600",
      icon: <FaGraduationCap />,
    },
    {
      id: 13,
      title: "Baby Vaccination Management",
      category: "Fullstack",
      description:
        "Digital health system for managing baby vaccination records, schedules, and automated reminders with parent portal and clinic dashboard.",
      technologies: ["PHP", "MySQL", "Bootstrap", "Chart.js", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/baby-vaccination-management-system",
      githubRepo: "baby-vaccination-management-system",
      demo: "https://baby-vaccination-demo.herokuapp.com",
      features: [
        "Vaccination Tracking",
        "Automated Reminders",
        "Parent Portal",
        "Health Analytics",
      ],
      color: "from-pink-500 to-rose-500",
      icon: <FaHeart />,
    },
    {
      id: 14,
      title: "Telegram Bible Bot",
      category: "Backend",
      description:
        "Intelligent Telegram chatbot providing Bible verses, daily devotions, and spiritual guidance with natural language processing capabilities.",
      technologies: [
        "NestJS",
        "MongoDB",
        "Telegram Bot API",
        "Node.js",
        "TypeScript",
      ],
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/telegram-bible-bot",
      githubRepo: "telegram-bible-bot",
      demo: "https://t.me/WadaBibleBot",
      features: [
        "Natural Language Processing",
        "Daily Devotions",
        "Verse Search",
        "Multi-language Support",
      ],
      color: "from-amber-500 to-orange-500",
      icon: <FaRobot />,
    },
    // Machine Learning Projects
    {
      id: 15,
      title: "Fruit & Vegetable Classifier",
      category: "Machine Learning",
      description:
        "Advanced deep learning model for real-time fruit and vegetable classification with 95% accuracy using CNN and transfer learning techniques.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "NumPy",
        "Streamlit",
      ],
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&h=300&fit=crop&auto=format",
      github: "https://github.com/Wadabera/deep-learning-project-vegetable-fruit-identifier-model_format",
      githubRepo: "deep-learning-project-vegetable-fruit-identifier-model_format",
      demo: "https://fruit-vegetable-classifier.streamlit.app",
      features: [
        "95% Accuracy",
        "Real-time Classification",
        "Transfer Learning",
        "Web Interface",
      ],
      color: "from-green-500 to-emerald-600",
      icon: <FaBrain />,
    },
  ];

  const categories = [
    { name: "All", icon: <FaCode />, count: projects.length },
    {
      name: "Frontend",
      icon: <FaHtml5 />,
      count: projects.filter((p) => p.category === "Frontend").length,
    },
    {
      name: "React",
      icon: <FaReact />,
      count: projects.filter((p) => p.category === "React").length,
    },
    {
      name: "Backend",
      icon: <FaServer />,
      count: projects.filter((p) => p.category === "Backend").length,
    },
    {
      name: "Fullstack",
      icon: <FaDatabase />,
      count: projects.filter((p) => p.category === "Fullstack").length,
    },
    {
      name: "Machine Learning",
      icon: <FaBrain />,
      count: projects.filter((p) => p.category === "Machine Learning").length,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openDemo = (project, type = "demo") => {
    if (!project) return; // Safety check

    setSelectedProject(project);
    setDemoModalOpen(true);
  };

  const closeModals = () => {
    setDemoModalOpen(false);
    // Small delay to ensure smooth closing animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="section-padding bg-magazine-bg relative overflow-hidden"
    >
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
            Portfolio Showcase
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-magazine-text mb-4 font-display">
            My{" "}
            <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-magazine-muted max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my development projects spanning
            frontend, React, backend APIs, and fullstack applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 ${
                activeFilter === category.name
                  ? "bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg shadow-2xl"
                  : "bg-magazine-card border border-magazine-border text-magazine-text hover:border-accent-yellow/50 hover:text-accent-yellow"
              }`}
            >
              <span
                className={`text-lg ${
                  activeFilter === category.name
                    ? "text-magazine-bg"
                    : "text-accent-yellow"
                }`}
              >
                {category.icon}
              </span>
              <span>{category.name}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-bold ${
                  activeFilter === category.name
                    ? "bg-magazine-bg/20 text-magazine-bg"
                    : "bg-accent-yellow/20 text-accent-yellow"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Improved Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-magazine-card border border-magazine-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:border-accent-yellow/50 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image with Enhanced Hover */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback with project icon */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl text-white hidden`}
                >
                  {project.icon}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} shadow-lg backdrop-blur-sm`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Demo Button */}
                    <button
                      onClick={() => openDemo(project, "demo")}
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl font-medium"
                      title="View Live Demo"
                    >
                      <FaEye size={16} />
                      <span className="text-sm">Demo</span>
                    </button>
                    {/* GitHub Button */}
                    <a
                      href={`https://github.com/Wadabera/${project.githubRepo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl font-medium"
                      title="View Source Code"
                    >
                      <FaGithub size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>

                {/* Project Icon */}
                <div className="absolute bottom-4 right-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center text-white shadow-lg opacity-90`}
                  >
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-magazine-text group-hover:text-accent-yellow transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-magazine-muted text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent-yellow/10 border border-accent-yellow/30 text-accent-yellow text-xs rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-magazine-border/20 text-magazine-muted text-xs rounded-lg font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-magazine-text">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-xs text-magazine-muted"
                        >
                          <div className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-2 flex-shrink-0"></div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => openDemo(project, "demo")}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-accent-yellow to-accent-orange text-magazine-bg rounded-xl hover:scale-105 transition-all duration-300 text-sm font-medium shadow-lg"
                  >
                    <FaPlay size={14} />
                    <span>Live Demo</span>
                  </button>
                  <a
                    href={`https://github.com/Wadabera/${project.githubRepo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-magazine-border/20 text-magazine-text rounded-xl hover:bg-gray-700 hover:text-white transition-all duration-300 text-sm font-medium border border-magazine-border"
                  >
                    <FaGithub size={14} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-16 pt-16 border-t border-magazine-border">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-yellow mb-2">
              {projects.length}
            </div>
            <div className="text-magazine-muted">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-orange mb-2">
              {
                projects.filter(
                  (p) => p.category === "Frontend" || p.category === "React"
                ).length
              }
            </div>
            <div className="text-magazine-muted">Frontend Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-pink mb-2">
              {
                projects.filter(
                  (p) => p.category === "Backend" || p.category === "Fullstack"
                ).length
              }
            </div>
            <div className="text-magazine-muted">Backend Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-purple mb-2">
              {projects.filter((p) => p.category === "Machine Learning").length}
            </div>
            <div className="text-magazine-muted">ML Projects</div>
          </div>
        </div>
      </div>

      {/* Demo Modal - Simplified */}
      {selectedProject && (
        <ProjectDemo
          project={selectedProject}
          isOpen={demoModalOpen}
          onClose={closeModals}
        />
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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

export default Projects;
