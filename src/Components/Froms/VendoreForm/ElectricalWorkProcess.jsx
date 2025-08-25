import React, { useState } from "react";
import SwitchandBoards from "../../../../public/Images/ElectricalWorkProcess/SwitchesandBoards.png";
import Wire from "../../../../public/Images/ElectricalWorkProcess/Wire.png";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Electrical Work Process Checklist",
    processHeaders: ["Sr. No.", "Work"],
    materialHeaders: ["Material", "Company/Brand", "Colour", "Remarks", "Images"],
  },
  mr: {
    title: "इलेक्ट्रिकल वर्क प्रोसेस चेकलिस्ट",
    processHeaders: ["अ. क्र.", "काम"],
    materialHeaders: ["साहित्य", "कंपनी/ब्रँड", "रंग", "टीप्स", "फोटो"],
  },
};

const processData = [
  { item: "The requirement and load planning are carried out, along with an earthing check." },
  { item: "Site marking is done as per the layout, covering switches, lights, and electrical points." },
  { item: "Wall chasing or cutting is performed using a cutter or chisel to create pipe routes." },
  { item: "Conduit pipes and boxes (ISI marked) are laid with proper bends and saddles." },
  { item: "Electrical wiring is installed according to the required load (1.0, 1.5, 2.5, 4.0 sqmm, etc.)." },
  { item: "Continuity and insulation testing are conducted to ensure safety and compliance." },
  { item: "Boards, boxes, and pipes are fixed with proper alignment." },
  { item: "Civil work is completed by concealing and plastering over the conduits." },
  { item: "Switches and sockets are fixed after painting is completed." },
  { item: "Final testing and load verification are carried out." },
  { item: "The project is handed over along with a detailed report and site photographs." },
  { item: "Note: The vendor shall be responsible for fitting and installing all materials provided by the company." },
];

const materialData = [
  { material: "Switches and Boards", company: "LEGRAND/Anchor", colour: "White", remarks: "", images: [SwitchandBoards] },
  { material: "Wire", company: "Polycab", colour: "As per work", remarks: "", images: [Wire] },
  { material: "Camera Wire", company: "Polycab 4+1/D-Link", colour: "As per work", remarks: "" },
  { material: "15/22 Watt Light", company: "Any brand (2-year warranty)", colour: "White/Off-white" },
  { material: "Wall Fan", company: "Bajaj / Usha /Crompton", colour: "White", remarks: "" },
  { material: "Exhaust Fan", company: "Any brand (18-inch, metal body)", colour: "Grey", remarks: "" },
];

function ElectricalWorkProcess() {
  const [language, setLanguage] = useState("mr");

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
                <td className="border px-4 py-2">{row.item}</td>
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
            <h1 className="text-xl font-bold">Electrical Work</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold mb-6">
          {config[language].title}
        </h2>

        {/* Tables */}
        {renderProcessTable()}
        {renderMaterialTable()}
      </div>
    </div>
  );
}

export default ElectricalWorkProcess;
