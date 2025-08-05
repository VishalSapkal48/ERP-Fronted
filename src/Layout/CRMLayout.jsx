import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CrmRoutes from "../Routes/CrmRoutes";

const CRMLayout = ({ onLogin }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    onLogin(null);
    navigate("/");
  };

  const menuItems = [
    { path: "/crm/leads", label: "Lead Management" },
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
        className={`fixed inset-y-0 left-0 w-64 bg-blue-800 text-white transform z-40 transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <div className="p-4 border-b border-blue-700">
          <h1 className="text-2xl font-bold">CRM Dashboard</h1>
        </div>
        <nav className="h-[calc(100%-4rem)] overflow-y-auto mt-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block p-4 hover:bg-blue-700 ${
                      isActive ? "bg-blue-700" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
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
        <header className="sticky top-0 z-20 bg-white shadow p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="md:hidden text-gray-500">
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
            className="text-blue-500 hover:underline"
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
