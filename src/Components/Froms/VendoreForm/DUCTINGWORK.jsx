import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Ducting Work Process ",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "डक्टिंग वर्क प्रक्रिया च",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for ducting work process steps with bilingual support
const processData = [
  {
    en: "The requirements are collected, and the duct layout is planned as per the drawing.",
    mr: "आवश्यकता गोळा केल्या जातात आणि रेखाचित्रानुसार डक्ट लेआउटची योजना केली जाते.",
  },
  {
    en: "The site is measured, and the final route is determined.",
    mr: "साइटचे मोजमाप केले जाते आणि अंतिम मार्ग निश्चित केला जातो.",
  },
  {
    en: "The material is finalized, typically using GI sheets.",
    mr: "साहित्य निश्चित केले जाते, सामान्यतः जीआय शीट्स वापरून.",
  },
  {
    en: "The duct sections are fabricated through cutting, bending, and beading.",
    mr: "डक्ट विभाग कटिंग, बेंडिंग आणि बीडिंगद्वारे तयार केले जातात.",
  },
  {
    en: "Pre-assembly and tagging are carried out at the workshop.",
    mr: "कार्यशाळेत प्री-असेंब्ली आणि टॅगिंग केले जाते.",
  },
  {
    en: "The fabricated ducts are transported to the site, and marking is done for installation.",
    mr: "तयार केलेले डक्ट साइटवर वाहतूक केले जातात आणि स्थापनेसाठी चिन्हांकन केले जाते.",
  },
  {
    en: "The ducts are installed using supports, hangers, angles, and bolts.",
    mr: "सपोर्ट, हॅंगर्स, अँगल्स आणि बोल्ट्स वापरून डक्ट स्थापित केले जातात.",
  },
  {
    en: "Joints are sealed with sealant, gaskets, rivets, or duct tape.",
    mr: "जोड सीलंट, गास्केट, रिव्हेट्स किंवा डक्ट टेप वापरून सील केले जातात.",
  },
  {
    en: "If required, insulation wrapping is applied using materials such as nitrile or glass wool.",
    mr: "आवश्यक असल्यास, नायट्राइल किंवा ग्लास वूलसारख्या साहित्यांचा उपयोग करून इन्सुलेशन रॅपिंग केले जाते.",
  },
  {
    en: "A final leakage test and airflow check are conducted.",
    mr: "अंतिम गळती चाचणी आणि हवेचा प्रवाह तपासणी केली जाते.",
  },
  {
    en: "The system is handed over with a commissioning report.",
    mr: "कमिशनिंग अहवालासह सिस्टम हस्तांतरित केली जाते.",
  },
];

function DUCTINGWORK() {
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
            <img src={logo} alt="Ducting Work Logo" className="h-10 w-10" />
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

export default DUCTINGWORK;