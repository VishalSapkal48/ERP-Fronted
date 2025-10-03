import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; 
import img1 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture1.png";
import img2 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture2.png";
import img3 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture3.png";
import img4 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture4.png";
import img5 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture5.png";
import img6 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture6.png";
import img7 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture7.png";
import img8 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture8.png";
import img9 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture9.png";
import img10 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture10.png";
import img11 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture11.png";
import img12 from "../../../../public/Images/LetterOfUbderTaking/CivilWorkyewale/Picture12.png";
// --- English Data for the form items ---

// --- English Data for the form items ---
const civilWorkItemsEN = [
  {
    id: 1,
    name: "Wall Tiles (Height: 9 feet)",
    description: "Tile Type: Wall tiles, Finish: Glossy, Material: Ceramic, Size: also available in 18x12 and 12x24 inch",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "Nano Avory Flooring Tiles",
    description: "Ivory Tiles: Nano - 2x2 ft, Color: White / Gray, Size: 600x600 mm, Tile Design: Plain, No. of Tiles Per Box: 5, Tile Thickness: 4 mm, Material: Ceramic",
    qty: 1,
    photos: [img2],
  },
  {
    id: 3,
    name: "POP Sheet PVC",
    description: "Color: White, Width: 10 inch, Length: 120 inch, Material: PVC, Thickness: 10 mm",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "POP False Ceiling Channel",
    description: "Dimensions: As per customer requirement, Size: As per customer requirement, Material: POP Ceiling, Brand: USG Boral, Shape: Rectangular, Technique: Other, Usage/Application: Residential & Commercial, Minimum Order: 10x10 Square Feet",
    qty: 1,
    photos: [img4],
  },
  {
    id: 5,
    name: "Shop Ceiling (Color: full white)",
    description: "Capacity: 5 L, Unit of Measurement: Litre, Model No: 0001, Is Consumable: Yes, Selling Unit: Can, Series: GR-0, Magnitude of 4 UOM, Type of Product: Apcolite Premium Gloss Enamel, Color: White",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "Shop Shutter (Logo Color: Traffic Yellow / Black)",
    description: "Color Code: Traffic Yellow / Black, Paint Material: Asian Oil Paint, Logo Size: 3x3 Ft Round",
    qty: 1,
    photos: [img6],
  },
  {
    id: 7,
    name: "Black Polyester Folding Awning",
    description: "Material: Polyester, Brand: Dezire, Shape: Tunnel, Color: Black, Frame Material: Mild Steel, Coated Type: PVC Coated, Position: Exterior, Shed Material: Fabric, Frame Finish: Fabric Finish, Minimum Order Quantity: 10 Square Feet",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "Prince CPVC Flow Guard Plus Pipes & Fittings",
    description: "Brand: Prince, Fitting: All Kind of Fittings & Adhesives, Usage: Hot & Cold Water, Material: CPVC compound which meets cell class D-110-2-3-2 as per IS: 15778, Color: Cream, Country of Origin: Made in India",
    qty: 1,
    photos: [img8],
  },
  {
    id: 9,
    name: "Preethi Xpro Duo MG-198",
    description: "Brand: Preethi, Colour: Deep Blue, Product Dimensions: 33.5D x 45.7W x 30.8H Centimeters, Blade Material: Alloy Steel, Plastic, Special Feature: Leak Proof, Capacity: 2 litres, Controls Type: Knob control, Item Weight: 6200 Grams, Model Name: Xpro Duo MG 198, Is Dishwasher Safe: Yes",
    qty: 1,
    photos: [img9],
  },
  {
    id: 10,
    name: "Blue Star CF3-300MPW",
    description: "Product Dimensions: 67.8D x 114.7W x 85.7H Centimeters, Brand: Blue Star, Model Name: CF3-300MPW, Colour: White, Material: Stainless Steel, Equipment Type: Commercial Kitchen Chimney, Usage/Application: Hotel, Brand: Aarav, Size: Customized stainless steel, Color of Origin: Made in India, Minimum Order Quantity: 10 Feet, Hood Size: 5/6 ft, Exhaust Fan Size: 18 inch",
    qty: 1,
    photos: [img10],
  },
  {
    id: 11,
    name: "TV Pipe",
    description: "Material: S-s pipe/m.s pipe, Fixing 80 inch from ground",
    qty: 1,
    photos: [img11],
  },
  {
    id: 12,
    name: "Kitchen Exhaust Ducting",
    description: "Material: Galvanized Steel, Size: 6 inch diameter, Length: 10 feet, Usage: Kitchen ventilation",
    qty: 1,
    photos: [img12],
  },
];

