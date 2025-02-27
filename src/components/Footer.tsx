import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeInput, setActiveInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ email: '', message: '', name: '' });
    }, 1000);
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-center leading-none tracking-tighter gradient-text"
              style={{ color: '#E8E8E8' }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-center mt-4 text-lg"
            >
              Get in touch and let's create something extraordinary together
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Input */}
                <div 
                  className={`relative transition-all duration-300 ${
                    activeInput === 'name' ? 'scale-[1.02]' : ''
                  }`}
                >
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    onFocus={() => setActiveInput('name')}
                    onBlur={() => setActiveInput('')}
                    className="w-full bg-transparent border-b border-gray-800 px-0 py-3 text-lg focus:outline-none focus:border-red-500 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeInput === 'name' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Email Input */}
                <div 
                  className={`relative transition-all duration-300 ${
                    activeInput === 'email' ? 'scale-[1.02]' : ''
                  }`}
                >
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    onFocus={() => setActiveInput('email')}
                    onBlur={() => setActiveInput('')}
                    className="w-full bg-transparent border-b border-gray-800 px-0 py-3 text-lg focus:outline-none focus:border-red-500 transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeInput === 'email' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Message Input */}
                <div 
                  className={`relative transition-all duration-300 ${
                    activeInput === 'message' ? 'scale-[1.02]' : ''
                  }`}
                >
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    onFocus={() => setActiveInput('message')}
                    onBlur={() => setActiveInput('')}
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-800 px-0 py-3 text-lg focus:outline-none focus:border-red-500 transition-all duration-300 resize-none"
                    placeholder="Your message"
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeInput === 'message' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group relative w-full bg-gradient-to-br from-red-600 via-red-500 to-red-600 text-white py-4 text-lg font-bold overflow-hidden rounded-full shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="tracking-wide">Send Message</span>
                    <motion.div
                      className="relative"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      animate={isSubmitting ? {
                        y: [-2, 2, -2],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{
                        duration: 0.6,
                        repeat: isSubmitting ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    >
                      <Send 
                        size={22} 
                        className="transform group-hover:translate-x-1 transition-all duration-300"
                        strokeWidth={2.5}
                      />
                      <motion.div
                        className="absolute inset-0 bg-white/30 rounded-full blur-md"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </span>
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isSubmitting ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    } : { scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 1.2,
                      repeat: isSubmitting ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Links */}
              <div className="space-y-8">
                <motion.a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-red-500 transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg">contact@example.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-red-500 transition-colors">
                    <MapPin className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg">Beaverton, Oregon</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-sm text-gray-400 mb-6">Connect on</h3>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/Aayush518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-red-500 transition-colors group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/Aayush518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-red-500 transition-colors group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-24 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;