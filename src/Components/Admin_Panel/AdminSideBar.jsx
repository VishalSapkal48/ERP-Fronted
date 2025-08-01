// // src/components/AdminSideBar.js
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   ChevronDownIcon,
//   ChevronUpIcon,
//   UserGroupIcon,
//   DocumentTextIcon,
//   DocumentMagnifyingGlassIcon,
//   DocumentCheckIcon,
//   DocumentDuplicateIcon,
//   CurrencyDollarIcon,
//   ClockIcon,
//   UserPlusIcon,
//   ListBulletIcon,
//   PlusIcon,
//   CalendarIcon,
//   Bars3Icon,
// } from '@heroicons/react/24/outline';

// function AdminSideBar() {
//   const [activeModule, setActiveModule] = useState(null);
//   const [openSubMenus, setOpenSubMenus] = useState({});
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle
//   const location = useLocation();

//   // Load submenu state from localStorage
//   useEffect(() => {
//     const savedSubMenus = localStorage.getItem('openSubMenus');
//     if (savedSubMenus) {
//       setOpenSubMenus(JSON.parse(savedSubMenus));
//     }
//   }, []);

//   // Save submenu state to localStorage
//   useEffect(() => {
//     localStorage.setItem('openSubMenus', JSON.stringify(openSubMenus));
//   }, [openSubMenus]);

//   const toggleModule = useCallback((module) => {
//     setActiveModule((prev) => (prev === module ? null : module));
//   }, []);

//   const toggleSubMenu = useCallback((label) => {
//     setOpenSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));
//   }, []);

