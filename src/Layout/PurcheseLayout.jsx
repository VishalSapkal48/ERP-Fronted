import React, { useState } from 'react';
import NavBar from '../Components/Purchase_Module/NavBar';
import SideBar from '../Components/Purchase_Module/SideBar';
import PurchaseRoutes from '../Routes/PurchaseRoutes';

function PurchasesLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out z-30`}
      >
        <SideBar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavBar toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className="p-6 bg-gray-100 flex-1">
          <PurchaseRoutes />
        </div>
      </div>
    </div>
  );
}

export default PurchasesLayout;