import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Shutter Logo Work Process ",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "शटर लोगो कार्य प्रक्रिया ",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for shutter logo work process steps with bilingual support
const processData = [
  {
    en: "Obtain approval for the brand logo design, size, and color.",
    mr: "ब्रँड लोगो डिझाइन, आकार आणि रंगासाठी मंजूरी मिळवा.",
  },
  {
    en: "Finalize the site location (e.g., shop shutter).",
    mr: "साइट स्थान निश्चित करा (उदा., दुकानाचा शटर).",
  },
  {
    en: "Clean the surface and prepare the base wall.",
    mr: "पृष्ठभाग स्वच्छ करा आणि आधार भिंत तयार करा.",
  },
  {
    en: "Apply the base coat with the required background color.",
    mr: "आवश्यक पार्श्वभूमी रंगासह आधार कोट लावा.",
  },
  {
    en: "Mark the logo position, ensuring proper centering and leveling.",
    mr: "लोगोचे स्थान चिन्हांकित करा, योग्य मध्यवर्ती आणि समतलता सुनिश्चित करा.",
  },
  {
    en: "Paint the logo using approved colors with brush, spray, or roller.",
    mr: "मंजूर रंगांचा वापर करून ब्रश, स्प्रे किंवा रोलरने लोगो रंगा.",
  },
  {
    en: "Complete final finishing and apply a protective coating for the logo, if required.",
    mr: "अंतिम समाप्ती पूर्ण करा आणि आवश्यक असल्यास लोगोसाठी संरक्षक कोटिंग लावा.",
  },
  {
    en: "Get client approval and document the completed work with photographs.",
    mr: "क्लायंटची मंजूरी मिळवा आणि पूर्ण झालेले काम फोटोंसह दस्तऐवजीकरण करा.",
  },
];

function SHUTTERLOGOWORK() {
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
            <img src={logo} alt="Shutter Logo Work Logo" className="h-10 w-10" />
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

export default SHUTTERLOGOWORK;