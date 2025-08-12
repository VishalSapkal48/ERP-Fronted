import { NavLink } from "react-router-dom";

const Sidebar = ({ closeSidebar, onLogout }) => {
  const menuItems = [
    { path: "/inventory", label: "Dashboard" },
    { path: "/inventory/stock-management", label: "Stock Management" },
    { path: "/inventory/products", label: "Products" },
    { path: "/inventory/categories", label: "Categories" },
    { path: "/inventory/customers", label: "Customers" },
    { path: "/inventory/suppliers", label: "Suppliers" },
    { path: "/inventory/purchases", label: "Purchases" },
    { path: "/inventory/invoices", label: "Invoices" },
    { path: "/inventory/pos", label: "POS" },
    { path: "/inventory/accounts", label: "Accounts" },
    { path: "/inventory/vendor-linkage", label: "Vendor Linkage" },
  ];

  return (
    <div className="h-full bg-gray-800 text-white">
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
          <h2 className="text-xl font-bold text-blue-300">Inventory Dashboard</h2>
        </div>
      </div>
      <nav className="h-[calc(100%-4rem)] overflow-y-auto mt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/inventory"}
                className={({ isActive }) =>
                  `block p-4 hover:bg-gray-700 ${
                    isActive ? "bg-gray-700 border-l-4 border-blue-300" : ""
                  }`
                }
                onClick={closeSidebar}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-4 border-t border-gray-700">
            <button
              onClick={onLogout}
              className="block w-full text-left p-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;