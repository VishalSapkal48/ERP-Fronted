import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";

export default function WorkStepsForm() {
  const [lang, setLang] = useState("mr");
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
    setLang((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const translations = {
    mr: {
      title: "वायएनके",
      formTitle: "काम करण्याच्या स्टेप्स",
      switchLang: "English",
      switchAria: "Switch to English",
      labels: {
        date: "<strong>तारीख</strong>",
        engineer: "<strong>इंजिनियर नाव/सही</strong>",
        owner: "<b>शाखा मालक नाव/सही</b>",
        sign: "स्वाक्षरी",
        mobile: "मोबाईल",
        tableHead: ["नं", "तपशील", "कालावधी", "REMARK"],
      },
      note: "Total Days: 15/20 days\n\nNote:- काही आडचणी मुळे कामात कमी जास्त होते. उदा. पेमेंट",
    },
    en: {
      title: "YNK",
      formTitle: "Work Execution Steps",
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
      note: "Total Days: 15/20 days\nNote: Work duration may vary due to issues like payment delays.",
    },
  };

  const stepsData = [
    [
      "1",
      lang === "mr"
        ? "शॉप चे मोजमाप\nowner ला कॉल कारणे\nशॉप व्हिसिट प्लॅन करणे\nशॉप सर्वे करणे\nसर्वे फॉर्म ऑफिस मध्ये जमा करणे"
        : "Shop measurement\nCall the owner\nPlan shop visit\nConduct shop survey\nSubmit survey form to office",
      "1 day",
      "",
    ],
    [
      "2",
      lang === "mr"
        ? "तोडफोड व रबिट उचलणे\nभीतघासणे:\nभीत तोडणे:\nजुनी पाण्याची टाकी काढणे:\nजुना बोड काढणे:\nजुनी pop काढणे:\nरॅबीट उचलणे:"
        : "Demolition and debris removal\nWall scraping:\nWall breaking:\nRemove old water tank:\nRemove old board:\nRemove old POP:\nDebris removal:",
      "1 day",
      "",
    ],
    [
      "3",
      lang === "mr"
        ? "शटर सर्विसिंग, पाण्याच्या टाकीचे लँडिंग करणे\nशटर सेर्विसिग हे कंपलसरी करणे\nपोटमाळा करायचा असेल तर तो २००० वॉटर टाकी बसेल एवढा करावा (7'x 10'x 3')"
        : "Shutter servicing, water tank landing\nShutter servicing is compulsory\nIf mezzanine is needed, it should accommodate a 2000L water tank (7'x 10'x 3')",
      "1 day",
      "",
    ],
    [
      "4",
      lang === "mr"
        ? "शॉप मध्ये काही ठिकाणी बांधकाम असेल तर बांधकाम करणे"
        : "Construction work if required at certain places in the shop",
      "1 day",
      "",
    ],
    [
      "5",
      lang === "mr"
        ? "शॉप pop फ्रेमिंग करणे (GYPSUM / PVC)\nफ्लोररिंग पासून ९' हाईट pop फ्रेमिंग करणे"
        : "Shop POP framing (GYPSUM / PVC)\nPOP framing from flooring to 9' height",
      "1 day",
      "",
    ],
    [
      "6",
      lang === "mr"
        ? 'इलेक्ट्रिकल वर्क करणे\nवायर :- पॉलीकॅप + स्पीकर + CCTV 4+1\nबटन :- ANCHOR पेन्टा / रोमा\nहिट्टर पॉईंट 16A + MCB X 1\nफ्रायर पॉईंट 16A + LCB X 1\nफ्रिज पॉईंट 16A + बटन X 2\nवर्क टेबल पॉईंट 16A + बटन X 4\nमेन बोर्ड 12 मॉडेल X 2 (18 मॉडेल X 1)\nसर्व शॉप MCB\nCCTV पॉईंट 5A X 4 (नो बटन)\nवॉल फॅन + स्पीकर पॉईंट 5A + बटन X 2\nसिलिंग लाइट\nपार्टिशन बोर्ड पॉईंट 5A + बटन X 4 (बिलिंग मशीन + मेनू फ्रेम)\nनेम बोर्ड पावर पॉईंट 16A X 5\nएक्झॉस्ट फॅन पॉईंट 5A + बटन X 1\nप्लंबर वर्क करणे\nशॉप मध्ये पाणी 24 तास असेल तर 1000 लिटर टाकी बसवावी\nशॉप मध्ये पाणी 10 तास असेल तर 2000 लिटर टाकी बसवावी\nशॉप मध्ये पाणी 4 तास असेल तर 3000 लिटर टाकी बसवावी\nसिंक इनलेट पॉईंट UPVC पाईप 1/2" इंच आणि आउटलेट PVC पाईप 3" इंच (75MM) वापरावा\nस्टीमर इनलेट पाईप CPVC 1" इंच आणि त्याला एक NRV वॉल्व्ह हा कंपलसरी टाकावा\nआउटलेट हा PVC पाईप 3" इंच (75MM) वापरावा\nनोट :- सिंक आणि स्टीमर चे पाण्याच्या टाकीला वेगवेगळे इनलेट पाईप जोडावे'
        : 'Electrical work\nWire: Polycab + Speaker + CCTV 4+1\nButtons: ANCHOR Penta / Roma\nHeater point 16A + MCB X 1\nFryer point 16A + LCB X 1\nFridge point 16A + Button X 2\nWork table point 16A + Button X 4\nMain board 12 model X 2 (18 model X 1)\nAll shop MCB\nCCTV point 5A X 4 (no button)\nWall fan + speaker point 5A + Button X 2\nCeiling light\nPartition board point 5A + Button X 4 (billing machine + menu frame)\nName board power point 16A X 5\nExhaust fan point 5A + Button X 1\nPlumbing work\nIf water is available 24 hours, install 1000L tank\nIf water is available 10 hours, install 2000L tank\nIf water is available 4 hours, install 3000L tank\nSink inlet point UPVC pipe 1/2" inch and outlet PVC pipe 3" inch (75MM)\nSteamer inlet pipe CPVC 1" inch with compulsory NRV valve\nOutlet PVC pipe 3" inch (75MM)\nNote: Separate inlet pipes for sink and steamer to water tank',
      "1 day",
      "",
    ],
    [
      "7",
      lang === "mr"
        ? "यूआरपी केमिकल भिंतीवर मारणे, टाइल्स भिंतीला लावणे\nटाईल्स काम\nभिंतीला टाचे मारणे\nभिंतीला URP केमिकल मारणे\nभिंतीला रफ प्लास्टर करणे\nभिंतीला टाईल्स लावणे\nटाईल्स साइझ (24X12, 18X12)\nटाईल्स कलर :- मिल्क प्लेन व्हाईट (मॅट फिनिश)"
        : "Apply URP chemical on walls, install wall tiles\nTiles work\nApply tacks on walls\nApply URP chemical on walls\nRough plaster on walls\nInstall wall tiles\nTile size (24X12, 18X12)\nTile color: Milk Plain White (Matt Finish)",
      "3 days",
      "",
    ],
    [
      "8",
      lang === "mr"
        ? "फ्लोरिंग टाईल्स लावणे (24X24 PLANE IVORY)\nअॅसिड वॉश करणे"
        : "Install flooring tiles (24X24 PLANE IVORY)\nAcid wash",
      "1 day",
      "",
    ],
    [
      "9",
      lang === "mr"
        ? "ग्रेनाईट लावणे (BLACK TELEPHONE)"
        : "Granite installation (BLACK TELEPHONE)",
      "Half day",
      "",
    ],
    [
      "10",
      lang === "mr"
        ? "POP शीट लावणे (GYPSUM / PVC)"
        : "POP sheet installation (GYPSUM / PVC)",
      "1 day",
      "",
    ],
    [
      "11",
      lang === "mr"
        ? "पेंटिंग पुट्टी भरणे टचअप काढणे\nशॉप व शटर कलर करणे\nशटर लोगो काढणे (36X36 गोळ)"
        : "Painting putty filling and touch-up\nColor shop and shutter\nShutter logo (36X36 round)",
      "2 days",
      "",
    ],
    [
      "12",
      lang === "mr"
        ? "बोर्ड एमएस फ्रेमींग, बोर्ड अॅल्युमिनियम फ्रेमींग"
        : "Board MS framing, board aluminum framing",
      "1 day",
      "",
    ],
    [
      "13",
      lang === "mr"
        ? "बोर्ड एसीपी फ्रेमींग व सिलिकॉन भरणे"
        : "Board ACP framing and silicone filling",
      "2 days",
      "",
    ],
    [
      "14",
      lang === "mr"
        ? "बोर्ड लेटर लावणे, साफसफाई करणे"
        : "Board letter installation, cleaning",
      "1 day",
      "",
    ],
    [
      "15",
      lang === "mr"
        ? "YNK टीम साइड स्टील मटेरियल मागवणे\nसेटअप लावणे पूर्ण शॉप\nइलेक्ट्रिकल फायनल काम करणे\nस्पीकर, फॅन, लाइट, बटन बसवणे\nएक्झॉस्ट फॅन बसवणे\nफायर टँक बसवणे\nमॅग्नेटिक बसवणे, स्टोअर बसवणे\nप्लंबर फायनल काम करणे\nसिंक नळ बसवणे, आउटलेट बसवणे\nस्टीमर नळ बसवणे, आउटलेट बसवणे\nगॅस पाइप लाइन चे फायनल काम करणे\nCCTV चे काम करणे\nवायफाय चे काम करणे\nYNK ऑफिस मध्ये CCTV डिटेल्स देणे कंपलसरी त्यानंतर NAADBRAMAHA IDLI ऑफिस मध्ये MAIL पाठवला जातो"
        : "YNK team orders side steel material\nComplete shop setup\nFinal electrical work\nInstall speaker, fan, light, buttons\nInstall exhaust fan\nInstall fire tank\nInstall magnetic, store\nFinal plumbing work\nInstall sink tap, outlet\nInstall steamer tap, outlet\nFinal gas pipeline work\nCCTV work\nWi-Fi work\nSubmitting CCTV details to YNK office is compulsory, followed by sending mail to NAADBRAMAHA IDLI office",
      "1 day",
      "",
    ],
  ];

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
          }}
        >
          {t.formTitle}
        </h2>

        <div style={{ marginBottom: "10px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                dangerouslySetInnerHTML={{ __html: t.labels.date }}
              ></label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded p-2 text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                dangerouslySetInnerHTML={{ __html: t.labels.engineer }}
              ></label>

              <input
                type="text"
                name="engineerName"
                value={formData.engineerName}
                onChange={handleChange}
                className="w-full border rounded p-2 text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                dangerouslySetInnerHTML={{ __html: t.labels.owner }}
              ></label>

              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full border rounded p-2 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
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
              {stepsData.map((row, idx) => (
                <tr key={idx} className="align-top">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        color: "#374151",
                        whiteSpace: "pre-wrap",
                        border: "3px solid #e5e7eb",
                        fontWeight: "bold",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
          <div>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "4px",
                fontSize: "12px",
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
                padding: "5px",
                marginLeft: "10px",
                borderBottom: "1px solid #000",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
                whiteSpace: "pre-line",
              }}
            />
          </div>
          <div style={{ marginTop: "8px" }}>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "4px",
                fontSize: "12px",
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
                padding: "5px",
                marginLeft: "10px",
                borderBottom: "1px solid #000",
                fontSize: "12px",
                width: "100%",
                maxWidth: "200px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
