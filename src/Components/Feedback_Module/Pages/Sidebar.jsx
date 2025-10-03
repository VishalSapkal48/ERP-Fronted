import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

const translations = {
  mr: {
    yewaleTitle: "येवले",
    nadbrahmaTitle: "नादब्रह्म",
    yewaleFeedback: "येवले फीडबॅक",
    nadbrahmaFeedback: "नादब्रह्म फीडबॅक",
    officeFeedbackTitle: "ऑफिस फीडबॅक कॉल",
    monthlyFeedbackTitle: "मासिक फीडबॅक कॉल",
    serviceFeedbackTitle: "सर्व्हिस फीडबॅक कॉल",
    switchLang: "English",
    switchAria: "इंग्रजीमध्ये बदला",
    greetingFeedback: "ग्रीटिंग फीडबॅक",
    greetingFeedbackDesc: "ग्रीटिंगसाठी फीडबॅक फॉर्म",
    agreementFeedback: "अ‍ॅग्रीमेंट फीडबॅक",
    agreementFeedbackDesc: "CALL 1 साठी फीडबॅक फॉर्म",
    civilWorkFeedback: "सिव्हिल वर्क फीडबॅक",
    civilWorkFeedbackDesc: "CALL 2 साठी फीडबॅक फॉर्म",
    setupFeedback: "सेट-अप फीडबॅक",
    setupFeedbackDesc: "CALL 3 साठी फीडबॅक फॉर्म",
    finalDemoFeedback:
      "शॉप मधील सर्व वस्तु आणि सेटअप बद्दल ट्रेनिंग साठी कॉल !",
    finalDemoFeedbackDesc: "CALL 4 साठी फीडबॅक फॉर्म",
    oneMonthFeedback: "ओपनिंग डे फीडबॅक",
    oneMonthFeedbackDesc: "CALL 5 साठी फीडबॅक फॉर्म",
    oneMonthFeedback2: "एका महिन्याचा अभिप्राय येवले",
    oneMonthFeedback2Desc: "CALL 6 साठी फीडबॅक फॉर्म",
    oneMonthFeedback8: "कस्टमर सर्व्हिस",
    oneMonthFeedback8Desc: "CALL 8 साठी फीडबॅक फॉर्म",
    oneMonthFeedback9: "कोटेशन प्रश्नांसाठी अभिप्राय फॉर्म",
    oneMonthFeedback9Desc: "CALL 9 साठी अभिप्राय फॉर्म",
    agreementFeedbackN: "करार अभिप्राय",
    agreementFeedbackDescN: "CALL 1 साठी अभिप्राय फॉर्म",
    planExplanationFeedback: "योजना स्पष्टीकरण अभिप्राय",
    planExplanationFeedbackDesc: "CALL 2 साठी अभिप्राय फॉर्म",
    inspectionFeedback: "तपासणी अभिप्राय",
    inspectionFeedbackDesc: "CALL 3 साठी अभिप्राय फॉर्म",
    setupFeedbackN: "सेट-अप अभिप्राय",
    setupFeedbackDescN: "CALL 4 साठी अभिप्राय फॉर्म",
    openingFeedback: "आउटलेट उघडण्याचा अभिप्राय",
    openingFeedbackDesc: "CALL 5 साठी अभिप्राय फॉर्म",
    oneMonthFeedbackN: "एक महिन्याचा अभिप्राय नादब्रह्म",
    oneMonthFeedbackDescN: "CALL 6 साठी अभिप्राय फॉर्म",
    monthlyFeedbackYewale: "येवले",
    monthlyFeedbackNadbramha: "नादब्रह्म",
    navigation: "नॅव्हिगेशन",
    logout: "लॉगआऊट",
  },
  en: {
    yewaleTitle: "Yewale",
    nadbrahmaTitle: "Naadbramha",
    yewaleFeedback: "Yewale Feedback",
    nadbrahmaFeedback: "Naadbramha Feedback",
    officeFeedbackTitle: "Office Feedback Call",
    monthlyFeedbackTitle: "Monthly Feedback Call",
    serviceFeedbackTitle: "Service Feedback Call",
    switchLang: "मराठी",
    switchAria: "Switch to Marathi",
    greetingFeedback: "Greeting Feedback",
    greetingFeedbackDesc: "Feedback form for Greeting",
    agreementFeedback: "Agreement Feedback",
    agreementFeedbackDesc: "Feedback form for CALL 1",
    civilWorkFeedback: "Civil Work Feedback",
    civilWorkFeedbackDesc: "Feedback form for CALL 2",
    setupFeedback: "Set-up Feedback",
    setupFeedbackDesc: "Feedback form for CALL 3",
    finalDemoFeedback: "Call for training on all items and setup in the shop!",
    finalDemoFeedbackDesc: "Feedback form for CALL 4",
    oneMonthFeedback: "Opening Day Feedback",
    oneMonthFeedbackDesc: "Feedback form for CALL 5",
    oneMonthFeedback2: "One Month Feedback Yewale",
    oneMonthFeedback2Desc: "Feedback form for CALL 6",
    customerserviceform8: "Customer Service",
    oneMonthFeedback8Desc: "Feedback form for CALL 8",
    oneMonthFeedback9: "Quotation queries feedback form",
    oneMonthFeedback9Desc: "Feedback form for CALL 9",
    agreementFeedbackN: "Agreement Feedback",
    agreementFeedbackDescN: "Feedback form for CALL 1",
    planExplanationFeedback: "Plan Explanation Feedback",
    planExplanationFeedbackDesc: "Feedback form for CALL 2",
    inspectionFeedback: "Inspection Feedback",
    inspectionFeedbackDesc: "Feedback form for CALL 3",
    setupFeedbackN: "Set-up Feedback",
    setupFeedbackDescN: "Feedback form for CALL 4",
    openingFeedback: "Outlet Opening Feedback",
    openingFeedbackDesc: "Feedback form for CALL 5",
    oneMonthFeedbackN: "One Month Feedback Naadbramha",
    oneMonthFeedbackDescN: "Feedback form for CALL 6",
    monthlyFeedbackYewale: "Yewale",
    monthlyFeedbackNadbramha: "Naadbramha",
    navigation: "Navigation",
    logout: "Logout",
  },
};

