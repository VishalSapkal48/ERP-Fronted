import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashBoard from "../Components/Admin_Panel/AdminDashBoard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashBoard />} />
      <Route path="logout" element={<Navigate to="/" replace />} />
      {/* Redirect admin module paths to top-level module routes */}
      <Route path="crm/leads" element={<Navigate to="/crm/leads" replace />} />
      <Route path="crm/customers" element={<Navigate to="/crm/customers" replace />} />
      <Route path="crm/follow-ups" element={<Navigate to="/crm/follow-ups" replace />} />
      <Route path="crm/reminders" element={<Navigate to="/crm/reminders" replace />} />
      <Route path="crm/proposals" element={<Navigate to="/crm/proposals" replace />} />
      <Route path="crm/sales" element={<Navigate to="/crm/sales" replace />} />
      <Route path="crm/contracts" element={<Navigate to="/crm/contracts" replace />} />
      <Route path="crm/projects" element={<Navigate to="/crm/projects" replace />} />
      <Route path="crm/tasks" element={<Navigate to="/crm/tasks" replace />} />
      <Route path="crm/utilities" element={<Navigate to="/crm/utilities" replace />} />
      <Route path="crm/settings" element={<Navigate to="/crm/settings" replace />} />
      <Route path="crm/expenses" element={<Navigate to="/crm/expenses" replace />} />
      <Route path="hrm" element={<Navigate to="/hrm" replace />} />
      <Route path="hrm/employees/add" element={<Navigate to="/hrm/employees/add" replace />} />
      <Route path="hrm/employees" element={<Navigate to="/hrm/employees" replace />} />
      <Route path="hrm/offerletter" element={<Navigate to="/hrm/offerletter" replace />} />
      <Route path="hrm/attendance/add" element={<Navigate to="/hrm/attendance/add" replace />} />
      <Route path="hrm/attendance" element={<Navigate to="/hrm/attendance" replace />} />
      <Route path="hrm/leaves" element={<Navigate to="/hrm/leaves" replace />} />
      <Route path="hrm/payroll" element={<Navigate to="/hrm/payroll" replace />} />
      <Route path="hrm/holiday" element={<Navigate to="/hrm/holiday" replace />} />
      <Route path="purchase/suppliers" element={<Navigate to="/purchase/suppliers" replace />} />
      <Route path="purchase/supplier-form" element={<Navigate to="/purchase/supplier-form" replace />} />
      <Route path="purchase/purchase-orders" element={<Navigate to="/purchase/purchase-orders" replace />} />
      <Route path="purchase/purchase-order-form" element={<Navigate to="/purchase/purchase-order-form" replace />} />
      <Route path="purchase/quotations" element={<Navigate to="/purchase/quotations" replace />} />
      <Route path="purchase/quotation-form" element={<Navigate to="/purchase/quotation-form" replace />} />
      <Route path="purchase/invoices" element={<Navigate to="/purchase/invoices" replace />} />
      <Route path="purchase/invoice-form" element={<Navigate to="/purchase/invoice-form" replace />} />
      <Route path="purchase/quotation-manager" element={<Navigate to="/purchase/quotation-manager" replace />} />
      <Route path="purchase/multi-currency-po" element={<Navigate to="/purchase/multi-currency-po" replace />} />
      <Route path="purchase/amendment-history" element={<Navigate to="/purchase/amendment-history" replace />} />
      <Route path="inventory/inventory" element={<Navigate to="/inventory/inventory" replace />} />
      <Route path="inventory/stock-management" element={<Navigate to="/inventory/stock-management" replace />} />
      <Route path="inventory/price-tax" element={<Navigate to="/inventory/price-tax" replace />} />
      <Route path="inventory/products" element={<Navigate to="/inventory/products" replace />} />
      <Route path="inventory/categories" element={<Navigate to="/inventory/categories" replace />} />
      <Route path="inventory/customers" element={<Navigate to="/inventory/customers" replace />} />
      <Route path="inventory/suppliers" element={<Navigate to="/inventory/suppliers" replace />} />
      <Route path="inventory/purchases" element={<Navigate to="/inventory/purchases" replace />} />
      <Route path="inventory/invoices" element={<Navigate to="/inventory/invoices" replace />} />
      <Route path="inventory/pos" element={<Navigate to="/inventory/pos" replace />} />
      <Route path="inventory/accounts" element={<Navigate to="/inventory/accounts" replace />} />
      <Route path="inventory/reports" element={<Navigate to="/inventory/reports" replace />} />
      <Route path="inventory/settings" element={<Navigate to="/inventory/settings" replace />} />
      <Route path="reports" element={<Navigate to="/reports" replace />} />
      <Route path="reports/sales" element={<Navigate to="/reports/sales" replace />} />
      <Route path="reports/inventory" element={<Navigate to="/reports/inventory" replace />} />
      <Route path="reports/hr" element={<Navigate to="/reports/hr" replace />} />
      <Route path="reports/projects" element={<Navigate to="/reports/projects" replace />} />
      <Route path="reports/vendors" element={<Navigate to="/reports/vendors" replace />} />
      <Route path="feedback/nadbramhacomponents/call1folder1" element={<Navigate to="/feedback/nadbramhacomponents/call1folder1" replace />} />
      <Route path="feedback/nadbramhacomponents/call2folder2" element={<Navigate to="/feedback/nadbramhacomponents/call2folder2" replace />} />
      <Route path="feedback/nadbramhacomponents/call3folder3" element={<Navigate to="/feedback/nadbramhacomponents/call3folder3" replace />} />
      <Route path="feedback/nadbramhacomponents/call4folder4" element={<Navigate to="/feedback/nadbramhacomponents/call4folder4" replace />} />
      <Route path="feedback/nadbramhacomponents/call5folder5" element={<Navigate to="/feedback/nadbramhacomponents/call5folder5" replace />} />
      <Route path="feedback/nadbramhacomponents/call6folder6" element={<Navigate to="/feedback/nadbramhacomponents/call6folder6" replace />} />
      <Route path="feedback/yewalecomponents/call1folder1" element={<Navigate to="/feedback/yewalecomponents/call1folder1" replace />} />
      <Route path="feedback/yewalecomponents/call2folder2" element={<Navigate to="/feedback/yewalecomponents/call2folder2" replace />} />
      <Route path="feedback/yewalecomponents/call3folder3" element={<Navigate to="/feedback/yewalecomponents/call3folder3" replace />} />
      <Route path="feedback/yewalecomponents/call4folder4" element={<Navigate to="/feedback/yewalecomponents/call4folder4" replace />} />
      <Route path="feedback/yewalecomponents/call5folder5" element={<Navigate to="/feedback/yewalecomponents/call5folder5" replace />} />
      <Route path="feedback/yewalecomponents/call6folder6" element={<Navigate to="/feedback/yewalecomponents/call6folder6" replace />} />
      <Route path="feedback/yewalecomponents/call7folder7" element={<Navigate to="/feedback/yewalecomponents/call7folder7" replace />} />
      <Route path="feedback/yewalecomponents/call8folder8" element={<Navigate to="/feedback/yewalecomponents/call8folder8" replace />} />
      <Route path="feedback/yewalecomponents/call9folder9" element={<Navigate to="/feedback/yewalecomponents/call9folder9" replace />} />
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-2xl font-semibold text-red-500 bg-white p-6 rounded-lg shadow-md">
              404 - Page Not Found
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;