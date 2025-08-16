import React from "react";
import WelcomeNavbar from "../components/WelcomeNavbar";
import WelcomeFooter from "../components/WelcomeFooter";

const WelcomeLayout = ({ children }) => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Navbar */}
      <WelcomeNavbar />

      {/* Page Content */}
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <WelcomeFooter />
    </div>
  );
};

export default WelcomeLayout;
