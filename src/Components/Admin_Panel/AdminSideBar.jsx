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
} from '@heroicons/react/24/outline';

function AdminSideBar() {
  const [activeModule, setActiveModule] = useState(null);
  const location = useLocation(); // For highlighting active route

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
      { path: '/hrm/attendance', label: 'Attendance', icon: ClockIcon },
      { path: '/hrm/employees', label: 'Employees', icon: UserGroupIcon },
      { path: '/hrm/leaves', label: 'Leaves', icon: DocumentTextIcon },
      { path: '/hrm/payroll', label: 'Payroll', icon: CurrencyDollarIcon },
      { path: '/hrm/settings', label: 'Settings', icon: DocumentTextIcon },
      { path: '/hrm/employees/add', label: 'Add Employee', icon: UserGroupIcon },
      { path: '/hrm/employee/edit/:id', label: 'Edit Employee', icon: UserGroupIcon },
      { path: '/hrm/attendance/add', label: 'Add Attendance', icon: ClockIcon },
      { path: '/hrm/holiday', label: 'Holiday', icon: DocumentTextIcon },
      { path: '/hrm/profile', label: 'Profile', icon: UserGroupIcon },
      { path: '/hrm/calculate', label: 'Custom Calendar', icon: ClockIcon },
      { path: '/hrm/offerletter', label: 'Offer Letter', icon: DocumentTextIcon },
      { path: '/hrm/appointmentletter', label: 'Appointment Letter', icon: DocumentTextIcon },
      { path: '/hrm/experienceletter', label: 'Experience Letter', icon: DocumentTextIcon },
      { path: '/hrm/travelpolicy', label: 'Travel Policy', icon: DocumentTextIcon },
      { path: '/hrm/officerules', label: 'Office Rules', icon: DocumentTextIcon },
      { path: '/hrm/salaryslip', label: 'Salary Slip', icon: CurrencyDollarIcon },
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
      { path: '/purchase-orders/SupplierForm', label: 'Add Supplier', icon: UserGroupIcon },
      { path: '/purchase-orders/SupplierDetails', label: 'Supplier Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/PurchaseOrderList', label: 'Purchase Orders', icon: DocumentTextIcon },
      { path: '/purchase-orders/PurchaseOrderForm', label: 'Add Purchase Order', icon: DocumentTextIcon },
      { path: '/purchase-orders/PurchaseOrderDetails', label: 'Purchase Order Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/QuotationList', label: 'Quotations', icon: DocumentDuplicateIcon },
      { path: '/purchase-orders/QuotationForm', label: 'Add Quotation', icon: DocumentDuplicateIcon },
      { path: '/purchase-orders/QuotationDetails', label: 'Quotation Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/InvoiceList', label: 'Invoices', icon: DocumentCheckIcon },
      { path: '/purchase-orders/InvoiceForm', label: 'Add Invoice', icon: DocumentCheckIcon },
      { path: '/purchase-orders/InvoiceDetails', label: 'Invoice Details', icon: DocumentMagnifyingGlassIcon },
      { path: '/purchase-orders/QuotationManager', label: 'Quotation Management', icon: DocumentDuplicateIcon },
      { path: '/purchase-orders/MultiCurrencyPOGenerator', label: 'Multi-Currency PO', icon: CurrencyDollarIcon },
      { path: '/purchase-orders/AmendmentHistory', label: 'Amendment History', icon: ClockIcon },
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
      {/* Sidebar Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-wide">Admin Dashboard</h2>
        <p className="text-sm text-gray-400">Manage your modules</p>
      </div>

      {/* Module Sections */}
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
              {modules[module].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-200 group ${
                      location.pathname === item.path ? 'bg-blue-600 text-white' : ''
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                    <span>{item.label}</span>
                  </Link>
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