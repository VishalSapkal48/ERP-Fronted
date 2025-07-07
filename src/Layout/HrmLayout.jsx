import React from "react";
import Sidebar from "../Components/HRM_Module/Sidebar";
import Navbar from "../Components/HRM_Module/Navbar";
import HrmRoutes from "../Routes/HrmRoutes"; // Make sure path is correct

const HrmLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Routes */}
        <main className="flex-1 p-6 overflow-y-auto">
          <HrmRoutes />
        </main>
      </div>
    </div>
  );
};

export default HrmLayout;
