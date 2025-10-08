import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Zap,
  Briefcase,
  LayoutDashboard,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { name: "Home", icon: <Home />, href: "#home" },
  { name: "About", icon: <User />, href: "#about" },
  { name: "Skills", icon: <Zap />, href: "#skills" },
  { name: "Services", icon: <Briefcase />, href: "#services" },
  { name: "Portfolio", icon: <LayoutDashboard />, href: "#portfolio" },
  { name: "Contact", icon: <Mail />, href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/80 border-b border-gray-300"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-bold text-xl"
            style={{ fontFamily: "'Mochiy Pop One', sans-serif" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Dhanush
            <span className="text-gray-600">.</span>
          </motion.a>

          {/* Desktop Menu */}
          <ul
            className="hidden md:flex space-x-6 font-medium"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {menu.map((item, index) => (
              <motion.li
                key={item.name}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-200"
                >
                  {React.cloneElement(item.icon, {
                    className: "w-5 h-5 mr-2 text-gray-600",
                  })}
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden pt-16"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <div className="grid grid-cols-3 gap-4 p-4">
              {menu.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.name}
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center justify-center py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 mb-1 text-gray-600",
                  })}
                  <span className="text-sm">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
