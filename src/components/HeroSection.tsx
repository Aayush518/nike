import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-40 md:pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-red-950/20 z-10 parallax-layer parallax-layer-back">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent h-96"></div>
      </div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Nike Shoes Background" 
          className="w-full h-full object-cover opacity-20 scale-110"
        />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 z-20 flex items-center justify-center mt-64">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-3xl mx-auto px-4 mt-32 md:mt-48"
        >
          <img 
            src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            alt="Nike Air Max" 
            className="w-full h-auto object-contain filter drop-shadow-[0_0_35px_rgba(255,0,0,0.4)] rounded-3xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
          />
          <motion.div 
            className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/40 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-full mix-blend-screen filter blur-2xl opacity-70"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 md:px-8 relative z-30 text-center mt-[-15vh] md:mt-[-20vh]"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-title font-bold mb-8 tracking-tight text-white"
        >
          STEP INTO <br/> THE <span className="gradient-text-white-red">FUTURE</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]"
        >
          Experience innovation with every step. Discover the next generation of Nike footwear.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: "#dc2626", color: "#ffffff" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('products')}
          className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold tracking-wide transition-all duration-300 button-glow"
        >
          EXPLORE NOW
        </motion.button>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce"
      >
        <button 
          onClick={() => scrollToSection('products')}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2 font-medium tracking-wider">Discover More</span>
          <ChevronDown size={24} />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;