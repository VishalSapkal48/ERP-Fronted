import React, { useState, useEffect } from "react";
import formConfig from "./YewaleDemoChecklistConfig";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validationMessages = {
  en: {
    submitSuccess: "Form submitted successfully!",
  },
  mr: {
    submitSuccess: "फॉर्म यशस्वीपणे सबमिट झाला!",
  },
};

export default function YewaleDemoChecklist() {
  const [formData, setFormData] = useState({});
  const [language, setLanguage] = useState("en");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initialFormData = {};
    formConfig.fields.forEach((field) => {
      if (field.type === "static") {
        initialFormData[field.id] = field.subfields.reduce((acc, sub) => {
          acc[sub.id] = sub.type === "date" ? null : "";
          return acc;
        }, {});
      } else if (field.type === "table") {
        initialFormData[field.id] = formConfig.equipmentList.map((item) => ({
          ...item,
          demo_duration: "",
          training_status: "No",
          remark: "",
        }));
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
      const newForm = { ...prev };
      if (subfieldId) {
        newForm[fieldId][subfieldId] = value;
      } else if (name.includes("equipment-")) {
        const [_, index, key] = name.split("-");
        newForm.equipment_details[index][key] = value;
      }
      return newForm;
    });
  };

  const handleDateChange = (date, fieldId, subfieldId) => {
    setFormData((prev) => {
      const newForm = { ...prev };
      newForm[fieldId][subfieldId] = date;
      return newForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success(validationMessages[language].submitSuccess);
      console.log("Submitted Data:", formData);
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
      <div className="w-full max-w-5xl bg-[#e3f2fd] p-4 sm:p-6 rounded-xl shadow-md border border-blue-200">
        {/* Header */}
        <div className="bg-white flex justify-between items-center mb-4 px-4 py-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Yewale Logo"
              className="h-10 w-10"
              onError={(e) => (e.target.src = "https://via.placeholder.com/40")}
            />
            <h1 className="text-xl font-bold text-gray-800">Yewale</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600 transition-colors duration-200 disabled:opacity-50"
            disabled={isLoading}
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        {/* Title */}
        <h2 className="text-center text-base sm:text-lg font-semibold mb-6 text-gray-800">
          {formConfig[`title_${language}`]}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Header Fields */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formConfig.fields[0].subfields.map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700">
                  {field[`label_${language}`]}
                </label>
                {field.type === "date" ? (
                  <DatePicker
                    selected={
                      formData.header_info?.[field.id]
                        ? new Date(formData.header_info[field.id])
                        : null
                    }
                    onChange={(date) =>
                      handleDateChange(date, "header_info", field.id)
                    }
                    className="w-full border rounded px-3 py-2"
                    dateFormat="dd/MM/yyyy"
                  />
                ) : (
                  <input
                    type="text"
                    name={field.id}
                    value={formData.header_info?.[field.id] || ""}
                    onChange={(e) => handleChange(e, "header_info", field.id)}
                    className="w-full border rounded px-3 py-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Equipment Table */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  {formConfig.fields[1].subfields.map((sf) => (
                    <th
                      key={sf.id}
                      className="px-3 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      {sf[`label_${language}`]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.equipment_details?.map((eq, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 text-sm text-gray-900 font-medium">
                      {eq[`name_${language}`]}
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        name={`equipment-${index}-demo_duration`}
                        value={eq.demo_duration}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <select
                        name={`equipment-${index}-training_status`}
                        value={eq.training_status}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      >
                        <option value="Yes">
                          {language === "mr" ? "होय" : "Yes"}
                        </option>
                        <option value="No">
                          {language === "mr" ? "नाही" : "No"}
                        </option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        name={`equipment-${index}-remark`}
                        value={eq.remark}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Signatures */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formConfig.fields[2].subfields.map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700">
                  {field[`label_${language}`]}
                </label>
                {field.type === "date" ? (
                  <DatePicker
                    selected={
                      formData.signatures?.[field.id]
                        ? new Date(formData.signatures[field.id])
                        : null
                    }
                    onChange={(date) =>
                      handleDateChange(date, "signatures", field.id)
                    }
                    className="w-full border rounded px-3 py-2"
                    dateFormat="dd/MM/yyyy"
                  />
                ) : (
                  <input
                    type="text"
                    value={formData.signatures?.[field.id] || ""}
                    onChange={(e) => handleChange(e, "signatures", field.id)}
                    className="w-full border rounded px-3 py-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Submit */}
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