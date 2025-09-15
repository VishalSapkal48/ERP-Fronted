// import React from 'react';
// import { Bell, User, ChevronDown } from 'lucide-react';

// const Navbar = ({ activeView, notificationCount, onLogout }) => {
//   return (
//     <div className="flex items-center justify-between">
//       <div className="flex items-center space-x-4">
//         <div>
//           <h1 className="text-2xl font-bold">
//             {activeView?.label || 'Dashboard'}
//           </h1>
//           <p className="text-sm text-blue-200">Complete 18-step development workflow</p>
//         </div>
//       </div>

//       <div className="flex items-center space-x-4">
//         <button className="relative p-2 text-white hover:text-gray-200">
//           <Bell className="w-6 h-6" />
//           {notificationCount > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               {notificationCount}
//             </span>
//           )}
//         </button>

//         <div className="relative group">
//           <button className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//               <User className="w-5 h-5 text-white" />
//             </div>
//             <ChevronDown className="w-4 h-4 text-white" />
//           </button>
//           <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
//             <button
//               onClick={onLogout}
//               className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//             >
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { Menu, Bell, LogOut } from "lucide-react";

const Navbar = ({ toggleSidebar, notificationCount, onLogout }) => {
  return (
    <header className="flex items-center justify-between w-full px-3 sm:px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">
          Development Dashboard
        </h1>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="text-xs sm:text-sm text-gray-600">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="relative">
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>
        <button
          onClick={onLogout}
          className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition duration-200"
        >
          <LogOut className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline text-sm sm:text-base">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;