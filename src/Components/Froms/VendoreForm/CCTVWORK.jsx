import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Import logo (ensure the path is correct)

// Configuration for checklist title and translations
const config = {
  en: {
    title: "CCTV Work Process ",
    headers: ["Sr. No.", "Work"],
  },
  mr: {
    title: "सीसीटीव्ही कार्य प्रक्रिया ",
    headers: ["अ. क्र.", "काम"],
  },
};

// Data for CCTV work process steps with bilingual support
const processData = [
  {
    en: "Gather requirements, including the number of cameras, indoor/outdoor placement, and coverage area.",
    mr: "आवश्यकता गोळा करा, ज्यामध्ये कॅमेरांची संख्या, घरातील/बाहेरील स्थान आणि कव्हरेज क्षेत्र समाविष्ट आहे.",
  },
  {
    en: "Conduct a site survey and mark the camera locations.",
    mr: "साइट सर्वेक्षण करा आणि कॅमेरा स्थान चिन्हांकित करा.",
  },
  {
    en: "Select the system type (Analog, IP, or Wired).",
    mr: "सिस्टम प्रकार निवडा (अॅनालॉग, आयपी किंवा वायर्ड).",
  },
  {
    en: "Procure necessary materials such as: CCTV cameras (Dome, Bullet, or PTZ), DVR/NVR and hard disk, power supply, BNC connectors, adapters, and GI rack, coaxial or CAT6 cable, and display monitor.",
    mr: "आवश्यक साहित्य खरेदी करा, जसे की: सीसीटीव्ही कॅमेरे (डोम, बुलेट किंवा पीटीझेड), डीव्हीआर/एनव्हीआर आणि हार्ड डिस्क, वीज पुरवठा, बीएनसी कनेक्टर्स, अॅडॅप्टर्स आणि जीआय रॅक, कोएक्सियल किंवा कॅट6 केबल आणि डिस्प्ले मॉनिटर.",
  },
  {
    en: "Carry out cabling work (concealed or open routing as required).",
    mr: "केबलिंग काम करा (आवश्यकतेनुसार लपवलेले किंवा खुले राउटिंग).",
  },
  {
    en: "Mount the cameras and adjust the viewing angles.",
    mr: "कॅमेरे बसवा आणि पाहण्याचे कोन समायोजित करा.",
  },
  {
    en: "Install and fix DVR/NVR, power supply, hard disk, and GI rack.",
    mr: "डीव्हीआर/एनव्हीआर, वीज पुरवठा, हार्ड डिस्क आणि जीआय रॅक स्थापित करा आणि निश्चित करा.",
  },
  {
    en: "Configure the system (camera channels, storage, motion alerts, etc.).",
    mr: "सिस्टम कॉन्फिगर करा (कॅमेरा चॅनेल, स्टोरेज, मोशन अलर्ट इत्यादी).",
  },
  {
    en: "Test the system for live view, recording, and backup.",
    mr: "लाइव्ह व्ह्यू, रेकॉर्डिंग आणि बॅकअपसाठी सिस्टमची चाचणी करा.",
  },
  {
    en: "Provide a client demonstration and set up the mobile application (if required).",
    mr: "क्लायंट डेमोन्स्ट्रेशन प्रदान करा आणि मोबाइल अर्ज सेट करा (आवश्यक असल्यास).",
  },
  {
    en: "Complete the final handover with system passwords and a user manual.",
    mr: "सिस्टम पासवर्ड आणि युझर मॅन्युअलसह अंतिम हस्तांतरण पूर्ण करा.",
  },
];

function CCTVWORK() {
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
            <img src={logo} alt="CCTV Work Logo" className="h-10 w-10" />
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

export default CCTVWORK;