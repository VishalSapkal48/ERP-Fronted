import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png"; // Adjusted to match the logo location from previous examples
import img1 from "../../../../../public/Images/ElectricalWorks/Picture1.png";
import img2 from "../../../../../public/Images/ElectricalWorks/Picture2.png";
import img3 from "../../../../../public/Images/ElectricalWorks/Picture3.png";
import img4 from "../../../../../public/Images/ElectricalWorks/Picture4.png";
import img5 from "../../../../../public/Images/ElectricalWorks/Picture5.png";
import img6 from "../../../../../public/Images/ElectricalWorks/Picture6.png";
import img7 from "../../../../../public/Images/ElectricalWorks/Picture7.png";
import img8 from "../../../../../public/Images/ElectricalWorks/Picture8.png";
import img9 from "../../../../../public/Images/ElectricalWorks/Picture9.png";
import img10 from "../../../../../public/Images/ElectricalWorks/Picture10.png";
import img11 from "../../../../../public/Images/ElectricalWorks/Picture11.png";

const ElectricalWorksForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "",
    partnerName: "",
    firmName: "",
    signMobile: "",
    footerPartner: "",
    footerSign: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const electricalItems = [
    {
      no: 1,
      name: "Conduits Pipe",
      description: "Polly Cab Brand, Black Color, Size 1 Inch",
      qty: 1,
      photos: [img1],
    },
    {
      no: 2,
      name: "Wire",
      description:
        "Polly Cab Brand, Size 1.5mm for Light Point, Size 2.5mm for Power Point",
      qty: 1,
      photos: [img2, img3],
    },
    {
      no: 3,
      name: "MCB",
      description: "Legrand Brand, 32Amp",
      qty: 1,
      photos: [img4],
    },
    {
      no: 4,
      name: "Buttons & Fittings",
      description: "Legrand Brand, White Color",
      qty: 1,
      photos: [img5],
    },
    {
      no: 5,
      name: "Ceiling Fan",
      description: "Crompton Brand",
      qty: 1,
      photos: [img6],
    },
    {
      no: 6,
      name: "Wall Fan 16”",
      description: "Crompton Brand, White Color",
      qty: 1,
      photos: [img7],
    },
    {
      no: 7,
      name: "CCTV Cable",
      description: "Polly Cab Brand, White Color, 4+1 Wire Code",
      qty: 1,
      photos: [img8],
    },
    {
      no: 8,
      name: "6” Square Light",
      description:
        "Kitchen Area & All Shop, Local Brand, Full White Color, 15watt",
      qty: 2,
      photos: [img10],
    },
    {
      no: 9,
      name: "8” Square Light",
      description: "Board Ceiling, Local Brand, Full White Color, 22watt",
      qty: 1,
      photos: [img11],
    },
  ];

  const translations = {
    en: {
      title: "YNK",
      formTitle: "Letter of Undertaking - Electrical Works",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      dateLabel: "Date",
      partnerLabel: "Partners Name",
      firmLabel: "Firm Name",
      signLabel: "SIGN & MO",
      footerPartner: "PARTNERS NAME",
      footerSign: "SIGN & MO",
      salesManager: "Sales Manager of YNK Enterprises",
      declaration:
        "We, [Partners Name] Partners of [Firm Name], hereby give this undertaking to YNK Enterprises for the completion of the Electrical Works. We confirm that we will complete all the work as per the product details given above. We understand that if we fail to fulfill this undertaking, YNK Enterprises may take the following action against us:\n1. To rectify any defect in the work at our own cost.\n2. To take responsibility for the financial loss (late receipt of NOC) if the defect is not rectified at the earliest.\n3. To take responsibility for paying the penalty amount of Rs. 50,000/- for the defect.\nThis undertaking may be terminated in the following circumstances:\n1. Completion of the work as per the agreed measurements.\n2. Cancellation of the franchise.\nThis undertaking is governed by the laws of [Government Act].",
      sections: [
        {
          title: "Electrical Works Items",
          table: electricalItems.map((item) => ({
            no: item.no,
            name: item.name,
            description: item.description,
            qty: item.qty,
            photos: item.photos,
          })),
        },
      ],
    },
    mr: {
      title: "वायएनके",
      formTitle: "वचनपत्र - विद्युत कामे",
      switchLang: "English",
      switchAria: "Switch to English",
      dateLabel: "तारीख",
      partnerLabel: "भागीदारांचे नाव",
      firmLabel: "फर्मचे नाव",
      signLabel: "स्वाक्षरी व मोबाईल",
      footerPartner: "भागीदारांचे नाव",
      footerSign: "स्वाक्षरी व मोबाइल",
      salesManager: "वायएनके एंटरप्रायझेसचे विक्री व्यवस्थापक",
      declaration:
        "आम्ही, [भागीदारांचे नाव] [फर्मचे नाव] चे भागीदार, येथे वायएनके एंटरप्रायझेसला विद्युत कामांच्या पूर्णतेसाठी हे वचनपत्र देत आहोत. आम्ही वर नमूद केलेल्या उत्पादन तपशीलानुसार सर्व काम पूर्ण करू, असे आम्ही पुष्टी करतो. आम्ही हे समजतो की जर आम्ही हे वचनपत्र पूर्ण करण्यात अयशस्वी झालो, तर वायएनके एंटरप्रायझेस आमच्याविरुद्ध खालील कारवाई करू शकते:\n1. कामातील कोणताही दोष आमच्या स्वतःच्या खर्चाने दुरुस्त करणे.\n2. दोष लवकरात लवकर दुरुस्त न केल्यास आर्थिक नुकसान (एनओसीचा उशीरा प्राप्ती) याची जबाबदारी घेणे.\n3. दोषासाठी 50,000/- रुपये दंडाची रक्कम भरण्याची जबाबदारी घेणे.\nहे वचनपत्र खालील परिस्थितीत समाप्त होऊ शकते:\n1. सहमतीनुसार मोजमापानुसार काम पूर्ण करणे.\n2. फ्रँचायझी रद्द करणे.\nहे वचनपत्र [सरकारी कायदा] च्या कायद्यांद्वारे नियंत्रित आहे.",
      sections: [
        {
          title: "विद्युत कामांचे आयटम",
          table: electricalItems.map((item) => ({
            no: item.no,
            name: item.name,
            description: item.description,
            qty: item.qty,
            photos: item.photos,
          })),
        },
      ],
    },
  };

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
            color: "#1f2937",
          }}
        >
          {t.formTitle}
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              color: "#1f2937",
              fontSize: "12px",
              marginBottom: "12px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.5",
              backgroundColor: "#f8fafc",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            {t.declaration
              .replace(
                "[Partners Name]",
                formData.partnerName || "Partners Name"
              )
              .replace("[Firm Name]", formData.firmName || "Firm Name")
              .replace("[Government Act]", "Government Act")}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#374151",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                {t.dateLabel}
              </label>
              <input
                type="date"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#374151",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                {t.partnerLabel}
              </label>
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#374151",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                {t.firmLabel}
              </label>
              <input
                type="text"
                name="firmName"
                value={formData.firmName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
          </div>
        </div>
        {t.sections.map((section, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1e40af",
                marginBottom: "10px",
                borderBottom: "2px solid #e3f2fd",
                paddingBottom: "4px",
              }}
            >
              {section.title}
            </h3>
            {section.table && (
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "#f8fafc",
                    fontSize: "12px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <thead>
                    <tr>
                      {Object.keys(section.table[0]).map((key, i) => (
                        <th
                          key={i}
                          style={{
                            border: "1px solid #e5e7eb",
                            padding: "10px",
                            textAlign: "left",
                            backgroundColor: "#e2e8f0",
                            fontWeight: "600",
                            color: "#1f2937",
                          }}
                        >
                          {language === "en"
                            ? key.charAt(0).toUpperCase() + key.slice(1)
                            : {
                                no: "क्रमांक",
                                name: "नाव",
                                description: "वर्णन",
                                qty: "प्रमाण",
                                photos: "फोटो",
                              }[key] ||
                              key.charAt(0).toUpperCase() + key.slice(1)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          backgroundColor:
                            idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                        }}
                      >
                        {Object.values(row).map((value, i) => (
                          <td
                            key={i}
                            style={{
                              border: "1px solid #e5e7eb",
                              padding: "10px",
                              color: "#374151",
                            }}
                          >
                            {Array.isArray(value)
                              ? value.map((photo, pIdx) => (
                                  <img
                                    key={pIdx}
                                    src={photo}
                                    alt={`${row.name} Photo ${pIdx + 1}`}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      marginRight: "5px",
                                    }}
                                  />
                                ))
                              : value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
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
              {t.footerSign}:
            </label>
            <input
              type="text"
              name="footerSign"
              value={formData.footerSign}
              onChange={handleChange}
              placeholder={
                language === "en"
                  ? "Enter Signature or Mobile"
                  : "स्वाक्षरी किंवा मोबाइल प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "250px",
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
              {t.footerPartner}:
            </label>
            <input
              type="text"
              name="footerPartner"
              value={formData.footerPartner}
              onChange={handleChange}
              placeholder={
                language === "en"
                  ? "Enter Partners Name"
                  : "भागीदारांचे नाव प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "250px",
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
              {t.salesManager}:
            </label>
            <input
              type="text"
              name="salesManager"
              value="Dipak Gokul Gaykar"
              readOnly
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "250px",
                backgroundColor: "#f1f5f9",
                transition: "border-color 0.2s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalWorksForm;
