import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, FileText, LogOut } from "lucide-react";

function SideBar({ closeSidebar, onLogout }) {
  const menuItemClass = ({ isActive }) =>
    `flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-blue-600 text-white border-l-4 border-blue-300"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div className="h-full bg-gray-800 text-white">
      <div className="p-4 border-b border-gray-700">
        <div className="border-b border-gray-700 rounded-t-lg bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg p-4">
          <img
            src="/Images/BoardWorksListForm/logo.png"
            alt="Logo"
            className="w-10 h-10 mb-2 transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/40";
            }}
          />
          <h2 className="text-xl font-bold text-blue-300">YNK Purchase</h2>
        </div>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-80px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/purchase"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Dashboard"
            >
              <LayoutDashboard className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/purchase/suppliers"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Suppliers"
            >
              <Users className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Suppliers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/purchase/purchase-orders"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Purchase Orders"
            >
              <FileText className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Purchase Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/purchase/quotations"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Quotations"
            >
              <FileText className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Quotations</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/purchase/invoices"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Invoices"
            >
              <FileText className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Invoices</span>
            </NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default SideBar;