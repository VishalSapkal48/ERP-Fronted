import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../../public/Images/BoardWorksListForm/logo.png';
import {
  FaHome,
  FaFolder,
  FaFlask,
  FaBolt,
  FaMicroscope,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
  FaBuilding,
  FaUserTie,
  FaFileContract,
  FaClipboardList,
  FaCamera,
  FaPlug,
  FaTools,
} from 'react-icons/fa';

// Translations object (Yewale + Nadbrahma + LetterOfUndertaking + PlanExplanation)
const translations = {
  mr: {
    yewaleTitle: 'येवले प्रोजेक्ट',
    nadbrahmaTitle: 'नादब्रह्म प्रोजेक्ट',
    yewaleFeedback: 'येवले फीडबॅक',
    nadbrahmaFeedback: 'नादब्रह्म फीडबॅक',
    switchLang: 'English',
    switchAria: 'Switch to English',
    terms: 'अटी व शर्ती',
    preSurvey: 'पूर्व-सर्वे स्क्रिप्ट',
    civilWork: 'सिव्हिल वर्क चेकलिस्ट',
    internalDept: 'आंतरिक विभाग कार्य',
    inspection: 'तपासणी चेकलिस्ट',
    material: 'साहित्य चेकलिस्ट',
    shopSetup: 'दुकान सेटअप चेकलिस्ट',
    projectFollowup: 'प्रोजेक्ट वर्क फॉलोअप',
    surveyInputs: 'मालकासाठी सर्वे इनपुट्स',
    survey: 'सर्वे',
    roughLayout: 'रफ लेआउट',
    agreementFeedback: 'अ‍ॅग्रीमेंट फीडबॅक',
    agreementFeedbackDesc: 'CALL 1 साठी फीडबॅक फॉर्म',
    civilWorkFeedback: 'सिव्हिल वर्क फीडबॅक',
    civilWorkFeedbackDesc: 'CALL 2 साठी फीडबॅक फॉर्म',
    setupFeedback: 'सेट-अप फीडबॅक',
    setupFeedbackDesc: 'CALL 3 साठी फीडबॅक फॉर्म',
    finalDemoFeedback: 'अंतिम/डेमो फीडबॅक',
    finalDemoFeedbackDesc: 'CALL 4 साठी फीडबॅक फॉर्म',
    oneMonthFeedback: 'एक महिन्यानंतर फीडबॅक',
    oneMonthFeedbackDesc: 'CALL 5 साठी फीडबॅक फॉर्म',
    oneMonthFeedback2: 'एका महिन्याचा अभिप्राय येवले',
    oneMonthFeedback2Desc: 'CALL 6 साठी फीडबॅक फॉर्म',
    oneMonthFeedback7: 'सातव्या कॉलचा अभिप्राय',
    oneMonthFeedback7Desc: 'CALL 7 साठी फीडबॅक फॉर्म',
    oneMonthFeedback8: 'आठव्या कॉलचा अभिप्राय',
    oneMonthFeedback8Desc: 'CALL 8 साठी फीडबॅक फॉर्म',
    oneMonthFeedback9: 'कोटेशन प्रश्नांसाठी अभिप्राय फॉर्म',
    oneMonthFeedback9Desc: 'CALL 9 साठी फीडबॅक फॉर्म',
    agreementFeedbackN: 'करार अभिप्राय',
    agreementFeedbackDescN: 'CALL 1 साठी अभिप्राय फॉर्म',
    planExplanationFeedback: 'योजना स्पष्टीकरण अभिप्राय',
    planExplanationFeedbackDesc: 'CALL 2 साठी अभिप्राय फॉर्म',
    inspectionFeedback: 'तपासणी अभिप्राय',
    inspectionFeedbackDesc: 'CALL 3 साठी अभिप्राय फॉर्म',
    setupFeedbackN: 'सेट-अप अभिप्राय',
    setupFeedbackDescN: 'CALL 4 साठी अभिप्राय फॉर्म',
    openingFeedback: 'उद्घाटन अभिप्राय',
    openingFeedbackDesc: 'CALL 5 साठी अभिप्राय फॉर्म',
    oneMonthFeedbackN: 'एक महिन्याचा अभिप्राय',
    oneMonthFeedbackDescN: 'CALL 6 साठी अभिप्राय फॉर्म',
    letterOfUndertaking: 'लेटर ऑफ अंडरटेकिंग',
    boardWorks: 'बोर्ड वर्क्स फॉर्म',
    cameraSet: 'कॅमेरा सेट फॉर्म',
    electricalWorks: 'इलेक्ट्रिकल वर्क्स फॉर्म',
    letterOfUndertakingForm: 'लेटर ऑफ अंडरटेकिंग फॉर्म',
    steelEquipment: 'स्टील इक्विपमेंट फॉर्म',
    planExplanationTitle: 'प्लॅन एक्सप्लेनेशन',
    yewalePlanExplanation: 'येवले प्लॅन एक्सप्लेनेशन',
    nadbrahmaPlanExplanation: 'नादब्रह्म प्लॅन एक्सप्लेनेशन',
    civilWorkWorking: 'सिव्हिल वर्क वर्किंग',
    constructionForm: 'कन्स्ट्रक्शन फॉर्म',
    materialChecklistPlanEx: 'मटेरिअल चेकलिस्ट',
    warrantyFormPlanEx: 'वॉरंटी फॉर्म',
    revisedWorkFollowup: 'पुनरावृत्त वर्क फॉलोअप',
    ownerMaterial: 'मालक मटेरिअल',
    warrantyPeriod: 'वॉरंटी कालावधी',
    workStepsFor: 'कामाचे टप्पे',
  },
  en: {
    yewaleTitle: 'Yewale Project',
    nadbrahmaTitle: 'Nadbrahma Project',
    yewaleFeedback: 'Yewale Feedback',
    nadbrahmaFeedback: 'Nadbrahma Feedback',
    switchLang: 'मराठी',
    switchAria: 'Switch to Marathi',
    terms: 'Terms & Condition',
    preSurvey: 'Pre-survey Script',
    civilWork: 'Civil Work Checklist',
    internalDept: 'Internal Department Working',
    inspection: 'Inspection Checklist',
    material: 'Material Checklist',
    shopSetup: 'Shop Setup Checklist',
    projectFollowup: 'Project Work Followup',
    surveyInputs: 'Survey Inputs for Owner',
    survey: 'Survey',
    roughLayout: 'Rough Layout',
    agreementFeedback: 'Agreement Feedback',
    agreementFeedbackDesc: 'Feedback form for CALL 1',
    civilWorkFeedback: 'Civil Work Feedback',
    civilWorkFeedbackDesc: 'Feedback form for CALL 2',
    setupFeedback: 'Set-up Feedback',
    setupFeedbackDesc: 'Feedback form for CALL 3',
    finalDemoFeedback: 'Final/Demo Feedback',
    finalDemoFeedbackDesc: 'Feedback form for CALL 4',
    oneMonthFeedback: 'One Month Feedback',
    oneMonthFeedbackDesc: 'Feedback form for CALL 5',
    oneMonthFeedback2: 'One Month Feedback Yewale',
    oneMonthFeedback2Desc: 'Feedback form for CALL 6',
    oneMonthFeedback7: 'Seventh Call Feedback',
    oneMonthFeedback7Desc: 'Feedback form for CALL 7',
    oneMonthFeedback8: 'Eighth Call Feedback',
    oneMonthFeedback8Desc: 'Feedback form for CALL 8',
    oneMonthFeedback9: 'Quotation queries feedback form',
    oneMonthFeedback9Desc: 'Feedback form for CALL 9',
    agreementFeedbackN: 'Agreement Feedback',
    agreementFeedbackDescN: 'Feedback form for CALL 1',
    planExplanationFeedback: 'Plan Explanation Feedback',
    planExplanationFeedbackDesc: 'Feedback form for CALL 2',
    inspectionFeedback: 'Inspection Feedback',
    inspectionFeedbackDesc: 'Feedback form for CALL 3',
    setupFeedbackN: 'Set-up Feedback',
    setupFeedbackDescN: 'Feedback form for CALL 4',
    openingFeedback: 'Opening Feedback',
    openingFeedbackDesc: 'Feedback form for CALL 5',
    oneMonthFeedbackN: 'One Month Feedback',
    oneMonthFeedbackDescN: 'Feedback form for CALL 6',
    letterOfUndertaking: 'Letter Of Undertaking',
    boardWorks: 'Board Works Form',
    cameraSet: 'Camera Set Form',
    electricalWorks: 'Electrical Works Form',
    letterOfUndertakingForm: 'Letter Of Undertaking Form',
    steelEquipment: 'Steel Equipment Form',
    planExplanationTitle: 'Plan Explanation',
    yewalePlanExplanation: 'Yewale Plan Explanation',
    nadbrahmaPlanExplanation: 'Nadbrahma Plan Explanation',
    civilWorkWorking: 'Civil Work Working',
    constructionForm: 'Construction Form',
    materialChecklistPlanEx: 'Material Checklist',
    warrantyFormPlanEx: 'Warranty Form',
    revisedWorkFollowup: 'Revised Work Followup',
    ownerMaterial: 'Owner Material',
    warrantyPeriod: 'Warranty Period',
    workStepsFor: 'Work Steps For',
  },
};

