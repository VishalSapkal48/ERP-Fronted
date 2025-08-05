import { useRoutes } from 'react-router-dom';
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
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      console.error('Error in component:', this.state.error);
      return (
        <div className="p-4 text-red-500">
          <h2>Error Rendering Component</h2>
          <p>{this.state.error?.message || 'An unexpected error occurred.'}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Fallback Component
const FallbackComponent = ({ path }) => (
  <div className="p-4 text-gray-600">
    <h2>No Data Available</h2>
    <p>Route: {path}</p>
    <p>Check the component implementation or data source.</p>
  </div>
);

// Dummy component for steps
const StepPage = ({ name }) => {
  console.log(`Rendering StepPage: ${name}`);
  return <div style={{ padding: 32, fontSize: 24 }}>{name}</div>;
};

const FromsRoutes = () => {
  const location = useLocation();
  const routes = useRoutes([
    { path: '/', element: <ErrorBoundary><ERPDashboard /></ErrorBoundary> },
    { path: 'dashboard', element: <ErrorBoundary><ERPDashboard /></ErrorBoundary> },
    { path: 'calendar', element: <ErrorBoundary><CustomCalendar /></ErrorBoundary> },
    { path: 'navbar', element: <ErrorBoundary><Navbar /></ErrorBoundary> },
    { path: 'projects', element: <ErrorBoundary><ProjectsPage /></ErrorBoundary> },

    // Yewale Feedback Forms (CALL 1-9)
    { path: 'yewalecomponents/call1folder1', element: <ErrorBoundary><YewaleCALL1 /></ErrorBoundary> },
    { path: 'yewalecomponents/call2folder2', element: <ErrorBoundary><YewaleCALL2 /></ErrorBoundary> },
    { path: 'yewalecomponents/call3folder3', element: <ErrorBoundary><YewaleCALL3 /></ErrorBoundary> },
    { path: 'yewalecomponents/call4folder4', element: <ErrorBoundary><YewaleCALL4 /></ErrorBoundary> },
    { path: 'yewalecomponents/call5folder5', element: <ErrorBoundary><YewaleCALL5 /></ErrorBoundary> },
    { path: 'yewalecomponents/call6folder6', element: <ErrorBoundary><YewaleCALL6 /></ErrorBoundary> },
    { path: 'yewalecomponents/call7folder7', element: <ErrorBoundary><YewaleCALL7 /></ErrorBoundary> },
    { path: 'yewalecomponents/call8folder8', element: <ErrorBoundary><YewaleCALL8 /></ErrorBoundary> },
    { path: 'yewalecomponents/call9folder9', element: <ErrorBoundary><YewaleCALL9 /></ErrorBoundary> },

    // Nadbrahma Feedback Forms (CALL 1-6)
    { path: 'nadbrahmacomponents/call1folder1', element: <ErrorBoundary><NadCALL1 /></ErrorBoundary> },
    { path: 'nadbrahmacomponents/call2folder2', element: <ErrorBoundary><NadCALL2 /></ErrorBoundary> },
    { path: 'nadbrahmacomponents/call3folder3', element: <ErrorBoundary><NadCALL3 /></ErrorBoundary> },
    { path: 'nadbrahmacomponents/call4folder4', element: <ErrorBoundary><NadCALL4 /></ErrorBoundary> },
    { path: 'nadbrahmacomponents/call5folder5', element: <ErrorBoundary><NadCALL5 /></ErrorBoundary> },
    { path: 'nadbrahmacomponents/call6folder6', element: <ErrorBoundary><NadCALL6 /></ErrorBoundary> },

    // LetterOfUndertaking Forms
    { path: 'LetterOfUndertaking/BoardWorksForm', element: <ErrorBoundary><BoardWorksForm /></ErrorBoundary> },
    { path: 'LetterOfUndertaking/CameraSetForm', element: <ErrorBoundary><CameraSetForm /></ErrorBoundary> },
    { path: 'LetterOfUndertaking/ElectricalWorksForm', element: <ErrorBoundary><ElectricalWorksForm /></ErrorBoundary> },
    { path: 'LetterOfUndertaking/LetterOfUndertakingForm', element: <ErrorBoundary><LetterOfUndertakingForm /></ErrorBoundary> },
    { path: 'LetterOfUndertaking/SteelEquipmentForm', element: <ErrorBoundary><SteelEquipmentForm /></ErrorBoundary> },

    // Yewale Steps
    { path: 'projects/yewale/terms-and-condition', element: <ErrorBoundary><TermsandCondition /></ErrorBoundary> },
    { path: 'projects/yewale/pre-survey-script', element: <ErrorBoundary><ProjectWorkFollowup /></ErrorBoundary> },
    { path: 'projects/yewale/civil-work-checklist-form', element: <ErrorBoundary><CivilWorkChecklistForm /></ErrorBoundary> },
    { path: 'projects/yewale/internal-department-working', element: <ErrorBoundary><InternalDepartmentWorking /></ErrorBoundary> },
    { path: 'projects/yewale/inspection-checklist', element: <ErrorBoundary><InspectionChecklist /></ErrorBoundary> },
    { path: 'projects/yewale/material-checklist', element: <ErrorBoundary><MaterialChecklist /></ErrorBoundary> },
    { path: 'projects/yewale/shop-setup-checklist', element: <ErrorBoundary><ShopSetupChecklistForm /></ErrorBoundary> },
    { path: 'projects/yewale/project-work-followup', element: <ErrorBoundary><OnlineSurveyForm /></ErrorBoundary> },
    { path: 'projects/yewale/survey-inputs', element: <ErrorBoundary><StepPage name="Yewale - Survey Inputs for Owner" /></ErrorBoundary> },
    { path: 'projects/yewale/survey', element: <ErrorBoundary><StepPage name="Yewale - Survey" /></ErrorBoundary> },
    { path: 'projects/yewale/rough-layout', element: <ErrorBoundary><StepPage name="Yewale - Rough Layout" /></ErrorBoundary> },

    // Nadbrahma Steps
    { path: 'projects/nadbrahma/terms-and-condition', element: <ErrorBoundary><TermsandCondition /></ErrorBoundary> },
    { path: 'projects/nadbrahma/pre-survey-script', element: <ErrorBoundary><ProjectWorkFollowup /></ErrorBoundary> },
    { path: 'projects/nadbrahma/civil-work-checklist-form', element: <ErrorBoundary><CivilWorkChecklistForm /></ErrorBoundary> },
    { path: 'projects/nadbrahma/internal-department-working', element: <ErrorBoundary><InternalDepartmentWorking /></ErrorBoundary> },
    { path: 'projects/nadbrahma/inspection-checklist', element: <ErrorBoundary><InspectionChecklist /></ErrorBoundary> },
    { path: 'projects/nadbrahma/material-checklist', element: <ErrorBoundary><MaterialChecklist /></ErrorBoundary> },
    { path: 'projects/nadbrahma/shop-setup-checklist', element: <ErrorBoundary><ShopSetupChecklistForm /></ErrorBoundary> },
    { path: 'projects/nadbrahma/project-work-followup', element: <ErrorBoundary><OnlineSurveyForm /></ErrorBoundary> },
    { path: 'projects/nadbrahma/survey-inputs', element: <ErrorBoundary><StepPage name="Nadbrahma - Survey Inputs for Owner" /></ErrorBoundary> },
    { path: 'projects/nadbrahma/survey', element: <ErrorBoundary><StepPage name="Nadbrahma - Survey" /></ErrorBoundary> },
    { path: 'projects/nadbrahma/rough-layout', element: <ErrorBoundary><StepPage name="Nadbrahma - Rough Layout" /></ErrorBoundary> },

    // Vendors
    { path: 'vendors/electrician', element: <ErrorBoundary><StepPage name="Vendor - Electrician" /></ErrorBoundary> },
    { path: 'vendors/plumber', element: <ErrorBoundary><StepPage name="Vendor - Plumber" /></ErrorBoundary> },
    { path: 'vendors/tiles', element: <ErrorBoundary><StepPage name="Vendor - Tiles vendor" /></ErrorBoundary> },
    { path: 'vendors/pop', element: <ErrorBoundary><StepPage name="Vendor - POP vendor" /></ErrorBoundary> },
    { path: 'vendors/cctv', element: <ErrorBoundary><StepPage name="Vendor - CCTV Installer" /></ErrorBoundary> },
    { path: 'vendors/internet', element: <ErrorBoundary><StepPage name="Vendor - Internet Service Provider" /></ErrorBoundary> },
    { path: 'vendors/painter', element: <ErrorBoundary><StepPage name="Vendor - Painter" /></ErrorBoundary> },
    { path: 'vendors/gas', element: <ErrorBoundary><StepPage name="Vendor - Gas pipeline vendor" /></ErrorBoundary> },
    { path: 'vendors/ducting', element: <ErrorBoundary><StepPage name="Vendor - Ducting vendor" /></ErrorBoundary> },
    { path: 'vendors/awing', element: <ErrorBoundary><StepPage name="Vendor - Awing shed vendor" /></ErrorBoundary> },
    { path: 'vendors/mason', element: <ErrorBoundary><StepPage name="Vendor - Mason" /></ErrorBoundary> },
    { path: 'vendors/board', element: <ErrorBoundary><StepPage name="Vendor - Board vendor" /></ErrorBoundary> },
    { path: 'vendors/fabricator', element: <ErrorBoundary><StepPage name="Vendor - Fabricator" /></ErrorBoundary> },

    // Plan Explanation - Yewale
    { path: 'planexplanation/yewale/civil-work-working', element: <ErrorBoundary><CivilWorkWorking /></ErrorBoundary> },
    { path: 'planexplanation/yewale/construction-form', element: <ErrorBoundary><ConstructionForm /></ErrorBoundary> },
    { path: 'planexplanation/yewale/material-checklist', element: <ErrorBoundary><MaterialChecklistForm /></ErrorBoundary> },
    { path: 'planexplanation/yewale/warranty-form', element: <ErrorBoundary><WarrantyForm /></ErrorBoundary> },
    { path: 'planexplanation/yewale/revised-work-followup', element: <ErrorBoundary><StepPage name="Yewale - Revised Work Followup" /></ErrorBoundary> },

    // Plan Explanation - Nadbrahma
    { path: 'planexplanation/nadbrahma/owner-material', element: <ErrorBoundary><OwnerMaterialCheckForm /></ErrorBoundary> },
    { path: 'planexplanation/nadbrahma/warranty-period', element: <ErrorBoundary><WarrantyPeriodForm /></ErrorBoundary> },
    { path: 'planexplanation/nadbrahma/work-steps-for', element: <ErrorBoundary><WorkStepsForm /></ErrorBoundary> },

    // Test pages
    { path: 'test2', element: <ErrorBoundary><StepPage name="Test2" /></ErrorBoundary> },
    { path: 'test3', element: <ErrorBoundary><StepPage name="Test3" /></ErrorBoundary> },
  ]);

  console.log('Rendering FromsRoutes for path:', location.pathname, 'Routes:', routes);

  if (!routes) {
    return <FallbackComponent path={location.pathname} />;
  }

  return routes;
};

export default FromsRoutes;