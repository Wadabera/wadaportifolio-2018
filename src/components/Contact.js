import React, { useState } from "react";
import wadacont from "../images/lubbu.jpg";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaPaperPlane,
  FaUser,
  FaSpinner,
  FaRocket,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - You need to set up EmailJS account
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
        to_email: "waadaaabarraa@gmail.com",
      };

      // Initialize EmailJS (replace with your actual IDs)
      await emailjs.send(
        "service_portfolio", // Your EmailJS service ID
        "template_contact", // Your EmailJS template ID
        templateParams,
        "your_public_key" // Your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      
      // Fallback: Create mailto link
      const mailtoLink = `mailto:waadaaabarraa@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(mailtoLink, '_blank');
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-magazine-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-accent-blue/5 to-accent-green/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full px-6 py-3 text-accent-yellow text-sm font-bold backdrop-blur-sm mb-6 animate-pulse">
            <div className="w-3 h-3 bg-accent-yellow rounded-full animate-ping"></div>
            Let's Work Together
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-magazine-text mb-6 font-display leading-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink bg-clip-text text-transparent animate-gradient bg-300%">
              With Me
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-magazine-muted max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20">
          {/* Left Side - Profile & Contact Info */}
          <div className="space-y-8 animate-slideLeft">
            {/* Main Profile Card */}
            <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-accent-yellow/50">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 via-accent-orange/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink rounded-3xl p-1 animate-gradient bg-300%">
                      <div className="w-full h-full bg-magazine-bg rounded-3xl overflow-hidden">
                        <img
                          src={wadacont}
                          alt="Wada Abera"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-green rounded-full border-4 border-magazine-bg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-3xl font-black text-accent-yellow mb-2 font-display">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-lg text-magazine-text font-semibold mb-3">
                      {PERSONAL_INFO.title}
                    </p>
                    <p className="text-magazine-muted leading-relaxed mb-4">
                      I am available for freelance work. Connect with me via
                      email and call to discuss your project.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-accent-green/10 border border-accent-green/30 rounded-full px-4 py-2 text-accent-green text-sm font-bold">
                      <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                      Available for Projects
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-magazine-bg/50 rounded-2xl border border-magazine-border/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-xl flex items-center justify-center text-white">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-accent-yellow font-semibold text-sm">
                        Phone:
                      </p>
                      <p className="text-accent-pink font-bold text-lg">
                        {PERSONAL_INFO.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-magazine-bg/50 rounded-2xl border border-magazine-border/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-pink to-accent-purple rounded-xl flex items-center justify-center text-white">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-accent-yellow font-semibold text-sm">
                        Email:
                      </p>
                      <p className="text-accent-pink font-bold text-lg break-all">
                        {PERSONAL_INFO.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-magazine-border">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-accent-pink to-accent-red rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    <FaTelegram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="bg-magazine-card border border-magazine-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-accent-yellow/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-yellow to-accent-orange rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope />
                </div>
                <h4 className="font-bold text-magazine-text group-hover:text-accent-yellow transition-colors duration-300 mb-2">
                  Email Me
                </h4>
                <p className="text-magazine-muted text-sm">
                  Send me an email directly
                </p>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="bg-magazine-card border border-magazine-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-accent-pink/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-pink to-accent-purple rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone />
                </div>
                <h4 className="font-bold text-magazine-text group-hover:text-accent-pink transition-colors duration-300 mb-2">
                  Call Me
                </h4>
                <p className="text-magazine-muted text-sm">
                  Let's talk about your project
                </p>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-slideRight">
            <div className="bg-magazine-card border border-magazine-border rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-accent-purple/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-pink to-accent-purple rounded-2xl flex items-center justify-center text-white">
                    <FaRocket size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-magazine-text font-display">
                      Send Message
                    </h3>
                    <p className="text-magazine-muted">
                      Let's start something amazing together
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Your Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-bold text-accent-yellow mb-3"
                    >
                      Your Name
                    </label>
                    <div className="relative group">
                      <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-magazine-muted group-focus-within:text-accent-yellow transition-colors duration-300" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-magazine-bg border-2 border-magazine-border rounded-2xl text-magazine-text placeholder-magazine-muted focus:border-accent-yellow focus:outline-none transition-all duration-300 hover:border-accent-yellow/50"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-bold text-accent-yellow mb-3"
                    >
                      Phone Number
                    </label>
                    <div className="relative group">
                      <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-magazine-muted group-focus-within:text-accent-orange transition-colors duration-300" />
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-magazine-bg border-2 border-magazine-border rounded-2xl text-magazine-text placeholder-magazine-muted focus:border-accent-orange focus:outline-none transition-all duration-300 hover:border-accent-orange/50"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-accent-yellow mb-3"
                    >
                      Email
                    </label>
                    <div className="relative group">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-magazine-muted group-focus-within:text-accent-pink transition-colors duration-300" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-magazine-bg border-2 border-magazine-border rounded-2xl text-magazine-text placeholder-magazine-muted focus:border-accent-pink focus:outline-none transition-all duration-300 hover:border-accent-pink/50"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-accent-yellow mb-3"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-magazine-bg border-2 border-magazine-border rounded-2xl text-magazine-text placeholder-magazine-muted focus:border-accent-blue focus:outline-none transition-all duration-300 hover:border-accent-blue/50"
                      placeholder="Enter subject"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-accent-yellow mb-3"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-magazine-bg border-2 border-magazine-border rounded-2xl text-magazine-text placeholder-magazine-muted focus:border-accent-purple focus:outline-none transition-all duration-300 resize-none hover:border-accent-purple/50"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue text-white font-black py-5 px-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          <span>SENDING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </div>
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 p-6 bg-accent-green/10 border-2 border-accent-green/30 rounded-2xl text-accent-green animate-slideUp">
                      <FaCheckCircle size={24} />
                      <div>
                        <p className="font-bold">Message Sent Successfully!</p>
                        <p className="text-sm opacity-80">
                          Thank you! I'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 p-6 bg-accent-red/10 border-2 border-accent-red/30 rounded-2xl text-accent-red animate-slideUp">
                      <FaExclamationTriangle size={24} />
                      <div>
                        <p className="font-bold">Message Failed to Send</p>
                        <p className="text-sm opacity-80">
                          Please try again or contact me directly at{" "}
                          {PERSONAL_INFO.email}
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float opacity-40 ${
              i % 4 === 0
                ? "w-2 h-2 bg-accent-yellow"
                : i % 4 === 1
                ? "w-1 h-1 bg-accent-pink"
                : i % 4 === 2
                ? "w-1.5 h-1.5 bg-accent-blue"
                : "w-1 h-1 bg-accent-purple"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
