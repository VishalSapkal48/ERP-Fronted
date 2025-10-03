import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3,
  FileText,
  Users,
  AlertTriangle,
  Settings,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";

const Sidebar = ({ activeView, setActiveView, closeSidebar, onLogout }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const navItems = [
    { path: "/development/dashboard", icon: <BarChart3 className="w-5 h-5" />, label: "Dashboard" },
    { path: "/development/leadgeneration", icon: <FileText className="w-5 h-5" />, label: "Lead Generation" },
    { path: "/development/assignengineer", icon: <Users className="w-5 h-5" />, label: "Assign Engineer" },
    {
      path: "/development/surveyquotation",
      icon: <AlertTriangle className="w-5 h-5" />,
      label: "Survey Quotation",
      subItems: [
        { path: "/development/surveyquotation/pre-survey", label: "Pre Survey" },
        { path: "/development/surveyquotation/online-survey-input", label: "Survey Online" },
        { path: "/development/surveyquotation/offline-survey-input", label: "Survey Offline" },
        { path: "/development/surveyquotation/survey", label: "Survey Form" },
        { path: "/development/surveyquotation/rough-layout", label: "Rough Layout" },
        { path: "/development/surveyquotation/discussion-on-challenges", label: "Discussion on Challenges" },
      ],
    },
    {
      path: "/development/departmentalwork",
      icon: <Settings className="w-5 h-5" />,
      label: "Departmental Work",
      subItems: [
        { path: "/development/departmentalwork/civil-work-quotation", label: "Civil Work Quotation" },
        { path: "/development/departmentalwork/ynk-material-list", label: "YNK Material List" },
        { path: "/development/departmentalwork/agreement", label: "Agreement" },
        {
          path: "/development/letterofundertaking",
          label: "Letter of Undertaking",
          subItems: [
            {
              path: "/development/letterofundertaking/yewale",
              label: "Yewale",
              subItems: [
                { path: "/development/letterofundertaking/yewale/civil-work-yewale", label: "Civil-Work Yewale" },
                { path: "/development/letterofundertaking/yewale/form1", label: "Yewale - Form 1" },
                { path: "/development/letterofundertaking/yewale/form2", label: "Yewale - Form 2" },
              ],
            },
            {
              path: "/development/letterofundertaking/nadbramha",
              label: "Nadbramha",
              subItems: [
                { path: "/development/letterofundertaking/nadbramha/civil-work-nb", label: "Civil-Work NB" },
                { path: "/development/letterofundertaking/nadbramha/form1", label: "NB - Form 1" },
                { path: "/development/letterofundertaking/nadbramha/form2", label: "NB - Form 2" },
                { path: "/development/letterofundertaking/nadbramha/letter-of-undertaking-nb", label: "Letter-of-Undertaking NB" },
              ],
            },
            { path: "/development/letterofundertaking/board-works", label: "Board Works" },
            { path: "/development/letterofundertaking/camera-set", label: "Camera Set" },
            { path: "/development/letterofundertaking/electrical-work", label: "Electrical Work" },
            { path: "/development/letterofundertaking/equipments-work", label: "Equipments Work" },
                    ],
        },
      ],
    },
    {
      path: "/development/quotationonlyshow",
      icon: <Settings className="w-5 h-5" />,
      label: "Quotation (Only Show)",
      subItems: [
        { path: "/yewale", label: "Yewale" },
        { path: "/nadbramha", label: "NB" },
        { path: "/development/quotationonlyshow/yk", label: "YK" },
        { path: "/development/quotationonlyshow/other", label: "Other" },
        { path: "/development/quotationonlyshow/inprocess", label: "Inprocess (Only Show)" },
      ],
    },
     {
      path: "/development/layoutpreparation",
      icon: <Settings className="w-5 h-5" />,
      label: "Layout Preparation",
      subItems: [
        { path: "/yewale", label: "Yewale - Site Name - Layouts" },
        { path: "/nadbramha", label: "NB" },
        { path: "/development/layoutpreparation/yk", label: "YK" },
        { path: "/development/layoutpreparation/others", label: "Others" },
      ],
    },
    {
      path: "/development/planexplanation",
      icon: <FileText className="w-5 h-5" />,
      label: "Plan Explanation",
      subItems: [
        { path: "/development/planexplanation/layout-preparation", label: "Layout Preparation (SS Layout Validation Only)" },
        { path: "/development/planexplanation/pre-plan-explain-script", label: "Pre Plan Explain Script" },
        { path: "/yewale/material-checklist-form", label: "Yewale - Material Checklist Form" },
        { path: "/nadbramha/owner-material-checklist", label: "NB - Owner Material Checklist Form" },
        { path: "/yewale/warranty", label: "Yewale - Warranty Form" },
        { path: "/nadbramha/warranty-period", label: "NB - Warranty Period Form" },
        { path: "/yewale/construction-form", label: "Yewale - Construction Form" },
        { path: "/nadbramha/work-steps", label: "NB - Work Steps Form" },
        { path: "/development/planexplanation/vendor-list-intimation-form", label: "Vendor List, Intimation Form" },
        { path: "/development/planexplanation/warranty-period-work-step", label: "Plan Explain (Warranty Period, Work Step) [Only Show]" },
        { path: "/development/planexplanation/challenges-after-plan-explain", label: "Challenges After Plan Explain" },
        { path: "/development/planexplanation/completed-plan-explain", label: "Completed Plan Explain (Only All Data Show No Specific Form)" },
        { path: "/yewale/challengesforyewale", label: "Yewale - Challenges" },
        { path: "/nadbramha/challengesfornaadbram", label: "NB - Challenges" },
      ],
    },
      {
      path: "/development/fifteendaysverification",
      icon: <Settings className="w-5 h-5" />,
      label: "15 Days Verification",
      subItems: [
       
        { path: "/development/yewale/fifteen-days-target", label: "Yewale - 15 Days Target Form" },
        { path: "/development/nadbramha/fifteen-days-target", label: "NB - 15 Days Target Form" },
      ],
    },
    {
      path: "/development/inspection",
      icon: <FileText className="w-5 h-5" />,
      label: "Inspection",
      subItems: [
        { path: "/development/inspection/inspection", label: "Inspection" },
      ],
    },
    {
      path: "/development/civilnoc",
      icon: <Settings className="w-5 h-5" />,
      label: "Civil NOC",
      subItems: [
        { path: "/development/civilnoc/inspection-all-work-completed", label: "Inspection (All Work Completed)" },
        { path: "/development/civilnoc/civil-work-noc", label: "Civil Work NOC" },
        { path: "/development/yewale/civil-work-noc", label: "Yewale - Civil Work NOC" },
        { path: "/development/nadbramha/civil-work-noc", label: "NB - Civil Work NOC" },
        { path: "/development/civilnoc/reference-photos-videos-yewale", label: "Reference Photos & Videos - Yewale" },
        { path: "/development/civilnoc/reference-photos-videos-nb", label: "Reference Photos & Videos - NB" },
        { path: "/development/civilnoc/reference-photos-videos-yk", label: "Reference Photos & Videos - YK" },
        { path: "/development/civilnoc/reference-photos-videos-other", label: "Reference Photos & Videos - Other" },
      ],
    },
      { path: "/development/midtermsubmission", icon: <FileText className="w-5 h-5" />, label: "Mid Term Submission", subItems: [{ path: "/development/midtermsubmission/all-closer", label: "All Closer (Only Show)" }] },
    {
      path: "/development/materialorderfordispatch",
      icon: <Settings className="w-5 h-5" />,
      label: "Material Order For Dispatch",
      subItems: [
        { path: "/development/materialorderfordispatch/planning-for-material-dispatch", label: "Planning for Material Dispatch" },
        { path: "/development/materialorderfordispatch/terms-condition", label: "Terms & Condition" },
        { path: "/development/yewale/materialdispatchyewale", label: "Yewale - Material Dispatch" },
        { path: "/development/nadbramha/materialdispatchnadhbarma", label: "NB - Material Dispatch" },
      ],
    },
       {
      path: "/development/materialcheckingvisitinspection",
      icon: <FileText className="w-5 h-5" />,
      label: "Material Checking Visit/Inspection",
      subItems: [
        { path: "/yewale/materialcheckingvisitinspection/yewale-material-checking", label: "Yewale - Material Checking" },
        { path: "/nadbramha/materialcheckingvisitinspection/nb", label: "NB - Material Checking" },
        { path: "/development/materialcheckingvisitinspection/yk", label: "YK" },
        { path: "/development/materialcheckingvisitinspection/other", label: "Other" },
        { path: "/development/materialcheckingvisitinspection/pending", label: "Pending" },
        { path: "/development/materialcheckingvisitinspection/damage", label: "Damage" },
      ],
    },
     {
      path: "/development/finalinspection",
      icon: <FileText className="w-5 h-5" />,
      label: "Final Inspection",
      subItems: [
        { path: "/yewale/finalinspection/pending-work-yewale", label: "Pending Work - Yewale" },
        { path: "/nadbramha/finalinspection/pending-work-nb", label: "Pending Work - NB" },
        { path: "/development/finalinspection/pending-work-yk", label: "Pending Work - YK" },
        { path: "/development/finalinspection/pending-work-other", label: "Pending Work - Other" },
        { path: "/yewale/finalinspection/final-inspection-checklist-yewale", label: "Final Inspection Checklist - Yewale" },
        { path: "/nadbramha/finalinspection/final-inspection-checklist-nb", label: "Final Inspection Checklist - NB" },
        { path: "/development/finalinspection/final-inspection-checklist-yk", label: "Final Inspection Checklist - YK" },
        { path: "/development/finalinspection/final-inspection-checklist-other", label: "Final Inspection Checklist - Other" },
      ],
    },
     { path: "/development/pendingfollowup", icon: <Settings className="w-5 h-5" />, label: "Pending Follow-up" },
    {
      path: "/development/nocverification",
      icon: <Settings className="w-5 h-5" />,
      label: "NOC Verification",
      subItems: [
        { path: "/development/nocverification/survey", label: "Survey" },
        { path: "/development/nocverification/layouts", label: "Layouts" },
        { path: "/development/nocverification/plan-explanation", label: "Plan Explanation" },
        { path: "/development/nocverification/inspection", label: "Inspection" },
        { path: "/development/nocverification/material-checklist", label: "Material Checklist" },
        { path: "/development/nocverification/final-inspection", label: "Final Inspection" },
      ],
    },
    { path: "/development/openingdate", icon: <Settings className="w-5 h-5" />, label: "Opening Date" },
    {
      path: "/development/openingvisitverification",
      icon: <Settings className="w-5 h-5" />,
      label: "Opening Visit Verification",
      subItems: [
        { path: "/development/yewale/openingvisityewale", label: "Yewale - Demolist (Opening Visit & Photos & Videos)" },
        { path: "/development/nadbramha/openingvisitnaadbramha", label: "NB - Demolist (Opening Visit & Photos & Videos)" },
        { path: "/development/openingvisitverification/yk", label: "YK" },
        { path: "/development/openingvisitverification/other", label: "Other" },
      ],
    },
    { path: "/development/monthlysitesopeningreport", icon: <Settings className="w-5 h-5" />, label: "Monthly Sites Opening Report" },
    { path: "/development/task", icon: <FileText className="w-5 h-5" />, label: "Task" },
  ];

  // Recursive SidebarMenu component
  const SidebarMenu = ({
    items,
    expandedItems,
    toggleExpand,
    setActiveView,
    closeSidebar,
    level = 0,
  }) => (
    <div className={level > 0 ? "ml-4" : ""}>
      {items.map((item) => (
        <div key={item.label}>
          {item.subItems ? (
            <>
              <div
                className={`flex items-center justify-between px-${
                  level === 0 ? 3 : 4
                } py-2 text-sm rounded-lg transition-colors duration-200 text-gray-600 hover:bg-gray-100 cursor-pointer`}
                onClick={() => toggleExpand(item.label)}
              >
                <div className="flex items-center space-x-2 flex-1">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedItems[item.label] ? "rotate-180" : ""
                  }`}
                />
              </div>
              {expandedItems[item.label] && (
                <SidebarMenu
                  items={item.subItems}
                  expandedItems={expandedItems}
                  toggleExpand={toggleExpand}
                  setActiveView={setActiveView}
                  closeSidebar={closeSidebar}
                  level={level + 1}
                />
              )}
            </>
          ) : (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${
                  level === 0 ? "flex items-center space-x-2 flex-1" : "block"
                } px-${level === 0 ? 3 : 4} py-2 text-sm rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-red-100 text-red-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
              onClick={() => {
                setActiveView(item.label.toLowerCase().replace(/\s+/g, ""));
                closeSidebar();
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform z-50 transition-transform duration-300 ease-in-out ${
        activeView ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Logo Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <img
            src="/Images/BoardWorksListForm/logo.png"
            alt="Logo"
            className="w-10 h-10 transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/40";
            }}
          />
          <h2 className="text-base sm:text-lg font-semibold text-red-600">YNK</h2>
        </div>
        <button
          type="button"
          onClick={closeSidebar}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Close Sidebar"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Nav Items */}
      <nav className="p-3 sm:p-4 space-y-1 sm:space-y-2 h-[calc(100vh-64px)] overflow-y-auto">
        <SidebarMenu
          items={navItems}
          expandedItems={expandedItems}
          toggleExpand={toggleExpand}
          setActiveView={setActiveView}
          closeSidebar={closeSidebar}
          level={0}
        />

        {/* Logout */}
        <button
          onClick={() => {
            onLogout();
            closeSidebar();
          }}
          className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base text-gray-600 hover:bg-gray-100 w-full transition-colors duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;