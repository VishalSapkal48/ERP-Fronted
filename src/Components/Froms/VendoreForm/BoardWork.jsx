import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Board Work Process ",
    processHeaders: ["Sr. No.", "Work"],
    materialHeaders: ["Material", "Company Name", "Colour & Code", "Remarks"],
  },
  mr: {
    title: "बोर्ड वर्क प्रक्रिया ",
    processHeaders: ["अ. क्र.", "काम"],
    materialHeaders: ["साहित्य", "कंपनीचे नाव", "रंग व कोड", "टीप्स"],
  },
};

// Data for board work process steps with bilingual support
const processData = [
  {
    en: "Finalize the requirements, including size, location, and material.",
    mr: "आवश्यकता निश्चित करा, ज्यामध्ये आकार, स्थान आणि साहित्य समाविष्ट आहे.",
  },
  {
    en: "Carry out site measurement and level checking.",
    mr: "साइटचे मापन आणि स्तर तपासणी करा.",
  },
  {
    en: "Approve the design, including font, color, branding, and light type (if any).",
    mr: "डिझाइन मंजूर करा, ज्यामध्ये फॉन्ट, रंग, ब्रँडिंग आणि प्रकाश प्रकार (असल्यास) समाविष्ट आहे.",
  },
  {
    en: "Procure the required materials such as MS frame, ACP, acrylic, LED, etc.",
    mr: "आवश्यक साहित्य खरेदी करा, जसे की एमएस फ्रेम, एसीपी, अॅक्रिलिक, एलईडी इ.",
  },
  {
    en: "Complete the fabrication work at the workshop.",
    mr: "कार्यशाळेत फॅब्रिकेशन काम पूर्ण करा.",
  },
  {
    en: "Perform electrical and LED testing (if applicable).",
    mr: "इलेक्ट्रिकल आणि एलईडी चाचणी करा (लागू असल्यास).",
  },
  {
    en: "Prepare the site through wall cleaning and anchor marking.",
    mr: "भिंत स्वच्छता आणि अँकर मार्किंगद्वारे साइट तयार करा.",
  },
  {
    en: "Transport and install the frame or board at the site.",
    mr: "फ्रेम किंवा बोर्ड साइटवर वाहतूक करा आणि स्थापित करा.",
  },
  {
    en: "Check the level and alignment of the installation.",
    mr: "स्थापनेचे स्तर आणि संरेखन तपासा.",
  },
  {
    en: "Fix the final branding using vinyl, acrylic, or backlit materials as required.",
    mr: "विनाइल, अॅक्रिलिक किंवा बॅकलाइट साहित्य वापरून अंतिम ब्रँडिंग निश्चित करा, जसे आवश्यक आहे.",
  },
  {
    en: "Complete the electrical connection (if the board includes LED or backlighting).",
    mr: "इलेक्ट्रिकल जोडणी पूर्ण करा (बोर्डात एलईडी किंवा बॅकलाइटिंग समाविष्ट असल्यास).",
  },
  {
    en: "Conduct testing, cleaning, and final handover, including photographs for documentation.",
    mr: "चाचणी, स्वच्छता आणि अंतिम हस्तांतरण करा, ज्यामध्ये दस्तऐवजीकरणासाठी फोटो समाविष्ट आहेत.",
  },
];

// Data for material specifications (no translation needed)
const materialData = [
  { material: "ACP Sheet", company: "Moon Bond", colourCode: "114 Matt Black", remarks: "NB" },
  { material: "ACP Sheet", company: "Moon Bond", colourCode: "142 Satin White", remarks: "Yewale + NB" },
  { material: "ACP Sheet", company: "Moon Bond", colourCode: "128 Traffic Yellow", remarks: "NB" },
  { material: "Fabrication", company: "Local Pipe (1.5 inch)", colourCode: "Grey", remarks: "" },
];

function BoardWork() {
  const [language, setLanguage] = useState("mr"); // Default language set to Marathi

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const renderProcessTable = () => {
    return (
      <div className="overflow-x-auto mt-4 mb-8">
        <h3 className="text-md font-semibold text-center mb-2">
          {language === "en" ? "Board Work Process" : "बोर्ड वर्क प्रक्रिया"}
        </h3>
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
  };

  const renderMaterialTable = () => {
    return (
      <div className="overflow-x-auto mt-8">
        <h3 className="text-md font-semibold text-center mb-2">
          {language === "en" ? "Material Specifications" : "साहित्य तपशील"}
        </h3>
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
                <td className="border px-4 py-2 text-center">{row.material}</td>
                <td className="border px-4 py-2 text-center">{row.company}</td>
                <td className="border px-4 py-2 text-center">{row.colourCode}</td>
                <td className="border px-4 py-2 text-center">{row.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Board Work Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
        
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>
        {renderProcessTable()}
        {renderMaterialTable()}
      </div>
    </div>
  );
}

export default BoardWork;