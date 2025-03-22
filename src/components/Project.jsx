import React from 'react';
import eye from '../assets/img/eye.png';

const Project = () => {
  return (
    <div id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20">
      <div className="bg-[#111111] rounded-lg shadow-xl p-4 sm:p-8 lg:p-20 mx-8 sm:mx-16 lg:mx-32">
        <div className="flex w-auto h-auto justify-between mx-auto">
          <p className="text-[#fafafa] font-inter text-xl sm:text-2xl lg:text-[30px] font-bold">
            Projects
          </p>
        </div>
        <div className="bg-[#fdd26a] h-1 w-16 rounded-3xl my-4">
          <button></button>
        </div>
        <div className='w-full min-h-[456px] flex flex-wrap flex-row mt-[105px] justify-center gap-8'>
          <div className="flex flex-col w-full sm:w-[340px] h-[213px] bg-[#424242] rounded-xl shadow-xlg">
            <div className="w-full sm:w-[267px] h-[115px] mt-[28px] ml-[28px]">
              <p className="text-[14px] text-[#FDD26A] font-bold">2023</p>
              <h3 className="font-inter font-bold text-[#ffffff] mt-[10px] text-[16px]">
                ClueNet : A NextJs Application
              </h3>
              <p className="text-[#d2d2d2] text-[13px] mt-[10px]">
                A real time Video chat , Texting & Screen Sharing Appliction
                created using NextJs and Firebase
              </p>
              <div className="flex justify-end">
                <a target="_blank" href="https://github.com/KevinGeejo/ClueNet" className="flex border-[1px] w-[66px] h-[40px] rounded-xl justify-center border-[#fdd26a]">
                  <a className="mt-[10px]">
                    <img src={eye} alt="View project"></img>
                  </a>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[340px] h-[213px] bg-[#424242] rounded-xl shadow-xlg">
            <div className="w-full sm:w-[267px] h-[115px] mt-[28px] ml-[28px]">
              <p className="text-[14px] text-[#FDD26A] font-bold">2021</p>
              <h3 className="font-inter font-bold text-[#ffffff] mt-[10px] text-[16px]">
                Railway Ticket Booking System
              </h3>
              <p className="text-[#d2d2d2] text-[13px] mt-[10px]">
                A JavaFx-based application that allows users to login, create accounts, and book railway tickets
              </p>
              <div className="flex justify-end">
                <a target="_blank" href="https://github.com/KevinGeejo/Railway-Ticket-Booking-System-JavaFx-main" className="flex border-[1px] w-[66px] h-[40px] rounded-xl justify-center border-[#fdd26a]">
                  <a className="mt-[10px]">
                    <img src={eye} alt="View project"></img>
                  </a>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[340px] h-[213px] bg-[#424242] rounded-xl shadow-xlg">
            <div className="w-full sm:w-[267px] h-[115px] mt-[28px] ml-[28px]">
              <p className="text-[14px] text-[#FDD26A] font-bold">2024</p>
              <h3 className="font-inter font-bold text-[#ffffff] mt-[10px] text-[16px]">
                Blockchain Voting System
              </h3>
              <p className="text-[#d2d2d2] text-[13px] mt-[10px]">
                A real time Video chat , Texting & Screen Sharing Appliction
                created using NextJs and Firebase
              </p>
              <div className="flex justify-end">
                <a target="_blank" href="https://github.com/KevinGeejo/Blockchain_Voting_System" className="flex border-[1px] w-[66px] h-[40px] rounded-xl justify-center border-[#fdd26a]">
                  <a className="mt-[10px]">
                    <img src={eye} alt="View project"></img>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
