import React, { useState } from "react";
import logo from '../../../../public/Images/BoardWorksListForm/logo.png';
import img1 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture1.png';
import img2 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture2.png';
import img3 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture3.png';
import img4 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture4.png';
import img5 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture5.png';
import img6 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture6.png';
import img7 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture7.png';
import img8 from '../../../../public/Images/LetterOfUbderTaking/CameraSetup/Picture8.png';


const cameraSetItemsEN = [
  {
    id: 1,
    name: "CCTV Camera",
    description:
      "Brand: CP Plus, Module: Dome Camera -3 Color: White, Specification: 2/3/4 MP full HD Dome camera, Range: 30 Mtr., Resolution: 1080p, Technology: iPhone, iPad, Android phone, Audio technology available, Mobile software: iCMOB, gCMOB",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "Camera No.1: Bullet Camera",
    description: "Place: Out of shutter L/R side, Highlight: Dine in area",
    qty: 1,
    photos: [img2],
  },
  {
    id: 3,
    name: "Camera No.2",
    description:
      "Place: Left side wall (corner), Highlight: customer service area, menu frame and tv",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "Camera No.3",
    description:
      "Place: Left side wall, Highlight: billing, employee service area",
    qty: 1,
    photos: [img4],
  },
  {
    id: 5,
    name: "Camera No.4",
    description:
      "Place: Left side / right wall, Highlight: Operation at burner and milk machine",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "Hard Disk",
    description:
      "Digital Storage: 1 TB Capacity, Interface: eSATA, Connectivity: eSATA, Technology: D25, Brand: Seagate/WD, Special Feature: Portable, Shock Resistant, Hard Disk Form: 3.5 inches, Hard Disk Description: Mechanical Hard Disk, Compatible: Desktop, Camera, Installation Type: Internal Hard Drive",
    qty: 1,
    photos: [img6],
  },
  {
    id: 7,
    name: "3U Rack",
    description:
      "Brand: Crotomak, Colour: Grey, Product Dimensions: 40D x 40.5W x 15.5H Centimeters, Size: 3U Rack, Material: Iron & Cast Iron",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "CP PLUS Full HD 4 Channel DVR",
    description:
      "Brand: CP PLUS, Connectivity: Wired, Technology: Wired, Video Capture Resolution: 1080N, Special Feature: Night Vision, App Control, Number of Channels: 4",
    qty: 1,
    photos: [img8],
  },
];

// --- Marathi Translations ---
const cameraSetItemsMR = [
  {
    id: 1,
    name: "सीसीटीव्ही कॅमेरा",
    description:
      "ब्रँड: सीपी प्लस, मॉड्यूल: ३ डोम कॅमेरे, रंग: पांढरा, तपशील: २/३/४ MP फुल एचडी डोम कॅमेरा, रेंज: ३० मीटर, रिझोल्यूशन: १०८०p, तंत्रज्ञान: आयफोन, आयपॅड, अँड्रॉइड फोन, ऑडिओ तंत्रज्ञान उपलब्ध, मोबाइल सॉफ्टवेअर: iCMOB, gCMOB",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "कॅमेरा क्र.१: बुलेट कॅमेरा",
    description: "जागा: शटरच्या बाहेर (डावी/उजवी बाजू), हायलाइट: जेवणाचे क्षेत्र",
    qty: 1,
    photos: [img2],
  },
  {
    id: 3,
    name: "कॅमेरा क्र.२",
    description:
      "जागा: डाव्या बाजूची भिंत (कोपरा), हायलाइट: ग्राहक सेवा क्षेत्र, मेनू फ्रेम आणि टीव्ही",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "कॅमेरा क्र.३",
    description:
      "जागा: डाव्या बाजूची भिंत, हायलाइट: बिलिंग, कर्मचारी सेवा क्षेत्र",
    qty: 1,
    photos: [img4],
  },
  {
    id: 5,
    name: "कॅमेरा क्र.४",
    description:
      "जागा: डावी/उजवी भिंत, हायलाइट: बर्नर आणि दूध मशीनचे कामकाज",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "हार्ड डिस्क",
    description:
      "डिजिटल स्टोरेज: १ टीबी क्षमता, इंटरफेस: eSATA, कनेक्टिव्हिटी: eSATA, तंत्रज्ञान: D25, ब्रँड: सिगेट/डब्ल्यूडी, विशेष वैशिष्ट्य: पोर्टेबल, शॉक रेझिस्टंट, हार्ड डिस्क फॉर्म: ३.५ इंच, हार्ड डिस्क वर्णन: मेकॅनिकल हार्ड डिस्क, सुसंगत: डेस्कटॉप, कॅमेरा, स्थापना प्रकार: इंटर्नल हार्ड ड्राइव्ह",
    qty: 1,
    photos: [img6],
  },
  {
    id: 7,
    name: "३यू रॅक",
    description:
      "ब्रँड: क्रोटोमॅक, रंग: ग्रे, उत्पादन आकारमान: ४०D x ४०.५W x १५.५H सेंटीमीटर, आकार: ३यू रॅक, साहित्य: लोखंड आणि बीडाचे लोखंड",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "सीपी प्लस फुल एचडी ४ चॅनल डीव्हीआर",
    description:
      "ब्रँड: सीपी प्लस, कनेक्टिव्हिटी: वायर्ड, तंत्रज्ञान: वायर्ड, व्हिडिओ कॅप्चर रिझोल्यूशन: १०८०N, विशेष वैशिष्ट्य: नाईट व्हिजन, ॲप कंट्रोल, चॅनल्सची संख्या: ४",
    qty: 1,
    photos: [img8],
  },
];

