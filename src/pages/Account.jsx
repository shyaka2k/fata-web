import React from "react";

const Account = () => {
  return (
  <div className="max-w-xl mx-auto mt-6 p-4 sm:p-6 rounded shadow bg-white w-full">
  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Account Information</h2>
      <div className="mb-6">
        <p className="text-gray-700 text-sm sm:text-base mb-2 text-center">
          Welcome to your account dashboard. Here you can view your profile summary and basic information.<br className="hidden sm:block" /> For security and personalization options, please visit the <span className="text-green-700 font-semibold">Settings</span> page.
        </p>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <label className="block font-semibold mb-1 sm:mb-0">Name:</label>
        <span className="text-gray-800">John Doe</span>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <label className="block font-semibold mb-1 sm:mb-0">Email:</label>
        <span className="text-gray-800">john@example.com</span>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <label className="block font-semibold mb-1 sm:mb-0">Member Since:</label>
        <span className="text-gray-800">2025-01-01</span>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Profile Summary:</label>
        <span className="block text-gray-600 text-sm sm:text-base">Active member of FATA, passionate about African tradition, leadership, and community empowerment.</span>
      </div>
    </div>
  );
};

export default Account;
