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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] md:bg-[#171717] md:bg-opacity-95 md:backdrop-filter md:backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="" to="hero" spy={true} 
      smooth={true} 
      offset={-170} 
      duration={500}  className="text-xl lg:text-2xl text-white font-bold font-inter hover:text-[#fdd26a] transition-colors duration-300 cursor-pointer">
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
      offset={-40} 
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
      offset={-40} 
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
          <div onClick={handleNav} className="block md:hidden p-2 rounded-lg hover:bg-gray-600 transition-colors duration-300">
            {nav ? (
              <MdClose color="white" size={28} />
            ) : (
              <MdMenu size={28} color="white" />
            )}
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {nav && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-10" onClick={closeNav}></div>
        )}
        
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-[#0f0f0f] border-l border-gray-500 shadow-2xl transform transition-transform duration-300 ease-in-out z-20 ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-500 bg-[#0a0a0a]">
            <h1 className="text-xl font-bold text-white font-inter">
              Kevin Geejo
            </h1>
            <button onClick={closeNav} className="p-2 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <MdClose color="white" size={24} />
            </button>
          </div>
          
          <div className="px-6 py-8">
            <ul className="space-y-4">
              <li>
                <Link
                  href=""
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-170}
                  duration={500}
                  onClick={closeNav}
                  className="flex items-center px-4 py-4 text-gray-100 hover:text-white hover:bg-gray-700 rounded-lg text-lg font-medium font-inter transition-all duration-300 cursor-pointer group"
                >
                  <span className="ml-2">Home</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#fdd26a] rounded-full"></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeNav}
                  className="flex items-center px-4 py-4 text-gray-100 hover:text-white hover:bg-gray-700 rounded-lg text-lg font-medium font-inter transition-all duration-300 cursor-pointer group"
                >
                  <span className="ml-2">About</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#fdd26a] rounded-full"></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeNav}
                  className="flex items-center px-4 py-4 text-gray-100 hover:text-white hover:bg-gray-700 rounded-lg text-lg font-medium font-inter transition-all duration-300 cursor-pointer group"
                >
                  <span className="ml-2">Projects</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#fdd26a] rounded-full"></div>
                  </div>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/KevinGeejo"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNav}
                  className="flex items-center px-4 py-4 text-gray-100 hover:text-white hover:bg-gray-700 rounded-lg text-lg font-medium font-inter transition-all duration-300 group"
                >
                  <span className="ml-2">Github</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-[#fdd26a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="border-t border-gray-500 pt-4">
              <p className="text-gray-300 text-sm text-center font-inter">
                © 2024 Kevin Geejo
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
