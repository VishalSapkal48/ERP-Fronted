const serviceFeedbackQuestions = [
  {
    id: 1,
    mr: "तुमचा तक्रार आयडी काय आहे?",
    en: "What is your Complaint ID?",
    type: "text",
  },
  {
    id: 2,
    mr: "तुमच्यासाठी नियुक्त केलेल्या तंत्रज्ञाचे (technician) नाव काय आहे?",
    en: "What is the name of the assigned technician?",
    type: "text",
  },
  {
    id: 3,
    mr: "तुमच्या आउटलेटचे नाव काय आहे?",
    en: "What is the name of the outlet?",
    type: "text",
  },
  {
    id: 4,
    mr: "मालकाचा संपर्क क्रमांक (owner's contact number) काय आहे?",
    en: "What is the owner’s contact number?",
    type: "text",
  },
  {
    id: 5,
    mr: "तंत्रज्ञाने (technician) कोणत्या तारखेला भेट दिली?",
    en: "What was the visit date?",
    type: "date", // 'text' वरून 'date' मध्ये बदलले
  },
  {
    id: 6,
    mr: "मालकाची स्वाक्षरी (owner's signature) काय आहे?",
    en: "What is the owner’s signature?",
    type: "text",
  },
  {
    id: 7,
    mr: "सेवा शुल्क किती आहे?",
    en: "What is the service charge?",
    type: "text",
  },
  {
    id: 8,
    mr: "प्रवास शुल्क किती आहे?",
    en: "What is the travel charge?",
    type: "text",
  },
  {
    id: 9,
    mr: "इतर शुल्क किती आहे?",
    en: "What are the other charges?", // 'charge' चे 'charges' केले
    type: "text",
  },
  {
    id: 10,
    mr: "स्टीमरमध्ये काही समस्या होती का?",
    en: "Was there an issue with the steamer?",
    type: "yesno",
  },
  {
    id: 11,
    mr: "बॉयलरमध्ये काही समस्या होती का?",
    en: "Was there an issue with the boiler?",
    type: "yesno",
  },
  {
    id: 12,
    mr: "कॉफी मशीनमध्ये काही समस्या होती का?",
    en: "Was there an issue with the coffee machine?",
    type: "yesno",
  },
  {
    id: 13,
    mr: "गॅस बर्नर भट्टीमध्ये काही समस्या होती का?",
    en: "Was there an issue with the gas burner bhatti?",
    type: "yesno",
  },
  {
    id: 14,
    mr: "अकासा / थॉमसन फ्रायरमध्ये काही समस्या होती का?",
    en: "Was there an issue with the Akasa / Thomson Fryer?",
    type: "yesno",
  },
  {
    id: 15,
    mr: "POS बिलिंग मशीनमध्ये काही समस्या होती का?",
    en: "Was there an issue with the POS Billing Machine?",
    type: "yesno",
  },
  {
    id: 16,
    mr: "सॉफ्टवेअर आणि थर्मल प्रिंटरमध्ये काही समस्या होती का?",
    en: "Was there an issue with the software and thermal printer?",
    type: "yesno",
  },
  {
    id: 17,
    mr: "हॉट पॅन विथ बाऊलमध्ये काही समस्या होती का?",
    en: "Was there an issue with the hot pan with bowl?",
    type: "yesno",
  },
  {
    id: 18,
    mr: "लेटर बोर्ड किंवा सायनेज बोर्डमध्ये काही समस्या होती का?",
    en: "Was there an issue with the Letter Board or Signage Board?", // 'signage' कॅपिटल केले
    type: "yesno",
  },
  {
    id: 19,
    mr: "मिक्सरमध्ये काही समस्या होती का?",
    en: "Was there an issue with the mixer?",
    type: "yesno",
  },
  {
    id: 20,
    mr: "फ्रीजमध्ये काही समस्या होती का?", // 'फ्रिज' शब्द सुधारला
    en: "Was there an issue with the fridge?",
    type: "yesno",
  },
  {
    id: 21,
    mr: "जर काही समस्या होती, तर तंत्रज्ञ काल आला होता का आणि समस्या सोडवली गेली आहे का?",
    en: "If there was an issue, did the technician come yesterday — has the issue been resolved?", // 'then' काढून 'did' जोडले
    type: "yesno",
  },
  {
    id: 22,
    mr: "चाचणी आणि तपासणी झाली आहे का? मशीन व्यवस्थित काम करत आहे का?",
    en: "Has the testing and checking been done? Is the machine working fine?",
    type: "yesno",
  },
  {
    id: 23,
    mr: "आम्ही दिलेल्या ग्राहक सेवेबद्दल तुम्ही समाधानी आहात का?",
    en: "Are you satisfied with the customer service we provided you?",
    type: "yesno",
  },
  {
    id: 24,
    mr: "तुमच्या काही अतिरिक्त सूचना किंवा प्रतिक्रिया आहेत का?",
    en: "Do you have any additional comments or suggestions?",
    type: "text",
  },
  {
    id: 25,
    mr: "तुमच्या माहितीसाठी: जर काही समस्या असेल, तर 9767893000 वर कॉल करा.",
    en: "For your information: If there is any issue, call on 9767893000.",
    type: "info",
  },
];

export default serviceFeedbackQuestions;
