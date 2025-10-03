import React, { useState } from 'react';
import YNKLogo from '../../../../public/Images/Inspection Visit List NB/YNKLogo.png'; // Adjusted path

const OnlineSurveyInput = () => {
  const [language, setLanguage] = useState('marathi');

  const content = {
    marathi: {
      title: "ऑनलाइन सर्वेक्षण फॉर्म",
      instructions: [
        "आमच्या मागील चर्चेनुसार, उद्याचे सर्वेक्षण भेट कॉल/व्हिडिओ कॉलवर नियोजित आहे.",
        "कृपया आमच्या ठरवलेल्या वेळेनुसार दुकानाला भेट द्या.",
        "सर्वेक्षणासाठी आम्हाला मापन टेप आवश्यक आहे, कृपया आपल्यासोबत आणा.",
        "जर आपल्याला मापन घेता येत नसेल तर कृपया अशा व्यक्तीची मदत घ्या ज्याला मापन घेता येते.",
        "जर आपण (दुकान मालक) सर्वेक्षणाच्या वेळी उपलब्ध नसाल, तर कृपया एक जबाबदार व्यक्ती उपस्थित असल्याची खात्री करा.",
        "सर्वेक्षणानंतर सेल्स टीम कोटेशनबद्दल आपल्याशी संपर्क साधेल."
      ],
    },
    english: {
      title: "Online Survey Form",
      instructions: [
        "As per our previous discussion, the survey visit is scheduled for tomorrow on call/video call.",
        "Kindly visit the shop as per our decided time.",
        "For survey we need measurement tape kindly bring with you.",
        "If you don't know to take measurement kindly take help someone who know how to take measurement.",
        "If you (the shop owner) are not available at the time of the survey call, please ensure that a responsible person is present.",
        "After survey the sales team will contact you regarding quotation."
      ],
    }
  };

  const currentContent = content[language];

  const handleLanguageToggle = () => {
    setLanguage(language === 'marathi' ? 'english' : 'marathi');
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Header merged with form content */}
          <div className="flex justify-between items-center mb-6 px-3 py-2 rounded bg-white">
            <div className="flex items-center space-x-3">
              <img src={YNKLogo} alt="YNK Logo" className="h-10 w-10" />
              <h1 className="text-xl font-bold">YNK</h1>
            </div>
            <button
              onClick={handleLanguageToggle}
              className="text-sm text-gray-600 underline hover:text-blue-600"
            >
              {language === "marathi" ? "English" : "मराठी"}
            </button>
          </div>

          {/* Instructions */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-6">
            {currentContent.title}
          </h2>
          <div className="bg-blue-50 p-3 sm:p-4 md:p-5 rounded-lg">
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {currentContent.instructions.map((instruction, index) => (
                <li key={index} className="flex items-center text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
                  <span className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-4 rounded-full text-blue-600 font-semibold">
                    {index + 1}
                  </span>
                  {index === 0 ? `${instruction} (Scheduled for: 03:24 PM IST, Wednesday, October 1, 2025)` : instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnlineSurveyInput;