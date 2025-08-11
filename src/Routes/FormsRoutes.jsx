import { useRoutes, useLocation, Navigate } from 'react-router-dom';
import React, { Component } from 'react';
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
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-4 text-red-600">
          <h2>Component Error</h2>
          <p>{this.state.error.message}</p>
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
  <div className="p-4 text-gray-600">
    <h2>No Data Available</h2>
    <p>Route: {path}</p>
    <p>Check the component implementation or data source.</p>
  </div>
);

const FormsRoutes = () => {
  const location = useLocation();
  const routes = useRoutes([
    { path: '/forms', element: <Navigate to="/forms/dashboard" replace /> },
    {
      path: '/forms/dashboard',
      element: (
        <ErrorBoundary path="/forms/dashboard">
          <ERPDashboard />
        </ErrorBoundary>
      ),
    },
    { path: '/forms/calendar', element: <CustomCalendar /> },
    { path: '/forms/navbar', element: <Navbar /> },
    { path: '/forms/projects', element: <ProjectsPage /> },
    { path: '/forms/yewalecomponents/call1folder1', element: <YewaleCALL1 /> },
    { path: '/forms/yewalecomponents/call2folder2', element: <YewaleCALL2 /> },
    { path: '/forms/yewalecomponents/call3folder3', element: <YewaleCALL3 /> },
    { path: '/forms/yewalecomponents/call4folder4', element: <YewaleCALL4 /> },
    { path: '/forms/yewalecomponents/call5folder5', element: <YewaleCALL5 /> },
    { path: '/forms/yewalecomponents/call6folder6', element: <YewaleCALL6 /> },
    { path: '/forms/yewalecomponents/call7folder7', element: <YewaleCALL7 /> },
    { path: '/forms/yewalecomponents/call8folder8', element: <YewaleCALL8 /> },
    { path: '/forms/yewalecomponents/call9folder9', element: <YewaleCALL9 /> },
    { path: '/forms/nadbrahmacomponents/call1folder1', element: <NadCALL1 /> },
    { path: '/forms/nadbrahmacomponents/call2folder2', element: <NadCALL2 /> },
    { path: '/forms/nadbrahmacomponents/call3folder3', element: <NadCALL3 /> },
    { path: '/forms/nadbrahmacomponents/call4folder4', element: <NadCALL4 /> },
    { path: '/forms/nadbrahmacomponents/call5folder5', element: <NadCALL5 /> },
    { path: '/forms/nadbrahmacomponents/call6folder6', element: <NadCALL6 /> },
    { path: '/forms/LetterOfUndertaking/BoardWorksForm', element: <BoardWorksForm /> },
    { path: '/forms/LetterOfUndertaking/CameraSetForm', element: <CameraSetForm /> },
    { path: '/forms/LetterOfUndertaking/ElectricalWorksForm', element: <ElectricalWorksForm /> },
    { path: '/forms/LetterOfUndertaking/LetterOfUndertakingForm', element: <LetterOfUndertakingForm /> },
    { path: '/forms/LetterOfUndertaking/SteelEquipmentForm', element: <SteelEquipmentForm /> },
    { path: '/forms/projects/yewale/terms-and-condition', element: <TermsandCondition /> },
    { path: '/forms/projects/yewale/pre-survey-script', element: <ProjectWorkFollowup /> },
    { path: '/forms/projects/yewale/civil-work-checklist-form', element: <CivilWorkChecklistForm /> },
    { path: '/forms/projects/yewale/internal-department-working', element: <InternalDepartmentWorking /> },
    { path: '/forms/projects/yewale/inspection-checklist', element: <InspectionChecklist /> },
    { path: '/forms/projects/yewale/material-checklist', element: <MaterialChecklist /> },
    { path: '/forms/projects/yewale/shop-setup-checklist', element: <ShopSetupChecklistForm /> },
    { path: '/forms/projects/yewale/project-work-followup', element: <OnlineSurveyForm /> },
    { path: '/forms/projects/yewale/survey-inputs', element: <StepPage name="Yewale - Survey Inputs for Owner" /> },
    { path: '/forms/projects/yewale/survey', element: <StepPage name="Yewale - Survey" /> },
    { path: '/forms/projects/yewale/rough-layout', element: <StepPage name="Yewale - Rough Layout" /> },
    { path: '/forms/projects/nadbrahma/terms-and-condition', element: <TermsandCondition /> },
    { path: '/forms/projects/nadbrahma/pre-survey-script', element: <ProjectWorkFollowup /> },
    { path: '/forms/projects/nadbrahma/civil-work-checklist-form', element: <CivilWorkChecklistForm /> },
    { path: '/forms/projects/nadbrahma/internal-department-working', element: <InternalDepartmentWorking /> },
    { path: '/forms/projects/nadbrahma/inspection-checklist', element: <InspectionChecklist /> },
    { path: '/forms/projects/nadbrahma/material-checklist', element: <MaterialChecklist /> },
    { path: '/forms/projects/nadbrahma/shop-setup-checklist', element: <ShopSetupChecklistForm /> },
    { path: '/forms/projects/nadbrahma/project-work-followup', element: <OnlineSurveyForm /> },
    { path: '/forms/projects/nadbrahma/survey-inputs', element: <StepPage name="Nadbrahma - Survey Inputs for Owner" /> },
    { path: '/forms/projects/nadbrahma/survey', element: <StepPage name="Nadbrahma - Survey" /> },
    { path: '/forms/projects/nadbrahma/rough-layout', element: <StepPage name="Nadbrahma - Rough Layout" /> },
    { path: '/forms/vendors/electrician', element: <StepPage name="Vendor - Electrician" /> },
    { path: '/forms/vendors/plumber', element: <StepPage name="Vendor - Plumber" /> },
    { path: '/forms/vendors/tiles', element: <StepPage name="Vendor - Tiles vendor" /> },
    { path: '/forms/vendors/pop', element: <StepPage name="Vendor - POP vendor" /> },
    { path: '/forms/vendors/cctv', element: <StepPage name="Vendor - CCTV Installer" /> },
    { path: '/forms/vendors/internet', element: <StepPage name="Vendor - Internet Service Provider" /> },
    { path: '/forms/vendors/painter', element: <StepPage name="Vendor - Painter" /> },
    { path: '/forms/vendors/gas', element: <StepPage name="Vendor - Gas pipeline vendor" /> },
    { path: '/forms/vendors/ducting', element: <StepPage name="Vendor - Ducting vendor" /> },
    { path: '/forms/vendors/awing', element: <StepPage name="Vendor - Awing shed vendor" /> },
    { path: '/forms/vendors/mason', element: <StepPage name="Vendor - Mason" /> },
    { path: '/forms/vendors/board', element: <StepPage name="Vendor - Board vendor" /> },
    { path: '/forms/vendors/fabricator', element: <StepPage name="Vendor - Fabricator" /> },
    { path: '/forms/planexplanation/yewale/civil-work-working', element: <CivilWorkWorking /> },
    { path: '/forms/planexplanation/yewale/construction-form', element: <ConstructionForm /> },
    { path: '/forms/planexplanation/yewale/material-checklist', element: <MaterialChecklistForm /> },
    { path: '/forms/planexplanation/yewale/warranty-form', element: <WarrantyForm /> },
    { path: '/forms/planexplanation/yewale/revised-work-followup', element: <StepPage name="Yewale - Revised Work Followup" /> },
    { path: '/forms/planexplanation/nadbrahma/owner-material', element: <OwnerMaterialCheckForm /> },
    { path: '/forms/planexplanation/nadbrahma/warranty-period', element: <WarrantyPeriodForm /> },
    { path: '/forms/planexplanation/nadbrahma/work-steps-for', element: <WorkStepsForm /> },
    { path: '/forms/test2', element: <StepPage name="Test2" /> },
    { path: '/forms/test3', element: <StepPage name="Test3" /> },
  ]);

  console.log('FormsRoutes: Current path:', location.pathname);
  console.log('FormsRoutes: Matched route element:', routes);

  if (!routes) {
    console.log('FormsRoutes: No route matched for', location.pathname);
    return <FallbackComponent path={location.pathname} />;
  }

  return routes;
};

export default FormsRoutes;