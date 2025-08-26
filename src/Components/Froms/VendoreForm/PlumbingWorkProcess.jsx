import React, { useState } from "react";
import CPVCPipes from "../../../../public/Images/PlumbingWorkProcess/CPVCPipes.png";
import LongBodySteelTap from "../../../../public/Images/PlumbingWorkProcess/LongBodySteelTap.png";
import Pipes from "../../../../public/Images/PlumbingWorkProcess/Pipes.png";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Plumbing Work Process",
    processHeaders: ["Sr. No.", "Work"],
    materialHeaders: ["Material", "Approved Brands (Company Name)", "Specification / Colour", "Images"],
  },
  mr: {
    title: "प्लंबिंग वर्क प्रक्रिया",
    processHeaders: ["अ. क्र.", "काम"],
    materialHeaders: ["साहित्य", "मान्यताप्राप्त ब्रँड (कंपनीचे नाव)", "विनिर्देश / रंग", "फोटो"],
  },
};

// Data for plumbing work process steps with bilingual support
const processData = [
  {
    en: "The requirement collection and fixture planning are carried out.",
    mr: "आवश्यकता संकलन आणि फिक्स्चर नियोजन केले जाते.",
  },
  {
    en: "Site measurement and layout marking for the kitchen and other areas are completed.",
    mr: "स्वयंपाकघर आणि इतर क्षेत्रांसाठी साइट मोजमाप आणि लेआउट मार्किंग पूर्ण केले जाते.",
  },
  {
    en: "Wall chasing or cutting is done to create routes for hot and cold water lines as well as drainage.",
    mr: "गरम आणि थंड पाण्याच्या लाईन्स तसेच ड्रेनेजसाठी मार्ग तयार करण्यासाठी भिंत खोदणे किंवा कापणे केले जाते.",
  },
  {
    en: "Concealed pipes (CPVC / UPVC/PPR / GI, etc., as per design) are laid properly.",
    mr: "छुप्या पाइप्स (सीपीव्हीसी / यूपीव्हीसी / पीपीआर / जीआय, इत्यादी, डिझाइननुसार) योग्यरित्या टाकल्या जातात.",
  },
  {
    en: "A leak test with pressure testing is conducted for all pipe joints and lines.",
    mr: "सर्व पाइप जोड आणि लाईन्ससाठी प्रेशर चाचणीसह गळती चाचणी केली जाते.",
  },
  {
    en: "Concealed taps, angle valves, and wall mixers (if required) are fixed.",
    mr: "छुपे नळ, अँगल व्हॉल्व्ह आणि वॉल मिक्सर (आवश्यक असल्यास) निश्चित केले जातात.",
  },
  {
    en: "Civil work is performed, including pipe concealing and wall plastering.",
    mr: "सिव्हिल काम केले जाते, ज्यामध्ये पाइप छुपवणे आणि भिंत प्लास्टरिंग समाविष्ट आहे.",
  },
  {
    en: "Final fixtures such as WC, washbasins, taps, and showers are installed after tiling.",
    mr: "टाइलिंगनंतर डब्ल्यूसी, वॉशबेसिन, नळ आणि शॉवर यांसारख्या अंतिम फिक्स्चर स्थापित केल्या जातात.",
  },
  {
    en: "The water flow and drainage system are tested thoroughly.",
    mr: "पाण्याचा प्रवाह आणि ड्रेनेज सिस्टमची पूर्णपणे चाचणी केली जाते.",
  },
  {
    en: "The work is handed over along with a final checklist and photographs.",
    mr: "अंतिम चेकलिस्ट आणि फोटोंसह काम हस्तांतरित केले जाते.",
  },
  {
    en: "Note: The vendor will be responsible for fitting and installing all materials provided by the company.",
    mr: "टीप: कंपनीने प्रदान केलेल्या सर्व सामग्रीचे फिटिंग आणि स्थापना करण्याची जबाबदारी विक्रेत्याची असेल.",
  },
];

// Data for materials with bilingual support for material names
const materialData = [
  {
    material: { en: "UPVC Pipes", mr: "यूपीव्हीसी पाइप्स" },
    company: "Plasto, Paras, Supreme, Prince, Finolex",
    specColour: "As per work requirement",
    images: [Pipes],
  },
  {
    material: { en: "CPVC Pipes", mr: "सीपीव्हीसी पाइप्स" },
    company: "Plasto, Paras, Supreme, Prince, Finolex",
    specColour: "As per work requirement",
    images: [CPVCPipes],
  },
  {
    material: { en: "PVC Pipes", mr: "पीव्हीसी पाइप्स" },
    company: "Plasto, Paras, Supreme, Prince, Finolex",
    specColour: "As per work requirement",
    images: [],
  },
  {
    material: { en: "Water Tank", mr: "पाण्याची टाकी" },
    company: "Any Brand",
    specColour: "2000 Liters",
    images: [],
  },
  {
    material: { en: "Long Body Steel Tap", mr: "लॉंग बॉडी स्टील नळ" },
    company: "Any Brand",
    specColour: "As per work requirement",
    images: [LongBodySteelTap],
  },
];

function PlumbingWorkProcess() {
  const [language, setLanguage] = useState("mr"); // Default language set to Marathi

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const renderProcessTable = () => (
    <div className="overflow-x-auto mt-2 mb-6">
      <table className="table-auto w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {config[language].processHeaders.map((header, idx) => (
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

  const renderMaterialTable = () => (
    <div className="overflow-x-auto mt-6">
      <table className="table-auto w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {config[language].materialHeaders.map((header, idx) => (
              <th key={idx} className="border px-4 py-2 text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {materialData.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-4 py-2 text-center">{row.material[language]}</td>
              <td className="border px-4 py-2 text-center">{row.company}</td>
              <td className="border px-4 py-2 text-center">{row.specColour}</td>
              <td className="border px-4 py-2 text-center">
                <div className="flex gap-2 justify-center">
                  {row.images && row.images.length > 0 ? (
                    row.images.map((image, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={image}
                        alt={`${row.material[language]} photo ${imgIdx + 1}`}
                        className="w-16 h-16 object-cover rounded"
                        loading="lazy"
                      />
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">
                      {language === "mr" ? "फोटो नाही" : "No Photo"}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        {/* Header */}
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Plumbing Work Logo" className="h-10 w-10" />
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
        {/* Tables */}
        {renderProcessTable()}
        {renderMaterialTable()}
      </div>
    </div>
  );
}

export default PlumbingWorkProcess;