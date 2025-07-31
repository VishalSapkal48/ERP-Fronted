// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./Components/Admin_Panel/Login";
// import CRMLayout from "./Layout/CRMLayout";
// import InventoryLayout from "./Layout/InventoryLayout";
// import HrmRoutes from "./Routes/HrmRoutes";

// const ProtectedRoute = ({ children, allowedRole, currentRole }) => {
//   if (!currentRole || currentRole !== allowedRole) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

// const App = () => {
//   const [role, setRole] = useState(() => localStorage.getItem("role") || null);

//   useEffect(() => {
//     if (role) {
//       localStorage.setItem("role", role);
//     } else {
//       localStorage.removeItem("role");
//     }
//   }, [role]);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<Login onLogin={setRole} />}
//         />
//         <Route
//           path="/crm/*"
//           element={
//             <ProtectedRoute allowedRole="crm" currentRole={role}>
//               <CRMLayout />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/inventory/*"
//           element={
//             <ProtectedRoute allowedRole="inventory" currentRole={role}>
//               <InventoryLayout />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <HrmRoutes/>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import HrmRoutes from "../src/Routes/HrmRoutes";
// import HrmLayout from "./Layout/HrmLayout";

// const App = () => (
//   <Router>
//     <HrmLayout  />
//   </Router>
// );

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSideBar from "./Components/Admin_Panel/AdminSideBar";
import AdminNavBar from "./Components/Admin_Panel/AdminNavBar";
import AdminDashBoard from "./Components/Admin_Panel/AdminDashBoard";
import CrmRoutes from "./Routes/CrmRoutes";
import HrmRoutes from "./Routes/HrmRoutes";
import InventoryRoutes from "./Routes/InventoryRoutes";
import PurchaseRoutes from "./Routes/PurchaseRoutes";
import ReportsRoutes from "./Routes/ReportsRoutes";
import FeedbackRoutes from "./Routes/FeedbackRouts"; // Corrected import name

const App = () => (
  <Router>
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavBar />
        <div className="pt-16 flex-1 overflow-y-auto"> {/* Offset for navbar height (~64px) */}
          <Routes>
            <Route path="/crm/*" element={<CrmRoutes />} />
            <Route path="/hrm/*" element={<HrmRoutes />} />
            <Route path="/inventory/*" element={<InventoryRoutes />} />
            <Route path="/purchase-orders/*" element={<PurchaseRoutes />} />
            <Route path="/reports/*" element={<ReportsRoutes />} />
            <Route path="/feedback/*" element={<FeedbackRoutes />} /> {/* Added Feedback Routes */}
            <Route path="/" element={<AdminDashBoard />} />
            <Route path="*" element={<div className="text-center text-red-500">404 - Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;