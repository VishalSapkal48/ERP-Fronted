import { Routes, Route } from "react-router-dom";
import DevelopmentDashboard from "../Components/DEVELOPMENT_DASHBOARD/DevelopmentDashboard.jsx";
import OwnerMaterialChecklistForm from "../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/OwnerMaterialChecklistForm.jsx";
import WarrantyPeriodForm from "../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/WarrantyPeriodForm.jsx";
import WorkStepsForm from "../Components/DEVELOPMENT_DASHBOARD/planexplanation/nadbramhacomponents/WorkStepsForm.jsx";
import FifteenDay from "../Components/DEVELOPMENT_DASHBOARD/FifteenDay.jsx";
import MaterialChecklistForm from "../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/MaterialChecklistForm.jsx";
import WarrantyForm from "../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/WarrantyForm.jsx";
import ConstructionForm from "../Components/DEVELOPMENT_DASHBOARD/planexplanation/yewalecomponents/ConstructionForm.jsx";
import InspectionChecklist from "../Components/DEVELOPMENT_DASHBOARD/InspectionChecklist/InspectionChecklist.jsx";
import CIVILWORKNOCNaadbramha from "../Components/DEVELOPMENT_DASHBOARD/CIVILWORKNOC/CIVILWORKNOCNaadbramha.jsx";
import CIVILWORKNOCYewale from "../Components/DEVELOPMENT_DASHBOARD/CIVILWORKNOC/CIVILWORKNOCYewale.jsx";
import FifteenDaysTargetFormNadbramha from "../Components/DEVELOPMENT_DASHBOARD/15DaysTargetForm/FifteenDaysTargetFormNadbramha.jsx";
import FifteenDaysTargetFormYewale from "../Components/DEVELOPMENT_DASHBOARD/15DaysTargetForm/FifteenDaysTargetFormYewale.jsx";
import CHALLENGESFORNAADBRAMHA from "../Components/DEVELOPMENT_DASHBOARD/CHALLENGESFrom/CHALLENGESFORNAADBRAMHA.jsx";
import CHALLENGESFORYewale from "../Components/DEVELOPMENT_DASHBOARD/CHALLENGESFrom/CHALLENGESFORYewale.jsx";

// Main Pages
import AssignEngineer from "../Components/DEVELOPMENT_DASHBOARD/Pages/AssignEngineer.jsx";
import ChallengesAfterPlanExplanation from "../Components/DEVELOPMENT_DASHBOARD/Pages/ChallengesAfterPlanExplanation.jsx";
import CivilNOC from "../Components/DEVELOPMENT_DASHBOARD/Pages/CivilNOC.jsx";
import FiftiDaysVerification from "../Components/DEVELOPMENT_DASHBOARD/Pages/FiftiDaysVerification.jsx";
import Inspection from "../Components/DEVELOPMENT_DASHBOARD/Pages/Inspection.jsx";
import LayoutPreparation from "../Components/DEVELOPMENT_DASHBOARD/Pages/LayoutPreparation.jsx";
import LeadGeneration from "../Components/DEVELOPMENT_DASHBOARD/Pages/LeadGeneration.jsx";
import MaterialCheckingVisit from "../Components/DEVELOPMENT_DASHBOARD/Pages/MaterialCheckingVisit.jsx";
import MaterialOrderForDispatch from "../Components/DEVELOPMENT_DASHBOARD/Pages/MaterialOrderForDispatch.jsx";
import MonthlySitesOpeningReport from "../Components/DEVELOPMENT_DASHBOARD/Pages/MonthlySitesOpeningReport.jsx";
import NOCVerification from "../Components/DEVELOPMENT_DASHBOARD/Pages/NOCVerification.jsx";
import OngoingChallengesAfterSurvey from "../Components/DEVELOPMENT_DASHBOARD/Pages/OngoingChallengesAfterSurvey.jsx";
import OpeningDate from "../Components/DEVELOPMENT_DASHBOARD/Pages/OpeningDate.jsx";
import OpeningVisitVerification from "../Components/DEVELOPMENT_DASHBOARD/Pages/OpeningVisitVerification.jsx";
import PendingFollowup from "../Components/DEVELOPMENT_DASHBOARD/Pages/PendingFollowup.jsx";
import PlanExplanation from "../Components/DEVELOPMENT_DASHBOARD/Pages/PlanExplanation.jsx";
import QuotationShow from "../Components/DEVELOPMENT_DASHBOARD/Pages/QuotationShow.jsx";
import SurveyQuotation from "../Components/DEVELOPMENT_DASHBOARD/Pages/SurveyQuotation.jsx";

