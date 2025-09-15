import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "LOFT Construction Process ",
    tableHeaders: ["Sr. No.", "Work"],
  },
  mr: {
    title: "लॉफ्ट बांधकाम प्रक्रिया ",
    tableHeaders: ["अ. क्र.", "काम"],
  },
};

// Data for loft construction process steps with bilingual support
const tableData = [
  {
    en: "First, the requirement collection and site measurement are carried out.",
    mr: "प्रथम, आवश्यकता संकलन आणि साइट मोजमाप केले जाते.",
  },
  {
    en: "The loft design is finalized, including the type (open or closed), size, height, and material selection.",
    mr: "लॉफ्ट डिझाइन निश्चित केले जाते, ज्यामध्ये प्रकार (खुले किंवा बंद), आकार, उंची आणि साहित्य निवड समाविष्ट आहे.",
  },
  {
    en: "The required materials are procured, such as MS frame sections, ACP or cement sheets, and hardware items like hinges, handles, and locks for shutters.",
    mr: "आवश्यक साहित्य खरेदी केले जाते, जसे की एमएस फ्रेम विभाग, एसीपी किंवा सिमेंट शीट्स आणि शटरसाठी हिंग्ज, हँडल्स आणि लॉक यांसारखे हार्डवेअर आयटम.",
  },
  {
    en: "Site marking and wall preparation are completed before installation begins.",
    mr: "स्थापनेपूर्वी साइट मार्किंग आणि भिंत तयारी पूर्ण केली जाते.",
  },
  {
    en: "The frame is fixed using welding or anchor fastening methods.",
    mr: "फ्रेम वेल्डिंग किंवा अँकर फास्टनिंग पद्धती वापरून निश्चित केली जाते.",
  },
  {
    en: "A base sheet, such as a cement board, is installed.",
    mr: "सिमेंट बोर्डसारखी बेस शीट स्थापित केली जाते.",
  },
  {
    en: "Shutters are fitted, if applicable, as per the design.",
    mr: "लागू असल्यास, डिझाइननुसार शटर बसवले जातात.",
  },
  {
    en: "Finishing work is carried out, including painting.",
    mr: "पेंटिंगसह समाप्तीचे काम केले जाते.",
  },
  {
    en: "The work area is thoroughly cleaned after completion.",
    mr: "काम पूर्ण झाल्यावर कामाचे क्षेत्र पूर्णपणे स्वच्छ केले जाते.",
  },
  {
    en: "A detailed inspection is conducted, and the work is handed over with photographs.",
    mr: "सविस्तर तपासणी केली जाते आणि फोटोंसह काम हस्तांतरित केले जाते.",
  },
];

function LoftChecklist() {
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
              {config[language].tableHeaders.map((header, idx) => (
                <th key={idx} className="border px-4 py-2 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
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
      <div className="w-full max-w-2xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Loft Construction Logo" className="h-10 w-10" />
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

export default LoftChecklist;