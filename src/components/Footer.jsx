import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="py-12 md:py-16 font-outfit"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Your Name */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dhanush</h3>



        {/* Copyright notice */}
        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} dhanushkumar 🚀. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
