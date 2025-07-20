import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center w-full min-h-[200px] sm:min-h-[250px] lg:h-[300px] bg-[#0e0e0e] py-8 sm:py-12 lg:py-4 px-4">
      <div className='flex items-center justify-center text-center'>
        <p className="text-center text-[#4b5563] text-sm sm:text-base leading-relaxed max-w-md">
          © Kevin Geejo 2024. Website built using React Js & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
