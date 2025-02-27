import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Instagram, Facebook, Twitter, Youtube, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import SplineShowcase from './components/SplineShowcase';
import AboutNike from './components/AboutNike';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [parallaxElements, setParallaxElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-scroll');
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-scroll-fast') ? 0.5 : 0.2;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  if (isLoading) {
    return (
      <motion.div 
        className="min-h-screen bg-black flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {/* Background Effects */}
          <motion.div 
            className="absolute -inset-40 opacity-30"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-red-600/20 via-transparent to-red-600/20 rounded-full blur-3xl" />
          </motion.div>
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="w-32 h-32 relative"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg 
                    className="w-full h-full text-red-600" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.5))' }}
                  >
                    <path d="M21.07 7.57L5.9 15.77C4.23 16.74 3.4 15.91 4.37 14.24L12.57 0.93C12.57 0.93 13.49 0 14.42 0.93C15.35 1.86 21.07 7.57 21.07 7.57ZM12.57 23.07C11.64 24 10.72 23.07 10.72 23.07L2.52 9.76C1.55 8.09 2.38 7.26 4.05 8.23L19.22 16.43C20.89 17.4 20.06 18.23 19.09 19.9L12.57 23.07Z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 space-y-4"
            >
              <h2 className="text-2xl font-bold tracking-wider">
                NIKE
              </h2>
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-red-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0,
                  }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-red-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.2,
                  }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-red-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.4,
                  }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-sm tracking-wider"
              >
                Loading Experience
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden prevent-flash">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main ref={mainRef} className="relative z-10 w-full overflow-hidden perspective-1000 prevent-flash">
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <HeroSection scrollToSection={scrollToSection} />
          <ProductShowcase />
          <SplineShowcase />
          <AboutNike />
          <Footer />
        </React.Suspense>
      </main>
    </div>
  );
}

export default App;