import React from 'react';
import eye from '../assets/img/eye.png';

const Project = () => {
  return (
    <div id="projects" className="container w-full mx-auto my-16 sm:my-20 lg:my-32 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-[#111111] rounded-2xl w-full max-w-6xl shadow-2xl mx-auto p-8 sm:p-12 lg:p-16 xl:p-24 mb-16 sm:mb-20 lg:mb-32">
        <div className="flex w-auto h-auto justify-between mx-auto mb-8 lg:mb-12">
          <div>
            <p className="text-[#fafafa] font-inter text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Projects
            </p>
            <div className="bg-[#fdd26a] h-1.5 w-20 lg:w-24 rounded-3xl mb-3">
            </div>
            <p className="text-sm lg:text-base text-[#C9C9C9]">
              My Portfolio
            </p>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mt-16 lg:mt-24'>
          <div className="flex flex-col w-full bg-[#424242] rounded-2xl shadow-2xl p-8 lg:p-10 hover:bg-[#4a4a4a] transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="flex-1">
              <p className="text-sm lg:text-base text-[#FDD26A] font-bold mb-3">2023</p>
              <h3 className="font-inter font-bold text-[#ffffff] text-xl lg:text-2xl xl:text-3xl mb-4 leading-tight">
                ClueNet : A NextJs Application
              </h3>
              <p className="text-[#d2d2d2] text-base lg:text-lg mb-6 leading-relaxed">
                A real time Video chat, Texting & Screen Sharing Application
                created using NextJs and Firebase
              </p>
            </div>
            <div className="flex justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/KevinGeejo/ClueNet" className="flex border-2 w-16 h-12 lg:w-20 lg:h-14 rounded-xl justify-center items-center border-[#fdd26a] hover:bg-[#fdd26a] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <img src={eye} alt="View project" className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col w-full bg-[#424242] rounded-2xl shadow-2xl p-8 lg:p-10 hover:bg-[#4a4a4a] transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="flex-1">
              <p className="text-sm lg:text-base text-[#FDD26A] font-bold mb-3">2021</p>
              <h3 className="font-inter font-bold text-[#ffffff] text-xl lg:text-2xl xl:text-3xl mb-4 leading-tight">
                Railway Ticket Booking System
              </h3>
              <p className="text-[#d2d2d2] text-base lg:text-lg mb-6 leading-relaxed">
                A JavaFx-based application that allows users to login, create accounts, and book railway tickets
              </p>
            </div>
            <div className="flex justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/KevinGeejo/Railway-Ticket-Booking-System-JavaFx-main" className="flex border-2 w-16 h-12 lg:w-20 lg:h-14 rounded-xl justify-center items-center border-[#fdd26a] hover:bg-[#fdd26a] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <img src={eye} alt="View project" className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col w-full bg-[#424242] rounded-2xl shadow-2xl p-8 lg:p-10 hover:bg-[#4a4a4a] transition-all duration-300 hover:scale-105 hover:shadow-3xl lg:col-span-2 xl:col-span-1">
            <div className="flex-1">
              <p className="text-sm lg:text-base text-[#FDD26A] font-bold mb-3">2024</p>
              <h3 className="font-inter font-bold text-[#ffffff] text-xl lg:text-2xl xl:text-3xl mb-4 leading-tight">
                Blockchain Voting System
              </h3>
              <p className="text-[#d2d2d2] text-base lg:text-lg mb-6 leading-relaxed">
                A secure and transparent voting system built using blockchain technology for immutable vote recording
              </p>
            </div>
            <div className="flex justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/KevinGeejo/Blockchain_Voting_System" className="flex border-2 w-16 h-12 lg:w-20 lg:h-14 rounded-xl justify-center items-center border-[#fdd26a] hover:bg-[#fdd26a] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <img src={eye} alt="View project" className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
