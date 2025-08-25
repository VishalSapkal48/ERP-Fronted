import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";

export default function WorkStepsForm() {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    date: "",
    engineerName: "",
    ownerName: "",
    signature: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  const translations = {
    en: {
      title: "YNK",
      formTitle: "Timeline & Work Steps",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      labels: {
        date: "Date",
        engineerName: "Engineer Name / Sign",
        ownerName: "Branch Owner Name / Sign",
        signature: "Signature",
        mobile: "Mobile Number",
      },
      placeholders: {
        date: "Select Date",
        engineerName: "Enter Engineer Name",
        ownerName: "Enter Owner Name",
        signature: "Enter Signature",
        mobile: "Enter Mobile Number",
      },
      declaration: {
        part1: "On ",
        part2: ", we, Engineer ",
        part3: " and Branch Owner ",
        part4:
          ", confirm that the timeline and work steps outlined below have been reviewed and agreed upon for the completion of the project.",
      },
      note: "Total Estimated Duration: 15-20 Days\n\nNote: This duration may vary due to factors such as payment delays or other unforeseen issues.",
      tableHeaders: ["Step", "Details", "Duration", "Remarks"],
      stepsData: [
        {
          no: 1,
          details:
            "Shop Measurement & Survey:\n- Contact owner and schedule visit\n- Conduct site survey\n- Submit survey form to the office",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 2,
          details:
            "Demolition & Cleanup:\n- Scrape and break walls as needed\n- Remove old fixtures (tank, board, POP)\n- Clear all debris from the site",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 3,
          details:
            "Shutter Servicing & Water Tank:\n- Mandatory shutter servicing\n- Install mezzanine water tank (2000L) if required",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 4,
          details:
            "Civil Construction:\n- Complete necessary construction work in required areas",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 5,
          details:
            "POP Ceiling Framing:\n- Material: Gypsum or PVC\n- Height: 9 feet from the floor level",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 6,
          details:
            "Electrical & Plumbing Rough-in:\n- Electrical wiring (Polycab), CCTV, and speaker cables\n- Plumbing for water tank, sink, and steamer with separate pipelines",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 7,
          details:
            "Wall Tiling:\n- Apply URP chemical and rough plaster\n- Install wall tiles (24x12 or 18x12, Matte Milk White)",
          duration: "3 Days",
          remark: "",
        },
        {
          no: 8,
          details:
            "Flooring:\n- Install floor tiles (24x24, Ivory)\n- Perform acid wash for cleaning",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 9,
          details:
            "Granite Installation:\n- Type: Black Telephone Granite for countertops",
          duration: "½ Day",
          remark: "",
        },
        {
          no: 10,
          details:
            "POP Sheet Installation:\n- Install Gypsum or PVC sheets on the ceiling frame",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 11,
          details:
            "Painting:\n- Apply putty and paint the shop interior and shutter\n- Paint the shutter logo (36x36 inch)",
          duration: "2 Days",
          remark: "",
        },
        {
          no: 12,
          details:
            "Main Board Frame Installation:\n- Install MS or Aluminum frame for the main signage board",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 13,
          details:
            "ACP Board Cladding:\n- Clad the frame with ACP sheets and apply silicone sealant",
          duration: "2 Days",
          remark: "",
        },
        {
          no: 14,
          details:
            "Signage Letter Installation:\n- Install 3D letters on the main board and clean the area",
          duration: "1 Day",
          remark: "",
        },
        {
          no: 15,
          details:
            "Final Setup & Handover:\n- Install all equipment (steel, electrical, plumbing)\n- Set up CCTV & Wi-Fi\n- Submit final details to YNK Office",
          duration: "1 Day",
          remark: "",
        },
      ],
    },
    mr: {
      title: "वायएनके",
      formTitle: "कामाचे टप्पे आणि टाइमलाइन",
      switchLang: "English",
      switchAria: "Switch to English",
      labels: {
        date: "तारीख",
        engineerName: "इंजिनिअरचे नाव / सही",
        ownerName: "शाखा मालकाचे नाव / सही",
        signature: "सही",
        mobile: "मोबाइल नंबर",
      },
      placeholders: {
        date: "तारीख निवडा",
        engineerName: "इंजिनिअरचे नाव प्रविष्ट करा",
        ownerName: "मालकाचे नाव प्रविष्ट करा",
        signature: "सही प्रविष्ट करा",
        mobile: "मोबाइल नंबर प्रविष्ट करा",
      },
      declaration: {
        part1: "दिनांक ",
        part2: " रोजी, आम्ही, इंजिनिअर ",
        part3: " आणि शाखा मालक ",
        part4:
          ", खालील टाइमलाइन आणि कामाचे टप्पे यांचे पुनरावलोकन केले आहे आणि प्रकल्प पूर्ण करण्यासाठी सहमती दर्शवतो.",
      },
      note: "एकूण अंदाजित कालावधी: १५-२० दिवस\n\nटीप: पेमेंटला उशीर किंवा इतर अनपेक्षित समस्यांमुळे हा कालावधी बदलू शकतो.",
      tableHeaders: ["टप्पा", "तपशील", "कालावधी", "शेरा"],
      stepsData: [
        {
          no: 1,
          details:
            "दुकानाचे मोजमाप आणि सर्वेक्षण:\n- मालकाशी संपर्क साधून भेटीचे नियोजन\n- साइटचे सर्वेक्षण करणे\n- सर्वेक्षण फॉर्म ऑफिसमध्ये सादर करणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 2,
          details:
            "तोडफोड आणि स्वच्छता:\n- आवश्यकतेनुसार भिंती घासणे आणि तोडणे\n- जुने साहित्य काढणे (टाकी, बोर्ड, पीओपी)\n- साइटवरील सर्व कचरा साफ करणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 3,
          details:
            "शटर सर्व्हिसिंग आणि पाण्याची टाकी:\n- शटरची अनिवार्य सर्व्हिसिंग\n- आवश्यक असल्यास पोटमाळ्यावर पाण्याची टाकी (२००० लिटर) बसवणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 4,
          details: "सिव्हिल बांधकाम:\n- आवश्यक भागांमध्ये बांधकाम पूर्ण करणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 5,
          details:
            "पीओपी सीलिंग फ्रेमिंग:\n- साहित्य: जिप्सम किंवा पीव्हीसी\n- उंची: जमिनीपासून ९ फूट",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 6,
          details:
            "इलेक्ट्रिकल आणि प्लंबिंगची तयारी:\n- इलेक्ट्रिकल वायरिंग (पॉलीकॅब), सीसीटीव्ही आणि स्पीकर केबल्स टाकणे\n- पाण्याची टाकी, सिंक आणि स्टीमरसाठी स्वतंत्र पाइपलाइनसह प्लंबिंग करणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 7,
          details:
            "भिंतीवर टाइल्स लावणे:\n- URP केमिकल आणि रफ प्लास्टर लावणे\n- वॉल टाइल्स बसवणे (२४x१२ किंवा १८x१२, मॅट मिल्क व्हाइट)",
          duration: "३ दिवस",
          remark: "",
        },
        {
          no: 8,
          details:
            "फ्लोअरिंग:\n- फ्लोअर टाइल्स बसवणे (२४x२४, आयव्हरी)\n- स्वच्छतेसाठी ॲसिड वॉश करणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 9,
          details:
            "ग्रॅनाइट बसवणे:\n- प्रकार: काउंटरटॉपसाठी ब्लॅक टेलिफोन ग्रॅनाइट",
          duration: "½ दिवस",
          remark: "",
        },
        {
          no: 10,
          details:
            "पीओपी शीट बसवणे:\n- सीलिंग फ्रेमवर जिप्सम किंवा पीव्हीसी शीट्स बसवणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 11,
          details:
            "रंगकाम:\n- पुट्टी लावून दुकानाच्या आत आणि शटरला रंग देणे\n- शटर लोगो रंगवणे (३६x३६ इंच)",
          duration: "२ दिवस",
          remark: "",
        },
        {
          no: 12,
          details:
            "मुख्य बोर्ड फ्रेम बसवणे:\n- मुख्य सायनेज बोर्डसाठी एमएस किंवा ॲल्युमिनियम फ्रेम बसवणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 13,
          details:
            "एसीपी बोर्ड क्लॅडिंग:\n- फ्रेमवर एसीपी शीट्स लावणे आणि सिलिकॉन लावणे",
          duration: "२ दिवस",
          remark: "",
        },
        {
          no: 14,
          details:
            "सायनेज लेटर बसवणे:\n- मुख्य बोर्डवर ३डी अक्षरे बसवणे आणि परिसर स्वच्छ करणे",
          duration: "१ दिवस",
          remark: "",
        },
        {
          no: 15,
          details:
            "अंतिम सेटअप आणि हस्तांतरण:\n- सर्व उपकरणे बसवणे (स्टील, इलेक्ट्रिकल, प्लंबिंग)\n- सीसीटीव्ही आणि वाय-फाय सेटअप करणे\n- अंतिम तपशील YNK ऑफिसला सादर करणे",
          duration: "१ दिवस",
          remark: "",
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
    note: {
      fontSize: "12px",
      margin: "20px 0",
      backgroundColor: "#fffbeb",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #facc15",
      color: "#78350f",
      fontWeight: "bold",
      whiteSpace: "pre-line",
    },
    tableWrapper: {
      overflowX: "auto",
      marginBottom: "20px",
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
      verticalAlign: "top",
      fontWeight: "bold",
      whiteSpace: "pre-line",
    },
    footer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
      padding: "15px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      border: "1px solid #e5e7eb",
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
      backgroundColor: "#fff",
      boxSizing: "border-box",
    },
  };

  const t = translations[language];

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
          <p style={styles.declaration}>
            {t.declaration.part1}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder={t.placeholders.date}
              style={styles.declarationInput}
            />
            {t.declaration.part2}
            <input
              type="text"
              name="engineerName"
              value={formData.engineerName}
              onChange={handleChange}
              placeholder={t.placeholders.engineerName}
              style={styles.declarationInput}
            />
            {t.declaration.part3}
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder={t.placeholders.ownerName}
              style={styles.declarationInput}
            />
            {t.declaration.part4}
          </p>
        </div>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                {t.tableHeaders.map((header, i) => (
                  <th key={i} style={styles.th}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.stepsData.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                  }}
                >
                  <td style={styles.td}>{row.no}</td>
                  <td style={styles.td}>{row.details}</td>
                  <td style={styles.td}>{row.duration}</td>
                  <td style={styles.td}>{row.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={styles.note}>{t.note}</p>

        <footer style={styles.footer}>
          <div>
            <label style={styles.footerLabel}>{t.labels.signature}:</label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              placeholder={t.placeholders.signature}
              style={styles.footerInput}
            />
          </div>
          <div>
            <label style={styles.footerLabel}>{t.labels.mobile}:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder={t.placeholders.mobile}
              style={styles.footerInput}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}