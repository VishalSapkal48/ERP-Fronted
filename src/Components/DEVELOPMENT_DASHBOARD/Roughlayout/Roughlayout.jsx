import React, { useState, useEffect } from "react";
import formConfig from "./RoughLayoutQuestion";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Adjust the path as needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoughLayoutImage from "../../../../public/Images/roughloyut/roughloyit.jpeg"; // Adjust the path to your image

const validationMessages = {
  en: {
    submitSuccess: "Form submitted successfully!",
  },
  mr: {
    submitSuccess: "फॉर्म यशस्वीपणे सबमिट झाला!",
  },
};

export default function RoughLayout() {
  const [formData, setFormData] = useState({});
  const [language, setLanguage] = useState("mr");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const totalQuestions = formConfig.fields.length;

  useEffect(() => {
    const initialFormData = {};
    formConfig.fields.forEach((field) => {
      field.subfields.forEach((subfield) => {
        const fieldId = `${field.id}_${subfield.id}`;
        initialFormData[fieldId] = "";
      });
    });
    setFormData(initialFormData);
  }, []);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleNext = async () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        toast.success(validationMessages[language].submitSuccess, {
          position: "top-right",
          autoClose: 3000,
        });
        console.log("Form Data Submitted:", formData);
      }, 1000);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const renderStatusField = (field) => {
    const question = field[`question_${language}`] || field.question_mr;

    return (
      <div className="mb-6">
        <img
          src={RoughLayoutImage}
          alt="Form Layout"
          className="w-full h-80 object-contain mb-4 rounded"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x320";
          }}
        />
        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
          {question}
        </p>
        {field.subfields.map((subfield) => {
          const subfieldLabel =
            subfield[`label_${language}`] || subfield.label_mr;
          return (
            <div key={subfield.id} className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                {subfieldLabel}
              </label>
            </div>
          );
        })}
      </div>
    );
  };

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
            {formConfig[`submission_message_${language}`] ||
              validationMessages[language].submitSuccess}
          </p>
          <button className="text-sm sm:text-base text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors">
            {language === "mr" ? "पुढे जा" : "Continue"}
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  const currentField = formConfig.fields[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-4xl bg-[#e3f2fd] p-4 sm:p-6 rounded-xl shadow-md border border-blue-200">
        <div className="bg-white flex justify-between items-center mb-4 px-4 py-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Naadbramha Logo"
              className="h-10 w-10"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40";
              }}
            />
            <h1 className="text-xl font-bold">Naadbramha</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600 transition-colors duration-200 disabled:opacity-50"
            disabled={isLoading}
            aria-label={
              language === "mr" ? "Switch to English" : "Switch to Marathi"
            }
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-center text-base sm:text-lg font-semibold mb-6 text-gray-800">
          {formConfig[`title_${language}`]}
        </h2>

        <div className="mb-6">{renderStatusField(currentField)}</div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-sm sm:text-base text-gray-500 underline disabled:text-gray-300 hover:text-blue-600"
            disabled={currentQuestionIndex === 0 || isLoading}
            aria-label={language === "mr" ? "मागे" : "Back"}
          >
            {formConfig.navigation_buttons?.[`back_${language}`] ||
              (language === "mr" ? "मागे" : "Back")}
          </button>

          <button
            onClick={handleNext}
            className={`text-sm sm:text-base text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded transition-colors ${
              currentQuestionIndex < totalQuestions - 1
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
            aria-label={
              currentQuestionIndex < totalQuestions - 1
                ? language === "mr"
                  ? "पुढे"
                  : "Next"
                : language === "mr"
                ? "सबमिट करा"
                : "Submit"
            }
          >
            {isLoading
              ? language === "mr"
                ? "सबमिट करत आहे..."
                : "Submitting..."
              : currentQuestionIndex < totalQuestions - 1
              ? formConfig.navigation_buttons?.[`next_${language}`] ||
                (language === "mr" ? "पुढे" : "Next")
              : formConfig[`submit_button_${language}`]}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}