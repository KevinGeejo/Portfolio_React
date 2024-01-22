import React from 'react';

const Hero = () => {
    return (
        <div className="container mx-auto max-w-5xl px-8 my-5">
            <div className="bg-[#171717] text-white py-20 flex justify-left items-left">
                <div className="flex flex-col items-start text-left"> {/* Modified className */}
                    <h1 className="text-4xl font-bold mb-4 pt-[8%]  font-mono">Hi, I'm Kevin Geejo. </h1>
                    <div className='container pr-20'>
                    <p className="text-lg mb-8 pt-10 text-justify">Exploring ways to create robust, scalable web Apps, Unlimitedly obsessed with solving problems where designing and engineering intersects, by creating pixel-perfect , polished interfaces. Currently tinkering with various projects. studying Computer Science, Interested in coding and improving consistently through learning. Currently interested in React Native and MERN stack.</p>

                    </div>
                    {/* <button className="bg-[#5bca9d] hover:bg-[#eeeeee] text-black font-bold py-3 px-8 rounded">
                        Get Started
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
