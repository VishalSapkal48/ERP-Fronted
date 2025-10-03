import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png";
import img1 from "../../../../public/Images/LetterOfUbderTaking/BoardWork/Picture1.png";
import img3 from "../../../../public/Images/LetterOfUbderTaking/BoardWork/Picture3.png";
import img5 from "../../../../public/Images/LetterOfUbderTaking/BoardWork/Picture5.png";
import img7 from "../../../../public/Images/LetterOfUbderTaking/BoardWork/Picture7.png";
import img8 from "../../../../public/Images/LetterOfUbderTaking/BoardWork/Picture8.png";
import img10 from "../../../../public/Images/LetterOfUbderTaking/BoardWork/Picture10.png";

// --- English Data for the form items ---
const boardWorkItemsEN = [
  {
    id: 1,
    name: "Main Board ACP Sheet",
    description: "Material: ACP Sheets, Thickness: 3mm, Height: 4ft, Length: 10ft, Colour: White, Code: TMX-142",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "Shop Partition",
    description: "Height: as per shop, Length: as per shop, Color: White, Code: TMX-142",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 3,
    name: "Story Board",
    description: "Length: 4ft, Width: 3mm, Height: 3ft, Material: foam sheet, Language: Local, Wall side: Right side (as per shop)",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "Sink Partition",
    description: "Height: 5ft, Length: 3ft, Material: Aluminum composite panel sheet (ACP), Advantages: Help to cover operation on sink, Aesthetic feel, extra branding or product showcase useful",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 5,
    name: "Menu Frames",
    description: "a) 1-regular model b) 4-mini model, Length: 27 inch, Thickness: 4 inch, Height: 17 inch, Material: Acrylic, Led lights: Samsung/Philips, Light Color: white, Sticker Material: AV",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "Fabrication Work Name Board M S Pipe",
    description: "M S Pipe, Length: 10ft, Width: 3 inch, Height: 10ft, Material: MS, Pipe Size: 1.5”",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 7,
    name: "Fabrication Work Name Board",
    description: "M S Pipe, Length: 10ft, Width: 3ft, Height: 4ft, Material: MS, Pipe Size: 1.5”",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "Board 3D Letter Work",
    description: "Length: 10ft, Height: 4ft, Material: Acrylic, Thickness: 3mm, Statue material: 3mm Acrylic, Statue print: AV print, Led Material: Samsung/Philips, Light Color: Warm",
    qty: 1,
    photos: [img8],
  },
  {
    id: 9,
    name: "Lollipop Out Of Shop",
    description: "Size: 2.5 x 2.5ft, Height: 9ft from floor, Material: Acrylic, Thickness: 3mm, Led Material: Samsung, Light Color: full white",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 10,
    name: "LED Scrolling Board",
    description: "Length: 5ft, Height: 1ft, Width: 4 inch",
    qty: 1,
    photos: [img10],
  },
];

// --- Marathi Translations ---
const boardWorkItemsMR = [
  {
    id: 1,
    name: "मुख्य बोर्ड ACP शीट",
    description: "मटेरियल: ACP शीट्स, जाडी: 3mm, उंची: 4ft, लांबी: 10ft, रंग: पांढरा, कोड: TMX-142",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "दुकान विभाजन",
    description: "उंची: दुकानानुसार, लांबी: दुकानानुसार, रंग: पांढरा, कोड: TMX-142",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 3,
    name: "कथा बोर्ड",
    description: "लांबी: 4ft, रुंदी: 3mm, उंची: 3ft, मटेरियल: फोम शीट, भाषा: स्थानिक, भिंत बाजू: उजवी बाजू (दुकानानुसार)",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "सिंक विभाजन",
    description: "उंची: 5ft, लांबी: 3ft, मटेरियल: अॅल्युमिनियम कॉम्पोजिट पॅनेल शीट (ACP), फायदे: सिंकवरील ऑपरेशन लपवणे, सौंदर्यवर्धक भावना, अतिरिक्त ब्रँडिंग किंवा उत्पादन प्रदर्शन उपयोगी",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 5,
    name: "मेनू फ्रेम्स",
    description: "a) 1-नियमित मॉडेल b) 4-मिनी मॉडेल, लांबी: 27 इंच, जाडी: 4 इंच, उंची: 17 इंच, मटेरियल: अॅक्रिलिक, LED लाइट्स: सॅमसंग/फिलिप्स, प्रकाश रंग: पांढरा, स्टिकर मटेरियल: AV",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "फॅब्रिकेशन वर्क विभाजन",
    description: "M S पाइप, लांबी: 10ft, रुंदी: 3 इंच, उंची: 10ft, मटेरियल: MS, पाइप आकार: 1.5”",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 7,
    name: "फॅब्रिकेशन वर्क नाव बोर्ड",
    description: "M S पाइप, लांबी: 10ft, रुंदी: 3ft, उंची: 4ft, मटेरियल: MS, पाइप आकार: 1.5”",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "बोर्ड 3D लेटर वर्क",
    description: "लांबी: 10ft, उंची: 4ft, मटेरियल: अॅक्रिलिक, जाडी: 3mm, पुतळा मटेरियल: 3mm अॅक्रिलिक, पुतळा प्रिंट: AV प्रिंट, LED मटेरियल: सॅमसंग/फिलिप्स, प्रकाश रंग: उबदार",
    qty: 1,
    photos: [img8],
  },
  {
    id: 9,
    name: "लॉलीपॉप आउट ऑफ शॉप",
    description: "आकार: 2.5 x 2.5ft, उंची: 9ft फ्लोअरपासून, मटेरियल: अॅक्रिलिक, जाडी: 3mm, LED मटेरियल: सॅमसंग, प्रकाश रंग: पूर्ण पांढरा",
    qty: 1,
    photos: [], // Added empty array to avoid undefined
  },
  {
    id: 10,
    name: "LED स्क्रोलिंग बोर्ड",
    description: "लांबी: 5ft, उंची: 1ft, रुंदी: 4 इंच",
    qty: 1,
    photos: [img10],
  },
];