//   const isActivePath = useCallback(
//     (path) => location.pathname === path || location.pathname.startsWith(path + '/'),
//     [location.pathname]
//   );

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   const modules = {
//     crm: [
//       { path: '/crm/leads', label: 'Leads', icon: UserGroupIcon },
//       { path: '/crm/customers', label: 'Customers', icon: UserGroupIcon },
//       { path: '/crm/follow-ups', label: 'Follow-Ups', icon: ClockIcon },
//       { path: '/crm/reminders', label: 'Reminders', icon: ClockIcon },
//       { path: '/crm/proposals', label: 'Proposals', icon: DocumentTextIcon },
//       { path: '/crm/sales', label: 'Sales Reports', icon: DocumentCheckIcon },
//       { path: '/crm/contracts', label: 'Contracts', icon: DocumentTextIcon },
//       { path: '/crm/projects', label: 'Projects', icon: DocumentDuplicateIcon },
//       { path: '/crm/tasks', label: 'Task Management', icon: DocumentCheckIcon },
//       { path: '/crm/utilities', label: 'Utilities', icon: DocumentTextIcon },
//       { path: '/crm/settings', label: 'Settings', icon: DocumentTextIcon },
//       { path: '/crm/expenses', label: 'Expenses', icon: CurrencyDollarIcon },
//     ],
//     hrm: [
//       { path: '/hrm', label: 'HRM Dashboard', icon: UserPlusIcon },
//       {
//         label: 'Employees',
//         icon: UserGroupIcon,
//         subItems: [
//           { path: '/hrm/employees/add', label: 'Add Employee', icon: UserPlusIcon },
//           { path: '/hrm/employees', label: 'Show All Employees', icon: ListBulletIcon },
//           { path: '/hrm/offerletter', label: 'Documentation', icon: DocumentTextIcon },
//         ],
//       },
//       {
//         label: 'Attendance',
//         icon: CalendarIcon,
//         subItems: [
//           { path: '/hrm/attendance/add', label: 'Add Attendance', icon: PlusIcon },
//           { path: '/hrm/attendance', label: 'View All Attendance', icon: ListBulletIcon },
//         ],
//       },
//       { path: '/hrm/leaves', label: 'Leaves', icon: DocumentTextIcon },
//       { path: '/hrm/payroll', label: 'Payroll', icon: CurrencyDollarIcon },
//       { path: '/hrm/holiday', label: 'Holiday', icon: CalendarIcon },
//     ],
//     purchase: [
//       {
//         label: 'Suppliers',
//         icon: UserGroupIcon,
//         subItems: [
//           { path: '/purchase-orders/suppliers', label: 'Suppliers List', icon: UserGroupIcon },
//           { path: '/purchase-orders/supplier-form', label: 'Add Supplier', icon: UserPlusIcon },
//         ],
//       },
//       {
//         label: 'Purchase',
//         icon: DocumentTextIcon,
//         subItems: [
//           { path: '/purchase-orders/purchase-orders', label: 'Purchase Orders List', icon: DocumentTextIcon },
//           { path: '/purchase-orders/purchase-order-form', label: 'Add Purchase Order', icon: DocumentTextIcon },
//         ],
//       },
//       {
//         label: 'Quotations',
//         icon: DocumentDuplicateIcon,
//         subItems: [
//           { path: '/purchase-orders/quotations', label: 'Quotations List', icon: DocumentDuplicateIcon },
//           { path: '/purchase-orders/quotation-form', label: 'Add Quotation', icon: DocumentDuplicateIcon },
//         ],
//       },
//       {
//         label: 'Invoices',
//         icon: DocumentCheckIcon,
//         subItems: [
//           { path: '/purchase-orders/invoices', label: 'Invoices List', icon: DocumentCheckIcon },
//           { path: '/purchase-orders/invoice-form', label: 'Add Invoice', icon: DocumentCheckIcon },
//         ],
//       },
//       { path: '/purchase-orders/quotation-manager', label: 'Quotation Management', icon: DocumentDuplicateIcon },
//       { path: '/purchase-orders/multi-currency-po', label: 'Multi-Currency PO', icon: CurrencyDollarIcon },
//       { path: '/purchase-orders/amendment-history', label: 'Amendment History', icon: ClockIcon },
//     ],
//     inventory: [
//       { path: '/inventory/inventory', label: 'Inventory', icon: DocumentDuplicateIcon },
//       { path: '/inventory/stock-management', label: 'Stock Management', icon: DocumentCheckIcon },
//       { path: '/inventory/price-tax', label: 'Price & Tax Management', icon: CurrencyDollarIcon },
//       { path: '/inventory/products', label: 'Products', icon: DocumentTextIcon },
//       { path: '/inventory/categories', label: 'Categories', icon: DocumentTextIcon },
//       { path: '/inventory/customers', label: 'Customers', icon: UserGroupIcon },
//       { path: '/inventory/suppliers', label: 'Suppliers', icon: UserGroupIcon },
//       { path: '/inventory/purchases', label: 'Purchases', icon: DocumentTextIcon },
//       { path: '/inventory/invoices', label: 'Invoices', icon: DocumentCheckIcon },
//       { path: '/inventory/pos', label: 'POS', icon: CurrencyDollarIcon },
//       { path: '/inventory/accounts', label: 'Accounts', icon: CurrencyDollarIcon },
//       { path: '/inventory/reports', label: 'Reports', icon: DocumentMagnifyingGlassIcon },
//       { path: '/inventory/settings', label: 'Settings', icon: DocumentTextIcon },
//     ],
//     reports: [
//       { path: '/reports', label: 'Report Dashboard', icon: DocumentMagnifyingGlassIcon },
//       { path: '/reports/sales', label: 'Sales Report', icon: DocumentCheckIcon },
//       { path: '/reports/inventory', label: 'Inventory Report', icon: DocumentDuplicateIcon },
//       { path: '/reports/hr', label: 'HR Report', icon: UserGroupIcon },
//       { path: '/reports/projects', label: 'Projects Report', icon: DocumentTextIcon },
//       { path: '/reports/vendors', label: 'Vendors Report', icon: UserGroupIcon },
//     ],
//   };

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md"
//         onClick={toggleSidebar}
//         aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
//       >
//         <Bars3Icon className="w-6 h-6" />
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 fixed overflow-y-auto shadow-xl z-40 transform transition-transform lg:translate-x-0 ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//           <p className="text-sm text-gray-400">Manage your modules</p>
//         </div>

//         {Object.entries(modules).map(([moduleKey, items]) => (
//           <div key={moduleKey} className="mb-4">
//             <button
//               onClick={() => toggleModule(moduleKey)}
//               className="flex items-center justify-between w-full p-3 font-semibold text-lg rounded-lg hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
//               aria-expanded={activeModule === moduleKey}
//               aria-controls={`module-${moduleKey}`}
//             >
//               <span className="uppercase">{moduleKey}</span>
//               {activeModule === moduleKey ? (
//                 <ChevronUpIcon className="w-5 h-5" />
//               ) : (
//                 <ChevronDownIcon className="w-5 h-5" />
//               )}
//             </button>

//             {activeModule === moduleKey && (
//               <ul id={`module-${moduleKey}`} className="mt-2 space-y-1">
//                 {items.map((item) => {
//                   const isSubOpen = openSubMenus[item.label];
//                   return item.subItems ? (
//                     <li key={item.label}>
//                       <div
//                         onClick={() => toggleSubMenu(item.label)}
//                         className={`flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                           isSubOpen ? 'bg-blue-600' : ''
//                         }`}
//                         tabIndex={0}
//                         onKeyDown={(e) => e.key === 'Enter' && toggleSubMenu(item.label)}
//                         aria-expanded={isSubOpen}
//                         aria-controls={`submenu-${item.label}`}
//                       >
//                         <div className="flex items-center">
//                           <item.icon className="w-5 h-5 mr-3 text-gray-400" />
//                           {item.label}
//                         </div>
//                         {isSubOpen ? (
//                           <ChevronUpIcon className="w-4 h-4" />
//                         ) : (
//                           <ChevronDownIcon className="w-4 h-4" />
//                         )}
//                       </div>
//                       {isSubOpen && (
//                         <ul id={`submenu-${item.label}`} className="ml-6 mt-1 space-y-1">
//                           {item.subItems.map((subItem) => (
//                             <li key={subItem.path}>
//                               <Link
//                                 to={subItem.path}
//                                 className={`flex items-center p-2 rounded-lg group hover:bg-gray-600 transition ${
//                                   isActivePath(subItem.path) ? 'bg-blue-600 text-white' : ''
//                                 }`}
//                                 onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile
//                               >
//                                 <subItem.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-white" />
//                                 {subItem.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   ) : (
//                     <li key={item.path}>
//                       <Link
//                         to={item.path}
//                         className={`flex items-center p-3 rounded-lg hover:bg-gray-600 transition group ${
//                           isActivePath(item.path) ? 'bg-blue-600 text-white' : ''
//                         }`}
//                         onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile
//                       >
//                         <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
//                         {item.label}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//           </div>
//         ))}
//       </aside>
//     </>
//   );
// }

// export default AdminSideBar;

import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  List,
  Calendar,
  PlusCircle,
  FileText,
  BarChart,
  Package,
  Briefcase,
  Truck,
  DollarSign,
  Clock,
  LogOut,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

function AdminSideBar({ closeSidebar }) {
  const [activeModule, setActiveModule] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    const savedSubMenus = localStorage.getItem('openSubMenus');
    if (savedSubMenus) {
      setOpenSubMenus(JSON.parse(savedSubMenus));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('openSubMenus', JSON.stringify(openSubMenus));
  }, [openSubMenus]);

  const toggleModule = useCallback((module) => {
    setActiveModule((prev) => (prev === module ? null : module));
    closeSidebar?.();
  }, [closeSidebar]);

  const toggleSubMenu = useCallback((label) => {
    setOpenSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    closeSidebar?.();
  }, [closeSidebar]);

  const isActivePath = useCallback(
    (path) => location.pathname === path || location.pathname.startsWith(path + '/'),
    [location.pathname]
  );

  const modules = {
    crm: [
      { path: '/crm/leads', label: 'Leads', icon: Users },
      { path: '/crm/customers', label: 'Customers', icon: Users },
      { path: '/crm/follow-ups', label: 'Follow-Ups', icon: Clock },
      { path: '/crm/reminders', label: 'Reminders', icon: Clock },
      { path: '/crm/proposals', label: 'Proposals', icon: FileText },
      { path: '/crm/sales', label: 'Sales Reports', icon: BarChart },
      { path: '/crm/contracts', label: 'Contracts', icon: FileText },
      { path: '/crm/projects', label: 'Projects', icon: Briefcase },
      { path: '/crm/tasks', label: 'Task Management', icon: FileText },
      { path: '/crm/utilities', label: 'Utilities', icon: FileText },
      { path: '/crm/settings', label: 'Settings', icon: FileText },
      { path: '/crm/expenses', label: 'Expenses', icon: DollarSign },
    ],
    hrm: [
      { path: '/hrm', label: 'HRM Dashboard', icon: LayoutDashboard },
      {
        label: 'Employees',
        icon: Users,
        subItems: [
          { path: '/hrm/employees/add', label: 'Add Employee', icon: UserPlus },
          { path: '/hrm/employees', label: 'Show All Employees', icon: List },
          { path: '/hrm/offerletter', label: 'Documentation', icon: FileText },
        ],
      },
      {
        label: 'Attendance',
        icon: Calendar,
        subItems: [
          { path: '/hrm/attendance/add', label: 'Add Attendance', icon: PlusCircle },
          { path: '/hrm/attendance', label: 'View All Attendance', icon: List },
        ],
      },
      { path: '/hrm/leaves', label: 'Leaves', icon: FileText },
      { path: '/hrm/payroll', label: 'Payroll', icon: DollarSign },
      { path: '/hrm/holiday', label: 'Holiday', icon: Calendar },
    ],
    purchase: [
      {
        label: 'Suppliers',
        icon: Users,
        subItems: [
          { path: '/purchase/suppliers', label: 'Suppliers List', icon: Users },
          { path: '/purchase/supplier-form', label: 'Add Supplier', icon: UserPlus },
        ],
      },
      {
        label: 'Purchase',
        icon: FileText,
        subItems: [
          { path: '/purchase/purchase-orders', label: 'Purchase Orders List', icon: FileText },
          { path: '/purchase/purchase-order-form', label: 'Add Purchase Order', icon: FileText },
        ],
      },
      {
        label: 'Quotations',
        icon: FileText,
        subItems: [
          { path: '/purchase/quotations', label: 'Quotations List', icon: FileText },
          { path: '/purchase/quotation-form', label: 'Add Quotation', icon: FileText },
        ],
      },
      {
        label: 'Invoices',
        icon: FileText,
        subItems: [
          { path: '/purchase/invoices', label: 'Invoices List', icon: FileText },
          { path: '/purchase/invoice-form', label: 'Add Invoice', icon: FileText },
        ],
      },
      { path: '/purchase/quotation-manager', label: 'Quotation Management', icon: FileText },
      { path: '/purchase/multi-currency-po', label: 'Multi-Currency PO', icon: DollarSign },
      { path: '/purchase/amendment-history', label: 'Amendment History', icon: Clock },
    ],
    inventory: [
      { path: '/inventory/inventory', label: 'Inventory', icon: Package },
      { path: '/inventory/stock-management', label: 'Stock Management', icon: FileText },
      { path: '/inventory/price-tax', label: 'Price & Tax Management', icon: DollarSign },
      { path: '/inventory/products', label: 'Products', icon: FileText },
      { path: '/inventory/categories', label: 'Categories', icon: FileText },
      { path: '/inventory/customers', label: 'Customers', icon: Users },
      { path: '/inventory/suppliers', label: 'Suppliers', icon: Users },
      { path: '/inventory/purchases', label: 'Purchases', icon: FileText },
      { path: '/inventory/invoices', label: 'Invoices', icon: FileText },
      { path: '/inventory/pos', label: 'POS', icon: DollarSign },
      { path: '/inventory/accounts', label: 'Accounts', icon: DollarSign },
      { path: '/inventory/reports', label: 'Reports', icon: BarChart },
      { path: '/inventory/settings', label: 'Settings', icon: FileText },
    ],
    reports: [
      { path: '/reports', label: 'Report Dashboard', icon: BarChart },
      { path: '/reports/sales', label: 'Sales Report', icon: BarChart },
      { path: '/reports/inventory', label: 'Inventory Report', icon: Package },
      { path: '/reports/hr', label: 'HR Report', icon: Users },
      { path: '/reports/projects', label: 'Projects Report', icon: Briefcase },
      { path: '/reports/vendors', label: 'Vendors Report', icon: Truck },
    ],
    feedback: [
      {
        label: 'Nadbrahma',
        icon: FileText,
        subItems: [
          { path: '/feedback/nadbramhacomponents/call1folder1', label: 'Call 1', icon: FileText },
          { path: '/feedback/nadbramhacomponents/call2folder2', label: 'Call 2', icon: FileText },
          { path: '/feedback/nadbramhacomponents/call3folder3', label: 'Call 3', icon: FileText },
          { path: '/feedback/nadbramhacomponents/call4folder4', label: 'Call 4', icon: FileText },
          { path: '/feedback/nadbramhacomponents/call5folder5', label: 'Call 5', icon: FileText },
          { path: '/feedback/nadbramhacomponents/call6folder6', label: 'Call 6', icon: FileText },
        ],
      },
      {
        label: 'Yewale',
        icon: FileText,
        subItems: [
          { path: '/feedback/yewalecomponents/call1folder1', label: 'Call 1', icon: FileText },
          { path: '/feedback/yewalecomponents/call2folder2', label: 'Call 2', icon: FileText },
          { path: '/feedback/yewalecomponents/call3folder3', label: 'Call 3', icon: FileText },
          { path: '/feedback/yewalecomponents/call4folder4', label: 'Call 4', icon: FileText },
          { path: '/feedback/yewalecomponents/call5folder5', label: 'Call 5', icon: FileText },
          { path: '/feedback/yewalecomponents/call6folder6', label: 'Call 6', icon: FileText },
          { path: '/feedback/yewalecomponents/call7folder7', label: 'Call 7', icon: FileText },
          { path: '/feedback/yewalecomponents/call8folder8', label: 'Call 8', icon: FileText },
          { path: '/feedback/yewalecomponents/call9folder9', label: 'Call 9', icon: FileText },
        ],
      },
    ],
  };

  return (
    <aside
      className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 fixed overflow-y-auto shadow-2xl z-40 transform transition-transform lg:translate-x-0"
    >
      <div className="border-b border-gray-700 rounded-t-lg bg-gradient-to-r from-blue-900 to-gray-800 shadow-lg p-4 mb-4">
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="w-10 h-10 mb-2 transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/40";
          }}
        />
        <h2 className="text-xl font-bold text-blue-300">YNK Admin</h2>
      </div>
      {Object.entries(modules).map(([moduleKey, items]) => (
        <div key={moduleKey} className="mb-4">
          <button
            onClick={() => toggleModule(moduleKey)}
            className="flex items-center justify-between w-full p-3 font-semibold text-lg rounded-lg hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={activeModule === moduleKey}
            aria-controls={`module-${moduleKey}`}
          >
            <span className="uppercase">{moduleKey}</span>
            {activeModule === moduleKey ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {activeModule === moduleKey && (
            <ul id={`module-${moduleKey}`} className="mt-2 space-y-1">
              {items.map((item) => {
                const isSubOpen = openSubMenus[item.label];
                return item.subItems ? (
                  <li key={item.label}>
                    <div
                      onClick={() => toggleSubMenu(item.label)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isSubOpen ? 'bg-blue-600' : ''
                      }`}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && toggleSubMenu(item.label)}
                      aria-expanded={isSubOpen}
                      aria-controls={`submenu-${item.label}`}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3 text-gray-300" />
                        {item.label}
                      </div>
                      {isSubOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                    {isSubOpen && (
                      <ul id={`submenu-${item.label}`} className="ml-6 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg transition-all ${
                                  isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                                }`
                              }
                              onClick={() => closeSidebar?.()}
                            >
                              <subItem.icon className="w-4 h-4 mr-3 text-gray-300" />
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg transition-all ${
                          isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                        }`
                      }
                      onClick={() => closeSidebar?.()}
                    >
                      <item.icon className="w-5 h-5 mr-3 text-gray-300" />
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
      <div className="pt-4 border-t border-gray-700">
        <NavLink
          to="/admin/logout"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-all ${
              isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-red-600 hover:text-white'
            }`
          }
          onClick={() => {
            closeSidebar?.();
            localStorage.removeItem('openSubMenus');
          }}
        >
          <LogOut className="w-5 h-5 mr-3 text-gray-300" />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}

export default AdminSideBar;