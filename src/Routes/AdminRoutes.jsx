import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashBoard from "../Components/Admin_Panel/AdminDashBoard";
import CrmRoutes from "../Routes/Crmroutes";
import HrmRoutes from "../Routes/HrmRoutes";
import InventoryRoutes from "../Routes/InventoryRoutes";
import PurchaseRoutes from "../Routes/PurchaseRoutes";
import ReportsRoutes from "../Routes/ReportsRoutes";
import FeedbackRoutes from "../Routes/FormsRoutes";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Default route for /admin */}
      <Route path="/" element={<AdminDashBoard />} />

      {/* CRM Module Routes */}
      <Route path="crm/*" element={<CrmRoutes />} />

      {/* HRM Module Routes */}
      <Route path="hrm/*" element={<HrmRoutes />} />

      {/* Inventory Module Routes */}
      <Route path="inventory/*" element={<InventoryRoutes />} />

      {/* Purchase Module Routes */}
      <Route path="purchase/*" element={<PurchaseRoutes />} />

      {/* Reports Module Routes */}
      <Route path="reports/*" element={<ReportsRoutes />} />

      {/* Feedback Module Routes */}
      <Route path="feedback/*" element={<FeedbackRoutes />} />

      {/* Logout Route */}
      <Route path="logout" element={<Navigate to="/" replace />} />

      {/* Catch-All for 404 */}
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