import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Login from "../pages/Login.jsx";
import ERPDashboard from "../pages/ERPDashboard.jsx";
import CustomCalendar from "../pages/CustomCalendar.jsx";
import Navbar from "../pages/Navbar.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import OnlineSurveyForm from "../components/OnlineSurveyForm/OnlineSurveyForm.jsx";

// Dummy component for steps
const StepPage = ({ name }) => (
  <div style={{ padding: 32, fontSize: 24 }}>{name}</div>
);

const yewaleSteps = [
  "generate",
  "assign-engineer",
  "pre-survey-script",
  "survey-inputs",
  "survey",
  "rough-layout",
  "discussion-on-generate",
  "detail-submission-generate",
  "internal-discussion",
  "layout-preparation",
  "pre-plan-explain-script",
  "vendor-list",
  "intimate-forms",
  "details-submission-prepare",
  "plan-explanation",
  "discussion-on-prepare",
  "details-submission-plan",
  "15-days-target",
  "inspection-visit",
  "inspectionchecklist",
  "civil-work-noc",
  "details-submission-agreement",
  "planning-for-material",
  "material-checking-visit",
  "details-submission-material",
  "pending-work-follow-up",
  "final-inspection-visit",
  "details-submission-final",
  "noc",
  "opening-visit",
  "opening",
  "add-to-crm",
  "feedback",
  "online-survey-form",
];

const nadbramhaSteps = [
  "generate",
  "assign-engineer",
  "pre-survey-script",
  "survey-inputs",
  "survey",
  "rough-layout",
  "discussion-on-generate",
  "detail-submission-generate",
  "internal-discussion",
  "layout-preparation",
  "pre-plan-explain-script",
  "vendor-list",
  "intimate-forms",
  "details-submission-prepare",
  "plan-explanation",
  "discussion-on-prepare",
  "details-submission-plan",
  "15-days-target",
  "inspection-visit",
  "inspectionchecklist",
  "civil-work-noc",
  "details-submission-agreement",
  "planning-for-material",
  "material-checking-visit",
  "details-submission-material",
  "pending-work-follow-up",
  "final-inspection-visit",
  "details-submission-final",
  "noc",
  "opening-visit",
  "opening",
  "add-to-crm",
  "feedback",
];

const vendorRoutes = [
  "electrician",
  "plumber",
  "tiles",
  "pop",
  "cctv",
  "internet",
  "painter",
  "gas",
  "ducting",
  "awing",
  "mason",
  "board",
  "fabricator",
];

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "dashboard", element: <ERPDashboard /> },
        { path: "calendar", element: <CustomCalendar /> },
        { path: "navbar", element: <Navbar /> },
        { path: "projects", element: <ProjectsPage /> },

        // Yewale steps (render OnlineSurveyForm for pre-survey-script)
        ...yewaleSteps.map((step) => ({
          path: `projects/yewale/${step}`,
          element:
            step === "pre-survey-script" ? (
              <OnlineSurveyForm />
            ) : (
              <StepPage name={`Yewale - ${step.replace(/-/g, " ")}`} />
            ),
        })),

        // Nadbramha steps
        ...nadbramhaSteps.map((step) => ({
          path: `projects/nadbramha/${step}`,
          element: <StepPage name={`Nadbramha - ${step.replace(/-/g, " ")}`} />,
        })),

        // Vendors
        ...vendorRoutes.map((vendor) => ({
          path: `vendors/${vendor}`,
          element: <StepPage name={`Vendor - ${vendor.replace(/-/g, " ")}`} />,
        })),
      ],
    },
  ]);
  return routes;
};

export default AppRoutes;
