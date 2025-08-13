import React from "react";
import { Users, Package, ShoppingCart, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Sidebar = () => {
  const menuItems = [
    "CRM",
    "HRM",
    "PURCHASE",
    "INVENTORY",
    "REPORTS",
    "FEEDBACK",
  ];

  return (
    <div className="bg-gray-800 text-white w-16 h-screen fixed top-16 left-0 p-2 shadow-lg">
      <h2 className="text-sm font-bold mb-4 text-center">YNK</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item} className="hover:bg-gray-700 p-1 rounded">
            <a
              href={`#${item.toLowerCase()}`}
              className="block text-xs text-center"
            >
              {item.charAt(0)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ErpDashboard = () => {
  const salesData = [
    { month: "Jan", sales: 250, revenue: 180 },
    { month: "Feb", sales: 450, revenue: 250 },
    { month: "Mar", sales: 320, revenue: 300 },
    { month: "Apr", sales: 380, revenue: 650 },
    { month: "May", sales: 300, revenue: 450 },
    { month: "Jul", sales: 620, revenue: 800 },
  ];

  const moduleCards = [
    { title: "CRM", icon: Users, color: "bg-blue-500" },
    { title: "Inventory", icon: Package, color: "bg-green-500" },
    { title: "Purchase", icon: ShoppingCart, color: "bg-orange-500" },
    { title: "Sales", icon: BarChart3, color: "bg-red-500" },
  ];

  return (
    <div className="ml-16 mt-16 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Welcome to YNK Admin Dashboard
        </p>

        {/* Module Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {moduleCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} rounded-xl p-4 text-white cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center h-32`}
            >
              <div className="text-center">
                <card.icon className="w-10 h-10 mx-auto mb-2" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Overview */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Sales Overview
          </h2>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#666" }}
                  domain={[0, 900]}
                  ticks={[0, 200, 400, 600, 900]}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  dot={{ fill: "#4F46E5", r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#06B6D4"
                  strokeWidth={2}
                  dot={{ fill: "#06B6D4", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpDashboard;
