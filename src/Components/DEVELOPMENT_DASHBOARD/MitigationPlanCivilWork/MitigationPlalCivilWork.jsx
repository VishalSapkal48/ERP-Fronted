import React, { useState, useEffect } from "react";
import formConfig from "./ChallengesPlan1Questions";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Adjust the path as needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationMessages = {
  en: {
    submitSuccess: "Form submitted successfully!",
  },
  mr: {
    submitSuccess: "फॉर्म यशस्वीपणे सबमिट झाला!",
  },
};

export default function MitigationPlalCivilWork() {
  const [currentStep, setCurrentStep] = useState(0);
  const [language, setLanguage] = useState("mr");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = formConfig.steps.length;

  useEffect(() => {
    const initialFormData = {};
    formConfig.steps.forEach((step, index) => {
      initialFormData[`step_${index}_acknowledged`] = false;
    });
    // No additional form fields since no questions are required
  }, []);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
      toast.success(validationMessages[language].submitSuccess, {
        position: "top-right",
        autoClose: 3000,
      });
      console.log("Form Data Submitted: Acknowledged");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = formConfig.steps[currentStep];
  const isLastStep = currentStep === totalSteps - 1;

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="bg-[#e3f2fd] p-4 sm:p-6 rounded-xl shadow-md border border-blue-200 w-full max-w-sm sm:max-w-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
            {language === "mr" ? "धन्यवाद!" : "Thank You!"}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            {formConfig[`submission_message_${language}`]}
          </p>
          <button className="text-sm sm:text-base text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors">
            {language === "mr" ? "पुढे जा" : "Continue"}
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-4xl bg-[#e3f2fd] p-4 sm:p-6 rounded-xl shadow-md border border-blue-200">
        <div className="bg-white flex justify-between items-center mb-4 px-4 py-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="ChallangesPlan1 Logo"
              className="h-10 w-10"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40";
              }}
            />
            <h1 className="text-xl font-bold">ChallangesPlan1</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600 transition-colors duration-200"
            aria-label={
              language === "mr" ? "Switch to English" : "Switch to Marathi"
            }
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-center text-base sm:text-lg font-semibold mb-6 text-gray-800">
          {currentStepData[`title_${language}`]}
        </h2>

        <div className="mb-6">
          <h3 className="text-md sm:text-base font-medium mb-2 text-gray-700">
            {language === "mr" ? "आव्हाने:" : "Challenges:"}
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 mb-4">
            {currentStepData[`challenges_${language}`].map((challenge, idx) => (
              <li key={idx} className="mb-2">
                {challenge}
              </li>
            ))}
          </ul>

          <h3 className="text-md sm:text-base font-medium mb-2 text-gray-700">
            {language === "mr"
              ? "मिता / कृती बिंदू:"
              : "Mitigation / Action Points:"}
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
            {currentStepData[`mitigation_${language}`].map(
              (mitigation, idx) => (
                <li key={idx} className="mb-2">
                  {mitigation}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-sm sm:text-base text-gray-500 underline hover:text-blue-600"
            disabled={currentStep === 0}
            aria-label={language === "mr" ? "मागे" : "Back"}
          >
            {formConfig.navigation_buttons[`back_${language}`]}
          </button>

          <button
            onClick={handleNext}
            className={`text-sm sm:text-base text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded transition-colors ${
              isLastStep
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            aria-label={
              isLastStep
                ? language === "mr"
                  ? "सबमिट करा"
                  : "Submit"
                : language === "mr"
                ? "पुढे"
                : "Next"
            }
          >
            {isLastStep
              ? formConfig[`submit_button_${language}`]
              : formConfig.navigation_buttons[`next_${language}`]}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}