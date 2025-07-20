import React from 'react';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    
    <div id="hero" className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-[700px] py-8 sm:py-12 lg:py-20 pt-20 lg:pt-28">
      <div className="text-white flex flex-col items-center justify-center relative h-full">
          <div className='hidden lg:flex flex-col justify-between absolute left-4 xl:left-12 top-1/2 transform -translate-y-1/2 w-[30px] h-[170px] drop-shadow-[0_5px_35px_rgba(250,250,250,0.15)]'>
             <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kevin-geejo/' className="hover:scale-110 transition-transform">
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
             </a>
             <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/DevDudley' className="hover:scale-110 transition-transform">
              <FontAwesomeIcon size="xl" icon={faTwitter} />
             </a>
             <a target="_blank" rel="noopener noreferrer" href='https://github.com/KevinGeejo' className="hover:scale-110 transition-transform">
              <FontAwesomeIcon size="xl" icon={faGithub} />
             </a>
            </div>
        <div className="flex flex-col items-center text-center py-auto justify-center w-full lg:mt-16">
          <Typed
            className="font-inter text-[#fafafa] text-center content-center text-3xl sm:text-4xl lg:text-6xl xl:text-7xl mb-6 lg:mb-8 font-black drop-shadow-[0_5px_35px_rgba(250,250,250,0.25)]"
            strings={['Hi!', "I'm Kevin Geejo."]}
            typeSpeed={70}
            backSpeed={25}
            loop
            loopCount={2}
          />
          <div className="container content-center max-w-4xl">
            <p className="font-semibold text-[#fafafa] mx-4 sm:mx-8 lg:mx-14 mb-12 sm:mb-16 lg:mb-20 mt-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl hover:text-[#fdd26a] text-center transition-colors duration-300">
              A fullstack developer from Mumbai, India.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-12">
          <Link href="" to="about" spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500}  className="bg-[#fdd26a] hover:bg-transparent hover:text-[#fdd26a] hover:border-2 hover:border-[#fdd26a] text-black font-bold py-4 px-8 lg:py-5 lg:px-12 rounded-xl transition-all duration-300 cursor-pointer text-lg lg:text-xl shadow-lg hover:shadow-2xl">
            About Me
          </Link>
        </div>
        
        {/* Mobile Social Icons */}
        <div className='flex lg:hidden justify-center space-x-8 mt-12'>
           <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kevin-geejo/' className="hover:scale-110 transition-transform">
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
           </a>
           <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/DevDudley' className="hover:scale-110 transition-transform">
            <FontAwesomeIcon size="xl" icon={faTwitter} />
           </a>
           <a target="_blank" rel="noopener noreferrer" href='https://github.com/KevinGeejo' className="hover:scale-110 transition-transform">
            <FontAwesomeIcon size="xl" icon={faGithub} />
           </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
