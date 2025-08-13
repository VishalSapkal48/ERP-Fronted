import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, BarChart, Package, Users, Briefcase, Truck, LogOut } from "lucide-react";

const RepoSidebar = ({ closeSidebar, onLogout }) => {
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
          <h2 className="text-xl font-bold text-blue-300">YNK Reports</h2>
        </div>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-80px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/reports"
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
              to="/reports/sales"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Sales Report"
            >
              <BarChart className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Sales Report</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports/inventory"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Inventory Report"
            >
              <Package className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Inventory Report</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports/hr"
              className={menuItemClass}
              onClick={closeSidebar}
              title="HR Report"
            >
              <Users className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">HR Report</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports/projects"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Projects Report"
            >
              <Briefcase className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Projects Report</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports/vendors"
              className={menuItemClass}
              onClick={closeSidebar}
              title="Vendors Report"
            >
              <Truck className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Vendors Report</span>
            </NavLink>
          </li>
       
        </ul>
      </div>
    </div>
  );
};

export default RepoSidebar;