import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";
import img1 from "../../../../../public/Images/CameraSetup/Picture1.png";
import img2 from "../../../../../public/Images/CameraSetup/Picture2.png";
import img3 from "../../../../../public/Images/CameraSetup/Picture3.png";
import img4 from "../../../../../public/Images/CameraSetup/Picture4.png";
import img5 from "../../../../../public/Images/CameraSetup/Picture5.png";
import img6 from "../../../../../public/Images/CameraSetup/Picture6.png";
import img7 from "../../../../../public/Images/CameraSetup/Picture7.png";
import img8 from "../../../../../public/Images/CameraSetup/Picture8.png";

// --- English Data for the form items ---
const cameraSetItemsEN = [
  {
    id: 1,
    name: "CCTV Camera",
    description:
      "Brand: CP Plus, Module: 3 Dome Cameras, Color: White, Specification: 2/3/4 MP Full HD Dome Camera, Range: 30 meters, Resolution: 1080p, Mobile Software: iCMOB, gCMOB",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "Camera No.1: Bullet Camera",
    description:
      "Placement: Outside shutter (Left/Right side), Coverage Area: Dine-in area",
    qty: 1,
    photos: [img2],
  },
  {
    id: 3,
    name: "Camera No.2: Dome Camera",
    description:
      "Placement: Left side wall (corner), Coverage Area: Customer service area, menu frame, and TV",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "Camera No.3: Dome Camera",
    description:
      "Placement: Left side wall, Coverage Area: Billing counter and employee service area",
    qty: 1,
    photos: [img4],
  },
  {
    id: 5,
    name: "Camera No.4: Dome Camera",
    description:
      "Placement: Left/Right side wall, Coverage Area: Burner and milk machine operations",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "Hard Disk",
    description:
      "Storage: 1 TB, Brand: Seagate/WD, Feature: Shock Resistant, Type: Internal Mechanical Hard Disk, Compatible: Desktop, Camera",
    qty: 1,
    photos: [img6],
  },
  {
    id: 7,
    name: "3U Rack",
    description:
      "Brand: Crotomak, Color: Grey, Dimensions: 40D x 40.5W x 15.5H cm, Size: 3U, Material: Iron & Cast Iron",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "CP PLUS Full HD 4 Channel DVR",
    description:
      "Brand: CP PLUS, Technology: Wired, Resolution: 1080N, Features: Night Vision, App Control, Channels: 4",
    qty: 1,
    photos: [img8],
  },
];

