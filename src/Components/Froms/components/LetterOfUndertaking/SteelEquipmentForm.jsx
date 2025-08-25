import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";
import img1 from "../../../../../public/Images/SteelsEquipments/picture1.png";
import img2 from "../../../../../public/Images/SteelsEquipments/Picture2.png";
import img3 from "../../../../../public/Images/SteelsEquipments/Picture3.png";
import img4 from "../../../../../public/Images/SteelsEquipments/Picture4.png";
import img5 from "../../../../../public/Images/SteelsEquipments/Picture5.png";
import img6 from "../../../../../public/Images/SteelsEquipments/Picture6.png";
import img7 from "../../../../../public/Images/SteelsEquipments/Picture7.png";
import img8 from "../../../../../public/Images/SteelsEquipments/Picture8.png";
import img9 from "../../../../../public/Images/SteelsEquipments/Picture9.png";

// --- English Data for the form items ---
const steelEquipmentItemsEN = [
  {
    id: 1,
    name: "2-Burner Stove (Bhatti)",
    description:
      'Size: 44x24x32 inches, Burner: 14" Casting Burner (G5 Type), Back Flange: 6"',
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "Service Counter",
    description:
      "Size: 30x24x32 inches, Features: 2 Drawers, 2 Sliding Doors, Material: SS (16/18 Gauge)",
    qty: 1,
    photos: [img2],
  },
  {
    id: 3,
    name: "Cash Counter",
    description:
      "Size: 24x24x48 inches, Features: 2 Drawers, 1 Undershelf, 1 Sliding Door, Material: SS (16/18 Gauge)",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "Single Unit Sink",
    description:
      'Size: 30x30x32 inches, Bowl: 24x24 inches, Coupling: 1.5", Back Flange: 6", Overshelf included',
    qty: 1,
    photos: [img4],
  },
  {
    id: 5,
    name: "Display Counter (Non-Cooling)",
    description:
      "Size: 24x24x48 inches, Glass: 10mm Toughened Glass, Lighting: White Tubelight",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "Cup Table",
    description: "Size: 36x30x32 inches, Material: SS (18 Gauge)",
    qty: 1,
    photos: [img6],
  },
  {
    id: 7,
    name: "Milk Boiler Machine",
    description: "Capacity: 40 Ltr, Dimensions: 2.5 ft (Bottom) x 4 ft (Top)",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "Work Table",
    description:
      "Size: 36x24x32 inches, Features: 2 Undershelves, 2 Overshelves",
    qty: 1,
    photos: [img8],
  },
  {
    id: 9,
    name: "Cup Tray",
    description: "Size: 11x12x1 inches, Material: SS (18 Gauge)",
    qty: 1,
    photos: [img9],
  },
];

