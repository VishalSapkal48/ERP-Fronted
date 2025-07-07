// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./Components/Admin_Panel/Login";
// import CRMLayout from "./Layout/CRMLayout";
// import InventoryLayout from "./Layout/InventoryLayout";
// import HrmRoutes from "./Routes/HrmRoutes";

// // const ProtectedRoute = ({ children, allowedRole, currentRole }) => {
// //   if (!currentRole || currentRole !== allowedRole) {
// //     return <Navigate to="/" replace />;
// //   }
// //   return children;
// // };

// const App = () => {
//   // const [role, setRole] = useState(() => localStorage.getItem("role") || null);

//   // useEffect(() => {
//   //   if (role) {
//   //     localStorage.setItem("role", role);
//   //   } else {
//   //     localStorage.removeItem("role");
//   //   }
//   // }, [role]);

//   return (
//     <Router>
//       {/* <Routes>
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
//       </Routes> */}

//       <HrmRoutes/>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HrmRoutes from "../src/Routes/HrmRoutes";
import HrmLayout from "./Layout/HrmLayout";

const App = () => (
  <Router>
    <HrmLayout />
  </Router>
);

export default App;