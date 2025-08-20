import { Routes, Route } from 'react-router-dom';
import DevelopmentDashboard from '../Components/DEVELOPMENT_DASHBOARD/DevelopmentDashboard.jsx';
import OwnerMaterialChecklistForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/OwnerMaterialChecklistForm.jsx';
import WarrantyPeriodForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/WarrantyPeriodForm.jsx';
import WorkStepsForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/WorkStepsForm.jsx';
import FifteenDay from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/FifteenDay.jsx';
import MaterialChecklistForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/MaterialChecklistForm.jsx';
import WarrantyForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/WarrantyForm.jsx';
import ConstructionForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/ConstructionForm.jsx';
import CivilWorkChecklistForm from '../Components/DEVELOPMENT_DASHBOARD/CivilWorkChecklistForm/CivilWorkChecklistForm.jsx';
import InspectionChecklist from '../Components/DEVELOPMENT_DASHBOARD/InspectionChecklist/InspectionChecklist.jsx';

const DevelopmentRoutes = () => {
  return (
    <Routes>
      <Route index element={<DevelopmentDashboard />} /> {/* Default route for /development */}
      <Route path="dashboard" element={<DevelopmentDashboard />} />
      <Route path="projects" element={<DevelopmentDashboard />} />
      <Route path="engineers" element={<DevelopmentDashboard />} />
      <Route path="challenges" element={<DevelopmentDashboard />} />
      <Route path="reports" element={<DevelopmentDashboard />} />
      <Route path="settings" element={<DevelopmentDashboard />} />
      <Route path="owner-material-checklist" element={<OwnerMaterialChecklistForm />} />
      <Route path="warranty-period" element={<WarrantyPeriodForm />} />
      <Route path="work-steps" element={<WorkStepsForm />} />
      <Route path="civil-work-checklist" element={<CivilWorkChecklistForm />} />
      <Route path="material-checklist" element={<MaterialChecklistForm />} />
      <Route path="warranty" element={<WarrantyForm />} />
      <Route path="construction-form" element={<ConstructionForm />} />
      <Route path="inspection-checklist" element={<InspectionChecklist />} />
      <Route path="fifteen-day-form" element={<FifteenDay />} />
      <Route
        path="*"
        element={<div className="p-6 text-center text-red-500">404 - Page Not Found</div>}
      />
    </Routes>
  );
};

export default DevelopmentRoutes;