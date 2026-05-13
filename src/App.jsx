import { useState, useEffect } from "react";
import Pp from "./assets/IMG_2470.jpg";
import Github_img from "./assets/github.png";
import Linkedin_img from "./assets/linkedin.png";
import About_pic from "./assets/about_image.png";
import Exp from "./assets/exp.png";
import Edu from "./assets/edu.png";
import Dropdown from "./assets/dd.png";
import Verified from "./assets/verified.png";
import Portfolio_ss from "./assets/portfolio_ss.png";
import JobBridge_ss from "./assets/jobbridge_ss.png";
import Dummy_ss from "./assets/Dummy_ss.png";
import Mail from "./assets/mail.png";

function App() {
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, default to true if not set
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Persist dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleHam = () => setIsHamOpen(!isHamOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const openResume = () => window.open("/Rajan-Subedi-cv.pdf", "_blank");
  const openSection = () => (window.location.href = "#contact");
  const openExperience = () => (window.location.href = "#experience");
  const openProjects = () => (window.location.href = "#projects");
  const openContact = () => (window.location.href = "#contact");
  const openAbout = () => (window.location.href = "#about");
  const openLinkedIn = () =>
    window.open(
      "https://www.linkedin.com/in/rajan-subedi-5b5336396/",
      "_blank",
    );
  const openGithub = () =>
    window.open("https://github.com/subedi1680", "_blank");

  return (
    <>
      {/* Hero Section */}
      <div
        className={`min-h-screen w-full transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        {/* Navigation */}
        <nav className="p-1 md:px-10 md:py-4">
          <div className="flex justify-between items-center mx-5 py-2 md:mx-50 md:py-5">
            <div className="text-3xl font-semibold md:text-4xl">
              Rajan Subedi
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-2xl font-semibold items-center">
              <a
                href="#about"
                className="hover:text-gray-500 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-gray-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-gray-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-gray-500 transition-colors"
              >
                Contact
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`ml-4 p-2.5 rounded-full transition-all duration-500 transform ${isDarkMode ? "bg-yellow-400 rotate-180 scale-110" : "bg-gray-800 rotate-0 scale-100"} hover:scale-125`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Icons */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-500 transform ${isDarkMode ? "bg-yellow-400 rotate-180" : "bg-gray-800 rotate-0"} hover:scale-110`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <button className="text-3xl font-bold" onClick={toggleHam}>
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isHamOpen && (
            <div
              className={`flex flex-col items-center py-4 space-y-4 md:hidden transition-all duration-300 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
            >
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openAbout();
                }}
                className="text-xl font-semibold hover:underline cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openExperience();
                }}
                className="text-xl font-semibold hover:underline cursor-pointer"
              >
                Experience
              </a>
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openProjects();
                }}
                className="text-xl font-semibold hover:underline cursor-pointer"
              >
                Projects
              </a>
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openContact();
                }}
                className="text-xl font-semibold hover:underline cursor-pointer"
              >
                Contact
              </a>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row justify-center items-center md:my-25 mt-10 px-4">
          <div className="md:w-100 mb-8 md:mb-0">
            <img
              src={Pp}
              alt="Rajan Subedi"
              className="md:h-100 md:w-100 rounded-full h-64 w-64 sm:h-80 sm:w-80 object-cover mx-auto shadow-2xl ring-4 ring-blue-500 ring-offset-4 ring-offset-gray-900 transition-all duration-300 hover:ring-blue-400"
              loading="eager"
            />
          </div>
          <div className="w-full md:w-100 flex flex-col justify-center space-y-4 md:space-y-5 md:mx-10">
            <p
              className={`text-lg sm:text-xl md:text-2xl text-center transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Hello I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Rajan Subedi
            </h1>
            <p
              className={`text-xl sm:text-2xl md:text-3xl text-center transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Frontend Developer
            </p>

            <div className="flex justify-center flex-wrap gap-3">
              <button
                className={`px-6 py-2 border-2 rounded-full cursor-pointer transition-all duration-300 font-semibold ${isDarkMode ? "bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:scale-105 hover:shadow-lg" : "bg-white border-black hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg"}`}
                onClick={openResume}
              >
                📄 Open CV
              </button>
              <button
                className={`px-6 py-2 border-2 rounded-full cursor-pointer transition-all duration-300 font-semibold ${isDarkMode ? "bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-lg" : "bg-gray-700 text-white border-gray-700 hover:bg-black hover:border-black hover:scale-105 hover:shadow-lg"}`}
                onClick={openSection}
              >
                ✉️ Contact Info
              </button>
            </div>

            <div className="flex justify-center gap-4">
              <img
                className={`h-12 w-12 md:h-15 md:w-15 cursor-pointer hover:scale-110 transition-all duration-300 ${isDarkMode ? "bg-white rounded-full p-2" : ""}`}
                src={Linkedin_img}
                alt="LinkedIn"
                onClick={openLinkedIn}
                onKeyDown={(e) => e.key === "Enter" && openLinkedIn()}
                tabIndex={0}
                role="button"
              />
              <img
                className={`h-12 w-12 md:h-15 md:w-15 cursor-pointer hover:scale-110 transition-all duration-300 ${isDarkMode ? "bg-white rounded-full p-2" : ""}`}
                src={Github_img}
                alt="GitHub"
                onClick={openGithub}
                onKeyDown={(e) => e.key === "Enter" && openGithub()}
                tabIndex={0}
                role="button"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className={`min-h-screen w-full px-4 transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <div id="about" className="flex flex-col items-center py-10">
          <div className="flex flex-col items-center mb-10">
            <p
              className={`transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Get To Know More
            </p>
            <h1 className="font-bold text-3xl md:text-5xl mt-2">About Me</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 max-w-7xl">
            <div className="mb-6 md:mb-0 group">
              <img
                src={About_pic}
                alt="About Rajan"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-100 md:h-100 rounded-2xl grayscale group-hover:grayscale-0 object-cover shadow-xl transition-all duration-500 transform group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center w-full md:w-auto max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
                <div
                  className={`flex flex-col justify-center items-center border rounded-2xl p-6 flex-1 min-w-[250px] transition-all duration-300 ${isDarkMode ? "border-gray-600 bg-gray-800 hover:bg-gray-750" : "border-black bg-white hover:shadow-lg"}`}
                >
                  <img
                    src={Exp}
                    alt="Experience"
                    className={`h-8 w-8 mb-2 ${isDarkMode ? "filter invert" : ""}`}
                  />
                  <h2 className="font-bold text-lg">Experience</h2>
                  <p
                    className={`transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Fresher
                  </p>
                  <p
                    className={`text-center transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Frontend Development
                  </p>
                </div>

                <div
                  className={`flex flex-col justify-center items-center border rounded-2xl p-6 flex-1 min-w-[250px] transition-all duration-300 ${isDarkMode ? "border-gray-600 bg-gray-800 hover:bg-gray-750" : "border-black bg-white hover:shadow-lg"}`}
                >
                  <img
                    src={Edu}
                    alt="Education"
                    className={`h-8 w-8 mb-2 ${isDarkMode ? "filter invert" : ""}`}
                  />
                  <h2 className="font-bold text-lg">Education</h2>
                  <p
                    className={`text-center transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Bachelor of Computer Engineering
                  </p>
                </div>
              </div>

              <div
                className={`text-center text-base md:text-lg leading-relaxed px-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                I'm an enthusiastic Frontend Web Developer focused on
                transforming concepts into intuitive and visually appealing
                experiences. I enjoy designing clean layouts, writing optimized
                code, and creating web applications that are fast, polished,
                responsive, and impactful.
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full max-w-7xl mt-10">
            <img
              onClick={openExperience}
              src={Dropdown}
              alt="Scroll down"
              className={`h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-110 transition-transform duration-300 ${isDarkMode ? "filter invert" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div
        className={`min-h-screen w-full px-4 py-10 transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <div id="experience" className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
            <p
              className={`transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Explore My
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Experience
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 max-w-7xl w-full">
            {/* Frontend Skills */}
            <div
              className={`flex flex-col items-center border-2 p-6 md:p-8 rounded-3xl flex-1 transition-all duration-300 ${isDarkMode ? "border-gray-600 bg-gray-800 hover:border-gray-500" : "border-gray-500 bg-white hover:shadow-xl"}`}
            >
              <div
                className={`text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
              >
                Frontend Development
              </div>

              <div className="grid grid-cols-2 gap-6 md:gap-8 w-full">
                {[
                  { name: "HTML", level: "Experienced" },
                  { name: "CSS", level: "Experienced" },
                  { name: "Javascript", level: "Intermediate" },
                  { name: "React", level: "Intermediate" },
                  { name: "Tailwind", level: "Basic" },
                  { name: "Node JS", level: "Basic" },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      src={Verified}
                      alt="Verified"
                      className={`h-6 w-6 md:h-8 md:w-8 shrink-0 ${isDarkMode ? "filter invert" : ""}`}
                    />
                    <div>
                      <h1 className="text-base md:text-xl font-bold">
                        {skill.name}
                      </h1>
                      <p
                        className={`text-sm md:text-base transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div
              className={`flex flex-col items-center border-2 p-6 md:p-8 rounded-3xl flex-1 transition-all duration-300 ${isDarkMode ? "border-gray-600 bg-gray-800 hover:border-gray-500" : "border-gray-500 bg-white hover:shadow-xl"}`}
            >
              <div
                className={`text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
              >
                Backend Development
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
                {[
                  { name: "Express JS", level: "Basic" },
                  { name: "Git", level: "Intermediate" },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      src={Verified}
                      alt="Verified"
                      className={`h-6 w-6 md:h-8 md:w-8 shrink-0 ${isDarkMode ? "filter invert" : ""}`}
                    />
                    <div>
                      <h1 className="text-base md:text-xl font-bold">
                        {skill.name}
                      </h1>
                      <p
                        className={`text-sm md:text-base transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full max-w-7xl mt-10">
            <img
              onClick={openProjects}
              src={Dropdown}
              alt="Scroll down"
              className={`h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-110 transition-transform duration-300 ${isDarkMode ? "filter invert" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        className={`min-h-screen px-4 py-10 transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <div id="projects" className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
            <p
              className={`transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Browse My Recent
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
            {[
              { img: Portfolio_ss, title: "Portfolio Website" },
              { img: JobBridge_ss, title: "JobBridge" },
              { img: Dummy_ss, title: "Dummy Site" },
            ].map((project, index) => (
              <div
                key={index}
                className={`border-2 rounded-3xl flex flex-col items-center p-4 transition-all duration-300 ${isDarkMode ? "border-gray-600 bg-gray-800 hover:border-gray-500 hover:scale-105" : "border-gray-500 bg-white hover:shadow-xl hover:scale-105"}`}
              >
                <div className="w-full overflow-hidden rounded-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h1 className="text-xl md:text-2xl font-semibold my-4">
                  {project.title}
                </h1>
                <div className="flex gap-3 mb-4">
                  <button
                    className={`px-6 py-2 border-2 rounded-full cursor-pointer transition-all duration-300 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600" : "bg-white border-black hover:bg-black hover:text-white"}`}
                  >
                    Github
                  </button>
                  <button
                    className={`px-6 py-2 border-2 rounded-full cursor-pointer transition-all duration-300 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600" : "bg-white border-black hover:bg-black hover:text-white"}`}
                  >
                    View Demo
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end w-full max-w-7xl mt-10">
            <img
              onClick={openContact}
              src={Dropdown}
              alt="Scroll down"
              className={`h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-110 transition-transform duration-300 ${isDarkMode ? "filter invert" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className={`min-h-screen px-4 py-10 transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <div id="contact" className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
            <p
              className={`text-lg transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Get in Touch
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
              Contact Me
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row justify-center items-center border-2 rounded-3xl p-6 gap-6 max-w-3xl w-full transition-all duration-300 ${isDarkMode ? "border-gray-600 bg-gray-800" : "border-gray-500 bg-white shadow-lg"}`}
          >
            <div className="flex items-center gap-3">
              <img
                src={Mail}
                alt="Email"
                className={`h-8 w-8 md:h-10 md:w-10 shrink-0 ${isDarkMode ? "filter invert" : ""}`}
              />
              <p
                className={`text-lg sm:text-xl md:text-2xl hover:underline cursor-text underline-offset-8 break-all transition-colors duration-300 ${isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"}`}
              >
                subedi1680@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={Linkedin_img}
                alt="LinkedIn"
                className={`h-8 w-8 shrink-0 ${isDarkMode ? "bg-white rounded-full p-1.5" : ""}`}
              />
              <p
                onClick={openLinkedIn}
                className={`text-lg sm:text-xl md:text-2xl hover:underline cursor-pointer underline-offset-8 transition-colors duration-300 ${isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"}`}
              >
                LinkedIn
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mb-10">
            {["About", "Experience", "Projects"].map((item, index) => (
              <p
                key={index}
                onClick={[openAbout, openExperience, openProjects][index]}
                className={`text-xl md:text-2xl font-semibold hover:underline cursor-pointer underline-offset-8 transition-colors duration-300 ${isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"}`}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex justify-center items-center mb-10 px-4">
            <p
              className={`text-base sm:text-lg md:text-xl text-center transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              © 2026 Rajan Subedi. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-900 hover:bg-black text-white"
          }`}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default App;