// --- Marathi Translations ---
const civilWorkItemsMR = [
  {
    id: 1,
    name: "भिंतीचे टाइल्स (उंची: 9 फूट)",
    description: "टाइल प्रकार: भिंतीचे टाइल्स, फिनिश: ग्लॉसी, मटेरियल: सिरॅमिक, आकार: 18x12 आणि 12x24 इंचमध्ये उपलब्ध",
    qty: 1,
    photos: [img1],
  },
  {
    id: 2,
    name: "नॅनो अवोरी फ्लोरिंग टाइल्स",
    description: "आयव्हरी टाइल्स: नॅनो - 2x2 फूट, रंग: पांढरा / ग्रे, आकार: 600x600 मिमी, टाइल डिझाइन: साधा, प्रति बॉक्स टाइल्स: 5, टाइल जाडी: 4 मिमी, मटेरियल: सिरॅमिक",
    qty: 1,
    photos: [img2],
  },
  {
    id: 3,
    name: "POP शीट PVC",
    description: "रंग: पांढरा, रुंदी: 10 इंच, लांबी: 120 इंच, मटेरियल: PVC, जाडी: 10 मिमी",
    qty: 1,
    photos: [img3],
  },
  {
    id: 4,
    name: "POP खोटे छत चॅनेल",
    description: "माप: ग्राहकाच्या गरजेनुसार, आकार: ग्राहकाच्या गरजेनुसार, मटेरियल: POP छत, ब्रँड: USG Boral, आकार: आयताकृती, तंत्र: इतर, वापर/अॅप्लिकेशन: निवासी आणि व्यावसायिक, किमान ऑर्डर: 10x10 चौरस फूट",
    qty: 1,
    photos: [img4],
  },
  {
    id: 5,
    name: "दुकान छत (रंग: पूर्ण पांढरा)",
    description: "क्षमता: 5 लिटर, मोजणीचा एकक: लिटर, मॉडेल नं: 0001, वापरयोग्य: होय, विक्री एकक: कॅन, मालिका: GR-0, 4 UOM ची मालिका, उत्पादन प्रकार: Apcolite प्रीमियम ग्लॉस इनेमल, रंग: पांढरा",
    qty: 1,
    photos: [img5],
  },
  {
    id: 6,
    name: "दुकान शटर (लोगो रंग: ट्रॅफिक पिवळा / काळा)",
    description: "रंग कोड: ट्रॅफिक पिवळा / काळा, पेंट मटेरियल: आशियन ऑईल पेंट, लोगो आकार: 3x3 फूट गोल",
    qty: 1,
    photos: [img6],
  },
  {
    id: 7,
    name: "काळा पॉलिएस्टर फोल्डिंग आव्हिंग",
    description: "मटेरियल: पॉलिएस्टर, ब्रँड: Dezire, आकार: टनेल, रंग: काळा, फ्रेम मटेरियल: मायल्ड स्टील, लेपित प्रकार: PVC लेपित, स्थान: बाहेरील, शेड मटेरियल: फॅब्रिक, फ्रेम फिनिश: फॅब्रिक फिनिश, किमान ऑर्डर प्रमाण: 10 चौरस फूट",
    qty: 1,
    photos: [img7],
  },
  {
    id: 8,
    name: "प्रिन्स CPVC फ्लो गार्ड प्लस पाइप्स आणि फिटिंग्स",
    description: "ब्रँड: प्रिन्स, फिटिंग: सर्व प्रकारच्या फिटिंग्स आणि चिकटवणारे, वापर: गरम आणि थंड पाणी, मटेरियल: CPVC कंपाउंड जो सेल क्लास D-110-2-3-2 प्रमाणे IS: 15778 साठी आहे, रंग: क्रीम, मूळ देश: भारतात बनवले",
    qty: 1,
    photos: [img8],
  },
  {
    id: 9,
    name: "प्रीथी Xpro ड्युओ MG-198",
    description: "ब्रँड: प्रीथी, रंग: डीप ब्लू, उत्पादन माप: 33.5D x 45.7W x 30.8H सेंटीमीटर, ब्लेड मटेरियल: अॅलॉय स्टील, प्लास्टिक, विशेष वैशिष्ट्य: लीक प्रूफ, क्षमता: 2 लिटर, नियंत्रण प्रकार: नॉब नियंत्रण, वस्तूचा वजन: 6200 ग्राम, मॉडेल नाव: Xpro ड्युओ MG 198, डिशवॉशर सुरक्षित: होय",
    qty: 1,
    photos: [img9],
  },
  {
    id: 10,
    name: "ब्लू स्टार CF3-300MPW",
    description: "उत्पादन माप: 67.8D x 114.7W x 85.7H सेंटीमीटर, ब्रँड: ब्लू स्टार, मॉडेल नाव: CF3-300MPW, रंग: पांढरा, मटेरियल: स्टेनलेस स्टील, उपकरण प्रकार: व्यावसायिक किचन चिमणी, वापर/अॅप्लिकेशन: हॉटेल, ब्रँड: Aarav, आकार: कस्टमाइज्ड स्टेनलेस स्टील, मूळ देश: भारतात बनवले, किमान ऑर्डर प्रमाण: 10 फूट, हूड आकार: 5/6 फूट, एक्झॉस्ट फॅन आकार: 18 इंच",
    qty: 1,
    photos: [img10],
  },
  {
    id: 11,
    name: "टीव्ही पाइप",
    description: "मटेरियल: S-S पाइप/m.s पाइप, फिक्सिंग 80 इंच जमिनीपासून",
    qty: 1,
    photos: [img11],
  },
  {
    id: 12,
    name: "किचन एक्झॉस्ट डक्टिंग",
    description: "मटेरियल: गॅल्वनाइज्ड स्टील, आकार: 6 इंच व्यास, लांबी: 10 फूट, वापर: किचन व्हेंटिलेशन",
    qty: 1,
    photos: [img12],
  },
];


