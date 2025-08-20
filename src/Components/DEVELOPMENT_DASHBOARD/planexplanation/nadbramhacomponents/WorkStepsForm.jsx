import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";

import parse from "html-react-parser";

export default function WorkStepsForm() {
  const [lang, setLang] = useState("mr");
  const [formData, setFormData] = useState({
    date: "",
    engineerName: "",
    ownerName: "",
    signature: "",
    mobile: "",
  });
  const ownerLabelText =
    lang === "en" ? "Branch Owner Name/Sign" : "शाखा मालक नाव/सही";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const translations = {
    mr: {
      title: "वायएनके",
      formTitle: "कामाच्या स्टेप्स",
      switchLang: "English",
      switchAria: "Switch to English",
      labels: {
        date: "<strong>तारीख</strong>",
        engineer: "<strong>इंजिनियर नाव/सही</strong>",
        owner: "<b>शाखा मालक नाव/सही</b>",
        sign: "स्वाक्षरी",
        mobile: "मोबाईल",
        tableHead: ["नं", "तपशील", "कालावधी", "टीप"],
      },
      note: "एकूण कालावधी: 15-20 दिवस\n\nटीप: पेमेंट विलंबासारख्या समस्यांमुळे कालावधी बदलू शकतो.",
      stepsData: [
        {
          no: "1",
          details:
            "शॉप मोजमाप आणि सर्वे\n\n- मालकाशी संपर्क\n- भेटीचे नियोजन\n- सर्वे करणे\n- फॉर्म ऑफिसला सादर",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "2",
          details:
            "तोडफोड आणि साफसफाई\n\n- भिंती घासणे\n- भिंती तोडणे\n- जुनी टाकी काढणे\n- जुना बोर्ड काढणे\n- जुनी POP काढणे\n- राडारोडा हटवणे",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "3",
          details:
            "शटर आणि टाकी\n\n- शटर सर्व्हिसिंग (अनिवार्य)\n- पोटमाळा: 2000 लिटर टाकी (7' x 10' x 3') (आवश्यक असल्यास)",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "4",
          details: "बांधकाम\n\n- शॉपमधील आवश्यक भागात",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "5",
          details:
            "POP फ्रेमिंग\n\n- सामग्री: GYPSUM किंवा PVC\n- उंची: फ्लोअरिंगपासून 9'",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "6",
          details:
            "इलेक्ट्रिकल आणि प्लंबिंग\n\nइलेक्ट्रिकल:\n- वायर: पॉलीकॅब, स्पीकर, CCTV (4+1)\n- बटणे: ANCHOR पेन्टा/रोमा\n- पॉइंट्स:\n  - हिटर: 16A, MCB x1\n  - फ्रायर: 16A, LCB x1\n  - फ्रिज: 16A, बटणे x2\n  - वर्क टेबल: 16A, बटणे x4\n  - CCTV: 5A x4 (बटन नाही)\n  - वॉल फॅन+स्पीकर: 5A, बटणे x2\n  - पार्टिशन बोर्ड: 5A, बटणे x4\n  - नेम बोर्ड: 16A x5\n  - एक्झॉस्ट फॅन: 5A, बटन x1\n- मेन बोर्ड: 12 मॉडेल x2 किंवा 18 मॉडेल x1\n- इतर: सर्व शॉप MCB, सिलिंग लाइट\n\nप्लंबिंग:\n- टाकी:\n  - 24 तास पाणी: 1000 लिटर\n  - 10 तास पाणी: 2000 लिटर\n  - 4 तास पाणी: 3000 लिटर\n- सिंक:\n  - इनलेट: UPVC 0.5 इंच\n  - आउटलेट: PVC 3 इंच (75MM)\n- स्टीमर:\n  - इनलेट: CPVC 1 इंच (NRV व्हॉल्व्ह)\n  - आउटलेट: PVC 3 इंच (75MM)\n\nटीप: सिंक आणि स्टीमरसाठी स्वतंत्र पाइप",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "7",
          details:
            "भिंतींच्या टाइल्स\n\n- URP केमिकल\n- टाचे आणि रफ प्लास्टर\n- टाइल्स: 24x12 किंवा 18x12\n- रंग: मिल्क व्हाईट (मॅट)",
          duration: "3 दिवस",
          remark: "",
        },
        {
          no: "8",
          details: "फ्लोअरिंग\n\n- टाइल्स: 24x24, आयव्हरी\n- ॲसिड वॉश",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "9",
          details: "ग्रॅनाइट\n\n- प्रकार: ब्लॅक टेलिफोन",
          duration: "अर्धा दिवस",
          remark: "",
        },
        {
          no: "10",
          details: "POP शीट\n\n- सामग्री: GYPSUM किंवा PVC",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "11",
          details:
            "पेंटिंग\n\n- पुट्टी भरणे\n- शॉप आणि शटर रंग\n- लोगो: 36x36 गोल",
          duration: "2 दिवस",
          remark: "",
        },
        {
          no: "12",
          details: "बोर्ड फ्रेम\n\n- सामग्री: एमएस, ॲल्युमिनियम",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "13",
          details: "ACP बोर्ड\n\n- फ्रेमिंग\n- सिलिकॉन भरणे",
          duration: "2 दिवस",
          remark: "",
        },
        {
          no: "14",
          details: "बोर्ड लेटर\n\n- लेटर बसवणे\n- साफसफाई",
          duration: "1 दिवस",
          remark: "",
        },
        {
          no: "15",
          details:
            "अंतिम सेटअप\n\n- स्टील मटेरियल मागवणे\n- इलेक्ट्रिकल:\n  - स्पीकर, फॅन, लाइट, बटणे\n  - एक्झॉस्ट फॅन, फायर टँक\n  - मॅग्नेटिक, स्टोअर\n- प्लंबिंग:\n  - सिंक: नळ, आउटलेट\n  - स्टीमर: नळ, आउटलेट\n- गॅस पाइपलाइन\n- CCTV आणि वायफाय\n- YNK ऑफिसला CCTV तपशील\n- NAADBRAMAHA IDLI ला ईमेल",
          duration: "1 दिवस",
          remark: "",
        },
      ],
    },
    en: {
      title: "YNK",
      formTitle: "Work Steps",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      labels: {
        date: "<strong>Date</strong>",
        engineer: "<strong>Engineer Name/Sign</strong>",
        owner: "<b>Branch Owner Name/Sign</b>",
        sign: "Signature",
        mobile: "Mobile",
        tableHead: ["No", "Details", "Duration", "Remark"],
      },
      note: "Total Duration: 15-20 days\n\nNote: Duration may vary due to payment delays or other issues.",
      stepsData: [
        {
          no: "1",
          details:
            "Shop Measurement and Survey\n\n- Contact owner\n- Plan visit\n- Conduct survey\n- Submit form to office",
          duration: "1 day",
          remark: "",
        },
        {
          no: "2",
          details:
            "Demolition and Cleanup\n\n- Wall scraping\n- Wall breaking\n- Remove old tank\n- Remove old board\n- Remove old POP\n- Clear debris",
          duration: "1 day",
          remark: "",
        },
        {
          no: "3",
          details:
            "Shutter and Tank\n\n- Shutter servicing (mandatory)\n- Mezzanine: 2000L tank (7' x 10' x 3') (if needed)",
          duration: "1 day",
          remark: "",
        },
        {
          no: "4",
          details: "Construction\n\n- In required shop areas",
          duration: "1 day",
          remark: "",
        },
        {
          no: "5",
          details:
            "POP Framing\n\n- Material: GYPSUM or PVC\n- Height: 9' from flooring",
          duration: "1 day",
          remark: "",
        },
        {
          no: "6",
          details:
            "Electrical and Plumbing\n\nElectrical:\n- Wires: Polycab, Speaker, CCTV (4+1)\n- Buttons: ANCHOR Penta/Roma\n- Points:\n  - Heater: 16A, MCB x1\n  - Fryer: 16A, LCB x1\n  - Fridge: 16A, Buttons x2\n  - Work table: 16A, Buttons x4\n  - CCTV: 5A x4 (no button)\n  - Wall fan+speaker: 5A, Buttons x2\n  - Partition board: 5A, Buttons x4\n  - Name board: 16A x5\n  - Exhaust fan: 5A, Button x1\n- Main board: 12 model x2 or 18 model x1\n- Other: All shop MCB, Ceiling light\n\nPlumbing:\n- Tank:\n  - 24hr water: 1000L\n  - 10hr water: 2000L\n  - 4hr water: 3000L\n- Sink:\n  - Inlet: UPVC 0.5 inch\n  - Outlet: PVC 3 inch (75MM)\n- Steamer:\n  - Inlet: CPVC 1 inch (NRV valve)\n  - Outlet: PVC 3 inch (75MM)\n\nNote: Separate pipes for sink and steamer",
          duration: "1 day",
          remark: "",
        },
        {
          no: "7",
          details:
            "Wall Tiles\n\n- URP chemical\n- Wall tacks, rough plaster\n- Tiles: 24x12 or 18x12\n- Color: Milk White (Matt)",
          duration: "3 days",
          remark: "",
        },
        {
          no: "8",
          details: "Flooring\n\n- Tiles: 24x24, Ivory\n- Acid wash",
          duration: "1 day",
          remark: "",
        },
        {
          no: "9",
          details: "Granite\n\n- Type: Black Telephone",
          duration: "Half day",
          remark: "",
        },
        {
          no: "10",
          details: "POP Sheet\n\n- Material: GYPSUM or PVC",
          duration: "1 day",
          remark: "",
        },
        {
          no: "11",
          details:
            "Painting\n\n- Putty filling\n- Paint shop and shutter\n- Logo: 36x36 round",
          duration: "2 days",
          remark: "",
        },
        {
          no: "12",
          details: "Board Frame\n\n- Material: MS, Aluminum",
          duration: "1 day",
          remark: "",
        },
        {
          no: "13",
          details: "ACP Board\n\n- Framing\n- Silicone filling",
          duration: "2 days",
          remark: "",
        },
        {
          no: "14",
          details: "Board Letter\n\n- Install letters\n- Cleaning",
          duration: "1 day",
          remark: "",
        },
        {
          no: "15",
          details:
            "Final Setup\n\n- Order steel material\n- Electrical:\n  - Speaker, fan, light, buttons\n  - Exhaust fan, fire tank\n  - Magnetic, store\n- Plumbing:\n  - Sink: Tap, outlet\n  - Steamer: Tap, outlet\n- Gas pipeline\n- CCTV and Wi-Fi\n- Submit CCTV details to YNK\n- Email to NAADBRAMAHA IDLI",
          duration: "1 day",
          remark: "",
        },
      ],
    },
  };

  const t = translations[lang];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "#e3f2fd",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="YNK Logo"
              style={{ height: "40px", width: "40px" }}
            />
            <h1
              style={{ fontSize: "24px", fontWeight: "bold", color: "#1e40af" }}
            >
              {t.title}
            </h1>
          </div>
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "14px",
              color: "#4b5563",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleLanguageToggle}
            aria-label={t.switchAria}
          >
            {t.switchLang}
          </button>
        </div>

        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
            color: "#1f2937",
          }}
        >
          {t.formTitle}
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#374151",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                <label>{parse(t.labels.date)}</label>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#374151",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                {parse(t.labels.engineer)}
              </label>
              <input
                type="text"
                name="engineerName"
                value={formData.engineerName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#374151",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                {parse(t.labels.owner)}
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s",
                  textWeight: "900px",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "#f8fafc",
                fontSize: "12px",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
              }}
            >
              <thead>
                <tr>
                  {t.labels.tableHead.map((head, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "8px 12px",
                        textAlign: "left",
                        backgroundColor: "#f1f5f9",
                        fontWeight: "600",
                        color: "#1e293b",
                        fontSize: "12px",
                        borderBottom: "1px solid #cbd5e1",
                      }}
                    >
                      {head}
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
                    <td
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        whiteSpace: "pre-wrap",
                        border: "3px solid #e5e7eb",
                        fontWeight: "bold",
                      }}
                    >
                      {row.no}
                    </td>
                    <td
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        whiteSpace: "pre-wrap",
                        border: "3px solid #e5e7eb",
                        fontWeight: "bold",
                      }}
                    >
                      {row.details}
                    </td>
                    <td
                      style={{
                        border: "3px solid #e5e7eb", 
                        padding: "8px 12px",
                        whiteSpace: "pre-wrap",
                        fontSize: "12px",
                        color: "#334155",
                        lineHeight: "1.4",
                        fontWeight: "bold", 
                      }}
                    >
                      {row.duration}
                    </td>

                    <td
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        whiteSpace: "pre-wrap",
                        border: "3px solid #e5e7eb",
                        fontWeight: "bold",
                      }}
                    >
                      {row.remark}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p
          style={{
            fontSize: "13px",
            marginBottom: "10px",
            backgroundColor: "#fff7ed",
            padding: "10px",
            borderRadius: "6px",
            border: "2px solid #fb923c",
            color: "#7c2d12",
            fontWeight: "bold",
              whiteSpace: "pre-line",
          }}
        >
          {t.note}
        </p>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "600",
                marginBottom: "4px",
                fontSize: "12px",
                color: "#374151",
                display: "block",
              }}
            >
              {t.labels.sign}:
            </label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              placeholder={
                lang === "en" ? "Enter Signature" : "स्वाक्षरी प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
              }}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "600",
                marginBottom: "4px",
                fontSize: "12px",
                color: "#374151",
                display: "block",
              }}
            >
              {t.labels.owner}:
            </label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder={
                lang === "en" ? "Enter Owner Name" : "मालकाचे नाव प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
                textWeight: "900px",
              }}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "600",
                marginBottom: "4px",
                fontSize: "12px",
                color: "#374151",
                display: "block",
              }}
            >
              {t.labels.mobile}:
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder={
                lang === "en" ? "Enter Mobile" : "मोबाइल प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
