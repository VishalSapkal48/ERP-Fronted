import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png"; // Adjusted to match the logo location from previous examples
import img1 from "../../../../../public/Images/SteelsEquipments/picture1.png"; // Adjusted path
import img2 from "../../../../../public/Images/SteelsEquipments/Picture2.png"; // Adjusted path
import img3 from "../../../../../public/Images/SteelsEquipments/Picture3.png"; // Adjusted path
import img4 from "../../../../../public/Images/SteelsEquipments/Picture4.png"; // Adjusted path
import img5 from "../../../../../public/Images/SteelsEquipments/Picture5.png"; // Adjusted path
import img6 from "../../../../../public/Images/SteelsEquipments/Picture6.png"; // Adjusted path
import img7 from "../../../../../public/Images/SteelsEquipments/Picture7.png"; // Adjusted path
import img8 from "../../../../../public/Images/SteelsEquipments/Picture8.png"; // Adjusted path
import img9 from "../../../../../public/Images/SteelsEquipments/Picture9.png"; // Adjusted path

const SteelEquipmentForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "",
    ownerName: "",
    branch: "",
    signMobile: "",
    footerOwner: "",
    footerSign: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const steelEquipmentItems = [
    {
      no: 1,
      name: "2 Burner Bhatti",
      description:
        "Size: 44 x 24 x 32+6, 14 Inch Casting Burner, Type: G5, Back Flange: 6",
      qty: 1,
      photos: [img1],
    },
    {
      no: 2,
      name: "Service Counter",
      description:
        "Size: 30 x 24 x 32, 2 Drawer, 2 Sliding Door, 3 Inch Sponge Holding, Front Side: Balaji Design, Material: SS (Gauge 16/18)",
      qty: 1,
      photos: [img2],
    },
    {
      no: 3,
      name: "Cash Counter",
      description:
        "Size: 24x24x48, 2 Drawer, 1 Underself, 1 Sliding Door, Front Side: Balaji Design, Material: SS (Gauge 16/18)",
      qty: 1,
      photos: [img3],
    },
    {
      no: 4,
      name: "1 Unit Sink",
      description:
        "Size: 30x30x32+18+12, Bowl: 24x24, Coupling: 1.5 inch, Flange Back: 6 Inch, Overself: 18 inch+12 Inch+12 Inch",
      qty: 1,
      photos: [img4],
    },
    {
      no: 5,
      name: "Display Counter",
      description:
        "Size: 24x24x48, 3 Side Height: 16 Inch from Bottom SS Material, Above That 3 Side+Top Glass: 10 mm Toughen Glass, Display Type: Non-Cooling, Overself: 12+6+6, 2 Slide Door, Light: Tubelight Underself Full White, Front Side: Balaji Design with 2 Inch White Flimming",
      qty: 1,
      photos: [img5],
    },
    {
      no: 6,
      name: "Cup Table",
      description: "Size: 36x30x32+2, Material Type: Gauge 18",
      qty: 1,
      photos: [img6],
    },
    {
      no: 7,
      name: "Milk Machine",
      description: "Size: 40 ltr, Bottom: 2.5 ft, Top: 4 ft",
      qty: 1,
      photos: [img7],
    },
    {
      no: 8,
      name: "Work Table",
      description: "Size: 36x24x32+18+12, 2 Underself, 2 Overself",
      qty: 1,
      photos: [img8],
    },
    {
      no: 9,
      name: "Cup Tray",
      description: "Size: 11x12x1, Material: Gauge 18",
      qty: 1,
      photos: [img9],
    },
  ];

  const translations = {
    en: {
      title: "YNK",
      formTitle: "Steel Equipment Form",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      dateLabel: "Date",
      ownerLabel: "Mr/Mrs Branch Owner Shri",
      branchLabel: "Branch",
      signLabel: "SIGN & MO",
      footerOwner: "OWNER NAME",
      footerSign: "SIGN & MO",
      declaration:
        "I am going to do all the work of my site personally. Visited my branch and explained the site plan to me and my vendors. I have understood the plan properly. However, all the materials required for my site work have been asked by YNK Company to use the following qualities and brands. Similarly, I am going to complete all the work of my branch using all the materials. Apart from the following material, I will not use the material of any other company.",
      sections: [
        {
          title: "Steel Equipment Items",
          table: steelEquipmentItems.map((item) => ({
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
      formTitle: "स्टील उपकरणे फॉर्म",
      switchLang: "English",
      switchAria: "Switch to English",
      dateLabel: "तारीख",
      ownerLabel: "शाखा मालक श्री/श्रीमती",
      branchLabel: "शाखा",
      signLabel: "स्वाक्षरी व मोबाईल",
      footerOwner: "मालकाचे नाव",
      footerSign: "स्वाक्षरी व मोबाइल",
      declaration:
        "मी माझ्या साइटचे सर्व काम स्वतः करणार आहे. मी माझ्या शाखेला भेट दिली आणि मला व माझ्या विक्रेत्यांना साइट प्लान समजावून सांगितला. मी योजना नीट समजून घेतली आहे. तथापि, माझ्या साइटच्या कामासाठी लागणारी सर्व सामग्री YNK कंपनीने खाली दिलेल्या दर्जाची व ब्रँडची वापरण्याची विनंती केली आहे. त्यानुसार, मी माझ्या शाखेचं काम संपूर्णपणे ह्या सामग्रीने पूर्ण करणार आहे. खालील सूचीव्यतिरिक्त इतर कोणत्याही कंपनीची सामग्री वापरणार नाही.",
      sections: [
        {
          title: "स्टील उपकरणे वस्तू",
          table: steelEquipmentItems.map((item) => ({
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
            {t.declaration}
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
                {t.ownerLabel}
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
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
                {t.branchLabel}
              </label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
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
            {section.note && (
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "#6b7280",
                  marginBottom: "10px",
                  backgroundColor: "#f1f5f9",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                {section.note}
              </p>
            )}
            {section.items && (
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  marginBottom: "10px",
                }}
              >
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "12px",
                      color: "#374151",
                      padding: "6px 0",
                      lineHeight: "1.5",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
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
                                no: " क्रमांक",
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
              {t.footerOwner}:
            </label>
            <input
              type="text"
              name="footerOwner"
              value={formData.footerOwner}
              onChange={handleChange}
              placeholder={
                language === "en"
                  ? "Enter Owner Name"
                  : "मालकाचे नाव प्रविष्ट करा"
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
        </div>
      </div>
    </div>
  );
};

export default SteelEquipmentForm;
