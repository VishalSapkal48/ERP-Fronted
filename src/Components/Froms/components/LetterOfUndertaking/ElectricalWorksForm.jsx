import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";
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

// --- English Data for the form items ---
const electricalItemsEN = [
  {
    id: 1,
    name: "Conduit Pipe",
    description: "Brand: Polycab, Color: Black, Size: 1 Inch",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "Wire",
    description:
      "Brand: Polycab, Size: 1.5mm for Light Points, 2.5mm for Power Points",
    qty: 1,
    photos: [img2, img3],
  },
  {
    id: 3,
    name: "MCB",
    description: "Brand: Legrand, Amperage: 32Amp",
    qty: 1,
    photos: [img4],
  },
  {
    id: 4,
    name: "Switches & Fittings",
    description: "Brand: Legrand, Color: White",
    qty: 1,
    photos: [img5],
  },
  {
    id: 5,
    name: "Ceiling Fan",
    description: "Brand: Crompton",
    qty: 1,
    photos: [img6],
  },
  {
    id: 6,
    name: 'Wall Fan 16"',
    description: "Brand: Crompton, Color: White",
    qty: 1,
    photos: [img7],
  },
  {
    id: 7,
    name: "CCTV Cable",
    description: "Brand: Polycab, Color: White, Wire Code: 4+1",
    qty: 1,
    photos: [img8],
  },
  {
    id: 8,
    name: '6" Square Light',
    description:
      "Usage: Kitchen Area & Main Shop, Brand: Local, Color: Full White, Wattage: 15W",
    qty: 2,
    photos: [img10],
  },
  {
    id: 9,
    name: '8" Square Light',
    description:
      "Usage: Board Ceiling, Brand: Local, Color: Full White, Wattage: 22W",
    qty: 1,
    photos: [img11],
  },
];

// --- Translations for English and Marathi ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Letter of Undertaking - Electrical Works",
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
    declaration:
      "We, __PARTNER_NAME__ of __FIRM_NAME__, hereby provide this undertaking to YNK Enterprises for the completion of all electrical works. We confirm that we will complete all tasks as per the product specifications detailed below. We understand that failure to comply with this undertaking may result in YNK Enterprises taking the following actions against us:\n1. Rectification of any defects at our own cost.\n2. Assumption of full responsibility for any financial loss incurred due to delays (e.g., late NOC receipt) if defects are not promptly rectified.\n3. Liability for a penalty of Rs. 50,000/- for any unresolved defects.",
    tableHeaders: {
      no: "No.",
      name: "Item Name",
      description: "Description & Specification",
      qty: "Qty",
      photos: "Photos",
    },
    electricalItems: electricalItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "वचनपत्र - विद्युत कामे",
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
    declaration:
      "आम्ही, __PARTNER_NAME__, __FIRM_NAME__ चे भागीदार, याद्वारे YNK एंटरप्रायझेसला सर्व विद्युत कामांच्या पूर्ततेसाठी हे वचनपत्र देत आहोत. आम्ही पुष्टी करतो की आम्ही खाली दिलेल्या उत्पादन तपशीलानुसार सर्व कामे पूर्ण करू. आम्ही समजतो की या वचनपत्राचे पालन करण्यात अयशस्वी झाल्यास, YNK एंटरप्रायझेस आमच्यावर खालील कारवाई करू शकते:\n१. आमच्या स्वतःच्या खर्चाने कोणत्याही त्रुटी सुधारणे.\n२. त्रुटी त्वरित न सुधारल्यास होणाऱ्या कोणत्याही आर्थिक नुकसानीची (उदा. एनओसी मिळण्यास उशीर) संपूर्ण जबाबदारी घेणे.\n३. कोणत्याही न सुटलेल्या त्रुटींसाठी रु. ५०,०००/- दंडाची जबाबदारी घेणे.",
    tableHeaders: {
      no: "क्र.",
      name: "वस्तूचे नाव",
      description: "वर्णन आणि तपशील",
      qty: "नग",
      photos: "फोटो",
    },
    electricalItems: [
      {
        id: 1,
        name: "कंड्युइट पाईप",
        description: "ब्रँड: पॉलीकॅब, रंग: काळा, आकार: १ इंच",
        qty: 1,
        photos: [img1],
      },
      {
        id: 2,
        name: "वायर",
        description:
          "ब्रँड: पॉलीकॅब, आकार: लाईट पॉईंटसाठी १.५ मिमी, पॉवर पॉईंटसाठी २.५ मिमी",
        qty: 1,
        photos: [img2, img3],
      },
      {
        id: 3,
        name: "एमसीबी",
        description: "ब्रँड: लेग्रँड, अँपिअर: ३२ अँप",
        qty: 1,
        photos: [img4],
      },
      {
        id: 4,
        name: "स्विचेस आणि फिटिंग्ज",
        description: "ब्रँड: लेग्रँड, रंग: पांढरा",
        qty: 1,
        photos: [img5],
      },
      {
        id: 5,
        name: "सीलिंग फॅन",
        description: "ब्रँड: क्रॉम्प्टन",
        qty: 1,
        photos: [img6],
      },
      {
        id: 6,
        name: 'वॉल फॅन १६"',
        description: "ब्रँड: क्रॉम्प्टन, रंग: पांढरा",
        qty: 1,
        photos: [img7],
      },
      {
        id: 7,
        name: "सीसीटीव्ही केबल",
        description: "ब्रँड: पॉलीकॅब, रंग: पांढरा, वायर कोड: ४+१",
        qty: 1,
        photos: [img8],
      },
      {
        id: 8,
        name: '६" स्क्वेअर लाईट',
        description:
          "वापर: किचन आणि मुख्य दुकान, ब्रँड: लोकल, रंग: पूर्ण पांढरा, वॅटेज: १५W",
        qty: 2,
        photos: [img10],
      },
      {
        id: 9,
        name: '८" स्क्वेअर लाईट',
        description:
          "वापर: बोर्ड सीलिंग, ब्रँड: लोकल, रंग: पूर्ण पांढरा, वॅटेज: २२W",
        qty: 1,
        photos: [img11],
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

const ElectricalWorksForm = () => {
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
  const itemsToDisplay = t.electricalItems;

  // Dynamically replace placeholders in the declaration
  const declarationText = t.declaration
    .replace(
      "__PARTNER_NAME__",
      formData.partnerName ||
        (language === "en" ? "[Partner's Name]" : "[भागीदाराचे नाव]")
    )
    .replace(
      "__FIRM_NAME__",
      formData.firmName || (language === "en" ? "[Firm Name]" : "[फर्मचे नाव]")
    );

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
            <div>
              <label style={styles.label}>{t.partnerLabel}</label>
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                placeholder={t.partnerPlaceholder}
                style={styles.input}
              />
            </div>
            <div>
              <label style={styles.label}>{t.firmLabel}</label>
              <input
                type="text"
                name="firmName"
                value={formData.firmName}
                onChange={handleChange}
                placeholder={t.firmPlaceholder}
                style={styles.input}
              />
            </div>
          </div>
          <p style={styles.declaration}>{declarationText}</p>
        </div>

        <section style={styles.sectionContainer}>
          <h3 style={styles.sectionTitle}>
            {language === "en"
              ? "Electrical Works Items"
              : "विद्युत कामांच्या वस्तू"}
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

export default ElectricalWorksForm;