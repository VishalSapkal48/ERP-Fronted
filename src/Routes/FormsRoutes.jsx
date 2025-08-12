import { useRoutes, useLocation, Navigate } from 'react-router-dom';
import React, { Component, Suspense } from 'react';
import ERPDashboard from '../Components/Froms/pages/ERPDashboard.jsx';
import CustomCalendar from '../Components/Froms/pages/CustomCalendar.jsx';
import Navbar from '../Components/Froms/pages/Navbar.jsx';
import ProjectsPage from '../Components/Froms/pages/ProjectsPage.jsx';

// Feedback forms (Yewale)
import YewaleCALL1 from '../Components/Froms/components/yewalecomponents/call1folder1/CALL1.jsx';
import YewaleCALL2 from '../Components/Froms/components/yewalecomponents/call2folder2/CALL2.jsx';
import YewaleCALL3 from '../Components/Froms/components/yewalecomponents/call3folder3/CALL3.jsx';
import YewaleCALL4 from '../Components/Froms/components/yewalecomponents/call4folder4/CALL4.jsx';
import YewaleCALL5 from '../Components/Froms/components/yewalecomponents/call5folder5/CALL5.jsx';
import YewaleCALL6 from '../Components/Froms/components/yewalecomponents/call6folder6/YewaleCALL6.jsx';
import YewaleCALL7 from '../Components/Froms/components/yewalecomponents/call7folder7/CALL7.jsx';
import YewaleCALL8 from '../Components/Froms/components/yewalecomponents/call8folder8/CALL8.jsx';
import YewaleCALL9 from '../Components/Froms/components/yewalecomponents/call9folder9/CALL9.jsx';

// Feedback forms (Nadbrahma)
import NadCALL1 from '../Components/Froms/components/nadbramhacomponents/call1folder1/CALL1.jsx';
import NadCALL2 from '../Components/Froms/components/nadbramhacomponents/call2folder2/CALL2.jsx';
import NadCALL3 from '../Components/Froms/components/nadbramhacomponents/call3folder3/CALL3.jsx';
import NadCALL4 from '../Components/Froms/components/nadbramhacomponents/call4folder4/CALL4.jsx';
import NadCALL5 from '../Components/Froms/components/nadbramhacomponents/call5folder5/CALL5.jsx';
import NadCALL6 from '../Components/Froms/components/nadbramhacomponents/call6folder6/CALL6.jsx';

// LetterOfUndertaking forms
import BoardWorksForm from '../Components/Froms/components/LetterOfUndertaking/BoardWorksForm.jsx';
import CameraSetForm from '../Components/Froms/components/LetterOfUndertaking/CameraSetForm.jsx';
import ElectricalWorksForm from '../Components/Froms/components/LetterOfUndertaking/ElectricalWorksForm.jsx';
import SteelEquipmentForm from '../Components/Froms/components/LetterOfUndertaking/SteelEquipmentForm.jsx';
import LetterOfUndertakingForm from '../Components/Froms/components/LetterOfUndertaking/LetterOfUndertakingForm.jsx';

// Other forms/pages
import OnlineSurveyForm from '../Components/Froms/components/OnlineSurveyForm/OnlineSurveyForm.jsx';
import CivilWorkChecklistForm from '../Components/Froms/components/CivilWorkChecklistForm/CivilWorkChecklistForm.jsx';
import InspectionChecklist from '../Components/Froms/components/InspectionChecklist/InspectionChecklist.jsx';
import InternalDepartmentWorking from '../Components/Froms/components/InternalDeprmentWorking/InternalDepermentWorking.jsx';
import MaterialChecklist from '../Components/Froms/components/MaterialChecklist/MaterialChecklist.jsx';
import ProjectWorkFollowup from '../Components/Froms/components/ProjectWorkFollowup/ProjectWorkFollowup.jsx';
import ShopSetupChecklistForm from '../Components/Froms/components/ShopSetupChecklistForm/ShopSetupChecklistForm.jsx';
import TermsandCondition from '../Components/Froms/components/TermsandCondition/TermsandCondition.jsx';

// Plan Explanation (Yewale)
import CivilWorkWorking from '../Components/Froms/components/planexplanation/yewalecomponents/CivilWorkWorkingSteps.jsx';
import ConstructionForm from '../Components/Froms/components/planexplanation/yewalecomponents/ConstructionForm.jsx';
import MaterialChecklistForm from '../Components/Froms/components/planexplanation/yewalecomponents/MaterialChecklistForm.jsx';
import WarrantyForm from '../Components/Froms/components/planexplanation/yewalecomponents/WarrantyForm.jsx';

