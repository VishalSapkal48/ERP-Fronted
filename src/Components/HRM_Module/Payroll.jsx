import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const Payroll = () => {
  const [selectedFrequency, setSelectedFrequency] = useState("Every Week");
  const [selectedDay, setSelectedDay] = useState("Monday");

  const frequencies = ["Every Week", "Fortnightly", "Once a Month"];
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const components = [
    { id: 6, name: "Basic", status: "Active" },
    { id: 12, name: "Medical", status: "Active" },
    { id: 31, name: "Travel", status: "Active" },
    { id: 34, name: "House Rent", status: "Active" },
    { id: 35, name: "Casual", status: "Active" },
    { id: 85, name: "Normal", status: "Active" },
    { id: 26, name: "Basic", status: "Active" },
    { id: 36, name: "Emergency", status: "Active" },
    { id: 40, name: "Tour", status: "Active" },
    { id: 44, name: "Medical", status: "Active" },
  ];

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">Payroll Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">General Settings</h3>
          <p className="mb-2 text-sm font-medium">
            How often do you pay your staff?
          </p>
          <div className="flex gap-3 mb-4">
            {frequencies.map((freq) => (
              <button
                key={freq}
                onClick={() => setSelectedFrequency(freq)}
                className={`px-4 py-2 rounded-full text-sm border ${
                  selectedFrequency === freq
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {freq}
              </button>
            ))}
          </div>

          <p className="text-sm mb-2">Pays every week on a</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {weekdays.map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="weekday"
                  value={day}
                  checked={selectedDay === day}
                  onChange={() => setSelectedDay(day)}
                />
                {day}
              </label>
            ))}
          </div>

          <p className="text-xs text-gray-500 mb-4">
            Note: When pay day falls on a non-working day or a holiday,
            employees will get on the previous day.
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Save Changes
            </button>
            <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>

        {/* Component Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Component Settings</h3>
            <div className="flex gap-2">
              <button className="text-purple-600 font-semibold">Earning</button>
              <button className="text-gray-400 font-semibold">Deduction</button>
            </div>
          </div>

          <div className="overflow-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2 pr-4">Sr. #</th>
                  <th className="py-2 pr-4">Component</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {components.map((comp) => (
                  <tr key={comp.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 pr-4">{comp.id}</td>
                    <td className="py-2 pr-4">{comp.name}</td>
                    <td className="py-2 pr-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        {comp.status}
                      </span>
                    </td>
                    <td className="py-2 flex items-center gap-2">
                      <button className="text-red-500">
                        <Trash2 size={16} />
                      </button>
                      <button className="text-blue-500">
                        <Pencil size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;