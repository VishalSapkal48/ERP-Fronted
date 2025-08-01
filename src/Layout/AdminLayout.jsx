import React, { useState } from 'react';
import AdminNavBar from '../Components/Admin_Panel/AdminNavBar';
import AdminSideBar from '../Components/Admin_Panel/AdminSideBar';
import AdminRoutes from '../Routes/AdminRoutes';

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out z-30 shadow-2xl`}
      >
        <AdminSideBar closeSidebar={closeSidebar} />
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="flex-1 flex flex-col">
        <AdminNavBar toggleSidebar={toggleSidebar} />
        <div className="p-6 bg-gray-100 flex-1">
          <AdminRoutes />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;