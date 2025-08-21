import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/DEVELOPMENT_DASHBOARD/Navbar";
import Sidebar from "../Components/DEVELOPMENT_DASHBOARD/Sidebar";
import DevelopmentRoutes from "../Routes/DevlopmentRoutes";
import {
  BarChart3,
  Building,
  Users,
  AlertTriangle,
  FileText,
  Settings,
} from "lucide-react";

const DevelopmentLayout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("dashboard");
  const [notificationCount] = useState(3); // Example static count

  const handleLogoutClick = () => {
    try {
      console.log("DevelopmentLayout: Initiating logout");
      localStorage.removeItem("authToken");
      sessionStorage.clear();
      if (onLogout) {
        console.log("DevelopmentLayout: Calling onLogout from App.js");
        onLogout();
      }
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navigationItems = [
    { id: "dashboard", label: "Workflow Dashboard", icon: <BarChart3 className="w-5 h-5" />, count: 2 },
    { id: "projects", label: "All Projects", icon: <Building className="w-5 h-5" />, count: 2 },
    { id: "engineers", label: "Engineers", icon: <Users className="w-5 h-5" />, count: 3 },
    { id: "challenges", label: "Active Challenges", icon: <AlertTriangle className="w-5 h-5" />, count: 0 },
    { id: "reports", label: "Reports", icon: <FileText className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* Sidebar - always visible */}
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          navigationItems={navigationItems}
          onLogout={handleLogoutClick}
        />
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-blue-600 text-white shadow p-4">
          <Navbar
            activeView={navigationItems.find((item) => item.id === activeView)}
            notificationCount={notificationCount}
            onLogout={handleLogoutClick}
          />
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <DevelopmentRoutes activeView={activeView} />
        </main>
      </div>
    </div>
  );
};

export default DevelopmentLayout;