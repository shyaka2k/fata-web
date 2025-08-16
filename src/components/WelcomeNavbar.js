import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";

const WelcomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-gradient-to-r from-blue-300 to-green-300 shadow-lg sticky top-0 z-50 transition duration-300 hover:shadow-xl">
        {/* Logo */}
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white">
          FATA
        </h2>

        {/* Sliding Words - hidden on very small screens */}
        <div className="hidden sm:block overflow-hidden max-w-xs md:max-w-md mx-4">
          <motion.div
            className="text-white font-extrabold text-lg md:text-2xl tracking-wide whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            Peace • Unity • Culture • Youth Empowerment • Peace • Unity • Culture • Youth Empowerment
          </motion.div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex space-x-4 items-center">
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base"
            >
              <FaUserPlus className="mr-2" /> Sign Up
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 text-sm md:text-base"
            >
              <FaSignInAlt className="mr-2" /> Log In
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-gradient-to-r from-blue-200 to-green-200 sm:hidden px-4 py-4 space-y-3 shadow-lg"
        >
          <Link
            to="/signup"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaUserPlus className="inline mr-2" /> Sign Up
          </Link>
          <Link
            to="/login"
            className="block border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaSignInAlt className="inline mr-2" /> Log In
          </Link>
        </motion.div>
      )}

      {/* Short Stats Navbar */}
      <div className="bg-white shadow-md py-3 px-4 sm:px-6 flex flex-col sm:flex-row justify-around items-center sticky top-[64px] z-40 space-y-3 sm:space-y-0">
        <div className="text-center">
          <p className="text-gray-700 font-bold text-base sm:text-lg">75%</p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Peace Missions Completed
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-700 font-bold text-base sm:text-lg">50+</p>
          <p className="text-gray-500 text-xs sm:text-sm">Cultural Programs</p>
        </div>
        <div className="text-center">
          <p className="text-gray-700 font-bold text-base sm:text-lg">1200+</p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Youth & Women Empowered
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeNavbar;
