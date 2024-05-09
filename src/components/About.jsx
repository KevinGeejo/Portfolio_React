import React from 'react';
import kevinpic from '../assets/img/kevin-about.png';
import kevincv from '../assets/pdf/Kevin_Resume.pdf';
import { Link } from 'react-scroll';

// Add this line
const About = () => {
  return (
    
    <div id="about" className="container w-full mx-auto my-[80px]  max-w-6xl px-8 justify-center ">
      <div className="bg-[#111111] rounded-lg w-[900px] h-[862px] shadow-xl	mx-20 p-20 ">
        <div className="flex w-auto h-auto justify-between mx-auto">
          <p className="text-[#fafafa] font-inter text-[30px] font-bold">
            About Me
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1cX95Z8AU-YzbVgI1p7ElzDlpsshMVDhc/view?usp=sharing"
            className="flex flex-nowrap items-center content-between justify-evenly bg-[#fdd26a] font-inter font-bold rounded-[8px] w-[167px] h-[50px] text-[16px]"
          >
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
            >
              <path
                d="M9.77 10C11.4269 10 12.77 8.65685 12.77 7C12.77 5.34315 11.4269 4 9.77 4C8.11314 4 6.77 5.34315 6.77 7C6.77 8.65685 8.11314 10 9.77 10Z"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M17.958 5.934C18.346 6.406 18.54 6.641 18.54 7C18.54 7.359 18.346 7.594 17.958 8.066C16.538 9.79 13.406 13 9.77 13C6.134 13 3.002 9.79 1.582 8.066C1.194 7.594 1 7.359 1 7C1 6.641 1.194 6.406 1.582 5.934C3.002 4.21 6.134 1 9.77 1C13.406 1 16.538 4.21 17.958 5.934Z"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </a>
        </div>
        <div className="bg-[#fdd26a] h-1 w-16 rounded-3xl mr-[70%]">
          <button></button>
        </div>
        <p className="text-[14px] mt-[10px]  ml-[0.5px] text-[#C9C9C9]">
          My Introduction
        </p>

        <div className="mt-[94px] flex ">
          <img
            className="w-[276px] h-[385px] "
            src={kevinpic}
            alt="Kevin About Section"
          />
          <div className="ml-[81px] w-[359px] h-[389px]">
            <p className="font-inter font-medium text-[#C9C9C9]  text-[20px] ">
              A CS'24 undergrad from DBIT. I help companies to build efficient,
              reusable applications using cutting-edge technology which helps in
              generating incremental revenue and growth of the company.
            </p>
            <div className="flex flex-row justify-between">
              <div className="text-[#C9C9C9] mt-[58px] flex-col">
                <h1 className="text-white w-[89px] h-[35] text-[36px] text-center font-semibold">
                  -
                </h1>
                <p className="font-inter w-[89px] h-[29px] text-center text-[12px] mt-[10px]">
                  Year Experience
                </p>
              </div>
              <div className="text-[#C9C9C9] mt-[58px] flex-col">
                <h1 className=" text-white w-[89px] h-[35] text-[36px] text-center font-semibold">
                  1
                </h1>
                <p className="font-inter w-[89px] h-[29px] text-center text-[12px] mt-[10px]">
                  Companies worked for
                </p>
              </div>
              <div className="text-[#C9C9C9] mt-[58px] flex-col">
                <h1 className=" text-white w-[89px] h-[35] text-[36px] text-center font-semibold">
                  1
                </h1>
                <p className="font-inter w-[89px] h-[29px] text-center text-[12px] mt-[10px]">
                  Research paper published
                </p>
              </div>
            </div>
            <div className="flex mt-[135px] mr-[135px] ">
              <Link 
              href="" 
              to="projects"
                spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
              className="flex flex-nowrap items-center content-between justify-evenly bg-[#fdd26a] font-inter font-bold rounded-[8px] w-[167px] h-[50px] text-[16px]">
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M9.77 10C11.4269 10 12.77 8.65685 12.77 7C12.77 5.34315 11.4269 4 9.77 4C8.11314 4 6.77 5.34315 6.77 7C6.77 8.65685 8.11314 10 9.77 10Z"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M17.958 5.934C18.346 6.406 18.54 6.641 18.54 7C18.54 7.359 18.346 7.594 17.958 8.066C16.538 9.79 13.406 13 9.77 13C6.134 13 3.002 9.79 1.582 8.066C1.194 7.594 1 7.359 1 7C1 6.641 1.194 6.406 1.582 5.934C3.002 4.21 6.134 1 9.77 1C13.406 1 16.538 4.21 17.958 5.934Z"
                    stroke="black"
                    stroke-width="2"
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
