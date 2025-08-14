// ./components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul>
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
          <h4 className="font-bold mb-2">Contact</h4>
          <p>President: HRH Drani Izakare - +256782201280</p>
          <p>Secretary General: HRH Chief Ishima - +260977825941</p>
          <p>Admin/Treasurer: HRH Brook Temesgen - +251923125050</p>
          <p>Email: <a href="mailto:brooksewt@gmail.com" className="underline">brooksewt@gmail.com</a></p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-2">Newsletter</h4>
          <p>Sign up to receive updates and news.</p>
          <form className="mt-2 flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black mb-2"
            />
            <button className="bg-green-600 hover:bg-green-700 p-2 rounded font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-300">
        © {new Date().getFullYear()} Forum of African Traditional Authorities (FATA). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
