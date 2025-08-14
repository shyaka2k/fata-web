import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setMenuOpen(false);
    navigate("/");
  };

  const linkClasses = `px-4 py-2 font-semibold rounded-md
    bg-green-800 hover:bg-green-700 active:bg-green-900
    text-white shadow-md transition`;

  // Icon SVGs for dropdown items
  const icons = {
    notifications: (
      <svg
        className="w-5 h-5 mr-2 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      </svg>
    ),
    account: (
      <svg
        className="w-5 h-5 mr-2 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-3-3.87"></path>
        <path d="M4 21v-2a4 4 0 013-3.87"></path>
        <circle cx={12} cy={7} r={4}></circle>
      </svg>
    ),
    privacy: (
      <svg
        className="w-5 h-5 mr-2 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 11c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2z"></path>
        <path d="M17.7 9a7 7 0 11-11.4 0"></path>
        <path d="M12 3v2"></path>
      </svg>
    ),
    help: (
      <svg
        className="w-5 h-5 mr-2 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx={12} cy={12} r={10}></circle>
        <path d="M9.09 9a3 3 0 015.82 1c0 1.5-3 2-3 2"></path>
        <line x1={12} y1={17} x2={12} y2={17}></line>
      </svg>
    ),
    settings: (
      <svg
        className="w-5 h-5 mr-2 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx={12} cy={12} r={3}></circle>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"></path>
      </svg>
    ),
    logout: (
      <svg
        className="w-5 h-5 mr-2 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 17l5-5m0 0l-5-5m5 5H9"></path>
        <path d="M12 12H3"></path>
      </svg>
    ),
  };

  return (
    <nav className="bg-green-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-yellow-400 transition"
        >
          FATA
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-4 flex-grow justify-center">
          <Link
            to="/home"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            About
          </Link>
          <Link
            to="/leadership"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            Leadership
          </Link>
          <Link
            to="/activities"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            Activities
          </Link>
          <Link
            to="/events"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            Events
          </Link>
          <Link
            to="/get-involved"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            Get Involved
          </Link>
          <Link
            to="/donation"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            Donate
          </Link>
          <Link
            to="/news-media"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            News
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 font-semibold rounded-md
              bg-green-800 hover:bg-green-700 active:bg-green-900
              text-white shadow-md transition`}
          >
            Contact
          </Link>
        </div>

        {/* User Icon and Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="User menu"
            className="p-2 rounded-full bg-yellow-400 text-green-900 shadow-lg hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition"
            title="User menu"
          >
            {/* User Icon (solid human silhouette) */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white text-gray-900 rounded shadow-lg z-50 divide-y divide-gray-200">
              <div className="px-4 py-2 space-y-1">
                <Link
                  to="/notifications"
                  className="flex items-center px-3 py-2 rounded hover:bg-green-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {icons.notifications}
                  Notifications
                </Link>
                <Link
                  to="/account"
                  className="flex items-center px-3 py-2 rounded hover:bg-green-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {icons.account}
                  Account
                </Link>
                <Link
                  to="/privacy"
                  className="flex items-center px-3 py-2 rounded hover:bg-green-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {icons.privacy}
                  Privacy
                </Link>
                <Link
                  to="/help"
                  className="flex items-center px-3 py-2 rounded hover:bg-green-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {icons.help}
                  Help
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center px-3 py-2 rounded hover:bg-green-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {icons.settings}
                  Settings
                </Link>
              </div>
              <div className="px-4 py-2 space-y-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-100"
                >
                  {icons.logout}
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