// Plan Explanation (Nadbrahma)
import OwnerMaterialCheckForm from '../Components/Froms/components/planexplanation/nadbramhacomponents/OwnerMaterialChecklistForm.jsx';
import WarrantyPeriodForm from '../Components/Froms/components/planexplanation/nadbramhacomponents/WarrantyPeriodForm.jsx';
import WorkStepsForm from '../Components/Froms/components/planexplanation/nadbramhacomponents/WorkStepsForm.jsx';



// Error Boundary Component
class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    console.error('ErrorBoundary caught an error:', error);
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-4 text-red-600">
          <h2>Component Error</h2>
          <p>{this.state.error.message}</p>
          <p>Stack trace: {this.state.error.stack}</p>
          <p>Check the component implementation for {this.props.path}.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const StepPage = ({ name }) => {
  console.log(`Rendering StepPage: ${name}`);
  return <div style={{ padding: 32, fontSize: 24 }}>{name}</div>;
};

const FallbackComponent = ({ path }) => (
  <div className="flex flex-col items-center justify-center h-screen text-gray-600">
    <h2 className="text-2xl font-semibold">404 - Page Not Found</h2>
    <p className="mt-2">Route: {path}</p>
    <p className="mt-1">No component is defined for this route. Please check the route configuration in FormsRoutes.jsx.</p>
  </div>
);

