import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ReportDashboard from '../Components/Reports_Module/ReportDashboard';
import SalesReport from '../Components/Reports_Module/SalesReport';
import InventoryReport from '../Components/Reports_Module/InventoryReport';
import HRReport from '../Components/Reports_Module/HRReport';
import ProjectsReport from '../Components/Reports_Module/ProjectsReport';
import VendorsReport from '../Components/Reports_Module/VendorsReport';

const ReportsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ReportDashboard />} />
      <Route path="/sales" element={<SalesReport />} />
      <Route path="/inventory" element={<InventoryReport />} />
      <Route path="/hr" element={<HRReport />} />
      <Route path="/projects" element={<ProjectsReport />} />
      <Route path="/vendors" element={<VendorsReport />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ReportsRoutes;