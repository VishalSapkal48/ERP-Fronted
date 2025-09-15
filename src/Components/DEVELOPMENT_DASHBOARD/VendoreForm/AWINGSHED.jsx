import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Awning Shed Work Process ",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "आवरण शेड कार्य प्रक्रिया",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for awning shed process steps with bilingual support
const processData = [
  {
    en: "The requirements are finalized, including size, type (fixed, retractable, or covered).",
    mr: "आवश्यकता निश्चित केल्या जातात, ज्यामध्ये आकार, प्रकार (निश्चित, मागे घेता येणारा, किंवा आच्छादित) समाविष्ट आहे.",
  },
  {
    en: "Site measurement and a structural feasibility check are carried out.",
    mr: "साइटचे मापन आणि संरचनात्मक व्यवहार्यता तपासणी केली जाते.",
  },
  {
    en: "The design is approved, covering the frame type, sheet color, and any branding requirements.",
    mr: "डिझाइन मंजूर केले जाते, ज्यामध्ये फ्रेमचा प्रकार, शीटचा रंग आणि कोणत्याही ब्रँडिंग आवश्यकता समाविष्ट आहेत.",
  },
  {
    en: "The necessary materials are procured, including MS/Aluminium frames, fabric sheets, fasteners, brackets, screws, and paint.",
    mr: "आवश्यक साहित्य खरेदी केले जाते, ज्यामध्ये एमएस/अल्युमिनियम फ्रेम्स, फॅब्रिक शीट्स, फास्टनर्स, ब्रॅकेट्स, स्क्रू आणि पेंट समाविष्ट आहे.",
  },
  {
    en: "Fabrication work is performed, which includes frame cutting, welding, and drilling.",
    mr: "फॅब्रिकेशन काम केले जाते, ज्यामध्ये फ्रेम कटिंग, वेल्डिंग आणि ड्रिलिंग समाविष्ट आहे.",
  },
  {
    en: "The surface (wall or support beam) is prepared for installation.",
    mr: "स्थापनेसाठी पृष्ठभाग (भिंत किंवा सपोर्ट बीम) तयार केला जातो.",
  },
  {
    en: "The frame structure is installed on-site.",
    mr: "फ्रेम संरचना साइटवर स्थापित केली जाते.",
  },
  {
    en: "The sheet or fabric is fixed onto the frame with proper tension.",
    mr: "शीट किंवा फॅब्रिक योग्य तणावासह फ्रेमवर निश्चित केले जाते.",
  },
  {
    en: "Alignment and level checks are performed.",
    mr: "संरेखन आणि स्तर तपासणी केली जाते.",
  },
  {
    en: "Final touch-ups are done, including painting, branding, or water sealing.",
    mr: "अंतिम टच-अप्स केले जातात, ज्यामध्ये पेंटिंग, ब्रँडिंग किंवा वॉटर सीलिंग समाविष्ट आहे.",
  },
  {
    en: "The project is handed over with photos and safety instructions.",
    mr: "प्रकल्प फोटो आणि सुरक्षितता सूचनांसह सुपूर्द केला जातो.",
  },
];

function AWINGSHED() {
  const [language, setLanguage] = useState("mr"); // Default language set to Marathi

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const renderTable = () => {
    return (
      <div className="overflow-x-auto mt-2">
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {config[language].headers.map((header, idx) => (
                <th key={idx} className="border px-4 py-2 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {processData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{idx + 1}</td>
                <td className="border px-4 py-2">{row[language]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-3xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Awning Shed Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>

          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>
                  <div className="flex-grow text-center">
            <h1 className="text-lg font-semibold">{config[language].title}</h1>
          </div>
        {renderTable()}
      </div>
    </div>
  );
}

export default AWINGSHED;