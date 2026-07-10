import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <img
  src={logo}
  alt="Grand Duchy Media"
  className="h-10 w-auto object-contain rounded-lg"
/>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/918398095525"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600"
        >
          <FaWhatsapp />
          WhatsApp
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-gray-700">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>

            <a
              href="https://wa.me/918398095525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;