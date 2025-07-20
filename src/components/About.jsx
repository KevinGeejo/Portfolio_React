import React from 'react';
import kevinpic from '../assets/img/kevin-about.png';
import { Link } from 'react-scroll';

// Add this line
const About = () => {
  return (
    
    <div id="about" className="container w-full mx-auto my-16 sm:my-20 lg:my-32 max-w-7xl px-4 sm:px-6 lg:px-8 justify-center">
      <div className="bg-[#111111] rounded-2xl w-full max-w-6xl shadow-2xl mx-auto p-8 sm:p-12 lg:p-16 xl:p-24">
        <div className="flex flex-col sm:flex-row w-auto h-auto justify-between items-start mx-auto mb-8 lg:mb-12">
          <div>
            <p className="text-[#fafafa] font-inter text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About Me
            </p>
            <div className="bg-[#fdd26a] h-1.5 w-20 lg:w-24 rounded-3xl mb-3">
            </div>
            <p className="text-sm lg:text-base text-[#C9C9C9] mb-8 sm:mb-12 lg:mb-0">
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

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 xl:space-x-20 mt-12 lg:mt-20">
          <div className="flex-shrink-0">
            <img
              className="w-72 h-96 sm:w-80 sm:h-[420px] lg:w-[320px] lg:h-[440px] xl:w-[360px] xl:h-[480px] rounded-2xl object-cover shadow-xl"
              src={kevinpic}
              alt="Kevin About Section"
            />
          </div>
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <p className="font-inter font-medium text-[#C9C9C9] text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left leading-relaxed">
              A CS'24 undergrad from DBIT. I help companies to build efficient,
              reusable applications using cutting-edge technology which helps in
              generating incremental revenue and growth of the company.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6 xl:gap-12 mb-12 sm:mb-16 lg:mb-20">
              <div className="text-[#C9C9C9] flex flex-col items-center text-center">
                <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
                  1
                </h1>
                <p className="font-inter text-sm lg:text-base">
                  Year Experience
                </p>
              </div>
              <div className="text-[#C9C9C9] flex flex-col items-center text-center">
                <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
                  2
                </h1>
                <p className="font-inter text-sm lg:text-base">
                  Companies worked for
                </p>
              </div>
              <div className="text-[#C9C9C9] flex flex-col items-center text-center">
                <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
                  1
                </h1>
                <p className="font-inter text-sm lg:text-base">
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
      offset={-80} 
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
