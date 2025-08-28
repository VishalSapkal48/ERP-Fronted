import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Gas Pipeline Work Process",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "गॅस पाइपलाइन वर्क प्रक्रिया ",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for gas pipeline work process steps with bilingual support
const processData = [
  {
    en: "The requirements are collected and the layout is planned.",
    mr: "आवश्यकता गोळा केल्या जातात आणि लेआउटची योजना केली जाते.",
  },
  {
    en: "The site is measured and marked for the burner, cylinder point, and other necessary positions.",
    mr: "साइटचे मोजमाप केले जाते आणि बर्नर, सिलेंडर पॉइंट आणि इतर आवश्यक स्थानांसाठी चिन्हांकित केले जाते.",
  },
  {
    en: "The material is finalized, including the pipe type (Copper, MS, GI, or Composite).",
    mr: "साहित्य निश्चित केले जाते, ज्यामध्ये पाइप प्रकार (तांबे, एमएस, जीआय किंवा कम्पोझिट) समाविष्ट आहे.",
  },
  {
    en: "Pipes are cut and bent as per the approved route layout.",
    mr: "मंजूर मार्ग लेआउटप्रमाणे पाइप्स कापले आणि वाकवले जातात.",
  },
  {
    en: "The pipes are laid and fixed with wall-mounted clamps.",
    mr: "पाइप्स ठेवले जातात आणि भिंतीवर बसवलेल्या क्लॅम्प्ससह निश्चित केले जातात.",
  },
  {
    en: "Valves, regulators, and joints are fitted according to safety norms.",
    mr: "व्हॉल्व्ह, रेग्युलेटर्स आणि जोड सुरक्षा नियमांनुसार बसवले जातात.",
  },
  {
    en: "A leak test is carried out using a soap solution or pressure gauge.",
    mr: "साबण द्रावण किंवा प्रेशर गेज वापरून गळती चाचणी केली जाते.",
  },
  {
    en: "The connection is made to the appliance, such as the burner.",
    mr: "बर्नरसारख्या उपकरणाशी जोडणी केली जाते.",
  },
  {
    en: "Final testing and safety inspection are conducted.",
    mr: "अंतिम चाचणी आणि सुरक्षा तपासणी केली जाते.",
  },
  {
    en: "The system is handed over with certification, if applicable.",
    mr: "लागू असल्यास, प्रमाणपत्रासह सिस्टम हस्तांतरित केली जाते.",
  },
];

function GASPIPELINEWORK() {
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
            <img src={logo} alt="Gas Pipeline Work Logo" className="h-10 w-10" />
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

export default GASPIPELINEWORK;