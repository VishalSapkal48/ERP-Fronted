// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Users,
//   UserPlus,
//   List,
//   LogOut,
//   Calendar,
//   PlusCircle,
//   Leaf,
//   DollarSign,
//   ChevronUp,
//   ChevronDown,
// } from "lucide-react";

// const Sidebar = () => {
//   const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
//   const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
//   const location = useLocation();

//   // Active submenu detection
//   const isEmployeeActive = ["/employees", "/employees/add"].includes(location.pathname);
//   const isAttendanceActive = ["/attendance", "/attendance/add"].includes(location.pathname);

//   // Menu item styling
//   const menuItemClass = ({ isActive }) =>
//     `flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out ${
//       isActive ? "bg-blue-600 text-white border-l-4 border-blue-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
//     }`;

//   const subMenuItemClass = ({ isActive }) =>
//     `flex items-center p-2 pl-10 rounded-lg transition-all duration-300 ease-in-out ${
//       isActive ? "bg-blue-600 text-white border-l-4 border-blue-300" : "text-gray-400 hover:bg-gray-700 hover:text-white"
//     }`;

//   const toggleClass = (isOpen, isActive) =>
//     `flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
//       isActive ? "bg-blue-600 text-white border-l-4 border-blue-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
//     }`;

//   return (
//     <div className="fixed top-0 left-0 h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white w-64 transition-all duration-300 z-50 shadow-2xl">
//       {/* Sidebar Header */}
//       <div className="p-4 border-b border-gray-700 rounded-t-lg bg-gradient-to-r from-blue-900 to-gray-800 shadow-lg">
//         <img
//           src="/Images/logo.png"
//           alt="Logo"
//           className="w-10 h-10 mb-2 transition-transform duration-300 hover:scale-110"
//           onError={(e) => {
//             e.target.src = "https://via.placeholder.com/40"; // Fallback image
//           }}
//         />
//         <h2 className="text-xl font-bold text-blue-300">YNK HRM</h2>
//       </div>

//       {/* Sidebar Menu */}
//       <div className="p-4 overflow-y-auto h-[calc(100%-80px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
//         <ul className="space-y-2">
//           {/* Dashboard */}
//           <li>
//             <NavLink to="/" className={menuItemClass} title="Dashboard">
//               <LayoutDashboard className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
//               <span className="ml-3">Dashboard</span>
//             </NavLink>
//           </li>

//           {/* Employees */}
//           <li>
//             <div
//               className={toggleClass(isEmployeeOpen, isEmployeeActive)}
//               onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
//               title="Employees"
//               aria-expanded={isEmployeeOpen}
//             >
//               <Users className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
//               <span className="ml-3 flex-1">Employees</span>
//               <span className="ml-auto transform transition-transform duration-300">
//                 {isEmployeeOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//               </span>
//             </div>
//             {(isEmployeeOpen || isEmployeeActive) && (
//               <ul className="ml-8 mt-1 space-y-1">
//                 <li>
//                   <NavLink to="/employees/add" className={subMenuItemClass}>
//                     <UserPlus className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
//                     <span className="ml-3">Add Employee</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/employees" className={subMenuItemClass}>
//                     <List className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
//                     <span className="ml-3">Show All Employees</span>
//                   </NavLink>
//                 </li>

//                      <li>
//                   <NavLink to="/offerletter" className={subMenuItemClass}>
//                     <List className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
//                     <span className="ml-3">Documents</span>
//                   </NavLink>
//                 </li>


//               </ul>
//             )}
//           </li>

//           {/* Attendance */}
//           <li>
//             <div
//               className={toggleClass(isAttendanceOpen, isAttendanceActive)}
//               onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
//               title="Attendance"
//               aria-expanded={isAttendanceOpen}
//             >
//               <Calendar className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
//               <span className="ml-3 flex-1">Attendance</span>
//               <span className="ml-auto transform transition-transform duration-300">
//                 {isAttendanceOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//               </span>
//             </div>
//             {(isAttendanceOpen || isAttendanceActive) && (
//               <ul className="ml-8 mt-1 space-y-1">
//                 <li>
//                   <NavLink to="/attendance/add" className={subMenuItemClass}>
//                     <PlusCircle className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
//                     <span className="ml-3">Add Attendance</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/attendance" className={subMenuItemClass}>
//                     <List className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
//                     <span className="ml-3">View All Attendance</span>
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Leaves */}
//           <li>
//             <NavLink to="/leaves" className={menuItemClass} title="Leaves">
//               <Leaf className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
//               <span className="ml-3">Leaves</span>
//             </NavLink>
//           </li>

//           {/* Payroll */}
//           <li>
//             <NavLink to="/payroll" className={menuItemClass} title="Payroll">
//               <DollarSign className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
//               <span className="ml-3">Payroll</span>
//             </NavLink>
//           </li>

//           {/* Holiday */}
//           <li>
//             <NavLink to="/holiday" className={menuItemClass} title="Holiday">
//               <Calendar className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
//               <span className="ml-3">Holiday</span>
//             </NavLink>
//           </li>

