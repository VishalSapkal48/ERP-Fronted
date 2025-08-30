import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
    vendors: 'विक्रेते',
    awingShed: 'आविंग शेड',
    boardWork: 'बोर्ड वर्क',
    brickWork: 'विटकाम',
    cctvWork: 'सीसीटीव्ही वर्क',
    demolitionLabor: 'डिमॉलिशन लेबर',
    ductingWork: 'डक्टिंग वर्क',
    electricalWork: 'इलेक्ट्रिकल वर्क',
    gasPipeline: 'गॅस पाइपलाइन',
    internetWork: 'इंटरनेट वर्क',
    loftChecklist: 'लॉफ्ट चेकलिस्ट',
    materialUnloading: 'मटेरिअल अनलोडिंग',
    painting: 'पेंटिंग',
    plumbingWork: 'प्लंबिंग वर्क',
    popVendor: 'पीओपी विक्रेता',
    shutterLogo: 'शटर लोगो वर्क',
    tilesVendor: 'टाइल्स विक्रेता',
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
    shopSetup: 'pre-survey script ',
    projectFollowup: 'survey ',
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
    vendors: 'Vendors',
    awingShed: 'Awing Shed',
    boardWork: 'Board Work',
    brickWork: 'Brick Work',
    cctvWork: 'CCTV Work',
    demolitionLabor: 'Demolition Labor',
    ductingWork: 'Ducting Work',
    electricalWork: 'Electrical Work',
    gasPipeline: 'Gas Pipeline',
    internetWork: 'Internet Work',
    loftChecklist: 'Loft Checklist',
    materialUnloading: 'Material Unloading',
    painting: 'Painting',
    plumbingWork: 'Plumbing Work',
    popVendor: 'POP Vendor',
    shutterLogo: 'Shutter Logo Work',
    tilesVendor: 'Tiles Vendor',
  },
};

