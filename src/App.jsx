import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen w-full bg-[#0b0a0a] overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Project />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
