import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "Internet Work Process ",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "इंटरनेट कार्य प्रक्रिया ",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for internet work process steps with bilingual support
const processData = [
  {
    en: "Collect requirements such as speed, number of devices, and static IP (if needed).",
    mr: "गती, उपकरणांची संख्या आणि स्थिर आयपी (आवश्यक असल्यास) यासारख्या आवश्यकता गोळा करा.",
  },
  {
    en: "Conduct a feasibility check at the site for fiber connectivity.",
    mr: "फायबर कनेक्टिव्हिटीसाठी साइटवर व्यवहार्यता तपासणी करा.",
  },
  {
    en: "Finalize the plan and complete customer documentation (KYC, CAF form, etc.).",
    mr: "योजना निश्चित करा आणि ग्राहक दस्तऐवजीकरण (केवायसी, सीएएफ फॉर्म इत्यादी) पूर्ण करा.",
  },
  {
    en: "Prepare the required materials, including: router or modem, fiber cable or CAT6 cable, splitters, connectors, and clips.",
    mr: "आवश्यक साहित्य तयार करा, ज्यामध्ये राउटर किंवा मॉडेम, फायबर केबल किंवा कॅट6 केबल, स्प्लिटर, कनेक्टर्स आणि क्लिप्स समाविष्ट आहेत.",
  },
  {
    en: "Lay the cable from the junction box to the customer site.",
    mr: "जंक्शन बॉक्सपासून ग्राहक साइटपर्यंत केबल टाका.",
  },
  {
    en: "Install the necessary devices (router, ONU/ONT).",
    mr: "आवश्यक उपकरणे (राउटर, ओएनयू/ओएनटी) स्थापित करा.",
  },
  {
    en: "Perform fiber splicing and termination, if applicable.",
    mr: "लागू असल्यास, फायबर स्प्लायसिंग आणि टर्मिनेशन करा.",
  },
  {
    en: "Configure the router, LAN, and Wi-Fi settings.",
    mr: "राउटर, लॅन आणि वाय-फाय सेटिंग्ज कॉन्फिगर करा.",
  },
  {
    en: "Conduct a speed test and verify connectivity.",
    mr: "गती चाचणी करा आणि कनेक्टिव्हिटी तपासा.",
  },
  {
    en: "Provide a client demonstration and share login credentials.",
    mr: "क्लायंट डेमोन्स्ट्रेशन प्रदान करा आणि लॉगिन क्रेडेंशियल्स शेअर करा.",
  },
  {
    en: "Complete the final handover with support contact details.",
    mr: "समर्थन संपर्क तपशीलांसह अंतिम हस्तांतरण पूर्ण करा.",
  },
];

function INTERNETWORK() {
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
            <img src={logo} alt="Internet Work Logo" className="h-10 w-10" />
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

export default INTERNETWORK;