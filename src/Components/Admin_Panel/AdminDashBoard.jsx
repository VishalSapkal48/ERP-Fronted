import React from "react";
import {
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  User,
  AlertCircle,
  Headphones,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AdminDashBoard = () => {
  const salesData = [
    { month: "Jan", sales: 250, revenue: 180 },
    { month: "Feb", sales: 450, revenue: 250 },
    { month: "Mar", sales: 320, revenue: 300 },
    { month: "Apr", sales: 380, revenue: 650 },
    { month: "May", sales: 300, revenue: 450 },
    { month: "Jul", sales: 620, revenue: 800 },
  ];

  const topProductsData = [
    { name: "AB", value: 850 },
    { name: "AC", value: 620 },
    { name: "AD", value: 480 },
    { name: "AE", value: 320 },
  ];

  const projectsData = [
    { name: "In Progress", value: 45, color: "#4F46E5" },
    { name: "Completed", value: 25, color: "#F97316" },
    { name: "Pending", value: 30, color: "#10B981" },
  ];

  const moduleCards = [
    { title: "CRM", icon: Users, color: "bg-blue-500" },
    { title: "Inventory", icon: Package, color: "bg-green-500" },
    { title: "Purchase", icon: ShoppingCart, color: "bg-orange-500" },
    { title: "Sales", icon: BarChart3, color: "bg-red-500" },
  ];

  return (
    <div className="p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to YNK Admin Dashboard</p>
      </div>

      {/* Top Module Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {moduleCards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} rounded-xl p-6 text-white cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg`}
          >
            <div className="flex items-center justify-center mb-4">
              <card.icon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-center">{card.title}</h3>
          </div>
        ))}
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Sales Overview - Takes full width on large screens */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Sales Overview</h2>
            <BarChart3 className="w-6 h-6 text-gray-500" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                  domain={[0, 900]}
                  ticks={[0, 200, 400, 600, 900]}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#4F46E5"
                  strokeWidth={3}
                  dot={{ fill: "#4F46E5", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#06B6D4"
                  strokeWidth={3}
                  dot={{ fill: "#06B6D4", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              <span className="text-sm text-gray-600">Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <span className="text-sm text-gray-600">Revenue</span>
            </div>
          </div>
        </div>

        {/* Projects Pie Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
            <Package className="w-6 h-6 text-gray-500" />
          </div>
          <div className="flex flex-col items-center">
            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={projectsData}
                    cx={100}
                    cy={100}
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {projectsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-3 w-full">
              {projectsData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Top Products</h2>
            <BarChart3 className="w-6 h-6 text-gray-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProductsData} layout="horizontal">
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                  domain={[0, 1000]}
                  ticks={[0, 200, 400, 600, 800]}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <Bar dataKey="value" fill="#4F46E5" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* HRM Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">HRM</h2>
            <User className="w-6 h-6 text-gray-500" />
          </div>
          <div className="h-32 flex flex-col items-center justify-center text-gray-500">
            <User className="w-16 h-16 opacity-30 mb-3" />
            <p className="text-sm text-center">HR Management System</p>
          </div>
        </div>

        {/* Complaints Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Complaints</h2>
            <AlertCircle className="w-6 h-6 text-gray-500" />
          </div>
          <div className="h-32 flex flex-col items-center justify-center text-gray-500">
            <AlertCircle className="w-16 h-16 opacity-30 mb-3" />
            <p className="text-sm text-center">No active complaints</p>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Support</h2>
            <Headphones className="w-6 h-6 text-gray-500" />
          </div>
          <div className="h-32 flex flex-col items-center justify-center text-gray-500">
            <Headphones className="w-16 h-16 opacity-30 mb-3" />
            <p className="text-sm text-center">Customer Support Center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;