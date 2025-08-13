import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/HRM_Module/Sidebar";
import Navbar from "../Components/HRM_Module/Navbar";
import HrmRoutes from "../Routes/HrmRoutes";

const HrmLayout = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    try {
      console.log("HrmLayout: Initiating logout");
      // Clear all authentication-related storage
      localStorage.removeItem("authToken");
      sessionStorage.clear();
      
      // Call onLogout to reset role and username in App.js
      if (onLogout) {
        console.log("HrmLayout: Calling onLogout from App.js");
        onLogout();
      }

      // Navigate to login page
      console.log("HrmLayout: Navigating to /");
      navigate("/", { replace: true });

      // Close sidebar on mobile
      if (isSidebarOpen) {
        console.log("HrmLayout: Closing sidebar");
        toggleSidebar();
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform z-40 transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <Sidebar closeSidebar={toggleSidebar} onLogout={handleLogout} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-blue-600 text-white shadow p-4 flex justify-between items-center">
          <Navbar toggleSidebar={toggleSidebar} onLogout={handleLogout} />
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <HrmRoutes />
        </main>
      </div>
    </div>
  );
};

export default HrmLayout;