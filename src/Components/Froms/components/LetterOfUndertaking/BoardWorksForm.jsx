import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";
import picture1 from "../../../../../public/Images/BoardWorksListForm/Picture1.png";
import picture3 from "../../../../../public/Images/BoardWorksListForm/Picture3.png";
import picture5 from "../../../../../public/Images/BoardWorksListForm/Picture5.png";
import picture7 from "../../../../../public/Images/BoardWorksListForm/Picture7.png";
import picture10 from "../../../../../public/Images/BoardWorksListForm/Picture10.png";

// --- English Data for the form items ---
const boardWorksItemsEN = [
  {
    id: 1,
    name: "Main Board ACP Sheet",
    description:
      "Material: ACP Sheets, Thickness: 3mm, Height: 4ft, Length: 10ft, Color: White, Code: TMX-142",
    qty: 1,
    photos: [picture1],
  },
  {
    id: 2,
    name: "Shop Partition",
    description:
      "Height: As per shop, Length: As per shop, Color: White, Code: TMX-142",
    qty: 1,
    photos: [],
  },
  {
    id: 3,
    name: "Story Board",
    description:
      "Dimensions: 4ft (L) x 3ft (H), Thickness: 3mm, Material: Foam Sheet, Language: Local, Wall Side: Right side (as per shop)",
    qty: 1,
    photos: [picture3],
  },
  {
    id: 4,
    name: "Sink Partition",
    description:
      "Height: 5ft, Length: 3ft, Material: Aluminum Composite Panel (ACP), Benefits: Covers the sink area, improves aesthetics, useful for extra branding.",
    qty: 1,
    photos: [],
  },
  {
    id: 5,
    name: "Menu Frames",
    description:
      "Includes: a) 1 Regular Model, b) 4 Mini Models. Dimensions: 27in (L) x 17in (H) x 4in (D). Material: Acrylic, LED Lights: Samsung/Philips (White), Sticker Material: AV",
    qty: 1,
    photos: [picture5],
  },
  {
    id: 7,
    name: "Fabrication Work Partition (MS Pipe)",
    description:
      "Dimensions: 10ft (L) x 10ft (H) x 3in (W), Material: Mild Steel (MS), Pipe Size: 1.5 inch",
    qty: 1,
    photos: [],
  },
  {
    id: 8,
    name: "Fabrication Work Name Board (MS Pipe)",
    description:
      "Dimensions: 10ft (L) x 4ft (H) x 3ft (W), Material: Mild Steel (MS), Pipe Size: 1.5 inch",
    qty: 1,
    photos: [picture7],
  },
  {
    id: 9,
    name: "Board 3D Letter Work",
    description:
      "Dimensions: 10ft (L) x 4ft (H), Material: 3mm Acrylic, Logo Material: 3mm Acrylic, Logo Print: AV Print, LED: Samsung/Philips (Warm Light)",
    qty: 1,
    photos: [],
  },
  {
    id: 10,
    name: "Lollipop Sign (External)",
    description:
      "Size: 2.5ft x 2.5ft, Height: 9ft from floor, Material: 3mm Acrylic, LED: Samsung (Full White)",
    qty: 1,
    photos: [],
  },
  {
    id: 11,
    name: "LED Scrolling Board",
    description: "Dimensions: 5ft (L) x 1ft (H) x 4in (W)",
    qty: 1,
    photos: [picture10],
  },
];

