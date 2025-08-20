import React, { useState } from "react";
import logo from "../../../../../public/Images/BoardWorksListForm/logo.png";


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
      formTitle: "Civil Work Material Information Check List",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      dateLabel: "Date & Time",
      ownerLabel: "Mr/Mrs Branch Owner Shri",
      branchLabel: "Branch",
      signLabel: "SIGN & MO",
      declaration:
        "I am going to do all the work of my site personally. Visited my branch and explained the site plan to me and my vendors. I have understood the plan properly. However, all the materials required for my site work have been asked by YNK Company to use the following qualities and brands. Similarly, I am going to complete all the work of my branch using all the materials. Apart from the following material, I will not use the material of any other company.",
      sections: [
        {
          title: "Interior Work Material",
          items: [
            "Ceiling POP: (solid deep ceiling area)",
            "A) PVC Sheet (plain white with no texture)",
            "B) Gypsum Sheet (oil bond white two coat) - Ceiling Height up to 9’ Compulsory",
            "Flooring Tiles: 24”X24” (Ivory without texture)",
            "Wall Tiles: 24”X12” or 18”X12” (plain white without texture)",
          ],
        },
        {
          title: "TV PIPE",
          items: [
            "a) MS PIPE 2”X2” square pipe",
            "b) 14”X12”X10mm (2 pieces of wooden ply sheet)",
            "c) Oil paint – white color to TV pipe and Shutter",
            "d) 6A-2 sockets behind sheet for TV & Menu Frame connection",
          ],
        },
        {
          title: "Painting Work Material",
          items: [
            "Asian Paints (Royal White, Tractor Emulsion)",
            "Putty: Birla or JK",
            "Primer: Asian or Berger",
          ],
        },
        {
          title: "Electrical Work Material",
          items: [
            "Polycab Wire + CCTV Wire 4+1 (D-Link White)",
            "Fitting: Ligrand (Colour White)",
            "Lights: Philips, Syska or 2 Year Warranty Local Brand",
            "Wall Fan: Bajaj, Usha, Crompton (White only)",
            "Lighting:",
            "Kitchen - Square-light, Full White, 15 Watt",
            "Shutter - Full White, Asian",
            "Board - Square-light, Full White, 22 Watt",
          ],
        },
        {
          title: "Plumbing Work Material",
          note: "Use quality brand material like Plasto, Paras, Supreme, Prince, Finolex.",
          items: [
            "Water Storage Tank: 2000 Lit.",
            "Sink inlet (long body steel tap)",
            "Sink outlet",
          ],
        },
        {
          title: "CCTV Work Material",
          note: "Only CP Plus Company Camera",
          table: [
            { material: "Camera (CCTV)", type: "Dome", qty: "3 Qty" },
            { material: "Camera (CCTV)", type: "Bullet", qty: "1 Qty" },
            { material: "DVR Box", type: "4CH DVR", qty: "1 Qty" },
            { material: "HDD", type: "500GB", qty: "1 Qty" },
            { material: "SMPS", type: "5Amp", qty: "1 Qty" },
            { material: "Wi-Fi Rack", type: "2U Rack", qty: "1 Qty" },
            { material: "Connector", type: "BNC Connector", qty: "8 Qty" },
            { material: "Connector", type: "DC Connector", qty: "4 Qty" },
            { material: "Cord", type: "CAT 6 Patch Cord", qty: "1 Qty" },
          ],
        },
        {
          title: "Internet",
          items: ["Above 50MBPS (1 year package)"],
        },
        {
          title: "Board and Partition Work Material",
          note: "Only in ACP Material",
          items: [
            "Partition in shop - Timex/Moon, Satin White 142, Matt Finish",
            "Board - Timex/Moon, Satin White 142, Matt Finish",
          ],
        },
      ],
    },
    mr: {
      title: "वायएनके",
      formTitle: "सिव्हिल वर्क मटेरियल तपासणी यादी",
      switchLang: "English",
      switchAria: "Switch to English",
      dateLabel: "दिनांक व वेळ",
      ownerLabel: "शाखा मालक श्री/श्रीमती",
      branchLabel: "शाखा",
      signLabel: "स्वाक्षरी व मोबाइल",
      declaration:
        "मी माझ्या साइटचे सर्व काम स्वतः करणार आहे. मी माझ्या शाखेला भेट दिली आणि मला व माझ्या विक्रेत्यांना साइट प्लान समजावून सांगितला. मी योजना नीट समजून घेतली आहे. तथापि, माझ्या साइटच्या कामासाठी लागणारी सर्व सामग्री YNK कंपनीने खाली दिलेल्या दर्जाची व ब्रँडची वापरण्याची विनंती केली आहे. त्यानुसार, मी माझ्या शाखेचं काम संपूर्णपणे ह्या सामग्रीने पूर्ण करणार आहे. खालील सूचीव्यतिरिक्त इतर कोणत्याही कंपनीची सामग्री वापरणार नाही.",
      sections: [
        {
          title: "अंतर्गत कामासाठी साहित्य",
          items: [
            "सीलिंग POP: (घन खोल छत भाग)",
            "A) PVC शीट (साधा पांढरा, टेक्सचर नाही)",
            "B) जिप्सम शीट (तेल बॉन्ड पांढरा दोन कोट) - छताची उंची ९ फूट पर्यंत अनिवार्य",
            "फ्लोअरिंग टाईल्स: 24”X24” (आयव्हरी, टेक्सचरशिवाय)",
            "वॉल टाईल्स: 24”X12” किंवा 18”X12” (साधा पांढरा, टेक्सचरशिवाय)",
          ],
        },
        {
          title: "टीव्ही पाईप",
          items: [
            "a) MS पाईप 2”X2” चौकोनी पाईप",
            "b) 14”X12”X10mm (2 लाकडी प्लाय शीट)",
            "c) तेल रंग – पांढऱ्या रंगात, टीव्ही पाईप व शटरला",
            "d) 6A-2 सॉकेट्स मागे टीव्ही व मेन्यू फ्रेमसाठी",
          ],
        },
        {
          title: "रंगकाम साहित्य",
          items: [
            "एशियन पेंट्स (रॉयल व्हाईट, ट्रॅक्टर इमल्शन)",
            "पुट्टी: बिरला किंवा जेके",
            "प्रायमर: एशियन किंवा बर्जर",
          ],
        },
        {
          title: "इलेक्ट्रिकल साहित्य",
          items: [
            "पॉलीकॅब वायर + CCTV वायर 4+1 (डी-लिंक व्हाईट)",
            "फिटिंग्स: लिग्रँड (पांढऱ्या रंगात)",
            "लाईट्स: फिलिप्स, सिस्का किंवा 2 वर्ष वॉरंटी लोकल ब्रँड",
            "वॉल फॅन: बजाज, उषा, क्रॉम्प्टन (फक्त पांढरे)",
            "लाईटिंग:",
            "किचन – स्क्वेअर लाईट, पूर्ण पांढरा, 15 वॅट",
            "शटर – पूर्ण पांढरा, एशियन",
            "बोर्ड – स्क्वेअर लाईट, पूर्ण पांढरा, 22 वॅट",
          ],
        },
        {
          title: "प्लंबिंग साहित्य",
          note: "प्लास्टो, परास, सुप्रीम, प्रिन्स, फिनोलेक्स सारखे दर्जेदार ब्रँड वापरावेत.",
          items: [
            "पाण्याची टाकी: 2000 लिटर",
            "सिंक इनलेट (लाँग बॉडी स्टील टॅप)",
            "सिंक आउटलेट",
          ],
        },
        {
          title: "CCTV साहित्य",
          note: "फक्त CP Plus कंपनीचे कॅमेरे वापरावेत.",
          table: [
            { material: "कॅमेरा (CCTV)", type: "डोम", qty: "3 नग" },
            { material: "कॅमेरा (CCTV)", type: "बुलेट", qty: "1 नग" },
            { material: "DVR बॉक्स", type: "4CH DVR", qty: "1 नग" },
            { material: "HDD", type: "500GB", qty: "1 नग" },
            { material: "SMPS", type: "5Amp", qty: "1 नग" },
            { material: "Wi-Fi रॅक", type: "2U रॅक", qty: "1 नग" },
            { material: "कनेक्टर", type: "BNC कनेक्टर", qty: "8 नग" },
            { material: "कनेक्टर", type: "DC कनेक्टर", qty: "4 नग" },
            { material: "कॉर्ड", type: "CAT 6 पॅच कॉर्ड", qty: "1 नग" },
          ],
        },
        {
          title: "इंटरनेट",
          items: ["50MBPS पेक्षा जास्त (1 वर्षाचा पॅकेज)"],
        },
        {
          title: "बोर्ड व पार्टीशन साहित्य",
          note: "फक्त ACP साहित्य वापरावे",
          items: [
            "शॉपमधील पार्टीशन – Timex/Moon, Satin White 142, Matt Finish",
            "बोर्ड – Timex/Moon, Satin White 142, Matt Finish",
          ],
        },
      ],
    },
  };

  const t = translations[language];

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
          <p className="text-gray-800 text-sm mb-4 whitespace-pre-wrap">
            {t.declaration}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t.dateLabel}
              </label>
              <input
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className="w-full border rounded p-2 text-sm"
                style={{ boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t.ownerLabel}
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full border rounded p-2 text-sm"
                style={{ boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t.branchLabel}
              </label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full border rounded p-2 text-sm"
                style={{ boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t.signLabel}
              </label>
              <input
                type="text"
                name="signMobile"
                value={formData.signMobile}
                onChange={handleChange}
                className="w-full border rounded p-2 text-sm"
                style={{ boxSizing: "border-box" }}
              />
            </div>
          </div>
        </div>
        {t.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {section.title}
            </h3>
            {section.note && (
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "8px",
                  fontSize: "12px",
                }}
              >
                {section.note}
              </p>
            )}
            {section.items && (
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "16px",
                  marginBottom: "8px",
                }}
              >
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{ marginBottom: "4px", fontSize: "12px" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.table && (
              <div className="overflow-x-auto">
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "#e3f2fd",
                    marginBottom: "20px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: "1px solid #c3d8e8",
                          padding: "8px",
                          textAlign: "left",
                          backgroundColor: "#f0f4f8",
                          fontWeight: "bold",
                        }}
                      >
                        {language === "en" ? "Material" : "साहित्य"}
                      </th>
                      <th
                        style={{
                          border: "1px solid #c3d8e8",
                          padding: "8px",
                          textAlign: "left",
                          backgroundColor: "#f0f4f8",
                          fontWeight: "bold",
                        }}
                      >
                        {language === "en" ? "Type" : "प्रकार"}
                      </th>
                      <th
                        style={{
                          border: "1px solid #c3d8e8",
                          padding: "8px",
                          textAlign: "left",
                          backgroundColor: "#f0f4f8",
                          fontWeight: "bold",
                        }}
                      >
                        {language === "en" ? "Quantity" : "प्रमाण"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, idx) => (
                      <tr key={idx}>
                        <td
                          style={{
                            border: "1px solid #c3d8e8",
                            padding: "8px",
                            textAlign: "left",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {row.material}
                        </td>
                        <td
                          style={{
                            border: "1px solid #c3d8e8",
                            padding: "8px",
                            textAlign: "left",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {row.type}
                        </td>
                        <td
                          style={{
                            border: "1px solid #c3d8e8",
                            padding: "8px",
                            textAlign: "left",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {row.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialChecklistForm;
