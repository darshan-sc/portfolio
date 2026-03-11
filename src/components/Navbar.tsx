import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/70 border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-6 md:py-8">
          {/* Name / Logo */}
          <a href="#" className="font-heading text-lg sm:text-xl font-bold tracking-tight text-text hover:text-accent transition-colors">
            Darshan Chudiwal
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-12 font-body text-sm uppercase tracking-widest font-semibold">
            <a href="#projects" className="text-text hover:text-accent transition-colors">Projects</a>
            <a href="#publications" className="text-text hover:text-accent transition-colors">Publications</a>
            <a href="#contact" className="text-text hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl p-2 text-text focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-bg border-b border-black/5 py-8"
          >
            <div className="flex flex-col items-center space-y-6 font-body text-sm uppercase tracking-widest font-semibold">
              <a href="#projects" onClick={() => setOpen(false)} className="text-text hover:text-accent transition-colors">Projects</a>
              <a href="#publications" onClick={() => setOpen(false)} className="text-text hover:text-accent transition-colors">Publications</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-text hover:text-accent transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
