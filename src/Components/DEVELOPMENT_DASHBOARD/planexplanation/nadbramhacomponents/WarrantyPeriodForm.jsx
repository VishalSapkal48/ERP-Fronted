import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";

export default function WarrantyPeriodForm() {
  const [lang, setLang] = useState("mr");
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
    setLang((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const translations = {
    mr: {
      title: "वायएनके",
      formTitle: "परिशिष्ट: वॉरंटी कालावधी",
      switchLang: "English",
      switchAria: "Switch to English",
      labels: {
        date: "तारीख",
        owner: "शाखा मालक नाव/ सही",
        sign: "स्वाक्षरी",
        mobile: "मोबाईल",
        tableHead: [
          "नं",
          "तपशील",
          "वॉरंटी कालावधी",
          "वॉरंटी भाग",
          "प्रमाण",
          "कंपनी नाव",
        ],
      },
      note: "नोट:\n1) माल उतरवणे मालकाच्या बाजूने केले जाईल (6 मजूर)\n2) माल सेटअप मालकाच्या बाजूने केले जाईल (4 मजूर)",
      warrantyData: [
        {
          no: "1",
          particulars: "फ्रिज 500 लिटर (ब्लू स्टार)",
          warrantyPeriod: "कंपनीच्या कालावधीनुसार",
          warrantyPart: "कंप्रेसर + कॉलिन किट, कंपनी धोरण",
          qty: "2",
          companyName: "Blue Star",
        },
        {
          no: "2",
          particulars: "इडली स्टीमर",
          warrantyPeriod: "फक्त 3 महिने बायलर",
          warrantyPart: "बायलर लिंकेज + डॅमेज ओपनिंग डे",
          qty: "1",
          companyName: "S B Kitchen",
        },
        {
          no: "3",
          particulars: "फ्रायर मशीन",
          warrantyPeriod: "6 महिने",
          warrantyPart: "फक्त कॉइल + थर्मामीटर",
          qty: "1",
          companyName: "Akasa International",
        },
        {
          no: "4",
          particulars: "बिल मशीन",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "टेक, डिस्प्ले, मदर बोर्ड",
          qty: "1",
          companyName: "Captain POS",
        },
        {
          no: "5",
          particulars: "थर्मल प्रिंटर",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "कटर + पावर किट",
          qty: "1",
          companyName: "Captain POS",
        },
        {
          no: "6",
          particulars: "सॉफ्टवेअर",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "पेटपुजा इन्स्टॉलेशन",
          qty: "1",
          companyName: "Petpooja",
        },
        {
          no: "7",
          particulars: "कॉफी मशीन",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "पॅनल सेटिंग + क्लिनिंग",
          qty: "1",
          companyName: "S S Marketing",
        },
        {
          no: "8",
          particulars: "फायर टँक",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "रिफिल इन्स्टॉलेशन पावडर - 6 किलो",
          qty: "1",
          companyName: "Mauli Distributor",
        },
        {
          no: "9",
          particulars: "कूकवेअर",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "फक्त ओपनिंग डे डॅमेज",
          qty: "1",
          companyName: "Prestige",
        },
        {
          no: "10",
          particulars: "थर्मास 3 लिटर",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "हॉट पॅनल इनसाइड",
          qty: "1",
          companyName: "Milton",
        },
        {
          no: "11",
          particulars: "मिक्सर",
          warrantyPeriod: "6 महिने",
          warrantyPart: "मोटर, मदर बोर्ड",
          qty: "2",
          companyName: "ब्रँडनुसार",
        },
        {
          no: "12",
          particulars: "लेटर वर्क (मराठी, इंग्लिश, हिंदी)",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "एलईडी लाइट, पावर सप्लाय",
          qty: "339",
          companyName: "वॉरंटी तपासणी",
        },
        {
          no: "13",
          particulars: "फोटो फ्रेम 4 तुकडे",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "एलईडी लाइट, पावर सप्लाय",
          qty: "4",
          companyName: "वॉरंटी तपासणी",
        },
        {
          no: "14",
          particulars: "लॉली पॉप",
          warrantyPeriod: "1 वर्ष",
          warrantyPart: "एलईडी लाइट, पावर सप्लाय",
          qty: "1",
          companyName: "वॉरंटी तपासणी",
        },
      ],
    },
    en: {
      title: "YNK",
      formTitle: "Annexure: Warranty Period",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      labels: {
        date: "Date",
        owner: "Branch Owner Name/Sign",
        sign: "Signature",
        mobile: "Mobile",
        tableHead: [
          "No",
          "Particulars",
          "Warranty Period",
          "Warranty Part",
          "Qty",
          "Company Name",
        ],
      },
      note: "Note:\n1) Material unloading done by owner side (6 labours)\n2) Material setup done by owner side (4 labours)",
      warrantyData: [
        {
          no: "1",
          particulars: "Fridge 500 LTR (Blue Star)",
          warrantyPeriod: "As Per Company Period",
          warrantyPart: "Compressor + Collin Kite, Co. Policy",
          qty: "2",
          companyName: "Blue Star",
        },
        {
          no: "2",
          particulars: "Idli Steamer",
          warrantyPeriod: "3 Month Only Boiler",
          warrantyPart: "Boiler Linkage + Damage Opening Day",
          qty: "1",
          companyName: "S B Kitchen",
        },
        {
          no: "3",
          particulars: "Fryer Machine",
          warrantyPeriod: "6 Month",
          warrantyPart: "Only Coil + Thermometer",
          qty: "1",
          companyName: "Akasa International",
        },
        {
          no: "4",
          particulars: "Bill Machine",
          warrantyPeriod: "1 Years",
          warrantyPart: "Tech, Display, Mother Board",
          qty: "1",
          companyName: "Captain POS",
        },
        {
          no: "5",
          particulars: "Thermal Printer",
          warrantyPeriod: "1 Years",
          warrantyPart: "Cutter + Power Kite",
          qty: "1",
          companyName: "Captain POS",
        },
        {
          no: "6",
          particulars: "Software",
          warrantyPeriod: "1 Years",
          warrantyPart: "Petpooja Installation",
          qty: "1",
          companyName: "Petpooja",
        },
        {
          no: "7",
          particulars: "Coffee Machine",
          warrantyPeriod: "1 Years",
          warrantyPart: "Pannal Setting + Cleaning",
          qty: "1",
          companyName: "S S Marketing",
        },
        {
          no: "8",
          particulars: "Fire Tank",
          warrantyPeriod: "1 Years",
          warrantyPart: "Refill Installation Powder - 6Kg",
          qty: "1",
          companyName: "Mauli Distributor",
        },
        {
          no: "9",
          particulars: "Cookware",
          warrantyPeriod: "1 Years",
          warrantyPart: "Opening Day Damage Only",
          qty: "1",
          companyName: "Prestige",
        },
        {
          no: "10",
          particulars: "Thermos 3 LTR",
          warrantyPeriod: "1 Years",
          warrantyPart: "Hot Pannal Inside",
          qty: "1",
          companyName: "Milton",
        },
        {
          no: "11",
          particulars: "Mixer",
          warrantyPeriod: "6 Month",
          warrantyPart: "Motor, Mother Board",
          qty: "2",
          companyName: "As Per Brand",
        },
        {
          no: "12",
          particulars: "Letter Work (Marathi, English, Hindi)",
          warrantyPeriod: "1 Years",
          warrantyPart: "Led Light, Power Supply",
          qty: "339",
          companyName: "Checking Warranty",
        },
        {
          no: "13",
          particulars: "Photo Frame 4 Pieces",
          warrantyPeriod: "1 Years",
          warrantyPart: "Led Light, Power Supply",
          qty: "4",
          companyName: "Checking Warranty",
        },
        {
          no: "14",
          particulars: "Lolly Pop",
          warrantyPeriod: "1 Years",
          warrantyPart: "Led Light, Power Supply",
          qty: "1",
          companyName: "Checking Warranty",
        },
      ],
    },
  };

  const t = translations[lang];

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
            color: "#1f2937",
          }}
        >
          {t.formTitle}
        </h2>

        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
           border: "3px solid #e5e7eb",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "#f8fafc",
                fontSize: "12px",
                borderRadius: "4px",
                overflow: "hidden",
               border: "3px solid #e5e7eb",
              }}
            >
              <thead>
                <tr>
                  {t.labels.tableHead.map((head, i) => (
                    <th
                      key={i}
                      style={{
                       border: "3px solid #e5e7eb",
                        padding: "10px",
                        textAlign: "left",
                        backgroundColor: "#e2e8f0",
                        fontWeight: "600",
                        color: "#1f2937",
                      }}
                    >
                      {head}
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
                    <td
                      style={{
                      border: "3px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        fontWeight: "bold",
                      }}
                    >
                      {row.no}
                    </td>
                    <td
                      style={{
                        border: "3px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        fontWeight: "bold",
                      }}
                    >
                      {row.particulars}
                    </td>
                    <td
                      style={{
                       border: "3px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        fontWeight: "bold",
                      }}
                    >
                      {row.warrantyPeriod}
                    </td>
                    <td
                      style={{
                       border: "3px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        fontWeight: "bold",
                      }}
                    >
                      {row.warrantyPart}
                    </td>
                    <td
                      style={{
                       border: "3px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        fontWeight: "bold",
                      }}
                    >
                      {row.qty}
                    </td>
                    <td
                      style={{
                       border: "3px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        fontWeight: "bold",
                      }}
                    >
                      {row.companyName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p
          style={{
                  fontSize: "13px",
                  marginBottom: "10px",
                  backgroundColor: "#fff7ed",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "2px solid #fb923c",
                  color: "#7c2d12",
                  fontWeight: "bold",
                   whiteSpace: "pre-line",
          }}
        >
          {t.note}
        </p>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "600",
                marginBottom: "4px",
                fontSize: "12px",
                color: "#374151",
                display: "block",
              }}
            >
              {t.labels.sign}:
            </label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              placeholder={
                lang === "en" ? "Enter Signature" : "स्वाक्षरी प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
              }}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "600",
                marginBottom: "4px",
                fontSize: "12px",
                color: "#374151",
                display: "block",
              }}
            >
              {t.labels.owner}:
            </label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder={
                lang === "en" ? "Enter Owner Name" : "मालकाचे नाव प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
              }}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "600",
                marginBottom: "4px",
                fontSize: "12px",
                color: "#374151",
                display: "block",
              }}
            >
              {t.labels.mobile}:
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder={
                lang === "en" ? "Enter Mobile" : "मोबाइल प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
              }}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "600",
                marginBottom: "4px",
                fontSize: "12px",
                color: "#374151",
                display: "block",
              }}
            >
              {t.labels.date}:
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}