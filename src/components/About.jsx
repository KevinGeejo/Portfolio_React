import React from 'react';
import kevinpic from '../assets/img/kevin-about.png';
import { Link } from 'react-scroll';

// Add this line
const About = () => {
  return (
    
    <div id="about" className="container w-full mx-auto my-12 sm:my-16 lg:my-24 xl:my-32 max-w-7xl px-4 sm:px-6 lg:px-8 justify-center min-h-screen flex items-center">
      <div className="bg-[#111111] rounded-2xl w-full max-w-6xl shadow-2xl mx-auto p-6 sm:p-8 lg:p-12 xl:p-16 my-8 lg:my-12">
        <div className="flex flex-col sm:flex-row w-auto h-auto justify-between items-start mx-auto mb-6 lg:mb-8">
          <div>
            <p className="text-[#fafafa] font-inter text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
              About Me
            </p>
            <div className="bg-[#fdd26a] h-1.5 w-20 lg:w-24 rounded-3xl mb-2 lg:mb-3">
            </div>
            <p className="text-sm lg:text-base text-[#C9C9C9] mb-6 sm:mb-8 lg:mb-0">
              My Introduction
            </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1kmoXo_sHbDmi4TcJD_y5eQ8MISDrMEBu/view?usp=sharing"
              className="flex items-center gap-2 bg-[#fdd26a] font-inter font-semibold rounded-lg px-4 lg:px-5 h-[48px] lg:h-[52px] text-sm lg:text-base hover:bg-transparent hover:text-[#fdd26a] hover:border-2 hover:border-[#fdd26a] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 xl:space-x-16 mt-8 lg:mt-12">
          <div className="flex-shrink-0">
            <img
              className="w-64 h-80 sm:w-72 sm:h-96 lg:w-[280px] lg:h-[380px] xl:w-[320px] xl:h-[420px] rounded-2xl object-cover shadow-xl"
              src={kevinpic}
              alt="Kevin About Section"
            />
          </div>
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <p className="font-inter font-medium text-[#C9C9C9] text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left leading-relaxed">
              A CS'24 undergrad from DBIT. I help companies to build efficient,
              reusable applications using cutting-edge technology which helps in
              generating incremental revenue and growth of the company.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-10 lg:mb-12">
              <div className="text-[#C9C9C9] flex flex-col items-center text-center">
                <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 lg:mb-2">
                  1
                </h1>
                <p className="font-inter text-xs lg:text-sm">
                  Year Experience
                </p>
              </div>
              <div className="text-[#C9C9C9] flex flex-col items-center text-center">
                <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 lg:mb-2">
                  2
                </h1>
                <p className="font-inter text-xs lg:text-sm">
                  Companies worked for
                </p>
              </div>
              <div className="text-[#C9C9C9] flex flex-col items-center text-center">
                <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 lg:mb-2">
                  1
                </h1>
                <p className="font-inter text-xs lg:text-sm">
                  Research paper published
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link 
              href="" 
              to="projects"
                spy={true} 
      smooth={true} 
      offset={-40} 
      duration={500} 
              className="flex items-center gap-2 bg-[#fdd26a] font-inter font-semibold rounded-lg px-4 lg:px-5 h-[48px] lg:h-[52px] text-sm lg:text-base hover:bg-transparent hover:text-[#fdd26a] hover:border-2 hover:border-[#fdd26a] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
