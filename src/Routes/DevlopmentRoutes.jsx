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
import CHALLENGESFORNAADBRAMHA from '../Components/DEVELOPMENT_DASHBOARD/CHALLENGESFrom/CHALLENGESFORNAADBRAMHA.jsx';
import CHALLENGESFORYewale from '../Components/DEVELOPMENT_DASHBOARD/CHALLENGESFrom/CHALLENGESFORYewale.jsx';




//---------------------------------
import AssignEngineer from '../Components/DEVELOPMENT_DASHBOARD/Pages/AssignEngineer.jsx';
import ChallengesAfterPlanExplanation from '../Components/DEVELOPMENT_DASHBOARD/Pages/ChallengesAfterPlanExplanation.jsx';
import CivilNOC from '../Components/DEVELOPMENT_DASHBOARD/Pages/CivilNOC.jsx';
import FiftiDaysVerification from '../Components/DEVELOPMENT_DASHBOARD/Pages/FiftiDaysVerification.jsx';
import Inspection from '../Components/DEVELOPMENT_DASHBOARD/Pages/Inspection.jsx';
import LayoutPreparation from  '../Components/DEVELOPMENT_DASHBOARD/Pages/LayoutPreparation.jsx';
import LeadGeneration from '../Components/DEVELOPMENT_DASHBOARD/Pages/LeadGeneration.jsx';
import MaterialCheckingVisit from '../Components/DEVELOPMENT_DASHBOARD/Pages/MaterialCheckingVisit.jsx';
import MaterialOrderForDispatch from '../Components/DEVELOPMENT_DASHBOARD/Pages/MaterialOrderForDispatch.jsx';
import MonthlySitesOpeningReport from '../Components/DEVELOPMENT_DASHBOARD/Pages/MonthlySitesOpeningReport.jsx';
import NOCVerification from '../Components/DEVELOPMENT_DASHBOARD/Pages/NOCVerification.jsx';
import OngoingChallengesAfterSurvey from '../Components/DEVELOPMENT_DASHBOARD/Pages/OngoingChallengesAfterSurvey.jsx';
import OpeningDate from '../Components/DEVELOPMENT_DASHBOARD/Pages/OpeningDate.jsx';
import OpeningVisitVerification from '../Components/DEVELOPMENT_DASHBOARD/Pages/OpeningVisitVerification.jsx';
import PendingFollowup from '../Components/DEVELOPMENT_DASHBOARD/Pages/PendingFollowup.jsx';
import PlanExplanation from '../Components/DEVELOPMENT_DASHBOARD/Pages/PlanExplanation.jsx';
import QuotationShow from '../Components/DEVELOPMENT_DASHBOARD/Pages/QuotationShow.jsx';
import SurveyQuotation from '../Components/DEVELOPMENT_DASHBOARD/Pages/SurveyQuotation.jsx';




const DevelopmentRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route index element={<DevelopmentDashboard />} />
      <Route path="dashboard" element={<DevelopmentDashboard />} />

      {/* Main Pages */}
      <Route path="leadgeneration" element={<LeadGeneration />} />
      <Route path="assignengineer" element={<AssignEngineer />} />
      <Route path="surveyquotation" element={<SurveyQuotation />} />
      <Route path="ongoingchallengesaftersurvey" element={<OngoingChallengesAfterSurvey />} />
      <Route path="quotationonlyshow" element={<QuotationShow />} />
      <Route path="layoutpreparation" element={<LayoutPreparation />} />
      <Route path="planexplanation" element={<PlanExplanation />} />
      <Route path="challengesafterplanexplanation" element={<ChallengesAfterPlanExplanation />} />
      <Route path="fifteendaysverification" element={<FiftiDaysVerification />} />
      <Route path="inspection" element={<Inspection />} />
      <Route path="civilnoc" element={<CivilNOC />} />
      <Route path="materialorderfordispatch" element={<MaterialOrderForDispatch />} />
      <Route path="materialcheckingvisitinspection" element={<MaterialCheckingVisit />} />
      <Route path="pendingfollowup" element={<PendingFollowup />} />
      <Route path="nocverification" element={<NOCVerification />} />
      <Route path="openingdate" element={<OpeningDate />} />
      <Route path="openingvisitverification" element={<OpeningVisitVerification />} />
      <Route path="monthlysitesopeningreport" element={<MonthlySitesOpeningReport />} />

      {/* Nadbramha Components */}
      <Route path="nadbramha">
        <Route path="owner-material-checklist" element={<OwnerMaterialChecklistForm />} />
        <Route path="warranty-period" element={<WarrantyPeriodForm />} />
        <Route path="work-steps" element={<WorkStepsForm />} />
        <Route path="civil-work-noc" element={<CIVILWORKNOCNaadbramha />} />
        <Route path="fifteen-days-target" element={<FifteenDaysTargetFormNadbramha />} />
          <Route path="challengesfornaadbram" element={<CHALLENGESFORNAADBRAMHA />} />
      </Route>

      {/* Yewale Components */}
      <Route path="yewale">
        <Route path="material-checklist-form" element={<MaterialChecklistForm />} />
        <Route path="warranty" element={<WarrantyForm />} />
        <Route path="construction-form" element={<ConstructionForm />} />
        <Route path="civil-work-noc" element={<CIVILWORKNOCYewale />} />
        <Route path="fifteen-days-target" element={<FifteenDaysTargetFormYewale />} />
        <Route path="challengesforyewale" element={<CHALLENGESFORYewale />} />
      </Route>

      {/* General Components */}
      <Route path="inspection-checklist" element={<InspectionChecklist />} />
      <Route path="fifteen-day-form" element={<FifteenDay />} />

      {/* Fallback Route */}
      <Route
        path="*"
        element={<div className="p-6 text-center text-red-500">404 - Page Not Found</div>}
      />
    </Routes>
  );
};

export default DevelopmentRoutes;