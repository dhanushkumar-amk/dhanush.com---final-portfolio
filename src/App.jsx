import React from 'react';
import './index.css'; // Make sure styles are in a separate CSS file
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certification from './components/Certification';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {
  return (
   <>
    <div className="pt-5">
        <Navbar/>
        <Hero/>
        <About/>
        <Education/>
        <Skills/>
        <Certification/>
        <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
   </>
  )
};

export default App;
