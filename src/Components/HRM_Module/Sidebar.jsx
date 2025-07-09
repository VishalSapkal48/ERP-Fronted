import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  List,
  Calendar,
  PlusCircle,
  Leaf,
  DollarSign,
  BarChart2,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const Sidebar = () => {
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const menuItemClass = ({ isActive }) =>
    `flex items-center p-3 rounded-lg transition-colors group ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
    }`;

  const subMenuItemClass = ({ isActive }) =>
    `flex items-center p-2 rounded-lg transition-colors ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'
    }`;

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 shadow-lg ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isSidebarCollapsed && (
            <h2 className="text-xl font-bold text-blue-400">YNK HRM</h2>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            title="Toggle Sidebar"
          >
            {isSidebarCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="p-4">
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <NavLink to="/" className={menuItemClass} title="Dashboard">
              <LayoutDashboard className="w-5 h-5 min-w-5" />
              {!isSidebarCollapsed && <span className="ml-3">Dashboard</span>}
            </NavLink>
          </li>

          {/* Employees */}
          <li>
            <div
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800"
              onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
              title="Employees"
            >
              <Users className="w-5 h-5 min-w-5" />
              {!isSidebarCollapsed && (
                <>
                  <span className="ml-3">Employees</span>
                  <span className="ml-auto">
                    {isEmployeeOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </>
              )}
            </div>
            {isEmployeeOpen && !isSidebarCollapsed && (
              <ul className="ml-8 mt-1 space-y-1">
                <li>
                  <NavLink to="/employees/add" className={subMenuItemClass}>
                    <UserPlus className="w-4 h-4" />
                    <span className="ml-3">Add Employee</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/employees" className={subMenuItemClass}>
                    <List className="w-4 h-4" />
                    <span className="ml-3">Show All Employees</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Attendance */}
          <li>
            <div
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800"
              onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
              title="Attendance"
            >
              <Calendar className="w-5 h-5 min-w-5" />
              {!isSidebarCollapsed && (
                <>
                  <span className="ml-3">Attendance</span>
                  <span className="ml-auto">
                    {isAttendanceOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </>
              )}
            </div>
            {isAttendanceOpen && !isSidebarCollapsed && (
              <ul className="ml-8 mt-1 space-y-1">
                <li>
                  <NavLink to="/attendance/add" className={subMenuItemClass}>
                    <PlusCircle className="w-4 h-4" />
                    <span className="ml-3">Add Attendance</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/attendance" className={subMenuItemClass}>
                    <List className="w-4 h-4" />
                    <span className="ml-3">View All Attendance</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Static Menu Items */}
          {/* <li>
            <NavLink to="/leaves" className={menuItemClass} title="Leaves">
              <Leaf className="w-5 h-5" />
              {!isSidebarCollapsed && <span className="ml-3">Leaves</span>}
            </NavLink>
          </li> */}

          <li>
            <NavLink to="/payroll" className={menuItemClass} title="Payroll">
              <DollarSign className="w-5 h-5" />
              {!isSidebarCollapsed && <span className="ml-3">Payroll</span>}
            </NavLink>
          </li>

          {/* <li>
            <NavLink to="/projects" className={menuItemClass} title="Projects">
              <BarChart2 className="w-5 h-5" />
              {!isSidebarCollapsed && <span className="ml-3">Projects</span>}
            </NavLink>
          </li> */}

          {/* <li>
            <NavLink to="/reports" className={menuItemClass} title="Reports">
              <FileText className="w-5 h-5" />
              {!isSidebarCollapsed && <span className="ml-3">Reports</span>}
            </NavLink>
          </li> */}

 
     <li>
  <NavLink to="/holiday" className={menuItemClass} title="Holiday">
    <Calendar className="w-5 h-5" />
    {!isSidebarCollapsed && <span className="ml-3">Holiday</span>}
  </NavLink>
</li>


{/* 
          <li>
            <NavLink to="/settings" className={menuItemClass} title="Settings">
              <Settings className="w-5 h-5" />
              {!isSidebarCollapsed && <span className="ml-3">Settings</span>}
            </NavLink>
          </li> */}

          {/* Logout */}
          <li className="pt-4 border-t border-gray-700">
            <NavLink
              to="/logout"
              className="flex items-center p-3 rounded-lg hover:bg-red-600 text-gray-300 hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
              {!isSidebarCollapsed && <span className="ml-3">Logout</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