//           {/* Logout */}
//           <li className="pt-4 border-t border-gray-700">
//             <NavLink
//               to="/logout"
//               className="flex items-center p-3 rounded-lg hover:bg-red-600 text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
//               title="Logout"
//             >
//               <LogOut className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
//               <span className="ml-3">Logout</span>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  List,
  LogOut,
  Calendar,
  PlusCircle,
  Leaf,
  DollarSign,
  ChevronUp,
  ChevronDown,
  FileText,
} from "lucide-react";

const Sidebar = () => {
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const location = useLocation();

  // Active submenu detection
  const isEmployeeActive = [
    "/hrm/employees",
    "/hrm/employees/add",
    "/hrm/employees/edit",
  ].some((path) => location.pathname.startsWith(path));
  const isAttendanceActive = ["/hrm/attendance", "/hrm/attendance/add"].includes(
    location.pathname
  );
  const isDocumentsActive = [
    "/hrm/offerletter",
    "/hrm/appointmentletter",
    "/hrm/experienceletter",
    "/hrm/travelpolicy",
    "/hrm/officerules",
    "/hrm/salaryslip",
  ].includes(location.pathname);

  // Menu item styling
  const menuItemClass = ({ isActive }) =>
    `flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-blue-600 text-white border-l-4 border-blue-300"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  const subMenuItemClass = ({ isActive }) =>
    `flex items-center p-2 pl-10 rounded-lg transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-blue-600 text-white border-l-4 border-blue-300"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
    }`;

  const toggleClass = (isOpen, isActive) =>
    `flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-blue-600 text-white border-l-4 border-blue-300"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div className="fixed top-0 left-0 h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white w-64 transition-all duration-300 z-50 shadow-2xl">
      <div className="p-4 border-b border-gray-700 rounded-t-lg bg-gradient-to-r from-blue-900 to-gray-800 shadow-lg">
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="w-10 h-10 mb-2 transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/40";
          }}
        />
        <h2 className="text-xl font-bold text-blue-300">YNK HRM</h2>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-80px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <ul className="space-y-2">
          <li>
            <NavLink to="/hrm" className={menuItemClass} title="Dashboard">
              <LayoutDashboard className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <div
              className={toggleClass(isEmployeeOpen, isEmployeeActive)}
              onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
              title="Employees"
              aria-expanded={isEmployeeOpen}
            >
              <Users className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3 flex-1">Employees</span>
              <span className="ml-auto transform transition-transform duration-300">
                {isEmployeeOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </div>
            {(isEmployeeOpen || isEmployeeActive) && (
              <ul className="ml-8 mt-1 space-y-1">
                <li>
                  <NavLink to="/hrm/employees/add" className={subMenuItemClass}>
                    <UserPlus className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Add Employee</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hrm/employees" className={subMenuItemClass}>
                    <List className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Show All Employees</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className={toggleClass(isAttendanceOpen, isAttendanceActive)}
              onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
              title="Attendance"
              aria-expanded={isAttendanceOpen}
            >
              <Calendar className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3 flex-1">Attendance</span>
              <span className="ml-auto transform transition-transform duration-300">
                {isAttendanceOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </div>
            {(isAttendanceOpen || isAttendanceActive) && (
              <ul className="ml-8 mt-1 space-y-1">
                <li>
                  <NavLink to="/hrm/attendance/add" className={subMenuItemClass}>
                    <PlusCircle className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Add Attendance</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hrm/attendance" className={subMenuItemClass}>
                    <List className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">View All Attendance</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className={toggleClass(isDocumentsOpen, isDocumentsActive)}
              onClick={() => setIsDocumentsOpen(!isDocumentsOpen)}
              title="Documents"
              aria-expanded={isDocumentsOpen}
            >
              <FileText className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3 flex-1">Documents</span>
              <span className="ml-auto transform transition-transform duration-300">
                {isDocumentsOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </div>
            {(isDocumentsOpen || isDocumentsActive) && (
              <ul className="ml-8 mt-1 space-y-1">
                <li>
                  <NavLink to="/hrm/offerletter" className={subMenuItemClass}>
                    <FileText className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Offer Letter</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hrm/appointmentletter" className={subMenuItemClass}>
                    <FileText className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Appointment Letter</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hrm/experienceletter" className={subMenuItemClass}>
                    <FileText className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Experience Letter</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hrm/travelpolicy" className={subMenuItemClass}>
                    <FileText className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Travel Policy</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hrm/officerules" className={subMenuItemClass}>
                    <FileText className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Office Rules</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hrm/salaryslip" className={subMenuItemClass}>
                    <FileText className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                    <span className="ml-3">Salary Slip</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/hrm/leaves" className={menuItemClass} title="Leaves">
              <Leaf className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Leaves</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hrm/payroll" className={menuItemClass} title="Payroll">
              <DollarSign className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Payroll</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hrm/holiday" className={menuItemClass} title="Holiday">
              <Calendar className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Holiday</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hrm/profile" className={menuItemClass} title="Profile">
              <Users className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hrm/calculate" className={menuItemClass} title="Calculate">
              <Calendar className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Calculate</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hrm/settings" className={menuItemClass} title="Settings">
              <Users className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Settings</span>
            </NavLink>
          </li>
          <li className="pt-4 border-t border-gray-700">
            <NavLink
              to="/hrm/logout"
              className="flex items-center p-3 rounded-lg hover:bg-red-600 text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
              title="Logout"
            >
              <LogOut className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <span className="ml-3">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;