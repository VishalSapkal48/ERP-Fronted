import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InternalDeprmentWorkingQuestion from "./InternalDeprmentWorkingQuestion";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { formConfig, validationMessages } = InternalDeprmentWorkingQuestion;

export default function InternalDepartmentWorking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [language, setLanguage] = useState("mr");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [errors, setErrors] = useState({});

  // Dummy user info (replace with context if needed)
  const user = {
    name: "Test User",
    mobile: "1234567890",
    branch: "Test Branch",
  };

  const totalQuestions = formConfig.fields.length;

  const validateCurrentField = (field) => {
    const newErrors = {};
    const id = field.id;

    if (formData[id] === undefined || formData[id] === null) {
      newErrors[id] = validationMessages[language].answerRequired;
    } else if (formData[id] === "other" && !formData[`${id}_other`]) {
      newErrors[id] = validationMessages[language].inputRequired;
    }

    return newErrors;
  };

  const validateAllFields = () => {
    const newErrors = {};
    formConfig.fields.forEach((field) => {
      if (formData[field.id] === undefined || formData[field.id] === null) {
        newErrors[field.id] = validationMessages[language].answerRequired;
      }
    });
    return newErrors;
  };

  const handleYesNoChange = (id, value) => {
    let answer;
    if (value === "yes") answer = true;
    else if (value === "no") answer = false;
    else answer = "other";

    setFormData((prev) => ({
      ...prev,
      [id]: answer,
      ...(value !== "other" && { [`${id}_other`]: "" }),
    }));
    setErrors((prev) => ({ ...prev, [id]: null }));
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
    setErrors({});
  };

  const handleNext = () => {
    const currentField = formConfig.fields[currentQuestionIndex];
    const validationErrors = validateCurrentField(currentField);

    if (Object.keys(validationErrors).length > 0) {
      toast.error(validationMessages[language].answerRequired, {
        position: "top-right",
        autoClose: 3000,
      });
      setErrors(validationErrors);
      return;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setErrors({});
    } else {
      const allErrors = validateAllFields();
      if (Object.keys(allErrors).length > 0) {
        toast.error(validationMessages[language].answerRequired, {
          position: "top-right",
          autoClose: 3000,
        });
        setErrors(allErrors);
        return;
      }

      // No API call, just simulate success and navigate
      toast.success(validationMessages[language].submitSuccess, {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/inspection-checklist");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setErrors({});
    }
  };

  const renderField = (field) => {
    const question = field[`question_${language}`] || field.question_mr;
    const id = field.id;

    return (
      <div key={id} className="mb-6">
        <h3 className="text-lg font-medium text-left text-gray-800 mb-2">
          {question}
        </h3>
        <div className="flex flex-col space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name={id}
              checked={formData[id] === true}
              onChange={() => handleYesNoChange(id, "yes")}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span
              className={`text-base ${
                formData[id] === true
                  ? "text-gray-800 font-medium"
                  : "text-gray-600"
              }`}
            >
              {language === "mr" ? "होय" : "Yes"}
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name={id}
              checked={formData[id] === false}
              onChange={() => handleYesNoChange(id, "no")}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span
              className={`text-base ${
                formData[id] === false
                  ? "text-gray-800 font-medium"
                  : "text-gray-600"
              }`}
            >
              {language === "mr" ? "नाही" : "No"}
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name={id}
              checked={formData[id] === "other"}
              onChange={() => handleYesNoChange(id, "other")}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span
              className={`text-base ${
                formData[id] === "other"
                  ? "text-gray-800 font-medium"
                  : "text-gray-600"
              }`}
            >
              {language === "mr" ? "इतर" : "Other"}
            </span>
          </label>
          {formData[id] === "other" && (
            <div className="ml-6">
              <input
                type="text"
                value={formData[`${id}_other`] || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [`${id}_other`]: e.target.value,
                  }))
                }
                placeholder={
                  language === "mr" ? "तपशील लिहा" : "Please specify"
                }
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
        {errors[id] && (
          <p className="text-red-500 text-sm mt-2">{errors[id]}</p>
        )}
      </div>
    );
  };

  const currentField = formConfig.fields[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="YNK Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-lg text-center font-bold mb-4">
          {formConfig[`title_${language}`]}
        </h2>

        <div className="mb-4">{renderField(currentField)}</div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            className="text-gray-500 underline disabled:text-gray-300 hover:text-blue-600"
            disabled={currentQuestionIndex === 0}
          >
            {formConfig.navigation_buttons?.[`back_${language}`] ||
              (language === "mr" ? "मागे" : "Back")}
          </button>
          <button
            onClick={handleNext}
            className={`${
              currentQuestionIndex < totalQuestions - 1
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            } text-white px-4 py-2 rounded font-medium`}
          >
            {currentQuestionIndex < totalQuestions - 1
              ? formConfig.navigation_buttons?.[`next_${language}`] ||
                (language === "mr" ? "पुढे" : "Next")
              : formConfig[`submit_button_${language}`] ||
                (language === "mr" ? "सबमिट करा" : "Submit")}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
