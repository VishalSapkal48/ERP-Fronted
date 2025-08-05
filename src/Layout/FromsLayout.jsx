import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Froms/pages/Sidebar.jsx';
import Navbar from '../Components/Froms/pages/Navbar.jsx';
import logo from '../../public/Images/BoardWorksListForm/logo.png';
import CurrentDateTime from '../Components/Froms/pages/CurrentDateTime.jsx';
import FromsRoutes from '../Routes/FromsRoutes.jsx'; // Adjust path if needed (e.g., './Routes/FromsRoutes.jsx')

const FromsLayout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1 flex flex-col h-screen">
        <Navbar
          logo={
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 rounded-lg shadow"
            />
          }
          title="YNK-ERP"
          dateTime={<CurrentDateTime />}
          onLogout={handleLogout}
        />
        <div className="flex-1 overflow-y-auto p-4">
          <div className="min-h-full">
            <FromsRoutes />
          </div>
          {/* Fallback UI if no content renders */}
          <div className="text-center text-gray-500 mt-4" style={{ display: 'none' }}>
            No content available for this route. Check component or routing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromsLayout;