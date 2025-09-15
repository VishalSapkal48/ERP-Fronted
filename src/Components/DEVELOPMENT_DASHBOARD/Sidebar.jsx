import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, FileText, Users, AlertTriangle, Settings, X, LogOut } from "lucide-react";

const Sidebar = ({ activeView, setActiveView, closeSidebar, onLogout }) => {
  const navItems = [
    { path: "/development/dashboard", icon: <BarChart3 className="w-5 h-5" />, label: "Dashboard" },
    { path: "/development/leadgeneration", icon: <FileText className="w-5 h-5" />, label: "Lead Generation" },
    { path: "/development/assignengineer", icon: <Users className="w-5 h-5" />, label: "Assign Engineer" },
    { path: "/development/surveyquotation", icon: <AlertTriangle className="w-5 h-5" />, label: "Survey Quotation" },
    { path: "/development/ongoingchallengesaftersurvey", icon: <FileText className="w-5 h-5" />, label: "Ongoing Challenges After Survey" },
    { path: "/development/quotationonlyshow", icon: <Settings className="w-5 h-5" />, label: "Quotation (Only Show)" },
    { path: "/development/layoutpreparation", icon: <Settings className="w-5 h-5" />, label: "Layout Preparation" },
    { path: "/development/planexplanation", icon: <FileText className="w-5 h-5" />, label: "Plan Explanation" },
    { path: "/development/challengesafterplanexplanation", icon: <Settings className="w-5 h-5" />, label: "Challenges After Plan Explanation" },
    { path: "/development/fifteendaysverification", icon: <Settings className="w-5 h-5" />, label: "15 Days Verification" },
    { path: "/development/inspection", icon: <FileText className="w-5 h-5" />, label: "Inspection" },
    { path: "/development/civilnoc", icon: <Settings className="w-5 h-5" />, label: "Civil NOC" },
    { path: "/development/materialorderfordispatch", icon: <Settings className="w-5 h-5" />, label: "Material Order For Dispatch" },
    { path: "/development/materialcheckingvisitinspection", icon: <FileText className="w-5 h-5" />, label: "Material Checking Visit/Inspection" },
    { path: "/development/pendingfollowup", icon: <Settings className="w-5 h-5" />, label: "Pending Follow-up" },
    { path: "/development/nocverification", icon: <Settings className="w-5 h-5" />, label: "NOC Verification" },
    { path: "/development/openingdate", icon: <Settings className="w-5 h-5" />, label: "Opening Date" },
    { path: "/development/openingvisitverification", icon: <Settings className="w-5 h-5" />, label: "Opening Visit Verification" },
    { path: "/development/monthlysitesopeningreport", icon: <Settings className="w-5 h-5" />, label: "Monthly Sites Opening Report" },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform z-50 transition-transform duration-300 ease-in-out
        ${activeView ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
        <h2 className="text-base sm:text-lg font-semibold text-red-600">Workflow</h2>
        <button
          onClick={closeSidebar}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      <nav className="p-3 sm:p-4 space-y-1 sm:space-y-2 h-[calc(100vh-64px)] overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base
                ${isActive ? "bg-red-100 text-red-600" : "text-gray-600 hover:bg-gray-100"}`
            }
            onClick={() => {
              setActiveView(item.label.toLowerCase().replace(/\s+/g, ""));
              closeSidebar();
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button
          onClick={() => {
            onLogout();
            closeSidebar();
          }}
          className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base text-gray-600 hover:bg-gray-100 w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;