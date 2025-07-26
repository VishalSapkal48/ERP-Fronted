import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

function AdminNavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Update time every second


  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    // Clear auth token or session logic here if any
    navigate('/login');
  };


  return (
    <nav className="bg-blue-800 text-white p-4 shadow-lg fixed w-[83%] top-0 left-64 z-50">
      <div className="flex justify-between items-center">
        {/* Left: Brand & Time */}
        <div className="flex items-center space-x-6">
          <Link to="/dashboard" className="text-2xl font-bold hover:text-gray-300">
            Admin Portal
          </Link>
          {/* <div className="text-sm leading-tight">
            <div>{formatDate(currentTime)}</div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>{formatTime(currentTime)}</span>
            </div>
          </div> */}
        </div>

        {/* Right: Profile Section */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 hover:text-gray-300 transition duration-150"
          >
            <UserCircleIcon className="w-8 h-8" />
            <span className="font-medium">Admin</span>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-md z-50">
              <ul className="py-1">
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
