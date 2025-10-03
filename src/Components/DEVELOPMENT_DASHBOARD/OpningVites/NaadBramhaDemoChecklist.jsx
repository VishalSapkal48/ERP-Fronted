import React, { useState, useEffect } from "react";
import formConfig from "./NaadBramhaDemoChecklistConfig";
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

export default function NaadBramhaDemoChecklist() {
  const [formData, setFormData] = useState({});
  const [language, setLanguage] = useState("mr");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize form data based on the config
    const initialFormData = {};
    formConfig.fields.forEach((field) => {
      if (field.type === "static") {
        initialFormData[field.id] = field.subfields.reduce((acc, sub) => {
          acc[sub.id] = "";
          return acc;
        }, {});
      } else if (field.type === "table") {
        initialFormData[field.id] = formConfig.equipmentList.map((item) => ({
          ...item,
          demo_duration: "",
          training_status: "No", // Default to 'No'
          remark: "",
        }));
      } else {
        initialFormData[field.id] = "";
      }
    });
    setFormData(initialFormData);
  }, []);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleChange = (e, fieldId, subfieldId) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newFormData = { ...prev };
      if (subfieldId) {
        newFormData[fieldId] = {
          ...(newFormData[fieldId] || {}),
          [subfieldId]: value,
        };
      } else if (name.includes("equipment-")) {
        const [_, index, key] = name.split("-");
        newFormData.equipment_details[index] = {
          ...newFormData.equipment_details[index],
          [key]: value,
        };
      } else {
        newFormData[name] = value;
      }
      return newFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-sm sm:text-base text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors"
          >
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
        {/* Header */}
        <div className="bg-white flex justify-between items-center mb-4 px-4 py-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Naadbramha Logo"
              className="h-10 w-10"
              onError={(e) => (e.target.src = "https://via.placeholder.com/40")}
            />
            <h1 className="text-xl font-bold text-gray-800">Naadbramha</h1>
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

        {/* Form Title */}
        <h2 className="text-center text-base sm:text-lg font-semibold mb-6 text-gray-800">
          {formConfig[`title_${language}`]}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Header Fields Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formConfig.fields[0].subfields.map((field) => (
                <div
                  key={field.id}
                  className={
                    field.colSpan ? `sm:col-span-${field.colSpan}` : ""
                  }
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field[`label_${language}`]}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => handleChange(e, "header", field.id)}
                    value={formData.header?.[field.id] || ""}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Table Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/4"
                  >
                    {formConfig.fields[1].subfields[0][`label_${language}`]}
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/4"
                  >
                    {formConfig.fields[1].subfields[1][`label_${language}`]}
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/4"
                  >
                    {formConfig.fields[1].subfields[2][`label_${language}`]}
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/4"
                  >
                    {formConfig.fields[1].subfields[3][`label_${language}`]}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.equipment_details?.map((equipment, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {equipment[`name_${language}`]}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                      <input
                        type="text"
                        name={`equipment-${index}-demo_duration`}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={handleChange}
                        value={
                          formData.equipment_details?.[index].demo_duration ||
                          ""
                        }
                      />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                      <select
                        name={`equipment-${index}-training_status`}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={handleChange}
                        value={
                          formData.equipment_details?.[index].training_status ||
                          "No"
                        }
                      >
                        <option value="Yes">
                          {language === "mr" ? "होय" : "Yes"}
                        </option>
                        <option value="No">
                          {language === "mr" ? "नाही" : "No"}
                        </option>
                      </select>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                      <input
                        type="text"
                        name={`equipment-${index}-remark`}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={handleChange}
                        value={formData.equipment_details?.[index].remark || ""}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Signature and Engineer Fields */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formConfig.fields[2].subfields.map((field) => (
                <div
                  key={field.id}
                  className={
                    field.colSpan ? `sm:col-span-${field.colSpan}` : ""
                  }
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field[`label_${language}`]}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => handleChange(e, "signatures", field.id)}
                    value={formData.signatures?.[field.id] || ""}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className={`text-sm sm:text-base text-white px-6 py-2 rounded transition-colors ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              disabled={isLoading}
            >
              {isLoading
                ? language === "mr"
                  ? "सबमिट करत आहे..."
                  : "Submitting..."
                : formConfig[`submit_button_${language}`]}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}