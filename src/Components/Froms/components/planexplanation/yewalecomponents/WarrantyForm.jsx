import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";

const WarrantyForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    ownerName: "",
    mobileNumber: "",
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
      formTitle: "Annexure B - Warranty Period",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      tableHeaders: {
        no: "No",
        particulars: "Particulars",
        warrantyPeriod: "Warranty Period",
        warrantyPart: "Warranty Part",
        qty: "Qty",
        company: "Company Name",
      },
      ownerLabel: "Owner Name",
      mobileLabel: "Mobile Number",
      ownerPlaceholder: "Enter owner name",
      mobilePlaceholder: "Enter mobile number",
    },
    mr: {
      title: "वायएनके",
      formTitle: "अ annexure B - वॉरंटी कालावधी",
      switchLang: "English",
      switchAria: "Switch to English",
      tableHeaders: {
        no: "क्रमांक",
        particulars: "विशेष",
        warrantyPeriod: "वॉरंटी कालावधी",
        warrantyPart: "वॉरंटी भाग",
        qty: "प्रमाण",
        company: "कंपनी नाव",
      },
      ownerLabel: "मालकाचे नाव",
      mobileLabel: "मोबाइल नंबर",
      ownerPlaceholder: "मालकाचे नाव प्रविष्ट करा",
      mobilePlaceholder: "मोबाइल नंबर प्रविष्ट करा",
    },
  };

  const data = [
    {
      no: 1,
      particulars: {
        en: "Fridge 350 ltr (blue star)",
        mr: "फ्रिज 350 लिटर (ब्लू स्टार)",
      },
      warrantyPeriod: {
        en: "As per company period",
        mr: "कंपनीच्या कालावधीनुसार",
      },
      warrantyPart: {
        en: "Compressor + Cooling kit, co. policy",
        mr: "कंप्रेसर + कूलिंग किट, कंपनी धोरण",
      },
      qty: 1,
      company: { en: "Blue star", mr: "ब्लू स्टार" },
    },
    {
      no: 2,
      particulars: { en: "Milk machine", mr: "दूध मशीन" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: { en: "Only motor", mr: "फक्त मोटर" },
      qty: 1,
      company: { en: "Laxmi industries", mr: "लक्ष्मी इंडस्ट्रीज" },
    },
    {
      no: 3,
      particulars: { en: "TV", mr: "टीव्ही" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: { en: "Only technical issue", mr: "फक्त तांत्रिक समस्या" },
      qty: 1,
      company: { en: "Philips", mr: "फिलिप्स" },
    },
    {
      no: 4,
      particulars: { en: "Bill machine", mr: "बिल मशीन" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: {
        en: "Touch display, motherboard",
        mr: "टच डिस्प्ले, मादरबोर्ड",
      },
      qty: 1,
      company: { en: "Captain pos", mr: "कॅप्टन पॉस" },
    },
    {
      no: 5,
      particulars: { en: "Thermal printer", mr: "थर्मल प्रिंटर" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: { en: "Cutter + power kite", mr: "कटर + पावर किट" },
      qty: 1,
      company: { en: "Captain pos", mr: "कॅप्टन पॉस" },
    },
    {
      no: 6,
      particulars: { en: "Software", mr: "सॉफ्टवेअर" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: { en: "-", mr: "-" },
      qty: 1,
      company: { en: "Billwick", mr: "बिल्विक" },
    },
    {
      no: 7,
      particulars: { en: "Pulta (Mascot)", mr: "पुलटा (मस्कॉट)" },
      warrantyPeriod: { en: "Checking warranty", mr: "वॉरंटी तपासणी" },
      warrantyPart: { en: "-", mr: "-" },
      qty: 1,
      company: { en: "YNK enterprises", mr: "वायएनके एंटरप्राइजेस" },
    },
    {
      no: 8,
      particulars: { en: "Fire tank", mr: "फायर टँक" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: {
        en: "Refill installation powder - 6kg",
        mr: "रीफिल इन्स्टॉलेशन पावडर - 6 किलो",
      },
      qty: 1,
      company: { en: "Anvi Distributor", mr: "अन्वी डिस्ट्रिब्युटर" },
    },
    {
      no: 9,
      particulars: { en: "Electric kettle", mr: "इलेक्ट्रिक केटल" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: { en: "Only technical issue", mr: "फक्त तांत्रिक समस्या" },
      qty: 1,
      company: { en: "Prestige", mr: "प्रेस्टिज" },
    },
    {
      no: 10,
      particulars: { en: "Thermos 3 ltr", mr: "थर्मोस 3 लिटर" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: { en: "Hot panel inside", mr: "आतील गरम पॅनेल" },
      qty: 1,
      company: { en: "Milton", mr: "मिल्टन" },
    },
    {
      no: 11,
      particulars: { en: "Mixer", mr: "मिक्सर" },
      warrantyPeriod: { en: "6 months", mr: "6 महिने" },
      warrantyPart: { en: "Motor, motherboard", mr: "मोटर, मादरबोर्ड" },
      qty: 2,
      company: { en: "As per brand", mr: "ब्रँडनुसार" },
    },
    {
      no: 12,
      particulars: {
        en: "Letter work (marathi, english, hindi)",
        mr: "अक्षर काम (मराठी, इंग्रजी, हिंदी)",
      },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: {
        en: "LED light, power supply",
        mr: "एलईडी लाइट, पावर सप्लाय",
      },
      qty: 1,
      company: { en: "Checking warranty", mr: "वॉरंटी तपासणी" },
    },
    {
      no: 13,
      particulars: { en: "Photo menu frame", mr: "फोटो मेनू फ्रेम" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: {
        en: "LED light, power supply",
        mr: "एलईडी लाइट, पावर सप्लाय",
      },
      qty: 1,
      company: { en: "Checking warranty", mr: "वॉरंटी तपासणी" },
    },
    {
      no: 14,
      particulars: { en: "Lolly pop", mr: "लॉलीपॉप" },
      warrantyPeriod: { en: "1 year", mr: "1 वर्ष" },
      warrantyPart: {
        en: "LED light, power supply",
        mr: "एलईडी लाइट, पावर सप्लाय",
      },
      qty: 1,
      company: { en: "Checking warranty", mr: "वॉरंटी तपासणी" },
    },
    {
      no: 15,
      particulars: { en: "LED scrolling board", mr: "एलईडी स्क्रोलिंग बोर्ड" },
      warrantyPeriod: { en: "6 months", mr: "6 महिने" },
      warrantyPart: {
        en: "Motherboard and power supply",
        mr: "मादरबोर्ड आणि पावर सप्लाय",
      },
      qty: 1,
      company: { en: "YNK enterprises", mr: "वायएनके एंटरप्राइजेस" },
    },
    {
      no: 16,
      particulars: { en: "Kitchen Equipment's", mr: "किचन उपकरणे" },
      warrantyPeriod: { en: "Checking warranty", mr: "वॉरंटी तपासणी" },
      warrantyPart: { en: "-", mr: "-" },
      qty: 1,
      company: { en: "YNK enterprises", mr: "वायएनके एंटरप्राइजेस" },
    },
    {
      no: 17,
      particulars: { en: "Housekeeping material", mr: "हाऊसकीपिंग साहित्य" },
      warrantyPeriod: { en: "Checking warranty", mr: "वॉरंटी तपासणी" },
      warrantyPart: { en: "-", mr: "-" },
      qty: 1,
      company: { en: "YNK enterprises", mr: "वायएनके एंटरप्राइजेस" },
    },
  ];

  const t = translations[language];

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
            style={{
              background: "none",
              border: "none",
              fontSize: "14px",
              color: "#4b5563",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleLanguageToggle}
            aria-label={t.switchAria}
          >
            {t.switchLang}
          </button>
        </div>
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
        <div className="overflow-x-auto">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#e3f2fd",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #c3d8e8",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f4f8",
                    fontWeight: "bold",
                  }}
                >
                  {t.tableHeaders.no}
                </th>
                <th
                  style={{
                    border: "1px solid #c3d8e8",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f4f8",
                    fontWeight: "bold",
                  }}
                >
                  {t.tableHeaders.particulars}
                </th>
                <th
                  style={{
                    border: "1px solid #c3d8e8",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f4f8",
                    fontWeight: "bold",
                  }}
                >
                  {t.tableHeaders.warrantyPeriod}
                </th>
                <th
                  style={{
                    border: "1px solid #c3d8e8",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f4f8",
                    fontWeight: "bold",
                  }}
                >
                  {t.tableHeaders.warrantyPart}
                </th>
                <th
                  style={{
                    border: "1px solid #c3d8e8",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f4f8",
                    fontWeight: "bold",
                  }}
                >
                  {t.tableHeaders.qty}
                </th>
                <th
                  style={{
                    border: "1px solid #c3d8e8",
                    padding: "8px",
                    textAlign: "left",
                    backgroundColor: "#f0f4f8",
                    fontWeight: "bold",
                  }}
                >
                  {t.tableHeaders.company}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no}>
                  <td
                    style={{
                      border: "1px solid #c3d8e8",
                      padding: "8px",
                      textAlign: "left",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {item.no}
                  </td>
                  <td
                    style={{
                      border: "1px solid #c3d8e8",
                      padding: "8px",
                      textAlign: "left",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {language === "en"
                      ? item.particulars.en
                      : item.particulars.mr}
                  </td>
                  <td
                    style={{
                      border: "1px solid #c3d8e8",
                      padding: "8px",
                      textAlign: "left",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {language === "en"
                      ? item.warrantyPeriod.en
                      : item.warrantyPeriod.mr}
                  </td>
                  <td
                    style={{
                      border: "1px solid #c3d8e8",
                      padding: "8px",
                      textAlign: "left",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {language === "en"
                      ? item.warrantyPart.en
                      : item.warrantyPart.mr}
                  </td>
                  <td
                    style={{
                      border: "1px solid #c3d8e8",
                      padding: "8px",
                      textAlign: "left",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {item.qty}
                  </td>
                  <td
                    style={{
                      border: "1px solid #c3d8e8",
                      padding: "8px",
                      textAlign: "left",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {language === "en" ? item.company.en : item.company.mr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <div>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "4px",
                fontSize: "12px",
              }}
            >
              {t.ownerLabel}:
            </label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder={t.ownerPlaceholder}
              style={{
                padding: "5px",
                marginLeft: "10px",
                borderBottom: "2px solid #ccc",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginTop: "8px" }}>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "4px",
                fontSize: "12px",
              }}
            >
              {t.mobileLabel}:
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder={t.mobilePlaceholder}
              style={{
                padding: "5px",
                marginLeft: "10px",
                borderBottom: "2px solid #ccc",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyForm;
