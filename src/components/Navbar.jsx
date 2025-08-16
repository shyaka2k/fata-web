import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
    localStorage.removeItem("authToken");
  navigate("/");
  };

  const linkClasses = `px-4 py-2 font-semibold rounded-md
    bg-green-800 hover:bg-green-700 active:bg-green-900
    text-white shadow-md transition`;

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/leadership", label: "Leadership" },
    { to: "/activities", label: "Activities" },
    { to: "/events", label: "Events" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/donation", label: "Donate" },
    { to: "/news-media", label: "News" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-green-900 text-white p-4 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between w-full">
        {/* Logo */}
        <span className="text-xl font-bold hover:text-yellow-400 transition cursor-default">
          FATA
        </span>

        {/* Desktop Nav Links */}
  <div className="hidden md:flex flex-wrap space-x-2 sm:space-x-4 flex-grow justify-center">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="block md:hidden p-2 rounded bg-green-800 hover:bg-green-700 focus:outline-none"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileNavOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* User Icon */}
  <div className="relative hidden md:block" ref={dropdownRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="User menu"
            className="p-2 rounded-full bg-yellow-400 text-green-900 shadow-lg hover:bg-yellow-500 active:bg-yellow-600"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white text-gray-900 rounded shadow-lg z-50">
              <div className="border-b px-4 py-2 font-semibold text-green-700">Account Info</div>
              <Link to="/account" className="block px-4 py-2 hover:bg-green-100">
                View Account
              </Link>
              <div className="border-b mt-2" />
              <Link to="/settings" className="block px-4 py-2 hover:bg-green-100">
                Settings
              </Link>
              <button
                onClick={() => alert('Personalization feature coming soon!')}
                className="block w-full text-left px-4 py-2 hover:bg-green-100"
              >
                Personalization
              </button>
              <div className="border-b mt-2" />
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2 pb-2 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 bg-green-800 rounded hover:bg-green-700"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 bg-red-600 rounded hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