const yewaleSteps = (t) => [
  { name: t.terms, path: '/froms/projects/yewale/terms-and-condition' },
  { name: t.preSurvey, path: '/froms/projects/yewale/pre-survey-script' },
  { name: t.civilWork, path: '/froms/projects/yewale/civil-work-checklist-form' },
  { name: t.internalDept, path: '/froms/projects/yewale/internal-department-working' },
  { name: t.inspection, path: '/froms/projects/yewale/inspection-checklist' },
  { name: t.material, path: '/froms/projects/yewale/material-checklist' },
  { name: t.shopSetup, path: '/froms/projects/yewale/shop-setup-checklist' },
  { name: t.projectFollowup, path: '/froms/projects/yewale/project-work-followup' },
  { name: t.surveyInputs, path: '/froms/projects/yewale/survey-inputs' },
  { name: t.survey, path: '/froms/projects/yewale/survey' },
  { name: t.roughLayout, path: '/froms/projects/yewale/rough-layout' },
];

const nadbrahmaSteps = (t) => [
  { name: t.terms, path: '/froms/projects/nadbrahma/terms-and-condition' },
  { name: t.preSurvey, path: '/froms/projects/nadbrahma/pre-survey-script' },
  { name: t.civilWork, path: '/froms/projects/nadbrahma/civil-work-checklist-form' },
  { name: t.internalDept, path: '/froms/projects/nadbrahma/internal-department-working' },
  { name: t.inspection, path: '/froms/projects/nadbrahma/inspection-checklist' },
  { name: t.material, path: '/froms/projects/nadbrahma/material-checklist' },
  { name: t.shopSetup, path: '/froms/projects/nadbrahma/shop-setup-checklist' },
  { name: t.projectFollowup, path: '/froms/projects/nadbrahma/project-work-followup' },
  { name: t.surveyInputs, path: '/froms/projects/nadbrahma/survey-inputs' },
  { name: t.survey, path: '/froms/projects/nadbrahma/survey' },
  { name: t.roughLayout, path: '/froms/projects/nadbrahma/rough-layout' },
];

