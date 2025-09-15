const RoughLayoutQuestions = {
  id: "rough_layout_form",
  title_mr: "रफ लेआउट",
  title_en: "Rough Layout",
  fields: [
    {
      id: "shop_dimensions",
      question_mr: "दुकान माप",
      question_en: "Shop Dimension",
      type: "text",
      subfields: [
        {
          id: "length",
          label_mr: "लांबी = 21’2”",
          label_en: "Length = 21’2”",
        },
        {
          id: "width",
          label_mr: "रुंदी = 12’2”",
          label_en: "Width = 12’2”",
        },
        {
          id: "height",
          label_mr: "उंची = 11’",
          label_en: "Height = 11’",
        },
        {
          id: "column_size",
          label_mr: "खांब आकार = 12”x3”",
          label_en: "Column size = 12”x3”",
        },
        {
          id: "shutter_size",
          label_mr: "शटर आकार = 12’2”x11’",
          label_en: "Shutter size = 12’2”x11’",
        },
        {
          id: "total_sqft",
          label_mr: "एकूण दुकान क्षेत्र = 266 चौ.फूट",
          label_en: "Total shop sqft = 266 sqft",
        },
        {
          id: "shop_facing",
          label_mr: "दुकान दिशा = पश्चिम",
          label_en: "Shop facing = west",
        },
        {
          id: "additional_structure",
          label_mr: "अतिरिक्त संरचना माप = ",
          label_en: "Any additional structure measurement = ",
        },
      ],
    },
  ],
  submit_button_mr: "सबमिट करा",
  submit_button_en: "Submit",
  navigation_buttons: {
    back_mr: "मागे",
    back_en: "Back",
    next_mr: "पुढे",
    next_en: "Next",
  },
  submission_message_mr:
    "धन्यवाद की आपण रफ लेआउट नियोजनासाठी माहिती दिली. आम्ही 24 तासांच्या आत पुढील कार्यवाहीची माहिती देऊ.",
  submission_message_en:
    "Thank you for providing information for Rough Layout Planning. We will provide further action details within 24 hours.",
};

export default RoughLayoutQuestions;