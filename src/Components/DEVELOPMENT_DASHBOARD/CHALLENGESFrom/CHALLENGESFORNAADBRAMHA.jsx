
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../../public/Images/BoardWorksListForm/logo.png'; // Logo import as provided

const tasks = [
  {
    srNo: 1,
    title_en: "Area",
    title_mr: "क्षेत्र",
    description_en: [
      "Due to the limited size of the shop, there are difficulties in the outlet",
      "Inadequate stock of raw materials"
    ],
    description_mr: [
      "दुकानाच्या मर्यादित आकारामुळे आउटलेटमध्ये अडचणी येतात",
      "कच्च्या मालाचा अपुरा साठा"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 2,
    title_en: "Layout",
    title_mr: "लेआउट",
    description_en: [
      "If workers do not fully understand the layout plan, mistakes can occur",
      "Approval from the shop owner or Naadbramha authority may be required for changes to the layout, which can take time"
    ],
    description_mr: [
      "कामगारांना लेआउट प्लॅन पूर्णपणे समजला नाही तर चुका होऊ शकतात",
      "लेआउटमध्ये बदल करण्यासाठी दुकान मालक किंवा नादब्रह्मा प्राधिकरणाची परवानगी आवश्यक असू शकते, ज्यामुळे वेळ लागू शकतो"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 3,
    title_en: "Wall Tiles Work",
    title_mr: "भिंतीच्या टाइल्सचे काम",
    description_en: [
      "Poor Tile Quality – Cheap or low-quality tiles can break easily",
      "Color/Pattern Mismatch",
      "Skilled Labour – Good tile work needs experienced workers"
    ],
    description_mr: [
      "खराब टाइल गुणवत्ता - स्वस्त किंवा कमी दर्जाच्या टाइल्स सहज तुटू शकतात",
      "रंग/पॅटर्न जुळत नाही",
      "कुशल कामगार - चांगल्या टाइल कामासाठी अनुभवी कामगारांची आवश्यकता आहे"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 4,
    title_en: "Plumbing & Electrical Work",
    title_mr: "प्लंबिंग आणि इलेक्ट्रिकल काम",
    description_en: [
      "Low Water Pressure – Due to wrong pipe size or blockage",
      "Water Leaks – Poor pipe fittings can cause water leakage",
      "Wrong Point Placement",
      "No Backup or Safety – No UPS, MCB, or earthing can be dangerous"
    ],
    description_mr: [
      "कमी पाण्याचा दाब - चुकीच्या पाईप आकारामुळे किंवा अडथळ्यामुळे",
      "पाण्याची गळती - खराब पाईप फिटिंगमुळे पाण्याची गळती होऊ शकते",
      "चुकीचे पॉइंट प्लेसमेंट",
      "बॅकअप किंवा सुरक्षितता नाही - यूपीएस, एमसीबी, किंवा अर्थिंग नसणे धोकादायक ठरू शकते"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 5,
    title_en: "POP (False Ceiling) Work",
    title_mr: "पीओपी (खोटे छत) काम",
    description_en: [
      "Cost Overruns – Custom designs, moldings, or changes during work can increase cost",
      "Different plan options (partition POP / full POP / no POP)"
    ],
    description_mr: [
      "खर्च वाढ - सानुकूल डिझाईन्स, मोल्डिंग्ज किंवा कामादरम्यान बदलांमुळे खर्च वाढू शकतो",
      "वेगवेगळे प्लॅन पर्याय (पार्टिशन पीओपी / पूर्ण पीओपी / पीओपी नाही)"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 6,
    title_en: "Ducting / Exhaust",
    title_mr: "डक्टिंग / एक्झॉस्ट",
    description_en: [
      "Poor Airflow – Bad design or sharp bends in the duct reduce exhaust efficiency",
      "Poor Coordination – Ducting must be planned along with electrical, false ceiling"
    ],
    description_mr: [
      "खराब हवेचा प्रवाह - खराब डिझाईन किंवा डक्टमधील तीक्ष्ण वळणे एक्झॉस्ट कार्यक्षमता कमी करतात",
      "खराब समन्वय - डक्टिंगचे नियोजन इलेक्ट्रिकल, खोट्या छतासह करणे आवश्यक आहे"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 7,
    title_en: "Board / Signage Work",
    title_mr: "बोर्ड / साइनेज काम",
    description_en: [
      "Wrong Size – If the board is too big or too small, it won’t fit well or won’t be visible enough",
      "Permission Issues – You may need approval from local authorities or building management to install the sign",
      "Delays in Fabrication or Delivery"
    ],
    description_mr: [
      "चुकीचा आकार - बोर्ड खूप मोठा किंवा खूप लहान असल्यास, तो नीट बसणार नाही किंवा पुरेसा दिसणार नाही",
      "परवानगीचे मुद्दे - साइन स्थापित करण्यासाठी स्थानिक प्राधिकरण किंवा इमारत व्यवस्थापनाची परवानगी आवश्यक असू शकते",
      "फॅब्रिकेशन किंवा डिलिव्हरीमध्ये विलंब"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 8,
    title_en: "Gas Pipeline Work",
    title_mr: "गॅस पाइपलाइन काम",
    description_en: [
      "Leakage Risk – If joints are not sealed properly, gas leaks can happen, which is very dangerous",
      "Improper Installation – If the pipeline is not laid correctly, it may block, leak, or not supply gas properly",
      "No Testing Before Use",
      "Material Availability Issues – MS / GI pipe not available on-site owner uses copper pipes instead"
    ],
    description_mr: [
      "गळतीचा धोका - जर जोडणी योग्यरित्या सील केली नाही तर गॅस गळती होऊ शकते, जे खूप धोकादायक आहे",
      "अयोग्य स्थापना - जर पाइपलाइन योग्यरित्या टाकली गेली नाही तर ती अडकू शकते, गळती होऊ शकते किंवा गॅस पुरवठा योग्यरित्या होणार नाही",
      "वापरापूर्वी चाचणी नाही",
      "साहित्य उपलब्धतेचे मुद्दे - एमएस / जीआय पाइप साइटवर उपलब्ध नसल्यास मालक कॉपर पाइप्स वापरतो"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  },
  {
    srNo: 9,
    title_en: "CCTV Camera",
    title_mr: "सीसीटीव्ही कॅमेरा",
    description_en: [
      "Low-Quality Cameras – Cheap cameras may have poor video quality, especially at night",
      "Wiring Issues – Loose or messy wires can cause camera failure and look untidy",
      "No Remote Access Setup – If not configured properly, you won’t be able to view cameras from your phone or laptop"
    ],
    description_mr: [
      "कमी दर्जाचे कॅमेरे - स्वस्त कॅमेरे, विशेषतः रात्री, खराब व्हिडिओ गुणवत्ता देऊ शकतात",
      "वायरिंगचे मुद्दे - सैल किंवा गोंधळलेल्या वायर्समुळे कॅमेरा अयशस्वी होऊ शकतो आणि अस्वच्छ दिसू शकतो",
      "रिमोट ऍक्सेस सेटअप नाही - योग्यरित्या कॉन्फिगर केले नसल्यास, तुम्ही फोन किंवा लॅपटॉपवरून कॅमेरे पाहू शकणार नाही"
    ],
    discussion_with: ["Owner", "BDM", "Corresponding Team"]
  }
];

const validationMessages = {
  en: { submitSuccess: "Form submitted successfully!" },
  mr: { submitSuccess: "फॉर्म यशस्वीरित्या सबमिट केला!" }
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem"
  },
  th: {
    backgroundColor: "#f1f5f9",
    padding: "0.75rem",
    textAlign: "left",
    fontWeight: 600,
    border: "1px solid #e2e8f0"
  },
  td: {
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    verticalAlign: "top"
  }
};

function CHALLENGESFORNAADBRAMHA() {
  const [language, setLanguage] = useState("en");
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [checkboxes, setCheckboxes] = useState(
    tasks.map(task => task.discussion_with.map(() => false))
  );

  const totalTasks = tasks.length;
  const currentTask = tasks[currentTaskIndex];

  const handleLanguageToggle = () => {
    setLanguage(prev => prev === "mr" ? "en" : "mr");
  };

  const handleCheckboxChange = (taskIndex, personIndex) => {
    setCheckboxes(prev => {
      const newCheckboxes = [...prev];
      newCheckboxes[taskIndex] = [...newCheckboxes[taskIndex]];
      newCheckboxes[taskIndex][personIndex] = !newCheckboxes[taskIndex][personIndex];
      return newCheckboxes;
    });
  };

  const handleNext = () => {
    if (currentTaskIndex < totalTasks - 1) {
      setCurrentTaskIndex(prev => prev + 1);
    } else {
      toast.success(validationMessages[language].submitSuccess, {
        position: "top-right",
        autoClose: 3000
      });
    }
  };

  const handleBack = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(prev => prev - 1);
    }
  };

  const renderTask = () => {
    const title = language === "mr" ? currentTask.title_mr : currentTask.title_en;
    const description = language === "mr" ? currentTask.description_mr : currentTask.description_en;

    return (
      <div>
        <h3 className="text-lg text-center font-semibold mb-2">{title}</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === "mr" ? "अनु. क्र." : "Sr. No"}</th>
              <th style={styles.th}>{language === "mr" ? "आव्हान" : "Challenge"}</th>
              <th style={styles.th}>{language === "mr" ? "वर्णन" : "Description"}</th>
              <th style={styles.th}>{language === "mr" ? "चर्चा कोणासोबत" : "Discussion With"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>{currentTask.srNo}</td>
              <td style={styles.td}>{title}</td>
              <td style={styles.td}>
                <ul className="list-disc pl-5">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
              <td style={styles.td}>
                <ul className="list-none pl-5">
                  {currentTask.discussion_with.map((person, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={checkboxes[currentTaskIndex][index]}
                        onChange={() => handleCheckboxChange(currentTaskIndex, index)}
                        className="mr-2"
                      />
                      {person}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-blue-100 p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Naadbramha Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">Naadbramha</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-lg text-center font-bold mb-4">
          {language === "mr" ? "नादब्रह्माकरिता आव्हाने" : "CHALLENGES FOR NAADBRAMHA"}
        </h2>

        {renderTask()}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            className="text-gray-500 underline disabled:text-gray-300 hover:text-blue-600"
            disabled={currentTaskIndex === 0}
          >
            {language === "mr" ? "मागे" : "Back"}
          </button>
          <button
            onClick={handleNext}
            className={`${
              currentTaskIndex < totalTasks - 1
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            } text-white px-4 py-2 rounded font-medium`}
          >
            {currentTaskIndex < totalTasks - 1
              ? language === "mr" ? "पुढे" : "Next"
              : language === "mr" ? "सबमिट करा" : "Submit"}
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CHALLENGESFORNAADBRAMHA;