const translations = {
  en: {
    title: "YNK",
    formTitle: "Letter of Undertaking - CIVIL WORK YEWALE",
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
      part1: "We, [Name of Partners] Partners of [Name of Firm], hereby give this undertaking to YNK Enterprises for the completion of the Civil Work. We confirm that we will complete all the work as per the product details given above. We understand that if we fail to fulfill this undertaking, YNK Enterprises may take the following action against us:\n1. To rectify any defect in the work at our own cost.\n2. To take responsibility for the financial loss (late receipt of NOC) if the defect is not rectified at the earliest.\n3. To take responsibility for paying the penalty amount of Rs. 5000/- for the defect.\nThis undertaking may be terminated in the following circumstances:\n1. Completion of the work as per the agreed measurements.\n2. Cancellation of the franchise.\nThis undertaking is governed by the laws of [Government Act]. The undersigned, [Name of Partners] Partners of [Name of Firm], agree to abide by the terms and conditions of this undertaking.",
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
    civilWorkItems: civilWorkItemsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "सिव्हिल वर्क वस्तू",
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
      part1: "आम्ही, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, येथे वायएनके एंटरप्राइजेसना सिव्हिल वर्क पूर्ण करण्यासाठी हे अंडरटेकिंग देतो. आम्ही पुष्टी करतो की आम्ही वरील उत्पादन तपशीलानुसार सर्व काम पूर्ण करू. आम्हाला हे समजले आहे की जर आम्ही हे अंडरटेकिंग पूर्ण करू शकलो नाही, तर वायएनके एंटरप्राइजेस आमच्याविरुद्ध खालील कारवाई करू शकते:\n१. कामातील कोणत्याही दोषाची दुरुस्ती आमच्या स्वतःच्या खर्चाने करणे.\n२. जर दोष लवकरात लवकर दुरुस्त केला गेला नाही तर आर्थिक नुकसानाची (NOC ची उशीरा प्राप्ती) जबाबदारी घेणे.\n३. दोषासाठी ५,०००/- रुपये दंडाची रक्कम भरण्याची जबाबदारी घेणे.\nहे अंडरटेकिंग खालील परिस्थितीत रद्द केले जाऊ शकते:\n१. करारानुसार मोजणीनुसार काम पूर्ण होणे.\n२. फ्रँचायझीची रद्दीकरण.\nहे अंडरटेकिंग [सरकारी कायदा] च्या कायद्यांनी नियंत्रित होते. खाली सही करणारे, [साझेदारांचे नाव] [फर्मचे नाव] चे साझेदार, या अंडरटेकिंगच्या अटी आणि शर्तींना मान्य असल्याचे सहमती देतात.",
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
    civilWorkItems: civilWorkItemsMR,
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

const CivilWorkFormyewale = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "2025-09-24T18:08", // Set to 06:08 PM IST, September 24, 2025
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
  const itemsToDisplay = t.civilWorkItems;

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
            {language === "en" ? "Letter of Undertaking Yewale" : "सिव्हिल वर्क वस्तू येवले "}
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
export default CivilWorkFormyewale;