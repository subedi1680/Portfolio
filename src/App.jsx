import React from "react";
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
    window.open("https://www.linkedin.com/in/rajan-subedi-5b5336396/", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/subedi1680", "_blank");
  };
  return (
    <>
      {/* nav bar */}
      <nav className="px-10 py-4">
        <div className="flex justify-between mx-50 py-5">
          <div className="text-4xl">Rajan Subedi</div>
          <div className="flex space-x-6 text-3xl">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* main section */}
      <div className="flex justify-center items-center my-25">
        <div className="w-100">
          <img src={Pp} alt="" className="h-100 w-100 rounded-full" />
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
            <img className="h-15 w-15 cursor-pointer" onClick={openGithub} src={Github_img} alt="GitHub" />
          </div>
        </div>
      </div>

      {/* about me section */}
      <div className="h-screen">
        <div id="about" className="flex flex-col justify-between items-center">
          <div className="flex flex-col justify-between items-center mb-10 mt-10">
            <p>Get To Know More</p>
            <h1 className="font-bold text-5xl mt-2">About Me</h1>
          </div>
          <div className="flex flex-row justify-between items-center my-10 space-x-10">
            {/* for image */}
            <div>
              <img
                src={About_pic}
                alt=""
                className="w-100 h-100 rounded-2xl grayscale"
              />
            </div>
            {/* for container and text */}
            <div className="flex flex-col justify-between items-center w-180 mx-5">
              {/* for two containers */}
              <div className="flex flex-row justify-center items-center mx-10 w-160 mb-10 ">
                <div className="flex flex-col justify-center items-center mx-5 border border-black rounded-2xl p-4 w-80 h-35">
                  <img src={Exp} alt="" className="h-10 w-10" />
                  <h2 className="font-bold">Experience</h2>
                  <p>Fresher</p>
                  <p>Frontend Development</p>
                </div>
                <div className="flex flex-col justify-start items-center  mx-5 border border-black rounded-2xl p-4 w-80 h-35">
                  <img src={Edu} alt="" className="h-10 w-10" />
                  <h2 className="font-bold">Education</h2>
                  <p>Bachelor of Computer Engineering</p>
                </div>
              </div>
              {/* for text */}
              <div>
                I’m an enthusiastic Frontend Web Developer focused on
                transforming concepts into intuitive and visually appealing
                experiences. I enjoy designing clean layouts, writing optimized
                code, and creating web applications that are fast, polished,
                responsive, and impactful.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-5 mt-5">
          <img
            onClick={openExperience}
            src={Dropdown}
            alt=""
            className="h-10 w-10 mx-10 hover:cursor-pointer"
          />
        </div>
      </div>

      {/* experience section */}
      <div id="experience" className="h-screen">
        <div className="flex flex-col justify-between items-center">
          {/* for text */}
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-gray-500">Explore My</p>
            <h1 className="text-5xl font-bold">Experience</h1>
          </div>
          {/* for container */}
          <div className="flex flex-row justify-evenly space-x-10 mt-10">
            {/* container 1 */}
            <div className="flex flex-col justify-between items-center border-2 border-gray-500 p-5 rounded-4xl w-auto px-20">
              <div className="text-3xl font-bold text-gray-500">
                Frontend Development
              </div>

              {/* for 6 skills */}
              <div className="grid grid-flow-col grid-rows-3 justify-evenly items-center gap-x-40 gap-y-10 mt-10">
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">HTML</h1>
                    <p className="text-gray-500">Experienced</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">CSS</h1>
                    <p className="text-gray-500">Experienced</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">Javascript</h1>
                    <p className="text-gray-500">Intermediate</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">React</h1>
                    <p className="text-gray-500">Intermediate</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">Tailwind</h1>
                    <p className="text-gray-500">Basic</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">Node JS</h1>
                    <p className="text-gray-500">Basic</p>
                  </div>
                </div>
              </div>
            </div>
            {/* container 2 */}
            <div className="flex flex-col items-center border-2 border-gray-500 p-5 rounded-4xl w-auto px-20">
              <div className="text-3xl font-bold text-gray-500">
                Frontend Devlopment
              </div>
              {/* for 2 skills */}
              <div className="grid grid-flow-col grid-rows-1 mt-10 gap-x-40 gap-y-10">
                <div className="flex flex-row items-center">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">Express JS</h1>
                    <p className="text-gray-500">Basic</p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <img src={Verified} alt="" className="h-7.5 w-7.5" />
                  <div>
                    <h1 className="text-xl font-bold">Git</h1>
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
            className="h-10 w-10 mx-10 hover:cursor-pointer"
          />
        </div>
      </div>

      {/* projects section */}
      <div id="projects" className="h-screen">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col justify-center items-center mt-10">
            <p className=" text-gray-500">Browse My Recent</p>
            <h1 className="text-5xl font-bold">Projects</h1>
          </div>
          <div className="flex flex-row justify-evenly space-x-10 mt-5">
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
        <div className="flex justify-end mb-5 mt-5">
          <img
            onClick={openContact}
            src={Dropdown}
            alt=""
            className="h-10 w-10 mx-10 hover:cursor-pointer"
          />
        </div>
      </div>

      {/* contact section */}
      <div id="contact" className="h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-500 mt-40">Get in Touch</p>
            <p className="text-4xl font-semibold">Contact Me</p>
          </div>
          <div className="flex flex-row justify-center items-center border border-gray-500 rounded-4xl p-5 space-x-3 mt-15">
            <img src={Mail} alt="" className="h-10 w-10"/>
            <p className="text-2xl mr-10 hover:text-gray-600 hover:underline cursor-text  underline-offset-8">subedi1680@gmail.com</p>
            <img src={Linkedin_img} alt="" className="h-7.5 w-7.5"/>
            <p className="text-2xl mr-10 hover:text-gray-600 hover:underline cursor-pointer underline-offset-8" onClick={openLinkedIn}>LinkedIn</p>
          </div>
        </div>
        <footer className="mt-55">
          <div className="flex flex-row justify-center items-center space-x-10 mb-10">
            <p onClick={openAbout} className="text-2xl font-semibold  hover:text-gray-600 hover:underline cursor-pointer underline-offset-8">About</p>
            <p onClick={openExperience} className="text-2xl font-semibold  hover:text-gray-600 hover:underline cursor-pointer underline-offset-8">Experience</p>
            <p onClick={openProjects} className="text-2xl font-semibold  hover:text-gray-600 hover:underline cursor-pointer underline-offset-8">Projects</p>
          </div>
          <div className="flex justify-center items-center mb-10">
            <p className="text-gray-500 text-xl">© 2025 Rajan Subedi. All rights reserved.</p>
          </div>  
        </footer>
      </div>
    </>
  );
}

export default App;