// --- Translations for English and Marathi ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Board Work Items",
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
      part1: "We, [Name of Partners] Partners of [Name of Firm], hereby give this undertaking to YNK Enterprises for the completion of the Board Work. We confirm that we will complete all the work as per the product details given above. We understand that if we fail to fulfill this undertaking, YNK Enterprises may take the following action against us:\n1. To rectify any defect in the work at our own cost.\n2. To take responsibility for the financial loss (late receipt of NOC) if the defect is not rectified at the earliest.\n3. To take responsibility for paying the penalty amount of Rs. 5000/- for the defect.\nThis undertaking may be terminated in the following circumstances:\n1. Completion of the work as per the agreed measurements.\n2. Cancellation of the franchise.\nThis undertaking is governed by the laws of [Government Act]. The undersigned, [Name of Partners] Partners of [Name of Firm], agree to abide by the terms and conditions of this undertaking.",
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
    boardWorkItems: boardWorkItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "बोर्ड काम वस्तू",
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
      part1: "आम्ही, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, येथे वायएनके एंटरप्राइजेसना बोर्ड काम पूर्ण करण्यासाठी हे अंडरटेकिंग देतो. आम्ही पुष्टी करतो की आम्ही वरील उत्पादन तपशीलानुसार सर्व काम पूर्ण करू. आम्हाला हे समजले आहे की जर आम्ही हे अंडरटेकिंग पूर्ण करू शकलो नाही, तर वायएनके एंटरप्राइजेस आमच्याविरुद्ध खालील कारवाई करू शकते:\n१. कामातील कोणत्याही दोषाची दुरुस्ती आमच्या स्वतःच्या खर्चाने करणे.\n२. जर दोष लवकरात लवकर दुरुस्त केला गेला नाही तर आर्थिक नुकसानाची (NOC ची उशीरा प्राप्ती) जबाबदारी घेणे.\n३. दोषासाठी ५,०००/- रुपये दंडाची रक्कम भरण्याची जबाबदारी घेणे.\nहे अंडरटेकिंग खालील परिस्थितीत रद्द केले जाऊ शकते:\n१. करारानुसार मोजणीनुसार काम पूर्ण होणे.\n२. फ्रँचायझीची रद्दीकरण.\nहे अंडरटेकिंग [सरकारी कायदा] च्या कायद्यांनी नियंत्रित होते. खाली सही करणारे, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, या अंडरटेकिंगच्या अटी आणि शर्तींना मान्य असल्याचे सहमती देतात.",
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
    boardWorkItems: boardWorkItemsMR,
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

const BoardWorkForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "2025-09-29T15:28", // Updated to 03:28 PM IST, September 29, 2025
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
  const itemsToDisplay = t.boardWorkItems;

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
            {language === "en" ? "Board Work Items" : "बोर्ड काम वस्तू"}
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
                        : ""}
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

export default BoardWorkForm;