import React, { useState } from "react";
import logo from "../../../../../../public/Images/OnlineSurvey/logo.png";
import parse from "html-react-parser";
import { ChevronRight } from "lucide-react";

const OwnerMaterialChecklistForm = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    dateTime: "",
    ownerName: "",
    branch: "",
    signMobile: "",
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
      formTitle: "Owner Material Check List",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      dateLabel: "<strong>Date</strong>",
      ownerLabel: "<strong>Mr/Mrs Branch Owner Shri</strong>",
      branchLabel: "<strong>Branch</strong>",
      signLabel: "SIGN & MO",
      footerOwner: "OWNER NAME",
      footerSign: "SIGN & MO",
      declaration:
        "I am going to do all the work of my site personally. Visited my branch and explained the site plan to me and my vendors. I have understood the plan properly. However, all the materials required for my site work have been asked by YNK Company to use the following qualities and brands. Similarly, I am going to complete all the work of my branch using all the materials. Apart from the following material, I will not use the material of any other company.",
      sections: [
        {
          title: "Interior Work Material",
          items: [
            "Pop PVC Sheet or Gypsum Sheet (Height up to 9ft) Compulsory",
            "Flooring Tiles Compulsory Ivory Plane Size = 2’x 2’ft",
            "Wall Tiles Compulsory Plane White, Milky White = 18x12 or 24x12 inch",
            "Wall tiles should be installed in this horizontal format",
          ],
        },
        {
          title: "Painting Work Material",
          table: [
            { work: "Shutter", colour: "Grey", company: "Asian", code: "0616" },
            {
              work: "Ceiling (Kitchen)",
              colour: "Pure Black",
              company: "Asian",
              code: "Pure Black",
            },
            {
              work: "Out Side Wall",
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
              work: "Shop shutter logo",
              colour: "",
              company: "",
              code: "36x36",
            },
          ],
        },
        {
          title: "Electrical Work Material",
          note: "Kindly check Earthing before starting of electrical work",
          items: [
            "Wire Sizes:",
            "  i. 4.5 mm (for main line)",
            "  ii. 2.5mm (for 16amp points and Main Board lights)",
            "  iii. 1.5mm (for remaining all electrical Work)",
            "  iv. CCTV Wire 4+1 (D-Link White)",
            "  v. Speaker wire",
            "Switch Boards (Ligrand, Anchor, Colour in White)",
            "Lights (Philips, Syska or any local brand with 2 Year Warranty)",
            "Speaker + amplifier (any local brand with 1 yr warranty)",
            "Exhaust fan / ducting work compulsory (depend on site)",
          ],
          table: [
            {
              area: "Kitchen",
              type: "Square-light",
              colour: "Full White",
              watt: "15 Watt",
            },
            {
              area: "Out of Partition",
              type: "Square-light",
              colour: "Warm White",
              watt: "15 Watt",
            },
            {
              area: "Board",
              type: "Square-light",
              colour: "Warm White",
              watt: "22 Watt",
            },
            {
              area: "Canopy/COP",
              type: "Round-light",
              colour: "Warm White",
              watt: "7/9 Watt",
            },
          ],
        },
        {
          title: "Plumbing Work Material",
          note: "Use some quality Brand Material like Plasto, Paras, Supreme, Prince, Finolex (any brand)",
          items: [
            "Water Tank Storage Minimum 2000lit / Maximum 4000lit",
            "i. Water Tank Inlet",
            "ii. Water Tank Overflow",
            "iii. Water Tank Outlet: - 1 inch and convert at end point with ¾",
            "  a) Water tank separate connection - 1) To sink (UPVC material), 2) To steamer",
            "  b) Steamer: - from ceiling CPVC ¾ + NRV valve",
            "iv. Steamer Outlet: - CPVC ¾ inch",
            "v. Shop Drainage Outlet: - 3 inch",
          ],
        },
        {
          title: "CCTV Work Material",
          note: "Only CP Plus Company Camera",
          table: [
            { material: "Camera (CCTV)", type: "Dome", qty: "3 Qty" },
            { material: "Camera (CCTV)", type: "Bullet", qty: "1 Qty" },
            { material: "DVR Box", type: "4CH DVR", qty: "1 Qty" },
            { material: "HDD", type: "500GB/1TB", qty: "1 Qty" },
            { material: "SMPS", type: "5Amp", qty: "1 Qty" },
            { material: "Wi-Fi Rack", type: "2U Rack", qty: "1 Qty" },
            { material: "Connector", type: "BNC Connector", qty: "8 Qty" },
            { material: "Connector", type: "DC Power Connector", qty: "4 Qty" },
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
          table: [
            {
              use: "Partition in shop",
              company: "Timex/Moon",
              colour: "Traffic Yellow",
              code: "128",
              design: "Matt Finish",
            },
            {
              use: "Board",
              company: "Timex/Moon",
              colour: "Black",
              code: "114",
              design: "Matt Finish",
            },
            {
              use: "Other shop partition",
              company: "Timex/Moon",
              colour: "Satin White",
              code: "142",
              design: "Matt Finish",
            },
          ],
        },
        {
          title: "Gas Pipeline",
          items: [
            "1) Pipe material – GI material",
            "2) Pipe company – Jindal",
            "3) Pipe size - 1/2 inch",
          ],
        },
        {
          title: "Rolling Shed",
          items: [
            "1) Rolling shed colour – Plain Black",
            "2) Zallar - 6” front full plain",
          ],
        },
        {
          title: "Ducting Work",
          items: [
            "Ducting Work: Yes / No",
            "Duct pipe size: 14x14",
            "Hood size: As per kitchen area",
            "Exhaust fan: 18” compulsory",
          ],
        },
      ],
    },
    mr: {
      title: "वायएनके",
      formTitle: "मालक सामग्री तपासणी यादी",
      switchLang: "English",
      switchAria: "Switch to English",
      dateLabel: "<strong>तारीख</strong>",
      ownerLabel: "<strong>शाखा मालक श्री/श्रीमती</strong>",
      branchLabel: "<strong>शाखा</strong>",
      signLabel: "स्वाक्षरी व मोबाईल",
      footerOwner: "मालकाचे नाव",
      footerSign: "स्वाक्षरी व मोबाइल",
      declaration:
        "मी माझ्या साइटचे सर्व काम स्वतः करणार आहे. मी माझ्या शाखेला भेट दिली आणि मला व माझ्या विक्रेत्यांना साइट प्लान समजावून सांगितला. मी योजना नीट समजून घेतली आहे. तथापि, माझ्या साइटच्या कामासाठी लागणारी सर्व सामग्री YNK कंपनीने खाली दिलेल्या दर्जाची व ब्रँडची वापरण्याची विनंती केली आहे. त्यानुसार, मी माझ्या शाखेचं काम संपूर्णपणे ह्या सामग्रीने पूर्ण करणार आहे. खालील सूचीव्यतिरिक्त इतर कोणत्याही कंपनीची सामग्री वापरणार नाही.",
      sections: [
        {
          title: "अंतर्गत कामासाठी साहित्य",
          items: [
            "पॉप पीव्हीसी शीट किंवा जिप्सम शीट (उंची 9 फूट पर्यंत) अनिवार्य",
            "फ्लोअरिंग टाईल्स अनिवार्य आयव्हरी प्लेन आकार = 2’x 2’ फूट",
            "वॉल टाईल्स अनिवार्य प्लेन पांढरा, मिल्की पांढरा = 18x12 किंवा 24x12 इंच",
            "वॉल टाईल्स क्षैतिज स्वरूपात लावाव्या",
          ],
        },
        {
          title: "रंगकाम साहित्य",
          table: [
            { work: "शटर", colour: "राखाडी", company: "एशियन", code: "0616" },
            {
              work: "छत (किचन)",
              colour: "शुद्ध काळा",
              company: "एशियन",
              code: "शुद्ध काळा",
            },
            {
              work: "बाहेरील भिंत",
              colour: "राखाडी",
              company: "एशियन",
              code: "0616",
            },
            {
              work: "स्टोअर रूम",
              colour: "राखाडी",
              company: "एशियन",
              code: "0616",
            },
            { work: "शॉप शटर लोगो", colour: "", company: "", code: "36x36" },
          ],
        },
        {
          title: "इलेक्ट्रिकल साहित्य",
          note: "इलेक्ट्रिकल काम सुरू करण्यापूर्वी अर्थिंग तपासा",
          items: [
            "वायर आकार:",
            "  i. 4.5 मिमी (मुख्य लाइनसाठी)",
            "  ii. 2.5 मिमी (16 अँप पॉइंट्स आणि मुख्य बोर्ड लाइट्ससाठी)",
            "  iii. 1.5 मिमी (उर्वरित सर्व इलेक्ट्रिकल कामासाठी)",
            "  iv. CCTV वायर 4+1 (डी-लिंक पांढरा)",
            "  v. स्पीकर वायर",
            "स्विच बोर्ड (लिग्रँड, अँकर, रंग पांढरा)",
            "लाईट्स (फिलिप्स, सिस्का किंवा 2 वर्ष वॉरंटी असलेला कोणताही स्थानिक ब्रँड)",
            "स्पीकर + अँप्लिफायर (1 वर्ष वॉरंटी असलेला कोणताही स्थानिक ब्रँड)",
            "एक्झॉस्ट फॅन / डक्टिंग काम अनिवार्य (साइटवर अवलंबून)",
          ],
          table: [
            {
              area: "किचन",
              type: "स्क्वेअर-लाईट",
              colour: "पूर्ण पांढरा",
              watt: "15 वॅट",
            },
            {
              area: "पार्टिशनच्या बाहेर",
              type: "स्क्वेअर-लाईट",
              colour: "वॉर्म व्हाईट",
              watt: "15 वॅट",
            },
            {
              area: "बोर्ड",
              type: "स्क्वेअर-लाईट",
              colour: "वॉर्म व्हाईट",
              watt: "22 वॅट",
            },
            {
              area: "कॅनोपी/सीओपी",
              type: "राउंड-लाईट",
              colour: "वॉर्म व्हाईट",
              watt: "7/9 वॅट",
            },
          ],
        },
        {
          title: "प्लंबिंग साहित्य",
          note: "प्लास्टो, परास, सुप्रीम, प्रिन्स, फिनोलेक्स सारखे दर्जेदार ब्रँड वापरावे (कोणताही ब्रँड)",
          items: [
            "पाण्याची टाकी स्टोरेज किमान 2000 लिटर / कमाल 4000 लिटर",
            "i. पाण्याची टाकी इनलेट",
            "ii. पाण्याची टाकी ओव्हरफ्लो",
            "iii. पाण्याची टाकी आउटलेट: - 1 इंच आणि शेवटच्या बिंदूवर ¾ मध्ये रूपांतर",
            "  a) पाण्याची टाकी स्वतंत्र कनेक्शन - 1) सिंकला (यूपीव्हीसी मटेरियल), 2) स्टीमरला",
            "  b) स्टीमर: - छतापासून सीपीव्हीसी ¾ + एनआरव्ही व्हॉल्व",
            "iv. स्टीमर आउटलेट: - सीपीव्हीसी ¾ इंच",
            "v. शॉप ड्रेनेज आउटलेट: - 3 इंच",
          ],
        },
        {
          title: "CCTV साहित्य",
          note: "फक्त CP Plus कंपनीचे कॅमेरे",
          table: [
            { material: "कॅमेरा (CCTV)", type: "डोम", qty: "3 नग" },
            { material: "कॅमेरा (CCTV)", type: "बुलेट", qty: "1 नग" },
            { material: "DVR बॉक्स", type: "4CH DVR", qty: "1 नग" },
            { material: "HDD", type: "500GB/1TB", qty: "1 नग" },
            { material: "SMPS", type: "5Amp", qty: "1 नग" },
            { material: "Wi-Fi रॅक", type: "2U रॅक", qty: "1 नग" },
            { material: "कनेक्टर", type: "BNC कनेक्टर", qty: "8 नग" },
            { material: "कनेक्टर", type: "DC पावर कनेक्टर", qty: "4 नग" },
            { material: "कॉर्ड", type: "CAT 6 पॅच कॉर्ड", qty: "1 नग" },
          ],
        },
        {
          title: "इंटरनेट",
          items: ["50MBPS पेक्षा जास्त (1 वर्षाचा पॅकेज)"],
        },
        {
          title: "बोर्ड व पार्टीशन साहित्य",
          note: "फक्त ACP साहित्य",
          table: [
            {
              use: "शॉपमधील पार्टीशन",
              company: "Timex/Moon",
              colour: "ट्रॅफिक यलो",
              code: "128",
              design: "मॅट फिनिश",
            },
            {
              use: "बोर्ड",
              company: "Timex/Moon",
              colour: "काळा",
              code: "114",
              design: "मॅट फिनिश",
            },
            {
              use: "इतर शॉप पार्टीशन",
              company: "Timex/Moon",
              colour: "सॅटिन व्हाईट",
              code: "142",
              design: "मॅट फिनिश",
            },
          ],
        },
        {
          title: "गॅस पाइपलाइन",
          items: [
            "1) पाइप मटेरियल – जीआय मटेरियल",
            "2) पाइप कंपनी – जिंदाल",
            "3) पाइप आकार - 1/2 इंच",
          ],
        },
        {
          title: "रोलिंग शेड",
          items: [
            "1) रोलिंग शेड रंग – साधा काळा",
            "2) झालर - 6” समोर पूर्ण साधा",
          ],
        },
        {
          title: "डक्टिंग काम",
          items: [
            "डक्टिंग काम: होय / नाही",
            "डक्ट पाइप आकार: 14x14",
            "हूड आकार: किचन क्षेत्रानुसार",
            "एक्झॉस्ट फॅन: 18” अनिवार्य",
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
            color: "#1f2937",
          }}
        >
          {t.formTitle}
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              color: "#1f2937",
              fontSize: "12px",
              marginBottom: "12px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.5",
              backgroundColor: "#f8fafc",
              padding: "20px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            {t.declaration}
          </p>

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
                {parse(t.dateLabel)}
              </label>

              <input
                type="date"
                name="dateTime"
                value={formData.dateTime}
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
                {parse(t.ownerLabel)}
              </label>

              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "3px solid #d1d5db",
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
                {parse(t.branchLabel)}
              </label>

              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                style={{
                  width: "100%",
                  border: "3px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
          </div>
        </div>
        {t.sections.map((section, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1e40af",
                marginBottom: "10px",
                borderBottom: "2px solid #e3f2fd",
                paddingBottom: "4px",
              }}
            >
              {section.title}
            </h3>
            {section.note && (
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
                }}
              >
                <span
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Note:{" "}
                </span>
                {section.note}
              </p>
            )}

            {section.items && (
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      fontSize: "12px",
                      color: "#374151",
                      padding: "6px 0",
                    }}
                  >
                    <ChevronRight
                      size={16}
                      style={{
                        marginRight: "8px",
                        color: "#1e40af",
                        marginTop: "2px",
                      }}
                    />
                    <span style={{ fontWeight: "bold" }}>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.table && (
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "#f8fafc",
                    fontSize: "12px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "3px solid rgba(6, 5, 5, 1)",
                  }}
                >
                  <thead>
                    <tr>
                      {Object.keys(section.table[0]).map((key, i) => (
                        <th
                          key={i}
                          style={{
                            border: "3px solid #e5e7eb",
                            padding: "10px",
                            textAlign: "left",
                            backgroundColor: "#e2e8f0",
                            fontWeight: "800",
                            color: "#1f2937",
                          }}
                        >
                          {language === "en"
                            ? key.charAt(0).toUpperCase() + key.slice(1)
                            : {
                                work: "काम",
                                colour: "रंग",
                                company: "कंपनी",
                                code: "कोड",
                                area: "क्षेत्र",
                                type: "प्रकार",
                                watt: "वॅट",
                                material: "साहित्य",
                                qty: "प्रमाण",
                                use: "वापर",
                                design: "डिझाइन",
                              }[key] ||
                              key.charAt(0).toUpperCase() + key.slice(1)}
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
                        {Object.values(row).map((value, i) => (
                          <td
                            key={i}
                            style={{
                              border: "3px solid #e5e7eb",
                              padding: "10px",
                              color: "#374151",
                              fontWeight: "bold",
                            }}
                          >
                            {value}
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
        <div style={{ textAlign: "center", marginTop: "20px" }}>
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
              {t.footerSign}:
            </label>
            <input
              type="text"
              name="footerSign"
              value={formData.footerSign}
              onChange={handleChange}
              placeholder={
                language === "en"
                  ? "Enter Signature or Mobile"
                  : "स्वाक्षरी किंवा मोबाइल प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "250px",
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
              {t.footerOwner}:
            </label>
            <input
              type="text"
              name="footerOwner"
              value={formData.footerOwner}
              onChange={handleChange}
              placeholder={
                language === "en"
                  ? "Enter Owner Name"
                  : "मालकाचे नाव प्रविष्ट करा"
              }
              style={{
                padding: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "12px",
                width: "100%",
                maxWidth: "250px",
                backgroundColor: "#fff",
                transition: "border-color 0.2s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerMaterialChecklistForm;
