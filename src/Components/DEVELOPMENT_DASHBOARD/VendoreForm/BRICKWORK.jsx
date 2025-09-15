import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Brickwork Process ",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "विटकाम प्रक्रिया ",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for brickwork process steps with bilingual support
const processData = [
  {
    en: "The site is inspected and measurements are taken.",
    mr: "साइटचे निरीक्षण केले जाते आणि मोजमाप घेतले जाते.",
  },
  {
    en: "Layout marking is carried out as per the plan (for walls, platforms, toilet bases, etc.).",
    mr: "योजनेनुसार लेआउट मार्किंग केले जाते (भिंती, प्लॅटफॉर्म, टॉयलेट बेस इत्यादींसाठी).",
  },
  {
    en: "Materials are procured, including cement, sand, bricks/blocks, gravel, water, trowels, and leveling tools.",
    mr: "साहित्य खरेदी केले जाते, ज्यामध्ये सिमेंट, वाळू, विटा/ब्लॉक्स, खडी, पाणी, ट्रॉवेल आणि लेव्हलिंग साधने समाविष्ट आहेत.",
  },
  {
    en: "Base preparation is done, which includes leveling, PCC, and waterproofing if required.",
    mr: "पायाची तयारी केली जाते, ज्यामध्ये लेव्हलिंग, पीसीसी आणि आवश्यक असल्यास वॉटरप्रूफिंग समाविष्ट आहे.",
  },
  {
    en: "Bricks or blocks are laid using mortar in the ratio of 1:4 or 1:6.",
    mr: "1:4 किंवा 1:6 गुणोत्तरात मॉर्टर वापरून विटा किंवा ब्लॉक्स ठेवले जातात.",
  },
  {
    en: "Alignment and verticality are checked using a plumb bob and spirit level.",
    mr: "प्लंब बॉब आणि स्पिरिट लेव्हल वापरून संरेखन आणि उभेपणा तपासला जातो.",
  },
  {
    en: "Brickwork or blockwork is cured properly.",
    mr: "विटकाम किंवा ब्लॉकवर्क योग्यरित्या क्युर केले जाते.",
  },
  {
    en: "Internal and external plastering is carried out with either a single or double coat.",
    mr: "आतील आणि बाह्य प्लास्टरिंग एकल किंवा दुहेरी कोटसह केले जाते.",
  },
  {
    en: "Surface finishing is completed, including grooves, smooth finishing, and leveling.",
    mr: "पृष्ठभागाची फिनिशिंग पूर्ण केली जाते, ज्यामध्ये खोबणी, गुळगुळीत फिनिशिंग आणि लेव्हलिंग समाविष्ट आहे.",
  },
  {
    en: "The work area is cured and cleaned.",
    mr: "कामाचे क्षेत्र क्युर केले जाते आणि स्वच्छ केले जाते.",
  },
  {
    en: "The final handover is completed with photos, if required.",
    mr: "फोटोंसह अंतिम हस्तांतरण पूर्ण केले जाते, आवश्यक असल्यास.",
  },
];

function BRICKWORK() {
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
            <img src={logo} alt="Brickwork Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
         
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div> <div className="flex-grow text-center">
            <h1 className="text-lg font-semibold">{config[language].title}</h1>
          </div>
        {renderTable()}
      </div>
    </div>
  );
}

export default BRICKWORK;