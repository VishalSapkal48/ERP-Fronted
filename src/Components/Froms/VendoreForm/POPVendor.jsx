import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // तुमचा लोगोचा पाथ
import Pop1 from "../../../../public/Images/POPVendor/Pop1.png";
import Pop2 from "../../../../public/Images/POPVendor/Pop2.png";

// 1. सर्व डेटा आणि भाषांतर एकाच ठिकाणी
//================================================================

const config = {
  en: {
    mainTitle: "Gypsum Sheet or PVC Sheet Work",
    checklistTitle: "Gypsum Sheet or PVC Sheet Work Process Checklist",
    siteInfo: {
      siteName: "Site Name",
      vendorName: "Vendor Name",
      vendorMobile: "Vendor Mobile No.",
      vendorWork: "Vendor Work: POP",
      quotation: "As per Work Quotation",
    },
    processHeaders: ["Sr. No.", "Work"],
    ceilingHeaders: [
      "No.",
      "Picture",
      "Name",
      "Materials",
      "Specification (mm)",
    ],
    toggleButton: "मराठी",
  },
  mr: {
    mainTitle: "जिप्सम शीट किंवा पीव्हीसी शीट वर्क",
    checklistTitle: "जिप्सम शीट किंवा पीव्हीसी शीट वर्क प्रोसेस चेकलिस्ट",
    siteInfo: {
      siteName: "साइटचे नाव",
      vendorName: "व्हेंडरचे नाव",
      vendorMobile: "व्हेंडरचा मोबाईल नंबर",
      vendorWork: "व्हेंडरचे काम: पीओपी",
      quotation: "कामाच्या कोटेशननुसार",
    },
    processHeaders: ["अ. क्र.", "काम"],
    ceilingHeaders: ["अ. क्र.", "चित्र", "नाव", "साहित्य", "माप (मिमी)"],
    toggleButton: "English",
  },
};

