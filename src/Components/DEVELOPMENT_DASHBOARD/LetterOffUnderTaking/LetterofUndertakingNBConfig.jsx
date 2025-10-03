// src/components/LetterofUndertaking/LetterofUndertakingNBQue.jsx

const undertakingClause_mr = [
  "मी लिहून देणार नाव Mr. KULDEEP SHARMA असे लिहून देतो की, वरील कंपनीचे प्रॉडक्ट मी स्वत: खरेदी करणार.",
  "माझ्याकडून वरील प्रॉडक्ट खरेदी करताना काही चुकभूल झाल्यास त्यास मी पूर्ण जबाबदार असणार आहे.",
  "ती चूक दुरुस्ती करण्यास मी असमर्थ राहिलो तर कंपनीकडून लावण्यात येणारा दंड मला मान्य असेल आणि मी तो कंपनीला भरण्यास तयार आहे.",
];

const undertakingClause_en = [
  "I, Mr. KULDEEP SHARMA, hereby undertake that I will personally purchase the above-mentioned products.",
  "I will be fully responsible for any errors or discrepancies that occur during the purchase.",
  "If I am unable to rectify the error, I agree to the penalty imposed by the company and am prepared to pay it.",
];

const LetterofUndertakingNBConfig = {
  id: "naadbramha_undertaking_form",
  title_mr: "नादब्रम्हा फ्रँचायझी संमती पत्र",
  title_en: "Naadbramha Franchise Letter of Undertaking",
  introduction_mr: [
    "आम्ही सिव्हिल कामासाठी आणि शाखेतील काही प्रॉडक्ट विषयक संमती पत्र करित आहोत.",
    "खालील सर्व नादब्रम्हा फ्रँचायझी मधील काही प्रॉडक्ट आणि सिव्हिल काम हे ब्रँडच्या संबंधित प्रॉडक्ट कोड, कलर थीम, साईज, प्रॉडक्ट ट्रेनिंग, प्रॉडक्ट ब्रँड, हे नादब्रम्हा फ्रँचायझीने लीगल अॅग्रीमेंट सहित अंतिम केले आहे.",
    "त्यामुळे वाय. एन. के. एंटरप्रायझेसकडून खालील काम लिहून घेणाऱ्यांना देण्यात येताना संमती करून घेणे गरजेचे आहे.",
  ],
  introduction_en: [
    "We are making this letter of undertaking for civil work and certain products within the branch.",
    "All the following products and civil work in the Naadbramha franchise, including product codes, color themes, sizes, product training, and product brands, have been finalized by the Naadbramha franchise with a legal agreement.",
    "Therefore, it is necessary to get this undertaking from the person executing the work on behalf of YNK Enterprises.",
  ],
  fields: [
    {
      id: "cctv_camera",
      question_mr: "१. सी सी टी व्ही कॅमेरा",
      question_en: "1. CCTV Camera",
      type: "list",
      listItems: [
        {
          id: "cctv_kit",
          label_mr: "CP PLUS CCTV कॅमेरा किट",
          label_en: "CP PLUS CCTV Camera Kit",
          spec_mr:
            "2.4MP, H.265+, 1TB Storage, FHD CCTV Camera Kit with 4Ch DVR, 4 Dome, HDD, SMPS, 90M Cable, Audio Mic/Connector",
          spec_en:
            "2.4MP, H.265+, 1TB Storage, FHD CCTV Camera Kit with 4Ch DVR, 4 Dome, HDD, SMPS, 90M Cable, Audio Mic/Connector",
          qty: 1,
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "internet",
      question_mr: "२. इंटरनेट",
      question_en: "2. Internet",
      type: "list",
      listItems: [
        {
          id: "internet_connection",
          label_mr: "इंटरनेट कनेक्शन",
          label_en: "Internet Connection",
          spec_mr:
            "ब्रॉडबँड, फायबर, राउटर, केबल, क्लिप, पॉवर सप्लाय. नेट स्पीड – 40/50mbps अनलिमिटेड, 1 वर्ष प्लान घेणे अनिवार्य आहे.",
          spec_en:
            "Broadband, Fiber, Router, Cable, Clips, Power Supply. Net Speed – 40/50mbps Unlimited, 1 Year Plan is mandatory.",
          qty: 1,
          warranty_mr: "सेवा प्रदाता नुसार",
          warranty_en: "As per Service Provider",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "home_theater",
      question_mr: "३. होम थिएटर स्पीकर",
      question_en: "3. Home Theater Speaker",
      type: "list",
      listItems: [
        {
          id: "zebronics_speaker",
          label_mr: "ZEBRONICS ZEB-FEEL 4",
          label_en: "ZEBRONICS ZEB-FEEL 4",
          spec_mr: "60 W Bluetooth Home Theatre (Black, 4.1 Channel)",
          spec_en: "60 W Bluetooth Home Theatre (Black, 4.1 Channel)",
          qty: 1,
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "shop_color",
      question_mr: "४. शॉप सिलिंग आणि शटर कलर",
      question_en: "4. Shop Ceiling and Shutter Color",
      type: "list",
      listItems: [
        {
          id: "ceiling_paint",
          label_mr: "एशियन ऑइल पेंट्स (सिलिंग)",
          label_en: "Asian Oil Paints (Ceiling)",
          spec_mr: "कोड- 9461 / 414043 – एशियन ऑइल पेंट्स",
          spec_en: "Code- 9461 / 414043 – Asian Oil Paints",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "लागू नाही",
          warranty_en: "N/A",
        },
        {
          id: "shutter_paint",
          label_mr: "एशियन ऑइल पेंट्स (शटर लोगो)",
          label_en: "Asian Oil Paints (Shutter Logo)",
          spec_mr: "लोगो कलर – ट्रॅफिक येलो / ब्लॅक मॅट – लोगो – 3 फिट",
          spec_en: "Logo Color – Traffic Yellow / Matt Black – Logo – 3 ft",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "लागू नाही",
          warranty_en: "N/A",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "electrical_work",
      question_mr: "५. इलेक्ट्रिकल वर्क – कन्सील्ड वर्क",
      question_en: "5. Electrical Work – Concealed Work",
      type: "list",
      listItems: [
        {
          id: "cable_material",
          label_mr: "केबल मटेरियल",
          label_en: "Cable Material",
          spec_mr: "पॉलिकॅब, फिलिप्स, आर आर, अँकर, केया, हॅवेल्स केबल",
          spec_en: "Polycab, Philips, RR, Anchor, KEI, Havells Cable",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
        {
          id: "switch_board",
          label_mr: "स्विच बोर्ड",
          label_en: "Switch Board",
          spec_mr:
            "अँकर, रोमा, लेग्रँड, हॅवेल्स, पॉलिकॅब, लोकल. बोर्ड बटण कलर – व्हाईट",
          spec_en:
            "Anchor, Roma, Legrand, Havells, Polycab, Local. Board Button Color – White",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "plumbing_work",
      question_mr: "६. प्लंबिंग वर्क – कन्सील्ड वर्क",
      question_en: "6. Plumbing Work – Concealed Work",
      type: "list",
      listItems: [
        {
          id: "pipe_material",
          label_mr: "पाईप मटेरियल",
          label_en: "Pipe Material",
          spec_mr:
            "सी पी व्ही सी / यू पी व्ही सी पाईप – 1/5”, 1”, 1.5”, 3”. फिटिंग प्लंबर सांगतील ती वापरा.",
          spec_en:
            "CPVC / UPVC Pipe – 1/5”, 1”, 1.5”, 3”. Use fittings as advised by the plumber.",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "light_fitting",
      question_mr: "७. लाइट फिटिंग",
      question_en: "7. Light Fitting",
      type: "list",
      listItems: [
        {
          id: "canopy_light",
          label_mr: "बोर्ड कॅनोपी राऊंड लाईट",
          label_en: "Board Canopy Round Light",
          spec_mr: "7 watt, warm white, होल – 4/5”",
          spec_en: "7 watt, warm white, hole – 4/5”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
        {
          id: "kitchen_light",
          label_mr: "किचन लाईट",
          label_en: "Kitchen Light",
          spec_mr: "15 watt, square white, होल – 6/7”",
          spec_en: "15 watt, square white, hole – 6/7”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
        {
          id: "partition_light",
          label_mr: "पार्टिशन ते शटर लाईट",
          label_en: "Partition to Shutter Light",
          spec_mr: "15 watt warm लाईट, होल - 6/7”",
          spec_en: "15 watt warm light, hole - 6/7”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
        {
          id: "ceiling_light",
          label_mr: "बोर्ड सीलिंग लाईट",
          label_en: "Board Ceiling Light",
          spec_mr: "वॉर्म व्हाईट- 22 watt, होल – 8/9”",
          spec_en: "warm white- 22 watt, hole – 8/9”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
        {
          id: "wall_fan",
          label_mr: "वॉल फॅन 14” व्हाईट",
          label_en: "Wall Fan 14” White",
          spec_mr: "उषा, बजाज, फिलिप्स, क्रॉम्प्टन.",
          spec_en: "Usha, Bajaj, Philips, Crompton.",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "tiles_work",
      question_mr: "८. टाइल्स वर्क",
      question_en: "8. Tiles Work",
      type: "list",
      listItems: [
        {
          id: "wall_tiles",
          label_mr: "वॉल टाईल्स फुल्ल व्हाईट",
          label_en: "Wall Tiles Full White",
          spec_mr: "साईज – 24”x12” – 18”x12”",
          spec_en: "Size – 24”x12” – 18”x12”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "लागू नाही",
          warranty_en: "N/A",
        },
        {
          id: "flooring_tiles",
          label_mr: "फ्लोअरिंग टाईल्स आयवरी",
          label_en: "Flooring Tiles Ivory",
          spec_mr: "साईज – 24’x24”",
          spec_en: "Size – 24’x24”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "लागू नाही",
          warranty_en: "N/A",
        },
        {
          id: "counter_tiles",
          label_mr: "ओटा टाईल्स",
          label_en: "Counter Tiles",
          spec_mr: "व्हाईट, ग्रे, आयवरी – 18”x24”, 24”x24”, 24”x48”",
          spec_en: "White, Grey, Ivory – 18”x24”, 24”x24”, 24”x48”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "लागू नाही",
          warranty_en: "N/A",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "pop_work",
      question_mr: "९. पी ओ पी वर्क",
      question_en: "9. POP Work",
      type: "list",
      listItems: [
        {
          id: "pvc_panel",
          label_mr: "PVC सिलिंग पॅनल",
          label_en: "PVC Ceiling Panel",
          spec_mr:
            "Color: Black, Width: 10 Inch, Length: 120 Inch, Material: PVC, Thickness: 10 mm, Usage: Ceiling. साईज - 10”x120”",
          spec_en:
            "Color: Black, Width: 10 Inch, Length: 120 Inch, Material: PVC, Thickness: 10 mm, Usage: Ceiling. Size - 10”x120”",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "लागू नाही",
          warranty_en: "N/A",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "gas_pipeline",
      question_mr: "१०. गॅस पाईपलाईन वर्क",
      question_en: "10. Gas Pipeline Work",
      type: "list",
      listItems: [
        {
          id: "lpg_pipe",
          label_mr: "LPG गॅस पाईप",
          label_en: "LPG Gas Pipe",
          spec_mr:
            'Yellow Aluminium And Polyethylene LPG Gas Pipe, For Home, Hotel & Industrial, Size: 1/2" To 2"',
          spec_en:
            'Yellow Aluminium And Polyethylene LPG Gas Pipe, For Home, Hotel & Industrial, Size: 1/2" To 2"',
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "rolling_shed",
      question_mr: "११. रोलिंग शेड ब्लॅक",
      question_en: "11. Rolling Shed Black",
      type: "list",
      listItems: [
        {
          id: "black_shed",
          label_mr: "रोलिंग शेड",
          label_en: "Rolling Shed",
          spec_mr: "साईज - 10 x 10. ब्रॅकेट हाइट साईज - 1 फिट / 2 फिट",
          spec_en: "Size - 10 x 10. Bracket Height Size - 1 ft / 2 ft",
          qty: 1,
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "ducting_work",
      question_mr: "१२. डकटींग वर्क",
      question_en: "12. Ducting Work",
      type: "list",
      listItems: [
        {
          id: "gi_pipe",
          label_mr: "GI पाईप डकटींग",
          label_en: "GI Pipe Ducting",
          spec_mr:
            "GI पाईप मटेरियल वापरणे, हुड साईज – 4 फिट / 5 फिट / 6 फिट, 18” / 21” एक्झॉस्ट फॅन – बॉक्स पाइपिंग 12” / 14” / 16”.",
          spec_en:
            "Use GI Pipe Material, Hood Size – 4 ft / 5 ft / 6 ft, 18” / 21” Exhaust Fan – Box Piping 12” / 14” / 16”.",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "mixer_grinder",
      question_mr: "१३. प्रीती मिक्सर ग्राइंडर",
      question_en: "13. Preethi Mixer Grinder",
      type: "list",
      listItems: [
        {
          id: "preethi_mixer",
          label_mr: "Preethi Xpro Duo MG 198",
          label_en: "Preethi Xpro Duo MG 198",
          spec_mr:
            "PVC insulated 3 core, Flexicord with Plugtop & earthing. Jar Configuration: 2.0 Litre S.S Jar, 0.75 Litre Chutney. Power: 1300 watts; Operating voltage: 230 volts. मॉडेल नंबर - Preethi Xpro Duo MG 198 1300-Watt Mixer Grinder (Deep Blue)",
          spec_en:
            "PVC insulated 3 core, Flexicord with Plugtop & earthing. Jar Configuration: 2.0 Litre S.S Jar, 0.75 Litre Chutney. Power: 1300 watts; Operating voltage: 230 volts. Model Number - Preethi Xpro Duo MG 198 1300-Watt Mixer Grinder (Deep Blue)",
          qty: 1,
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "fridge_500l",
      question_mr: "१४. ब्ल्यू स्टार फ्रीज 500 लिटर",
      question_en: "14. Blue Star Fridge 500 Litre",
      type: "list",
      listItems: [
        {
          id: "blue_star_500l",
          label_mr: "ब्ल्यू स्टार फ्रीज 500 लिटर व्हाईट",
          label_en: "Blue Star Fridge 500 Litre White",
          spec_mr:
            "Product Dimensions: 164.7D x 67.8W x 85.7H Centimeters, Brand: Blue Star, Model Name: CF3-500MPW, Colour: white, Door Material Type: Stainless Steel",
          spec_en:
            "Product Dimensions: 164.7D x 67.8W x 85.7H Centimeters, Brand: Blue Star, Model Name: CF3-500MPW, Colour: white, Door Material Type: Stainless Steel",
          qty: 2,
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "fridge_300l",
      question_mr: "१५. ब्ल्यू स्टार फ्रीज 300 लिटर",
      question_en: "15. Blue Star Fridge 300 Litre",
      type: "list",
      listItems: [
        {
          id: "blue_star_300l",
          label_mr: "ब्ल्यू स्टार फ्रीज 300 लिटर व्हाईट",
          label_en: "Blue Star Fridge 300 Litre White",
          spec_mr:
            "Product Dimensions: 67.8D x 114.7W x 85.7H Centimeters, Brand: Blue Star, Model Name: CF3-300MPW, Colour: White",
          spec_en:
            "Product Dimensions: 67.8D x 114.7W x 85.7H Centimeters, Brand: Blue Star, Model Name: CF3-300MPW, Colour: White",
          qty: 1,
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "display_board",
      question_mr: "१६. डिस्प्ले बोर्ड लेटर वर्क",
      question_en: "16. Display Board Letter Work",
      type: "list",
      listItems: [
        {
          id: "branding_board",
          label_mr: "ब्रँडिंग आणि मेनू बोर्ड",
          label_en: "Branding and Menu Boards",
          spec_mr: "कंपनीच्या डिझाइन आणि मार्गदर्शक तत्त्वांनुसार",
          spec_en: "As per company's design and guidelines",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "लागू नाही",
          warranty_en: "N/A",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
    {
      id: "acp_panel",
      question_mr: "१७. ACP पॅनल वर्क बोर्ड",
      question_en: "17. ACP Panel Work Board",
      type: "list",
      listItems: [
        {
          id: "acp_sheet",
          label_mr: "ACP शीट पॅनल",
          label_en: "ACP Sheet Panel",
          spec_mr:
            "ACP Sheet: Timex Bond/Moon Bond(or any other Branded material). Colour Code: a) Partition: Traffic Yellow = 128, b) Main Board: Matt Black = 114",
          spec_en:
            "ACP Sheet: Timex Bond/Moon Bond(or any other Branded material). Colour Code: a) Partition: Traffic Yellow = 128, b) Main Board: Matt Black = 114",
          qty: "आवश्यकतेनुसार",
          warranty_mr: "उत्पादक कंपनीची वॉरंटी",
          warranty_en: "As per Manufacturer",
        },
      ],
      undertaking_mr: undertakingClause_mr,
      undertaking_en: undertakingClause_en,
    },
  ],
};

export default LetterofUndertakingNBConfig;