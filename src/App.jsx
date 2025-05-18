import React, { useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import CallToAction from './components/Sections/CallToAction';
import Offerings from './components/Sections/Offerings';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gray-900 text-gray-100'>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Offerings />
      <Experience />
      <Projects />
      <CallToAction />
      <Contact />
    </div>
  );
};

export default App;
