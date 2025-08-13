import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Froms/pages/Sidebar'; // Adjust path as per your project structure
import FormsRoutes from '../Routes/FormsRoutes'; // Adjust path as per your project structure

const FormsLayout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/Images/BoardWorksListForm/logo.png"
              alt="YNK ERP Logo"
              className="w-10 h-10 rounded-lg shadow"
            />
            <h2 className="ml-3 text-xl font-semibold text-gray-900">YNK ERP</h2>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <FormsRoutes />
        </div>
      </div>
    </div>
  );
};

export default FormsLayout;