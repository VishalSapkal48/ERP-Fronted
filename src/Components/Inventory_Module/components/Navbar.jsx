import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar, onLogout }) => {
 
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md text-white hover:bg-blue-700"
        >
          <Menu size={20} />
        </button>
        <Link to="/inventory" className="text-xl font-bold text-white">
          Inventory Management
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        
        <button
          onClick={onLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;