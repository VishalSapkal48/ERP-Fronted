import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ logo, title, dateTime, profile }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg sticky top-0 z-50">
      <div className="p-4 flex justify-between items-center">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              {logo}
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {title}
              </h2>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Section - DateTime and Profile */}
        <div className="flex items-center space-x-6">
          {/* DateTime Display */}
          <div className="bg-gradient-to-r from-gray-50 to-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-gray-700 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {dateTime}
            </span>
          </div>

          {/* Profile Section */}
          <div className="relative group">
            <button className="focus:outline-none transition-all duration-200 hover:scale-105">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg group-hover:shadow-xl">
                <div className="bg-white rounded-full p-1">{profile}</div>
              </div>
            </button>

            {/* Modern Dropdown Menu */}
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-md text-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-2">
                <div className="p-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        U
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">User Name</p>
                      <p className="text-xs text-gray-500">user@example.com</p>
                    </div>
                  </div>
                </div>

                <ul className="py-2">
                  <li>
                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center space-x-3 group/item"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-700">
                        Profile Settings
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/")}
                      className="w-full text-left p-3 hover:bg-red-50 rounded-lg transition-all duration-200 flex items-center space-x-3 group/item"
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-700">Logout</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Arrow pointer */}
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white/95 backdrop-blur-md border-l border-t border-gray-200/50 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>
  );
};

export default Navbar;
