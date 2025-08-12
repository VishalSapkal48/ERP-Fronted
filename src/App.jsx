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

// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import PurchasesLayout from '../src/Layout/InventoryLayout';

// const App = () => (
//   <Router>
//     <PurchasesLayout />
//   </Router>
// );

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminSideBar from "./Components/Admin_Panel/AdminSideBar";
// import AdminNavBar from "./Components/Admin_Panel/AdminNavBar";
// import AdminDashBoard from "./Components/Admin_Panel/AdminDashBoard";
// import CrmRoutes from "./Routes/CrmRoutes";
// import HrmRoutes from "./Routes/HrmRoutes";
// import InventoryRoutes from "./Routes/InventoryRoutes";
// import PurchaseRoutes from "./Routes/PurchaseRoutes";
// import ReportsRoutes from "./Routes/ReportsRoutes";
// import FeedbackRoutes from "./Routes/FeedbackRouts"; // Corrected import name

// const App = () => (
//   <Router>
//     <div className="flex h-screen">
//       <AdminSideBar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <AdminNavBar />
//         <div className="pt-16 flex-1 overflow-y-auto"> {/* Offset for navbar height (~64px) */}
//           <Routes>
//             <Route path="/crm/*" element={<CrmRoutes />} />
//             <Route path="/hrm/*" element={<HrmRoutes />} />
//             <Route path="/inventory/*" element={<InventoryRoutes />} />
//             <Route path="/purchase-orders/*" element={<PurchaseRoutes />} />
//             <Route path="/reports/*" element={<ReportsRoutes />} />
//             <Route path="/feedback/*" element={<FeedbackRoutes />} /> {/* Added Feedback Routes */}
//             <Route path="/" element={<AdminDashBoard />} />
//             <Route path="*" element={<div className="text-center text-red-500">404 - Page Not Found</div>} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   </Router>
// );

// export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from '../src/Components/Admin_Panel/Login';
// import CRMLayout from '../src/Layout/CRMLayout';
// import InventoryLayout from '../src/Layout/InventoryLayout';
// import AdminNavBar from '../src/Components/Admin_Panel/AdminNavBar';
// import AdminSideBar from '../src/Components/Admin_Panel/AdminSideBar';
// import AdminDashBoard from '../src/Components/Admin_Panel/AdminDashBoard';
// import HrmRoutes from '../src/Layout/HrmLayout';
// import PurchaseRoutes from '../src/Routes/PurchaseRoutes';
// import ReportsRoutes from '../src/Routes/ReportsRoutes';
// import FeedbackRoutes from './Routes/FeedbackRoutes';

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const session = JSON.parse(localStorage.getItem('session'));
//   if (!session || !allowedRoles.includes(session.role)) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

// const App = () => {
//   const [auth, setAuth] = useState({ isAuthenticated: false, role: null });

//   useEffect(() => {
//     const session = JSON.parse(localStorage.getItem('session'));
//     if (session) {
//       setAuth({ isAuthenticated: true, role: session.role });
//     }
//   }, []);

//   const handleLogin = (role, username) => {
//     const session = { role, username };
//     localStorage.setItem('session', JSON.stringify(session));
//     setAuth({ isAuthenticated: true, role });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('session');
//     setAuth({ isAuthenticated: false, role: null });
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route
//           path="/crm/*"
//           element={
//             <ProtectedRoute allowedRoles={['crm']}>
//               <CRMLayout onLogout={handleLogout} />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/inventory/*"
//           element={
//             <ProtectedRoute allowedRoles={['inventory']}>
//               <InventoryLayout onLogout={handleLogout} />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/*"
//           element={
//             <ProtectedRoute allowedRoles={['admin']}>
//               <div className="flex h-screen">
//                 <AdminSideBar />
//                 <div className="flex-1 flex flex-col overflow-hidden">
//                   <AdminNavBar onLogout={handleLogout} />
//                   <div className="pt-16 flex-1 overflow-y-auto">
//                     <Routes>
//                       <Route path="/hrm/*" element={<HrmRoutes />} />
//                       <Route path="/purchase-orders/*" element={<PurchaseRoutes />} />
//                       <Route path="/reports/*" element={<ReportsRoutes />} />
//                       <Route path="/feedback/*" element={<FeedbackRoutes />} />
//                       <Route path="/" element={<AdminDashBoard />} />
//                       <Route path="*" element={<div className="text-center text-red-500">404 - Page Not Found</div>} />
//                     </Routes>
//                   </div>
//                 </div>
//               </div>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// src/App.js


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Login/Login';
// import CRMLayout from './Layout/CRMLayout';
// import InventoryLayout from './Layout/InventoryLayout';
// import HrmLayout from './Layout/HrmLayout';
// import ReportsLayout from './Layout/ReportsLayout';
// import AdminLayout from './Layout/AdminLayout';
// import PurchasesLayout from './Layout/PurcheseLayout';
// import FormsLayout from './Layout/FormsLayout';

// const App = () => {
//   const [role, setRole] = useState(null);
//   const [username, setUsername] = useState(null);

//   const handleLogin = (role, username) => {
//     console.log('Login:', { role, username });
//     setRole(role);
//     setUsername(username);
//   };

//   const handleLogout = () => {
//     setRole(null);
//     setUsername(null);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={role ? <Navigate to={`/${role}`} replace /> : <Login onLogin={handleLogin} />}
//         />
//         <Route
//           path="/crm/*"
//           element={role === 'crm' ? <CRMLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/inventory/*"
//           element={role === 'inventory' ? <InventoryLayout /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/hrm/*"
//           element={role === 'hrm' ? <HrmLayout /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/reports/*"
//           element={role === 'reports' ? <ReportsLayout /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/admin/*"
//           element={role === 'admin' ? <AdminLayout /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/purchase/*"
//           element={role === 'purchase' ? <PurchasesLayout /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/forms/*"
//           element={role === 'forms' ? <FormsLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="*"
//           element={
//             <div className="flex items-center justify-center h-screen bg-gray-100">
//               <div className="text-center text-2xl font-semibold text-red-500 bg-white p-6 rounded-lg shadow-md">
//                 404 - Page Not Found
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import AccountLayout from './Layout/AccountLayout';
import CRMLayout from './Layout/CRMLayout';
import InventoryLayout from './Layout/InventoryLayout';
import HrmLayout from './Layout/HrmLayout';
import ReportsLayout from './Layout/ReportsLayout';
import AdminLayout from './Layout/AdminLayout';
import PurchaseLayout from './Layout/PurcheseLayout';
import FormsLayout from './Layout/FormsLayout';

const App = () => {
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState(null);

  const handleLogin = (role, username) => {
    console.log('Login:', { role, username });
    setRole(role);
    setUsername(username);
    // Store in localStorage for persistence
    localStorage.setItem('role', role);
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setRole(null);
    setUsername(null);
    // Clear all authentication-related storage
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    sessionStorage.clear();
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={role ? <Navigate to={`/${role}`} replace /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/account/*"
          element={role === 'account' ? <AccountLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/crm/*"
          element={role === 'crm' ? <CRMLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/inventory/*"
          element={role === 'inventory' ? <InventoryLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/hrm/*"
          element={role === 'hrm' ? <HrmLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/reports/*"
          element={role === 'reports' ? <ReportsLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/admin/*"
          element={role === 'admin' ? <AdminLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/purchase/*"
          element={role === 'purchase' ? <PurchaseLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/forms/*"
          element={role === 'forms' ? <FormsLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="text-center text-2xl font-semibold text-red-500 bg-white p-6 rounded-lg shadow-md">
                404 - Page Not Found
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;