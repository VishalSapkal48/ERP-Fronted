import React from 'react';

function NavBar({ toggleSidebar }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md">
      <div className="text-xl font-bold">Purchase Management</div>
      <button
        className="lg:hidden p-2 rounded hover:bg-blue-700 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;