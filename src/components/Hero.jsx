import React from 'react';

const Hero = () => {
    return (
        <div className="bg-[#171717] text-white py-20 justify-center items-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4 pt-40">Welcome to My Hero Page</h1>
                <p className="text-lg mb-8">This is an example of a Hero component using Tailwind CSS.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
