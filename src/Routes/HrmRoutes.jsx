import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Components/HRM_Module/Dashbord";
import Attendance from "../Components/HRM_Module/Attendance";
import Employees from "../Components/HRM_Module/Employees";
import Leaves from "../Components/HRM_Module/Leaves";
import Payroll from "../Components/HRM_Module/Payroll";
import Settings from "../Components/HRM_Module/Settings";
import AddEmployee from '../Components/HRM_Module/AddEmployee';

const HrmRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="employees" element={<Employees />} />
      <Route path="employees/add" element={<AddEmployee />} />
      <Route path="leaves" element={<Leaves />} />
      <Route path="payroll" element={<Payroll />} />
      <Route path="settings" element={<Settings />} />
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

export default HrmRoutes;
