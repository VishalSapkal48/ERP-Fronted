import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserGroupIcon,
  DocumentTextIcon,
  DocumentMagnifyingGlassIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserPlusIcon,
  ListBulletIcon,
  PlusIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

function AdminSideBar() {
  const [activeModule, setActiveModule] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const location = useLocation();

  const toggleModule = (module) => {
    setActiveModule(activeModule === module ? null : module);
  };

  const toggleSubMenu = (label) => {
    setOpenSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActivePath = (path) => location.pathname === path;

  const modules = {
    crm: [
      { path: '/crm/leads', label: 'Leads', icon: UserGroupIcon },
      { path: '/crm/customers', label: 'Customers', icon: UserGroupIcon },
      { path: '/crm/follow-ups', label: 'Follow-Ups', icon: ClockIcon },
      { path: '/crm/reminders', label: 'Reminders', icon: ClockIcon },
      { path: '/crm/proposals', label: 'Proposals', icon: DocumentTextIcon },
      { path: '/crm/sales', label: 'Sales Reports', icon: DocumentCheckIcon },
      { path: '/crm/contracts', label: 'Contracts', icon: DocumentTextIcon },
      { path: '/crm/projects', label: 'Projects', icon: DocumentDuplicateIcon },
      { path: '/crm/tasks', label: 'Task Management', icon: DocumentCheckIcon },
      { path: '/crm/utilities', label: 'Utilities', icon: DocumentTextIcon },
      { path: '/crm/settings', label: 'Settings', icon: DocumentTextIcon },
      { path: '/crm/expenses', label: 'Expenses', icon: CurrencyDollarIcon },
    ],
    hrm: [
      {
        label: 'Employees',
        icon: UserGroupIcon,
        subItems: [
          { path: '/hrm/employees/add', label: 'Add Employee', icon: UserPlusIcon },
          { path: '/hrm/employees', label: 'Show All Employees', icon: ListBulletIcon },
          { path: '/hrm/offerletter', label: 'Documentation', icon: DocumentTextIcon },
        ],
      },
      {
        label: 'Attendance',
        icon: CalendarIcon,
        subItems: [
          { path: '/hrm/attendance/add', label: 'Add Attendance', icon: PlusIcon },
          { path: '/hrm/attendance', label: 'View All Attendance', icon: ListBulletIcon },
        ],
      },
      { path: '/hrm/leaves', label: 'Leaves', icon: DocumentTextIcon },
      { path: '/hrm/payroll', label: 'Payroll', icon: CurrencyDollarIcon },
      { path: '/hrm/holiday', label: 'Holiday', icon: CalendarIcon },
    ],
    purchase: [
      {
        label: 'Suppliers',
        icon: UserGroupIcon,
        subItems: [
          { path: '/purchase-orders/suppliers', label: 'Suppliers List', icon: UserGroupIcon },
          { path: '/purchase-orders/supplier-form', label: 'Add Supplier', icon: UserPlusIcon },
        ],
      },
      {
        label: 'Purchase',
        icon: DocumentTextIcon,
        subItems: [
          { path: '/purchase-orders/purchase-orders', label: 'Purchase Orders List', icon: DocumentTextIcon },
          { path: '/purchase-orders/purchase-order-form', label: 'Add Purchase Order', icon: DocumentTextIcon },
        ],
      },
      {
        label: 'Quotations',
        icon: DocumentDuplicateIcon,
        subItems: [
          { path: '/purchase-orders/quotations', label: 'Quotations List', icon: DocumentDuplicateIcon },
          { path: '/purchase-orders/quotation-form', label: 'Add Quotation', icon: DocumentDuplicateIcon },
        ],
      },
      {
        label: 'Invoices',
        icon: DocumentCheckIcon,
        subItems: [
          { path: '/purchase-orders/invoices', label: 'Invoices List', icon: DocumentCheckIcon },
          { path: '/purchase-orders/invoice-form', label: 'Add Invoice', icon: DocumentCheckIcon },
        ],
      },
      { path: '/purchase-orders/quotation-manager', label: 'Quotation Management', icon: DocumentDuplicateIcon },
      { path: '/purchase-orders/multi-currency-po', label: 'Multi-Currency PO', icon: CurrencyDollarIcon },
      { path: '/purchase-orders/amendment-history', label: 'Amendment History', icon: ClockIcon },
    ],
    inventory: [
      { path: '/inventory/inventory', label: 'Inventory', icon: DocumentDuplicateIcon },
      { path: '/inventory/stock-management', label: 'Stock Management', icon: DocumentCheckIcon },
      { path: '/inventory/price-tax', label: 'Price & Tax Management', icon: CurrencyDollarIcon },
      { path: '/inventory/products', label: 'Products', icon: DocumentTextIcon },
      { path: '/inventory/categories', label: 'Categories', icon: DocumentTextIcon },
      { path: '/inventory/customers', label: 'Customers', icon: UserGroupIcon },
      { path: '/inventory/suppliers', label: 'Suppliers', icon: UserGroupIcon },
      { path: '/inventory/purchases', label: 'Purchases', icon: DocumentTextIcon },
      { path: '/inventory/invoices', label: 'Invoices', icon: DocumentCheckIcon },
      { path: '/inventory/pos', label: 'POS', icon: CurrencyDollarIcon },
      { path: '/inventory/accounts', label: 'Accounts', icon: CurrencyDollarIcon },
      { path: '/inventory/reports', label: 'Reports', icon: DocumentMagnifyingGlassIcon },
      { path: '/inventory/settings', label: 'Settings', icon: DocumentTextIcon },
    ],
    reports: [
      { path: '/reports', label: 'Report Dashboard', icon: DocumentMagnifyingGlassIcon },
      { path: '/reports/sales', label: 'Sales Report', icon: DocumentCheckIcon },
      { path: '/reports/inventory', label: 'Inventory Report', icon: DocumentDuplicateIcon },
      { path: '/reports/hr', label: 'HR Report', icon: UserGroupIcon },
      { path: '/reports/projects', label: 'Projects Report', icon: DocumentTextIcon },
      { path: '/reports/vendors', label: 'Vendors Report', icon: UserGroupIcon },
    ],
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 fixed overflow-y-auto shadow-xl z-40">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <p className="text-sm text-gray-400">Manage your modules</p>
      </div>

      {Object.entries(modules).map(([moduleKey, items]) => (
        <div key={moduleKey} className="mb-4">
          <button
            onClick={() => toggleModule(moduleKey)}
            className="flex items-center justify-between w-full p-3 font-semibold text-lg rounded-lg hover:bg-gray-700 transition-all"
          >
            <span className="uppercase">{moduleKey}</span>
            {activeModule === moduleKey ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>

          {activeModule === moduleKey && (
            <ul className="mt-2 space-y-1">
              {items.map((item) => {
                const isSubOpen = openSubMenus[item.label];
                return item.subItems ? (
                  <li key={item.label}>
                    <div
                      onClick={() => toggleSubMenu(item.label)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition-all ${
                        isSubOpen ? 'bg-blue-600' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                        {item.label}
                      </div>
                      {isSubOpen ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                    </div>
                    {isSubOpen && (
                      <ul className="ml-6 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              to={subItem.path}
                              className={`flex items-center p-2 rounded-lg group hover:bg-gray-600 transition ${
                                isActivePath(subItem.path) ? 'bg-blue-600 text-white' : ''
                              }`}
                            >
                              <subItem.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-white" />
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center p-3 rounded-lg hover:bg-gray-600 transition group ${
                        isActivePath(item.path) ? 'bg-blue-600 text-white' : ''
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}

export default AdminSideBar;
