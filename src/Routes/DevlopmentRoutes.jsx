import { Routes, Route } from 'react-router-dom';
import DevelopmentDashboard from '../Components/DEVELOPMENT_DASHBOARD/DevelopmentDashboard.jsx';
import OwnerMaterialChecklistForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/OwnerMaterialChecklistForm.jsx';
import WarrantyPeriodForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/WarrantyPeriodForm.jsx';
import WorkStepsForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/WorkStepsForm.jsx';
import FifteenDay from '../Components/DEVELOPMENT_DASHBOARD/FifteenDay.jsx';
import MaterialChecklistForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/MaterialChecklistForm.jsx';
import WarrantyForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/WarrantyForm.jsx';
import ConstructionForm from '../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/ConstructionForm.jsx';
import InspectionChecklist from '../Components/DEVELOPMENT_DASHBOARD/InspectionChecklist/InspectionChecklist.jsx';
import CIVILWORKNOCNaadbramha from '../Components/DEVELOPMENT_DASHBOARD/CIVILWORKNOC/CIVILWORKNOCNaadbramha.jsx';
import CIVILWORKNOCYewale from '../Components/DEVELOPMENT_DASHBOARD/CIVILWORKNOC/CIVILWORKNOCYewale.jsx';
import FifteenDaysTargetFormNadbramha from '../Components/DEVELOPMENT_DASHBOARD/15DaysTargetForm/FifteenDaysTargetFormNadbramha.jsx';
import FifteenDaysTargetFormYewale from '../Components/DEVELOPMENT_DASHBOARD/15DaysTargetForm/FifteenDaysTargetFormYewale.jsx';

const DevelopmentRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route index element={<DevelopmentDashboard />} />
      <Route path="dashboard" element={<DevelopmentDashboard />} />

      {/* Nadbramha Components */}
      <Route path="nadbramha">
        <Route path="owner-material-checklist" element={<OwnerMaterialChecklistForm />} />
        <Route path="warranty-period" element={<WarrantyPeriodForm />} />
        <Route path="work-steps" element={<WorkStepsForm />} />
        <Route path="civil-work-noc" element={<CIVILWORKNOCNaadbramha />} />
        <Route path="fifteen-days-target" element={<FifteenDaysTargetFormNadbramha />} />
      </Route>

      {/* Yewale Components */}
      <Route path="yewale">
        <Route path="material-checklist-form" element={<MaterialChecklistForm />} />
        <Route path="warranty" element={<WarrantyForm />} />
        <Route path="construction-form" element={<ConstructionForm />} />
        <Route path="civil-work-noc" element={<CIVILWORKNOCYewale />} />
        <Route path="fifteen-days-target" element={<FifteenDaysTargetFormYewale />} />
      </Route>

      {/* General Components */}
      <Route path="inspection-checklist" element={<InspectionChecklist />} />
      {/* <Route path="civil-work-checklist" element={<MaterialChecklist />} /> */}
      <Route path="fifteen-day-form" element={<FifteenDay />} />
     {/* <Route path="material-checklist" element={<MaterialChecklist />} /> */}

      {/* Fallback Route */}
      <Route
        path="*"
        element={<div className="p-6 text-center text-red-500">404 - Page Not Found</div>}
      />
    </Routes>
  );
};

export default DevelopmentRoutes;