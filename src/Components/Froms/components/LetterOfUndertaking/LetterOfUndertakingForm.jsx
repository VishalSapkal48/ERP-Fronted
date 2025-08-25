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

// --- English Data for the form items ---
const productDetailsEN = [
  {
    id: 1,
    name: "Wall Tiles Work",
    description:
      "Height: 9 feet, Tile Type: Wall tiles, Finish: Glossy, Material: Ceramic, Size: 18x12 or 12x24 Inch",
    qty: 1,
    photos: [image],
  },
  {
    id: 2,
    name: "Nano Ivory Flooring Tiles",
    description:
      "Type: Nano Ivory, Size: 2x2 ft (600x600 mm), Color: White/Gray, Material: Ceramic, Thickness: 4 mm",
    qty: 1,
    photos: [image2],
  },
  {
    id: 3,
    name: "POP Sheet (PVC)",
    description:
      "Color: White, Width: 10 Inch, Length: 10 Feet, Material: PVC, Thickness: 10 mm, Usage: Ceiling",
    qty: 1,
    photos: [image4],
  },
  {
    id: 4,
    name: "POP False Ceiling Channel",
    description:
      "Material: POP Ceiling, Brand: USG Boral, Shape: Rectangular, Usage: Residential & Commercial",
    qty: 1,
    photos: [image5],
  },
  {
    id: 5,
    name: "Shop Ceiling Paint",
    description:
      "Brand: Asian Paints, Type: Apcolite Premium Gloss Enamel, Color: Full White",
    qty: 1,
    photos: [image6],
  },
  {
    id: 6,
    name: "Shop Shutter Logo Painting",
    description:
      "Paint: Asian Oil Paint, Color: White Matte, Logo Size: 3x3 ft (Round)",
    qty: 1,
    photos: [image7],
  },
  {
    id: 7,
    name: "Polyester Folding Shade Awning",
    description:
      "Material: Polyester, Frame: Mild Steel (Paint Finish), Position: Exterior, Color: Red and White mix",
    qty: 1,
    photos: [image8],
  },
  {
    id: 8,
    name: "CPVC Pipes & Fittings",
    description:
      "Brand: Prince (Flow Guard Plus), Usage: Hot & Cold Water, Material: CPVC Compound",
    qty: 1,
    photos: [image9],
  },
  {
    id: 9,
    name: "Mixer Grinder",
    description:
      "Brand: Preethi, Model: Xpro Duo MG-198, Color: Deep Blue, Capacity: 2 Liters",
    qty: 1,
    photos: [image10],
  },
  {
    id: 10,
    name: "Deep Freezer",
    description:
      "Brand: Blue Star, Model: CF3-300MPW, Color: White, Door Material: Stainless Steel",
    qty: 1,
    photos: [image11],
  },
  {
    id: 11,
    name: "Kitchen Exhaust Ducting",
    description:
      "Type: Commercial Kitchen Chimney, Hood Size: 5/6 ft, Exhaust Fan: 18 inch, Material: Stainless Steel",
    qty: 1,
    photos: [image12],
  },
  {
    id: 12,
    name: "TV Mounting Pipe",
    description:
      "Material: SS or MS Pipe, Fixing Height: 80 inches from ground",
    qty: 1,
    photos: [image13],
  },
];

