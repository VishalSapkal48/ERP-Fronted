const TermsandConditionQuestion = {
  en: {
    title: "Terms and Conditions",
    subheader: "Please read and accept the terms and conditions below.",
    tableHeaders: ["Sr. No.", "Description", "Accept"],
    question: "Do you agree to all the terms and conditions?",
    yes: "Yes",
    no: "No",
    submit: "Submit",
    allCheckedError: "Please accept all the terms and conditions to proceed.",
    agreementError:
      "Please select whether you agree to the terms and conditions.",
    successMessage: "Thank you! Your agreement has been recorded successfully.",
    submitError: "Failed to submit the form. Please try again.",
  },
  mr: {
    title: "नियम व अटी",
    subheader: "कृपया खालील नियम व अटी वाचून स्वीकारा.",
    tableHeaders: ["अनु. क्र.", "तपशील", "स्वीकृती"],
    question: "तुम्ही सर्व नियमांशी आणि अटींशी सहमत आहात का?",
    yes: "होय",
    no: "नाही",
    submit: "सबमिट करा",
    allCheckedError: "कृपया पुढे जाण्यासाठी सर्व नियम व अटी स्वीकारा.",
    agreementError:
      "कृपया तुम्ही नियमांशी आणि अटींशी सहमत आहात की नाही हे निवडा.",
    successMessage: "धन्यवाद! तुमची संमती यशस्वीरित्या नोंदवली गेली आहे.",
    submitError: "फॉर्म सबमिट करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
  },
};

const terms = [
  {
    id: 1,
    description_en: "The validity period of the quotation will be 1 month.",
    description_mr: "कोटेशनचा वैधता कालावधी १ महिना असेल.",
  },
  {
    id: 2,
    description_en: "GST will be applicable as per government norms.",
    description_mr: "जीएसटी सरकारी नियमांनुसार लागू होईल.",
  },
  {
    id: 3,
    description_en:
      "After 1 month, the quotation is subject to change based on market prices.",
    description_mr: "१ महिन्यानंतर, कोटेशन बाजारभावानुसार बदलू शकते.",
  },
  {
    id: 4,
    description_en: "The prices of branded items are subject to change.",
    description_mr: "ब्रँडेड वस्तूंच्या किमती बदलू शकतात.",
  },
  {
    id: 5,
    description_en:
      "The validity of the quotation provided to the customer will be 20 days.",
    description_mr: "ग्राहकाला दिलेल्या कोटेशनची वैधता २० दिवस असेल.",
  },
  {
    id: 6,
    description_en:
      "If the quotation is not finalized within the specified period, the prices may be revised.",
    description_mr:
      "जर कोटेशन दिलेल्या कालावधीत अंतिम झाले नाही, तर किमती बदलू शकतात.",
  },
  {
    id: 7,
    description_en:
      "The service and warranty for electronic goods will be as per the MEG Co. policy.",
    description_mr:
      "इलेक्ट्रॉनिक वस्तूंची सेवा व वॉरंटी MEG कंपनीच्या धोरणानुसार असेल.",
  },
  {
    id: 8,
    description_en:
      "The branch owner must get all civil work done by a local vendor.",
    description_mr:
      "शाखा मालकाने सर्व सिव्हिल काम स्थानिक विक्रेत्याकडूनच करून घ्यावे.",
  },
  {
    id: 9,
    description_en:
      "All necessary details regarding civil drawings, material brands, and quality will be provided by the company.",
    description_mr:
      "आवश्यक सिव्हिल रेखाचित्रे, साहित्याचे ब्रँड व गुणवत्ता याबद्दलची सर्व माहिती कंपनीद्वारे पुरवली जाईल.",
  },
  {
    id: 10,
    description_en:
      "Any changes to the quotation may result in a revision of the total amount.",
    description_mr: "कोटेशनमध्ये कोणताही बदल झाल्यास एकूण रकमेत बदल होऊ शकतो.",
  },
];

export { TermsandConditionQuestion, terms };