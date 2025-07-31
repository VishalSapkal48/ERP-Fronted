import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      label: "Stock Items",
      subItems: [
        { path: "/inventory/stock-items/list", label: "List" },
        { path: "/inventory/stock-items/add", label: "Add Stock Item" },
      ],
    },
    {
      label: "Categories",
      subItems: [
        { path: "/inventory/categories/list", label: "List" },
        { path: "/inventory/categories/add", label: "Add Category" },
      ],
    },
    {
      label: "Products",
      subItems: [
        { path: "/inventory/products/list", label: "List" },
        { path: "/inventory/products/add", label: "Add Product" },
      ],
    },
    {
      label: "Suppliers",
      subItems: [
        { path: "/inventory/suppliers/list", label: "List" },
        { path: "/inventory/suppliers/add", label: "Add Supplier" },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen overflow-y-auto fixed lg:static lg:w-64 p-4 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6">Inventory</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <span className="block p-2 font-semibold">{item.label}</span>
            <ul className="ml-4 space-y-1">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    to={subItem.path}
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