const yewaleFeedbacks = (t) => [
  {
    name: t.greetingFeedback,
    path: "/feedback/yewale/greeting",
    desc: t.greetingFeedbackDesc,
  },
  {
    name: t.agreementFeedback,
    path: "/feedback/yewale/call1",
    desc: t.agreementFeedbackDesc,
  },
  {
    name: t.civilWorkFeedback,
    path: "/feedback/yewale/call2",
    desc: t.civilWorkFeedbackDesc,
  },
  {
    name: t.setupFeedback,
    path: "/feedback/yewale/call3",
    desc: t.setupFeedbackDesc,
  },
  {
    name: t.finalDemoFeedback,
    path: "/feedback/yewale/call4",
    desc: t.finalDemoFeedbackDesc,
  },
  {
    name: t.oneMonthFeedback,
    path: "/feedback/yewale/call5",
    desc: t.oneMonthFeedbackDesc,
  },

  {
    name: t.oneMonthFeedback8,
    path: "/feedback/yewale/call8",
    desc: t.oneMonthFeedback8Desc,
  },
];

const nadbrahmaFeedbacks = (t) => [
  {
    name: t.greetingFeedback,
    path: "/feedback/nadbrahma/greeting",
    desc: t.greetingFeedbackDesc,
  },
  {
    name: t.agreementFeedbackN,
    path: "/feedback/nadbrahma/call1",
    desc: t.agreementFeedbackDescN,
  },
  {
    name: t.planExplanationFeedback,
    path: "/feedback/nadbrahma/call2",
    desc: t.planExplanationFeedbackDesc,
  },
  {
    name: t.inspectionFeedback,
    path: "/feedback/nadbrahma/call3",
    desc: t.inspectionFeedbackDesc,
  },
  {
    name: t.setupFeedbackN,
    path: "/feedback/nadbrahma/call4",
    desc: t.setupFeedbackDescN,
  },
  {
    name: t.openingFeedback,
    path: "/feedback/nadbrahma/call5",
    desc: t.openingFeedbackDesc,
  },
];

