import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CrmRoutes from "../Routes/CrmRoutes";

const CRMLayout = ({ onLogin }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    onLogin(null); // Clear role
    navigate("/"); // Redirect to login
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`bg-blue-800 text-white w-64 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">CRM Dashboard</h1>
        </div>
        <nav className="mt-4">
          <ul>
            {[
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
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="block p-4 hover:bg-blue-700"
                  activeClassName="bg-blue-700"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="md:hidden text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M袭击12h16M4 18h16" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">CRM System</h2>
          <div>
            <button
              onClick={handleLogout}
              className="text-blue-500 hover:underline"
            >
              Logout
            </button>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <CrmRoutes />
        </main>
      </div>
    </div>
  );
};

export default CRMLayout;