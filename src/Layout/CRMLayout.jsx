import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CrmRoutes from "../Routes/CrmRoutes";

const CRMLayout = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    try {
      // Clear all authentication-related storage
      localStorage.removeItem("authToken");
      sessionStorage.clear();
      
      // Call onLogout to reset role and username in App.js
      if (onLogout) {
        onLogout();
      }

      // Navigate to login page
      navigate("/", { replace: true });

      // Close sidebar on mobile
      if (isSidebarOpen) {
        toggleSidebar();
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuItems = [
    { path: "/crm/leads", label: "Dashboard" },
    { path: "/crm/customers", label: "Customer Management" },
    { path: "/crm/follow-ups", label: "Follow-ups" },
    { path: "/crm/reminders", label: "Reminders" },
    { path: "/crm/proposals", label: "Proposals/Quotations" },
    { path: "/crm/sales", label: "Sales Reports" },
    { path: "/crm/contracts", label: "Contracts" },
    { path: "/crm/projects", label: "Projects" },
    { path: "/crm/tasks", label: "Task Management" },
    { path: "/crm/utilities", label: "Utilities" },
    { path: "/crm/settings", label: "Settings & Permissions" },
    { path: "/crm/expenses", label: "Expenses" },
  ];

  return (
    <div className="h-screen w-full flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform z-40 transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <div className="p-4 border-b border-gray-700">
          <div className="border-b border-gray-700 rounded-t-lg bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg p-4">
            <img
              src="/Images/BoardWorksListForm/logo.png"
              alt="Logo"
              className="w-10 h-10 mb-2 transition-transform duration-300 hover:scale-110"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40";
              }}
            />
            <h2 className="text-xl font-bold text-blue-300">CRM Dashboard</h2>
          </div>
        </div>
        <nav className="h-[calc(100%-4rem)] overflow-y-auto mt-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block p-4 hover:bg-gray-700 ${
                      isActive ? "bg-gray-700 border-l-4 border-blue-300" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-4 border-t border-gray-700">
              <button
                onClick={handleLogout}
                className="block w-full text-left p-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-blue-600 text-white shadow p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">CRM System</h2>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
          >
            Logout
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <CrmRoutes />
        </main>
      </div>
    </div>
  );
};

export default CRMLayout;