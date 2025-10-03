const YewaleDemoChecklistConfig = {
  id: "yewale_demo_checklist",
  title_mr: "येवले डेमो चेकलिस्ट",
  title_en: "YEWALE DEMO CHECKLIST",
  fields: [
    {
      id: "header_info",
      type: "static",
      subfields: [
        {
          id: "branch_name",
          label_mr: "ब्रांचचे नाव :",
          label_en: "Branch Name :",
          type: "text",
        },
        {
          id: "date",
          label_mr: "दिनांक :",
          label_en: "Date :",
          type: "date",
        },
        {
          id: "branch_address",
          label_mr: "ब्रांचचा पत्ता :",
          label_en: "Branch Address :",
          type: "text",
        },
        {
          id: "owner_mobile_no",
          label_mr: "मालकाचा मो. नं. :",
          label_en: "Owner Mo. No. :",
          type: "text",
        },
        {
          id: "owner_name",
          label_mr: "मालकाचे नाव :",
          label_en: "Owner Name :",
          type: "text",
        },
      ],
    },
    {
      id: "equipment_details",
      type: "table",
      subfields: [
        {
          id: "equipment_name",
          label_mr: "उपकरण",
          label_en: "EQUIPMENT NAME",
          type: "text",
        },
        {
          id: "demo_duration",
          label_mr: "डेमो कालावधी",
          label_en: "DEMO DURATION",
          type: "text",
        },
        {
          id: "training_status",
          label_mr: "ट्रेनिंग / डेमो स्टेटस (होय/नाही)",
          label_en: "TRANING/ DEMO STATUS (YES/NO)",
          type: "text",
        },
        {
          id: "remark",
          label_mr: "शेरा",
          label_en: "REMARK",
          type: "text",
        },
      ],
    },
    {
      id: "signatures",
      type: "static",
      subfields: [
        {
          id: "owner_signature",
          label_mr: "मालक/व्यवस्थापकाची सही :",
          label_en: "Owner/Manager Signature :",
          type: "text",
        },
        {
          id: "engineer_name",
          label_mr: "इंजिनिअरचे नाव :",
          label_en: "Engineer Name :",
          type: "text",
        },
        {
          id: "signature_date",
          label_mr: "दिनांक :",
          label_en: "Date :",
          type: "date",
        },
      ],
    },
  ],
  equipmentList: [
    { name_mr: "मिल्क मशीन", name_en: "MILK MACHINE" },
    { name_mr: "2 बर्नर भट्टी", name_en: "2 BURNER BHATTI" },
    { name_mr: "बिल मशीन (हार्डवेअर)", name_en: "BILL MACHINE (HARDWARE)" },
    { name_mr: "प्रिंटर", name_en: "PRINTER" },
    { name_mr: "फ्रिज", name_en: "FRIDGE" },
    { name_mr: "एलईडी स्क्रोलिंग बोर्ड", name_en: "LED SCROLLING BOARD" },
    { name_mr: "टीव्ही", name_en: "TV" },
  ],
  submit_button_mr: "सबमिट करा",
  submit_button_en: "Submit",
  submission_message_mr: "डेमो चेकलिस्ट फॉर्म यशस्वीपणे सबमिट झाला आहे.",
  submission_message_en:
    "The demo checklist form has been submitted successfully.",
};

export default YewaleDemoChecklistConfig;