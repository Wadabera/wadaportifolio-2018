import { useState } from 'react';
import { 
  FaCertificate, FaAward, FaExternalLinkAlt, 
  FaCalendarAlt, FaUniversity, FaBrain, FaCode, FaLanguage,
  FaChevronLeft, FaChevronRight, FaEye
} from 'react-icons/fa';
import udacity from '../images/Ai-photo.jpg'
import intern from '../images/intern-certificate.jpg'
import english from '../images/english-cerificate.jpg'
const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Your actual certificates with working placeholder images
  const certificates = [
    {
      id: 1,
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'Udacity',
      date: 'December 2024',
      description: 'Verified Certificate of Nanodegree Program Completion covering AI fundamentals, machine learning concepts, and practical applications.',
      image:udacity,
      verificationUrl: 'https://www.udacity.com/certificate/ef229b0',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Data Analysis'],
      icon: <FaBrain />,
      color: 'from-accent-purple to-accent-blue',
      certificateId: 'ef229b0'
    },
    {
      id: 2,
      title: 'Frontend Development Internship',
      issuer: 'Prodigy InfoTech',
      date: 'January 2025',
      description: '1-month internship in Web Development with outstanding remarks, covering modern frontend technologies and best practices.',
      image: intern,
      verificationUrl: 'https://prodigyinfotech.dev/certificate/PIT-FEB25-12729',
      skills: ['Frontend Development', 'React', 'JavaScript', 'Web Development'],
      icon: <FaCode />,
      color: 'from-accent-blue to-accent-green',
      certificateId: 'PIT/FEB25/12729'
    },
    {
      id: 3,
      title: 'American & British Language Advanced',
      issuer: 'H.U Square Language School',
      date: 'November 2024',
      description: 'Six-months advanced English language course completion from Beginner to Advanced levels, recognized as Graduate Student.',
      image: english,
      verificationUrl: '#',
      skills: ['English Language', 'Communication', 'Advanced Grammar', 'Professional Writing'],
      icon: <FaLanguage />,
      color: 'from-accent-yellow to-accent-orange',
      certificateId: '08VLQ7DZVJ'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="section-padding bg-magazine-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full px-4 py-2 text-accent-yellow text-sm font-medium backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
            Professional Achievements
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-magazine-text mb-4 font-display">
            My <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-lg sm:text-xl text-magazine-muted max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise in AI, Frontend Development, and English Language
          </p>
        </div>

        {/* Certificates Display - All Three Side by Side */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-full flex items-center justify-center text-magazine-bg hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            <FaChevronRight />
          </button>

          {/* All Three Certificates Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {certificates.map((certificate, index) => (
              <div 
                key={certificate.id} 
                className={`group bg-magazine-card border border-magazine-border rounded-2xl lg:rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-accent-yellow/50 animate-fadeIn ${
                  index === currentSlide ? 'ring-2 ring-accent-yellow' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Certificate Image/Preview */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-20`}></div>
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Use a solid color background with icon as fallback
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full bg-gradient-to-br ${certificate.color} flex items-center justify-center text-6xl text-white hidden`}>
                    {certificate.icon}
                  </div>
                  
                  {/* Certificate ID Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-mono rounded-lg backdrop-blur-sm">
                      ID: {certificate.certificateId}
                    </span>
                  </div>

                  {/* View/Verify Buttons */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={() => openCertificate(certificate)}
                      className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title="View Certificate"
                    >
                      <FaEye size={12} />
                    </button>
                    {certificate.verificationUrl !== '#' && (
                      <a
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title="Verify Certificate"
                      >
                        <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                  </div>

                  {/* Award Icon */}
                  <div className="absolute bottom-3 right-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-full flex items-center justify-center text-magazine-bg shadow-lg">
                      <FaAward size={16} />
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  {/* Certificate Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-magazine-text group-hover:text-accent-yellow transition-colors duration-300 line-clamp-2">
                    {certificate.title}
                  </h3>

                  {/* Issuer and Date */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent-yellow">
                      <FaUniversity size={14} />
                      <span className="font-medium text-sm">{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-magazine-muted">
                      <FaCalendarAlt size={12} />
                      <span className="text-sm">{certificate.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-magazine-muted text-sm leading-relaxed line-clamp-3">
                    {certificate.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-accent-yellow/10 border border-accent-yellow/30 text-accent-yellow text-xs rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="px-2 py-1 bg-magazine-border/20 text-magazine-muted text-xs rounded-lg font-medium">
                        +{certificate.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    {certificate.verificationUrl !== '#' ? (
                      <a
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r ${certificate.color} text-white rounded-xl hover:scale-105 transition-all duration-300 text-sm font-medium shadow-lg`}
                      >
                        <FaCertificate size={14} />
                        <span>Verify</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => openCertificate(certificate)}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r ${certificate.color} text-white rounded-xl hover:scale-105 transition-all duration-300 text-sm font-medium shadow-lg`}
                      >
                        <FaEye size={14} />
                        <span>View</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent-yellow scale-125' : 'bg-magazine-border hover:bg-magazine-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-magazine-border">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-yellow mb-2">3</div>
            <div className="text-magazine-muted">Professional Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-orange mb-2">2024-25</div>
            <div className="text-magazine-muted">Latest Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-pink mb-2">100%</div>
            <div className="text-magazine-muted">Verified</div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-magazine-card border border-magazine-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-magazine-text">{selectedCertificate.title}</h3>
                <button
                  onClick={closeCertificate}
                  className="w-10 h-10 bg-magazine-border/20 hover:bg-red-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  ×
                </button>
              </div>
              
              <div className="aspect-video bg-magazine-border/10 rounded-xl overflow-hidden mb-6">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={`w-full h-full bg-gradient-to-br ${selectedCertificate.color} flex items-center justify-center text-8xl text-white hidden`}>
                  {selectedCertificate.icon}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-magazine-text mb-2">Certificate Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-accent-yellow">Issuer:</span> {selectedCertificate.issuer}</div>
                    <div><span className="text-accent-yellow">Date:</span> {selectedCertificate.date}</div>
                    <div><span className="text-accent-yellow">ID:</span> {selectedCertificate.certificateId}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-magazine-text mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-accent-yellow/10 text-accent-yellow text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selectedCertificate.verificationUrl !== '#' && (
                <div className="mt-6 pt-6 border-t border-magazine-border">
                  <a
                    href={selectedCertificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r ${selectedCertificate.color} text-white rounded-xl hover:scale-105 transition-all duration-300 font-medium`}
                  >
                    <FaExternalLinkAlt />
                    Verify Certificate Online
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-30 ${
              i % 3 === 0 ? 'bg-accent-yellow' : 
              i % 3 === 1 ? 'bg-accent-orange' : 'bg-accent-pink'
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

export default Certificates;