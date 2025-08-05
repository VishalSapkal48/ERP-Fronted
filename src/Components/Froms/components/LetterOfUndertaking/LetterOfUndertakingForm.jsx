import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";
import image from "../../../../../public/Images/CivilWorkWorkingStep/image.png";
import image2 from "../../../../../public/Images/CivilWorkWorkingStep/image2.png";
import image4 from "../../../../../public/Images/CivilWorkWorkingStep/image4.png";
import image5 from "../../../../../public/Images/CivilWorkWorkingStep/image5.png";
import image6 from "../../../../../public/Images/CivilWorkWorkingStep/image6.png";
import image7 from "../../../../../public/Images/CivilWorkWorkingStep/image7.png";
import image8 from "../../../../../public/Images/CivilWorkWorkingStep/image8.png";
import image9 from "../../../../../public/Images/CivilWorkWorkingStep/image9.png";
import image10 from "../../../../../public/Images/CivilWorkWorkingStep/image10.png";
import image11 from "../../../../../public/Images/CivilWorkWorkingStep/image11.png";
import image12 from "../../../../../public/Images/CivilWorkWorkingStep/image12.png";
import image13 from "../../../../../public/Images/CivilWorkWorkingStep/image13.png";

const LetterOfUndertakingForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "",
    ownerName: "",
    branch: "",
    partners: "",
    firm: "",
    governmentAct: "",
    signature: "",
    mobileNumber: "",
    undertakingPartners: "",
    undertakingFirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const productDetails = [
    {
      no: 1,
      name: "Wall Tiles Work",
      description:
        "Height: 9 feet, Tile Type: Wall tiles, Finish: Glossy, Material: Ceramic, Size: Available in 18x12 and 12x24 Inch",
      qty: 1,
      photos: [image],
    },
    {
      no: 2,
      name: "Nano Ivory Flooring Tiles",
      description:
        "Ivory Tiles: Nano – 2x2 ft, Color: White/Gray, Size: 600x600 mm, Tile Design: Plain, No. of Tiles Per Box: 5, Tile Thickness: 4 mm, Material: Ceramic",
      qty: 1,
      photos: [image2],
    },
    {
      no: 3,
      name: "POP Sheet",
      description:
        "PVC Color: White, Width: 10 Inch, Length: 120 Inch, Material: PVC, Thickness: 10 mm, Usage: Ceiling",
      qty: 1,
      photos: [image4],
    },
    {
      no: 4,
      name: "POP False Ceiling Channel",
      description:
        "Dimensions: As per customer requirement, Material: POP Ceiling, Brand: USG Boral, Shape: Rectangular, Technique: Other, Thickness: As per customer requirement, Usage/Application: Residential & Commercial, Minimum Order Quantity: 10x10 Square Feet",
      qty: 1,
      photos: [image5],
    },
    {
      no: 5,
      name: "Shop Ceiling",
      description:
        "Color: Full White, Capacity: 5 L, Unit of Measurement: Litre, Model No: 0001, Is Consumable: Yes, Selling Unit: Can, Series: Gr-0, Magnitude of UOM: 4, Type of Product: Apcolite Premium Gloss Enamel, Color: White",
      qty: 1,
      photos: [image6],
    },
    {
      no: 6,
      name: "Shop Shutter Logo",
      description:
        "Color: White Matte, Paint Material: Asian Oil Paint, Logo Size: 3x3 ft Round",
      qty: 1,
      photos: [image7],
    },
    {
      no: 7,
      name: "Black Polyester Folding Shade Awning",
      description:
        "Material: Polyester, Brand: Dezire, Shape: Tunnel, Color: Red and White mix, Frame Material: Mild Steel, Coated Type: PVC Coated, Position: Exterior, Shed Material: Fabric, Frame Finish: Paint Finish, Minimum Order Quantity: 10 Square Feet",
      qty: 1,
      photos: [image8],
    },
    {
      no: 8,
      name: "Prince CPVC Flow Guard Plus Pipes & Fittings",
      description:
        "Brand: Prince, Fitting Type: All Kind of Fittings & Adhesives, Usage/Application: Hot & Cold Water, Material: CPVC compound (meets cell class DP 110-2-3-2 as per IS 15778), Color: Cream, Country of Origin: Made in India",
      qty: 1,
      photos: [image9],
    },
    {
      no: 9,
      name: "Preethi Xpro Duo MG-198",
      description:
        "Brand: Preethi, Colour: Deep Blue, Product Dimensions: 33.5D x 45.7W x 30.8H cm, Blade Material: Alloy Steel, Plastic, Special Feature: Leak Proof, Capacity: 2 litres, Controls Type: Knob Control, Item Weight: 6200 grams, Model Name: Xpro Duo MG 198, Is Dishwasher Safe: Yes",
      qty: 1,
      photos: [image10],
    },
    {
      no: 10,
      name: "Blue Star CF3-300MPW",
      description:
        "Product Dimensions: 67.8D x 114.7W x 85.7H cm, Brand: Blue Star, Model Name: CF3-300MPW, Colour: White, Door Material Type: Stainless Steel",
      qty: 1,
      photos: [image11],
    },
    {
      no: 11,
      name: "Kitchen Exhaust Ducting",
      description:
        "Equipment Type: Commercial Kitchen Chimney, Usage/Application: Hotel, Brand: Aarav, Size: Customized, Material: Stainless Steel, Color: Stainless Steel, Country of Origin: Made in India, Minimum Order Quantity: 10 Feet, Hood Size: 5/6 ft, Exhaust Fan Size: 18 inch",
      qty: 1,
      photos: [image12],
    },
    {
      no: 12,
      name: "TV Pipe",
      description: "Material: SS pipe/MS pipe, Fixing: 80 inch from ground",
      qty: 1,
      photos: [image13],
    },
  ];

  const translations = {
    en: {
      title: "YNK",
      formTitle: "Letter of Undertaking CIVIL WORK",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      dateLabel: "Date",
      ownerLabel: "Mr/Mrs Branch Owner Shri",
      branchLabel: "Branch",
      signatureLabel: "Signature",
      mobileNumberLabel: "Mobile Number",
      partnersLabel: "Name of Partners",
      firmLabel: "Name of Firm",
      governmentActLabel: "Government Act",
      undertakingPartnersLabel: "Undertaking Partners",
      undertakingFirmLabel: "Undertaking Firm",
      undertaking:
        `We,  Partners of [Name of Firm], hereby give this undertaking to YNK Enterprises for the completion of the Steel Equipment work. We confirm that we will complete all the work as per the product details given above.\n\n` +
        "We understand that if we fail to fulfill this undertaking, YNK Enterprises may take the following action against us:\n" +
        "1. To rectify any defect in the work at our own cost.\n" +
        "2. To take responsibility for the financial loss (late receipt of NOC) if the defect is not rectified at the earliest.\n" +
        "3. To take responsibility for paying the penalty amount of Rs. 50000/- for the defect.\n\n" +
        "This undertaking may be terminated in the following circumstances:\n" +
        "1. Completion of the work as per the agreed measurements.\n" +
        "2. Cancellation of the franchise.\n\n" +
        `This undertaking is governed by the laws of [Government Act].\n\n` +
        `The undersigned,  Partners of [Name of Firm], agrees to abide by the terms and conditions of this undertaking.\n\n` +
        "Sincerely,\n" +
        "Undertaking By\n" +
        "Sales manager Of YNK Enterprises",
      sections: [
        {
          title: "Product Details",
          table: productDetails.map((item) => ({
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
      formTitle: "प्रतिज्ञा पत्र CIVIL WORK",
      switchLang: "English",
      switchAria: "Switch to English",
      dateLabel: "तारीख",
      ownerLabel: "शाखा मालक श्री/श्रीमती",
      branchLabel: "शाखा",
      signatureLabel: "स्वाक्षरी",
      mobileNumberLabel: "मोबाइल नंबर",
      partnersLabel: "पार्टनर्सचे नाव",
      firmLabel: "फर्मचे नाव",
      governmentActLabel: "सरकार कायदा",
      undertakingPartnersLabel: "प्रतिज्ञा पत्र पार्टनर्स",
      undertakingFirmLabel: "प्रतिज्ञा पत्र फर्म",
      undertaking:
        `आम्ही, [पार्टनर्सचे नाव] [फर्मचे नाव] चे पार्टनर्स, येथे YNK Enterprises साठी स्टील इक्विपमेंट वर्क पूर्ण करण्यासाठी हे प्रतिज्ञा पत्र देतो. आम्ही पुष्टी करतो की आम्ही वरील दिलेल्या उत्पादन तपशीलानुसार सर्व काम पूर्ण करू.\n\n` +
        "आम्हाला समजले आहे की जर आम्ही हे प्रतिज्ञा पत्र पूर्ण करू शकलो नाही तर YNK Enterprises आमच्याविरुद्ध खालील कारवाई करू शकते:\n" +
        "1. कामातील कोणत्याही दोषाची आमच्या खर्चाने दुरुस्ती.\n" +
        "2. जर दोष लवकरात लवकर दुरुस्त न केला तर आर्थिक नुकसानाची (NOC ची उशीर मिळणे) जबाबदारी.\n" +
        "3. दोषासाठी 50000/- रुपये दंडाची जबाबदारी.\n\n" +
        "हे प्रतिज्ञा पत्र खालील परिस्थितीत संपवले जाऊ शकते:\n" +
        "1. सहमत मोजमापानुसार काम पूर्ण झाल्यावर.\n" +
        "2. फ्रँचाइजी रद्द झाल्यावर.\n\n" +
        `हे प्रतिज्ञा पत्र [सरकार कायदा] च्या कायद्याने नियंत्रित केले जाते.\n\n` +
        `सहीकार, [पार्टनर्सचे नाव] [फर्मचे नाव] चे पार्टनर्स, या प्रतिज्ञा पत्राच्या अटी व शर्तींचे पालन करतो.\n\n` +
        "प्रामाणिकपणे,\n" +
        "प्रतिज्ञा पत्र देणारे\n" +
        "YNK Enterprises चे विक्री व्यवस्थापक",
      sections: [
        {
          title: "उत्पादन तपशील",
          table: productDetails.map((item) => ({
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
                {t.partnersLabel}
              </label>
              <input
                type="text"
                name="partners"
                value={formData.partners}
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
                name="firm"
                value={formData.firm}
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
                {t.governmentActLabel}
              </label>
              <input
                type="text"
                name="governmentAct"
                value={formData.governmentAct}
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
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "12px",
                  marginBottom: "20px",
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  backgroundColor: "#f8fafc",
                  padding: "10px",
                  borderRadius: "4px",
                  textAlign: "left",
                }}
              >
                {t.undertaking}
              </p>
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
                  {t.signatureLabel}:
                </label>
                <input
                  type="text"
                  name="signature"
                  value={formData.signature}
                  onChange={handleChange}
                  placeholder={
                    language === "en"
                      ? "Enter Signature"
                      : "स्वाक्षरी प्रविष्ट करा"
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
                  {t.mobileNumberLabel}:
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder={
                    language === "en"
                      ? "Enter Mobile Number"
                      : "मोबाइल नंबर प्रविष्ट करा"
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
                  {t.undertakingPartnersLabel}:
                </label>
                <input
                  type="text"
                  name="undertakingPartners"
                  value={formData.undertakingPartners}
                  onChange={handleChange}
                  placeholder={
                    language === "en"
                      ? "Enter Name of Partners"
                      : "पार्टनर्सचे नाव प्रविष्ट करा"
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
                  {t.undertakingFirmLabel}:
                </label>
                <input
                  type="text"
                  name="undertakingFirm"
                  value={formData.undertakingFirm}
                  onChange={handleChange}
                  placeholder={
                    language === "en"
                      ? "Enter Name of Firm"
                      : "फर्मचे नाव प्रविष्ट करा"
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
        ))}
      </div>
    </div>
  );
};

export default LetterOfUndertakingForm;
