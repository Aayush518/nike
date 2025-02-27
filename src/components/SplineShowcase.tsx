import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const SplineShowcase: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden relative">
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="parallax-layer parallax-layer-deep">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black opacity-30" />
        </div>
        <div className="parallax-layer parallax-layer-medium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,0,0.15),transparent_70%)]" />
        </div>
        <div className="parallax-layer parallax-layer-shallow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,0,0,0.1),transparent_60%)]" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 gradient-text-white-red">
            Experience Innovation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the perfect blend of style and performance in our latest collection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative inline-block"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
                Nike Air Max <span className="text-red-600">Excellence</span>
                <motion.div
                  className="absolute -right-8 -top-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-red-600" />
                </motion.div>
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-6">
              The Nike Air Max series revolutionized the industry with visible Air cushioning. Experience the comfort and style that has made this line an icon for decades.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-xl font-bold mr-4">01</div>
                <div>
                  <h4 className="font-semibold">Visible Air Technology</h4>
                  <p className="text-sm text-gray-400">See the innovation that changed footwear forever</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mr-4">02</div>
                <div>
                  <h4 className="font-semibold">Premium Materials</h4>
                  <p className="text-sm text-gray-400">Crafted with the highest quality materials for durability</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mr-4">03</div>
                <div>
                  <h4 className="font-semibold">Iconic Design</h4>
                  <p className="text-sm text-gray-400">Instantly recognizable silhouette that defines style</p>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-red-600/50"
            >
              Explore Collection <ArrowRight className="ml-2" size={18} />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-square w-full h-full rounded-3xl overflow-hidden shadow-2xl relative group perspective-1000">
              <img
                src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
                alt="Nike Air Max"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
              animate={{ 
                scale: [1, 1.3, 1],
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
      </div>
    </section>
  );
};

export default SplineShowcase;