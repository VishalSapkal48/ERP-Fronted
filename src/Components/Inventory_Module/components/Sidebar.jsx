import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-bold">Inventory Module</h2>
      </div>
      <nav className="mt-4">
        <NavLink
          to="/inventory"
          end
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/inventory/inventory"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Inventory
        </NavLink>
        <NavLink
          to="/inventory/stock-management"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Stock Management
        </NavLink>
        <NavLink
          to="/inventory/products"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/inventory/categories"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/inventory/customers"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Customers
        </NavLink>
        <NavLink
          to="/inventory/suppliers"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Suppliers
        </NavLink>
        <NavLink
          to="/inventory/purchases"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Purchases
        </NavLink>
        <NavLink
          to="/inventory/invoices"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Invoices
        </NavLink>
        <NavLink
          to="/inventory/pos"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          POS
        </NavLink>
        <NavLink
          to="/inventory/accounts"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Accounts
        </NavLink>
        <NavLink
          to="/inventory/vendor-linkage"
          className={({ isActive }) =>
            `block py-2 px-4 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          Vendor Linkage
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;