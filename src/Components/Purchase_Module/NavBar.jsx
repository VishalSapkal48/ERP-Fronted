import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";

const NavBar = ({ toggleSidebar, onLogout }) => {


  return (
    <nav className="w-full flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md text-white hover:bg-blue-700"
        >
          <Menu size={20} />
        </button>
        <Link to="/purchase" className="text-xl font-bold text-white">
          Purchase Management
        </Link>
      </div>
      <div className="flex items-center space-x-4">
      
        <button
          onClick={onLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
        >
          <LogOut className="w-5 h-5 inline-block mr-2" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;