const yewaleFeedbacks = (t) => [
  { name: t.agreementFeedback, path: '/froms/yewalecomponents/call1folder1', desc: t.agreementFeedbackDesc },
  { name: t.civilWorkFeedback, path: '/froms/yewalecomponents/call2folder2', desc: t.civilWorkFeedbackDesc },
  { name: t.setupFeedback, path: '/froms/yewalecomponents/call3folder3', desc: t.setupFeedbackDesc },
  { name: t.finalDemoFeedback, path: '/froms/yewalecomponents/call4folder4', desc: t.finalDemoFeedbackDesc },
  { name: t.oneMonthFeedback, path: '/froms/yewalecomponents/call5folder5', desc: t.oneMonthFeedbackDesc },
  { name: t.oneMonthFeedback2, path: '/froms/yewalecomponents/call6folder6', desc: t.oneMonthFeedback2Desc },
  { name: t.oneMonthFeedback7, path: '/froms/yewalecomponents/call7folder7', desc: t.oneMonthFeedback7Desc },
  { name: t.oneMonthFeedback8, path: '/froms/yewalecomponents/call8folder8', desc: t.oneMonthFeedback8Desc },
  { name: t.oneMonthFeedback9, path: '/froms/yewalecomponents/call9folder9', desc: t.oneMonthFeedback9Desc },
];

