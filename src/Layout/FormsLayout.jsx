import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Froms/pages/Sidebar';
import Navbar from '../Components/Froms/pages/Navbar';
import CurrentDateTime from '../Components/Froms/pages/CurrentDateTime';
import FormsRoutes from '../Routes/FormsRoutes';

const FormsLayout = ({ onLogout }) => {
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
          logo={<img src="/Images/BoardWorksListForm/logo.png" alt="Logo" className="w-10 h-10 rounded-lg shadow" />}
          title="YNK-ERP"
          dateTime={<CurrentDateTime />}
          onLogout={handleLogout}
        />
        <div className="flex-1 overflow-y-auto p-4">
          <FormsRoutes />
        </div>
      </div>
    </div>
  );
};

export default FormsLayout;