// --- Translations for English and Marathi ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Camera Setup Specification Form",
    switchLang: "मराठी",
    switchAria: "Switch to Marathi",
    dateLabel: "Date",
    ownerLabel: "Branch Owner Name",
    branchLabel: "Branch Location",
    footerOwner: "OWNER'S NAME",
    footerSign: "SIGNATURE & MOBILE NO.",
    ownerPlaceholder: "Enter Owner Name",
    branchPlaceholder: "Enter Branch Location",
    signPlaceholder: "Enter Signature or Mobile",
    declaration: {
      part1: "I, ",
      part2: ", the undersigned branch owner of ",
      part3:
        ", hereby confirm that I will personally supervise all installation work at my branch location. I affirm that the camera setup plan has been thoroughly explained to me and my vendors. I have fully understood the plan and specifications. In accordance with YNK Company's requirements, I commit to using only the materials and brands detailed in this document and will not substitute them.",
    },
    tableHeaders: {
      no: "No.",
      name: "Item Name",
      description: "Description & Specification",
      qty: "Qty",
      photos: "Photos",
    },
    cameraSetItems: cameraSetItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "कॅमेरा सेटअप तपशील फॉर्म",
    switchLang: "English",
    switchAria: "Switch to English",
    dateLabel: "तारीख",
    ownerLabel: "शाखा मालकाचे नाव",
    branchLabel: "शाखेचे ठिकाण",
    footerOwner: "मालकाचे नाव",
    footerSign: "स्वाक्षरी आणि मोबाइल नं.",
    ownerPlaceholder: "मालकाचे नाव प्रविष्ट करा",
    branchPlaceholder: "शाखेचे ठिकाण प्रविष्ट करा",
    signPlaceholder: "स्वाक्षरी किंवा मोबाइल प्रविष्ट करा",
    declaration: {
      part1: "मी, ",
      part2: ", खाली सही करणारा शाखा मालक, ",
      part3:
        " येथील, याद्वारे पुष्टी करतो की मी माझ्या शाखेतील सर्व स्थापना कार्याची वैयक्तिकरित्या देखरेख करेन. मी मान्य करतो की कॅमेरा सेटअपची योजना मला आणि माझ्या विक्रेत्यांना सविस्तरपणे समजावून सांगितली आहे. मला ती योजना आणि तपशील पूर्णपणे समजले आहेत. YNK कंपनीच्या आवश्यकतांनुसार, मी केवळ या दस्तऐवजात नमूद केलेले साहित्य आणि ब्रँड वापरण्यास वचनबद्ध आहे आणि त्यात कोणताही बदल करणार नाही.",
    },
    tableHeaders: {
      no: "क्र.",
      name: "वस्तूचे नाव",
      description: "वर्णन आणि तपशील",
      qty: "नग",
      photos: "फोटो",
    },
    cameraSetItems: [
      {
        id: 1,
        name: "सीसीटीव्ही कॅमेरा",
        description:
          "ब्रँड: सीपी प्लस, मॉड्यूल: ३ डोम कॅमेरे, रंग: पांढरा, तपशील: २/३/४ MP फुल एचडी डोम कॅमेरा, रेंज: ३० मीटर, रिझोल्यूशन: १०८०p, मोबाइल सॉफ्टवेअर: iCMOB, gCMOB",
        qty: 1,
        photos: [img1],
      },
      {
        id: 2,
        name: "कॅमेरा क्र.१: बुलेट कॅमेरा",
        description:
          "जागा: शटरच्या बाहेर (डावी/उजवी बाजू), कव्हरेज क्षेत्र: जेवणाचे क्षेत्र",
        qty: 1,
        photos: [img2],
      },
      {
        id: 3,
        name: "कॅमेरा क्र.२: डोम कॅमेरा",
        description:
          "जागा: डाव्या बाजूची भिंत (कोपरा), कव्हरेज क्षेत्र: ग्राहक सेवा क्षेत्र, मेनू फ्रेम आणि टीव्ही",
        qty: 1,
        photos: [img3],
      },
      {
        id: 4,
        name: "कॅमेरा क्र.३: डोम कॅमेरा",
        description:
          "जागा: डाव्या बाजूची भिंत, कव्हरेज क्षेत्र: बिलिंग काउंटर आणि कर्मचारी सेवा क्षेत्र",
        qty: 1,
        photos: [img4],
      },
      {
        id: 5,
        name: "कॅमेरा क्र.४: डोम कॅमेरा",
        description:
          "जागा: डावी/उजवीकडील भिंत, कव्हरेज क्षेत्र: बर्नर आणि दूध मशीनचे कामकाज",
        qty: 1,
        photos: [img5],
      },
      {
        id: 6,
        name: "हार्ड डिस्क",
        description:
          "क्षमता: १ टीबी, ब्रँड: सीगेट/डब्ल्यूडी, वैशिष्ट्य: शॉक रेझिस्टंट, प्रकार: इंटर्नल मेकॅनिकल हार्ड डिस्क, सुसंगत: डेस्कटॉप, कॅमेरा",
        qty: 1,
        photos: [img6],
      },
      {
        id: 7,
        name: "३यू रॅक",
        description:
          "ब्रँड: क्रोटोमॅक, रंग: ग्रे, आकारमान: ४०D x ४०.५W x १५.५H सेमी, साइज: ३यू, साहित्य: लोखंड आणि बीडाचे लोखंड",
        qty: 1,
        photos: [img7],
      },
      {
        id: 8,
        name: "सीपी प्लस फुल एचडी ४ चॅनल डीव्हीआर",
        description:
          "ब्रँड: सीपी प्लस, तंत्रज्ञान: वायर्ड, रिझोल्यूशन: १०८०N, वैशिष्ट्ये: नाईट व्हिजन, ॲप कंट्रोल, चॅनल: ४",
        qty: 1,
        photos: [img8],
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

const CameraSetForm = () => {
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
  const itemsToDisplay = t.cameraSetItems;

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
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder={t.ownerPlaceholder}
              style={styles.declarationInput}
            />
            {t.declaration.part2}
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder={t.branchPlaceholder}
              style={styles.declarationInput}
            />
            {t.declaration.part3}
          </p>
        </div>

        <section style={styles.sectionContainer}>
          <h3 style={styles.sectionTitle}>
            {language === "en" ? "Camera Setup Items" : "कॅमेरा सेटअप वस्तू"}
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

export default CameraSetForm;