const nadbrahmaFeedbacks = (t) => [
  { name: t.agreementFeedbackN, path: '/froms/nadbrahmacomponents/call1folder1', desc: t.agreementFeedbackDescN },
  { name: t.planExplanationFeedback, path: '/froms/nadbrahmacomponents/call2folder2', desc: t.planExplanationFeedbackDesc },
  { name: t.inspectionFeedback, path: '/froms/nadbrahmacomponents/call3folder3', desc: t.inspectionFeedbackDesc },
  { name: t.setupFeedbackN, path: '/froms/nadbrahmacomponents/call4folder4', desc: t.setupFeedbackDescN },
  { name: t.openingFeedback, path: '/froms/nadbrahmacomponents/call5folder5', desc: t.openingFeedbackDesc },
  { name: t.oneMonthFeedbackN, path: '/froms/nadbrahmacomponents/call6folder6', desc: t.oneMonthFeedbackDescN },
];

const vendorRoutes = [
  { name: 'Electrician', path: '/froms/vendors/electrician' },
  { name: 'Plumber', path: '/froms/vendors/plumber' },
  { name: 'Tiles vendor', path: '/froms/vendors/tiles' },
  { name: 'POP vendor', path: '/froms/vendors/pop' },
  { name: 'CCTV Installer', path: '/froms/vendors/cctv' },
  { name: 'Internet Service Provider', path: '/froms/vendors/internet' },
  { name: 'Painter', path: '/froms/vendors/painter' },
  { name: 'Gas pipeline vendor', path: '/froms/vendors/gas' },
  { name: 'Ducting vendor', path: '/froms/vendors/ducting' },
  { name: 'Awing shed vendor', path: '/froms/vendors/awing' },
  { name: 'Mason', path: '/froms/vendors/mason' },
  { name: 'Board vendor', path: '/froms/vendors/board' },
  { name: 'Fabricator', path: '/froms/vendors/fabricator' },
];

const letterOfUndertakingForms = (t) => [
  { name: t.boardWorks, path: '/froms/LetterOfUndertaking/BoardWorksForm', icon: <FaClipboardList /> },
  { name: t.cameraSet, path: '/froms/LetterOfUndertaking/CameraSetForm', icon: <FaCamera /> },
  { name: t.electricalWorks, path: '/froms/LetterOfUndertaking/ElectricalWorksForm', icon: <FaPlug /> },
  { name: t.letterOfUndertakingForm, path: '/froms/LetterOfUndertaking/LetterOfUndertakingForm', icon: <FaFileContract /> },
  { name: t.steelEquipment, path: '/froms/LetterOfUndertaking/SteelEquipmentForm', icon: <FaTools /> },
];

const yewalePlanExplanationItems = (t) => [
  { name: t.civilWorkWorking, path: '/froms/planexplanation/yewale/civil-work-working' },
  { name: t.constructionForm, path: '/froms/planexplanation/yewale/construction-form' },
  { name: t.materialChecklistPlanEx, path: '/froms/planexplanation/yewale/material-checklist' },
  { name: t.warrantyFormPlanEx, path: '/froms/planexplanation/yewale/warranty-form' },
  { name: t.revisedWorkFollowup, path: '/froms/planexplanation/yewale/revised-work-followup' },
];

const nadbrahmaPlanExplanationItems = (t) => [
  { name: t.ownerMaterial, path: '/froms/planexplanation/nadbrahma/owner-material' },
  { name: t.warrantyPeriod, path: '/froms/planexplanation/nadbrahma/warranty-period' },
  { name: t.workStepsFor, path: '/froms/planexplanation/nadbrahma/work-steps-for' },
];

