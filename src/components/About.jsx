import React from 'react';
import kevinpic from '../assets/img/kevin-about.png';
import kevincv from '../assets/pdf/Kevin_Resume.pdf';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20">
      <div className="bg-[#111111] rounded-lg shadow-xl p-4 sm:p-8 lg:p-20 mx-8 sm:mx-16 lg:mx-32">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[#fafafa] font-inter text-xl sm:text-2xl lg:text-[30px] font-bold">
            About Me
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1kmoXo_sHbDmi4TcJD_y5eQ8MISDrMEBu/view?usp=sharing"
            className="flex items-center justify-center bg-[#fdd26a] font-inter font-bold rounded-[8px] w-full sm:w-[167px] h-[45px] sm:h-[50px] text-[14px] sm:text-[16px] hover:bg-[#fdd26a]/90 transition-colors"
          >
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              viewBox="0 0 20 14"
              fill="none"
              className="ml-2"
            >
              <path
                d="M9.77 10C11.4269 10 12.77 8.65685 12.77 7C12.77 5.34315 11.4269 4 9.77 4C8.11314 4 6.77 5.34315 6.77 7C6.77 8.65685 8.11314 10 9.77 10Z"
                stroke="black"
                strokeWidth="2"
              />
              <path
                d="M17.958 5.934C18.346 6.406 18.54 6.641 18.54 7C18.54 7.359 18.346 7.594 17.958 8.066C16.538 9.79 13.406 13 9.77 13C6.134 13 3.002 9.79 1.582 8.066C1.194 7.594 1 7.359 1 7C1 6.641 1.194 6.406 1.582 5.934C3.002 4.21 6.134 1 9.77 1C13.406 1 16.538 4.21 17.958 5.934Z"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
        <div className="bg-[#fdd26a] h-1 w-16 rounded-3xl my-4"></div>
        <p className="text-[14px] text-[#C9C9C9]">My Introduction</p>

        <div className="mt-6 sm:mt-8 lg:mt-[94px] flex flex-col lg:flex-row gap-6 lg:gap-12">
          <img
            className="w-full lg:w-[276px] h-[250px] sm:h-[300px] lg:h-[385px] object-contain rounded-lg bg-[#1a1a1a]"
            src={kevinpic}
            alt="Kevin About Section"
          />
          <div className="flex-1">
            <p className="font-inter font-medium text-[#C9C9C9] text-base sm:text-lg lg:text-[20px]">
              A CS'24 undergrad from DBIT. I help companies to build efficient,
              reusable applications using cutting-edge technology which helps in
              generating incremental revenue and growth of the company.
            </p>
            <div className="flex flex-wrap justify-between gap-4 mt-6 sm:mt-8 lg:mt-[58px]">
              <div className="text-[#C9C9C9] flex flex-col items-center">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-[36px] font-semibold">1</h1>
                <p className="font-inter text-[12px] mt-1 sm:mt-2">Year Experience</p>
              </div>
              <div className="text-[#C9C9C9] flex flex-col items-center">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-[36px] font-semibold">2</h1>
                <p className="font-inter text-[12px] mt-1 sm:mt-2">Companies worked for</p>
              </div>
              <div className="text-[#C9C9C9] flex flex-col items-center">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-[36px] font-semibold">1</h1>
                <p className="font-inter text-[12px] mt-1 sm:mt-2">Research paper published</p>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-[135px] flex justify-center">
              <Link 
                to="projects"
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="inline-flex items-center justify-center bg-[#fdd26a] font-inter font-bold rounded-[8px] w-full sm:w-[167px] h-[45px] sm:h-[50px] text-[14px] sm:text-[16px] hover:bg-[#fdd26a]/90 transition-colors cursor-pointer"
              >
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  viewBox="0 0 20 14"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M9.77 10C11.4269 10 12.77 8.65685 12.77 7C12.77 5.34315 11.4269 4 9.77 4C8.11314 4 6.77 5.34315 6.77 7C6.77 8.65685 8.11314 10 9.77 10Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.958 5.934C18.346 6.406 18.54 6.641 18.54 7C18.54 7.359 18.346 7.594 17.958 8.066C16.538 9.79 13.406 13 9.77 13C6.134 13 3.002 9.79 1.582 8.066C1.194 7.594 1 7.359 1 7C1 6.641 1.194 6.406 1.582 5.934C3.002 4.21 6.134 1 9.77 1C13.406 1 16.538 4.21 17.958 5.934Z"
                    stroke="black"
                    strokeWidth="2"
                  />
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
