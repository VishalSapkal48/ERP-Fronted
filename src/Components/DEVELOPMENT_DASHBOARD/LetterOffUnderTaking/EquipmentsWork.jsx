import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png";
import img1 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture1.png";
import img2 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture2.png";
import img3 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture3.png";
import img4 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture4.png";
import img5 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture5.png";
import img6 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture6.png";
import img7 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture7.png";
import img8 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture8.png";
import img9 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture9.png";
import img10 from "../../../../public/Images/LetterOfUbderTaking/EquipmentsWork/Picture10.png";

// --- English Data for the form items ---
const equipmentsWorkItemsEN = [
  {
    id: 1,
    name: "Steel Beams",
    description: "Type: I-Beam, Size: 200mm x 100mm, Length: 6m, Weight: 25.4 kg/m",
    qty: 10,
    photos: [img1],
  },
  {
    id: 2,
    name: "Steel Columns",
    description: "Type: H-Column, Size: 300mm x 300mm, Length: 5m, Weight: 45 kg/m",
    qty: 5,
    photos: [img2],
  },
  {
    id: 3,
    name: "Steel Plates",
    description: "Thickness: 10mm, Size: 2m x 1m, Material: Mild Steel",
    qty: 15,
    photos: [img3],
  },
  {
    id: 4,
    name: "Steel Angles",
    description: "Size: 50mm x 50mm x 5mm, Length: 6m, Weight: 3.8 kg/m",
    qty: 20,
    photos: [img4],
  },
  {
    id: 5,
    name: "Steel Pipes",
    description: "Diameter: 100mm, Length: 6m, Thickness: 4mm, Material: Galvanized Steel",
    qty: 8,
    photos: [img5],
  },
  {
    id: 6,
    name: "Steel Channels",
    description: "Size: 100mm x 50mm, Length: 6m, Weight: 9.6 kg/m",
    qty: 12,
    photos: [img6],
  },
  {
    id: 7,
    name: "Steel Reinforcements",
    description: "Diameter: 12mm, Length: 12m, Type: TMT Bar",
    qty: 50,
    photos: [img7],
  },
  {
    id: 8,
    name: "Steel Gratings",
    description: "Size: 1m x 1m, Thickness: 5mm, Material: Stainless Steel",
    qty: 10,
    photos: [img8],
  },
  {
    id: 9,
    name: "Steel Trusses",
    description: "Type: Triangular, Span: 10m, Material: Mild Steel",
    qty: 3,
    photos: [img9],
  },
  {
    id: 10,
    name: "Steel Fasteners",
    description: "Type: Bolts & Nuts, Size: M16, Quantity per Pack: 100",
    qty: 5,
    photos: [img10],
  },
];

// --- Marathi Translations ---
const equipmentsWorkItemsMR = [
  {
    id: 1,
    name: "स्टील बीम्स",
    description: "प्रकार: I-बीम, आकार: 200mm x 100mm, लांबी: 6m, वजन: 25.4 kg/m",
    qty: 10,
    photos: [img1],
  },
  {
    id: 2,
    name: "स्टील कॉलम",
    description: "प्रकार: H-कॉलम, आकार: 300mm x 300mm, लांबी: 5m, वजन: 45 kg/m",
    qty: 5,
    photos: [img2],
  },
  {
    id: 3,
    name: "स्टील प्लेट्स",
    description: "जाडी: 10mm, आकार: 2m x 1m, मटेरियल: माइल्ड स्टील",
    qty: 15,
    photos: [img3],
  },
  {
    id: 4,
    name: "स्टील कोन्या",
    description: "आकार: 50mm x 50mm x 5mm, लांबी: 6m, वजन: 3.8 kg/m",
    qty: 20,
    photos: [img4],
  },
  {
    id: 5,
    name: "स्टील पाइप्स",
    description: " व्यास: 100mm, लांबी: 6m, जाडी: 4mm, मटेरियल: गॅल्वनाइज्ड स्टील",
    qty: 8,
    photos: [img5],
  },
  {
    id: 6,
    name: "स्टील चॅनेल्स",
    description: "आकार: 100mm x 50mm, लांबी: 6m, वजन: 9.6 kg/m",
    qty: 12,
    photos: [img6],
  },
  {
    id: 7,
    name: "स्टील सुदृढीकरण",
    description: "व्यास: 12mm, लांबी: 12m, प्रकार: TMT बार",
    qty: 50,
    photos: [img7],
  },
  {
    id: 8,
    name: "स्टील ग्रेटिंग्स",
    description: "आकार: 1m x 1m, जाडी: 5mm, मटेरियल: स्टेनलेस स्टील",
    qty: 10,
    photos: [img8],
  },
  {
    id: 9,
    name: "स्टील ट्रस्सेस",
    description: "प्रकार: त्रिकोणी, स्पॅन: 10m, मटेरियल: माइल्ड स्टील",
    qty: 3,
    photos: [img9],
  },
  {
    id: 10,
    name: "स्टील फास्टनर्स",
    description: "प्रकार: बोल्ट्स आणि नट्स, आकार: M16, प्रति पॅक प्रमाण: 100",
    qty: 5,
    photos: [img10],
  },
];

