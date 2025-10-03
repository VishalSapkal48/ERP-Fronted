import React, { useState, useEffect } from "react";
import formConfig from "./material_checking_visit_naadbramha";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Adjust the path as needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationMessages = {
  en: {
    answerRequired: "Please select a status for all items on this page.",
    dateRequired: "Please select a date.",
    submitError: "Failed to submit the form. Please try again.",
    submitSuccess: "Form submitted successfully!",
    invalidDate: "Please enter a valid date",
    pastDate: "Date cannot be in the past",
    allQuestionsRequired: "Please answer all questions before proceeding.",
  },
  mr: {
    answerRequired: "कृपया या पृष्ठावरील सर्व वस्तूंसाठी स्थिती निवडा.",
    dateRequired: "कृपया तारीख निवडा.",
    submitError: "फॉर्म सबमिट करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
    submitSuccess: "फॉर्म यशस्वीपणे सबमिट झाला!",
    invalidDate: "कृपया वैध तारीख प्रविष्ट करा",
    pastDate: "तारीख भूतकाळातील असू शकत नाही",
    allQuestionsRequired:
      "कृपया पुढे जाण्यापूर्वी सर्व प्रश्नांची उत्तरे द्या.",
  },
};

export default function MaterialCheckingVisitNaadbramha() {
  const [formData, setFormData] = useState({});
  const [language, setLanguage] = useState("mr");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const totalQuestions = formConfig.fields.length;

  useEffect(() => {
    const initialFormData = {};
    formConfig.fields.forEach((field) => {
      field.subfields.forEach((subfield) => {
        const fieldId = `${field.id}_${subfield.id}`;
        // Initialize status field, not remark
        if (subfield.type === "radio" || subfield.type === "date") {
          initialFormData[fieldId] = "";
        }
        if (subfield.hasRemark) {
          initialFormData[`${fieldId}_remark`] = "";
        }
      });
    });
    setFormData(initialFormData);
  }, []);

  const handleInputChange = (fieldId, value, type = "status") => {
    // Only update the form data and clear the specific error for the field being changed
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));

    // Clear the error for this specific field
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldId];
      return newErrors;
    });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const validateCurrentPage = () => {
    const currentField = formConfig.fields[currentQuestionIndex];
    const newErrors = {};
    let isValid = true;

    currentField.subfields.forEach((subfield) => {
      const fieldId = `${currentField.id}_${subfield.id}`;
      const value = formData[fieldId] || "";

      // Check for required fields based on their type
      if (subfield.required) {
        if (subfield.type === "radio" && !value.trim()) {
          newErrors[fieldId] = validationMessages[language].answerRequired;
          isValid = false;
        } else if (subfield.type === "date") {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (!value.trim()) {
            newErrors[fieldId] = validationMessages[language].dateRequired;
            isValid = false;
          } else if (isNaN(selectedDate.getTime())) {
            newErrors[fieldId] = validationMessages[language].invalidDate;
            isValid = false;
          } else if (selectedDate < today) {
            newErrors[fieldId] = validationMessages[language].pastDate;
            isValid = false;
          }
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = async (e) => {
    e.preventDefault();

    if (!validateCurrentPage()) {
      toast.error(validationMessages[language].answerRequired, {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setErrors({}); // Clear errors when moving to the next page
    } else {
      // Logic for final submission
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
        setIsSubmitted(true);
        toast.success(validationMessages[language].submitSuccess, {
          position: "top-right",
          autoClose: 3000,
        });
        console.log("Form Data Submitted:", formData);
      } catch (error) {
        setIsLoading(false);
        toast.error(validationMessages[language].submitError, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setErrors({}); // Clear errors when going back
    }
  };

  const renderStatusField = (field) => {
    const question = field[`question_${language}`] || field.question_mr;

    if (field.type === "table") {
      return (
        <div className="mb-6">
          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            {question}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium">
                    {language === "mr" ? "वस्तू" : "Item"}
                  </th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium">
                    {language === "mr" ? "स्थिती" : "Status"}
                  </th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-medium">
                    {language === "mr" ? "टिप्पणी" : "Remark"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {field.subfields.map((subfield) => {
                  const subfieldLabel =
                    subfield[`label_${language}`] || subfield.label_mr;
                  const fieldId = `${field.id}_${subfield.id}`;
                  const remarkId = `${fieldId}_remark`;

                  return (
                    <tr key={fieldId} className="border border-gray-300">
                      <td className="border border-gray-300 p-2 text-sm">
                        {subfieldLabel}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name={fieldId}
                              value="yes"
                              checked={formData[fieldId] === "yes"}
                              onChange={(e) =>
                                handleInputChange(fieldId, e.target.value)
                              }
                              className="w-4 h-4 text-green-600"
                              disabled={isLoading}
                            />
                            {language === "mr" ? "होय" : "Yes"}
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name={fieldId}
                              value="no"
                              checked={formData[fieldId] === "no"}
                              onChange={(e) =>
                                handleInputChange(fieldId, e.target.value)
                              }
                              className="w-4 h-4 text-red-600"
                              disabled={isLoading}
                            />
                            {language === "mr" ? "नाही" : "No"}
                          </label>
                        </div>
                        {errors[fieldId] && (
                          <span className="text-red-500 text-xs mt-1 block">
                            {errors[fieldId]}
                          </span>
                        )}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {subfield.hasRemark ? (
                          <input
                            type="text"
                            value={formData[remarkId] || ""}
                            onChange={(e) =>
                              handleInputChange(
                                remarkId,
                                e.target.value,
                                "text"
                              )
                            }
                            className="w-full p-1 text-sm border rounded focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                            disabled={isLoading}
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    // Default rendering for other types of fields
    return (
      <div className="mb-6">
        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
          {question}
        </p>
        <div className="flex flex-wrap gap-4">
          {field.subfields?.map((subfield) => {
            const subfieldLabel =
              subfield[`label_${language}`] || subfield.label_mr;
            const fieldId = `${field.id}_${subfield.id}`;
            const remarkId = `${fieldId}_remark`;

            return (
              <div key={fieldId} className="flex flex-col w-full">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  {subfieldLabel}
                </label>
                {subfield.type === "radio" ? (
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={fieldId}
                        value="yes"
                        checked={formData[fieldId] === "yes"}
                        onChange={(e) =>
                          handleInputChange(fieldId, e.target.value)
                        }
                        className="w-4 h-4 text-green-600"
                        disabled={isLoading}
                      />
                      {language === "mr" ? "होय" : "Yes"}
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={fieldId}
                        value="no"
                        checked={formData[fieldId] === "no"}
                        onChange={(e) =>
                          handleInputChange(fieldId, e.target.value)
                        }
                        className="w-4 h-4 text-red-600"
                        disabled={isLoading}
                      />
                      {language === "mr" ? "नाही" : "No"}
                    </label>
                  </div>
                ) : subfield.type === "date" ? (
                  <input
                    type="date"
                    value={formData[fieldId] || ""}
                    onChange={(e) => handleInputChange(fieldId, e.target.value)}
                    className={`w-full p-2 sm:p-3 text-sm sm:text-base border rounded focus:ring-blue-500 focus:border-blue-500 ${
                      errors[fieldId] ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isLoading}
                  />
                ) : null}
                {subfield.hasRemark && (
                  <input
                    type="text"
                    value={formData[remarkId] || ""}
                    onChange={(e) =>
                      handleInputChange(remarkId, e.target.value, "text")
                    }
                    className="w-full p-1 text-sm border rounded focus:ring-blue-500 focus:border-blue-500 border-gray-300 mt-2"
                    disabled={isLoading}
                    placeholder={language === "mr" ? "टिप्पणी" : "Remark"}
                  />
                )}
                {errors[fieldId] && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors[fieldId]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
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
            }`}
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