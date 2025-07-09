import React, { useState } from "react";
import {
  FilePlus,
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  Bell,
} from "lucide-react";

const Leaves = () => {
  const [leaveBalance] = useState({
    annual: { total: 15, used: 5 },
    sick: { total: 5, used: 2 },
    casual: { total: 2, used: 1 },
  });

  const notifications = [
    "Your leave from 3rd Jul - 5th Jul is approved.",
    "New leave policy updated for 2025.",
  ];

  return (
    <div className="p-4 md:p-6 ml-0 md:ml-64 bg-gradient-to-b from-blue-50 via-white to-slate-100 min-h-screen text-slate-800">
      <h2 className="text-3xl font-bold mb-6">🌿 Leave Management System</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {["annual", "sick", "casual"].map((type) => (
          <div
            key={type}
            className="bg-gradient-to-br from-white to-blue-100 p-4 rounded-xl shadow border"
          >
            <h4 className="text-lg font-semibold capitalize">{type} Leave</h4>
            <p className="text-sm mt-1">
              <span className="font-bold text-green-700">
                {leaveBalance[type].total - leaveBalance[type].used}
              </span>{" "}
              / {leaveBalance[type].total} days left
            </p>
          </div>
        ))}
      </div>

      {/* Leave Policy Info */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow mb-6 text-sm">
        📌 <strong>Note:</strong> Max 5 consecutive leaves. Casual leave can't
        be carried forward.
      </div>

      {/* Notifications */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
          <Bell size={18} /> Notifications
        </h4>
        <ul className="text-sm text-slate-700 space-y-2">
          {notifications.map((n, i) => (
            <li key={i}>✔️ {n}</li>
          ))}
        </ul>
      </div>

      {/* Grid for Apply + My Leave Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Apply for Leave */}
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center gap-2">
            <FilePlus size={20} /> Apply for Leave
          </h3>
          <input
            type="date"
            className="p-2 border rounded-lg mb-3 w-full focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="date"
            className="p-2 border rounded-lg mb-3 w-full focus:ring-2 focus:ring-blue-200"
          />
          <select className="p-2 border rounded-lg mb-3 w-full focus:ring-2 focus:ring-blue-200">
            <option>Annual Leave</option>
            <option>Sick Leave</option>
            <option>Casual Leave</option>
          </select>
          <textarea
            className="p-2 border rounded-lg mb-4 w-full"
            placeholder="Reason"
          ></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg w-full transition-all">
            Submit Request
          </button>
        </div>

        {/* My Leave Requests Table */}
        <div className="bg-white p-6 rounded-xl shadow border overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            📋 My Leave History
          </h3>
          <table className="min-w-[500px] w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="p-2">From</th>
                <th className="p-2">To</th>
                <th className="p-2">Type</th>
                <th className="p-2">Reason</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">2024-07-03</td>
                <td className="p-2">2024-07-05</td>
                <td className="p-2">Annual</td>
                <td className="p-2">Vacation</td>
                <td className="p-2">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs inline-flex items-center gap-1">
                    <CheckCircle2 size={14} /> Approved
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2">2024-06-01</td>
                <td className="p-2">2024-06-01</td>
                <td className="p-2">Casual</td>
                <td className="p-2">Personal</td>
                <td className="p-2">
                  <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs inline-flex items-center gap-1">
                    <XCircle size={14} /> Rejected
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2">2024-05-15</td>
                <td className="p-2">2024-05-17</td>
                <td className="p-2">Sick</td>
                <td className="p-2">Flu</td>
                <td className="p-2">
                  <span className="bg-amber-400 text-white px-2 py-1 rounded-full text-xs inline-flex items-center gap-1">
                    <Clock size={14} /> Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Admin Panel for Pending Requests */}
      <div className="bg-white p-6 rounded-xl shadow border overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          🧑‍💼 Admin: Pending Leave Approvals
        </h3>
        <table className="min-w-[700px] w-full text-sm text-left">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-2">Employee</th>
              <th className="p-2">From</th>
              <th className="p-2">To</th>
              <th className="p-2">Type</th>
              <th className="p-2">Reason</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">John Doe</td>
              <td className="p-2">2024-07-10</td>
              <td className="p-2">2024-07-12</td>
              <td className="p-2">Annual</td>
              <td className="p-2">Family event</td>
              <td className="p-2">
                <span className="bg-amber-400 text-white px-2 py-1 rounded-full text-xs inline-flex items-center gap-1">
                  <Clock size={14} /> Pending
                </span>
              </td>
              <td className="p-2 space-x-1">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-xs">
                  Approve
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs">
                  Reject
                </button>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Jane Smith</td>
              <td className="p-2">2024-07-15</td>
              <td className="p-2">2024-07-15</td>
              <td className="p-2">Casual</td>
              <td className="p-2">Doctor Appointment</td>
              <td className="p-2">
                <span className="bg-amber-400 text-white px-2 py-1 rounded-full text-xs inline-flex items-center gap-1">
                  <Clock size={14} /> Pending
                </span>
              </td>
              <td className="p-2 space-x-1">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-xs">
                  Approve
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaves;