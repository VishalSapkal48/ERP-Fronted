import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Feedback_Module/Pages/Sidebar';
import Navbar from '../Components/Feedback_Module/Pages/Navbar';
import FeedbackRoutes from '../Routes/FeedbackRouts';

const FeedbackLayout = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    try {
      localStorage.removeItem('authToken');
      sessionStorage.clear();
      onLogout(); // Call parent logout to clear role and username
      navigate('/', { replace: true });
      if (isSidebarOpen) {
        toggleSidebar();
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform z-40 transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}
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
          <FeedbackRoutes />
        </main>
      </div>
    </div>
  );
};

export default FeedbackLayout;