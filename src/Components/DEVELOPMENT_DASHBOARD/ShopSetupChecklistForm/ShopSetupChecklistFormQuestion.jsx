const formConfig = {
  id: "shop_setup_checklist",
  title_mr: "शॉप सेटअप तपासणी सूची",
  title_en: "Shop Setup Checklist",
  submission_message_mr:
    "तुमचा फॉर्म यशस्वीरित्या सबमिट झाला आहे!\nआम्ही लवकरच तुमच्याशी संपर्क साधू.",
  submission_message_en:
    "Your form has been submitted successfully!\nWe will contact you soon.",
  fields: [
    {
      id: "shop_possession",
      question_mr: "शॉपचा ताबा आपल्याला मिळाला आहे का?",
      question_en: "Have you received possession of the shop?",
      type: "yesno",
      required: true,
      followup: {
        yes: {
          message_mr: "शॉपचा ताबा मिळाला आहे.",
          message_en: "Shop possession has been received.",
        },
        no: {
          message_mr: "शॉपचा ताबा अद्याप मिळालेला नाही.",
          message_en: "Shop possession has not been received yet.",
          fields: [
            {
              id: "possession_days",
              question_mr: "किती दिवसांमध्ये ताबा मिळणार आहे?",
              question_en: "In how many days will possession be received?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "2-4_days",
                  label_mr: "२-४ दिवस",
                  label_en: "2-4 days",
                },
                {
                  value: "one_week",
                  label_mr: "एक आठवडा",
                  label_en: "One week",
                },
                {
                  value: "one_month",
                  label_mr: "एक महिना",
                  label_en: "One month",
                },
              ],
            },
            {
              id: "call_again_date",
              question_mr: "आम्ही पुन्हा कधी संपर्क साधावा?",
              question_en: "When should we contact you again?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "specific_date",
                  label_mr: "या तारखेला संपर्क साधा",
                  label_en: "Contact on this date",
                  followup: {
                    fields: [
                      {
                        id: "call_date",
                        question_mr: "तारीख प्रविष्ट करा (YYYY-MM-DD)",
                        question_en: "Enter date (YYYY-MM-DD)",
                        type: "text",
                        required: true,
                        placeholder_mr: "उदा. २०२५-०६-१०",
                        placeholder_en: "e.g., 2025-06-10",
                      },
                    ],
                  },
                },
                {
                  value: "after_possession",
                  label_mr: "ताबा मिळाल्यानंतर मी तुम्हाला फोन करेन.",
                  label_en: "I will call you after I get possession.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "shop_vacant",
      question_mr: "शॉप पूर्णपणे रिकामे आहे का?",
      question_en: "Is the shop completely vacant?",
      type: "yesno",
      required: true,
      followup: {
        yes: {
          message_mr: "शॉप रिकामे आहे.",
          message_en: "The shop is vacant.",
          fields: [
            {
              id: "shop_photo",
              question_mr: "शॉपचा संपूर्ण फोटो पाठवा",
              question_en: "Send a complete photo of the shop",
              type: "file",
              required: true,
            },
            {
              id: "shop_video",
              question_mr: "शॉपचा व्हिडिओ पाठवा",
              question_en: "Send a video of the shop",
              type: "file",
              required: true,
            },
          ],
        },
        no: {
          message_mr: "शॉप अजून रिकामे झालेले नाही.",
          message_en: "The shop is not yet vacant.",
          fields: [
            {
              id: "vacate_responsible",
              question_mr: "शॉप कोण रिकामे करणार आहे?",
              question_en: "Who will vacate the shop?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "shop_owner",
                  label_mr: "दुकान मालक",
                  label_en: "Shop owner",
                },
                {
                  value: "franchisee",
                  label_mr: "फ्रँचायझीधारक",
                  label_en: "Franchisee",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
            {
              id: "vacate_days",
              question_mr: "रिकामे होण्यासाठी किती दिवस लागतील?",
              question_en: "How many days will it take to vacate?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "2-4_days",
                  label_mr: "२-४ दिवस",
                  label_en: "2-4 days",
                },
                {
                  value: "one_week",
                  label_mr: "एक आठवडा",
                  label_en: "One week",
                },
                {
                  value: "one_month",
                  label_mr: "एक महिना",
                  label_en: "One month",
                },
              ],
            },
            {
              id: "call_again_vacate",
              question_mr: "आम्ही पुन्हा कधी संपर्क साधावा?",
              question_en: "When should we contact you again?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "specific_date",
                  label_mr: "या तारखेला संपर्क साधा",
                  label_en: "Contact on this date",
                  followup: {
                    fields: [
                      {
                        id: "vacate_call_date",
                        question_mr: "तारीख प्रविष्ट करा (YYYY-MM-DD)",
                        question_en: "Enter date (YYYY-MM-DD)",
                        type: "text",
                        required: true,
                        placeholder_mr: "उदा. २०२५-०६-१०",
                        placeholder_en: "e.g., 2025-06-10",
                      },
                    ],
                  },
                },
                {
                  value: "after_vacant",
                  label_mr: "शॉप रिकामे झाल्यानंतर मी तुम्हाला फोन करेन.",
                  label_en: "I will call you after it is vacant.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "shutter_size",
      question_mr: "शॉपच्या शटरची साईज किती फूट आहे?",
      question_en: "What is the size of the shop shutter in feet?",
      type: "radio",
      required: true,
      options: [
        { value: "6ft", label_mr: "६ फूट", label_en: "6 ft" },
        { value: "8ft", label_mr: "८ फूट", label_en: "8 ft" },
        { value: "10ft", label_mr: "१० फूट", label_en: "10 ft" },
        { value: "12ft", label_mr: "१२ फूट", label_en: "12 ft" },
      ],
    },
    {
      id: "electrical_supply",
      question_mr: "शॉपमध्ये वीजपुरवठा आहे का?",
      question_en: "Does the shop have an electrical supply?",
      type: "yesno",
      required: true,
      followup: {
        yes: {
          message_mr: "शॉपमध्ये वीजपुरवठा आहे.",
          message_en: "The shop has an electrical supply.",
          fields: [
            {
              id: "light_photo",
              question_mr: "शॉपमधील लाईट चालू असल्याचा फोटो पाठवा",
              question_en: "Send a photo of the lights turned on in the shop",
              type: "file",
              required: true,
            },
            {
              id: "meter_box_photo",
              question_mr: "मीटर बॉक्सचा फोटो पाठवा",
              question_en: "Send a photo of the meter box",
              type: "file",
              required: true,
            },
            {
              id: "mcb_box_photo",
              question_mr: "MCB बॉक्सचा फोटो पाठवा",
              question_en: "Send a photo of the MCB box",
              type: "file",
              required: true,
            },
          ],
        },
        no: {
          message_mr: "शॉपमध्ये वीजपुरवठा नाही.",
          message_en: "The shop does not have an electrical supply.",
          fields: [
            {
              id: "electrical_responsible",
              question_mr: "वीजपुरवठा कोण करून देणार आहे?",
              question_en: "Who will arrange for the electrical supply?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "shop_owner",
                  label_mr: "दुकान मालक",
                  label_en: "Shop owner",
                },
                {
                  value: "franchisee",
                  label_mr: "फ्रँचायझीधारक",
                  label_en: "Franchisee",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
          ],
        },
      },
    },
    {
      id: "drainage_connectivity",
      question_mr: "शॉपमध्ये ड्रेनेजची सोय आहे का?",
      question_en: "Does the shop have drainage connectivity?",
      type: "yesno",
      required: true,
      followup: {
        yes: {
          message_mr: "शॉपमध्ये ड्रेनेजची सोय आहे.",
          message_en: "The shop has drainage connectivity.",
          fields: [
            {
              id: "drainage_photo",
              question_mr: "शॉपमधील ड्रेनेजचा फोटो पाठवा",
              question_en: "Send a photo of the drainage in the shop",
              type: "file",
              required: true,
            },
          ],
        },
        no: {
          message_mr: "शॉपमध्ये ड्रेनेजची सोय नाही.",
          message_en: "The shop does not have drainage connectivity.",
          fields: [
            {
              id: "drainage_responsible",
              question_mr: "ड्रेनेजची सोय कोण करून देणार आहे?",
              question_en: "Who will arrange for the drainage connectivity?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "shop_owner",
                  label_mr: "दुकान मालक",
                  label_en: "Shop owner",
                },
                {
                  value: "franchisee",
                  label_mr: "फ्रँचायझीधारक",
                  label_en: "Franchisee",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
          ],
        },
      },
    },
    {
      id: "water_connectivity",
      question_mr: "शॉपमध्ये पाण्याची सोय आहे का?",
      question_en: "Does the shop have water connectivity?",
      type: "yesno",
      required: true,
      followup: {
        yes: {
          message_mr: "शॉपमध्ये पाण्याची सोय आहे.",
          message_en: "The shop has water connectivity.",
          fields: [
            {
              id: "water_photo",
              question_mr: "पाण्याच्या कनेक्शनचा फोटो पाठवा",
              question_en: "Send a photo of the water connection",
              type: "file",
              required: true,
            },
            {
              id: "water_video",
              question_mr: "नळातून पाणी येत असल्याचा व्हिडिओ पाठवा",
              question_en: "Send a video of water running from the tap",
              type: "file",
              required: true,
            },
          ],
        },
        no: {
          message_mr: "शॉपमध्ये पाण्याची सोय नाही.",
          message_en: "The shop does not have water connectivity.",
          fields: [
            {
              id: "water_responsible",
              question_mr: "पाण्याची सोय कोण करून देणार आहे?",
              question_en: "Who will arrange for the water connectivity?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "shop_owner",
                  label_mr: "दुकान मालक",
                  label_en: "Shop owner",
                },
                {
                  value: "franchisee",
                  label_mr: "फ्रँचायझीधारक",
                  label_en: "Franchisee",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
          ],
        },
      },
    },
    {
      id: "earthing_connectivity",
      question_mr: "शॉपमध्ये अर्थिंगची सोय आहे का?",
      question_en: "Does the shop have earthing connectivity?",
      type: "yesno",
      required: true,
      followup: {
        yes: {
          message_mr: "शॉपमध्ये अर्थिंगची सोय आहे.",
          message_en: "The shop has earthing connectivity.",
          fields: [
            {
              id: "earthing_photo",
              question_mr: "अर्थिंगचा फोटो पाठवा",
              question_en: "Send a photo of the earthing connection",
              type: "file",
              required: true,
            },
            {
              id: "earthing_mcb_box",
              question_mr: "MCB बॉक्सचा फोटो पाठवा",
              question_en: "Send a photo of the MCB box",
              type: "file",
              required: true,
            },
          ],
        },
        no: {
          message_mr: "शॉपमध्ये अर्थिंगची सोय नाही.",
          message_en: "The shop does not have earthing connectivity.",
          fields: [
            {
              id: "earthing_responsible",
              question_mr: "अर्थिंगची सोय कोण करून देणार आहे?",
              question_en: "Who will arrange for the earthing connectivity?",
              type: "radio",
              required: true,
              options: [
                {
                  value: "shop_owner",
                  label_mr: "दुकान मालक",
                  label_en: "Shop owner",
                },
                {
                  value: "franchisee",
                  label_mr: "फ्रँचायझीधारक",
                  label_en: "Franchisee",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
          ],
        },
      },
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
};

// Validation messages (corrected)
const validationMessages = {
  en: {
    answerRequired: "Please provide an answer to the question.",
    followupRequired: "Please provide a value for the follow-up question.",
    imageRequired: "Please upload at least one image or video.",
    checkboxRequired: "Please select at least one option.",
    inputRequired: 'Please specify details for "Other".',
    submitError: "Failed to submit the form. Please try again.",
    submitSuccess: "Form submitted successfully!",
    invalidDateFormat: "Please enter a valid date (YYYY-MM-DD).",
    invalidDate: "Please enter a valid date.",
    pastDate: "The date cannot be in the past.",
  },
  mr: {
    answerRequired: "कृपया प्रश्नाचे उत्तर द्या.",
    followupRequired: "कृपया फॉलो-अप प्रश्नासाठी एक मूल्य प्रदान करा.",
    imageRequired: "कृपया किमान एक फोटो किंवा व्हिडिओ अपलोड करा.",
    checkboxRequired: "कृपया किमान एक पर्याय निवडा.",
    inputRequired: 'कृपया "इतर" साठी तपशील नमूद करा.',
    submitError: "फॉर्म सबमिट करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
    submitSuccess: "फॉर्म यशस्वीरित्या सबमिट झाला!",
    invalidDateFormat: "कृपया वैध तारीख प्रविष्ट करा (YYYY-MM-DD).",
    invalidDate: "कृपया एक वैध तारीख प्रविष्ट करा.",
    pastDate: "तारीख भूतकाळातील असू शकत नाही.",
  },
};

const ShopSetupChecklistFormQuestion = {
  formConfig,
  validationMessages,
};

export default ShopSetupChecklistFormQuestion;