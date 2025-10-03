// src/components/LetterofUndertaking/LetterofUndertakingNB.jsx

import React, { useState } from "react";
import LetterofUndertakingNBConfig from "./LetterofUndertakingNBConfig";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png";

// Import all required images
import cctvImage from "../../../../public/Images/letterofundertakingprajkta/nbcamera.png";
import routerImage from "../../../../public/Images/letterofundertakingprajkta/flagshipstore.png";
import speakerImage from "../../../../public/Images/letterofundertakingprajkta/sound.png";
import colorCodeImage from "../../../../public/Images/letterofundertakingprajkta/414043.png";
import wireBrandsImage from "../../../../public/Images/letterofundertakingprajkta/15bestwirecompany.png";
import switchButtonImage from "../../../../public/Images/letterofundertakingprajkta/button.png";
import wireBundleImage from "../../../../public/Images/letterofundertakingprajkta/wirebundle.png";
import plumbingComboImage from "../../../../public/Images/letterofundertakingprajkta/materialcombo.png";
import panelLightImage from "../../../../public/Images/letterofundertakingprajkta/lightbulb.png";
import offBulbImage from "../../../../public/Images/letterofundertakingprajkta/offbulb.png";
import fanImage from "../../../../public/Images/letterofundertakingprajkta/fan.png";
import floorTilesImage from "../../../../public/Images/letterofundertakingprajkta/gloccyfloortitles.png";
import whiteTileImage from "../../../../public/Images/letterofundertakingprajkta/whitetile.png";
import greyTileImage from "../../../../public/Images/letterofundertakingprajkta/greytile.png";
import pvcPanelImage from "../../../../public/Images/letterofundertakingprajkta/pvcwallpanel.png";
import pvcWallChannelImage from "../../../../public/Images/letterofundertakingprajkta/pvcwallchannelsmall.png";
import gasPipeImage from "../../../../public/Images/letterofundertakingprajkta/jindalmlcpipes.png";
import shedImage from "../../../../public/Images/letterofundertakingprajkta/foldingcanopy.png";
import exhaustFanImage from "../../../../public/Images/letterofundertakingprajkta/DuctAxialExhaustFan.png";
import kitchenHoodImage from "../../../../public/Images/letterofundertakingprajkta/commercialkitchen.png";
import mixerGrinderImage from "../../../../public/Images/letterofundertakingprajkta/mixergrinder.png";
import mixerFeaturesImage from "../../../../public/Images/letterofundertakingprajkta/mixer.png";
import freezerImage from "../../../../public/Images/letterofundertakingprajkta/fridge.png";
import displayBoardImage from "../../../../public/Images/letterofundertakingprajkta/NBOpeningdayfeedback.png";
import idliMenuImage from "../../../../public/Images/letterofundertakingprajkta/idlimenu.png";

// Helper component to render images
const PageImage = ({ pageId }) => {
  const imageMap = {
    cctv_camera: [cctvImage],
    internet: [routerImage],
    home_theater: [speakerImage],
    shop_color: [colorCodeImage],
    electrical_work: [wireBrandsImage, switchButtonImage, wireBundleImage],
    plumbing_work: [plumbingComboImage],
    light_fitting: [panelLightImage, fanImage, offBulbImage],
    tiles_work: [floorTilesImage, whiteTileImage, greyTileImage],
    pop_work: [pvcPanelImage, pvcWallChannelImage],
    gas_pipeline: [gasPipeImage],
    rolling_shed: [shedImage],
    ducting_work: [kitchenHoodImage, exhaustFanImage],
    mixer_grinder: [mixerGrinderImage, mixerFeaturesImage],
    fridge_500l: [freezerImage],
    fridge_300l: [freezerImage],
    display_board: [displayBoardImage, idliMenuImage],
  };

  const images = imageMap[pageId] || [];
  if (images.length === 0) return null;

  return (
    <div className="mt-6 flex justify-center items-center flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
      {images.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt={`${pageId} Reference ${index + 1}`}
          className="rounded-lg shadow-md max-w-xs h-auto border"
        />
      ))}
    </div>
  );
};

