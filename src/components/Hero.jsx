import React from 'react';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    
    <div id="hero" className="container mx-auto max-w-6xl px-8 h-[500px]  justify-center">
      <div className=" text-white py-20 flex justify-left items-left mt-[12%] justify-center flex-col">
          <div className='flex flex-col justify-between ml-20 absolute w-[30px] h-[170px] drop-shadow-[0_5px_35px_rgba(250,250,250,0.15)]'>
             <a target="_blank" href='https://www.linkedin.com/in/kevin-geejo/'>
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
             </a>
             <a target="_blank" href='https://twitter.com/DevDudley'>
              <FontAwesomeIcon size="xl" icon={faTwitter} />
             </a>
             <a target="_blank" href='https://github.com/KevinGeejo'>
              <FontAwesomeIcon size="xl" icon={faGithub} />
             </a>

            </div>
        <div className="flex flex-col items-center text-left py-auto justify-center">
          {' '}
          {/* Modified className */}
          {/* <h1 className="text-4xl font-bold mb-4 pt-[7%]  font-mono">Hi, I'm Kevin Geejo. </h1> */}
          <Typed
            className="font-inter text-[#fafafa] text-center content-center text-5xl mb-4  font-black  drop-shadow-[0_5px_35px_rgba(250,250,250,0.25)]	"
            strings={['Hi!', "I'm Kevin Geejo."]}
            typeSpeed={70}
            backSpeed={25}
            loop
            loopCount={2}
          ></Typed>
          <div className="container  content-center">
            {/* <p  className=" m-16 text-[17px]   text-center font-inter font-extrabold justify-self-center">Exploring ways to create robust, scalable web Apps, Unlimitedly obsessed with solving problems where designing and engineering intersects, by creating pixel-perfect , polished interfaces. Currently tinkering with various projects. studying Computer Science, Interested in coding and improving consistently through learning. Currently interested in React Native and MERN stack.</p> */}
            <p className="font-semibold text-[#fafafa] mx-14 mb-14 mt-4 text-[24px] hover:text-[#fdd26a]  text-center justify-self-center">
              A fullstack developer from Mumbai, India.
            </p>
          </div>
          {/* <button className="bg-[#5bca9d] hover:bg-[#eeeeee] text-black font-bold py-3 px-8 rounded">
                        Get Started
                    </button> */}
        </div>
        <div className="flex justify-center">
          <Link to="about" spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500}  className="bg-[#fdd26a] hover:bg-transparent hover:text-[#fdd26a] hover:border-[0.2px] hover:border-[#fdd26a] text-black font-bold py-3 px-8 rounded-xl">
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