const processData = [
  {
    en: "Requirement Received The vendor receives the detailed requirement for the gypsum or PVC sheet work.",
    mr: "आवश्यकता प्राप्त - व्हेंडरला जिप्सम किंवा पीव्हीसी शीट वर्कसाठी तपशीलवार आवश्यकता प्राप्त होते.",
  },
  {
    en: "Site Measurement & Layout Marking Accurate site measurements are taken, and the layout is marked as per the approved design.",
    mr: "साइट मोजमाप आणि लेआउट चिन्हांकन - अचूक साइट मोजमाप घेतले जाते आणि मंजूर डिझाइननुसार लेआउट चिन्हांकित केले जाते.",
  },
  {
    en: "Framing Work Mild Steel (MS) or Aluminium channels are fixed according to the design to create the frame structure.",
    mr: "फ्रेमिंग वर्क - डिझाइननुसार माइल्ड स्टील (एमएस) किंवा ॲल्युमिनियम चॅनल्स फिक्स केले जातात जेणेकरून फ्रेम स्ट्रक्चर तयार होईल.",
  },
  {
    en: "Electrical Wiring & Service Coordination If applicable, all electrical wiring and service provisions are carried out and coordinated before sheet installation.",
    mr: "इलेक्ट्रिकल वायरिंग आणि सेवा समन्वय - लागू असल्यास, शीट इन्स्टॉलेशनपूर्वी सर्व इलेक्ट्रिकल वायरिंग आणि सेवा तरतुदी केल्या जातात आणि समन्वयित केल्या जातात.",
  },
  {
    en: "Gypsum Sheet Cutting & Fixing Gypsum boards (8x4 size) or PVC sheets are cut as per measurement and securely fixed with screws onto the frame.",
    mr: "जिप्सम शीट कटिंग आणि फिक्सिंग - जिप्सम बोर्ड (8x4 आकार) किंवा पीव्हीसी शीट्स मोजमापानुसार कापल्या जातात आणि स्क्रूंसह फ्रेमवर सुरक्षितपणे फिक्स केल्या जातात.",
  },
  {
    en: "Joint Taping & Finishing All joints are sealed using paper tape and jointing compound to create a smooth surface.",
    mr: "जॉइंट टेपिंग आणि फिनिशिंग - सर्व जॉइंट्स पेपर टेप आणि जॉइंटिंग कंपाऊंड वापरून सील केले जातात जेणेकरून गुळगुळीत पृष्ठभाग तयार होईल.",
  },
  {
    en: "Sanding for Smooth Finish The surface is sanded properly to remove roughness and ensure an even finish.",
    mr: "गुळगुळीत फिनिशसाठी सँडिंग - पृष्ठभागावरील खडबडीतपणा काढून टाकण्यासाठी आणि एकसमान फिनिश सुनिश्चित करण्यासाठी योग्यरित्या सँडिंग केले जाते.",
  },
  {
    en: "Primer Coating / Surface Sealing A primer coat or surface sealer is applied to prepare the surface for painting or further finishing.",
    mr: "प्रायमर कोटिंग / पृष्ठभाग सीलिंग - पेंटिंग किंवा पुढील फिनिशिंगसाठी पृष्ठभाग तयार करण्यासाठी प्रायमर कोट किंवा पृष्ठभाग सीलर लावले जाते.",
  },
  {
    en: "Cut-outs for Light Fittings 5.5-inch holes are cut at designated positions to install light fittings as per the design.",
    mr: "लाइट फिटिंग्जसाठी कट-आउट्स - डिझाइननुसार लाइट फिटिंग्ज बसवण्यासाठी निर्दिष्ट ठिकाणी ५.५ इंचाची छिद्रे कापली जातात.",
  },
  {
    en: "Final Handover After completion, the site is cleaned, photographs are taken, and a detailed completion report is handed over.",
    mr: "अंतिम हस्तांतरण - काम पूर्ण झाल्यावर, साइट स्वच्छ केली जाते, छायाचित्रे घेतली जातात आणि तपशीलवार पूर्णत्वाचा अहवाल सुपूर्द केला जातो.",
  },
];

