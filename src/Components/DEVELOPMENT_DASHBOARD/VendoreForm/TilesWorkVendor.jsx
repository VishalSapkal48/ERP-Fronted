import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // तुमचा लोगोचा पाथ
import Tile1 from "../../../../public/Images/TilesWorkVendor/Tile1.png"; // तुमच्या इमेजचा पाथ
import Tile2 from "../../../../public/Images/TilesWorkVendor/Tile2.png"; // तुमच्या इमेजचा पाथ

// 1. सर्व डेटा आणि भाषांतर एकाच ठिकाणी
//================================================================

const config = {
  en: {
    mainTitle: "YNK",
    checklistTitle: "Tile Work Process Checklist",
    processHeaders: ["Sr. No.", "Work"],
    materialHeaders: [
      "Material",
      "Quality",
      "Company/Brand",
      "Size",
      "Colour",
      "Images",
    ],
    toggleButton: "मराठी",
    noPhoto: "No Photo",
  },
  mr: {
    mainTitle: "YNK",
    checklistTitle: "टाइल्स वर्क प्रोसेस चेकलिस्ट",
    processHeaders: ["अ. क्र.", "काम"],
    materialHeaders: [
      "साहित्य",
      "गुणवत्ता",
      "कंपनी/ब्रँड",
      "आकार",
      "रंग",
      "फोटो",
    ],
    toggleButton: "English",
    noPhoto: "फोटो नाही",
  },
};

const processData = [
  {
    en: "The site is cleaned thoroughly, and a surface inspection is carried out.",
    mr: "साइट पूर्णपणे स्वच्छ केली जाते आणि पृष्ठभागाची तपासणी केली जाते.",
  },
  {
    en: "The layout is marked, including the tile pattern and levels for both walls and floors.",
    mr: "टाइल्सचे पॅटर्न आणि भिंती व फरशी दोन्हीसाठी लेव्हल्स चिन्हांकित केल्या जातात.",
  },
  {
    en: "Surface preparation is done, which may include leveling and waterproofing if required.",
    mr: "पृष्ठभागाची तयारी केली जाते, ज्यात आवश्यक असल्यास लेव्हलिंग आणि वॉटरप्रूफिंगचा समावेश असतो.",
  },
  {
    en: "Tile material is selected and approved before installation.",
    mr: "इन्स्टॉलेशनपूर्वी टाइल मटेरियलची निवड करून त्याला मान्यता दिली जाते.",
  },
  {
    en: "Adhesive or cement mortar is prepared as per the specifications.",
    mr: "ऍडेसिव्ह किंवा सिमेंट मोर्टार निर्देशानुसार तयार केले जाते.",
  },
  {
    en: "Tile laying is carried out—floor tiles are laid first, followed by wall tiles, starting from the bottom and moving upward.",
    mr: "टाइल्स लावण्याचे काम केले जाते—प्रथम फरशीच्या टाइल्स लावल्या जातात, त्यानंतर भिंतीच्या टाइल्स खालून वरच्या दिशेने लावल्या जातात.",
  },
  {
    en: "Cutting and edge finishing are done neatly around corners, fixtures, and edges.",
    mr: "कोपरे, फिक्स्चर आणि कडांभोवती कटिंग आणि एज फिनिशिंग व्यवस्थितपणे केली जाते.",
  },
  {
    en: "The level and alignment are checked using spirit levels and spacers.",
    mr: "स्पिरिट लेव्हल आणि स्पेसर वापरून लेव्हल आणि अलाइनमेंट तपासले जाते.",
  },
  {
    en: "Grouting and joint finishing are completed to ensure a uniform appearance.",
    mr: "एकसमान दिसण्यासाठी ग्राउटिंग आणि जॉइंट फिनिशिंग पूर्ण केले जाते.",
  },
  {
    en: "The tile surface is cleaned properly after installation.",
    mr: "इन्स्टॉलेशननंतर टाइलचा पृष्ठभाग व्यवस्थित स्वच्छ केला जातो.",
  },
  {
    en: "A final inspection is conducted, and the work is handed over.",
    mr: "अंतिम तपासणी केली जाते आणि काम सुपूर्द केले जाते.",
  },
];

const materialData = [
  {
    material: { en: "Wall Tiles", mr: "भिंतीच्या फरश्या" },
    quality: { en: "A1 Quality", mr: "A1 गुणवत्ता" },
    company: { en: "Any Brand", mr: "कोणताही ब्रँड" },
    size: { en: "2x1", mr: "२x१" },
    colour: { en: "Glossy Plain Milk White", mr: "ग्लॉसी प्लेन मिल्क व्हाइट" },
    images: [Tile1],
  },
  {
    material: { en: "Floor Tiles", mr: "फरशीच्या फरश्या" },
    quality: { en: "A1 Quality", mr: "A1 गुणवत्ता" },
    company: { en: "Any Brand", mr: "कोणताही ब्रँड" },
    size: { en: "2x2", mr: "२x२" },
    colour: { en: "Plain Ivory", mr: "प्लेन आयव्हरी" },
    images: [Tile2],
  },
];

// 2. मुख्य कंपोनेंट (Main Component)
//================================================================

function TilesWorkVendor() {
  const [language, setLanguage] = useState("mr");

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        {/* Header */}
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Tile Work Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">{config[language].mainTitle}</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {config[language].toggleButton}
          </button>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold mb-6">
          {config[language].checklistTitle}
        </h2>

        {/* Process Table */}
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

        {/* Material Table */}
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
                  <td className="border px-4 py-2 text-center">
                    {row.material[language]}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {row.quality[language]}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {row.company[language]}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {row.size[language]}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {row.colour[language]}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <div className="flex gap-2 justify-center">
                      {row.images && row.images.length > 0 ? (
                        row.images.map((image, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={image}
                            alt={`${row.material.en} photo ${imgIdx + 1}`}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">
                          {config[language].noPhoto}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TilesWorkVendor;