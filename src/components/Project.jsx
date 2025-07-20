import React from 'react';

const Project = () => {
  return (
    <div id="projects" className="container w-full mx-auto my-12 sm:my-16 lg:my-24 xl:my-32 max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="bg-[#111111] rounded-2xl w-full max-w-6xl shadow-2xl mx-auto p-6 sm:p-8 lg:p-12 xl:p-16 my-8 lg:my-12">
        <div className="flex w-auto h-auto justify-between mx-auto mb-6 lg:mb-8">
          <div>
            <p className="text-[#fafafa] font-inter text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
              Projects
            </p>
            <div className="bg-[#fdd26a] h-1.5 w-20 lg:w-24 rounded-3xl mb-2 lg:mb-3">
            </div>
            <p className="text-sm lg:text-base text-[#C9C9C9]">
              My Portfolio
            </p>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mt-8 lg:mt-12'>
          <div className="flex flex-col w-full bg-[#424242] rounded-2xl shadow-2xl p-6 lg:p-8 hover:bg-[#4a4a4a] transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="flex-1">
              <p className="text-sm lg:text-base text-[#FDD26A] font-bold mb-2 lg:mb-3">2023</p>
              <h3 className="font-inter font-bold text-[#ffffff] text-lg lg:text-xl xl:text-2xl mb-3 lg:mb-4 leading-tight">
                ClueNet : A NextJs Application
              </h3>
              <p className="text-[#d2d2d2] text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                A real time Video chat, Texting & Screen Sharing Application
                created using NextJs and Firebase
              </p>
            </div>
            <div className="flex justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/KevinGeejo/ClueNet" className="flex border-2 w-12 h-12 lg:w-14 lg:h-14 rounded-xl justify-center items-center border-[#fdd26a] hover:bg-[#fdd26a] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#fdd26a] group-hover:text-black"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col w-full bg-[#424242] rounded-2xl shadow-2xl p-6 lg:p-8 hover:bg-[#4a4a4a] transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="flex-1">
              <p className="text-sm lg:text-base text-[#FDD26A] font-bold mb-2 lg:mb-3">2021</p>
              <h3 className="font-inter font-bold text-[#ffffff] text-lg lg:text-xl xl:text-2xl mb-3 lg:mb-4 leading-tight">
                Railway Ticket Booking System
              </h3>
              <p className="text-[#d2d2d2] text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                A JavaFx-based application that allows users to login, create accounts, and book railway tickets
              </p>
            </div>
            <div className="flex justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/KevinGeejo/Railway-Ticket-Booking-System-JavaFx-main" className="flex border-2 w-12 h-12 lg:w-14 lg:h-14 rounded-xl justify-center items-center border-[#fdd26a] hover:bg-[#fdd26a] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#fdd26a] group-hover:text-black"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col w-full bg-[#424242] rounded-2xl shadow-2xl p-6 lg:p-8 hover:bg-[#4a4a4a] transition-all duration-300 hover:scale-105 hover:shadow-3xl md:col-span-2 xl:col-span-1">
            <div className="flex-1">
              <p className="text-sm lg:text-base text-[#FDD26A] font-bold mb-2 lg:mb-3">2024</p>
              <h3 className="font-inter font-bold text-[#ffffff] text-lg lg:text-xl xl:text-2xl mb-3 lg:mb-4 leading-tight">
                Blockchain Voting System
              </h3>
              <p className="text-[#d2d2d2] text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                A secure and transparent voting system built using blockchain technology for immutable vote recording
              </p>
            </div>
            <div className="flex justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/KevinGeejo/Blockchain_Voting_System" className="flex border-2 w-12 h-12 lg:w-14 lg:h-14 rounded-xl justify-center items-center border-[#fdd26a] hover:bg-[#fdd26a] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#fdd26a] group-hover:text-black"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
