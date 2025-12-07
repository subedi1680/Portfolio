import React, { useState } from "react";
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
import Dummy_ss from "./assets/dummy_ss.png";
import Mail from "./assets/mail.png";

function App() {
  const openResume = () => {
    window.open(" /Rajan-Subedi-cv.pdf", "_blank");
  };

  const openSection = () => {
    window.location.href = "#contact";
  };

  const openExperience = () => {
    window.location.href = "#experience";
  };

  const openProjects = () => {
    window.location.href = "#projects";
  };

  const openContact = () => {
    window.location.href = "#contact";
  };

  const openAbout = () => {
    window.location.href = "#about";
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/rajan-subedi-5b5336396/",
      "_blank"
    );
  };

  const openGithub = () => {
    window.open("https://github.com/subedi1680", "_blank");
  };

  const [isHamOpen, setIsHamOpen] = useState(false);

  const toggleHam = () => {
    setIsHamOpen(!isHamOpen);
  };
  return (
    <>
      <div className="min-h-screen w-full">
        {/* nav bar */}
        <nav className="p-1 md:px-10 md:py-4">
          <div
            className="flex justify-between mx-5 py-2 
        md:mx-50 md:py-5"
          >
            <div className="text-3xl font-semibold md:text-4xl">Rajan Subedi</div>
            <div
              className="hidden md:flex space-x-2 text-md font-semibold
            md:space-x-6 md:text-3xl"
            >
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <button
              className="md:hidden text-3xl font-bold"
              onClick={toggleHam}
            >
              ☰
            </button>
          </div>
          {isHamOpen && (
            <div className="flex flex-col items-center bg-gray-200 py-4 space-y-4 md:hidden">
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openAbout();
                }}
                className="text-xl font-semibold hover:underline"
              >
                About
              </a>
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openExperience();
                }}
                className="text-xl font-semibold hover:underline"
              >
                Experience
              </a>
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openProjects();
                }}
                className="text-xl font-semibold hover:underline"
              >
                Projects
              </a>
              <a
                onClick={() => {
                  setIsHamOpen(false);
                  openContact();
                }}
                className="text-xl font-semibold hover:underline"
              >
                Contact
              </a>
            </div>
          )}
        </nav>

        {/* main section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:my-25 mt-10">
          <div className="md:w-100">
            <img
              src={Pp}
              alt=""
              className="md:h-100 md:w-100 rounded-full h-80 w-80"
            />
          </div>
          <div className="w-100 h-100 flex flex-col justify-center space-y-5 mx-10">
            <p className="text-gray-600 text-2xl text-center">Hello I'm</p>
            <h1 className="text-5xl font-bold text-center">Rajan Subedi</h1>
            <p className="text-gray-600 text-3xl text-center">
              Frontend Developer
            </p>
            <div className="flex justify-center-safe">
              <button
                className="mx-2 px-4 py-2 bg-white border-2 border-black rounded-4xl hover:bg-black hover:text-white cursor-pointer"
                onClick={openResume}
              >
                Open CV
              </button>
              <button
                className="mx-2 px-4 py-2 bg-gray-700 text-white border-2 border-gray-700 rounded-4xl hover:bg-black hover:border-black cursor-pointer"
                onClick={openSection}
              >
                Contact Info
              </button>
            </div>
            <div className="flex justify-center-safe">
              <img
                className="h-15 w-15 scale-75 cursor-pointer"
                src={Linkedin_img}
                alt="LinkedIn"
                onClick={openLinkedIn}
              />
              <img
                className="h-15 w-15 cursor-pointer"
                onClick={openGithub}
                src={Github_img}
                alt="GitHub"
              />
            </div>
          </div>
        </div>
      </div>

      {/* about me section */}
      <div className="min-h-screen w-full">
        <div id="about" className="flex flex-col justify-between items-center">
          <div className="flex flex-col justify-between items-center mb-10 mt-10">
            <p>Get To Know More</p>
            <h1 className="font-bold text-3xl md:text-5xl mt-2">About Me</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center p-2 md:my-10 md:space-x-10">
            {/* for image */}
            <div>
              <img
                src={About_pic}
                alt=""
                className="w-40 h-40 md:w-100 md:h-100 rounded-2xl grayscale"
              />
            </div>
            {/* for container and text */}
            <div className="flex flex-col justify-between items-center w-100 md:w-180 mx-5 p-5">
              {/* for two containers */}
              <div className="flex flex-col md:flex-row justify-center items-center mx-10 w-160 mb-10 space-y-2">
                <div className="flex flex-col justify-center items-center mx-5 border border-black rounded-2xl p-4 md:w-80 md:h-35 w-70 h-30">
                  <img src={Exp} alt="" className="h-7.5 w-7.5" />
                  <h2 className="font-bold">Experience</h2>
                  <p>Fresher</p>
                  <p>Frontend Development</p>
                </div>
                <div className="flex flex-col justify-start items-center mx-5 border border-black rounded-2xl p-4 md:w-80 md:h-35 w-70 h-30">
                  <img src={Edu} alt="" className="h-7.5 w-7.5" />
                  <h2 className="font-bold">Education</h2>
                  <p>Bachelor of Computer Engineering</p>
                </div>
              </div>
              {/* for text */}
              <div className="text-center">
                I’m an enthusiastic Frontend Web Developer focused on
                transforming concepts into intuitive and visually appealing
                experiences. I enjoy designing clean layouts, writing optimized
                code, and creating web applications that are fast, polished,
                responsive, and impactful.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-5 md:mt-5">
          <img
            onClick={openExperience}
            src={Dropdown}
            alt=""
            className="h-7.5 w-7.5 mx-10 hover:cursor-pointer"
          />
        </div>
      </div>

      {/* experience section */}
      <div id="experience" className="min-h-screen w-full">
        <div className="flex flex-col justify-between items-center">
          {/* for text */}
          <div className="flex flex-col justify-center items-center md:mt-10 mt-15">
            <p className="text-gray-500">Explore My</p>
            <h1 className="text-5xl font-bold">Experience</h1>
          </div>
          {/* for container */}
          <div className="flex flex-col md:flex-row justify-evenly md:space-x-10 md:mt-10 p-1 space-y-3 mt-15">
            {/* container 1 */}
            <div className="flex flex-col justify-between items-center border-2 border-gray-500 p-5 rounded-4xl w-auto px-5 md:px-20">
              <div className="text-3xl font-bold text-gray-500 mt-5">
                Frontend Development
              </div>

              {/* for 6 skills */}
              <div className="grid grid-flow-col grid-rows-3 justify-evenly items-center gap-x-10 md:gap-x-40 gap-y-3 md:gap-y-10 mt-5 md:mt-10 mb-3 md:mb-0">
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">HTML</h1>
                    <p className="text-gray-500">Experienced</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">CSS</h1>
                    <p className="text-gray-500">Experienced</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">Javascript</h1>
                    <p className="text-gray-500">Intermediate</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">React</h1>
                    <p className="text-gray-500">Intermediate</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">Tailwind</h1>
                    <p className="text-gray-500">Basic</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">Node JS</h1>
                    <p className="text-gray-500">Basic</p>
                  </div>
                </div>
              </div>
            </div>
            {/* container 2 */}
            <div className="flex flex-col items-center border-2 border-gray-500 p-5 rounded-4xl w-auto px-5 md:px-20 mt-2 md:mt-0">
              <div className="text-3xl font-bold text-gray-500 mt-5">
                Frontend Devlopment
              </div>
              {/* for 2 skills */}
              <div className="grid grid-flow-col grid-rows-1 mt-5 md:mt-10 gap-x-10 md:gap-x-40 gap-y-10 mb-3 md:mb-0">
                <div className="flex flex-row items-center">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">Express JS</h1>
                    <p className="text-gray-500">Basic</p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-lg md:text-xl font-bold">Git</h1>
                    <p className="text-gray-500">Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-5 mt-20">
          <img
            onClick={openProjects}
            src={Dropdown}
            alt=""
            className="h-7.5 w-7.5 mx-10 hover:cursor-pointer"
          />
        </div>
      </div>

      {/* projects section */}
      <div id="projects" className="h-auto md:min-h-screen">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col justify-center items-center mt-10">
            <p className=" text-gray-500">Browse My Recent</p>
            <h1 className="text-5xl font-bold">Projects</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly md:space-x-10 mt-5 space-y-2 md:space-y-0">
            <div className="border-2 border-gray-500 rounded-3xl space-x-5 flex flex-col justify-between items-center w-auto h-auto">
              <div className="p-3">
                <img
                  src={Portfolio_ss}
                  alt=""
                  className="w-80 h-90 object-center rounded-3xl"
                />
              </div>
              <h1 className="text-2xl font-semibold">Portfolio Website</h1>
              <div className="flex flex-row justify-center items-center my-3">
                <button className="mx-2 px-4 py-2 bg-white border-2 border-black rounded-4xl hover:bg-black hover:text-white cursor-pointer">
                  Github
                </button>
                <button className="mx-2 px-4 py-2 bg-white border-2 border-black rounded-4xl hover:bg-black hover:text-white cursor-pointer">
                  View Demo
                </button>
              </div>
            </div>

            <div className="border-2 border-gray-500 rounded-3xl flex flex-col justify-center items-center w-auto h-auto">
              <div className="p-3">
                <img
                  src={JobBridge_ss}
                  alt=""
                  className="w-80 h-90 object-center rounded-3xl"
                />
              </div>
              <h1 className="text-2xl font-semibold">JobBridge</h1>
              <div className="flex flex-row justify-center items-center my-3">
                <button className="mx-2 px-4 py-2 bg-white border-2 border-black rounded-4xl hover:bg-black hover:text-white cursor-pointer">
                  Github
                </button>
                <button className="mx-2 px-4 py-2 bg-white border-2 border-black rounded-4xl hover:bg-black hover:text-white cursor-pointer">
                  View Demo
                </button>
              </div>
            </div>

            <div className="border-2 border-gray-500 rounded-3xl space-x-5 flex flex-col justify-between items-center w-auto h-auto">
              <div className="p-3">
                <img
                  src={Dummy_ss}
                  alt=""
                  className="w-80 h-90 object-center rounded-3xl"
                />
              </div>
              <h1 className="text-2xl font-semibold">Dummy site</h1>
              <div className="flex flex-row justify-center items-center my-3">
                <button className="mx-2 px-4 py-2 bg-white border-2 border-black rounded-4xl hover:bg-black hover:text-white cursor-pointer">
                  Github
                </button>
                <button className="mx-2 px-4 py-2 bg-white border-2 border-black rounded-4xl hover:bg-black hover:text-white cursor-pointer">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-end mb-5 mt-5">
          <img
            onClick={openContact}
            src={Dropdown}
            alt=""
            className="h-10 w-10 mx-10 hover:cursor-pointer"
          />
        </div>
      </div>

      {/* contact section */}
      <div id="contact" className="md:min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-500 mt-15 md:mt-40">Get in Touch</p>
            <p className="text-4xl font-semibold mt-5 md:mt-0">Contact Me</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center border border-gray-500 rounded-4xl p-2 md:p-5 md:space-x-3 mt-15">
            <div className="flex flex-row m-3 md:m-0">
              <img src={Mail} alt="" className="h-10 w-10" />
              <p className="text-2xl md:mr-10 hover:text-gray-600 hover:underline cursor-text  underline-offset-8">
                subedi1680@gmail.com
              </p>
            </div>
            <div className="flex flex-row m-3 md:m-0">
              <img src={Linkedin_img} alt="" className="h-7.5 w-7.5" />
              <p
                className="text-2xl md:mr-10 hover:text-gray-600 hover:underline cursor-pointer underline-offset-8"
                onClick={openLinkedIn}
              >
                LinkedIn
              </p>
            </div>
          </div>
        </div>
        <footer className="mt-20 md:mt-55">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 mb-10 space-y-5 md:space-y-0">
            <p
              onClick={openAbout}
              className="text-2xl md:font-semibold  hover:text-gray-600 hover:underline cursor-pointer underline-offset-8"
            >
              About
            </p>
            <p
              onClick={openExperience}
              className="text-2xl md:font-semibold  hover:text-gray-600 hover:underline cursor-pointer underline-offset-8"
            >
              Experience
            </p>
            <p
              onClick={openProjects}
              className="text-2xl md:font-semibold  hover:text-gray-600 hover:underline cursor-pointer underline-offset-8"
            >
              Projects
            </p>
          </div>
          <div className="flex justify-center items-center mb-10">
            <p className="text-gray-500 text-xl">
              © 2025 Rajan Subedi. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
