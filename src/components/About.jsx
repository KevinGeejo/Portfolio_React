import React from 'react'
import kevinpic from '../assets/img/kevin-about.png'


 // Add this line
const About = () => {
  return (
    <div className="w-full mt-80 max-w-6xl px-8 justify-center mx-auto">
      <div className='bg-[#1e1e1f] rounded-lg w-[900px] h-[862px] shadow-2xl	mx-20 p-20 '>

        <div className='flex w-auto h-auto j justify-between'>
          <p className='text-[#fafafa] font-inter text-[30px] font-bold'>About Me</p>
          <button className='flex flex-nowrap items-center content-between justify-evenly bg-[#fdd26a] font-inter font-bold rounded-[8px] w-[167px] h-[50px] text-[16px]'>Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z" fill="black"/>
            </svg>
          </button>
        </div>
        <div className='bg-[#fdd26a] h-1 w-16 rounded-3xl mr-[70%]'>
          <button></button>
        </div>
        <p className='text-[14px] mt-[10px]  ml-[0.5px] text-[#C9C9C9]'>My Introduction</p>
        
        <div className='mt-[94px] flex '>
          <img className='w-[276px] h-[385px] ' src={kevinpic} alt="Kevin About Section" />
          <div className='ml-[81px] w-[359px] h-[389px]'>
            <p className=' text-[#C9C9C9]  text-[20px] '>A CS'24 graduate from DBIT. I help companies to build efficient, reusable applications using cutting-edge technology which helps in generating incremental revenue and growth of the company.</p>
             <div className='flex flex-row'>
              <div className='text-[#C9C9C9] mt-[58px] flex-col'>

                <h1 className=' w-[89px] h-[35] text-[36px] text-center font-semibold'>1</h1>
                <p className='w-[89px] h-[29px] text-center text-[12px] mt-[10px]'>Year Experience</p>
              </div>
              <div className='text-[#C9C9C9] mt-[58px] flex-col'>

                <h1 className=' text-[36px] text-center '>1</h1>
                <p className='w-[89px] h-[29px] text-center'>Year's of Experience</p>
              </div>
              <div className='text-[#C9C9C9] mt-[58px] flex-col'>

                <h1 className=' text-[36px] text-center'>1</h1>
                <p className='w-[89px] h-[29px] text-center'>Year Experience</p>
              </div>
              </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
