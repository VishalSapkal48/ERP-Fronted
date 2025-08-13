import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// Format date and time for IST (UTC+5:30)
const formatDate = (date) => {
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  });
};

const formatTime = (date) => {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
  });
};

function AdminNavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-800 text-white p-4 shadow-lg fixed w-full top-0 z-50 h-16 flex items-center">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* Left: Brand & Time */}
        <div className="flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-xl sm:text-2xl font-bold hover:text-gray-300 transition duration-150"
          >
            Admin Portal
          </Link>
          <div className="text-xs sm:text-sm leading-tight flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            <div>
              <div>{formatDate(currentTime)}</div>
              <div>{formatTime(currentTime)}</div>
            </div>
          </div>
        </div>

        {/* Right: Profile Section */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 hover:text-gray-300 transition duration-150"
          >
            <UserCircleIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="font-medium text-sm sm:text-base">Admin</span>
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
