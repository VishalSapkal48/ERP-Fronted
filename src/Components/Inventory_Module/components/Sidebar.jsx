import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-full p-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-2">
        <li><Link to="/" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
        <li><Link to="/inventory" className="block p-2 hover:bg-gray-700 rounded">Inventory</Link></li>
        <li><Link to="/stock-management" className="block p-2 hover:bg-gray-700 rounded">Stock Management</Link></li>
      
        <li><Link to="/price-tax" className="block p-2 hover:bg-gray-700 rounded">Price & Tax</Link></li>
        <li><Link to="/invoices" className="block p-2 hover:bg-gray-700 rounded">Invoices</Link></li>
        <li><Link to="/pos" className="block p-2 hover:bg-gray-700 rounded">POS</Link></li>
        <li><Link to="/products" className="block p-2 hover:bg-gray-700 rounded">Products</Link></li>
        <li><Link to="/customers" className="block p-2 hover:bg-gray-700 rounded">Customers</Link></li>
        <li><Link to="/categories" className="block p-2 hover:bg-gray-700 rounded">Category-Based</Link></li>
        <li><Link to="/suppliers" className="block p-2 hover:bg-gray-700 rounded">Suppliers</Link></li>
        <li><Link to="/purchases" className="block p-2 hover:bg-gray-700 rounded">Purchases</Link></li>
        <li><Link to="/accounts" className="block p-2 hover:bg-gray-700 rounded">Accounts</Link></li>
        <li><Link to="/reports" className="block p-2 hover:bg-gray-700 rounded">Reports</Link></li>
        <li><Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;