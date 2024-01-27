import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className="container mx-auto max-w-5xl px-8   justify-center">
            <div className="bg-[#171717] text-white py-20 flex justify-left items-left mt-[12%] justify-center flex-col">
                <div className="flex flex-col items-center text-left py-auto justify-center"> {/* Modified className */}
                    {/* <h1 className="text-4xl font-bold mb-4 pt-[7%]  font-mono">Hi, I'm Kevin Geejo. </h1> */}
                    <Typed className="text-6xl mb-4  font-extrabold" strings={['Hi!', "I'm Kevin Geejo."]} typeSpeed={60} backSpeed={60} loop loopCount={2}></Typed>
                    <div className='container  content-center'>
                    {/* <p  className=" m-16 text-[17px]   text-center font-inter font-extrabold justify-self-center">Exploring ways to create robust, scalable web Apps, Unlimitedly obsessed with solving problems where designing and engineering intersects, by creating pixel-perfect , polished interfaces. Currently tinkering with various projects. studying Computer Science, Interested in coding and improving consistently through learning. Currently interested in React Native and MERN stack.</p> */}
                    <p  className=" mx-14 mb-14 mt-4 text-[20px] hover:text-[#fdd26a]  text-center font-inter font-medium justify-self-center">A fullstack developer from Mumbai, India.</p>

                    </div>
                    {/* <button className="bg-[#5bca9d] hover:bg-[#eeeeee] text-black font-bold py-3 px-8 rounded">
                        Get Started
                    </button> */}
                </div>
                <div className='flex justify-center'>
                    <button className="bg-[#fdd26a] hover:bg-[#eeeeee] text-black font-bold py-3 px-8 rounded-xl">About Me</button>
                </div>

            </div>
        </div>
    );
};

export default Hero;
