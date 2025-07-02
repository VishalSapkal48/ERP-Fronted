import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [metrics, setMetrics] = useState({
    totalStock: 0,
    lowStockItems: 0,
    totalSales: 0,
    totalPurchases: 0
  });
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, action: 'Added new stock item: Product A', time: '10:30 AM' },
    { id: 2, action: 'Generated invoice #INV-001', time: '10:15 AM' },
    { id: 3, action: 'Updated stock level for Product B', time: '09:45 AM' }
  ]);
  const currentDateTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });

  useEffect(() => {
    setTimeout(() => {
      setMetrics({
        totalStock: 150,
        lowStockItems: 5,
        totalSales: 12000,
        totalPurchases: 8000
      });
    }, 1000);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <p className="text-center text-gray-600 mb-4">Last Updated: {currentDateTime}</p>

      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-100 rounded">
            <h3 className="text-lg">Total Stock</h3>
            <p className="text-2xl font-bold">{metrics.totalStock}</p>
          </div>
          <div className="p-4 bg-red-100 rounded">
            <h3 className="text-lg">Low Stock Items</h3>
            <p className="text-2xl font-bold">{metrics.lowStockItems}</p>
          </div>
          <div className="p-4 bg-green-100 rounded">
            <h3 className="text-lg">Total Sales</h3>
            <p className="text-2xl font-bold">${metrics.totalSales}</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded">
            <h3 className="text-lg">Total Purchases</h3>
            <p className="text-2xl font-bold">${metrics.totalPurchases}</p>
          </div>
        </div>
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/inventory" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Inventory Module
          </Link>
          <Link to="/stock-management" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Stock Management
          </Link>
          <Link to="/category-management" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Category Management
          </Link>
          <Link to="/price-tax" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Price & Tax Management
          </Link>
          <Link to="/invoices" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Invoice System
          </Link>
          <Link to="/pos" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            POS System
          </Link>
          <Link to="/products" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Product Management
          </Link>
          <Link to="/customers" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Customer Management
          </Link>
          <Link to="/categories" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Category-Based Management
          </Link>
          <Link to="/suppliers" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Supplier Management
          </Link>
          <Link to="/purchases" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Purchase Management
          </Link>
          <Link to="/accounts" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Account Management
          </Link>
          <Link to="/reports" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Reports Module
          </Link>
          <Link to="/settings" className="p-4 bg-indigo-100 rounded hover:bg-indigo-200 transition">
            Settings Module
          </Link>
        </div>
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="list-disc pl-5">
          {recentActivities.map(activity => (
            <li key={activity.id} className="mb-2">
              {activity.action} - <span className="text-gray-500">{activity.time}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;