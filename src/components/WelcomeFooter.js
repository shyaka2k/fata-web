// ./components/WelcomeFooter.js
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WelcomeFooter = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20 relative overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* About */}
        <div className="hover:scale-105 transition-transform duration-300">
          <h4 className="text-xl font-bold mb-4">About FATA</h4>
          <p className="text-gray-400 text-sm">
            Forum of African Traditional Authorities works to unite traditional leaders across Africa to promote peace, cultural preservation, and sustainable development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="hover:scale-105 transition-transform duration-300">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-white transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition duration-300">About Us</Link></li>
            <li><Link to="/events" className="hover:text-white transition duration-300">Events</Link></li>
            <li><Link to="/contact" className="hover:text-white transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="hover:scale-105 transition-transform duration-300">
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-gray-400 text-sm mb-2">Email: info@fata.org</p>
          <p className="text-gray-400 text-sm mb-2">Phone: +254 700 123 456</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <motion.a href="#" whileHover={{ scale: 1.3 }} className="hover:text-blue-400 transition">🌐</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3 }} className="hover:text-blue-400 transition">🐦</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3 }} className="hover:text-blue-400 transition">📘</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.3 }} className="hover:text-blue-400 transition">📸</motion.a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center text-sm text-gray-500 border-t border-gray-700 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        © 2025 Forum of African Traditional Authorities. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default WelcomeFooter;
