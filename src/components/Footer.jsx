// ./components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-12 w-full">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/leadership" className="hover:underline">Leadership</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/get-involved" className="hover:underline">Get Involved</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Contact</h4>
          <p className="text-sm">President: HRH Drani Izakare - <a href="tel:+256782201280" className="underline">+256 782 201 280</a></p>
          <p className="text-sm">Secretary General: HRH Chief Ishima - <a href="tel:+260977825941" className="underline">+260 977 825 941</a></p>
          <p className="text-sm">Admin/Treasurer: HRH Brook Temesgen - <a href="tel:+251923125050" className="underline">+251 923 125 050</a></p>
          <p className="text-sm">
            Email: <a href="mailto:brooksewt@gmail.com" className="underline">brooksewt@gmail.com</a>
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Newsletter</h4>
          <p className="text-sm">Sign up to receive updates and news.</p>
          <form className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black flex-1 mb-2 sm:mb-0"
            />
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
  <div className="text-center mt-6 text-xs sm:text-sm text-gray-300 px-2 sm:px-4 w-full">
        © {new Date().getFullYear()} Forum of African Traditional Authorities (FATA). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
