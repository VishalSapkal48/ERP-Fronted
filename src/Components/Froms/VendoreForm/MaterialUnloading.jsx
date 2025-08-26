import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Material Unloading Process",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "सामग्री उतरविणे प्रक्रिया ",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for material unloading process steps with bilingual support
const processData = [
  {
    en: "The branch owner must arrange six laborers to unload the materials from the vehicle and complete the setup.",
    mr: "शाखा मालकाने वाहनातून सामग्री उतरविण्यासाठी आणि सेटअप पूर्ण करण्यासाठी सहा मजूरांची व्यवस्था करावी.",
  },
  {
    en: "Proper planning should be ensured so that the vendor can carry out the fitting of the materials received from the company efficiently.",
    mr: "योग्य नियोजन सुनिश्चित केले पाहिजे जेणेकरून विक्रेता कंपनीकडून प्राप्त सामग्रीचे फिटिंग कार्यक्षमतेने करू शकेल.",
  },
];

function MaterialUnloading() {
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
            <img src={logo} alt="Material Unloading Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
          <div className="flex-grow text-center">
            <h1 className="text-lg font-semibold">{config[language].title}</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>
        {renderTable()}
      </div>
    </div>
  );
}

export default MaterialUnloading;