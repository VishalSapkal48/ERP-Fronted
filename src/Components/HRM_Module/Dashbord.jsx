import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data for dashboard metrics
  const metrics = [
    { title: "Total Employees", value: 120, icon: "👥", link: "/hrm/employees" },
    { title: "Attendance Rate", value: "92%", icon: "📅", link: "/hrm/attendance" },
    { title: "Pending Leaves", value: 8, icon: "🍃", link: "/hrm/leaves" },
    { title: "Payroll Due", value: "3 Days", icon: "💰", link: "/hrm/payroll" },
  ];

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, employee: "John Doe", action: "Submitted leave request", date: "2025-07-04" },
    { id: 2, employee: "Jane Smith", action: "Clocked in", date: "2025-07-04" },
    { id: 3, employee: "Bob Johnson", action: "Added as new employee", date: "2025-07-03" },
  ];

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">HRM Dashboard</h2>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <Link
            key={index}
            to={metric.link}
            className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition"
          >
            <div className="flex items-center">
              <span className="text-3xl mr-4">{metric.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{metric.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Activities</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Employee</th>
              <th className="p-2">Action</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity) => (
              <tr key={activity.id} className="border-b">
                <td className="p-2">{activity.employee}</td>
                <td className="p-2">{activity.action}</td>
                <td className="p-2">{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;