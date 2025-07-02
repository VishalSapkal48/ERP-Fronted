import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Crmroutes from "../src/Routes/Crmroutes";
import { NavLink } from "react-router-dom"; // ✅ use NavLink instead of <a>
import Navbar from '../src/Components/Inventory_Module/components/Navbar';
import Sidebar from '../src/Components/Inventory_Module/components/Sidebar';
import InventoryRoutes from '../src/Routes/InventoryRoutes';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`bg-blue-800 text-white w-64 ${
            isSidebarOpen ? "block" : "hidden"
          } md:block transition-transform duration-300`}
        >
          <div className="p-4">
            <h1 className="text-2xl font-bold">CRM Dashboard</h1>
          </div>
          <nav className="mt-4">
            <ul>
              {[
                { path: "/", label: "Dashboard" },
                { path: "/leads", label: "Lead Management" },
                { path: "/customers", label: "Customer Management" },
                { path: "/follow-ups", label: "Follow-ups" },
                { path: "/reminders", label: "Reminders" },
                { path: "/proposals", label: "Proposals/Quotations" },
                { path: "/sales", label: "Sales Reports" },
                { path: "/contracts", label: "Contracts" },
                { path: "/projects", label: "Projects" },
                { path: "/tasks", label: "Task Management" },
                { path: "/utilities", label: "Utilities" },
                { path: "/settings", label: "Settings & Permissions" },
                { path: "/expenses", label: "Expenses" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="block p-4 hover:bg-blue-700"
                    onClick={toggleSidebar}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <button onClick={toggleSidebar} className="md:hidden text-gray-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h2 className="text-xl font-semibold">CRM System</h2>
            <div>Profile</div>
          </header>

          <main className="flex-1 p-6 overflow-y-auto">
            <Crmroutes />
          </main>
        </div>

  <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="container mx-auto p-4">
            <InventoryRoutes />
          </div>
        </div>
      </div>



      </div>




      
    </Router>
  );
}

export default App;