// --- Translations for English and Marathi ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Steel Equipment’s Work Items",
    switchLang: "मराठी",
    switchAria: "Switch to Marathi",
    dateLabel: "Date",
    ownerLabel: "Name of Partners",
    branchLabel: "Name of Firm",
    footerOwner: "Undertaking By",
    footerSign: "Signature",
    ownerPlaceholder: "Enter Name of Partners",
    branchPlaceholder: "Enter Name of Firm",
    signPlaceholder: "Enter Signature",
    declaration: {
      part1: "We, [Name of Partners] Partners of [Name of Firm], hereby give this undertaking to YNK Enterprises for the completion of the Steel Equipment’s Work. We confirm that we will complete all the work as per the product details given above. We understand that if we fail to fulfill this undertaking, YNK Enterprises may take the following action against us:\n1. To rectify any defect in the work at our own cost.\n2. To take responsibility for the financial loss (late receipt of NOC) if the defect is not rectified at the earliest.\n3. To take responsibility for paying the penalty amount of Rs. 5000/- for the defect.\nThis undertaking may be terminated in the following circumstances:\n1. Completion of the work as per the agreed measurements.\n2. Cancellation of the franchise.\nThis undertaking is governed by the laws of [Government Act]. The undersigned, [Name of Partners] Partners of [Name of Firm], agree to abide by the terms and conditions of this undertaking.",
      part2: "",
      part3: "",
    },
    tableHeaders: {
      no: "No",
      name: "Name of Item",
      description: "Description",
      qty: "Qty",
      photos: "Photo",
    },
    equipmentsWorkItems: equipmentsWorkItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "स्टील उपकरणांचे काम वस्तू",
    switchLang: "English",
    switchAria: "Switch to English",
    dateLabel: "तारीख",
    ownerLabel: "साझेदारांचे नाव",
    branchLabel: "फर्मचे नाव",
    footerOwner: "अंडरटेकिंग करणारा",
    footerSign: "स्वाक्षरी",
    ownerPlaceholder: "साझेदारांचे नाव प्रविष्ट करा",
    branchPlaceholder: "फर्मचे नाव प्रविष्ट करा",
    signPlaceholder: "स्वाक्षरी प्रविष्ट करा",
    declaration: {
      part1: "आम्ही, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, येथे वायएनके एंटरप्राइजेसना स्टील उपकरणांचे काम पूर्ण करण्यासाठी हे अंडरटेकिंग देतो. आम्ही पुष्टी करतो की आम्ही वरील उत्पादन तपशीलानुसार सर्व काम पूर्ण करू. आम्हाला हे समजले आहे की जर आम्ही हे अंडरटेकिंग पूर्ण करू शकलो नाही, तर वायएनके एंटरप्राइजेस आमच्याविरुद्ध खालील कारवाई करू शकते:\n१. कामातील कोणत्याही दोषाची दुरुस्ती आमच्या स्वतःच्या खर्चाने करणे.\n२. जर दोष लवकरात लवकर दुरुस्त केला गेला नाही तर आर्थिक नुकसानाची (NOC ची उशीरा प्राप्ती) जबाबदारी घेणे.\n३. दोषासाठी ५,०००/- रुपये दंडाची रक्कम भरण्याची जबाबदारी घेणे.\nहे अंडरटेकिंग खालील परिस्थितीत रद्द केले जाऊ शकते:\n१. करारानुसार मोजणीनुसार काम पूर्ण होणे.\n२. फ्रँचायझीची रद्दीकरण.\nहे अंडरटेकिंग [सरकारी कायदा] च्या कायद्यांनी नियंत्रित होते. खाली सही करणारे, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, या अंडरटेकिंगच्या अटी आणि शर्तींना मान्य असल्याचे सहमती देतात.",
      part2: "",
      part3: "",
    },
    tableHeaders: {
      no: "नं",
      name: "वस्तूचे नाव",
      description: "वर्णन",
      qty: "प्रमाण",
      photos: "फोटो",
    },
    equipmentsWorkItems: equipmentsWorkItemsMR,
  },
};

// --- Component Styles ---
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#e6f0fa",
    padding: "20px",
    boxSizing: "border-box",
  },
  formContainer: {
    width: "100%",
    maxWidth: "800px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8fafc",
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

const EquipmentsWorkForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "2025-09-29T12:18", // Set to 12:18 PM IST, September 29, 2025
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
  const itemsToDisplay = t.equipmentsWorkItems;

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
                type="datetime-local"
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
                placeholder={t.branchPlaceholder}
                style={styles.input}
              />
            </div>
          </div>
          <p style={styles.declaration}>{t.declaration.part1}</p>
        </div>

        <section style={styles.sectionContainer}>
          <h3 style={styles.sectionTitle}>
            {language === "en" ? "Steel Equipment’s Work Items" : "स्टील उपकरणांचे काम वस्तू"}
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

export default EquipmentsWorkForm;