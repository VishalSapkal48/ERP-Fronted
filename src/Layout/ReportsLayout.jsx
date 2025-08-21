import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/DEVELOPMENT_DASHBOARD/NavBar";
import Sidebar from "../Components/DEVELOPMENT_DASHBOARD/Sidebar";
import DevelopmentRoutes from "../Routes/DevlopmentRoutes";

const DevelopmentLayout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [notificationCount] = useState(3); // Example static count; can be dynamic later

  const handleLogoutClick = () => {
    try {
      console.log("DevelopmentLayout: Initiating logout");

      // Clear storage
      localStorage.removeItem("authToken");
      sessionStorage.clear();

      if (onLogout) {
        console.log("DevelopmentLayout: Calling onLogout from App.js");
        onLogout();
      }

      // Navigate to login
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Sidebar navigation items
  const navigationItems = [
    { id: "dashboard", label: "Workflow Dashboard", icon: <i className="fas fa-chart-bar"></i>, count: 2 },
    { id: "projects", label: "All Projects", icon: <i className="fas fa-building"></i>, count: 2 },
    { id: "engineers", label: "Engineers", icon: <i className="fas fa-users"></i>, count: 3 },
    { id: "challenges", label: "Active Challenges", icon: <i className="fas fa-exclamation-triangle"></i>, count: 0 },
    { id: "reports", label: "Reports", icon: <i className="fas fa-file-alt"></i> },
    { id: "settings", label: "Settings", icon: <i className="fas fa-cog"></i> },
  ];

  return (
    <div className="h-screen w-full flex bg-gray-100 overflow-hidden">
      {/* Sidebar - fixed and full height */}
      <div className="w-64 flex-shrink-0 bg-gray-800 text-white">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeView={activeView}
          setActiveView={setActiveView}
          navigationItems={navigationItems}
        />
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col h-full">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-blue-600 text-white shadow p-4 flex justify-between items-center">
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            activeView={navigationItems.find(item => item.id === activeView)}
            notificationCount={notificationCount}
            onLogout={handleLogoutClick}
          />
        </header>

        {/* Scrollable Content ONLY */}
        <main className="flex-1 overflow-y-auto p-6">
          <DevelopmentRoutes />
        </main>
      </div>
    </div>
  );
};

export default DevelopmentLayout;
