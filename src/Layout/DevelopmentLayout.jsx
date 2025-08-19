import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/DEVELOPMENT_DASHBOARD/NavBar';
import Sidebar from '../Components/DEVELOPMENT_DASHBOARD/Sidebar';
import DevelopmentRoutes from '../Routes/DevlopmentRoutes';

const DevelopmentLayout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [notificationCount] = useState(3); // Example static value; can be dynamic

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  // Example navigation items for Sidebar
  const navigationItems = [
    { id: 'dashboard', label: 'Workflow Dashboard', icon: <i className="fas fa-chart-bar"></i>, count: 2 },
    { id: 'projects', label: 'All Projects', icon: <i className="fas fa-building"></i>, count: 2 },
    { id: 'engineers', label: 'Engineers', icon: <i className="fas fa-users"></i>, count: 3 },
    { id: 'challenges', label: 'Active Challenges', icon: <i className="fas fa-exclamation-triangle"></i>, count: 0 },
    { id: 'reports', label: 'Reports', icon: <i className="fas fa-file-alt"></i> },
    { id: 'settings', label: 'Settings', icon: <i className="fas fa-cog"></i> },
  ];

  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeView={activeView}
        setActiveView={setActiveView}
        navigationItems={navigationItems}
      />
      <div className="flex-1 flex flex-col">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeView={navigationItems.find(item => item.id === activeView)}
          notificationCount={notificationCount}
          onLogout={handleLogoutClick}
        />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
          <DevelopmentRoutes />
        </main>
      </div>
    </div>
  );
};

export default DevelopmentLayout;