const Sidebar = ({ onLogout }) => {
  const [lang, setLang] = useState('mr');
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const yewaleSteps = [
    { name: t.terms, path: '/forms/projects/yewale/terms-and-condition' },
    { name: t.preSurvey, path: '/forms/projects/yewale/pre-survey-script' },
    { name: t.civilWork, path: '/forms/projects/yewale/civil-work-checklist-form' },
    { name: t.internalDept, path: '/forms/projects/yewale/internal-department-working' },
    { name: t.inspection, path: '/forms/projects/yewale/inspection-checklist' },
    { name: t.material, path: '/forms/projects/yewale/material-checklist' },
    { name: t.shopSetup, path: '/forms/projects/yewale/shop-setup-checklist' },
    { name: t.projectFollowup, path: '/forms/projects/yewale/project-work-followup' },
    { name: t.surveyInputs, path: '/forms/projects/yewale/survey-inputs' },
    { name: t.survey, path: '/forms/projects/yewale/survey' },
    { name: t.roughLayout, path: '/forms/projects/yewale/rough-layout' },
  ];

  const nadbrahmaSteps = [
    { name: t.terms, path: '/forms/projects/nadbrahma/terms-and-condition' },
    { name: t.preSurvey, path: '/forms/projects/nadbrahma/pre-survey-script' },
    { name: t.civilWork, path: '/forms/projects/nadbrahma/civil-work-checklist-form' },
    { name: t.internalDept, path: '/forms/projects/nadbrahma/internal-department-working' },
    { name: t.inspection, path: '/forms/projects/nadbrahma/inspection-checklist' },
    { name: t.material, path: '/forms/projects/nadbrahma/material-checklist' },
    { name: t.shopSetup, path: '/forms/projects/nadbrahma/shop-setup-checklist' },
    { name: t.projectFollowup, path: '/forms/projects/nadbrahma/project-work-followup' },
    { name: t.surveyInputs, path: '/forms/projects/nadbrahma/survey-inputs' },
    { name: t.survey, path: '/forms/projects/nadbrahma/survey' },
    { name: t.roughLayout, path: '/forms/projects/nadbrahma/rough-layout' },
  ];

  const yewaleFeedbacks = [
    { name: t.agreementFeedback, path: '/forms/yewalecomponents/call1folder1', desc: t.agreementFeedbackDesc },
    { name: t.civilWorkFeedback, path: '/forms/yewalecomponents/call2folder2', desc: t.civilWorkFeedbackDesc },
    { name: t.setupFeedback, path: '/forms/yewalecomponents/call3folder3', desc: t.setupFeedbackDesc },
    { name: t.finalDemoFeedback, path: '/forms/yewalecomponents/call4folder4', desc: t.finalDemoFeedbackDesc },
    { name: t.oneMonthFeedback, path: '/forms/yewalecomponents/call5folder5', desc: t.oneMonthFeedbackDesc },
    { name: t.oneMonthFeedback2, path: '/forms/yewalecomponents/call6folder6', desc: t.oneMonthFeedback2Desc },
    { name: t.oneMonthFeedback7, path: '/forms/yewalecomponents/call7folder7', desc: t.oneMonthFeedback7Desc },
    { name: t.oneMonthFeedback8, path: '/forms/yewalecomponents/call8folder8', desc: t.oneMonthFeedback8Desc },
    { name: t.oneMonthFeedback9, path: '/forms/yewalecomponents/call9folder9', desc: t.oneMonthFeedback9Desc },
  ];

  const nadbrahmaFeedbacks = [
    { name: t.agreementFeedbackN, path: '/forms/nadbrahmacomponents/call1folder1', desc: t.agreementFeedbackDescN },
    { name: t.planExplanationFeedback, path: '/forms/nadbrahmacomponents/call2folder2', desc: t.planExplanationFeedbackDesc },
    { name: t.inspectionFeedback, path: '/forms/nadbrahmacomponents/call3folder3', desc: t.inspectionFeedbackDesc },
    { name: t.setupFeedbackN, path: '/forms/nadbrahmacomponents/call4folder4', desc: t.setupFeedbackDescN },
    { name: t.openingFeedback, path: '/forms/nadbrahmacomponents/call5folder5', desc: t.openingFeedbackDesc },
    { name: t.oneMonthFeedbackN, path: '/forms/nadbrahmacomponents/call6folder6', desc: t.oneMonthFeedbackDescN },
  ];

  const vendorRoutes = [
    { name: t.awingShed, path: '/forms/vendors/awing', icon: '🏠' },
    { name: t.boardWork, path: '/forms/vendors/board', icon: '📋' },
    { name: t.brickWork, path: '/forms/vendors/mason', icon: '🧱' },
    { name: t.cctvWork, path: '/forms/vendors/cctv', icon: '📷' },
    { name: t.demolitionLabor, path: '/forms/vendors/demolition', icon: '🪓' },
    { name: t.ductingWork, path: '/forms/vendors/ducting', icon: '🌬️' },
    { name: t.electricalWork, path: '/forms/vendors/electrician', icon: '🔌' },
    { name: t.gasPipeline, path: '/forms/vendors/gas', icon: '🔥' },
    { name: t.internetWork, path: '/forms/vendors/internet', icon: '🌐' },
    { name: t.loftChecklist, path: '/forms/vendors/loft', icon: '🛋️' },
    { name: t.materialUnloading, path: '/forms/vendors/material-unloading', icon: '📦' },
    { name: t.painting, path: '/forms/vendors/painter', icon: '🎨' },
    { name: t.plumbingWork, path: '/forms/vendors/plumber', icon: '🚰' },
    { name: t.popVendor, path: '/forms/vendors/pop', icon: '🏛️' },
    { name: t.shutterLogo, path: '/forms/vendors/shutter-logo', icon: '🖼️' },
    { name: t.tilesVendor, path: '/forms/vendors/tiles', icon: '🧩' },
  ];

  const letterOfUndertakingForms = [
    { name: t.boardWorks, path: '/forms/LetterOfUndertaking/BoardWorksForm', icon: '📋' },
    { name: t.cameraSet, path: '/forms/LetterOfUndertaking/CameraSetForm', icon: '📷' },
    { name: t.electricalWorks, path: '/forms/LetterOfUndertaking/ElectricalWorksForm', icon: '🔌' },
    { name: t.letterOfUndertakingForm, path: '/forms/LetterOfUndertaking/LetterOfUndertakingForm', icon: '📜' },
    { name: t.steelEquipment, path: '/forms/LetterOfUndertaking/SteelEquipmentForm', icon: '🛠' },
  ];

  const yewalePlanExplanationItems = [
    { name: t.civilWorkWorking, path: '/forms/planexplanation/yewale/civil-work-working' },
    { name: t.constructionForm, path: '/forms/planexplanation/yewale/construction-form' },
    { name: t.materialChecklistPlanEx, path: '/forms/planexplanation/yewale/material-checklist' },
    { name: t.warrantyFormPlanEx, path: '/forms/planexplanation/yewale/warranty-form' },
    { name: t.revisedWorkFollowup, path: '/forms/planexplanation/yewale/revised-work-followup' },
  ];

  const nadbrahmaPlanExplanationItems = [
    { name: t.ownerMaterial, path: '/forms/planexplanation/nadbrahma/owner-material' },
    { name: t.warrantyPeriod, path: '/forms/planexplanation/nadbrahma/warranty-period' },
    { name: t.workStepsFor, path: '/forms/planexplanation/nadbrahma/work-steps-for' },
  ];

  const sidebarMenu = [
    { name: 'Home', icon: '🏠', path: '/forms Fees must be paid to access this content. Please purchase a subscription or contact an administrator to gain full access.forms/dashboard' },
    {
      name: t.yewaleTitle,
      icon: '🏢',
      subItems: [
        ...yewaleSteps,
        { name: t.yewaleFeedback, icon: '📁', subItems: yewaleFeedbacks },
      ],
    },
    {
      name: t.nadbrahmaTitle,
      icon: '🏢',
      subItems: [
        ...nadbrahmaSteps,
        { name: t.nadbrahmaFeedback, icon: '📁', subItems: nadbrahmaFeedbacks },
      ],
    },
    { name: t.vendors, icon: '👷', subItems: vendorRoutes },
    { name: t.letterOfUndertaking, icon: '📜', subItems: letterOfUndertakingForms },
    {
      name: t.planExplanationTitle,
      icon: '📋',
      subItems: [
        { name: t.yewalePlanExplanation, icon: '📁', subItems: yewalePlanExplanationItems },
        { name: t.nadbrahmaPlanExplanation, icon: '📁', subItems: nadbrahmaPlanExplanationItems },
      ],
    },
    { name: 'Test3', icon: '🔬', path: '/forms/test3' },
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
  }, [location.pathname, lang]);

  const handleNavigation = (path) => {
    if (path) navigate(path);
  };

  const handleToggle = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  const renderMenu = (items, level = 0) => {
    return items.map((item, idx) => {
      const isActive = item.path && location.pathname === item.path;
      const isOpen = openMenus[item.name];
      const isAnySubActive = item.subItems && isAnySubItemActive(item.subItems);

      if (item.subItems) {
        return (
          <div key={`${item.name}-${idx}`} className={`mt-1 ${level > 0 ? 'ml-4' : ''}`}>
            <button
              onClick={() => handleToggle(item.name)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                isOpen || isAnySubActive
                  ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-500'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
              aria-expanded={isOpen}
              title={item.desc || item.name}
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="text-lg">{item.icon}</span>}
                <span className="truncate">{item.name}</span>
              </div>
              <span className="text-xs transition-transform duration-200">
                {isOpen ? '▲' : '▼'}
              </span>
            </button>
            {isOpen && (
              <div className="mt-1 pl-2">
                {renderMenu(item.subItems, level + 1)}
              </div>
            )}
          </div>
        );
      }

      return (
        <div key={`${item.name}-${idx}`} className={`mt-1 ${level > 0 ? 'ml-4' : ''}`}>
          <button
            onClick={() => handleNavigation(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
            title={item.desc || item.name}
          >
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span className="truncate">{item.name}</span>
            {item.desc && (
              <span className="ml-auto text-xs text-gray-500 italic hidden sm:block">
                {item.desc}
              </span>
            )}
          </button>
        </div>
      );
    });
  };

  return (
    <div className="w-72 bg-white shadow-lg border-r border-gray-200 h-screen flex flex-col transition-all duration-300">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/Images/BoardWorksListForm/logo.png"
            alt="YNK ERP Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold text-gray-900">YNK ERP</h1>
        </div>
        <button
          onClick={() => setLang((prev) => (prev === 'mr' ? 'en' : 'mr'))}
          className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
          aria-label={t.switchAria}
          title={t.switchAria}
        >
          {t.switchLang}
        </button>
      </div>
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <nav>
          <div className="mb-4">
            <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Navigation
            </h2>
          </div>
          <div className="space-y-1">{renderMenu(sidebarMenu)}</div>
        </nav>
      </div>
      <div className="px-4 py-4 border-t border-gray-200">
        <button
          onClick={handleLogoutClick}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200"
        >
          <span className="text-lg">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;