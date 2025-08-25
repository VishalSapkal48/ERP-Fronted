import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";

export default function WarrantyPeriodForm() {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    date: "",
    ownerName: "",
    signature: "",
    mobile: "",
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
      formTitle: "Annexure: Warranty Periods",
      switchLang: "मराठी",
      labels: {
        date: "Date",
        ownerName: "Branch Owner Name",
        signature: "Signature",
        mobile: "Mobile Number",
      },
      placeholders: {
        date: "Select Date",
        ownerName: "Enter Owner Name",
        signature: "Enter Signature",
        mobile: "Enter Mobile Number",
      },
      note: "Note:\n1) Material unloading will be handled by the owner (requires 6 laborers).\n2) Material setup will be handled by the owner (requires 4 laborers).",
      tableHeaders: [
        "No.",
        "Particulars",
        "Warranty Period",
        "Parts Covered",
        "Qty",
        "Company Name",
      ],
      warrantyData: [
        {
          no: 1,
          particulars: "Refrigerator 500L",
          warrantyPeriod: "As per company policy",
          partsCovered: "Compressor, Cooling Kit",
          qty: 2,
          companyName: "Blue Star",
        },
        {
          no: 2,
          particulars: "Idli Steamer",
          warrantyPeriod: "3 Months (Boiler only)",
          partsCovered: "Boiler linkage & any damage on opening day",
          qty: 1,
          companyName: "S B Kitchen",
        },
        {
          no: 3,
          particulars: "Fryer Machine",
          warrantyPeriod: "6 Months",
          partsCovered: "Coil & Thermostat only",
          qty: 1,
          companyName: "Akasa International",
        },
        {
          no: 4,
          particulars: "Billing Machine (POS)",
          warrantyPeriod: "1 Year",
          partsCovered: "Touchscreen, Display, Motherboard",
          qty: 1,
          companyName: "Captain POS",
        },
        {
          no: 5,
          particulars: "Thermal Printer",
          warrantyPeriod: "1 Year",
          partsCovered: "Cutter & Power Kit",
          qty: 1,
          companyName: "Captain POS",
        },
        {
          no: 6,
          particulars: "Software",
          warrantyPeriod: "1 Year",
          partsCovered: "Petpooja Software Installation",
          qty: 1,
          companyName: "Petpooja",
        },
        {
          no: 7,
          particulars: "Coffee Machine",
          warrantyPeriod: "1 Year",
          partsCovered: "Panel Settings & Cleaning Support",
          qty: 1,
          companyName: "S S Marketing",
        },
        {
          no: 8,
          particulars: "Fire Extinguisher",
          warrantyPeriod: "1 Year",
          partsCovered: "Refill & Installation (6kg Powder)",
          qty: 1,
          companyName: "Mauli Distributor",
        },
        {
          no: 9,
          particulars: "Cookware Set",
          warrantyPeriod: "On Delivery",
          partsCovered: "Damage on opening day only",
          qty: 1,
          companyName: "Prestige",
        },
        {
          no: 10,
          particulars: "Thermos Flask (3L)",
          warrantyPeriod: "1 Year",
          partsCovered: "Internal Hot Panel",
          qty: 1,
          companyName: "Milton",
        },
        {
          no: 11,
          particulars: "Mixer Grinder",
          warrantyPeriod: "6 Months",
          partsCovered: "Motor & Motherboard",
          qty: 2,
          companyName: "As per Brand",
        },
        {
          no: 12,
          particulars: "3D Letter Signage",
          warrantyPeriod: "1 Year",
          partsCovered: "LED Lights & Power Supply",
          qty: 1,
          companyName: "Vendor Provided",
        },
        {
          no: 13,
          particulars: "LED Photo Frames",
          warrantyPeriod: "1 Year",
          partsCovered: "LED Lights & Power Supply",
          qty: 4,
          companyName: "Vendor Provided",
        },
        {
          no: 14,
          particulars: "Lollipop Signage",
          warrantyPeriod: "1 Year",
          partsCovered: "LED Lights & Power Supply",
          qty: 1,
          companyName: "Vendor Provided",
        },
      ],
    },
    mr: {
      title: "वायएनके",
      formTitle: "परिशिष्ट: वॉरंटी कालावधी",
      switchLang: "English",
      labels: {
        date: "तारीख",
        ownerName: "शाखा मालकाचे नाव",
        signature: "सही",
        mobile: "मोबाइल नंबर",
      },
      placeholders: {
        date: "तारीख निवडा",
        ownerName: "मालकाचे नाव प्रविष्ट करा",
        signature: "सही प्रविष्ट करा",
        mobile: "मोबाइल नंबर प्रविष्ट करा",
      },
      note: "टीप:\n१) माल उतरवण्याची जबाबदारी मालकाची असेल (६ मजूर आवश्यक).\n२) माल सेटअप करण्याची जबाबदारी मालकाची असेल (४ मजूर आवश्यक).",
      tableHeaders: [
        "क्र.",
        "तपशील",
        "वॉरंटी कालावधी",
        "कव्हर केलेले भाग",
        "नग",
        "कंपनीचे नाव",
      ],
      warrantyData: [
        {
          no: 1,
          particulars: "फ्रीज ५०० लिटर",
          warrantyPeriod: "कंपनीच्या धोरणानुसार",
          partsCovered: "कंप्रेसर, कूलिंग किट",
          qty: 2,
          companyName: "ब्लू स्टार",
        },
        {
          no: 2,
          particulars: "इडली स्टीमर",
          warrantyPeriod: "३ महिने (फक्त बॉयलर)",
          partsCovered: "बॉयलर लिंकेज आणि डिलिव्हरीच्या दिवशी असलेले डॅमेज",
          qty: 1,
          companyName: "एस बी किचन",
        },
        {
          no: 3,
          particulars: "फ्रायर मशीन",
          warrantyPeriod: "६ महिने",
          partsCovered: "फक्त कॉइल आणि थर्मोस्टॅट",
          qty: 1,
          companyName: "अकासा इंटरनॅशनल",
        },
        {
          no: 4,
          particulars: "बिलिंग मशीन (POS)",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "टचस्क्रीन, डिस्प्ले, मदरबोर्ड",
          qty: 1,
          companyName: "कॅप्टन POS",
        },
        {
          no: 5,
          particulars: "थर्मल प्रिंटर",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "कटर आणि पॉवर किट",
          qty: 1,
          companyName: "कॅप्टन POS",
        },
        {
          no: 6,
          particulars: "सॉफ्टवेअर",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "पेटपूजा सॉफ्टवेअर इन्स्टॉलेशन",
          qty: 1,
          companyName: "पेटपूजा",
        },
        {
          no: 7,
          particulars: "कॉफी मशीन",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "पॅनल सेटिंग्ज आणि क्लीनिंग सपोर्ट",
          qty: 1,
          companyName: "एस एस मार्केटिंग",
        },
        {
          no: 8,
          particulars: "अग्निशामक",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "रिफिल आणि इन्स्टॉलेशन (६ किलो पावडर)",
          qty: 1,
          companyName: "माउली डिस्ट्रिब्युटर",
        },
        {
          no: 9,
          particulars: "कुकवेअर सेट",
          warrantyPeriod: "डिलिव्हरीच्या वेळी",
          partsCovered: "फक्त डिलिव्हरीच्या दिवशी असलेले डॅमेज",
          qty: 1,
          companyName: "प्रेस्टीज",
        },
        {
          no: 10,
          particulars: "थर्मस फ्लास्क (३ लिटर)",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "आतील हॉट पॅनल",
          qty: 1,
          companyName: "मिल्टन",
        },
        {
          no: 11,
          particulars: "मिक्सर ग्राइंडर",
          warrantyPeriod: "६ महिने",
          partsCovered: "मोटर आणि मदरबोर्ड",
          qty: 2,
          companyName: "ब्रँडनुसार",
        },
        {
          no: 12,
          particulars: "३डी लेटर सायनेज",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "एलईडी लाइट्स आणि पॉवर सप्लाय",
          qty: 1,
          companyName: "विक्रेत्याद्वारे प्रदान",
        },
        {
          no: 13,
          particulars: "एलईडी फोटो फ्रेम्स",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "एलईडी लाइट्स आणि पॉवर सप्लाय",
          qty: 4,
          companyName: "विक्रेत्याद्वारे प्रदान",
        },
        {
          no: 14,
          particulars: "लॉलीपॉप सायनेज",
          warrantyPeriod: "१ वर्ष",
          partsCovered: "एलईडी लाइट्स आणि पॉवर सप्लाय",
          qty: 1,
          companyName: "विक्रेत्याद्वारे प्रदान",
        },
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
      marginBottom: "10px",
      color: "#1f2937",
    },
    note: {
      fontSize: "12px",
      marginBottom: "20px",
      backgroundColor: "#fffbeb",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #facc15",
      color: "#78350f",
      fontWeight: "bold",
      whiteSpace: "pre-line",
    },
    tableWrapper: {
      overflowX: "auto",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#f8fafc",
      fontSize: "12px",
      borderRadius: "4px",
      overflow: "hidden",
      border: "1px solid #e5e7eb",
    },
    th: {
      border: "1px solid #e5e7eb",
      padding: "10px",
      textAlign: "left",
      backgroundColor: "#e2e8f0",
      fontWeight: "bold",
      color: "#1f2937",
    },
    td: {
      border: "1px solid #e5e7eb",
      padding: "10px",
      color: "#374151",
      verticalAlign: "middle",
      fontWeight: "bold",
    },
    footer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      border: "1px solid #e5e7eb",
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
      backgroundColor: "#fff",
      boxSizing: "border-box",
    },
  };

  const t = translations[language];

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

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                {t.tableHeaders.map((header, i) => (
                  <th key={i} style={styles.th}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.warrantyData.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                  }}
                >
                  <td style={styles.td}>{row.no}</td>
                  <td style={styles.td}>{row.particulars}</td>
                  <td style={styles.td}>{row.warrantyPeriod}</td>
                  <td style={styles.td}>{row.partsCovered}</td>
                  <td style={styles.td}>{row.qty}</td>
                  <td style={styles.td}>{row.companyName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={styles.note}>{t.note}</p>

        <footer style={styles.footer}>
          <div>
            <label style={styles.footerLabel}>{t.labels.date}:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder={t.placeholders.date}
              style={styles.footerInput}
            />
          </div>
          <div>
            <label style={styles.footerLabel}>{t.labels.ownerName}:</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder={t.placeholders.ownerName}
              style={styles.footerInput}
            />
          </div>
          <div>
            <label style={styles.footerLabel}>{t.labels.signature}:</label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              placeholder={t.placeholders.signature}
              style={styles.footerInput}
            />
          </div>
          <div>
            <label style={styles.footerLabel}>{t.labels.mobile}:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder={t.placeholders.mobile}
              style={styles.footerInput}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}