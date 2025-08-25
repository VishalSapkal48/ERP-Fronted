import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Demolition Labor Checklist",
    tableHeaders: ["Sr. No.", "Work"],
  },
  mr: {
    title: "डिमोलिशन लेबर चेकलिस्ट",
    tableHeaders: ["अ. क्र.", "काम"],
  },
};

const tableData = [
  { item: "The site handover and pre-inspection are carried out. If there are any valuable items, they should be removed in advance." },
  { item: "The flooring is broken and removed, which may include tiles, marble, or concrete." },
  { item: "The old wall paint is scraped off for surface preparation." },
  { item: "Internal or non-load-bearing walls are broken and dismantled as required." },
  { item: "The old water tank is removed, if applicable." },
  { item: "The old signboard or board is dismantled and taken out." },
  { item: "The old POP or false ceiling is removed completely." },
  { item: "Any existing rabbit or concrete steps are demolished." },
  { item: "The site is thoroughly cleaned, and all debris is disposed of properly." },
  { item: "A final inspection is conducted, and a clearance report is submitted." },
];

function DemolitionLabor() {
  const [language, setLanguage] = useState("mr");
  const [siteName, setSiteName] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorMobile, setVendorMobile] = useState("");
  const [vendorWork, setVendorWork] = useState("DEMOLITION");

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const renderTable = () => {
    return (
      <div className="overflow-x-auto mt-4">
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
                <td className="border px-4 py-2 text-left">{row.item}</td>
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
        
        {/* Header */}
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Demolition Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>
 {/* Title */}
        <h2 className="text-center text-lg font-semibold mb-4">
          {config[language].title}
        </h2>
        {/* Form Section */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Site Name:</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Site Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vendor Name:</label>
            <input
              type="text"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Vendor Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vendor Mobile No.:</label>
            <input
              type="text"
              value={vendorMobile}
              onChange={(e) => setVendorMobile(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Mobile No."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vendor Work:</label>
            <input
              type="text"
              value={vendorWork}
              onChange={(e) => setVendorWork(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Vendor Work"
            />
          </div>
        </div>

       

        {/* Table */}
        {renderTable()}
      </div>
    </div>
  );
}

export default DemolitionLabor;
