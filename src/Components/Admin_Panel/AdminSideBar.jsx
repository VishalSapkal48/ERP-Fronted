import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
} from "@heroicons/react/24/outline";

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
    hrm: [
      {
        label: "Employees",
        icon: UserGroupIcon,
        subItems: [
          {
            path: "/hrm/employees/add",
            label: "Add Employee",
            icon: UserPlusIcon,
          },
          {
            path: "/hrm/employees",
            label: "Show All Employees",
            icon: ListBulletIcon,
          },
          {
            path: "/hrm/offerletter",
            label: "Documentation",
            icon: DocumentTextIcon,
          },
        ],
      },
      {
        label: "Attendance",
        icon: CalendarIcon,
        subItems: [
          {
            path: "/hrm/attendance/add",
            label: "Add Attendance",
            icon: PlusIcon,
          },
          {
            path: "/hrm/attendance",
            label: "View All Attendance",
            icon: ListBulletIcon,
          },
        ],
      },
      { path: "/hrm/leaves", label: "Leaves", icon: DocumentTextIcon },
      { path: "/hrm/payroll", label: "Payroll", icon: CurrencyDollarIcon },
      { path: "/hrm/holiday", label: "Holiday", icon: CalendarIcon },
    ],
    crm: [
      { path: "/crm/leads", label: "Leads", icon: UserGroupIcon },
      { path: "/crm/customers", label: "Customers", icon: UserGroupIcon },
      { path: "/crm/follow-ups", label: "Follow-Ups", icon: ClockIcon },
      { path: "/crm/reminders", label: "Reminders", icon: ClockIcon },
      { path: "/crm/proposals", label: "Proposals", icon: DocumentTextIcon },
      { path: "/crm/sales", label: "Sales Reports", icon: DocumentCheckIcon },
      { path: "/crm/contracts", label: "Contracts", icon: DocumentTextIcon },
      { path: "/crm/projects", label: "Projects", icon: DocumentDuplicateIcon },
      { path: "/crm/tasks", label: "Task Management", icon: DocumentCheckIcon },
      { path: "/crm/utilities", label: "Utilities", icon: DocumentTextIcon },
      { path: "/crm/settings", label: "Settings", icon: DocumentTextIcon },
      { path: "/crm/expenses", label: "Expenses", icon: CurrencyDollarIcon },
    ],
    purchase: [
      {
        label: "Suppliers",
        icon: UserGroupIcon,
        subItems: [
          {
            path: "/purchase-orders/suppliers",
            label: "Suppliers List",
            icon: UserGroupIcon,
          },
          {
            path: "/purchase-orders/supplier-form",
            label: "Add Supplier",
            icon: UserPlusIcon,
          },
        ],
      },
      {
        label: "Purchase",
        icon: DocumentTextIcon,
        subItems: [
          {
            path: "/purchase-orders/purchase-orders",
            label: "Purchase Orders List",
            icon: DocumentTextIcon,
          },
          {
            path: "/purchase-orders/purchase-order-form",
            label: "Add Purchase Order",
            icon: DocumentTextIcon,
          },
        ],
      },
      {
        label: "Quotations",
        icon: DocumentDuplicateIcon,
        subItems: [
          {
            path: "/purchase-orders/quotations",
            label: "Quotations List",
            icon: DocumentDuplicateIcon,
          },
          {
            path: "/purchase-orders/quotation-form",
            label: "Add Quotation",
            icon: DocumentDuplicateIcon,
          },
        ],
      },
      {
        label: "Invoices",
        icon: DocumentCheckIcon,
        subItems: [
          {
            path: "/purchase-orders/invoices",
            label: "Invoices List",
            icon: DocumentCheckIcon,
          },
          {
            path: "/purchase-orders/invoice-form",
            label: "Add Invoice",
            icon: DocumentCheckIcon,
          },
        ],
      },
      {
        path: "/purchase-orders/quotation-manager",
        label: "Quotation Management",
        icon: DocumentDuplicateIcon,
      },
      {
        path: "/purchase-orders/multi-currency-po",
        label: "Multi-Currency PO",
        icon: CurrencyDollarIcon,
      },
      {
        path: "/purchase-orders/amendment-history",
        label: "Amendment History",
        icon: ClockIcon,
      },
    ],
    inventory: [
      {
        label: "Stock Items",
        icon: DocumentDuplicateIcon,
        subItems: [
          {
            path: "/inventory/inventory",
            label: "Inventory",
            icon: DocumentDuplicateIcon,
          },
          {
            path: "/inventory/stock-management",
            label: "Stock Management",
            icon: DocumentCheckIcon,
          },
          {
            path: "/inventory",
            label: "Dashboard",
            icon: DocumentMagnifyingGlassIcon,
          },
          {
            path: "/inventory/accounts",
            label: "Accounts",
            icon: CurrencyDollarIcon,
          },
        ],
      },
      {
        label: "Categories",
        icon: DocumentTextIcon,
        subItems: [
          {
            path: "/inventory/categories",
            label: "Categories List",
            icon: DocumentTextIcon,
          },
        ],
      },
      {
        label: "Products",
        icon: DocumentTextIcon,
        subItems: [
          {
            path: "/inventory/products",
            label: "Products List",
            icon: DocumentTextIcon,
          },
          {
            path: "/inventory/invoices",
            label: "Invoices",
            icon: DocumentCheckIcon,
          },
          {
            path: "/inventory/pos",
            label: "POS",
            icon: CurrencyDollarIcon,
          },
        ],
      },
      {
        label: "Suppliers",
        icon: UserGroupIcon,
        subItems: [
          {
            path: "/inventory/suppliers",
            label: "Suppliers List",
            icon: UserGroupIcon,
          },
          {
            path: "/inventory/purchases",
            label: "Purchases",
            icon: DocumentTextIcon,
          },
          {
            path: "/inventory/vendor-linkage",
            label: "Vendor Linkage",
            icon: CurrencyDollarIcon,
          },
          {
            path: "/inventory/customers",
            label: "Customers",
            icon: UserGroupIcon,
          },
        ],
      },
    ],
    reports: [
      {
        path: "/reports",
        label: "Report Dashboard",
        icon: DocumentMagnifyingGlassIcon,
      },
      {
        path: "/reports/sales",
        label: "Sales Report",
        icon: DocumentCheckIcon,
      },
      {
        path: "/reports/inventory",
        label: "Inventory Report",
        icon: DocumentDuplicateIcon,
      },
      {
        path: "/reports/hr",
        label: "HR Report",
        icon: UserGroupIcon,
      },
      {
        path: "/reports/projects",
        label: "Projects Report",
        icon: DocumentTextIcon,
      },
      {
        path: "/reports/vendors",
        label: "Vendors Report",
        icon: UserGroupIcon,
      },
    ],
    projects: [
      {
        label: "Yewale",
        icon: DocumentTextIcon,
        subItems: [
          {
            path: "/projects/yewale/generate",
            label: "Generate",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/assign-engineer",
            label: "Assign Engineer",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/pre-survey-script",
            label: "Pre-survey Script",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/survey-inputs",
            label: "Survey Inputs for Owner",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/survey",
            label: "Survey",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/rough-layout",
            label: "Rough Layout",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/discussion-on-generate",
            label: "Discussion On (Generate)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/detail-submission-generate",
            label: "Detail Submission (Generate)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/internal-discussion",
            label: "Internal Discussion",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/layout-preparation",
            label: "Layout Preparation",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/pre-plan-explain-script",
            label: "Pre-plan Explain Script",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/vendor-list",
            label: "Vendor List",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/intimate-forms",
            label: "Intimate Forms",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/details-submission-prepare",
            label: "Details Submission (Prepare)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/plan-explanation",
            label: "Plan Explanation",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/discussion-on-prepare",
            label: "Discussion On (Prepare)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/details-submission-plan",
            label: "Details Submission (Plan)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/15-days-target",
            label: "15 Days Target",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/inspection-visit",
            label: "Inspection Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/inspectionchecklist",
            label: "Inspection Checklist",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/civil-work-noc",
            label: "Civil Work NOC",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/details-submission-agreement",
            label: "Details Submission (Agreement)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/planning-for-material",
            label: "Planning for Material",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/material-checking-visit",
            label: "Material Checking Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/details-submission-material",
            label: "Details Submission (Material)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/pending-work-follow-up",
            label: "Pending Work Follow Up",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/final-inspection-visit",
            label: "Final Inspection Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/details-submission-final",
            label: "Details Submission (Final)",
            icon: ChevronDownIcon,
          },
          { path: "/projects/yewale/noc", label: "NOC", icon: ChevronDownIcon },
          {
            path: "/projects/yewale/opening-visit",
            label: "Opening Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/opening",
            label: "Opening",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/add-to-crm",
            label: "Add to CRM",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/yewale/feedback",
            label: "Feedback",
            icon: ChevronDownIcon,
          },
          {
            path: "/online-survey-form",
            label: "Online Survey Form",
            icon: ChevronDownIcon,
          },
        ],
      },
      {
        label: "Nadbramha",
        icon: DocumentTextIcon,
        subItems: [
          {
            path: "/projects/nadbramha/generate",
            label: "Generate",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/assign-engineer",
            label: "Assign Engineer",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/pre-survey-script",
            label: "Pre-survey Script",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/survey-inputs",
            label: "Survey Inputs for Owner",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/survey",
            label: "Survey",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/rough-layout",
            label: "Rough Layout",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/discussion-on-generate",
            label: "Discussion On (Generate)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/detail-submission-generate",
            label: "Detail Submission (Generate)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/internal-discussion",
            label: "Internal Discussion",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/layout-preparation",
            label: "Layout Preparation",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/pre-plan-explain-script",
            label: "Pre-plan Explain Script",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/vendor-list",
            label: "Vendor List",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/intimate-forms",
            label: "Intimate Forms",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/details-submission-prepare",
            label: "Details Submission (Prepare)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/plan-explanation",
            label: "Plan Explanation",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/discussion-on-prepare",
            label: "Discussion On (Prepare)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/details-submission-plan",
            label: "Details Submission (Plan)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/15-days-target",
            label: "15 Days Target",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/inspection-visit",
            label: "Inspection Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/inspectionchecklist",
            label: "Inspection Checklist",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/civil-work-noc",
            label: "Civil Work NOC",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/details-submission-agreement",
            label: "Details Submission (Agreement)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/planning-for-material",
            label: "Planning for Material",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/material-checking-visit",
            label: "Material Checking Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/details-submission-material",
            label: "Details Submission (Material)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/pending-work-follow-up",
            label: "Pending Work Follow Up",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/final-inspection-visit",
            label: "Final Inspection Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/details-submission-final",
            label: "Details Submission (Final)",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/noc",
            label: "NOC",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/opening-visit",
            label: "Opening Visit",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/opening",
            label: "Opening",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/add-to-crm",
            label: "Add to CRM",
            icon: ChevronDownIcon,
          },
          {
            path: "/projects/nadbramha/feedback",
            label: "Feedback",
            icon: ChevronDownIcon,
          },
        ],
      },
    ],
    vendors: [
      {
        path: "/vendors/electrician",
        label: "Electrician",
        icon: UserGroupIcon,
      },
      { path: "/vendors/plumber", label: "Plumber", icon: UserGroupIcon },
      { path: "/vendors/tiles", label: "Tiles", icon: UserGroupIcon },
      { path: "/vendors/pop", label: "POP", icon: UserGroupIcon },
      { path: "/vendors/cctv", label: "CCTV", icon: UserGroupIcon },
      { path: "/vendors/internet", label: "Internet", icon: UserGroupIcon },
      { path: "/vendors/painter", label: "Painter", icon: UserGroupIcon },
      { path: "/vendors/gas", label: "Gas", icon: UserGroupIcon },
      { path: "/vendors/ducting", label: "Ducting", icon: UserGroupIcon },
      { path: "/vendors/awing", label: "Awing", icon: UserGroupIcon },
      { path: "/vendors/mason", label: "Mason", icon: UserGroupIcon },
      { path: "/vendors/board", label: "Board", icon: UserGroupIcon },
      { path: "/vendors/fabricator", label: "Fabricator", icon: UserGroupIcon },
    ],
    sales: [
      { path: "/sales/noc", label: "NOC", icon: ChevronDownIcon },
      {
        path: "/sales/generate-lead",
        label: "Generate Lead",
        icon: ChevronDownIcon,
      },
      {
        path: "/sales/assign-engineer",
        label: "Assign Engineer",
        icon: ChevronDownIcon,
      },
      { path: "/sales/pre-survey", label: "Pre-Survey", icon: ChevronDownIcon },
      {
        path: "/sales/survey-inputs",
        label: "Survey Inputs",
        icon: ChevronDownIcon,
      },
      {
        path: "/sales/rough-layout",
        label: "Rough Layout",
        icon: ChevronDownIcon,
      },
      { path: "/sales/discussion", label: "Discussion", icon: ChevronDownIcon },
    ],
    development: [
      {
        path: "/development/internal-discussion",
        label: "Internal Discussion",
        icon: ChevronDownIcon,
      },
    ],
    fidm: [
      {
        path: "/fidm/layout-preparation",
        label: "Layout Preparation",
        icon: ChevronDownIcon,
      },
      {
        path: "/fidm/pre-plan-explain",
        label: "Pre-Plan Explain",
        icon: ChevronDownIcon,
      },
      {
        path: "/fidm/vendor-list",
        label: "Vendor List",
        icon: ChevronDownIcon,
      },
      {
        path: "/fidm/intimate-forms",
        label: "Intimate Forms",
        icon: ChevronDownIcon,
      },
      {
        path: "/fidm/details-submission",
        label: "Details Submission",
        icon: ChevronDownIcon,
      },
    ],
    account: [
      {
        path: "/account/civil-work-noc",
        label: "Civil Work NOC",
        icon: ChevronDownIcon,
      },
      {
        path: "/account/details-submission",
        label: "Details Submission",
        icon: ChevronDownIcon,
      },
      {
        path: "/account/planning-material",
        label: "Planning Material",
        icon: ChevronDownIcon,
      },
      {
        path: "/account/pending-work",
        label: "Pending Work",
        icon: ChevronDownIcon,
      },
    ],
    store: [
      {
        path: "/store/material-order",
        label: "Material Order",
        icon: ChevronDownIcon,
      },
      {
        path: "/store/verify-material",
        label: "Verify Material",
        icon: ChevronDownIcon,
      },
      {
        path: "/store/details-submission",
        label: "Details Submission",
        icon: ChevronDownIcon,
      },
    ],
    feedback: [
      {
        path: "/feedback/pre-survey",
        label: "Pre-Survey",
        icon: ChevronDownIcon,
      },
      { path: "/feedback/plan", label: "Plan", icon: ChevronDownIcon },
      {
        path: "/feedback/inspection",
        label: "Inspection",
        icon: ChevronDownIcon,
      },
      {
        path: "/feedback/agreement",
        label: "Agreement",
        icon: ChevronDownIcon,
      },
      { path: "/feedback/opening", label: "Opening", icon: ChevronDownIcon },
      {
        path: "/feedback/after-month",
        label: "After 1 Month",
        icon: ChevronDownIcon,
      },
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
                        isSubOpen ? "bg-blue-600" : ""
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
                                isActivePath(subItem.path)
                                  ? "bg-blue-600 text-white"
                                  : ""
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
                        isActivePath(item.path) ? "bg-blue-600 text-white" : ""
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
