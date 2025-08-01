import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, DollarSign, Clock, LogOut } from 'lucide-react';

function SideBar({ closeSidebar }) {
  return (
    <div className="p-4 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="border-b border-gray-700 rounded-t-lg bg-gradient-to-r from-blue-900 to-gray-800 shadow-lg p-4 mb-4">
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="w-10 h-10 mb-2 transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/40";
          }}
        />
        <h2 className="text-xl font-bold text-blue-300">YNK Purchase</h2>
      </div>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/purchase"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <LayoutDashboard className="w-5 h-5 mr-3 text-gray-300" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase/suppliers"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <Users className="w-5 h-5 mr-3 text-gray-300" />
            Suppliers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase/purchase-orders"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <FileText className="w-5 h-5 mr-3 text-gray-300" />
            Purchase Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase/quotations"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <FileText className="w-5 h-5 mr-3 text-gray-300" />
            Quotations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase/invoices"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <FileText className="w-5 h-5 mr-3 text-gray-300" />
            Invoices
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase/quotation-manager"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <FileText className="w-5 h-5 mr-3 text-gray-300" />
            Quotation Manager
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase/multi-currency-po"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <DollarSign className="w-5 h-5 mr-3 text-gray-300" />
            Multi-Currency PO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase/amendment-history"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <Clock className="w-5 h-5 mr-3 text-gray-300" />
            Amendment History
          </NavLink>
        </li>
        <li className="pt-4 border-t border-gray-700">
          <NavLink
            to="/purchase/logout"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-red-600 hover:text-white'
              }`
            }
            onClick={closeSidebar}
          >
            <LogOut className="w-5 h-5 mr-3 text-gray-300" />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;