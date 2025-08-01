import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, Package, Users, Briefcase, Truck } from 'lucide-react';

const ReportDashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockDashboardData = [
    { category: 'Sales', value: 328000 },
    { category: 'Inventory', value: 1550 },
    { category: 'HR', value: 220 },
    { category: 'Projects', value: 4 },
    { category: 'Vendors', value: 180 }
  ];

  const kpiData = {
    totalRevenue: 328000,
    totalStock: 1550,
    totalHeadcount: 220,
    totalProjects: 4,
    totalVendorOrders: 180
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setDashboardData(mockDashboardData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data');
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Report Dashboard</h1>
          <p className="text-gray-600">Overview of key business metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          <Link to="/reports/sales" className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${kpiData.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-10 h-10 text-blue-500" />
            </div>
          </Link>

          <Link to="/reports/inventory" className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Stock</p>
                <p className="text-2xl font-bold text-gray-900">{kpiData.totalStock.toLocaleString()}</p>
              </div>
              <Package className="w-10 h-10 text-green-500" />
            </div>
          </Link>

          <Link to="/reports/hr" className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Headcount</p>
                <p className="text-2xl font-bold text-gray-900">{kpiData.totalHeadcount}</p>
              </div>
              <Users className="w-10 h-10 text-purple-500" />
            </div>
          </Link>

          <Link to="/reports/projects" className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{kpiData.totalProjects}</p>
              </div>
              <Briefcase className="w-10 h-10 text-orange-500" />
            </div>
          </Link>

          <Link to="/reports/vendors" className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Vendor Orders</p>
                <p className="text-2xl font-bold text-gray-900">{kpiData.totalVendorOrders}</p>
              </div>
              <Truck className="w-10 h-10 text-red-500" />
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Overview</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportDashboard;