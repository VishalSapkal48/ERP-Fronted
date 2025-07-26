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
  HomeIcon,
} from '@heroicons/react/24/outline';

function AdminSideBar() {
  const [activeModule, setActiveModule] = useState(null);
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const location = useLocation();

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
    purchase: [
      { path: '/purchase-orders/suppliers', label: 'Suppliers', icon: UserGroupIcon },
      { path: '/purchase-orders/supplier-form', label: 'Add Supplier', icon: UserPlusIcon },
      { path: '/purchase-orders/supplier-details', label: 'Supplier Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/purchase-orders', label: 'Purchase Orders', icon: DocumentTextIcon },
      { path: '/purchase-orders/purchase-order-form', label: 'Add Purchase Order', icon: DocumentTextIcon },
      { path: '/purchase-orders/purchase-order-details', label: 'Purchase Order Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/quotations', label: 'Quotations', icon: DocumentDuplicateIcon },
      { path: '/purchase-orders/quotation-form', label: 'Add Quotation', icon: DocumentDuplicateIcon },
      { path: '/purchase-orders/quotation-details', label: 'Quotation Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/invoices', label: 'Invoices', icon: DocumentCheckIcon },
      { path: '/purchase-orders/invoice-form', label: 'Add Invoice', icon: DocumentCheckIcon },
      { path: '/purchase-orders/invoice-details', label: 'Invoice Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/quotation-manager', label: 'Quotation Management', icon: DocumentDuplicateIcon },
      { path: '/purchase-orders/multi-currency-po', label: 'Multi-Currency PO', icon: CurrencyDollarIcon },
      { path: '/purchase-orders/amendment-history', label: 'Amendment History', icon: ClockIcon },
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

  const toggleModule = (module) => {
    setActiveModule(activeModule === module ? null : module);
  };

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 fixed shadow-xl overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-wide">Admin Dashboard</h2>
        <p className="text-sm text-gray-400">Manage your modules</p>
      </div>
      {Object.keys(modules).map((module) => (
        <div key={module} className="mb-4">
          <h3
            onClick={() => toggleModule(module)}
            className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold text-lg"
          >
            <span>{module.toUpperCase()}</span>
            {activeModule === module ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </h3>
          {activeModule === module && (
            <ul className="mt-2 space-y-1 animate-slide-in">
              {modules[module].map((item, index) => (
                <li key={item.path || `${module}-${index}`}>
                  {item.subItems ? (
                    <div>
                      <div
                        onClick={() =>
                          item.label === 'Employees'
                            ? setIsEmployeeOpen(!isEmployeeOpen)
                            : setIsAttendanceOpen(!isAttendanceOpen)
                        }
                        className={`flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-600 transition-all duration-200 ${
                          (item.label === 'Employees' && isEmployeeOpen) ||
                          (item.label === 'Attendance' && isAttendanceOpen)
                            ? 'bg-blue-600'
                            : ''
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                          <span>{item.label}</span>
                        </div>
                        {(item.label === 'Employees' && isEmployeeOpen) ||
                        (item.label === 'Attendance' && isAttendanceOpen) ? (
                          <ChevronUpIcon className="w-4 h-4" />
                        ) : (
                          <ChevronDownIcon className="w-4 h-4" />
                        )}
                      </div>
                      {(item.label === 'Employees' && isEmployeeOpen) ||
                      (item.label === 'Attendance' && isAttendanceOpen) ? (
                        <ul className="ml-8 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                className={`flex items-center p-3 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-200 group ${
                                  location.pathname === subItem.path ? 'bg-blue-600 text-white' : ''
                                }`}
                              >
                                <subItem.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-white" />
                                <span>{subItem.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center p-3 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-200 group ${
                        location.pathname === item.path ? 'bg-blue-600 text-white' : ''
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminSideBar;