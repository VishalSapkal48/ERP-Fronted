import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AwingShed from '../../../../public/Images/CIVILWORKYewaleNOCImages/AwingShed.png';
import BoardWork1 from '../../../../public/Images/CIVILWORKYewaleNOCImages/BoardWork.png';
import CCTVWork from '../../../../public/Images/CIVILWORKYewaleNOCImages/CCTV work.png';
import ColourWork from '../../../../public/Images/CIVILWORKYewaleNOCImages/Colour Work .png';
import ElectricalWork from '../../../../public/Images/CIVILWORKYewaleNOCImages/ElectricalWork.png';
import GasPipelineWork from '../../../../public/Images/CIVILWORKYewaleNOCImages/GaspipelineWork.png';
import Lollypop from '../../../../public/Images/CIVILWORKYewaleNOCImages/Lollypop.png';
import NanoAvoryFlooring from '../../../../public/Images/CIVILWORKYewaleNOCImages/NanoAvoryFlooringTiles.png';
import PlumbingWork1 from '../../../../public/Images/CIVILWORKYewaleNOCImages/PlumbingWork.png';
import PlumbingWork2 from '../../../../public/Images/CIVILWORKYewaleNOCImages/PlumbingWork1.png';
import PopFalseCeilingChannel from '../../../../public/Images/CIVILWORKYewaleNOCImages/POPFalseCeilingChannel.png';
import PopWork1 from '../../../../public/Images/CIVILWORKYewaleNOCImages/POPWork.png';
import PopWork2 from '../../../../public/Images/CIVILWORKYewaleNOCImages/PlumbingWork1.png';
import ShopShutterLogo from '../../../../public/Images/CIVILWORKYewaleNOCImages/ShopShutterLogowork.png';
import WallTiles from '../../../../public/Images/CIVILWORKYewaleNOCImages/WallTilesWork.png';
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Added logo import

// Configuration for checklist items and translations
const config = {
  en: {
    title: "CIVIL WORK NOC YEWALE Checklist",
    tableHeaders: ["Sr. No.", "Work", "Status", "Photo"],
  },
  mr: {
    title: "सिव्हिल वर्क एनओसी येवले चेकलिस्ट",
    tableHeaders: ["अ. क्र.", "काम", "स्थिती", "फोटो"],
  },
};

const tableData = [
  { item: "Wall Tiles Work", status: null, images: [WallTiles] },
  { item: "Nano Avory Flooring Tiles", status: null, images: [NanoAvoryFlooring] },
  { item: "POP False Ceiling Channel", status: null, images: [PopFalseCeilingChannel] },
  { item: "Shop Shutter Logo work", status: null, images: [ShopShutterLogo] },
  { item: "Plumbing Work", status: null, images: [PlumbingWork1, PlumbingWork2] },
  { item: "POP Work", status: null, images: [PopWork1, PopWork2] },
  { item: "Electrical Work", status: null, images: [ElectricalWork] },
  { item: "Board Work", status: null, images: [BoardWork1] },
  { item: "CCTV work", status: null, images: [CCTVWork] },
  { item: "Gas pipeline Work", status: null, images: [GasPipelineWork] },
  { item: "Awing Shed", status: null, images: [AwingShed] },
  { item: "Lollypop", status: null, images: [Lollypop] },
  { item: "Colour Work", status: null, images: [ColourWork] },
];

function CIVILWORKNOCYewale() {
  const [formData, setFormData] = useState({
    wall_tiles_understood: null,
    nano_avory_flooring_understood: null,
    pop_false_ceiling_understood: null,
    shop_shutter_logo_understood: null,
    plumbing_understood: null,
    pop_work_understood: null,
    electrical_understood: null,
    board_work_understood: null,
    cctv_understood: null,
    gas_pipeline_understood: null,
    awing_shed_understood: null,
    lollypop_understood: null,
    colour_work_understood: null,
  });
  const [language, setLanguage] = useState("mr");
  const [errors, setErrors] = useState({});

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleStatusChange = (index, value) => {
    const key = Object.keys(formData)[index];
    setFormData((prev) => ({
      ...prev,
      [key]: value === "done",
    }));
    setErrors((prev) => ({
      ...prev,
      [key]: null,
    }));
  };

  const validateAllQuestions = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value === null) {
        newErrors[key] =
          language === "mr"
            ? "कृपया स्थिती निवडा!"
            : "Please select a status!";
      }
    });
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateAllQuestions();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error(
        language === "mr"
          ? "कृपया सर्व स्थिती निवडा!"
          : "Please select status for all items!",
        {
          position: "top-right",
          autoClose: 3000,
          style: {
            backgroundColor: "#ffffff",
            color: "#d32f2f",
            borderLeft: "4px solid #d32f2f",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px 15px",
            minHeight: "40px",
          },
        }
      );
      return;
    }
    toast.success(
      language === "mr"
        ? "फॉर्म यशस्वीरीत्या सबमिट झाला!"
        : "Form submitted successfully!",
      {
        position: "top-right",
        autoClose: 3000,
        style: {
          backgroundColor: "#ffffff",
          color: "#2e7d32",
          borderLeft: "4px solid #2e7d32",
          borderRadius: "4px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "10px 15px",
          minHeight: "40px",
        },
      }
    );
  };

  const renderTable = () => {
    return (
      <div className="overflow-x-auto mt-2">
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {config[language].tableHeaders.map((header, idx) => (
                <th key={idx} className="border px-4 py-2 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => {
              const key = Object.keys(formData)[idx];
              return (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 text-center">{idx + 1}</td>
                  <td className="border px-4 py-2 text-center">{row.item}</td>
                  <td className="border px-4 py-2 text-center">
                    <div className="flex gap-4 justify-center">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={`status-${idx}`}
                          checked={formData[key] === true}
                          onChange={() => handleStatusChange(idx, "done")}
                          className="w-4 h-4 text-blue-600"
                          aria-label={language === "mr" ? "पूर्ण" : "Done"}
                        />
                        {language === "mr" ? "पूर्ण" : "Done"}
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={`status-${idx}`}
                          checked={formData[key] === false}
                          onChange={() => handleStatusChange(idx, "pending")}
                          className="w-4 h-4 text-blue-600"
                          aria-label={language === "mr" ? "प्रलंबित" : "Pending"}
                        />
                        {language === "mr" ? "प्रलंबित" : "Pending"}
                      </label>
                    </div>
                    {errors[key] && (
                      <p className="text-red-500 text-xs mt-1 text-center">{errors[key]}</p>
                    )}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <div className="flex gap-2 justify-center">
                      {row.images.map((image, imgIdx) => (
                        image ? (
                          <img
                            key={imgIdx}
                            src={image}
                            alt={`${row.item} photo ${imgIdx + 1}`}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          <span key={imgIdx}>
                            {language === "mr" ? "फोटो नाही" : "No Photo"}
                          </span>
                        )
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-2xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Yewale Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">Yewale</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-center text-lg font-semibold mb-6">
          {config[language].title}
        </h2>

        {renderTable()}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
          >
            {language === "mr" ? "सबमिट करा" : "Submit"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CIVILWORKNOCYewale;