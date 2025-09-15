import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/DEVELOPMENT_DASHBOARD/Navbar";
import Sidebar from "../Components/DEVELOPMENT_DASHBOARD/Sidebar";
import DevelopmentRoutes from "../Routes/DevlopmentRoutes";
import { Menu, X } from "lucide-react";

const DevelopmentLayout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("dashboard");
  const [notificationCount] = useState(3);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoutClick = () => {
    try {
      console.log("DevelopmentLayout: Initiating logout");
      localStorage.removeItem("authToken");
      sessionStorage.clear();
      onLogout?.();
      navigate("/", { replace: true });
      if (isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform z-40 transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:flex-shrink-0`}
        >
          <Sidebar
            activeView={activeView}
            setActiveView={setActiveView}
            onLogout={handleLogoutClick}
            closeSidebar={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-30 bg-blue-600 text-white shadow-sm p-3 sm:p-4 flex items-center justify-between">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Navbar
              notificationCount={notificationCount}
              onLogout={handleLogoutClick}
              toggleSidebar={toggleSidebar}
            />
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 bg-gray-100">
            <DevelopmentRoutes activeView={activeView} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentLayout;