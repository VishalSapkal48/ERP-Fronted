import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";


export default function ConstructionForm() {
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerContact: "",
    siteAddress: "",
    engineerName: "",
    engineerContact: "",
    dateTime: "",
    signMobile: "",
  });

  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "YNK",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      formTitle: "Construction Site Inspection Form",
      ownerName: "Owner Name",
      contactNo: "Contact No",
      siteAddress: "Site Address",
      engineerName: "Engineer Name",
      dateTime: "Date & Time",
      discussionPoints: "Discussion Points",
      note: "Note – Owner will send daily updates (photos/videos) to YNK team",
      ownerManager: "Owner/Manager",
      signMobile: "Signature & Mobile No",
      points: [
        "Electric meter 5kw",
        "Earthing is compulsory",
        "Shop drainage chamber is compulsory",
        "Shop water connection",
        "Exhaust fan or ducting work plans",
        "Water storage plan",
        "Shop layout (final or changes)",
        "Any objections during civil work",
      ],
    },
    mr: {
      title: "वायएनके",
      switchLang: "English",
      switchAria: "Switch to English",
      formTitle: "बांधकाम साईट तपासणी फॉर्म",
      ownerName: "मालकाचे नाव",
      contactNo: "संपर्क क्रमांक",
      siteAddress: "साइटचा पत्ता",
      engineerName: "अभियंत्याचे नाव",
      dateTime: "तारीख आणि वेळ",
      discussionPoints: "चर्चेचे मुद्दे",
      note: "टीप – मालक YNK टीमला दररोज अपडेट्स (फोटो/व्हिडिओ) पाठवेल",
      ownerManager: "मालक/व्यवस्थापक",
      signMobile: "स्वाक्षरी आणि मोबाइल क्रमांक",
      points: [
        "इलेक्ट्रिक मीटर 5kw",
        "अर्थिंग बंधनकारक आहे",
        "दुकानाचा ड्रेनेज चेंबर बंधनकारक",
        "दुकानाचे पाणी कनेक्शन",
        "एक्झॉस्ट फॅन किंवा डक्टिंग कामाची योजना",
        "पाणी साठवण योजना",
        "दुकानाचा लेआउट (अंतिम किंवा बदल)",
        "बांधकामादरम्यान कोणतेही आक्षेप",
      ],
    },
  }[lang];

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === "en" ? "mr" : "en"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "#e3f2fd",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="YNK Logo"
              style={{ height: "40px", width: "40px" }}
            />
            <h1
              style={{ fontSize: "24px", fontWeight: "bold", color: "#1e40af" }}
            >
              {t.title}
            </h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            style={{
              background: "none",
              border: "none",
              fontSize: "14px",
              color: "#4b5563",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            aria-label={t.switchAria}
          >
            {t.switchLang}
          </button>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {t.formTitle}
        </h2>

        {/* Form Fields */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            placeholder={t.ownerName}
            style={{
              padding: "8px",
              borderBottom: "2px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="text"
            name="ownerContact"
            value={formData.ownerContact}
            onChange={handleInputChange}
            placeholder={t.contactNo}
            style={{
              padding: "8px",
              borderBottom: "2px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="text"
            name="siteAddress"
            value={formData.siteAddress}
            onChange={handleInputChange}
            placeholder={t.siteAddress}
            style={{
              padding: "8px",
              borderBottom: "2px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="text"
            name="engineerName"
            value={formData.engineerName}
            onChange={handleInputChange}
            placeholder={t.engineerName}
            style={{
              padding: "8px",
              borderBottom: "2px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="text"
            name="engineerContact"
            value={formData.engineerContact}
            onChange={handleInputChange}
            placeholder={t.contactNo}
            style={{
              padding: "8px",
              borderBottom: "2px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleInputChange}
            style={{
              padding: "8px",
              borderBottom: "2px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Discussion Points */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            {t.discussionPoints}
          </h3>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
            {t.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Note */}
        <p style={{ fontSize: "14px", marginBottom: "20px" }}>
          <strong>{t.note.split(" – ")[0]} – </strong>
          {t.note.split(" – ")[1]}
        </p>

        {/* Signature */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
            {t.ownerManager}
          </p>
          <input
            type="text"
            name="signMobile"
            value={formData.signMobile}
            onChange={handleInputChange}
            placeholder={t.signMobile}
            style={{
              padding: "8px",
              borderBottom: "2px solid #ccc",
              width: "100%",
              maxWidth: "200px",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
    </div>
  );
}
