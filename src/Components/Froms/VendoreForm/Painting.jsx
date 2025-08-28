import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Painting Process ",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "पेंटिंग प्रक्रिया ",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for painting process steps with bilingual support
const processData = [
  {
    en: "Begin with surface inspection and area measurement.",
    mr: "पृष्ठभाग तपासणी आणि क्षेत्र मोजमापाने सुरुवात करा.",
  },
  {
    en: "Select the materials and get shade approval (including primer, putty, and paint types).",
    mr: "साहित्य निवडा आणि शेड मंजूरी मिळवा (प्राइमर, पोटी आणि पेंट प्रकारांसह).",
  },
  {
    en: "Prepare the surface by cleaning and scraping off the old paint.",
    mr: "जुना पेंट साफ करून आणि खरडून पृष्ठभाग तयार करा.",
  },
  {
    en: "Apply wall putty in one or two coats as required.",
    mr: "आवश्यकतेनुसार भिंतीवर एक किंवा दोन थर पोटी लावा.",
  },
  {
    en: "Carry out surface sanding and smoothing.",
    mr: "पृष्ठभाग वाळूने घासणे आणि गुळगुळीत करणे करा.",
  },
  {
    en: "Apply the primer coating (either water-based or oil-based).",
    mr: "प्राइमर कोटिंग लावा (पाणी-आधारित किंवा तेल-आधारित).",
  },
  {
    en: "Apply the first coat of paint (emulsion, enamel, or distemper, as specified).",
    mr: "पेंटचा पहिला थर लावा (इमल्शन, इनॅमल किंवा डिस्टेंपर, निर्दिष्ट केल्यानुसार).",
  },
  {
    en: "After drying and inspection, apply the second coat of paint.",
    mr: "कोरडे होऊन आणि तपासणीनंतर, पेंटचा दुसरा थर लावा.",
  },
  {
    en: "Perform touch-up work and complete the final finishing.",
    mr: "टच-अप काम करा आणि अंतिम समाप्ती पूर्ण करा.",
  },
  {
    en: "Conduct final cleaning and hand over the site.",
    mr: "अंतिम साफसफाई करा आणि साइट हस्तांतरित करा.",
  },
];

function Painting() {
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
            <img src={logo} alt="Painting Logo" className="h-10 w-10" />
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

export default Painting;