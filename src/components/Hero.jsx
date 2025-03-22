import React from 'react';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="hero" className="container mx-auto max-w-6xl px-4 sm:px-8 min-h-[500px] flex justify-center">
      <div className="text-white py-10 sm:py-20 flex flex-col items-center justify-center relative">
        {/* Main Content with Icons */}
        <div className="flex items-center gap-8 sm:gap-12 mb-8">
          {/* Social Media Icons */}
          <div className='flex flex-col gap-6'>
            <a target="_blank" href='https://www.linkedin.com/in/kevin-geejo/' className="hover:text-[#fdd26a] transition-colors">
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a>
            <a target="_blank" href='https://twitter.com/DevDudley' className="hover:text-[#fdd26a] transition-colors">
              <FontAwesomeIcon size="xl" icon={faTwitter} />
            </a>
            <a target="_blank" href='https://github.com/KevinGeejo' className="hover:text-[#fdd26a] transition-colors">
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </div>

          {/* Typed Text */}
          <div className="flex flex-col items-center text-center">
            <Typed
              className="font-inter text-[#fafafa] text-3xl sm:text-5xl mb-4 font-black drop-shadow-[0_5px_35px_rgba(250,250,250,0.25)]"
              strings={['Hi!', "I'm Kevin Geejo."]}
              typeSpeed={70}
              backSpeed={25}
              loop
              loopCount={2}
            />
            <p className="font-semibold text-[#fafafa] text-lg sm:text-2xl mb-8 sm:mb-14 hover:text-[#fdd26a] transition-colors">
              A fullstack developer from Mumbai, India.
            </p>
          </div>
        </div>

        {/* About Me Button */}
        <div className="flex justify-center">
          <Link 
            href="" 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-80} 
            duration={500}  
            className="bg-[#fdd26a] hover:bg-transparent hover:text-[#fdd26a] hover:border-[0.2px] hover:border-[#fdd26a] text-black font-bold py-3 px-8 rounded-xl transition-all"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
