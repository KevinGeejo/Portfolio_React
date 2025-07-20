import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';


function App() {
  return (
      <div className="min-h-screen w-full bg-[#0b0a0a] overflow-x-hidden">

        {/* <Navbar />
    <Routes>

      
    <Route path='/' element={<Hero/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Project/>}/>
    
    

      


    </Routes>
    <Footer /> */}
    <Navbar />
    
    <Hero />
    <About />
    <Project />
    <Footer />
    </div>
  );
}

export default App;