const Sidebar = ({ onLogout }) => {
  const [lang, setLang] = useState('mr');
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarMenu = [
    { name: 'Home', icon: <FaHome />, path: '/froms/dashboard' },
    {
      name: t.yewaleTitle,
      icon: <FaBuilding />,
      subItems: [
        ...yewaleSteps(t),
        { name: t.yewaleFeedback, icon: <FaFolder />, subItems: yewaleFeedbacks(t) },
      ],
    },
    {
      name: t.nadbrahmaTitle,
      icon: <FaBuilding />,
      subItems: [
        ...nadbrahmaSteps(t),
        { name: t.nadbrahmaFeedback, icon: <FaFolder />, subItems: nadbrahmaFeedbacks(t) },
      ],
    },
    { name: 'Vendors', icon: <FaUserTie />, subItems: vendorRoutes },
    { name: t.letterOfUndertaking, icon: <FaFileContract />, subItems: letterOfUndertakingForms(t) },
    {
      name: t.planExplanationTitle,
      icon: <FaClipboardList />,
      subItems: [
        { name: t.yewalePlanExplanation, icon: <FaFolder />, subItems: yewalePlanExplanationItems(t) },
        { name: t.nadbrahmaPlanExplanation, icon: <FaFolder />, subItems: nadbrahmaPlanExplanationItems(t) },
      ],
    },
    { name: 'Test3', icon: <FaMicroscope />, path: '/froms/test3' },
  ];

  const isAnySubItemActive = (subItems) => {
    if (!subItems) return false;
    return subItems.some((sub) => {
      if (sub.path && location.pathname === sub.path) return true;
      if (sub.subItems) return isAnySubItemActive(sub.subItems);
      return false;
    });
  };

  const getInitialOpenMenus = () => {
    const open = {};
    sidebarMenu.forEach((item) => {
      if (item.subItems) {
        const hasActiveSubItem = isAnySubItemActive(item.subItems);
        if (hasActiveSubItem) {
          open[item.name] = true;
          item.subItems.forEach((sub) => {
            if (sub.subItems && isAnySubItemActive(sub.subItems)) {
              open[sub.name] = true;
            }
          });
        }
      }
    });
    return open;
  };

  const [openMenus, setOpenMenus] = useState(getInitialOpenMenus);

  useEffect(() => {
    setOpenMenus(getInitialOpenMenus());
    console.log('Current location:', location.pathname);
  }, [location.pathname, lang]);

  const handleNavigation = (path) => {
    if (path) {
      console.log('Navigating to:', path);
      navigate(path);
    }
  };

  const handleToggle = (menuName) => {
    setOpenMenus((prev) => {
      const newOpenMenus = { ...prev };
      sidebarMenu.forEach((item) => {
        if (item.subItems && item.name !== menuName) {
          if (!isAnySubItemActive(item.subItems)) {
            newOpenMenus[item.name] = false;
          }
          item.subItems.forEach((sub) => {
            if (sub.subItems && sub.name !== menuName) {
              if (!isAnySubItemActive(sub.subItems)) {
                newOpenMenus[sub.name] = false;
              }
            }
          });
        }
      });
      newOpenMenus[menuName] = !prev[menuName];
      return newOpenMenus;
    });
  };

  const handleLogoutClick = () => {
    console.log('Logging out');
    onLogout();
    navigate('/');
  };

  const renderMenu = (items, level = 0) => {
    return items.map((item, idx) => {
      const isActive = item.path && location.pathname === item.path;

      if (item.subItems) {
        const isOpen = openMenus[item.name];
        const isAnySubActive = isAnySubItemActive(item.subItems);

        return (
          <div key={`${item.name}-${idx}`} className={level > 0 ? 'ml-6 mt-2' : 'mb-1'}>
            <div
              onClick={() => handleToggle(item.name)}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                isOpen || isAnySubActive
                  ? 'bg-blue-50 text-blue-700 border-l-3 border-blue-500'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
              title={item.desc || item.name}
            >
              <div className="flex items-center">
                {item.icon && <span className="mr-3 text-base">{item.icon}</span>}
                <span>{item.name}</span>
              </div>
              <span className="text-xs">{isOpen ? <FaChevronDown /> : <FaChevronRight />}</span>
            </div>
            {isOpen && <div className="mt-1">{renderMenu(item.subItems, level + 1)}</div>}
          </div>
        );
      } else {
        return (
          <div key={`${item.name}-${idx}`} className={level > 0 ? 'ml-6 mt-1' : 'mb-1'}>
            <div
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
              title={item.desc || item.name}
            >
              {item.icon && <span className="mr-3 text-base">{item.icon}</span>}
              <span>{item.name}</span>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img src={logo} alt="YNK ERP Logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-900">YNK ERP</h1>
          </div>
        </div>
        <button
          onClick={() => setLang((prev) => (prev === 'mr' ? 'en' : 'mr'))}
          className="px-2 py-1 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200"
          aria-label={t.switchAria}
          title={t.switchAria}
        >
          {t.switchLang}
        </button>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <nav>
          <div className="mb-6">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</h2>
          </div>
          <div className="space-y-1">{renderMenu(sidebarMenu)}</div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div
              onClick={handleLogoutClick}
              className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200 cursor-pointer"
              title="Logout"
            >
              <FaSignOutAlt className="mr-3 text-base" />
              <span>Logout</span>
            </div>
          </div>
        </nav>
      </div>

      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">U</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Welcome!</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;