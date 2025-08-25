import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";
import { ChevronRight } from "lucide-react";

export default function ConstructionForm() {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerContact: "",
    siteAddress: "",
    engineerName: "",
    engineerContact: "",
    dateTime: "",
    signMobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const translations = {
    en: {
      title: "YNK",
      formTitle: "Construction Site Inspection Form",
      switchLang: "मराठी",
      labels: {
        ownerName: "Owner Name",
        ownerContact: "Owner Contact No.",
        siteAddress: "Site Address",
        engineerName: "Engineer Name",
        engineerContact: "Engineer Contact No.",
        dateTime: "Date & Time",
        discussionPoints: "Discussion Points",
        ownerManager: "Owner / Manager Signature",
        signMobile: "Signature & Mobile No.",
      },
      note: "Note: The owner must send daily progress updates (photos/videos) to the YNK team.",
      points: [
        "A 5kW electric meter is required.",
        "Proper earthing is compulsory.",
        "A dedicated drainage chamber for the shop is mandatory.",
        "A separate water connection for the shop must be established.",
        "Plans for an exhaust fan or ducting work must be finalized.",
        "The water storage plan (e.g., tank capacity) must be confirmed.",
        "The shop layout must be finalized (confirming any changes).",
        "Any potential objections from neighbors or authorities during civil work must be addressed.",
      ],
    },
    mr: {
      title: "वायएनके",
      formTitle: "बांधकाम साईट तपासणी फॉर्म",
      switchLang: "English",
      labels: {
        ownerName: "मालकाचे नाव",
        ownerContact: "मालक संपर्क क्रमांक",
        siteAddress: "साइटचा पत्ता",
        engineerName: "इंजिनिअरचे नाव",
        engineerContact: "इंजिनिअर संपर्क क्रमांक",
        dateTime: "तारीख आणि वेळ",
        discussionPoints: "चर्चेचे मुद्दे",
        ownerManager: "मालक / व्यवस्थापक सही",
        signMobile: "सही आणि मोबाइल नंबर",
      },
      note: "टीप: मालकाने दररोज कामाच्या प्रगतीचे अपडेट्स (फोटो/व्हिडिओ) YNK टीमला पाठवणे आवश्यक आहे.",
      points: [
        "५ किलोवॅटचे इलेक्ट्रिक मीटर आवश्यक आहे.",
        "योग्य अर्थिंग करणे अनिवार्य आहे.",
        "दुकानासाठी स्वतंत्र ड्रेनेज चेंबर अनिवार्य आहे.",
        "दुकानासाठी स्वतंत्र पाणी कनेक्शन असणे आवश्यक आहे.",
        "एक्झॉस्ट फॅन किंवा डक्टिंगच्या कामाची योजना निश्चित करणे.",
        "पाणी साठवणुकीची योजना (उदा. टाकीची क्षमता) निश्चित करणे.",
        "दुकानाचा लेआउट अंतिम करणे (कोणतेही बदल असल्यास निश्चित करणे).",
        "बांधकाम करताना शेजारी किंवा प्रशासनाकडून कोणतेही संभाव्य आक्षेप असल्यास ते सोडवणे.",
      ],
    },
  };

  // --- Component Styles ---
  const styles = {
    pageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      padding: "20px",
      boxSizing: "border-box",
    },
    formContainer: {
      width: "100%",
      maxWidth: "800px",
      padding: "20px",
      backgroundColor: "#e3f2fd",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "10px",
      borderRadius: "4px",
      marginBottom: "10px",
    },
    headerTitleContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: "40px",
      width: "40px",
      marginRight: "10px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1e40af",
      margin: 0,
    },
    langButton: {
      background: "none",
      border: "none",
      fontSize: "14px",
      color: "#4b5563",
      textDecoration: "underline",
      cursor: "pointer",
      fontWeight: "bold",
    },
    formTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#1f2937",
    },
    inputFieldsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "15px",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      width: "100%",
      boxSizing: "border-box",
      fontSize: "12px",
      fontWeight: "bold",
    },
    label: {
      display: "block",
      fontSize: "12px",
      color: "#374151",
      marginBottom: "4px",
      fontWeight: "bold",
    },
    sectionContainer: {
      marginBottom: "20px",
      padding: "15px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      border: "1px solid #e5e7eb",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#1e40af",
      marginBottom: "10px",
      borderBottom: "2px solid #e3f2fd",
      paddingBottom: "4px",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      fontSize: "12px",
      color: "#374151",
      padding: "6px 0",
      fontWeight: "bold",
    },
    note: {
      fontSize: "12px",
      margin: "20px 0",
      backgroundColor: "#fffbeb",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #facc15",
      color: "#78350f",
      fontWeight: "bold",
      textAlign: "center",
    },
    footer: {
      textAlign: "center",
      marginTop: "30px",
    },
    footerLabel: {
      fontWeight: "bold",
      marginBottom: "4px",
      fontSize: "12px",
      color: "#374151",
      display: "block",
    },
    footerInput: {
      padding: "8px",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      fontSize: "12px",
      width: "100%",
      maxWidth: "250px",
      backgroundColor: "#fff",
      boxSizing: "border-box",
    },
  };

  const t = translations[language];

  const InputField = ({ name, value, placeholder, type = "text" }) => (
    <div>
      <label style={styles.label}>{placeholder}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        style={styles.input}
      />
    </div>
  );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <header style={styles.header}>
          <div style={styles.headerTitleContainer}>
            <img src={logo} alt="YNK Logo" style={styles.logo} />
            <h1 style={styles.title}>{t.title}</h1>
          </div>
          <button style={styles.langButton} onClick={handleLanguageToggle}>
            {t.switchLang}
          </button>
        </header>

        <h2 style={styles.formTitle}>{t.formTitle}</h2>

        <div style={styles.inputFieldsContainer}>
          <InputField
            name="ownerName"
            value={formData.ownerName}
            placeholder={t.labels.ownerName}
          />
          <InputField
            name="ownerContact"
            value={formData.ownerContact}
            placeholder={t.labels.ownerContact}
          />
          <InputField
            name="siteAddress"
            value={formData.siteAddress}
            placeholder={t.labels.siteAddress}
          />
          <InputField
            name="engineerName"
            value={formData.engineerName}
            placeholder={t.labels.engineerName}
          />
          <InputField
            name="engineerContact"
            value={formData.engineerContact}
            placeholder={t.labels.engineerContact}
          />
          <div>
            <label style={styles.label}>{t.labels.dateTime}:</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.sectionContainer}>
          <h3 style={styles.sectionTitle}>{t.labels.discussionPoints}</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {t.points.map((point, idx) => (
              <li key={idx} style={styles.listItem}>
                <ChevronRight
                  size={16}
                  style={{
                    marginRight: "8px",
                    color: "#1e40af",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <p style={styles.note}>{t.note}</p>

        <footer style={styles.footer}>
          <label style={styles.footerLabel}>{t.labels.ownerManager}</label>
          <input
            type="text"
            name="signMobile"
            value={formData.signMobile}
            onChange={handleChange}
            placeholder={t.labels.signMobile}
            style={styles.footerInput}
          />
        </footer>
      </div>
    </div>
  );
}