// --- Translations for English and Marathi ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Letter of Undertaking - CP PLUS CAMERA SET WORKS",
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
      part1: "We, [Name of Partners] Partners of [Name of Firm], hereby give this undertaking to YNK Enterprises for the completion of the Steel Equipment work. We confirm that we will complete all the work as per the product details given above. We understand that if we fail to fulfill this undertaking, YNK Enterprises may take the following action against us:\n1. To rectify any defect in the work at our own cost.\n2. To take responsibility for the financial loss (late receipt of NOC) if the defect is not rectified at the earliest.\n3. To take responsibility for paying the penalty amount of Rs. 5000/- for the defect.\nThis undertaking may be terminated in the following circumstances:\n1. Completion of the work as per the agreed measurements.\n2. Cancellation of the franchisee.\nThe undersigned, [Name of Partners] Partners of [Name of Firm], agree to abide by the terms and conditions of this undertaking.",
      part2: "",
      part3: "",
    },
    tableHeaders: {
      no: "No",
      name: "Name of Counter",
      description: "Description",
      qty: "Qty",
      photos: "Photo",
    },
    cameraSetItems: cameraSetItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "अंडरटेकिंग पत्र - सीपी प्लस कॅमेरा सेट वर्क्स",
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
      part1: "आम्ही, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, येथे वायएनके एंटरप्राइजेसना स्टील उपकरण काम पूर्ण करण्यासाठी हे अंडरटेकिंग देतो. आम्ही पुष्टी करतो की आम्ही वरील उत्पादन तपशीलानुसार सर्व काम पूर्ण करू. आम्हाला हे समजले आहे की जर आम्ही हे अंडरटेकिंग पूर्ण करू शकलो नाही, तर वायएनके एंटरप्राइजेस आमच्याविरुद्ध खालील कारवाई करू शकते:\n१. कामातील कोणत्याही दोषाची दुरुस्ती आमच्या स्वतःच्या खर्चाने करणे.\n२. जर दोष लवकरात लवकर दुरुस्त केला गेला नाही तर आर्थिक नुकसानाची (NOC ची उशीरा प्राप्ती) जबाबदारी घेणे.\n३. दोषासाठी ५,०००/- रुपये दंडाची रक्कम भरण्याची जबाबदारी घेणे.\nहे अंडरटेकिंग खालील परिस्थितीत रद्द केले जाऊ शकते:\n१. करारानुसार मोजणीनुसार काम पूर्ण होणे.\n२. फ्रँचायझीची रद्दीकरण.\nखाली सही करणारे, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, या अंडरटेकिंगच्या अटी आणि शर्तींना मान्य असल्याचे सहमती देतात.",
      part2: "",
      part3: "",
    },
    tableHeaders: {
      no: "नं",
      name: "काउंटरचे नाव",
      description: "वर्णन",
      qty: "प्रमाण",
      photos: "फोटो",
    },
    cameraSetItems: cameraSetItemsMR,
  },
};

// --- Component Styles (unchanged) ---
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
    dateTime: new Date().toISOString().split("T")[0], // Set current date
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