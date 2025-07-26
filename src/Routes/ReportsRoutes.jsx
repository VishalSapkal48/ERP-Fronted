import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components from Reports_Module
import SalesReport from '../Components/Reports_Module/SalesReport';
import InventoryReport from '../Components/Reports_Module/InventoryReport';
import HRReport from '../Components/Reports_Module/HRReport';
import ProjectsReport from '../Components/Reports_Module/ProjectsReport';
import VendorsReport from '../Components/Reports_Module/VendorsReport';
import ReportDashboard from '../Components/Reports_Module/ReportDashboard';

function ReportsRoutes() {
  // Current date in YYYY-MM-DD format (e.g., 2025-07-26)


  return (
    <Routes>
      <Route path="/reports" element={<ReportDashboard />} />
      <Route path="/reports/sales" element={<SalesReport />} />
      <Route path="/reports/inventory" element={<InventoryReport />} />
      <Route path="/reports/hr" element={<HRReport />} />
      <Route path="/reports/projects" element={<ProjectsReport />} />
      <Route path="/reports/vendors" element={<VendorsReport />} />
   
    </Routes>
  );
}

export default ReportsRoutes;