import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: "YNK ERP Pvt Ltd",
    email: "admin@ynkerp.com",
    timezone: "Asia/Kolkata",
    currency: "INR",
    notifications: true,
    autoBackup: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
    console.log("Saved Settings:", settings);
    // Add backend call here if needed
  };

  return (
    <div className="p-6 ml-64 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        ⚙️ ERP System Settings
      </h2>

      {/* Company Information */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Company Information</h3>
        <input
          type="text"
          name="companyName"
          value={settings.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
          placeholder="Company Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Regional Settings */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Regional Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="timezone"
            value={settings.timezone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="Asia/Kolkata">Asia/Kolkata (India)</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
          <select
            name="currency"
            value={settings.currency}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="INR">₹ INR</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
          </select>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
        <div className="flex items-center justify-between">
          <label>Email & SMS Alerts</label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>
      </div>

      {/* Backup Settings */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Backup & Restore</h3>
        <div className="flex items-center justify-between mb-4">
          <label>Auto Backup</label>
          <input
            type="checkbox"
            name="autoBackup"
            checked={settings.autoBackup}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Download Backup Now
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;