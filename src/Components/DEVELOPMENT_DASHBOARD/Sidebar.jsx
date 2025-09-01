import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BarChart3,
  Settings,
  Users,
  AlertTriangle,
  X,
  FileText,
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { path: '/development/dashboard', icon: <BarChart3 className="w-5 h-5" />, label: 'Dashboard' },
    { path: '/development/projects', icon: <FileText className="w-5 h-5" />, label: 'Projects' },
    { path: '/development/engineers', icon: <Users className="w-5 h-5" />, label: 'Engineers' },
    { path: '/development/challenges', icon: <AlertTriangle className="w-5 h-5" />, label: 'Challenges' },
    { path: '/development/settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-red-600">Workflow</h2>
        <button onClick={toggleSidebar} className="lg:hidden">
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-red-100 text-red-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
            onClick={() => isOpen && toggleSidebar()}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;