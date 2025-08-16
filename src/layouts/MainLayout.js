import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
  <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800 w-full">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
  <main className="flex-grow w-full px-2 sm:px-4 md:px-8 py-4 sm:py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