// --- Translations ---
const translations = {
  en: {
    title: "YNK",
    formTitle: "Letter of Undertaking - Civil Works",
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
    undertaking: {
      part1: "We, ",
      part2: " of ",
      part3:
        ", hereby provide this undertaking to YNK Enterprises for the completion of all civil works and equipment installation. We confirm that we will complete all tasks as per the product specifications detailed below. We understand that failure to comply with this undertaking may result in YNK Enterprises taking the following actions against us:\n\n1. Rectification of any defects at our own cost.\n2. Assumption of full responsibility for any financial loss incurred due to delays (e.g., late NOC receipt) if defects are not promptly rectified.\n3. Liability for a penalty of Rs. 50,000/- for any unresolved defects.",
    },
    tableHeaders: {
      no: "No.",
      name: "Item Name",
      description: "Description & Specification",
      qty: "Qty",
      photos: "Photos",
    },
    productDetails: productDetailsEN,
  },
  mr: {
    title: "वायएनके",
    formTitle: "वचनपत्र - सिव्हिल कामे",
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
    undertaking: {
      part1: "आम्ही, ",
      part2: " चे ",
      part3:
        ", याद्वारे YNK एंटरप्रायझेसला सर्व सिव्हिल कामे आणि उपकरणे बसवण्याच्या पूर्ततेसाठी हे वचनपत्र देत आहोत. आम्ही पुष्टी करतो की आम्ही खाली दिलेल्या उत्पादन तपशीलानुसार सर्व कामे पूर्ण करू. आम्ही समजतो की या वचनपत्राचे पालन करण्यात अयशस्वी झाल्यास, YNK एंटरप्रायझेस आमच्यावर खालील कारवाई करू शकते:\n\n१. आमच्या स्वतःच्या खर्चाने कोणत्याही त्रुटी सुधारणे.\n२. त्रुटी त्वरित न सुधारल्यास होणाऱ्या कोणत्याही आर्थिक नुकसानीची (उदा. एनओसी मिळण्यास उशीर) संपूर्ण जबाबदारी घेणे.\n३. कोणत्याही न सुटलेल्या त्रुटींसाठी रु. ५०,०००/- दंडाची जबाबदारी घेणे.",
    },
    tableHeaders: {
      no: "क्र.",
      name: "वस्तूचे नाव",
      description: "वर्णन आणि तपशील",
      qty: "नग",
      photos: "फोटो",
    },
    productDetails: [
      {
        id: 1,
        name: "वॉल टाइल्सचे काम",
        description:
          "उंची: ९ फूट, टाइल प्रकार: वॉल टाइल्स, फिनिश: ग्लॉसी, साहित्य: सिरॅमिक, आकार: १८x१२ किंवा १२x२४ इंच",
        qty: 1,
        photos: [image],
      },
      {
        id: 2,
        name: "नॅनो आयव्हरी फ्लोअरिंग टाइल्स",
        description:
          "प्रकार: नॅनो आयव्हरी, आकार: २x२ फूट (६००x६०० मिमी), रंग: पांढरा/ग्रे, साहित्य: सिरॅमिक, जाडी: ४ मिमी",
        qty: 1,
        photos: [image2],
      },
      {
        id: 3,
        name: "पीओपी शीट (पीव्हीसी)",
        description:
          "रंग: पांढरा, रुंदी: १० इंच, लांबी: १० फूट, साहित्य: पीव्हीसी, जाडी: १० मिमी, वापर: सीलिंग",
        qty: 1,
        photos: [image4],
      },
      {
        id: 4,
        name: "पीओपी फॉल्स सीलिंग चॅनल",
        description:
          "साहित्य: पीओपी सीलिंग, ब्रँड: युएसजी बोराल, आकार: आयताकृती, वापर: निवासी आणि व्यावसायिक",
        qty: 1,
        photos: [image5],
      },
      {
        id: 5,
        name: "दुकानाचे सीलिंग (कलर काम)",
        description:
          "ब्रँड: एशियन पेंट्स, प्रकार: ॲपकोलाइट प्रीमियम ग्लॉस इनॅमल, रंग: पूर्ण पांढरा",
        qty: 1,
        photos: [image6],
      },
      {
        id: 6,
        name: "दुकानाच्या शटरचा लोगो (पेंटिंग)",
        description:
          "पेंट: एशियन ऑइल पेंट, रंग: पांढरा मॅट, लोगो आकार: ३x३ फूट (गोल)",
        qty: 1,
        photos: [image7],
      },
      {
        id: 7,
        name: "पॉलिस्टर फोल्डिंग शेड / Awning",
        description:
          "साहित्य: पॉलिस्टर, फ्रेम: माइल्ड स्टील (पेंट फिनिश), जागा: बाहेरील, रंग: लाल आणि पांढरा मिक्स",
        qty: 1,
        photos: [image8],
      },
      {
        id: 8,
        name: "सीपीव्हीसी पाईप्स आणि फिटिंग्ज",
        description:
          "ब्रँड: प्रिन्स (फ्लो गार्ड प्लस), वापर: गरम आणि थंड पाणी, साहित्य: सीपीव्हीसी कंपाऊंड",
        qty: 1,
        photos: [image9],
      },
      {
        id: 9,
        name: "मिक्सर ग्राइंडर",
        description:
          "ब्रँड: प्रीथी, मॉडेल: एक्सप्रो ड्युओ एमजी-१९८, रंग: डीप ब्लू, क्षमता: २ लिटर",
        qty: 1,
        photos: [image10],
      },
      {
        id: 10,
        name: "डीप फ्रीझर",
        description:
          "ब्रँड: ब्लू स्टार, मॉडेल: सीएफ३-३००एमपीडब्ल्यू, रंग: पांढरा, दरवाजा साहित्य: स्टेनलेस स्टील",
        qty: 1,
        photos: [image11],
      },
      {
        id: 11,
        name: "किचन एक्झॉस्ट डक्टिंग",
        description:
          "प्रकार: कमर्शियल किचन चिमणी, हूड आकार: ५/६ फूट, एक्झॉस्ट फॅन: १८ इंच, साहित्य: स्टेनलेस स्टील",
        qty: 1,
        photos: [image12],
      },
      {
        id: 12,
        name: "टीव्ही माउंटिंग पाईप",
        description:
          "साहित्य: एसएस किंवा एमएस पाईप, बसवण्याची उंची: जमिनीपासून ८० इंच",
        qty: 1,
        photos: [image13],
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

const LetterOfUndertakingForm = () => {
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
  const itemsToDisplay = t.productDetails;

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
          <section style={styles.sectionContainer}>
            <h3 style={styles.sectionTitle}>
              {language === "en" ? "Letter of Undertaking" : "वचनपत्र"}
            </h3>
            <p style={styles.declaration}>
              {t.undertaking.part1}
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                placeholder={t.partnerPlaceholder}
                style={styles.declarationInput}
              />
              {t.undertaking.part2}
              <input
                type="text"
                name="firmName"
                value={formData.firmName}
                onChange={handleChange}
                placeholder={t.firmPlaceholder}
                style={styles.declarationInput}
              />
              {t.undertaking.part3}
            </p>
          </section>
        </div>

        <section style={styles.sectionContainer}>
          <h3 style={styles.sectionTitle}>
            {language === "en"
              ? "Product & Work Details"
              : "उत्पादन आणि कामाचा तपशील"}
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

export default LetterOfUndertakingForm;