import React, { useState } from "react";
import SwitchandBoards from "../../../../public/Images/ElectricalWorkProcess/SwitchesandBoards.png";
import Wire from "../../../../public/Images/ElectricalWorkProcess/Wire.png";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Electrical Work Process Checklist",
    processHeaders: ["Sr. No.", "Work"],
    materialHeaders: ["Material", "Company/Brand", "Colour", "Remarks", "Images"],
  },
  mr: {
    title: "इलेक्ट्रिकल वर्क प्रक्रिया चेकलिस्ट",
    processHeaders: ["अ. क्र.", "काम"],
    materialHeaders: ["साहित्य", "कंपनी/ब्रँड", "रंग", "टीप्स", "फोटो"],
  },
};

// Data for electrical work process steps with bilingual support
const processData = [
  {
    en: "The requirement and load planning are carried out, along with an earthing check.",
    mr: "आवश्यकता आणि लोड नियोजन केले जाते, तसेच अर्थिंग तपासणी केली जाते.",
  },
  {
    en: "Site marking is done as per the layout, covering switches, lights, and electrical points.",
    mr: "लेआउटनुसार साइट मार्किंग केले जाते, ज्यामध्ये स्विचेस, लाइट्स आणि इलेक्ट्रिकल पॉइंट्स समाविष्ट आहेत.",
  },
  {
    en: "Wall chasing or cutting is performed using a cutter or chisel to create pipe routes.",
    mr: "पाइप मार्ग तयार करण्यासाठी कटर किंवा छिन्नी वापरून भिंत खणणे किंवा कटिंग केले जाते.",
  },
  {
    en: "Conduit pipes and boxes (ISI marked) are laid with proper bends and saddles.",
    mr: "कंड्यूइट पाइप्स आणि बॉक्सेस (आयएसआय मार्क) योग्य वाकणे आणि सॅडल्ससह ठेवले जातात.",
  },
  {
    en: "Electrical wiring is installed according to the required load (1.0, 1.5, 2.5, 4.0 sqmm, etc.).",
    mr: "आवश्यक लोडनुसार इलेक्ट्रिकल वायरिंग स्थापित केली जाते (1.0, 1.5, 2.5, 4.0 स्क्वेअर मिमी इ.).",
  },
  {
    en: "Continuity and insulation testing are conducted to ensure safety and compliance.",
    mr: "सुरक्षितता आणि अनुपालन सुनिश्चित करण्यासाठी सातत्य आणि इन्सुलेशन चाचणी केली जाते.",
  },
  {
    en: "Boards, boxes, and pipes are fixed with proper alignment.",
    mr: "बोर्ड्स, बॉक्सेस आणि पाइप्स योग्य संरेखनासह निश्चित केले जातात.",
  },
  {
    en: "Civil work is completed by concealing and plastering over the conduits.",
    mr: "कंड्यूइट्सवर लपवून आणि प्लास्टरिंग करून सिव्हिल काम पूर्ण केले जाते.",
  },
  {
    en: "Switches and sockets are fixed after painting is completed.",
    mr: "पेंटिंग पूर्ण झाल्यावर स्विचेस आणि सॉकेट्स निश्चित केले जातात.",
  },
  {
    en: "Final testing and load verification are carried out.",
    mr: "अंतिम चाचणी आणि लोड सत्यापन केले जाते.",
  },
  {
    en: "The project is handed over along with a detailed report and site photographs.",
    mr: "सविस्तर अहवाल आणि साइट फोटोंसह प्रकल्प हस्तांतरित केला जातो.",
  },
  {
    en: "Note: The vendor shall be responsible for fitting and installing all materials provided by the company.",
    mr: "टीप: कंपनीद्वारे प्रदान केलेले सर्व साहित्य बसवणे आणि स्थापित करण्याची जबाबदारी विक्रेत्याची असेल.",
  },
];

// Data for material specifications (no translation needed)
const materialData = [
  { material: "Switches and Boards", company: "LEGRAND/Anchor", colour: "White", remarks: "", images: [SwitchandBoards] },
  { material: "Wire", company: "Polycab", colour: "As per work", remarks: "", images: [Wire] },
  { material: "Camera Wire", company: "Polycab 4+1/D-Link", colour: "As per work", remarks: "" },
  { material: "15/22 Watt Light", company: "Any brand (2-year warranty)", colour: "White/Off-white" },
  { material: "Wall Fan", company: "Bajaj / Usha /Crompton", colour: "White", remarks: "" },
  { material: "Exhaust Fan", company: "Any brand (18-inch, metal body)", colour: "Grey", remarks: "" },
];

function ElectricalWorkProcess() {
  const [language, setLanguage] = useState("mr"); // Default language set to Marathi

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const renderProcessTable = () => {
    return (
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
  };

  const renderMaterialTable = () => {
    return (
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
                <td className="border px-4 py-2 text-center">{row.material}</td>
                <td className="border px-4 py-2 text-center">{row.company}</td>
                <td className="border px-4 py-2 text-center">{row.colour}</td>
                <td className="border px-4 py-2 text-center">{row.remarks || "-"}</td>
                <td className="border px-4 py-2 text-center">
                  <div className="flex gap-2 justify-center">
                    {row.images && row.images.length > 0 ? (
                      row.images.map((image, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={image}
                          alt={`${row.material} photo ${imgIdx + 1}`}
                          className="w-16 h-16 object-cover rounded"
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
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        {/* Header */}
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Electrical Work Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
        
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>
        {/* Tables */}  <div className="flex-grow text-center">
            <h1 className="text-lg font-semibold">{config[language].title}</h1>
          </div>
        {renderProcessTable()}
        {renderMaterialTable()}
      </div>
    </div>
  );
}

export default ElectricalWorkProcess;