// Additional Components
import MaterialDispatchNb from "../Components/DEVELOPMENT_DASHBOARD/PLANNINGFORMATERIALDISPATCH/MaterialDispatchNB.jsx";
import MaterialDispatchYw from "../Components/DEVELOPMENT_DASHBOARD/PLANNINGFORMATERIALDISPATCH/MaterialDispatchYewale.jsx";
import RoughLayout from "../Components/DEVELOPMENT_DASHBOARD/Roughlayout/Roughlayout.jsx";
import PrePlanExplanationScript from "../Components/DEVELOPMENT_DASHBOARD/PREPLANEXPLAINSCRIPT/PrePlanExplinaationScript.jsx";
import AWINGSHED from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/AWINGSHED.jsx";
import BoardWork from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/BoardWork.jsx";
import BRICKWORK from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/BRICKWORK.jsx";
import CCTVWORK from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/CCTVWORK.jsx";
import DemolitionLabor from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/DemolitionLabor.jsx";
import DUCTINGWORK from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/DUCTINGWORK.jsx";
import ElectricalWorkProcess from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/ElectricalWorkProcess.jsx";
import GASPIPELINEWORK from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/GASPIPELINEWORK.jsx";
import INTERNETWORK from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/INTERNETWORK.jsx";
import LoftChecklist from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/LoftChecklist.jsx";
import MaterialUnloading from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/MaterialUnloading.jsx";
import Painting from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/Painting.jsx";
import PlumbingWorkProcess from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/PlumbingWorkProcess.jsx";
import POPVendor from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/POPVendor.jsx";
import SHUTTERLOGOWORK from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/SHUTTERLOGOWORK.jsx";
import TilesWorkVendor from "../Components/DEVELOPMENT_DASHBOARD/VendoreForm/TilesWorkVendor.jsx";
import OpeningVisitNaadBramha from "../Components/DEVELOPMENT_DASHBOARD/OpningVites/NaadBramhaDemoChecklist.jsx";
import OpeningVisitYewale from "../Components/DEVELOPMENT_DASHBOARD/OpningVites/YewaleDemoChecklist.jsx";
import InspectionVisiteList from "../Components/DEVELOPMENT_DASHBOARD/InspectionVisiteList/InspectionVisiteList.jsx";
import ShopSetupChecklist from "../Components/DEVELOPMENT_DASHBOARD/ShopSetupChecklistForm/ShopSetupChecklistForm.jsx";
import OnlineSurveyForm from "../Components/DEVELOPMENT_DASHBOARD/OnlineSurveyForm/OnlineSurveyForm.jsx";


import OfflineSurveyInput from '../Components/DEVELOPMENT_DASHBOARD/surveyinputesforowner/OfflineSurveyInput.jsx';
import OnlineSurveyInput from '../Components/DEVELOPMENT_DASHBOARD/surveyinputesforowner/OnlineSurveyInput.jsx';




import LetterOFUnderTakingBoardWorks from '../Components/DEVELOPMENT_DASHBOARD/LetterOffUnderTaking/BoardWorks.jsx';
import LetterOFUnderTakingCameraSetForm from '../Components/DEVELOPMENT_DASHBOARD/LetterOffUnderTaking/CameraSetForm.jsx';
import LetterOFUnderTakingCivilWorkFormnb from '../Components/DEVELOPMENT_DASHBOARD/LetterOffUnderTaking/CivilWorkFormnb.jsx';
import LetterOFUnderTakingCivilWorkFormyewale from '../Components/DEVELOPMENT_DASHBOARD/LetterOffUnderTaking/CivilWorkFormyewale.jsx';;
import LetterOFUnderTakingElectricalWork from '../Components/DEVELOPMENT_DASHBOARD/LetterOffUnderTaking/ElectricalWork.jsx';
import LetterOFUnderTakingEquipmentsWork from '../Components/DEVELOPMENT_DASHBOARD/LetterOffUnderTaking/EquipmentsWork.jsx';
import LetterofUndertakingNB from '../Components/DEVELOPMENT_DASHBOARD/LetterOffUnderTaking/LetterofUndertakingNB.jsx';