const FormsRoutes = () => {
  const location = useLocation();
  console.log('FormsRoutes: Current path:', location.pathname);

  const routes = useRoutes([
    { path: '/', element: <Navigate to="/forms/dashboard" replace /> },
    {
      path: '/dashboard',
      element: (
        <ErrorBoundary path="/dashboard">
          <ERPDashboard />
        </ErrorBoundary>
      ),
    },
    {
      path: '/forms',
      element: (
        <ErrorBoundary path="/forms">
          <ERPDashboard />
        </ErrorBoundary>
      ),
    },
    { path: '/calendar', element: <CustomCalendar /> },
    { path: '/navbar', element: <Navbar /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/yewalecomponents/call1folder1', element: <YewaleCALL1 /> },
    { path: '/yewalecomponents/call2folder2', element: <YewaleCALL2 /> },
    { path: '/yewalecomponents/call3folder3', element: <YewaleCALL3 /> },
    { path: '/yewalecomponents/call4folder4', element: <YewaleCALL4 /> },
    { path: '/yewalecomponents/call5folder5', element: <YewaleCALL5 /> },
    { path: '/yewalecomponents/call6folder6', element: <YewaleCALL6 /> },
    { path: '/yewalecomponents/call7folder7', element: <YewaleCALL7 /> },
    { path: '/yewalecomponents/call8folder8', element: <YewaleCALL8 /> },
    { path: '/yewalecomponents/call9folder9', element: <YewaleCALL9 /> },
    { path: '/nadbrahmacomponents/call1folder1', element: <NadCALL1 /> },
    { path: '/nadbrahmacomponents/call2folder2', element: <NadCALL2 /> },
    { path: '/nadbrahmacomponents/call3folder3', element: <NadCALL3 /> },
    { path: '/nadbrahmacomponents/call4folder4', element: <NadCALL4 /> },
    { path: '/nadbrahmacomponents/call5folder5', element: <NadCALL5 /> },
    { path: '/nadbrahmacomponents/call6folder6', element: <NadCALL6 /> },
    { path: '/LetterOfUndertaking/BoardWorksForm', element: <BoardWorksForm /> },
    { path: '/LetterOfUndertaking/CameraSetForm', element: <CameraSetForm /> },
    { path: '/LetterOfUndertaking/ElectricalWorksForm', element: <ElectricalWorksForm /> },
    { path: '/LetterOfUndertaking/LetterOfUndertakingForm', element: <LetterOfUndertakingForm /> },
    { path: '/LetterOfUndertaking/SteelEquipmentForm', element: <SteelEquipmentForm /> },
    {
      path: '/projects/yewale/terms-and-condition',
      element: (
        <ErrorBoundary path="/projects/yewale/terms-and-condition">
          <TermsandCondition />
        </ErrorBoundary>
      ),
    },
    { path: '/projects/yewale/pre-survey-script', element: <ProjectWorkFollowup /> },
    { path: '/projects/yewale/civil-work-checklist-form', element: <CivilWorkChecklistForm /> },
    { path: '/projects/yewale/internal-department-working', element: <InternalDepartmentWorking /> },
    { path: '/projects/yewale/inspection-checklist', element: <InspectionChecklist /> },
    { path: '/projects/yewale/material-checklist', element: <MaterialChecklist /> },
    { path: '/projects/yewale/shop-setup-checklist', element: <ShopSetupChecklistForm /> },
    { path: '/projects/yewale/project-work-followup', element: <OnlineSurveyForm /> },
    { path: '/projects/yewale/survey-inputs', element: <StepPage name="Yewale - Survey Inputs for Owner" /> },
    { path: '/projects/yewale/survey', element: <StepPage name="Yewale - Survey" /> },
    { path: '/projects/yewale/rough-layout', element: <StepPage name="Yewale - Rough Layout" /> },
    { path: '/projects/nadbrahma/terms-and-condition', element: <TermsandCondition /> },
    { path: '/projects/nadbrahma/pre-survey-script', element: <ProjectWorkFollowup /> },
    { path: '/projects/nadbrahma/civil-work-checklist-form', element: <CivilWorkChecklistForm /> },
    { path: '/projects/nadbrahma/internal-department-working', element: <InternalDepartmentWorking /> },
    { path: '/projects/nadbrahma/inspection-checklist', element: <InspectionChecklist /> },
    { path: '/projects/nadbrahma/material-checklist', element: <MaterialChecklist /> },
    { path: '/projects/nadbrahma/shop-setup-checklist', element: <ShopSetupChecklistForm /> },
    { path: '/projects/nadbrahma/project-work-followup', element: <OnlineSurveyForm /> },
    { path: '/projects/nadbrahma/survey-inputs', element: <StepPage name="Nadbrahma - Survey Inputs for Owner" /> },
    { path: '/projects/nadbrahma/survey', element: <StepPage name="Nadbrahma - Survey" /> },
    { path: '/projects/nadbrahma/rough-layout', element: <StepPage name="Nadbrahma - Rough Layout" /> },
    { path: '/vendors/electrician', element: <StepPage name="Vendor - Electrician" /> },
    { path: '/vendors/plumber', element: <StepPage name="Vendor - Plumber" /> },
    { path: '/vendors/tiles', element: <StepPage name="Vendor - Tiles vendor" /> },
    { path: '/vendors/pop', element: <StepPage name="Vendor - POP vendor" /> },
    { path: '/vendors/cctv', element: <StepPage name="Vendor - CCTV Installer" /> },
    { path: '/vendors/internet', element: <StepPage name="Vendor - Internet Service Provider" /> },
    { path: '/vendors/painter', element: <StepPage name="Vendor - Painter" /> },
    { path: '/vendors/gas', element: <StepPage name="Vendor - Gas pipeline vendor" /> },
    { path: '/vendors/ducting', element: <StepPage name="Vendor - Ducting vendor" /> },
    { path: '/vendors/awing', element: <StepPage name="Vendor - Awing shed vendor" /> },
    { path: '/vendors/mason', element: <StepPage name="Vendor - Mason" /> },
    { path: '/vendors/board', element: <StepPage name="Vendor - Board vendor" /> },
    { path: '/vendors/fabricator', element: <StepPage name="Vendor - Fabricator" /> },
    { path: '/planexplanation/yewale/civil-work-working', element: <CivilWorkWorking /> },
    { path: '/planexplanation/yewale/construction-form', element: <ConstructionForm /> },
    { path: '/planexplanation/yewale/material-checklist', element: <MaterialChecklistForm /> },
    { path: '/planexplanation/yewale/warranty-form', element: <WarrantyForm /> },
    { path: '/planexplanation/yewale/revised-work-followup', element: <StepPage name="Yewale - Revised Work Followup" /> },
    { path: '/planexplanation/nadbrahma/owner-material', element: <OwnerMaterialCheckForm /> },
    { path: '/planexplanation/nadbrahma/warranty-period', element: <WarrantyPeriodForm /> },
    { path: '/planexplanation/nadbrahma/work-steps-for', element: <WorkStepsForm /> },
    { path: '/test2', element: <StepPage name="Test2" /> },
    { path: '/test3', element: <StepPage name="Test3" /> },
  ]);

  console.log('FormsRoutes: Matched route element:', routes);

  if (!routes) {
    console.error('FormsRoutes: No route matched for', location.pathname, 'Possible causes: Missing Router context, invalid path, or import failure');
    return <FallbackComponent path={location.pathname} />;
  }

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-gray-600">Loading...</div>}>
      {routes}
    </Suspense>
  );
};

export default FormsRoutes;