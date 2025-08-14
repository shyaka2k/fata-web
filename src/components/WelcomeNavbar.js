// ./components/WelcomeNavbar.js
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const WelcomeNavbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-300 to-green-300 shadow-lg sticky top-0 z-50 transition duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-extrabold tracking-wide text-white">FATA</h2>

        {/* Sliding Words */}
        <div className="overflow-hidden max-w-xs md:max-w-md mx-4">
          <motion.div
            className="text-white font-extrabold text-lg md:text-2xl tracking-wide whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            Peace • Unity • Culture • Youth Empowerment • Peace • Unity • Culture • Youth Empowerment
          </motion.div>
        </div>

        <div className="space-x-4 flex items-center">
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              <FaUserPlus className="mr-2" /> Sign Up
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
            >
              <FaSignInAlt className="mr-2" /> Log In
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Short Stats Navbar */}
      <div className="bg-white shadow-md py-3 px-6 flex justify-around items-center sticky top-[64px] z-40">
        <div className="text-center">
          <p className="text-gray-700 font-bold text-lg">75%</p>
          <p className="text-gray-500 text-sm">Peace Missions Completed</p>
        </div>
        <div className="text-center">
          <p className="text-gray-700 font-bold text-lg">50+</p>
          <p className="text-gray-500 text-sm">Cultural Programs</p>
        </div>
        <div className="text-center">
          <p className="text-gray-700 font-bold text-lg">1200+</p>
          <p className="text-gray-500 text-sm">Youth & Women Empowered</p>
        </div>
      </div>
    </>
  );
};

export default WelcomeNavbar;
