import React from 'react';
import eye from '../assets/img/eye.png'

const Project = () => {
  return (
    <div className="container w-full mx-auto mt-80 max-w-6xl px-8">
      <div className="bg-[#1e1e1f] rounded-lg w-[900px] h-[862px] shadow-2xl	mx-20 p-20 mb-20">
        <div className="flex w-auto h-auto justify-between mx-auto">
          <p className="text-[#fafafa] font-inter text-[30px] font-bold">
            Projects
          </p>
        </div>
        <div className="bg-[#fdd26a] h-1 w-16 rounded-3xl mr-[70%] mt-2">
          <button></button>
        </div>

        <div className="flex flex-col w-[340px] h-[213px] bg-[#424242] mt-[105px] rounded-xl shadow-lg">
          
        
            <div className='w-[267px] h-[115px] mt-[28px] ml-[28px] '>
              <p className="text-[14px] text-[#FDD26A] font-bold">2023</p>
              <h3 className="font-bold text-[#F5F4F4] mt-[10px] text-[16px]">
                ClueNet : A NextJs Application
              </h3>
              <p className='text-[#A8A3A5] text-[13px] mt-[10px]'>
                A real time Video chat , Texting & Screen Sharing Appliction created using NextJs and Firebase
              </p>
              <div className='flex justify-end'>
              <button className='flex border-[1px]	w-[66px] h-[40px] rounded-xl justify-center border-[#fdd26a]'>
                <a target='_blank' href="https://github.com/KevinGeejo/ClueNet" className="text-[#FDD26A] text-[14px] mt-[10px] font-bold">
                  <img src={eye}>
                  </img>
                </a>
              </button>

              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Project;
