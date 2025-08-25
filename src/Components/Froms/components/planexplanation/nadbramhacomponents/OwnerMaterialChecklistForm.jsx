import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";
import { ChevronRight } from "lucide-react";

const OwnerMaterialChecklistForm = () => {
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

  const translations = {
    en: {
      title: "YNK",
      formTitle: "Owner Material Checklist",
      switchLang: "मराठी",
      dateLabel: "Date",
      ownerLabel: "Branch Owner Name",
      branchLabel: "Branch Location",
      footerOwner: "OWNER'S NAME",
      footerSign: "SIGNATURE & MOBILE NO.",
      ownerPlaceholder: "Enter Owner Name",
      signPlaceholder: "Enter Signature or Mobile",
      declaration:
        "I, the undersigned, will personally oversee all work at my site. The site plan and material specifications have been explained to me and my vendors. I have understood the plan thoroughly and agree to use only the materials and brands of the specified quality as detailed in this checklist, per the requirements of YNK Company. I will not use materials from any other company.",
      sections: {
        interior: {
          title: "Interior Work Material",
          items: [
            "POP/PVC Sheet or Gypsum Sheet (Height up to 9ft) is compulsory.",
            "Flooring Tiles must be Plain Ivory, Size: 2x2 ft.",
            "Wall Tiles must be Plain White/Milky White, Size: 18x12 or 24x12 inches (Horizontal placement).",
          ],
        },
        painting: {
          title: "Painting Work Material",
          headers: {
            work: "Area",
            colour: "Colour",
            company: "Company",
            code: "Code/Size",
          },
          table: [
            { work: "Shutter", colour: "Grey", company: "Asian", code: "0616" },
            {
              work: "Kitchen Ceiling",
              colour: "Pure Black",
              company: "Asian",
              code: "N/A",
            },
            {
              work: "Exterior Wall",
              colour: "Grey",
              company: "Asian",
              code: "0616",
            },
            {
              work: "Store Room",
              colour: "Grey",
              company: "Asian",
              code: "0616",
            },
            {
              work: "Shutter Logo",
              colour: "White (Matte)",
              company: "Asian (Oil)",
              code: "36x36 inches",
            },
          ],
        },
        electrical: {
          title: "Electrical Work Material",
          note: "Kindly check for proper earthing before starting any electrical work.",
          items: [
            "Wire Sizes: 4.5mm (Main Line), 2.5mm (16A points), 1.5mm (All other points).",
            "CCTV Wire: 4+1 D-Link (White).",
            "Switchboards: Legrand/Anchor (White).",
            "Lights: Philips/Syska or any local brand with a 2-Year Warranty.",
            "Audio: Speaker + Amplifier (any local brand with a 1-Year Warranty).",
            "Ventilation: Exhaust fan / ducting is compulsory (as per site requirements).",
          ],
          headers: {
            area: "Area",
            type: "Light Type",
            colour: "Colour",
            watt: "Wattage",
          },
          table: [
            {
              area: "Kitchen",
              type: "Square",
              colour: "Full White",
              watt: "15W",
            },
            {
              area: "Customer Area",
              type: "Square",
              colour: "Warm White",
              watt: "15W",
            },
            {
              area: "Main Board",
              type: "Square",
              colour: "Warm White",
              watt: "22W",
            },
            {
              area: "Canopy/Exterior",
              type: "Round",
              colour: "Warm White",
              watt: "7W / 9W",
            },
          ],
        },
        plumbing: {
          title: "Plumbing Work Material",
          note: "Use quality brands like Plasto, Paras, Supreme, Prince, or Finolex.",
          items: [
            "Water Tank: Minimum 2000L / Maximum 4000L capacity.",
            "Inlet, Overflow, and Outlet pipes are required for the tank.",
            "Outlet Pipe: 1 inch, converting to ¾ inch at endpoints.",
            "Separate connections required for Sink (UPVC) and Steamer (CPVC).",
            "Shop Drainage Outlet: 3 inches.",
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
          title: "Board and Partition Material",
          note: "Must be ACP (Aluminum Composite Panel) material only.",
          headers: {
            use: "Application",
            company: "Company",
            colour: "Colour",
            code: "Code",
            design: "Finish",
          },
          table: [
            {
              use: "Main Partition",
              company: "Timex/Moon",
              colour: "Traffic Yellow",
              code: "128",
              design: "Matt",
            },
            {
              use: "Main Board",
              company: "Timex/Moon",
              colour: "Black",
              code: "114",
              design: "Matt",
            },
            {
              use: "Other Partitions",
              company: "Timex/Moon",
              colour: "Satin White",
              code: "142",
              design: "Matt",
            },
          ],
        },
        gas: {
          title: "Gas Pipeline",
          items: [
            "Material: GI (Galvanized Iron)",
            "Company: Jindal",
            "Pipe Size: ½ inch",
          ],
        },
        shed: {
          title: "Rolling Shed/Awning",
          items: [
            "Colour: Plain Black",
            "Front Flap (Zallar): 6 inches, plain",
          ],
        },
        ducting: {
          title: "Ducting Work",
          items: [
            "Duct Pipe Size: 14x14 inches",
            "Hood Size: As per kitchen area",
            "Exhaust Fan: 18 inches (Compulsory)",
          ],
        },
      },
    },
    mr: {
      title: "वायएनके",
      formTitle: "मालक साहित्य तपासणी सूची",
      switchLang: "English",
      dateLabel: "तारीख",
      ownerLabel: "शाखा मालकाचे नाव",
      branchLabel: "शाखेचे ठिकाण",
      footerOwner: "मालकाचे नाव",
      footerSign: "स्वाक्षरी आणि मोबाइल नं.",
      ownerPlaceholder: "मालकाचे नाव प्रविष्ट करा",
      signPlaceholder: "स्वाक्षरी किंवा मोबाइल प्रविष्ट करा",
      declaration:
        "मी, खाली सही करणारा, माझ्या साइटवरील सर्व कामांची वैयक्तिकरित्या पाहणी करेन. साइटची योजना आणि साहित्याचे तपशील मला आणि माझ्या विक्रेत्यांना समजावून सांगितले आहेत. मला ती योजना पूर्णपणे समजली आहे आणि YNK कंपनीच्या आवश्यकतेनुसार, मी केवळ या तपासणी सूचीमध्ये नमूद केलेल्या विशिष्ट दर्जाचे साहित्य आणि ब्रँड वापरण्यास सहमत आहे. मी इतर कोणत्याही कंपनीचे साहित्य वापरणार नाही.",
      sections: {
        interior: {
          title: "इंटिरियर कामाचे साहित्य",
          items: [
            "पीओपी/पीव्हीसी शीट किंवा जिप्सम शीट (उंची ९ फूट पर्यंत) अनिवार्य आहे.",
            "फ्लोअरिंग टाइल्स प्लेन आयव्हरी असाव्यात, आकार: २x२ फूट.",
            "वॉल टाइल्स प्लेन पांढऱ्या/मिल्की पांढऱ्या असाव्यात, आकार: १८x१२ किंवा २४x१२ इंच (आडव्या पद्धतीने लावाव्यात).",
          ],
        },
        painting: {
          title: "रंगकामाचे साहित्य",
          headers: {
            work: "भाग",
            colour: "रंग",
            company: "कंपनी",
            code: "कोड/आकार",
          },
          table: [
            { work: "शटर", colour: "ग्रे", company: "एशियन", code: "0616" },
            {
              work: "किचन सीलिंग",
              colour: "पूर्ण काळा",
              company: "एशियन",
              code: "N/A",
            },
            {
              work: "बाहेरील भिंत",
              colour: "ग्रे",
              company: "एशियन",
              code: "0616",
            },
            {
              work: "स्टोअर रूम",
              colour: "ग्रे",
              company: "एशियन",
              code: "0616",
            },
            {
              work: "शटर लोगो",
              colour: "पांढरा (मॅट)",
              company: "एशियन (ऑइल)",
              code: "३६x३६ इंच",
            },
          ],
        },
        electrical: {
          title: "इलेक्ट्रिकल कामाचे साहित्य",
          note: "कृपया कोणतेही इलेक्ट्रिकल काम सुरू करण्यापूर्वी योग्य अर्थिंग तपासा.",
          items: [
            "वायरचे आकार: ४.५ मिमी (मुख्य लाइन), २.५ मिमी (१६A पॉइंट्स), १.५ मिमी (इतर सर्व पॉइंट्स).",
            "सीसीटीव्ही वायर: ४+१ डी-लिंक (पांढरी).",
            "स्विचबोर्ड: लेग्रँड/अँकर (पांढरे).",
            "लाइट्स: फिलिप्स/सिस्का किंवा २ वर्षांची वॉरंटी असलेला कोणताही स्थानिक ब्रँड.",
            "ऑडिओ: स्पीकर + ॲम्प्लिफायर (१ वर्षाची वॉरंटी असलेला कोणताही स्थानिक ब्रँड).",
            "व्हेंटिलेशन: एक्झॉस्ट फॅन/डक्टिंग अनिवार्य आहे (साइटच्या गरजेनुसार).",
          ],
          headers: {
            area: "जागा",
            type: "लाइटचा प्रकार",
            colour: "रंग",
            watt: "वॅटेज",
          },
          table: [
            {
              area: "किचन",
              type: "स्क्वेअर",
              colour: "पूर्ण पांढरा",
              watt: "१५W",
            },
            {
              area: "ग्राहक क्षेत्र",
              type: "स्क्वेअर",
              colour: "वॉर्म व्हाईट",
              watt: "१५W",
            },
            {
              area: "मुख्य बोर्ड",
              type: "स्क्वेअर",
              colour: "वॉर्म व्हाईट",
              watt: "२२W",
            },
            {
              area: "कॅनोपी/बाहेरील",
              type: "राउंड",
              colour: "वॉर्म व्हाईट",
              watt: "७W / ९W",
            },
          ],
        },
        plumbing: {
          title: "प्लंबिंग कामाचे साहित्य",
          note: "प्लास्टो, पारस, सुप्रीम, प्रिन्स किंवा फिनोलेक्स सारखे दर्जेदार ब्रँड वापरा.",
          items: [
            "पाण्याची टाकी: किमान २००० लि / कमाल ४००० लि क्षमता.",
            "टाकीसाठी इनलेट, ओव्हरफ्लो आणि आउटलेट पाईप आवश्यक आहेत.",
            "आउटलेट पाईप: १ इंच, शेवटच्या टोकावर ¾ इंचमध्ये रूपांतरित.",
            "सिंक (UPVC) आणि स्टीमर (CPVC) साठी स्वतंत्र कनेक्शन आवश्यक.",
            "दुकानाचे ड्रेनेज आउटलेट: ३ इंच.",
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
          headers: {
            use: "वापर",
            company: "कंपनी",
            colour: "रंग",
            code: "कोड",
            design: "फिनिश",
          },
          table: [
            {
              use: "मुख्य पार्टिशन",
              company: "टाइमॅक्स/मून",
              colour: "ट्रॅफिक यलो",
              code: "१२८",
              design: "मॅट",
            },
            {
              use: "मुख्य बोर्ड",
              company: "टाइमॅक्स/मून",
              colour: "काळा",
              code: "११४",
              design: "मॅट",
            },
            {
              use: "इतर पार्टिशन",
              company: "टाइमॅक्स/मून",
              colour: "सॅटिन व्हाइट",
              code: "१४२",
              design: "मॅट",
            },
          ],
        },
        gas: {
          title: "गॅस पाइपलाइन",
          items: [
            "साहित्य: जीआय (गॅल्व्हनाइज्ड आयर्न)",
            "कंपनी: जिंदाल",
            "पाईपचा आकार: ½ इंच",
          ],
        },
        shed: {
          title: "रोलिंग शेड/ऑनिंग",
          items: ["रंग: साधा काळा", "पुढील झालर: ६ इंच, प्लेन"],
        },
        ducting: {
          title: "डक्टिंगचे काम",
          items: [
            "डक्ट पाईपचा आकार: १४x१४ इंच",
            "हूडचा आकार: किचनच्या क्षेत्रानुसार",
            "एक्झॉस्ट फॅन: १८ इंच (अनिवार्य)",
          ],
        },
      },
    },
  };

  // --- Component Styles (Styles remain unchanged) ---
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
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      fontSize: "12px",
      color: "#374151",
      padding: "6px 0",
      fontWeight: "bold",
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
      textTransform: "capitalize",
    },
    td: {
      border: "1px solid #e5e7eb",
      padding: "10px",
      color: "#374151",
      verticalAlign: "middle",
      fontWeight: "bold",
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

        {Object.values(t.sections).map((section, index) => (
          <div key={index} style={styles.sectionContainer}>
            <h3 style={styles.sectionTitle}>{section.title}</h3>
            {section.note && (
              <p style={styles.note}>
                <strong>Note:</strong> {section.note}
              </p>
            )}
            {section.items && (
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {section.items.map((item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    <ChevronRight
                      size={16}
                      style={{
                        marginRight: "8px",
                        color: "#1e40af",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
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
                      <tr
                        key={idx}
                        style={{
                          backgroundColor:
                            idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                        }}
                      >
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

export default OwnerMaterialChecklistForm;