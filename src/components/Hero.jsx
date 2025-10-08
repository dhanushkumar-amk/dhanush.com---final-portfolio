import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { Github, Linkedin, FileText, Code, ExternalLink } from 'lucide-react';
import profileImage from '../assets/dhanushkumar1.png';

const Hero = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const createFirework = () => {
      const burstX = Math.random() * window.innerWidth;
      const burstY = Math.random() * window.innerHeight * 0.8; // avoid bottom
      const particles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: burstX,
        y: burstY,
        angle: (i / 20) * 2 * Math.PI,
        distance: Math.random() * 80 + 40,
        size: Math.random() * 4 + 2,
        color: ['#FFD700', '#FF4500', '#00FFFF', '#FF69B4', '#87CEEB'][Math.floor(Math.random() * 5)]
      }));
      setFireworks(prev => [...prev, ...particles]);
      // Remove after animation ends
      setTimeout(() => {
        setFireworks(prev => prev.filter(p => !particles.includes(p)));
      }, 1200);
    };

    const interval = setInterval(createFirework, 1000); // every 1s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden' id='home'>

      {/* Fireworks Particles */}
      {fireworks.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            left: p.x,
            top: p.y,
            width: p.size + 'px',
            height: p.size + 'px',
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            animation: `burst 1.2s ease-out forwards`,
            transformOrigin: "center",
            '--angle': p.angle + 'rad',
            '--distance': p.distance + 'px'
          }}
        />
      ))}

      {/* Your existing content */}
      <div className='max-w-4xl mx-auto px-4 w-full text-center relative z-10'>
        <div className='flex flex-col items-center gap-8 pt-20'>
          {/* Profile Image */}
          <div className='relative'>
            <div className='w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-gray-100 shadow-lg'>
              <img
                src={profileImage}
                alt="Dhanush Kumar G - Software Developer"
                className="w-full h-full object-cover object-top transition-all duration-500"
                style={{ filter: 'grayscale(0.5)' }}
              />
            </div>
            {/* Animated Badge */}
            <div className='absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full shadow-md text-xs font-medium animate-bounce'>
              <span style={{ fontFamily: "'Outfit', sans-serif" }}>Available</span>
            </div>
          </div>

          {/* Content */}
          <div className='text-center max-w-3xl'>
            <h1 className='text-3xl lg:text-4xl font-bold mb-4 text-gray-900 animate-fade-in'
              style={{ fontFamily: "'Mochiy Pop One', sans-serif" }}>
              Dhanushkumar G
            </h1>

            <div className='mb-8'>
              <h3 className='text-xl lg:text-2xl font-medium mb-4 text-gray-700'
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                <ReactTyped strings={[
                  "✨ Software Developer |",
                  "🚀 MERN Stack Developer |",
                  "💻 Full Stack Developer |",
                  "🎓 Student |"
                ]}
                  loop
                  typeSpeed={100}
                  backSpeed={80}
                />
              </h3>

              <p className='text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto animate-slide-up'
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                I'm web developer based in India, passionate and dedicated to crafting engaging, user-friendly websites and applications.
              </p>
            </div>

            {/* Social Icons */}
            <div className='flex justify-center items-center gap-4 mb-8'>
              <a href='https://github.com/dhanushkumar-amk'
                className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white  hover:-translate-y-1 transition-all duration-300'
                target='_blank' rel='noopener noreferrer'>
                <Github className="w-5 h-5" />
              </a>
              <a href='https://www.linkedin.com/in/dhanushkumar-amk/'
                className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white  hover:-translate-y-1 transition-all duration-300'
                target='_blank' rel='noopener noreferrer'>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href='https://leetcode.com/dhanushkumar-amk'
                className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white  hover:-translate-y-1 transition-all duration-300'
                target='_blank' rel='noopener noreferrer'>
                <Code className="w-5 h-5" />
              </a>
              <a href='https://dribbble.com/Dhanushkumar-amk'
                className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white  hover:-translate-y-1 transition-all duration-300'
                target='_blank' rel='noopener noreferrer'>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a href='#contact'
                className='inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 gap-2'
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Say Hello
              </a>
              <a href='/resume.pdf' download
                className='inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-900 hover:text-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 gap-2'
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                <FileText className="w-5 h-5" /> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        @keyframes burst {
          0% {
            transform: translate(0,0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(cos(var(--angle)) * var(--distance)),
              calc(sin(var(--angle)) * var(--distance))
            ) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out 0.3s both; }
      `}</style>
    </section>
  );
};

export default Hero;
