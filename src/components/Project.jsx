import React from 'react';
import eye from '../assets/img/eye.png';

const Project = () => {
  return (
    <div className="container w-full mx-auto mt-80 max-w-6xl px-8">
      <div className="bg-[#111111] rounded-lg w-[900px] h-[862px] shadow-xl	mx-20 p-20 mb-20">
        <div className="flex w-auto h-auto justify-between mx-auto">
          <p className="text-[#fafafa] font-inter text-[30px] font-bold">
            Projects
          </p>
        </div>
        <div className="bg-[#fdd26a] h-1 w-16 rounded-3xl mr-[70%] mt-2">
          <button></button>
        </div>
    <div className='w-[710px] h-[456px] flex flex-wrap flex-row mt-[105px] justify-between'>
        <div className="flex flex-col w-[340px] h-[213px] bg-[#424242] rounded-xl shadow-xlg">
          <div className="w-[267px] h-[115px] mt-[28px] ml-[28px] ">
            <p className="text-[14px] text-[#FDD26A] font-bold">2023</p>
            <h3 className="font-inter font-bold text-[#ffffff] mt-[10px] text-[16px]">
              ClueNet : A NextJs Application
            </h3>
            <p className="text-[#d2d2d2] text-[13px] mt-[10px]">
              A real time Video chat , Texting & Screen Sharing Appliction
              created using NextJs and Firebase
            </p>
            <div className="flex justify-end ">
              <a target="_blank" href="https://github.com/KevinGeejo/ClueNet" className="flex border-[1px]	w-[66px] h-[40px] rounded-xl justify-center border-[#fdd26a]">
                <a
                  
                  className=" mt-[10px]"
                >
                  <img  src={eye}></img>
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[340px] h-[213px] bg-[#424242] rounded-xl shadow-xlg">
          <div className="w-[267px] h-[115px] mt-[28px] ml-[28px] ">
            <p className="text-[14px] text-[#FDD26A] font-bold">2021</p>
            <h3 className="font-inter font-bold text-[#ffffff] mt-[10px] text-[16px]">
              Railway Ticket Booking System
            </h3>
            <p className="text-[#d2d2d2] text-[13px] mt-[10px]">
              A JavaFx-based application that allows users to login, create accounts, and book railway tickets
            </p>
            <div className="flex justify-end">
              <a target="_blank" href="https://github.com/KevinGeejo/Railway-Ticket-Booking-System-JavaFx-main" className="flex border-[1px]	w-[66px] h-[40px] rounded-xl justify-center border-[#fdd26a]">
                <a
                  
                  className="text-[#FDD26A] text-[14px] mt-[10px] font-bold"
                >
                  <img src={eye}></img>
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col w-[340px] h-[213px] bg-[#424242] rounded-xl shadow-xlg">
          <div className="w-[267px] h-[115px] mt-[28px] ml-[28px] ">
            <p className="text-[14px] text-[#FDD26A] font-bold">2023</p>
            <h3 className="font-inter font-bold text-[#ffffff] mt-[10px] text-[16px]">
              Blockchain Voting System
            </h3>
            <p className="text-[#d2d2d2] text-[13px] mt-[10px]">
              A real time Video chat , Texting & Screen Sharing Appliction
              created using NextJs and Firebase
            </p>
            <div className=" absolute ml-[220px] flex justify-end">
              <a target="_blank" href="https://github.com/KevinGeejo/Blockchain_Voting_System" className="flex border-[1px]	w-[66px] h-[40px] rounded-xl justify-center border-[#fdd26a]">
                <a
                  
                  className="text-[#FDD26A] text-[14px] mt-[10px] font-bold"
                >
                  <img src={eye}></img>
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
