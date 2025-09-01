// import React from 'react';
// import { X, BarChart3, Building, Users, AlertTriangle, FileText, Settings, User, LogOut } from 'lucide-react';

// const Sidebar = ({ activeView, setActiveView, navigationItems, onLogout }) => {
//   return (
//     <div className="h-full w-64 bg-white shadow-lg">
//       <div className="flex items-center justify-between h-16 px-6 bg-blue-600 text-white">
//         <h1 className="text-xl font-bold">DEVELOPMENT DASHBOARD</h1>
//       </div>

//       <nav className="mt-6 px-4">
//         {navigationItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActiveView(item.id)}
//             className={`w-full flex items-center justify-between px-4 py-3 mb-2 text-left rounded-lg transition-colors ${
//               activeView === item.id
//                 ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
//                 : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//             }`}
//           >
//             <div className="flex items-center space-x-3">
//               {item.icon}
//               <span className="font-medium">{item.label}</span>
//             </div>
//             {item.count !== undefined && item.count > 0 && (
//               <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
//                 {item.count}
//               </span>
//             )}
//           </button>
//         ))}
//       </nav>

//       <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
//         <div className="flex items-center space-x-3 mb-3">
//           <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//             <User className="w-6 h-6 text-white" />
//           </div>
//           <div>
//             <p className="font-medium text-gray-900">Admin User</p>
//             <p className="text-sm text-gray-500">Project Manager</p>
//           </div>
//         </div>
//         <button
//           onClick={onLogout}
//           className="w-full flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
//         >
//           <LogOut className="w-4 h-4" />
//           <span>Sign Out</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
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