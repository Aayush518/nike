import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState('');
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/30 py-4' 
          : 'bg-gradient-to-b from-black/30 via-black/20 to-transparent py-6'
      } ${scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative z-10 transform-gpu">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="w-14 h-14 text-red-600" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.3))' }}
          >
            <path d="M21.07 7.57L5.9 15.77C4.23 16.74 3.4 15.91 4.37 14.24L12.57 0.93C12.57 0.93 13.49 0 14.42 0.93C15.35 1.86 21.07 7.57 21.07 7.57ZM12.57 23.07C11.64 24 10.72 23.07 10.72 23.07L2.52 9.76C1.55 8.09 2.38 7.26 4.05 8.23L19.22 16.43C20.89 17.4 20.06 18.23 19.09 19.9L12.57 23.07Z" />
          </svg>
          <span className="ml-3 text-2xl font-bold tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">NIKE</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={() => setIsHovered(link.id)}
              onMouseLeave={() => setIsHovered('')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                activeSection === link.id 
                  ? 'text-white after:content-[""] after:block after:w-full after:h-0.5 after:bg-red-600 after:mt-1' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {isHovered === link.id && !activeSection && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 -z-10 rounded-lg bg-white/5"
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full py-4 border-t border-white/10"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <motion.button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm uppercase tracking-wider font-medium py-2 transition-colors ${
                  activeSection === link.id 
                    ? 'text-white bg-white/5 rounded-full px-4' 
                    : 'text-gray-400 hover:text-white pl-2'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;