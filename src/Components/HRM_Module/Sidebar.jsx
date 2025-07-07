import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);

  return (
    <div className="w-64 h-screen bg-gray-500 p-4 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-4">YNK HRM</h2>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
            }
          >
            📊 Dashboard
          </NavLink>
        </li>
        <li>
          <div
            className="flex items-center p-2 rounded cursor-pointer"
            onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
          >
            👥 Employees
            <span className="ml-auto">{isEmployeeOpen ? "▲" : "▼"}</span>
          </div>
          {isEmployeeOpen && (
            <ul className="ml-4 space-y-1">
              <li>
                <NavLink
                  to="/employees/add"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
                  }
                >
                  ➕ Add Employee
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/employees"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
                  }
                >
                  📋 Show All Employees
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
            }
          >
            📅 Attendance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/leaves"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
            }
          >
            🍃 Leaves
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payroll"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
            }
          >
            💰 Payroll
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
            }
          >
            📈 Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
            }
          >
            ⚙️ Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? "bg-gray-200" : ""}`
            }
          >
            🔒 Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;