const nadbrahmaSteps = (t) => [];

const Sidebar = ({ onLogout }) => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarMenu = [
    {
      name: "Home",
      icon: <HomeIcon className="w-5 h-5" />,
      path: "/feedback/dashboard",
    },
    {
      name: t.yewaleTitle,
      icon: <BuildingOffice2Icon className="w-5 h-5" />,
      subItems: [
        {
          name: t.yewaleFeedback,
          icon: <DocumentTextIcon className="w-5 h-5" />,
          subItems: yewaleFeedbacks(t),
        },
      ],
    },
    {
      name: t.nadbrahmaTitle,
      icon: <BuildingOffice2Icon className="w-5 h-5" />,
      subItems: [
        ...nadbrahmaSteps(t),
        {
          name: t.nadbrahmaFeedback,
          icon: <DocumentTextIcon className="w-5 h-5" />,
          subItems: nadbrahmaFeedbacks(t),
        },
      ],
    },
    {
      name: t.officeFeedbackTitle,
      icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />,
      path: "/feedback/office",
    },
    {
      name: t.monthlyFeedbackTitle,
      icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />,
      subItems: [
        {
          name: t.oneMonthFeedbackN,
          path: "/feedback/nadbrahma/call6",
          desc: t.oneMonthFeedbackDescN,
          icon: <DocumentTextIcon className="w-5 h-5" />,
        },
        {
          name: t.oneMonthFeedback2,
          path: "/feedback/yewale/call6",
          desc: t.oneMonthFeedback2Desc,
          // 💡 Icon added here!
          icon: <DocumentTextIcon className="w-5 h-5" />,
        },
      ],
    },
    {
      name: t.serviceFeedbackTitle,
      icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />,
      path: "/feedback/service",
    },
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
        if (isAnySubItemActive(item.subItems)) {
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
    setOpenMenus((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate("/");
  };

  const renderMenu = (items, level = 0) => {
    return items.map((item, idx) => {
      const isActive = item.path && location.pathname === item.path;
      const isOpen = openMenus[item.name];
      const isAnySubActive = item.subItems && isAnySubItemActive(item.subItems);

      if (item.subItems) {
        return (
          <div key={`${item.name}-${idx}`} className="my-1">
            <button
              onClick={() => handleToggle(item.name)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isOpen || isAnySubActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="truncate">{item.name}</span>
              </div>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="mt-1 pl-4 border-l border-slate-700">
                {renderMenu(item.subItems, level + 1)}
              </div>
            )}
          </div>
        );
      }

      return (
        <div key={`${item.name}-${idx}`} className="my-1">
          <button
            onClick={() => handleNavigation(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 text-left ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
            title={item.desc || item.name}
          >
            {item.icon}
            <span className="truncate flex-grow">{item.name}</span>
            {item.desc && (
              <span className="text-xs text-slate-500 italic hidden xl:block ml-2">
                {item.desc}
              </span>
            )}
          </button>
        </div>
      );
    });
  };

  return (
    <div className="w-72 bg-slate-900 border-r border-slate-700 h-screen flex flex-col">
      <div className="px-4 py-4 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/Images/BoardWorksListForm/logo.png"
            alt="Logo YNK ERP"
            className="w-10 h-10 object-contain bg-white rounded-full p-1"
          />
          <h1 className="text-xl font-bold text-white">YNK ERP</h1>
        </div>
        <button
          onClick={() => setLang((prev) => (prev === "mr" ? "en" : "mr"))}
          className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-md hover:bg-indigo-500 transition-colors duration-200"
          aria-label={t.switchAria}
        >
          {t.switchLang}
        </button>
      </div>
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <nav>
          <div className="mb-4">
            <h2 className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {t.navigation}
            </h2>
          </div>
          <div className="space-y-1">{renderMenu(sidebarMenu)}</div>
        </nav>
      </div>
      <div className="px-4 py-3 border-t border-slate-700">
        <button
          onClick={handleLogoutClick}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors duration-200"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          <span>{t.logout}</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;