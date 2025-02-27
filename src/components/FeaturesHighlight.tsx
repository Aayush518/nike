import React from 'react';
import { Wind, Zap, Shield, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Air Cushioning',
    description: 'Revolutionary Air technology provides responsive cushioning that helps reduce impact and enhance comfort with every step.',
    icon: <Droplet size={40} className="text-red-600" />,
    animation: 'fade-right'
  },
  {
    id: 2,
    title: 'Lightweight Design',
    description: 'Engineered with advanced materials to create ultra-lightweight footwear that feels like you\'re walking on clouds.',
    icon: <Wind size={40} className="text-blue-500" />,
    animation: 'fade-up'
  },
  {
    id: 3,
    title: 'Energy Return',
    description: 'Innovative foam technology captures the energy from your stride and returns it to power your next step.',
    icon: <Zap size={40} className="text-yellow-500" />,
    animation: 'fade-up'
  },
  {
    id: 4,
    title: 'Durability',
    description: 'Built to last with reinforced materials in high-wear areas, ensuring your shoes maintain performance over time.',
    icon: <Shield size={40} className="text-green-500" />,
    animation: 'fade-left'
  }
];

const FeaturesHighlight: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-center">Revolutionary Technology</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Discover the innovations that make Nike shoes stand out from the competition.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className="bg-gray-900 rounded-xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-start">
                <motion.div 
                  className="mr-6 p-3 bg-gray-800 rounded-lg"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nike Air Technology Visualization */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <motion.h3 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Nike Air Technology
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our revolutionary Air cushioning technology uses pressurized air inside a flexible membrane to provide lightweight cushioning. The Air units maintain their shape and bounce back after impact, delivering consistent performance throughout the life of your shoes.
              </motion.p>
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.li 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  <span>Responsive cushioning for impact protection</span>
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  <span>Lightweight design for all-day comfort</span>
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  <span>Durable construction for lasting performance</span>
                </motion.li>
              </motion.ul>
            </div>
            <div className="h-96 relative p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-full w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Nike Air Technology" 
                  className="h-full w-full object-cover rounded-xl shadow-2xl"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 bg-red-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Air Technology
                </motion.div>
                
                {/* Air bubbles */}
                <motion.div 
                  className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-600/50 rounded-full filter blur-md"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-red-600/40 rounded-full filter blur-md"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 left-1/4 w-8 h-8 bg-red-600/30 rounded-full filter blur-md"
                  animate={{ 
                    y: [0, -6, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;