// Helper component to render the undertaking clause
const UndertakingClause = ({ clause, language }) => {
  if (!clause || !Array.isArray(clause)) return null;

  return (
    <div className="mt-6 p-4 border-t-2 border-dashed border-gray-300">
      <h3 className="font-semibold text-gray-800 mb-2">
        {language === "mr" ? "सहमति पत्र" : "Undertaking"}
      </h3>
      <ul className="list-decimal list-inside text-sm text-gray-700 space-y-2">
        {clause.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

// Helper component for the signature line with a textbox
const SignatureLine = ({ pageId, signature, onSignatureChange, language }) => (
  <div className="mt-8 pt-4 border-t border-gray-300 flex justify-between items-center text-sm">
    <span className="font-semibold text-gray-800">YNK ENTERPRISES</span>
    <div className="w-1/2">
      <input
        type="text"
        placeholder={
          language === "mr" ? "मालकाची सही..." : "Owner Signature..."
        }
        value={signature}
        onChange={(e) => onSignatureChange(pageId, e.target.value)}
        className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

export default function LetterofUndertakingNB() {
  const [language, setLanguage] = useState("mr");
  const [currentPage, setCurrentPage] = useState(0);
  const [signatures, setSignatures] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // फॉर्म सबमिट झाला की नाही, हे पाहण्यासाठी नवीन state

  const { fields, introduction_mr, introduction_en } =
    LetterofUndertakingNBConfig;
  const totalPages = fields.length; // एकूण पेजेसची संख्या fields च्या लांबीइतकी असेल

  const handleLanguageToggle = () =>
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const getTranslatedValue = (obj, key) =>
    obj[`${key}_${language}`] || obj[`${key}_en`];

  const handleSignatureChange = (pageId, value) => {
    setSignatures((prevSignatures) => ({
      ...prevSignatures,
      [pageId]: value,
    }));
  };

  // फॉर्म सबमिट करण्यासाठी नवीन फंक्शन
  const handleSubmit = () => {
    // इथे तुम्ही फॉर्ममधील सर्व डेटा (जसे की सह्या, मालकाचे नाव इ.) सर्व्हरवर पाठवू शकता.
    // सध्या आपण फक्त कन्सोलमध्ये डेटा दाखवत आहोत.
    console.log("Form Submitted Successfully!");
    console.log("Signatures Data:", signatures);
    setIsSubmitted(true); // फॉर्म सबमिट झाल्यावर isSubmitted ला true करा
  };

  const renderContent = () => {
    const currentField = fields[currentPage];
    const sectionHeader = getTranslatedValue(currentField, "question");
    const undertakingClause = getTranslatedValue(currentField, "undertaking");

    return (
      <div className="p-4 bg-white rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          {sectionHeader}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === "mr" ? "तपशील" : "Particulars"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === "mr" ? "विशिष्टता" : "Specifications"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === "mr" ? "प्रमाण" : "Qty"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === "mr" ? "वॉरंटी" : "Warranty"}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentField.listItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 font-medium">
                    {getTranslatedValue(item, "label")}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    {getTranslatedValue(item, "spec")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.qty}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    {getTranslatedValue(item, "warranty")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageImage pageId={currentField.id} />
        <UndertakingClause clause={undertakingClause} language={language} />
        <SignatureLine
          pageId={currentField.id}
          signature={signatures[currentField.id] || ""}
          onSignatureChange={handleSignatureChange}
          language={language}
        />
      </div>
    );
  };

  const formTitle = getTranslatedValue(LetterofUndertakingNBConfig, "title");
  const introduction = language === "mr" ? introduction_mr : introduction_en;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-[#e3f2fd] p-4 sm:p-6 rounded-xl shadow-md border border-blue-200">
        <div className="bg-white flex justify-between items-center mb-4 px-4 py-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Naadbramha Logo"
              className="h-12 w-12"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <h1 className="text-xl font-bold text-gray-800">{formTitle}</h1>
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

        <div className="p-4 bg-white rounded-lg mb-6 text-sm text-gray-700 space-y-3">
          {introduction.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="p-4 bg-white rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-2">
            {language === "mr"
              ? "फ्रँचायझी मालकाची माहिती"
              : "Franchise Owner Details"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="ownerName"
                className="block text-sm font-medium text-gray-700"
              >
                {language === "mr" ? "मालकाचे नाव" : "Owner Name"}
              </label>
              <input
                type="text"
                id="ownerName"
                defaultValue="Mr. KULDEEP SHARMA"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                {language === "mr" ? "मोबाईल" : "Mobile"}
              </label>
              <input
                type="text"
                id="mobile"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="branchArea"
                className="block text-sm font-medium text-gray-700"
              >
                {language === "mr" ? "शाखेचा परिसर" : "Branch Area"}
              </label>
              <input
                type="text"
                id="branchArea"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                {language === "mr" ? "दिनांक" : "Date"}
              </label>
              <input
                type="date"
                id="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-4 bg-white rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4 text-green-600">
              {language === "mr" ? "धन्यवाद!" : "Thank You!"}
            </h2>
            <p className="text-gray-700">
              {language === "mr"
                ? "तुमचा अर्ज यशस्वीरित्या सादर झाला आहे."
                : "Your application has been submitted successfully."}
            </p>
          </div>
        ) : (
          <>
            {renderContent()}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  currentPage === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {language === "mr" ? "मागे" : "Previous"}
              </button>

              {currentPage === totalPages - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-md transition-colors duration-200 bg-green-500 text-white hover:bg-green-600"
                >
                  {language === "mr" ? "सबमिट करा" : "Submit"}
                </button>
              ) : (
                <button
                  onClick={handleNextPage}
                  className="px-4 py-2 rounded-md transition-colors duration-200 bg-blue-500 text-white hover:bg-blue-600"
                >
                  {language === "mr" ? "पुढील" : "Next"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}