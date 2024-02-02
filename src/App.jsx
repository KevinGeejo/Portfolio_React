import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <div className="h-auto w-auto">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