// --- Translations ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Steel Equipment Specification Form",
    switchLang: "मराठी",
    dateLabel: "Date",
    ownerLabel: "Branch Owner Name",
    branchLabel: "Branch Location",
    footerOwner: "OWNER'S NAME",
    footerSign: "SIGNATURE & MOBILE NO.",
    ownerPlaceholder: "Enter Owner Name",
    signPlaceholder: "Enter Signature or Mobile",
    declaration:
      "I, the undersigned, will personally oversee the setup at my site. The plan for all steel equipment has been explained to me and my vendors. I have understood it thoroughly and agree to use only the materials and brands of the specified quality as detailed below, per the requirements of YNK Company. I will not use materials from any other company.",
    tableHeaders: {
      no: "No.",
      name: "Item Name",
      description: "Description & Specification",
      qty: "Qty",
      photos: "Photos",
    },
    steelEquipmentItems: steelEquipmentItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "स्टील उपकरणे तपशील फॉर्म",
    switchLang: "English",
    dateLabel: "तारीख",
    ownerLabel: "शाखा मालकाचे नाव",
    branchLabel: "शाखेचे ठिकाण",
    footerOwner: "मालकाचे नाव",
    footerSign: "स्वाक्षरी आणि मोबाइल नं.",
    ownerPlaceholder: "मालकाचे नाव प्रविष्ट करा",
    signPlaceholder: "स्वाक्षरी किंवा मोबाइल प्रविष्ट करा",
    declaration:
      "मी, खाली सही करणारा, माझ्या साइटवरील सेटअपची वैयक्तिकरित्या पाहणी करेन. सर्व स्टील उपकरणांची योजना मला आणि माझ्या विक्रेत्यांना समजावून सांगितली आहे. मला ती पूर्णपणे समजली आहे आणि YNK कंपनीच्या आवश्यकतेनुसार, मी केवळ खाली नमूद केलेल्या विशिष्ट दर्जाचे साहित्य आणि ब्रँड वापरण्यास सहमत आहे. मी इतर कोणत्याही कंपनीचे साहित्य वापरणार नाही.",
    tableHeaders: {
      no: "क्र.",
      name: "वस्तूचे नाव",
      description: "वर्णन आणि तपशील",
      qty: "नग",
      photos: "फोटो",
    },
    steelEquipmentItems: [
      {
        id: 1,
        name: "२-बर्नर भट्टी",
        description:
          'आकार: ४४x२४x३२ इंच, बर्नर: १४" कास्टिंग बर्नर (G5 प्रकार), बॅक फ्लँज: ६"',
        qty: 1,
        photos: [img1],
      },
      {
        id: 2,
        name: "सर्व्हिस काउंटर",
        description:
          "आकार: ३०x२४x३२ इंच, वैशिष्ट्ये: २ ड्रॉवर, २ स्लायडिंग दरवाजे, साहित्य: एसएस (१६/१८ गेज)",
        qty: 1,
        photos: [img2],
      },
      {
        id: 3,
        name: "कॅश काउंटर",
        description:
          "आकार: २४x२४x४८ इंच, वैशिष्ट्ये: २ ड्रॉवर, १ अंडरशेल्फ, १ स्लायडिंग दरवाजा, साहित्य: एसएस (१६/१८ गेज)",
        qty: 1,
        photos: [img3],
      },
      {
        id: 4,
        name: "एक युनिट सिंक",
        description:
          'आकार: ३०x३०x३२ इंच, बाऊल: २४x२४ इंच, कपलिंग: १.५", बॅक फ्लँज: ६", ओव्हरशेल्फ समाविष्ट',
        qty: 1,
        photos: [img4],
      },
      {
        id: 5,
        name: "डिस्प्ले काउंटर (नॉन-कूलिंग)",
        description:
          "आकार: २४x२४x४८ इंच, ग्लास: १० मिमी टफन ग्लास, लाइटिंग: पांढरी ट्यूबलाइट",
        qty: 1,
        photos: [img5],
      },
      {
        id: 6,
        name: "कप टेबल",
        description: "आकार: ३६x३०x३२ इंच, साहित्य: एसएस (१८ गेज)",
        qty: 1,
        photos: [img6],
      },
      {
        id: 7,
        name: "दूध बॉयलर मशीन",
        description: "क्षमता: ४० लिटर, आकारमान: २.५ फूट (तळ) x ४ फूट (वर)",
        qty: 1,
        photos: [img7],
      },
      {
        id: 8,
        name: "वर्क टेबल",
        description:
          "आकार: ३६x२४x३२ इंच, वैशिष्ट्ये: २ अंडरशेल्फ, २ ओव्हरशेल्फ",
        qty: 1,
        photos: [img8],
      },
      {
        id: 9,
        name: "कप ट्रे",
        description: "आकार: ११x१२x१ इंच, साहित्य: एसएस (१८ गेज)",
        qty: 1,
        photos: [img9],
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

const SteelEquipmentForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "",
    ownerName: "",
    branch: "",
    footerOwner: "",
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
  const itemsToDisplay = t.steelEquipmentItems;

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
          <p style={styles.declaration}>{t.declaration}</p>
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
              <label style={styles.label}>{t.ownerLabel}</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder={t.ownerPlaceholder}
                style={styles.input}
              />
            </div>
            <div>
              <label style={styles.label}>{t.branchLabel}</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        <section style={styles.sectionContainer}>
          <h3 style={styles.sectionTitle}>
            {language === "en" ? "Steel Equipment Items" : "स्टील उपकरणे वस्तू"}
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
            <label style={styles.footerLabel}>{t.footerOwner}:</label>
            <input
              type="text"
              name="footerOwner"
              value={formData.footerOwner}
              onChange={handleChange}
              placeholder={t.ownerPlaceholder}
              style={styles.footerInput}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SteelEquipmentForm;