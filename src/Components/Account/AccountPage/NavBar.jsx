import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth data (e.g., localStorage, session)
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Account Management System</h1>
        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm flex items-center gap-2">
              <User className="w-5 h-5" />
              Welcome, User
            </span>
            <button
              onClick={handleLogout}
              className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 p-4 mt-2 rounded-b-lg">
          <div className="flex flex-col space-y-4">
            <span className="text-sm flex items-center gap-2">
              <User className="w-5 h-5" />
              Welcome, User
            </span>
            <button
              onClick={handleLogout}
              className="bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded text-sm flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;