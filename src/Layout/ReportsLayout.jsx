import React, { useState } from 'react';
import RepoNavBar from '../Components/Reports_Module/RepoNavBar';
import RepoSidebar from '../Components/Reports_Module/RepoSidebar';
import ReportsRoutes from '../Routes/ReportsRoutes';

function ReportsLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform transition-transform duration-300 z-40
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}
      >
        <RepoSidebar />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content area */}
      <div className="flex flex-col flex-1 h-full">
        {/* Navbar */}
        <div className="sticky top-0 z-20 bg-white shadow">
          <RepoNavBar toggleSidebar={toggleSidebar} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6">
          <ReportsRoutes />
        </div>
      </div>
    </div>
  );
}

export default ReportsLayout;
