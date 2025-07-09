import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Make sure lucide-react is installed

const Navbar = ({ toggleSidebar }) => {
  const currentDateTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
  });

  return (
    <nav className="bg-white shadow-md border-b border px-4 py-3 p-6 ml-64">
      <div className="flex items-center justify-between">
        {/* Left: Toggle and Brand */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
          <Link to="/" className="text-xl font-bold text-gray-800">
            Ynk-ERP
          </Link>
        </div>

      

        {/* Right: Date/Time and Avatar */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 hidden sm:block">
            {currentDateTime}
          </span>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            U
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
