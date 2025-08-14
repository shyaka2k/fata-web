import React from "react";
import WelcomeNavbar from "../components/WelcomeNavbar";
import WelcomeFooter from "../components/WelcomeFooter";

const WelcomeLayout = ({ children }) => {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <WelcomeNavbar />
      {children}
      <WelcomeFooter />
    </div>
  );
};

export default WelcomeLayout;
