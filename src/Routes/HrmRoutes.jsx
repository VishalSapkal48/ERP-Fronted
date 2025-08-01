import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Components/HRM_Module/Dashbord"; 
import Attendance from "../Components/HRM_Module/Attendance";
import Employees from "../Components/HRM_Module/Employees";
import Leaves from "../Components/HRM_Module/Leaves";
import Payroll from "../Components/HRM_Module/Payroll";
import Settings from "../Components/HRM_Module/Settings";
import AddEmployee from "../Components/HRM_Module/AddEmployee";
import EditEmployee from "../Components/HRM_Module/EditEmployee";
import AddAttendance from "../Components/HRM_module/AddAttendance";
import Holiday from "../Components/HRM_Module/Holiday";
import CustomCalendar from "../Components/HRM_Module/CustomCalendar";
import Profile from "../Components/HRM_Module/Profile";
import OfferLetter from "../Components/HRM_Module/OfferLetter";
import TravelPolicy from "../Components/HRM_Module/TravelPolicy";
import AppointmentLetter from "../Components/HRM_Module/AppointmentLetter";
import ExperienceLetter from "../Components/HRM_Module/ExperienceLetter"; // Fixed typo: ExperinceLetter -> ExperienceLetter
import SalarySlip from "../Components/HRM_Module/SalarySlip";
import OfficeRules from "../Components/HRM_Module/OfficeRules";

const HrmRoutes = () => {
  const currentDate = new Date("2025-07-08"); // Current date as per requirement
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="employees" element={<Employees />} />
      <Route path="employees/add" element={<AddEmployee />} />
      <Route path="/employee/edit/:id" element={<EditEmployee />} />
      <Route path="attendance/add" element={<AddAttendance />} />
      <Route path="holiday" element={<Holiday currentDate={currentDate} />} />
      <Route path="profile" element={<Profile />} />
      <Route
        path="calculate"
        element={<CustomCalendar currentDate={currentDate} />}
      />
      <Route path="settings" element={<Settings />} />
      <Route path="leaves" element={<Leaves />} />
      <Route path="payroll" element={<Payroll />} />
      <Route path="offerletter" element={<OfferLetter />} />
      <Route path="appointmentletter" element={<AppointmentLetter />} />
      <Route path="experienceletter" element={<ExperienceLetter />} /> {/* Fixed: Removed space */}
      <Route path="travelpolicy" element={<TravelPolicy />} />
      <Route path="officerules" element={<OfficeRules />} />
      <Route path="salaryslip" element={<SalarySlip />} />
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

