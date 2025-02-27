import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: '$150',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step with a large window and 270 degrees of Air.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    color: 'bg-red-600'
  },
  {
    id: 2,
    name: 'Nike Air Force 1',
    price: '$110',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
    color: 'bg-blue-600'
  },
  {
    id: 3,
    name: 'Nike Air Jordan 1',
    price: '$180',
    description: 'The Air Jordan 1 High is the shoe that started it all. Michael Jordan\'s first signature model was designed by Peter Moore in 1985.',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    color: 'bg-green-600'
  },
  {
    id: 4,
    name: 'Nike React Infinity',
    price: '$160',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    color: 'bg-purple-600'
  },
  {
    id: 5,
    name: 'Nike Zoom Pegasus',
    price: '$120',
    description: 'The Nike Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor.',
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    color: 'bg-yellow-500'
  },
  {
    id: 6,
    name: 'Nike Blazer Mid',
    price: '$100',
    description: 'The Nike Blazer Mid \'77 Vintage harnesses the old-school look of Nike basketball with a vintage midsole finish.',
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    color: 'bg-pink-600'
  }
];

const ProductShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const nextProduct = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="parallax-layer parallax-layer-deep">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
        </div>
        <div className="parallax-layer parallax-layer-medium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,0,0.15),transparent_70%)]" />
        </div>
        <div className="parallax-layer parallax-layer-shallow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,0,0,0.1),transparent_60%)]" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center gradient-text-white-red">
            Featured Collection
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our latest innovations designed to elevate your performance and style.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {products.map((product) => (
                <motion.div 
                  key={product.id} 
                  className="w-full flex-shrink-0 px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <div className="h-72 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 rounded-t-3xl"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <span className={`${product.color} px-3 py-1 rounded-full text-sm font-semibold`}>
                          {product.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{product.description}</p>
                      <motion.button 
                        className="mt-6 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-red-600 hover:text-white transition-colors shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
                        whileHover={{ scale: 1.05, backgroundColor: "#dc2626", color: "#ffffff" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.button 
            onClick={prevProduct}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-red-600 hover:text-white rounded-full p-4 shadow-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button 
            onClick={nextProduct}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-red-600 hover:text-white rounded-full p-4 shadow-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {products.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-red-600' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              variants={itemVariants}
              className="card-hover"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="h-64 overflow-hidden relative">
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProduct === product.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="p-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredProduct === product.id ? 0 : 20,
                      opacity: hoveredProduct === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-sm text-gray-300">{product.description}</p>
                    <motion.button 
                      className="mt-3 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-red-600 hover:text-white transition-colors button-glow"
                      whileHover={{ scale: 1.05, backgroundColor: "#dc2626", color: "#ffffff" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className={`${product.color} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;