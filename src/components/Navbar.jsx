import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171717] justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-95 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="" to="hero" spy={true} 
      smooth={true} 
      offset={-170} 
      duration={500}  className="text-xl lg:text-2xl text-white font-bold font-mono hover:text-[#fdd26a] transition-colors duration-300 cursor-pointer">
                Kevin Geejo
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-8">
              <Link
              href="" 
                to="hero"
                spy={true} 
      smooth={true} 
      offset={-190} 
      duration={500} 
                className="relative overflow-hidden text-gray-300 hover:bg-gray-700 hover:text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer group"
              >
                Home
                <span className="absolute h-0.5 bg-[#fdd26a] bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>

              <Link
              href="" 
                to="about"
                spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
                className="relative overflow-hidden text-gray-300 hover:bg-gray-700 hover:text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer group"
              >
                About
                <span className="absolute h-0.5 bg-[#fdd26a] bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
              <Link
              href="" 
                to="projects"
                spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
                className="relative overflow-hidden text-gray-300 hover:bg-gray-700 hover:text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer group"
              >
                Projects
                <span className="absolute h-0.5 bg-[#fdd26a] bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
              <a
              
                href="https://github.com/KevinGeejo"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden text-gray-300 hover:bg-gray-700 hover:text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 group"
              >
                Github
                <span className="absolute h-0.5 bg-[#fdd26a] bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
            </div>
          </div>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <MdClose color="white" size={30} />
            ) : (
              <MdMenu size={30} color="white" />
            )}
          </div>
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] h-full border-r border-r-black bg-[#171717] p-4 z-20'
              : 'fixed left-[-100%]'
          }
        >
          <h1 className="w-full text-2xl font-bold m-4 text-white">
            Kevin Geejo
          </h1>
          <ul className="pt-24 uppercase p-4">
            <li className="border-b p-4 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
              <Link
                href=""
                to="hero"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
                onClick={closeNav}
                className="block w-full h-full"
              >
                Home
              </Link>
            </li>
            <li className="border-b p-4 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-600 rounded-md text-sm font-medium">
              <Link
                href=""
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeNav}
                className="block w-full h-full"
              >
                About
              </Link>
            </li>
            <li className="border-b text-gray-300 border-gray-600 hover:bg-gray-700 p-4 hover:text-white rounded-md text-sm font-medium">
              <Link
                href=""
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeNav}
                className="block w-full h-full"
              >
                Projects
              </Link>
            </li>
            <li className="border-b border-gray-600 p-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
              <a
                href="https://github.com/KevinGeejo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeNav}
                className="block w-full h-full"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
