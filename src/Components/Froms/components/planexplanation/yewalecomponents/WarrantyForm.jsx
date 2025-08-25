import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";

const WarrantyForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    ownerName: "",
    signMobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const warrantyData = [
    {
      no: 1,
      particulars: {
        en: "Fridge 350L (Blue Star)",
        mr: "फ्रिज ३५० लिटर (ब्लू स्टार)",
      },
      warrantyPeriod: {
        en: "As per company policy",
        mr: "कंपनीच्या धोरणानुसार",
      },
      warrantyPart: {
        en: "Compressor + Cooling Kit",
        mr: "कंप्रेसर + कूलिंग किट",
      },
      qty: 1,
      company: { en: "Blue Star", mr: "ब्लू स्टार" },
    },
    {
      no: 2,
      particulars: { en: "Milk Machine", mr: "दूध मशीन" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: { en: "Motor only", mr: "फक्त मोटर" },
      qty: 1,
      company: { en: "Laxmi Industries", mr: "लक्ष्मी इंडस्ट्रीज" },
    },
    {
      no: 3,
      particulars: { en: "Television (TV)", mr: "टीव्ही" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: { en: "Technical issues only", mr: "फक्त तांत्रिक समस्या" },
      qty: 1,
      company: { en: "Philips", mr: "फिलिप्स" },
    },
    {
      no: 4,
      particulars: { en: "Billing Machine (POS)", mr: "बिलिंग मशीन" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: {
        en: "Touch Display, Motherboard",
        mr: "टच डिस्प्ले, मदरबोर्ड",
      },
      qty: 1,
      company: { en: "Captain POS", mr: "कॅप्टन पॉस" },
    },
    {
      no: 5,
      particulars: { en: "Thermal Printer", mr: "थर्मल प्रिंटर" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: { en: "Cutter & Power Kit", mr: "कटर आणि पॉवर किट" },
      qty: 1,
      company: { en: "Captain POS", mr: "कॅप्टन पॉस" },
    },
    {
      no: 6,
      particulars: { en: "Software", mr: "सॉफ्टवेअर" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: { en: "-", mr: "-" },
      qty: 1,
      company: { en: "Billwick", mr: "बिलविक" },
    },
    {
      no: 7,
      particulars: { en: "Putla (Mascot)", mr: "पुतळा (मस्कॉट)" },
      warrantyPeriod: { en: "On Delivery", mr: "डिलिव्हरीच्या वेळी तपासणी" },
      warrantyPart: {
        en: "Checking for damage on delivery",
        mr: "डिलिव्हरीच्या वेळी नुकसान तपासणी",
      },
      qty: 1,
      company: { en: "YNK Enterprises", mr: "वायएनके एंटरप्रायझेस" },
    },
    {
      no: 8,
      particulars: { en: "Fire Extinguisher", mr: "अग्निशामक" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: {
        en: "Refill & Installation (6kg Powder)",
        mr: "रिफिल आणि इन्स्टॉलेशन (६ किलो पावडर)",
      },
      qty: 1,
      company: { en: "Anvi Distributor", mr: "अन्वी डिस्ट्रिब्युटर्स" },
    },
    {
      no: 9,
      particulars: { en: "Electric Kettle", mr: "इलेक्ट्रिक किटली" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: { en: "Technical issues only", mr: "फक्त तांत्रिक समस्या" },
      qty: 1,
      company: { en: "Prestige", mr: "प्रेस्टीज" },
    },
    {
      no: 10,
      particulars: { en: "Thermos Flask (3L)", mr: "थर्मॉस फ्लास्क (३ लिटर)" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: { en: "Internal Hot Panel", mr: "आतील हॉट पॅनल" },
      qty: 1,
      company: { en: "Milton", mr: "मिल्टन" },
    },
    {
      no: 11,
      particulars: { en: "Mixer Grinder", mr: "मिक्सर ग्राईंडर" },
      warrantyPeriod: { en: "6 Months", mr: "६ महिने" },
      warrantyPart: { en: "Motor, Motherboard", mr: "मोटर, मदरबोर्ड" },
      qty: 2,
      company: { en: "As per Brand", mr: "ब्रँडनुसार" },
    },
    {
      no: 12,
      particulars: {
        en: "Letter Work (Marathi, English, Hindi)",
        mr: "लेटर वर्क (मराठी, इंग्रजी, हिंदी)",
      },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: {
        en: "LED Lights, Power Supply",
        mr: "एलईडी लाईट्स, पॉवर सप्लाय",
      },
      qty: 1,
      company: { en: "Vendor Provided", mr: "विक्रेत्याद्वारे पुरवठा केलेले" },
    },
    {
      no: 13,
      particulars: { en: "Photo Menu Frame", mr: "फोटो मेनू फ्रेम" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: {
        en: "LED Lights, Power Supply",
        mr: "एलईडी लाईट्स, पॉवर सप्लाय",
      },
      qty: 1,
      company: { en: "Vendor Provided", mr: "विक्रेत्याद्वारे पुरवठा केलेले" },
    },
    {
      no: 14,
      particulars: { en: "Lollipop Signage", mr: "लॉलीपॉप सायनेज" },
      warrantyPeriod: { en: "1 Year", mr: "१ वर्ष" },
      warrantyPart: {
        en: "LED Lights, Power Supply",
        mr: "एलईडी लाईट्स, पॉवर सप्लाय",
      },
      qty: 1,
      company: { en: "Vendor Provided", mr: "विक्रेत्याद्वारे पुरवठा केलेले" },
    },
    {
      no: 15,
      particulars: { en: "LED Scrolling Board", mr: "एलईडी स्क्रोलिंग बोर्ड" },
      warrantyPeriod: { en: "6 Months", mr: "६ महिने" },
      warrantyPart: {
        en: "Motherboard, Power Supply",
        mr: "मदरबोर्ड, पॉवर सप्लाय",
      },
      qty: 1,
      company: { en: "YNK Enterprises", mr: "वायएनके एंटरप्रायझेस" },
    },
    {
      no: 16,
      particulars: { en: "Kitchen Equipment", mr: "किचन उपकरणे" },
      warrantyPeriod: { en: "On Delivery", mr: "डिलिव्हरीच्या वेळी तपासणी" },
      warrantyPart: { en: "-", mr: "-" },
      qty: 1,
      company: { en: "YNK Enterprises", mr: "वायएनके एंटरप्रायझेस" },
    },
    {
      no: 17,
      particulars: { en: "Housekeeping Material", mr: "हाऊसकीपिंग साहित्य" },
      warrantyPeriod: { en: "On Delivery", mr: "डिलिव्हरीच्या वेळी तपासणी" },
      warrantyPart: { en: "-", mr: "-" },
      qty: 1,
      company: { en: "YNK Enterprises", mr: "वायएनके एंटरप्रायझेस" },
    },
  ];

  const translations = {
    en: {
      title: "YNK",
      formTitle: "Annexure B - Warranty Period",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      tableHeaders: {
        no: "No.",
        particulars: "Particulars",
        warrantyPeriod: "Warranty Period",
        warrantyPart: "Parts Covered",
        qty: "Qty",
        company: "Company Name",
      },
      declaration: {
        part1: "This warranty agreement is acknowledged by Owner ",
        part2: " for the items listed below.",
      },
      ownerLabel: "Owner Name",
      signMobileLabel: "Signature & Mobile No.",
      ownerPlaceholder: "Enter owner name",
      signMobilePlaceholder: "Enter signature & mobile",
    },
    mr: {
      title: "वायएनके",
      formTitle: "परिशिष्ट B - वॉरंटी कालावधी",
      switchLang: "English",
      switchAria: "Switch to English",
      tableHeaders: {
        no: "क्र.",
        particulars: "तपशील",
        warrantyPeriod: "वॉरंटी कालावधी",
        warrantyPart: "कव्हर केलेले भाग",
        qty: "नग",
        company: "कंपनीचे नाव",
      },
      declaration: {
        part1: "हा वॉरंटी करार मालक ",
        part2: " यांनी खालील यादीतील वस्तूंसाठी मान्य केला आहे.",
      },
      ownerLabel: "मालकाचे नाव",
      signMobileLabel: "सही आणि मोबाइल नंबर",
      ownerPlaceholder: "मालकाचे नाव प्रविष्ट करा",
      signMobilePlaceholder: "सही आणि मोबाइल प्रविष्ट करा",
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
    contentSection: {
      padding: "15px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      border: "1px solid #e5e7eb",
    },
    declaration: {
      color: "#1f2937",
      fontSize: "12px",
      marginBottom: "12px",
      whiteSpace: "pre-wrap",
      lineHeight: "1.5",
      backgroundColor: "#f8fafc",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #e5e7eb",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    declarationInput: {
      width: "150px",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      padding: "4px",
      fontSize: "12px",
      backgroundColor: "#fff",
      margin: "0 5px",
      display: "inline-block",
    },
    tableWrapper: {
      overflowX: "auto",
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
      textTransform: "capitalize",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      marginTop: "20px",
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
          <button
            style={styles.langButton}
            onClick={handleLanguageToggle}
            aria-label={t.switchAria}
          >
            {t.switchLang}
          </button>
        </header>

        <h2 style={styles.formTitle}>{t.formTitle}</h2>

        <div style={styles.contentSection}>
          <p style={styles.declaration}>
            {t.declaration.part1}
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder={t.ownerPlaceholder}
              style={styles.declarationInput}
            />
            {t.declaration.part2}
          </p>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  {Object.values(t.tableHeaders).map((header, i) => (
                    <th key={i} style={styles.th}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {warrantyData.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                    }}
                  >
                    <td style={styles.td}>{row.no}</td>
                    <td style={styles.td}>{row.particulars[language]}</td>
                    <td style={styles.td}>{row.warrantyPeriod[language]}</td>
                    <td style={styles.td}>{row.warrantyPart[language]}</td>
                    <td style={styles.td}>{row.qty}</td>
                    <td style={styles.td}>{row.company[language]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer style={styles.footer}>
            <div>
              <label style={styles.footerLabel}>{t.signMobileLabel}:</label>
              <input
                type="text"
                name="signMobile"
                value={formData.signMobile}
                onChange={handleChange}
                placeholder={t.signMobilePlaceholder}
                style={styles.footerInput}
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default WarrantyForm;