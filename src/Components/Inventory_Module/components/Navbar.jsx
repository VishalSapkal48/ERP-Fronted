import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Example Corp ERP</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/settings" className="hover:text-gray-300">Settings</Link>
          <Link to="/reports" className="hover:text-gray-300">Reports</Link>
          <Link to="/logout" className="hover:text-gray-300">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;