const DevelopmentRoutes = () => {
  return (
    <Routes>

      {/* Dashboard Routes */}
      <Route index element={<DevelopmentDashboard />} />
      <Route path="dashboard" element={<DevelopmentDashboard />} />

      {/* Main Pages */}
      <Route path="leadgeneration" element={<LeadGeneration />} />
      <Route path="assignengineer" element={<AssignEngineer />} />
      <Route path="surveyquotation/pre-survey" element={<ShopSetupChecklist />} />
      
         <Route path="surveyquotation/offline-survey-input" element={<OfflineSurveyInput />} />
         <Route path="surveyquotation/online-survey-input" element={<OnlineSurveyInput />} />


      <Route path="surveyquotation/survey" element={<OnlineSurveyForm />} />
      <Route path="surveyquotation/rough-layout" element={<RoughLayout />} />
      <Route path="surveyquotation/discussion-on-challenges" element={<ChallengesAfterPlanExplanation />} />
      <Route path="ongoingchallengesaftersurvey" element={<OngoingChallengesAfterSurvey />} />
      <Route path="quotationonlyshow" element={<QuotationShow />} />
      <Route path="layoutpreparation" element={<LayoutPreparation />} />
      <Route path="planexplanation" element={<PlanExplanation />} />
      <Route path="planexplanation/layout-preparation" element={<LayoutPreparation />} />
      <Route path="planexplanation/pre-plan-explain-script" element={<PrePlanExplanationScript />} />
      <Route path="planexplanation/challenges-after-plan-explain" element={<ChallengesAfterPlanExplanation />} />
      <Route path="fifteendaysverification" element={<FiftiDaysVerification />} />
      <Route path="inspection/inspection" element={<InspectionVisiteList />} />
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
        <Route index element={<QuotationShow />} /> {/* Default route for /nadbramha */}
        <Route path="owner-material-checklist" element={<OwnerMaterialChecklistForm />} />
        <Route path="warranty-period" element={<WarrantyPeriodForm />} />
        <Route path="work-steps" element={<WorkStepsForm />} />
        <Route path="civil-work-noc" element={<CIVILWORKNOCNaadbramha />} />
        <Route path="fifteen-days-target" element={<FifteenDaysTargetFormNadbramha />} />
        <Route path="challengesfornaadbram" element={<CHALLENGESFORNAADBRAMHA />} />
        <Route path="materialdispatchnadhbarma" element={<MaterialDispatchNb />} />
        <Route path="openingvisitnaadbramha" element={<OpeningVisitNaadBramha />} />
      </Route>

      {/* Yewale Components */}
      <Route path="yewale">
        <Route index element={<QuotationShow />} /> {/* Default route for /yewale */}
        <Route path="material-checklist-form" element={<MaterialChecklistForm />} />
        <Route path="warranty" element={<WarrantyForm />} />
        <Route path="construction-form" element={<ConstructionForm />} />
        <Route path="civil-work-noc" element={<CIVILWORKNOCYewale />} />
        <Route path="fifteen-days-target" element={<FifteenDaysTargetFormYewale />} />
        <Route path="challengesforyewale" element={<CHALLENGESFORYewale />} />
        <Route path="materialdispatchyewale" element={<MaterialDispatchYw />} />
        <Route path="openingvisityewale" element={<OpeningVisitYewale />} />
      </Route>

      {/* Vendor Forms */}
      <Route path="vendor">
        <Route path="awning-shed" element={<AWINGSHED />} />
        <Route path="board-work" element={<BoardWork />} />
        <Route path="brick-work" element={<BRICKWORK />} />
        <Route path="cctv-work" element={<CCTVWORK />} />
        <Route path="demolition-labor" element={<DemolitionLabor />} />
        <Route path="ducting-work" element={<DUCTINGWORK />} />
        <Route path="electrical-work" element={<ElectricalWorkProcess />} />
        <Route path="gas-pipeline-work" element={<GASPIPELINEWORK />} />
        <Route path="internet-work" element={<INTERNETWORK />} />
        <Route path="loft-checklist" element={<LoftChecklist />} />
        <Route path="material-unloading" element={<MaterialUnloading />} />
        <Route path="painting" element={<Painting />} />
        <Route path="plumbing-work" element={<PlumbingWorkProcess />} />
        <Route path="pop-vendor" element={<POPVendor />} />
        <Route path="shutter-logo-work" element={<SHUTTERLOGOWORK />} />
        <Route path="tiles-work" element={<TilesWorkVendor />} />
      </Route>

      {/* General Components */}
      <Route path="inspection-checklist" element={<InspectionChecklist />} />
      <Route path="fifteen-day-form" element={<FifteenDay />} />

      {/* Departmental Work */}
      <Route path="departmentalwork/civil-work-quotation" element={<CivilNOC />} />
      <Route path="departmentalwork/ynk-material-list" element={<MaterialOrderForDispatch />} />
      <Route path="departmentalwork/agreement" element={<QuotationShow />} />
      <Route path="departmentalwork/letter-of-undertaking" element={<QuotationShow />} />


       {/* Letter of Undertaking Routes */}
       <Route path="letterofundertaking">
        <Route path="board-works" element={<LetterOFUnderTakingBoardWorks />} />
        <Route path="camera-set" element={<LetterOFUnderTakingCameraSetForm />} />
        <Route path="nadbramha/civil-work-nb" element={<LetterOFUnderTakingCivilWorkFormnb />} />
        <Route path="yewale/civil-work-yewale" element={<LetterOFUnderTakingCivilWorkFormyewale />} />
        <Route path="electrical-work" element={<LetterOFUnderTakingElectricalWork />} />
        <Route path="equipments-work" element={<LetterOFUnderTakingEquipmentsWork />} />
        <Route path="nadbramha/letter-of-undertaking-nb" element={<LetterofUndertakingNB />} />
      </Route>








      {/* Fallback Route */}
      <Route
        path="*"
        element={<div className="p-6 text-center text-red-500">404 - Page Not Found</div>}
      />
    </Routes>
  );
};

export default DevelopmentRoutes;