import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-bg max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-end px-6 py-4 md:px-8 md:py-6">
        {/* Desktop links */}
        <div className="hidden md:flex space-x-8  font-body">
          <a href="#projects" className="hover:text-accent transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg">
          <div className="flex flex-col items-center space-y-4 py-6">
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="text-lg font-body hover:text-accent transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-lg font-body hover:text-accent transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
