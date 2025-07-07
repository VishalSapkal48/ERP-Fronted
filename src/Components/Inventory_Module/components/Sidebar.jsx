import React from 'react';
import { Link } from 'react-router-dom';

// Menu items array
const menuItems = [
  { path: "/inventory", label: "Dashboard" },
  { path: "/inventory/stock-management", label: "Stock Management" },
  { path: "/inventory/price-tax", label: "Price & Tax" },
  { path: "/inventory/products", label: "Products" },
  { path: "/inventory/categories", label: "Categories" },
  { path: "/inventory/customers", label: "Customers" },
  { path: "/inventory/suppliers", label: "Suppliers" },
  { path: "/inventory/purchases", label: "Purchases" },
  { path: "/inventory/invoices", label: "Invoices" },
  { path: "/inventory/pos", label: "POS" },
  { path: "/inventory/accounts", label: "Accounts" },
  { path: "/inventory/reports", label: "Reports" },
  { path: "/inventory/settings", label: "Settings" },
  { path: "/logout", label: "Logout" },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen overflow p-4">
      <h2 className="text-2xl font-bold mb-6">Inventory</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="block p-2 hover:bg-gray-700 rounded"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
