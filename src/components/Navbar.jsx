import React, {useState} from 'react';
import { MdClose, MdMenu } from "react-icons/md";




const Navbar = () => {
    const[nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <nav className="bg-[#171717] justify-center items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <h1 href="#" className="text-xl text-white font-bold font-mono">Kevin Geejo</h1>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="relative overflow-hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
    Home
    <span className="absolute h-0.5 bg-white bottom-0 left-0 w-0 transition-all duration-500 ease-out dark:from-white dark:to-white"></span>
</a>


                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                            <a href="https://github.com/KevinGeejo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Github</a>
                        </div>
                    </div>
                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <MdClose color='white' size={30}/> : <MdMenu size={30} color='white'/>}
                        
                    </div>
                </div>
                    <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-black bg-[#171717] p-4' : 'fixed left-[-100%]'}>
                        <h1 className='w-full text-2xl font-bold m-4 text-white'>Kevin Geejo</h1>
                        <ul className='pt-24 uppercase p-4'>
                        <li href="#" className="border-b p-4 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">Home</li>
                        <li href="#About" className="border-b p-4 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-600 rounded-md text-sm font-medium">About</li>
                        <li href="#" className="border-b text-gray-300 border-gray-600 hover:bg-gray-700 p-4 hover:text-white  rounded-md text-sm font-medium">Projects</li>
                        <li href="#" className=" border-b border-gray-600 p-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">Github</li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
};

export default Navbar;