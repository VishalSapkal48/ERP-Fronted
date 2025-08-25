import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";
import { ChevronRight } from "lucide-react";

const MaterialChecklistForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "",
    ownerName: "",
    branch: "",
    signMobile: "",
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
      formTitle: "Civil Work Material Checklist",
      switchLang: "मराठी",
      dateLabel: "Date & Time",
      ownerLabel: "Branch Owner Name",
      branchLabel: "Branch Location",
      signLabel: "Signature & Mobile No.",
      ownerPlaceholder: "Enter Owner Name",
      branchPlaceholder: "Enter Branch Location",
      signPlaceholder: "Enter Signature & Mobile",
      declaration:
        "I, the undersigned, will personally oversee all work at my site. The site plan and material specifications have been explained to me and my vendors. I have understood the plan thoroughly and agree to use only the materials and brands of the specified quality as detailed in this checklist, per the requirements of YNK Company. I will not use materials from any other company.",
      sections: {
        interior: {
          title: "Interior Work Material",
          items: [
            "Ceiling POP: Use either PVC Sheet (plain white) or Gypsum Sheet (white, oil bond). Ceiling height must be up to 9 ft.",
            "Flooring Tiles: 24x24 inches, Plain Ivory (without texture).",
            "Wall Tiles: 24x12 or 18x12 inches, Plain White (without texture).",
          ],
        },
        tvPipe: {
          title: "TV Pipe Assembly",
          items: [
            "Frame: 2x2 inch MS square pipe.",
            "Mounting: Two 14x12 inch (10mm) wooden ply sheets.",
            "Finishing: White oil paint for the pipe.",
            "Electrical: Two 6A sockets behind the sheet for TV & Menu Frame connections.",
          ],
        },
        painting: {
          title: "Painting Material",
          items: [
            "Paints: Asian Paints (Royal White, Tractor Emulsion).",
            "Putty: Birla or JK Cement.",
            "Primer: Asian or Berger.",
          ],
        },
        electrical: {
          title: "Electrical Work Material",
          items: [
            "Wiring: Polycab wires + 4+1 CCTV Cable (D-Link, White).",
            "Fittings: Legrand (White color).",
            "Lights: Philips, Syska, or any local brand with a 2-Year Warranty.",
            "Fans: Bajaj, Usha, or Crompton (White color only).",
            "Lighting Specs: Kitchen (15W, White, Square), Main Board (22W, White, Square).",
          ],
        },
        plumbing: {
          title: "Plumbing Work Material",
          note: "Use quality brands like Plasto, Paras, Supreme, Prince, or Finolex.",
          items: [
            "Water Storage Tank: Min. 2000 Liters.",
            "Sink Fittings: Long-body steel tap for inlet, proper outlet connection.",
          ],
        },
        cctv: {
          title: "CCTV Work Material",
          note: "Only use CP Plus brand cameras.",
          headers: {
            material: "Component",
            type: "Specification",
            qty: "Quantity",
          },
          table: [
            { material: "Camera", type: "Dome", qty: "3" },
            { material: "Camera", type: "Bullet", qty: "1" },
            { material: "DVR Box", type: "4 Channel", qty: "1" },
            { material: "Hard Disk (HDD)", type: "500GB / 1TB", qty: "1" },
            { material: "Power Supply (SMPS)", type: "5 Amp", qty: "1" },
            { material: "Wi-Fi/DVR Rack", type: "2U Rack", qty: "1" },
            { material: "Connectors", type: "BNC (8), DC (4)", qty: "1 Set" },
          ],
        },
        internet: {
          title: "Internet Connection",
          items: ["Minimum 50 Mbps speed with a 1-year subscription package."],
        },
        board: {
          title: "Board & Partition Material",
          note: "Must be ACP (Aluminum Composite Panel) material only.",
          items: [
            "All Partitions & Boards: Timex/Moon brand, Satin White (Code: 142), Matt Finish.",
          ],
        },
      },
    },
    mr: {
      title: "वायएनके",
      formTitle: "सिव्हिल कामाच्या साहित्याची तपासणी सूची",
      switchLang: "English",
      dateLabel: "तारीख आणि वेळ",
      ownerLabel: "शाखा मालकाचे नाव",
      branchLabel: "शाखेचे ठिकाण",
      signLabel: "सही आणि मोबाईल नंबर",
      ownerPlaceholder: "मालकाचे नाव प्रविष्ट करा",
      branchPlaceholder: "शाखेचे ठिकाण प्रविष्ट करा",
      signPlaceholder: "सही आणि मोबाईल प्रविष्ट करा",
      declaration:
        "मी, खाली सही करणारा, माझ्या साईटवरील सर्व कामांची वैयक्तिकरीत्या पाहणी करेन. साईटची योजना आणि साहित्याचे तपशील मला आणि माझ्या विक्रेत्यांना समजावून सांगितले आहेत. मला ती योजना पूर्णपणे समजली आहे आणि YNK कंपनीच्या आवश्यकतेनुसार, मी केवळ ह्या तपासणी सूचीमध्ये नमूद केलेल्या विशिष्ट दर्जाचे साहित्य आणि ब्रँड वापरण्यास सहमत आहे. मी इतर कोणत्याही कंपनीचे साहित्य वापरणार नाही.",
      sections: {
        interior: {
          title: "इंटिरियर कामाचे साहित्य",
          items: [
            "सीलिंग पीओपी: पीव्हीसी शीट (प्लेन पांढरी) किंवा जिप्सम शीट (पांढरी, ऑइल बॉण्ड) वापरा. सीलिंगची उंची ९ फूट अनिवार्य आहे.",
            "फ्लोअरिंग टाइल्स: २४x२४ इंच, प्लेन आयव्हरी (टेक्सचरशिवाय).",
            "वॉल टाइल्स: २४x१२ किंवा १८x१२ इंच, प्लेन पांढरी (टेक्सचरशिवाय).",
          ],
        },
        tvPipe: {
          title: "टीव्ही पाईप असेंब्ली",
          items: [
            "फ्रेम: २x२ इंच एमएस स्क्वेअर पाईप.",
            "माउंटिंग: दोन १४x१२ इंच (१० मिमी) लाकडी प्लाय शीट्स.",
            "फिनिशिंग: पाईपसाठी पांढरा ऑइल पेंट.",
            "इलेक्ट्रिकल: टीव्ही आणि मेनू फ्रेम कनेक्शनसाठी शीटमागे दोन ६A सॉकेट्स.",
          ],
        },
        painting: {
          title: "रंगकामाचे साहित्य",
          items: [
            "पेंट्स: एशियन पेंट्स (रॉयल व्हाईट, ट्रॅक्टर इमल्शन).",
            "पुट्टी: बिर्ला किंवा जेके सिमेंट.",
            "प्रायमर: एशियन किंवा बर्जर.",
          ],
        },
        electrical: {
          title: "इलेक्ट्रिकल कामाचे साहित्य",
          items: [
            "वायरिंग: पॉलीकॅब वायर्स + ४+१ सीसीटीव्ही केबल (डी-लिंक, पांढरी).",
            "फिटिंग्ज: लेग्रँड (पांढरा रंग).",
            "लाइट्स: फिलिप्स, सिस्का किंवा २ वर्षांची वॉरंटी असलेला कोणताही स्थानिक ब्रँड.",
            "फॅन्स: बजाज, उषा किंवा क्रॉम्प्टन (फक्त पांढरा रंग).",
            "लाइटिंग तपशील: किचन (१५W, पांढरा, स्क्वेअर), मुख्य बोर्ड (२२W, पांढरा, स्क्वेअर).",
          ],
        },
        plumbing: {
          title: "प्लंबिंग कामाचे साहित्य",
          note: "प्लास्टो, पारस, सुप्रीम, प्रिन्स किंवा फिनोलेक्स सारखे दर्जेदार ब्रँड वापरा.",
          items: [
            "पाण्याची टाकी: किमान २००० लिटर.",
            "सिंक फिटिंग्ज: इनलेटसाठी लांब बॉडीचा स्टील नळ, योग्य आउटलेट कनेक्शन.",
          ],
        },
        cctv: {
          title: "CCTV कामाचे साहित्य",
          note: "फक्त सीपी प्लस ब्रँडचे कॅमेरे वापरा.",
          headers: { material: "घटक", type: "तपशील", qty: "संख्या" },
          table: [
            { material: "कॅमेरा", type: "डोम", qty: "३" },
            { material: "कॅमेरा", type: "बुलेट", qty: "१" },
            { material: "डीव्हीआर बॉक्स", type: "४ चॅनल", qty: "१" },
            { material: "हार्ड डिस्क (HDD)", type: "५००GB / १TB", qty: "१" },
            { material: "पॉवर सप्लाय (SMPS)", type: "५ Amp", qty: "१" },
            { material: "वाय-फाय/डीव्हीआर रॅक", type: "२यू रॅक", qty: "१" },
            { material: "कनेक्टर्स", type: "BNC (८), DC (४)", qty: "१ सेट" },
          ],
        },
        internet: {
          title: "इंटरनेट कनेक्शन",
          items: ["किमान ५० Mbps स्पीडसह १ वर्षाचे सबस्क्रिप्शन पॅकेज."],
        },
        board: {
          title: "बोर्ड आणि पार्टिशन साहित्य",
          note: "फक्त एसीपी (ॲल्युमिनियम कंपोझिट पॅनेल) मटेरियल वापरावे.",
          items: [
            "सर्व पार्टिशन आणि बोर्ड: टाइमॅक्स/मून ब्रँड, सॅटिन व्हाईट (कोड: १४२), मॅट फिनिश.",
          ],
        },
      },
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
      marginBottom: "20px",
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
      gap: "15px",
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
    note: {
      fontSize: "12px",
      marginBottom: "10px",
      backgroundColor: "#fffbeb",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #facc15",
      color: "#78350f",
      fontWeight: "bold",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
      marginBottom: "8px",
    },
    listItem: {
      fontSize: "12px",
      color: "#374151",
      padding: "4px 0",
      fontWeight: "bold",
    },
    tableWrapper: {
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#e3f2fd",
      marginBottom: "20px",
    },
    th: {
      border: "1px solid #c3d8e8",
      padding: "8px",
      textAlign: "left",
      backgroundColor: "#f0f4f8",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    td: {
      border: "1px solid #c3d8e8",
      padding: "8px",
      textAlign: "left",
      whiteSpace: "pre-wrap",
      fontWeight: "bold",
      color: "#374151",
    },
    footer: {
      textAlign: "center",
      marginTop: "20px",
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
          <button style={styles.langButton} onClick={handleLanguageToggle}>
            {t.switchLang}
          </button>
        </header>
        <h2 style={styles.formTitle}>{t.formTitle}</h2>

        <p style={styles.declaration}>{t.declaration}</p>

        <div style={styles.inputFieldsContainer}>
          <div>
            <label style={styles.label}>{t.dateLabel}:</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>{t.ownerLabel}:</label>
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
            <label style={styles.label}>{t.branchLabel}:</label>
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

        {Object.values(t.sections).map((section, index) => (
          <div key={index} style={styles.sectionContainer}>
            <h3 style={styles.sectionTitle}>{section.title}</h3>
            {section.note && (
              <p style={styles.note}>
                <strong>Note:</strong> {section.note}
              </p>
            )}
            {section.items && (
              <ul style={styles.list}>
                {section.items.map((item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.table && (
              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      {Object.keys(section.headers).map((key) => (
                        <th key={key} style={styles.th}>
                          {section.headers[key]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, idx) => (
                      <tr key={idx}>
                        {Object.keys(section.headers).map((key) => (
                          <td key={key} style={styles.td}>
                            {row[key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        <footer style={styles.footer}>
          <div>
            <label style={styles.footerLabel}>{t.signLabel}:</label>
            <input
              type="text"
              name="signMobile"
              value={formData.signMobile}
              onChange={handleChange}
              placeholder={t.signPlaceholder}
              style={styles.footerInput}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MaterialChecklistForm;