// --- Translations for English and Marathi ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Letter of Undertaking - Board Works",
    switchLang: "मराठी",
    switchAria: "Switch to Marathi",
    dateLabel: "Date",
    partnerLabel: "Partner's Name",
    firmLabel: "Firm Name",
    footerPartner: "PARTNER'S NAME",
    footerSign: "SIGNATURE & MOBILE NO.",
    partnerPlaceholder: "Enter Partner's Name",
    firmPlaceholder: "Enter Firm Name",
    signPlaceholder: "Enter Signature or Mobile",
    declaration: {
      part1: "We, ",
      part2: " of ",
      part3:
        ", hereby provide this undertaking to YNK Enterprises for the completion of all board works. We confirm that we will complete all tasks as per the product specifications detailed below. We understand that failure to comply with this undertaking may result in YNK Enterprises taking the following actions against us:\n1. Rectification of any defects at our own cost.\n2. Assumption of full responsibility for any financial loss incurred due to delays (e.g., late NOC receipt) if defects are not promptly rectified.\n3. Liability for a penalty of Rs. 50,000/- for any unresolved defects.",
    },
    tableHeaders: {
      no: "No.",
      name: "Item Name",
      description: "Description & Specification",
      qty: "Qty",
      photos: "Photos",
    },
    boardWorksItems: boardWorksItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "वचनपत्र - बोर्ड वर्क्स",
    switchLang: "English",
    switchAria: "Switch to English",
    dateLabel: "तारीख",
    partnerLabel: "भागीदाराचे नाव",
    firmLabel: "फर्मचे नाव",
    footerPartner: "भागीदाराचे नाव",
    footerSign: "स्वाक्षरी आणि मोबाइल नं.",
    partnerPlaceholder: "भागीदाराचे नाव प्रविष्ट करा",
    firmPlaceholder: "फर्मचे नाव प्रविष्ट करा",
    signPlaceholder: "स्वाक्षरी किंवा मोबाइल प्रविष्ट करा",
    declaration: {
      part1: "आम्ही, ",
      part2: " चे ",
      part3:
        ", याद्वारे YNK एंटरप्रायझेसला सर्व बोर्ड कामांच्या पूर्ततेसाठी हे वचनपत्र देत आहोत. आम्ही पुष्टी करतो की आम्ही खाली दिलेल्या उत्पादन तपशीलानुसार सर्व कामे पूर्ण करू. आम्ही समजतो की या वचनपत्राचे पालन करण्यात अयशस्वी झाल्यास, YNK एंटरप्रायझेस आमच्यावर खालील कारवाई करू शकते:\n१. आमच्या स्वतःच्या खर्चाने कोणत्याही त्रुटी सुधारणे.\n२. त्रुटी त्वरित न सुधारल्यास होणाऱ्या कोणत्याही आर्थिक नुकसानीची (उदा. एनओसी मिळण्यास उशीर) संपूर्ण जबाबदारी घेणे.\n३. कोणत्याही न सुटलेल्या त्रुटींसाठी रु. ५०,०००/- दंडाची जबाबदारी घेणे.",
    },
    tableHeaders: {
      no: "क्र.",
      name: "वस्तूचे नाव",
      description: "वर्णन आणि तपशील",
      qty: "नग",
      photos: "फोटो",
    },
    boardWorksItems: [
      {
        id: 1,
        name: "मुख्य बोर्ड ACP शीट",
        description:
          "साहित्य: ACP शीट्स, जाडी: 3mm, उंची: 4ft, लांबी: 10ft, रंग: पांढरा, कोड: TMX-142",
        qty: 1,
        photos: [picture1],
      },
      {
        id: 2,
        name: "दुकानाचे पार्टिशन",
        description:
          "उंची: दुकानानुसार, लांबी: दुकानानुसार, रंग: पांढरा, कोड: TMX-142",
        qty: 1,
        photos: [],
      },
      {
        id: 3,
        name: "स्टोरी बोर्ड",
        description:
          "मापे: 4ft (लांबी) x 3ft (उंची), जाडी: 3mm, साहित्य: फोम शीट, भाषा: स्थानिक, भिंतीची बाजू: उजवी बाजू (दुकानानुसार)",
        qty: 1,
        photos: [picture3],
      },
      {
        id: 4,
        name: "सिंक पार्टिशन",
        description:
          "उंची: 5ft, लांबी: 3ft, साहित्य: ॲल्युमिनियम कंपोझिट पॅनल (ACP), फायदे: सिंकचा भाग झाकते, सौंदर्य वाढवते, अतिरिक्त ब्रँडिंगसाठी उपयुक्त.",
        qty: 1,
        photos: [],
      },
      {
        id: 5,
        name: "मेनू फ्रेम्स",
        description:
          "समाविष्ट: अ) 1 रेग्युलर मॉडेल, ब) 4 मिनी मॉडेल. मापे: 27in (लांबी) x 17in (उंची) x 4in (जाडी). साहित्य: ॲक्रेलिक, LED लाइट्स: सॅमसंग/फिलिप्स (पांढरा), स्टिकर साहित्य: AV",
        qty: 1,
        photos: [picture5],
      },
      {
        id: 7,
        name: "फॅब्रिकेशन वर्क पार्टिशन (MS पाईप)",
        description:
          "मापे: 10ft (लांबी) x 10ft (उंची) x 3in (रुंदी), साहित्य: माइल्ड स्टील (MS), पाईप साइज: 1.5 इंच",
        qty: 1,
        photos: [],
      },
      {
        id: 8,
        name: "फॅब्रिकेशन वर्क नेम बोर्ड (MS पाईप)",
        description:
          "मापे: 10ft (लांबी) x 4ft (उंची) x 3ft (रुंदी), साहित्य: माइल्ड स्टील (MS), पाईप साइज: 1.5 इंच",
        qty: 1,
        photos: [picture7],
      },
      {
        id: 9,
        name: "बोर्ड 3D लेटर वर्क",
        description:
          "मापे: 10ft (लांबी) x 4ft (उंची), साहित्य: 3mm ॲक्रेलिक, लोगो साहित्य: 3mm ॲक्रेलिक, लोगो प्रिंट: AV प्रिंट, LED: सॅमसंग/फिलिप्स (वॉर्म लाइट)",
        qty: 1,
        photos: [],
      },
      {
        id: 10,
        name: "लॉलीपॉप साइन (बाह्य)",
        description:
          "आकार: 2.5ft x 2.5ft, उंची: जमिनीपासून 9ft, साहित्य: 3mm ॲक्रेलिक, LED: सॅमसंग (पूर्ण पांढरा)",
        qty: 1,
        photos: [],
      },
      {
        id: 11,
        name: "LED स्क्रोलिंग बोर्ड",
        description: "मापे: 5ft (लांबी) x 1ft (उंची) x 4in (रुंदी)",
        qty: 1,
        photos: [picture10],
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
  inputFieldsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "12px",
    color: "#374151",
    marginBottom: "4px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    padding: "8px",
    fontSize: "12px",
    backgroundColor: "#fff",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  },
  sectionContainer: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
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
  },
  td: {
    border: "1px solid #e5e7eb",
    padding: "10px",
    color: "#374151",
    verticalAlign: "middle",
    fontWeight: "bold",
  },
  photo: {
    width: "50px",
    height: "50px",
    marginRight: "5px",
    borderRadius: "4px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  footerInputContainer: {
    marginBottom: "12px",
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
    transition: "border-color 0.2s",
  },
};

const BoardWorksForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "",
    partnerName: "",
    firmName: "",
    footerPartner: "",
    footerSign: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const t = translations[language];
  const tableHeaders = t.tableHeaders;
  const itemsToDisplay = t.boardWorksItems;

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

        <div>
          <div style={styles.inputFieldsContainer}>
            <div>
              <label style={styles.label}>{t.dateLabel}</label>
              <input
                type="date"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
          <p style={styles.declaration}>
            {t.declaration.part1}
            <input
              type="text"
              name="partnerName"
              value={formData.partnerName}
              onChange={handleChange}
              placeholder={t.partnerPlaceholder}
              style={styles.declarationInput}
            />
            {t.declaration.part2}
            <input
              type="text"
              name="firmName"
              value={formData.firmName}
              onChange={handleChange}
              placeholder={t.firmPlaceholder}
              style={styles.declarationInput}
            />
            {t.declaration.part3}
          </p>
        </div>

        <section style={styles.sectionContainer}>
          <h3 style={styles.sectionTitle}>
            {language === "en" ? "Board Works Items" : "बोर्ड वर्क्स वस्तू"}
          </h3>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>{tableHeaders.no}</th>
                  <th style={styles.th}>{tableHeaders.name}</th>
                  <th style={styles.th}>{tableHeaders.description}</th>
                  <th style={styles.th}>{tableHeaders.qty}</th>
                  <th style={styles.th}>{tableHeaders.photos}</th>
                </tr>
              </thead>
              <tbody>
                {itemsToDisplay.map((row, idx) => (
                  <tr
                    key={row.id}
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                    }}
                  >
                    <td style={styles.td}>{row.id}</td>
                    <td style={styles.td}>{row.name}</td>
                    <td style={styles.td}>{row.description}</td>
                    <td style={styles.td}>{row.qty}</td>
                    <td style={styles.td}>
                      {row.photos.length > 0
                        ? row.photos.map((photo, pIdx) => (
                            <img
                              key={pIdx}
                              src={photo}
                              alt={`${row.name} sample ${pIdx + 1}`}
                              style={styles.photo}
                            />
                          ))
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerInputContainer}>
            <label style={styles.footerLabel}>{t.footerSign}:</label>
            <input
              type="text"
              name="footerSign"
              value={formData.footerSign}
              onChange={handleChange}
              placeholder={t.signPlaceholder}
              style={styles.footerInput}
            />
          </div>
          <div style={styles.footerInputContainer}>
            <label style={styles.footerLabel}>{t.footerPartner}:</label>
            <input
              type="text"
              name="footerPartner"
              value={formData.footerPartner}
              onChange={handleChange}
              placeholder={t.partnerPlaceholder}
              style={styles.footerInput}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BoardWorksForm;