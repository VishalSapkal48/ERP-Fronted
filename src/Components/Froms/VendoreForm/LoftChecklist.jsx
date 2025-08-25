import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo

// Configuration for checklist title and translations
const config = {
  en: {
    title: "LOFT Construction Checklist",
    tableHeaders: ["Sr. No.", "Work"],
  },
  mr: {
    title: "लॉफ्ट बांधकाम चेकलिस्ट",
    tableHeaders: ["अ. क्र.", "काम"],
  },
};

const tableData = [
  { item: "first, the requirement collection and site measurement are carried out." },
  { item: "The loft design is then finalized, including the type (open or closed), size, height, and material selection." },
  { item: "After that, the required materials are procured, such as MS frame sections, ACP or cement sheets, and hardware items like hinges, handles, and locks for shutters." },
  { item: "Site marking and wall preparation are completed before installation begins." },
  { item: "The frame is fixed using welding or anchor fastening methods." },
  { item: "A base sheet, such as a cement board, is then installed." },
  { item: "Shutters are fitted, if applicable, as per the design." },
  { item: "Finishing work is carried out, including painting." },
  { item: "The work area is cleaned thoroughly after completion." },
  { item: "Finally, a detailed inspection is conducted, and the work is handed over along with photographs." },
];

function LoftChecklist() {
  const [language, setLanguage] = useState("mr");

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
                <td className="border px-4 py-2 ">{row.item}</td>
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
            <img src={logo} alt="Loft Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-center text-lg font-semibold mb-6">
          {config[language].title}
        </h2>

        {renderTable()}
      </div>
    </div>
  );
}

export default LoftChecklist;