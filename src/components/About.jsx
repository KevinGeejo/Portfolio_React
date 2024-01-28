import React from 'react'
 // Add this line
const About = () => {
  return (
    <div className="w-full mt-80 max-w-6xl px-8 justify-center mx-auto">
      <div className='bg-[#1e1e1f] rounded-lg w-[900px] h-[862px] shadow-2xl	mx-20 p-20 '>

        <div className='flex w-auto h-auto j justify-between'>
          <p className='text-[#fafafa] font-inter text-[30px] font-bold'>About Me</p>
          <button className='flex flex-nowrap items-center content-between justify-evenly bg-[#fdd26a] font-inter font-bold rounded-[8px] w-[167px] h-[50px] text-[16px]'>Download CV<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z" fill="black"/>
</svg></button>
        </div>
        <div className='bg-[#fdd26a] h-1 w-16 rounded-3xl mr-[70%]'>
          <button></button>
        </div>
        <p className='text-[12px] mt-[10px]  ml-[0.5px] text-[#C9C9C9]'>My Introduction</p>
      </div>
    </div>
  )
}

export default About
