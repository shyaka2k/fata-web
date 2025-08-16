import React from "react";

const Account = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4">Account Information</h2>
      <div className="mb-6">
        <p className="text-gray-700 text-base mb-2">
          Welcome to your account dashboard. Here you can view your profile summary and basic information. For security and personalization options, please visit the <span className="text-green-700 font-semibold">Settings</span> page.
        </p>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Name:</label>
        <span>John Doe</span>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Email:</label>
        <span>john@example.com</span>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Member Since:</label>
        <span>2025-01-01</span>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Profile Summary:</label>
        <span className="block text-gray-600">Active member of FATA, passionate about African tradition, leadership, and community empowerment.</span>
      </div>
    </div>
  );
};

export default Account;