const ceilingData = [
  {
    no: 1,
    name: { en: "Standard gypsum board", mr: "मानक जिप्सम बोर्ड" },
    materials: {
      en: "Nature plasterboard and paper",
      mr: "नॅचरल प्लास्टरबोर्ड आणि पेपर",
    },
    spec: "2440*1220*9",
    image: Pop1,
  },
  {
    no: 2,
    name: { en: "Load channel", mr: "लोड चॅनेल" },
    materials: {
      en: "Hot dipped galvanized strip",
      mr: "हॉट डिप्ड गॅल्वनाइझ्ड स्ट्रिप",
    },
    spec: "38*12*3000",
    image: Pop2,
  },
  {
    no: 3,
    name: { en: "50 Furring Channel", mr: "50 फरिंग चॅनेल" },
    materials: {
      en: "Hot dipped galvanized strip",
      mr: "हॉट डिप्ड गॅल्वनाइझ्ड स्ट्रिप",
    },
    spec: "50*19*3000",
    image: logo,
  },
  {
    no: 4,
    name: { en: "Wall angle", mr: "वॉल अँगल" },
    materials: {
      en: "Hot dipped galvanized strip",
      mr: "हॉट डिप्ड गॅल्वनाइझ्ड स्ट्रिप",
    },
    spec: "20*20*30*3000",
    image: logo,
  },
  {
    no: 5,
    name: { en: "Main carrier hanger", mr: "मुख्य वाहक हँगर" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "DU38",
    image: logo,
  },
  {
    no: 6,
    name: { en: "Main carrier connector", mr: "मुख्य वाहक कनेक्टर" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "DU38",
    image: logo,
  },
  {
    no: 7,
    name: { en: "50 Furring Channel connector", mr: "50 फरिंग चॅनेल कनेक्टर" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "DC50",
    image: logo,
  },
  {
    no: 8,
    name: { en: "Carrier connector", mr: "वाहक कनेक्टर" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "DU38-DC50",
    image: logo,
  },
  {
    no: 9,
    name: { en: "Level connector", mr: "लेव्हल कनेक्टर" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "DC50-DC50",
    image: logo,
  },
  {
    no: 10,
    name: { en: "Screw", mr: "स्क्रू" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "6*30mm",
    image: logo,
  },
  {
    no: 11,
    name: { en: "Explosive bolt", mr: "एक्सप्लोझिव्ह बोल्ट" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "φ6/φ8",
    image: logo,
  },
  {
    no: 12,
    name: { en: "Drywalls Self-screw", mr: "ड्रायवॉल्स सेल्फ-स्क्रू" },
    materials: { en: "Rust-proof steel", mr: "जंगरोधक स्टील" },
    spec: "3.5*25mm",
    image: logo,
  },
  {
    no: 13,
    name: { en: "Joint powder", mr: "जॉइंट पावडर" },
    materials: { en: "Nature plaster", mr: "नॅचरल प्लास्टर" },
    spec: "40kg/bag",
    image: logo,
  },
  {
    no: 14,
    name: { en: "Paper joint tape", mr: "पेपर जॉइंट टेप" },
    materials: { en: "Fiber Paper", mr: "फायबर पेपर" },
    spec: "75m/roll",
    image: logo,
  },
  {
    no: 15,
    name: { en: "Hanger", mr: "हँगर" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "φ6/φ8*3m",
    image: logo,
  },
  {
    no: 16,
    name: { en: "Nut", mr: "नट" },
    materials: { en: "Galvanized steel", mr: "गॅल्वनाइझ्ड स्टील" },
    spec: "φ6/φ8",
    image: logo,
  },
];

// 2. मुख्य कंपोनेंट (Main Component)
//================================================================

function POPVendor() {
  const [language, setLanguage] = useState("mr");
  const [siteInfo, setSiteInfo] = useState({
    siteName: "",
    vendorName: "",
    vendorMobile: "",
    vendorWork: "POP",
    quotation: "",
  });

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSiteInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-[#e3f2fd] p-6 rounded-xl shadow-md border border-gray-300">
        {/* Header */}
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded border-b border-gray-300">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Gypsum Work Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">{config[language].mainTitle}</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {config[language].toggleButton}
          </button>
        </div>

        {/* Site Information */}
        <div className="mb-6 p-4 border border-gray-300 rounded">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {config[language].siteInfo.siteName}
            </label>
            <input
              type="text"
              name="siteName"
              value={siteInfo.siteName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {config[language].siteInfo.vendorName}
            </label>
            <input
              type="text"
              name="vendorName"
              value={siteInfo.vendorName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {config[language].siteInfo.vendorMobile}
            </label>
            <input
              type="text"
              name="vendorMobile"
              value={siteInfo.vendorMobile}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {config[language].siteInfo.vendorWork}
            </label>
            <input
              type="text"
              name="vendorWork"
              value={siteInfo.vendorWork}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {config[language].siteInfo.quotation}
            </label>
            <input
              type="text"
              name="quotation"
              value={siteInfo.quotation}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Process Title */}
        <h2 className="text-center text-lg font-semibold mb-6">
          {config[language].checklistTitle}
        </h2>

        {/* Process Table */}
        <div className="overflow-x-auto mt-2 mb-6">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                {config[language].processHeaders.map((header, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 px-4 py-2 text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {processData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {idx + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row[language]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ceiling Systems Table */}
        <h2 className="text-center text-lg font-semibold mb-6">
          Ceiling Systems
        </h2>
        <div className="overflow-x-auto mt-2 mb-6">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                {config[language].ceilingHeaders.map((header, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 px-4 py-2 text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ceilingData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {row.no}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <img
                      src={row.image}
                      alt={`${row.name.en} photo`}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {row.name[language]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {row.materials[language]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {row.spec}
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

export default POPVendor;