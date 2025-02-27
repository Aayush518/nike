import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutNike: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden transform-gpu">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-layer parallax-layer-back">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
        </div>
      </div>
      <motion.div
        className="container mx-auto px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-6xl font-bold mb-6 gradient-text"
            >
              Just Do It.
            </motion.h2>
            <p className="text-gray-300 mb-6 text-lg">
              Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.
            </p>
            <p className="text-gray-400 mb-8">
              The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$37.4 billion in its fiscal year 2020.
            </p>
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-600/20 glow-red"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-red-600 mb-2">1964</h3>
                <p className="text-sm text-gray-400">Year Founded as Blue Ribbon Sports</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-600/20 glow-red"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-red-600 mb-2">170+</h3>
                <p className="text-sm text-gray-400">Countries with Nike Presence</p>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition-colors shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            <motion.div 
              className="relative rounded-2xl overflow-hidden glow-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80" 
                alt="Nike Headquarters" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-gray-300">Nike World Headquarters</p>
                <p className="text-xs text-gray-400">Beaverton, Oregon</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h3 
            className="text-3xl font-bold mb-8 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Mission
          </motion.h3>
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              className="text-2xl text-white italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              "To bring inspiration and innovation to every athlete* in the world."
            </motion.p>
            <p className="text-gray-400 mt-2">*If you have a body, you are an athlete.</p>
            <p className="text-sm text-gray-500 mt-4">— Bill Bowerman, Co-founder of Nike</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutNike;