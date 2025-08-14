import React, { useState } from "react";

const Settings = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-6 text-green-900">Settings</h1>

      {/* Change Theme (Dark Mode) */}
      <div className="mb-4 border rounded">
        <button
          onClick={() => toggleSection("theme")}
          className="w-full px-4 py-3 text-left text-green-900 font-medium bg-green-100 hover:bg-green-200 focus:outline-none flex justify-between items-center"
        >
          Change Theme (Dark Mode)
          <span>{openSection === "theme" ? "▲" : "▼"}</span>
        </button>
        {openSection === "theme" && (
          <div className="p-4 bg-green-50 flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                }}
              />
              <span>Enable Dark Mode</span>
            </label>
          </div>
        )}
      </div>

      {/* Change Password */}
      <div className="mb-4 border rounded">
        <button
          onClick={() => toggleSection("password")}
          className="w-full px-4 py-3 text-left text-green-900 font-medium bg-green-100 hover:bg-green-200 focus:outline-none flex justify-between items-center"
        >
          Change Password
          <span>{openSection === "password" ? "▲" : "▼"}</span>
        </button>
        {openSection === "password" && (
          <div className="p-4 bg-green-50">
            <form>
              <label className="block mb-2">
                Current Password:
                <input
                  type="password"
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
              <label className="block mb-2">
                New Password:
                <input
                  type="password"
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
              <label className="block mb-4">
                Confirm New Password:
                <input
                  type="password"
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
              <button
                type="submit"
                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Update Password
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Change Email */}
      <div className="mb-4 border rounded">
        <button
          onClick={() => toggleSection("email")}
          className="w-full px-4 py-3 text-left text-green-900 font-medium bg-green-100 hover:bg-green-200 focus:outline-none flex justify-between items-center"
        >
          Change Email
          <span>{openSection === "email" ? "▲" : "▼"}</span>
        </button>
        {openSection === "email" && (
          <div className="p-4 bg-green-50">
            <form>
              <label className="block mb-2">
                New Email:
                <input
                  type="email"
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
              <button
                type="submit"
                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Update Email
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Delete Account */}
      <div className="mb-4 border rounded">
        <button
          onClick={() => toggleSection("delete")}
          className="w-full px-4 py-3 text-left text-red-700 font-medium bg-red-100 hover:bg-red-200 focus:outline-none flex justify-between items-center"
        >
          Delete Account
          <span>{openSection === "delete" ? "▲" : "▼"}</span>
        </button>
        {openSection === "delete" && (
          <div className="p-4 bg-red-50">
            <p className="mb-4">
              Warning: Deleting your account is permanent and cannot be undone.
            </p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => alert("Account deletion flow triggered")}
            >
              Confirm Delete Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
