import tapeImg from "../../../../../public/Images/OnlineSurvey/tape.jpg";
import parkingImg from "../../../../../public/Images/OnlineSurvey/parking.jpg";
import shutterImg from "../../../../../public/Images/OnlineSurvey/shutter_size.jpg";
import boardImg from "../../../../../public/Images/OnlineSurvey/board.jpg";
import lws1Img from "../../../../../public/Images/OnlineSurvey/Left_wall_Side_1.jpg";
import lws2Img from "../../../../../public/Images/OnlineSurvey/Left_wall_Side_2.jpg";
import lws3Img from "../../../../../public/Images/OnlineSurvey/Left_wall_Side_3.jpg";
import rwsImg from "../../../../../public/Images/OnlineSurvey/Right_wall_side.jpg";
import bwsImg from "../../../../../public/Images/OnlineSurvey/B_wall_side.jpg";

const formConfig = {
  title_mr: "शॉप सर्व्हे फॉर्म",
  title_en: "Shop Survey Form",
  navigation_buttons: {
    back_mr: "मागे",
    back_en: "Back",
    next_mr: "पुढे",
    next_en: "Next",
  },
  submit_button_mr: "सबमिट",
  submit_button_en: "Submit",
  fields: [
    {
      id: "q1",
      question_mr: "सर, तुम्हाला मेजरमेंट टेपबद्दल माहिती आहे का?",
      question_en: "Sir, do you know about the measuring tape?",
      type: "yesno",
      followup: {
        no: {
          type: "guide",
          message_mr: "सर, ज्यांना माहिती आहे त्यांना शॉपवर घेऊन या.",
          message_en:
            "Sir, please bring someone to the shop who has this information.",
        },
      },
    },
    {
      id: "q2",
      question_mr: "सर, आपल्याकडे मेजरमेंट टेप आहे का?",
      question_en: "Sir, do you have a measuring tape?",
      image: tapeImg,
      type: "yesno",
      followup: {
        no: {
          type: "guide",
          message_mr: "सर, कृपया हार्डवेअरच्या दुकानातून घेऊन या.",
          message_en: "Sir, please bring it from the hardware store.",
        },
      },
    },
    {
      id: "q3",
      question_mr: "सर, कृपया मला तुमचे सध्याचे गूगल लोकेशन पाठवा.",
      question_en: "Sir, please send me your current Google location.",
      type: "input",
    },
    {
      id: "q4",
      question_mr: "कृपया संपूर्ण शॉपचे वेगवेगळ्या अँगलने फोटो पाठवा.",
      question_en:
        "Please upload photos of the entire shop from different angles.",
      type: "multi",
      components: [
        {
          type: "imageupload",
          image: boardImg,
          message_en:
            "Please upload photos of the entire shop from different angles. Upload a photo of the board.",
          message_mr:
            "कृपया संपूर्ण शॉपचे वेगवेगळ्या अँगलने फोटो पाठवा. बोर्डचा फोटो अपलोड करा.",
          multiple: true,
        },
        {
          type: "imageupload",
          image: shutterImg,
          message_en: "Upload a photo of the shutter size.",
          message_mr: "शटरच्या आकाराचा फोटो अपलोड करा.",
          multiple: true,
        },
        {
          type: "imageupload",
          image: lws1Img,
          message_en: "Upload a photo of the left-side wall.",
          message_mr: "डाव्या बाजूच्या भिंतीचा फोटो अपलोड करा.",
          multiple: true,
        },
        {
          type: "imageupload",
          image: rwsImg,
          message_en: "Upload a photo of the right-side wall.",
          message_mr: "उजव्या बाजूच्या भिंतीचा फोटो अपलोड करा.",
          multiple: true,
        },
        {
          type: "imageupload",
          image: bwsImg,
          message_en: "Upload a photo of the back-side wall.",
          message_mr: "पाठीमागच्या भिंतीचा फोटो अपलोड करा.",
          multiple: true,
        },
      ],
    },
    {
      id: "q5",
      question_mr: "पार्किंगची सोय आहे का?",
      question_en: "Is parking available?",
      image: parkingImg,
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Upload parking photos.",
          message_mr: "पार्किंगचे फोटो अपलोड करा.",
          multiple: true,
        },
      },
    },
    {
      id: "q6",
      question_mr: "मटेरियल ठेवण्यासाठी जागा आहे का?",
      question_en: "Is there space to store material?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Upload photos of the space.",
          message_mr: "जागेचे फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en: "Any other place for unloading material:",
              question_mr: "साहित्य उतरवण्यासाठी इतर कोणतेही ठिकाण:",
            },
          ],
        },
      },
    },
    {
      id: "q7",
      question_mr: "पाण्याचे कनेक्शन आहे का?",
      question_en: "Is there a water connection?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What is the source of the water connection?",
              question_mr: "पाण्याच्या कनेक्शनचा स्रोत काय आहे?",
              options: [
                {
                  value: "corporation",
                  label_en: "Municipal Corporation",
                  label_mr: "महानगरपालिका",
                },
                {
                  value: "borewell",
                  label_en: "Borewell",
                  label_mr: "बोअरवेल",
                },
                { value: "society", label_en: "Society", label_mr: "सोसायटी" },
              ],
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will provide the water connection?",
              question_mr: "पाण्याचे कनेक्शन कोण देणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q8",
      question_mr: "पाणी किती वेळ उपलब्ध असते?",
      question_en: "For how long is water available?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "How long is water available?",
              question_mr: "पाणी किती वेळ उपलब्ध असते?",
              options: [
                { value: "24_hours", label_en: "24 hours", label_mr: "२४ तास" },
                {
                  value: "2_hours_morning",
                  label_en: "2 hours in the morning",
                  label_mr: "सकाळी २ तास",
                },
                {
                  value: "2_hours_morning_evening",
                  label_en: "2 hours in the morning and evening",
                  label_mr: "सकाळी आणि सायंकाळी २-२ तास",
                },
                {
                  value: "alternate_day",
                  label_en: "Every alternate day",
                  label_mr: "एक दिवस आड",
                },
                {
                  value: "every_3_days",
                  label_en: "Once every 3 days",
                  label_mr: "तीन दिवसांतून एकदा",
                },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What arrangement will be made for a water tank?",
              question_mr: "पाणी साठवण्यासाठी टाकीची काय व्यवस्था केली जाईल?",
              options: [
                {
                  value: "1000_ltr",
                  label_en: "1000 liters",
                  label_mr: "१००० लिटर",
                },
                {
                  value: "2000_ltr",
                  label_en: "2000 liters",
                  label_mr: "२००० लिटर",
                },
                {
                  value: "other_provision",
                  label_en: "Any other arrangement",
                  label_mr: "इतर कोणतीही व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q9",
      question_mr: "लाईट मीटर कनेक्शन आहे का?",
      question_en: "Is there an electricity meter connection?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en:
                "What type of electricity meter connection is available?",
              question_mr: "लाईट मीटर कनेक्शन कोणत्या प्रकारचे आहे?",
              options: [
                {
                  value: "single_phase",
                  label_en: "Single Phase",
                  label_mr: "सिंगल फेज",
                },
                {
                  value: "three_phase",
                  label_en: "Three Phase",
                  label_mr: "थ्री फेज",
                },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will provide the electricity meter connection?",
              question_mr: "लाईट मीटर कनेक्शन कोण देणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q10",
      question_mr: "लाईट मीटर कोठे आहे?",
      question_en: "Where is the electricity meter located?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Where is the electricity meter located?",
              question_mr: "लाईट मीटर कोठे आहे?",
              options: [
                {
                  value: "inside_shop",
                  label_en: "Inside the shop",
                  label_mr: "शॉपमध्ये",
                },
                {
                  value: "outside_shop",
                  label_en: "Outside the shop",
                  label_mr: "शॉपच्या बाहेर",
                },
                {
                  value: "in_parking",
                  label_en: "In the parking area",
                  label_mr: "पार्किंगमध्ये",
                },
                {
                  value: "behind_shop",
                  label_en: "Behind the shop",
                  label_mr: "शॉपच्या पाठीमागे",
                },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will provide the electricity meter?",
              question_mr: "लाईट मीटर कोण पुरवणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q11",
      question_mr: "शॉपमध्ये अर्थिंग आहे का?",
      question_en: "Is there earthing in the shop?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Upload earthing photos.",
          message_mr: "अर्थिंगचे फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will provide the earthing?",
              question_mr: "अर्थिंग कोण करून देणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q12",
      question_mr: "ड्रेनेज कनेक्शन आहे का?",
      question_en: "Is there a drainage connection?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Upload photos of the drainage connection.",
          message_mr: "ड्रेनेज कनेक्शनचे फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will provide the drainage connection?",
              question_mr: "ड्रेनेज कनेक्शन कोण करून देणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q13",
      question_mr: "ड्रेनेज चेंबर कार्यरत आहे का?",
      question_en: "Is the drainage chamber functional?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Please upload pictures of the drainage chamber.",
          message_mr: "कृपया ड्रेनेज चेंबरचे फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will make the drainage chamber functional?",
              question_mr: "ड्रेनेज चेंबर कोण पुन्हा सुरू करणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q14",
      question_mr: "चेंबर कनेक्शन आहे का?",
      question_en: "Is there a chamber connection?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Please upload pictures of the chamber.",
          message_mr: "कृपया चेंबरचे फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will provide the chamber connection?",
              question_mr: "चेंबर कनेक्शन कोण देणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q15",
      question_mr: "झाकण उघडून तपासले आहे का?",
      question_en: "Has the lid been opened and checked?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Please upload pictures.",
          message_mr: "कृपया फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "Who will check and maintain the lid?",
              question_mr: "झाकणाची तपासणी आणि देखभाल कोण करणार?",
              options: [
                {
                  value: "shop_owner",
                  label_en: "Shop Owner",
                  label_mr: "शॉप मालक",
                },
                {
                  value: "franchise_owner",
                  label_en: "Franchise Owner",
                  label_mr: "फ्रँचाइझ मालक",
                },
                {
                  value: "other",
                  label_en: "Other Arrangement",
                  label_mr: "इतर व्यवस्था",
                },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
            {
              type: "radio",
              question_en: "What is the maintenance frequency?",
              question_mr: "देखभाल किती वेळा केली जाते?",
              options: [
                { value: "weekly", label_en: "Weekly", label_mr: "साप्ताहिक" },
                { value: "monthly", label_en: "Monthly", label_mr: "मासिक" },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q16",
      question_mr: "पोटमाळा आहे का?",
      question_en: "Is there a loft?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "imageupload",
              message_en: "Please upload pictures of the loft.",
              message_mr: "कृपया पोटमाळ्याचे फोटो अपलोड करा.",
              multiple: true,
            },
            {
              type: "input",
              question_en:
                "What is the size of the loft (length × width in feet)?",
              question_mr:
                "पोटमाळ्याचा आकार किती आहे? (लांबी × रुंदी फूट मध्ये)",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en: "What is the alternative arrangement?",
              question_mr: "पर्यायी व्यवस्था काय आहे?",
            },
          ],
        },
      },
    },
    {
      id: "q17",
      question_mr: "तुम्हाला किती आकाराचा पोटमाळा हवा आहे?",
      question_en: "What size loft do you need?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en:
                "What size of loft would you like to have? (Please specify the dimensions).",
              question_mr:
                "तुम्हाला किती आकाराचा पोटमाळा हवा आहे? (कृपया मापे नमूद करा)",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en: "Is there any other provision for the loft?",
              question_mr: "पोटमाळ्यासाठी इतर कोणती व्यवस्था आहे का?",
            },
          ],
        },
      },
    },
    {
      id: "q18",
      question_mr: "शॉपचे शटर तपासा.",
      question_en: "Check the shop shutter.",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What action is required for the shop shutter?",
              question_mr: "शॉपच्या शटरसाठी कोणती कृती आवश्यक आहे?",
              options: [
                {
                  value: "servicing_required",
                  label_en: "Servicing required",
                  label_mr: "सर्व्हिसिंग आवश्यक आहे",
                },
                {
                  value: "repairing_required",
                  label_en: "Repairing required",
                  label_mr: "दुरुस्ती आवश्यक आहे",
                },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en: "Is a new shutter required?",
              question_mr: "नवीन शटर आवश्यक आहे का?",
            },
          ],
        },
      },
    },
    {
      id: "q19",
      question_mr: "भिंतीला प्लास्टर आहे का?",
      question_en: "Is there plaster on the wall?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What type of plaster is on the wall?",
              question_mr: "भिंतीला कोणत्या प्रकारचे प्लास्टर आहे?",
              options: [
                {
                  value: "cement_plaster",
                  label_en: "Cement plaster",
                  label_mr: "सिमेंट प्लास्टर",
                },
                {
                  value: "pop_plaster",
                  label_en: "POP plaster",
                  label_mr: "POP प्लास्टर",
                },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "imageupload",
              message_en:
                "Please upload a picture showing the wall's condition.",
              message_mr: "कृपया भिंतीची स्थिती दर्शवणारा फोटो अपलोड करा.",
              multiple: true,
            },
          ],
        },
      },
    },
    {
      id: "q20",
      question_mr: "रोलिंग शेडचे काम करायचे आहे का?",
      question_en: "Is rolling shed work required?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "imageupload",
              message_en: "Please upload pictures of the rolling shed.",
              message_mr: "कृपया रोलिंग शेडचे फोटो अपलोड करा.",
              multiple: true,
            },
            {
              type: "input",
              question_en:
                "What is the size of the rolling shed (length × width in feet)?",
              question_mr:
                "रोलिंग शेडचा आकार किती आहे? (लांबी × रुंदी फूट मध्ये)",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en: "Is there any other provision?",
              question_mr: "इतर कोणती व्यवस्था आहे का?",
            },
          ],
        },
      },
    },
    {
      id: "q21",
      question_mr: "पाण्याची टाकी आहे का?",
      question_en: "Is there a water tank?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en:
                "What is the capacity of the water tank (in liters)?",
              question_mr: "पाण्याच्या टाकीची क्षमता किती लिटर आहे?",
              options: [
                {
                  value: "1000ltr",
                  label_en: "1000 liters",
                  label_mr: "१००० लिटर",
                },
                {
                  value: "2000ltr",
                  label_en: "2000 liters",
                  label_mr: "२००० लिटर",
                },
                {
                  value: "3000ltr",
                  label_en: "3000 liters",
                  label_mr: "३००० लिटर",
                },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en: "Is there any other provision?",
              question_mr: "इतर कोणती व्यवस्था आहे का?",
            },
          ],
        },
      },
    },
    {
      id: "q22",
      question_mr: "टाकीत पाणी चढवण्यासाठी मोटर आहे का?",
      question_en: "Is there a motor to pump water into the tank?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What is the capacity of the water pump motor?",
              question_mr: "पाणी पंपाच्या मोटरची क्षमता किती आहे?",
              options: [
                { value: "0.5", label_en: "0.5 HP", label_mr: "०.५ एचपी" },
                { value: "1", label_en: "1 HP", label_mr: "१ एचपी" },
                { value: "2", label_en: "2 HP", label_mr: "२ एचपी" },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "input",
              question_en: "Is there any other provision?",
              question_mr: "इतर कोणती व्यवस्था आहे का?",
            },
          ],
        },
      },
    },
    {
      id: "q23",
      question_mr: "पोटमाळ्यासाठी जिना आहे का?",
      question_en: "Is there a staircase/ladder for the loft?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "imageupload",
              message_en: "Please upload pictures of the loft staircase.",
              message_mr: "कृपया पोटमाळ्याच्या जिन्याचे फोटो अपलोड करा.",
              multiple: true,
            },
          ],
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What is the way to access the loft?",
              question_mr: "पोटमाळ्यावर जाण्यासाठी कोणती व्यवस्था आहे?",
              options: [
                {
                  value: "separate_staircase",
                  label_en: "Separate staircase",
                  label_mr: "स्वतंत्र जिना",
                },
                { value: "other", label_en: "Other", label_mr: "इतर" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया नमूद करा:",
            },
          ],
        },
      },
    },
    {
      id: "q24",
      question_mr: "काम करताना शेजारच्या दुकानदाराची परवानगी आहे का?",
      question_en:
        "Do you have permission from the neighboring shopkeeper to carry out the work?",
      type: "yesno",
      followup: {
        yes: {
          type: "radio",
          question_en: "Until what time is permission granted?",
          question_mr: "परवानगी किती वेळेपर्यंत आहे?",
          options: [
            {
              value: "giving",
              label_mr: "परवानगी घेऊन देणार",
              label_en: "Will arrange permission",
            },
            {
              value: "6pm",
              label_mr: "सायंकाळी ६ वाजेपर्यंत",
              label_en: "Until 6 PM",
            },
            {
              value: "afternoon",
              label_mr: "दुपारी १२ नंतर",
              label_en: "After 12 PM",
            },
          ],
        },
        no: {
          type: "input",
          question_en: "Please specify the plan to obtain permission:",
          question_mr: "कृपया परवानगी मिळवण्यासाठी काय योजना आहे ते सांगा:",
        },
      },
    },
    {
      id: "q25",
      question_mr:
        "शॉपमध्ये टॉयलेट/बाथरूम आहे का आणि त्याचे काही काम करायचे आहे का?",
      question_en:
        "Is there a toilet/bathroom in the shop, and does any work need to be done on it?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_mr:
                "टॉयलेट/बाथरूममध्ये काही दुरुस्तीचे काम करायचे आहे का?",
              question_en:
                "Is there any repair work needed in the toilet/bathroom?",
              options: [
                {
                  value: "leakage",
                  label_mr: "पाण्याच्या गळतीची समस्या आहे",
                  label_en: "There is a water leakage issue",
                },
                {
                  value: "tiles",
                  label_mr: "फ्लोअर टाइल्स खराब आहेत",
                  label_en: "Floor tiles are damaged",
                },
                {
                  value: "wash_basin",
                  label_mr: "वॉश बेसिन खराब आहे",
                  label_en: "Wash basin is damaged",
                },
                {
                  value: "no_work",
                  label_mr: "काहीही काम करायचे नाही",
                  label_en: "No work needed",
                },
              ],
            },
          ],
        },
        no: null,
      },
    },
    {
      id: "q26",
      question_mr: "शॉपमध्ये काही तोडफोडीचे काम आहे का?",
      question_en: "Is there any demolition work required in the shop?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "checkbox",
              question_mr: "कोणती तोडफोडीची कामे करायची आहेत?",
              question_en: "Which demolition works are required?",
              options: [
                {
                  value: "floor_breaking",
                  label_mr: "फ्लोअरिंग तोडणे",
                  label_en: "Breaking floor",
                },
                {
                  value: "wall_scraping",
                  label_mr: "भिंत खरवडणे",
                  label_en: "Scraping wall",
                },
                {
                  value: "wall_breaking",
                  label_mr: "भिंत तोडणे",
                  label_en: "Breaking wall",
                },
                {
                  value: "remove_old_tank",
                  label_mr: "जुनी पाण्याची टाकी काढणे",
                  label_en: "Remove old water tank",
                },
                {
                  value: "remove_old_board",
                  label_mr: "जुना बोर्ड काढणे",
                  label_en: "Remove old board",
                },
                {
                  value: "remove_old_pop",
                  label_mr: "जुने POP काढणे",
                  label_en: "Remove old POP",
                },
                {
                  value: "remove_rabbit",
                  label_mr: "उंच फ्लोअरिंग काढणे",
                  label_en: "Remove raised floor structure",
                },
              ],
            },
          ],
        },
        no: null,
      },
    },
    {
      id: "q27",
      question_mr: "शॉपमध्ये काही वीट बांधकामाचे काम आहे का?",
      question_en: "Is there any brick construction work in the shop?",
      type: "yesno",
      followup: {
        yes: {
          type: "input",
          question_en:
            "Please specify the details of the brick construction work:",
          question_mr: "कृपया वीट बांधकामाच्या कामाचा तपशील द्या:",
        },
        no: null,
      },
    },
    {
      id: "q28",
      question_mr: "इंटरनेट कनेक्शन आहे का?",
      question_en: "Is there an internet connection?",
      type: "yesno",
      followup: {
        yes: {
          type: "input",
          question_en: "Please specify the internet connection details:",
          question_mr: "कृपया इंटरनेट कनेक्शनचा तपशील द्या:",
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "If not, what is the alternative arrangement?",
              question_mr: "इंटरनेट नसल्यास, पर्यायी व्यवस्था काय आहे?",
              options: [
                {
                  value: "new",
                  label_mr: "नवीन कनेक्शनसाठी अर्ज करत आहोत",
                  label_en: "Applying for a new connection",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया नमूद करा:",
            },
          ],
        },
      },
    },
    {
      id: "q29",
      question_mr: "इलेक्ट्रिकलचे काम किती आहे?",
      question_en: "How much electrical work is required?",
      type: "yesno",
      followup: {
        yes: {
          type: "input",
          question_en: "Please provide details.",
          question_mr: "कृपया तपशील द्या.",
        },
        no: null,
      },
    },
    {
      id: "q30",
      question_mr: "एक्झॉस्ट पॉइंट आहे का?",
      question_en: "Is there an exhaust point?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Please upload pictures of the exhaust point.",
          message_mr: "कृपया एक्झॉस्ट पॉइंटचे फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What is the alternative arrangement?",
              question_mr: "पर्यायी व्यवस्था काय आहे?",
              options: [
                {
                  value: "talking_to_new_one",
                  label_mr: "नवीन बसवणार",
                  label_en: "Planning to install a new one",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया नमूद करा:",
            },
          ],
        },
      },
    },
    {
      id: "q31",
      question_mr: "चिमणीची आवश्यकता आहे का?",
      question_en: "Is a chimney required?",
      type: "yesno",
      followup: {
        yes: {
          type: "input",
          question_en: "Please specify the chimney requirements:",
          question_mr: "कृपया चिमणीच्या आवश्यकतेबद्दल माहिती द्या:",
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What is the alternative arrangement?",
              question_mr: "पर्यायी व्यवस्था काय आहे?",
              options: [
                {
                  value: "talking_to_new_one",
                  label_mr: "नवीन बसवणार",
                  label_en: "Planning to install a new one",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया नमूद करा:",
            },
          ],
        },
      },
    },
    {
      id: "q32",
      question_mr: "स्टेज बसवण्यासाठी जागा आहे का?",
      question_en: "Is there space to install a stage?",
      type: "yesno",
      followup: {
        yes: {
          type: "imageupload",
          message_en: "Upload a photo of the space for the stage.",
          message_mr: "स्टेजसाठी जागेचा फोटो अपलोड करा.",
          multiple: true,
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What is the alternative arrangement?",
              question_mr: "पर्यायी व्यवस्था काय आहे?",
              options: [
                {
                  value: "talking_to_new_one",
                  label_mr: "जागा तयार करणार",
                  label_en: "Planning to create space",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया नमूद करा:",
            },
          ],
        },
      },
    },
    {
      id: "q33",
      question_mr: "प्लंबिंगचे काही काम आहे का?",
      question_en: "Is there any plumbing work required?",
      type: "yesno",
      followup: {
        yes: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "How many square feet?",
              question_mr: "किती चौरस फूट?",
              options: [
                {
                  value: "100",
                  label_mr: "१०० चौरस फूट",
                  label_en: "100 sq ft",
                },
                {
                  value: "500",
                  label_mr: "५०० चौरस फूट",
                  label_en: "500 sq ft",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
        no: null,
      },
    },
    {
      id: "q34",
      question_mr: "बॅटरी बॅकअप आहे का?",
      question_en: "Is there a battery backup?",
      type: "yesno",
      followup: {
        yes: {
          type: "input",
          question_en: "Please specify the battery backup details:",
          question_mr: "कृपया बॅटरी बॅकअपचा तपशील द्या:",
        },
        no: {
          type: "multi",
          components: [
            {
              type: "radio",
              question_en: "What is the alternative arrangement?",
              question_mr: "पर्यायी व्यवस्था काय आहे?",
              options: [
                {
                  value: "talking_to_new_one",
                  label_mr: "नवीन बसवणार",
                  label_en: "Planning to install a new one",
                },
                { value: "other", label_mr: "इतर", label_en: "Other" },
              ],
            },
            {
              type: "input",
              question_en: "If other, please specify:",
              question_mr: "इतर असल्यास, कृपया माहिती द्या:",
            },
          ],
        },
      },
    },
    {
      id: "q35",
      question_mr: "शॉपचे प्रवेशद्वार कोणत्या दिशेला आहे?",
      question_en: "In which direction is the shop entrance?",
      type: "radio",
      options: [
        { value: "east", label_mr: "पूर्व", label_en: "East" },
        { value: "west", label_mr: "पश्चिम", label_en: "West" },
        { value: "south", label_mr: "दक्षिण", label_en: "South" },
        { value: "north", label_mr: "उत्तर", label_en: "North" },
      ],
      followup: null,
    },
  ],
};

const validationMessages = {
  en: {
    answerRequired: "Please provide an answer to the question.",
    followupRequired: "Please provide a value for the follow-up question.",
    imageRequired: "Please upload at least one image.",
    checkboxRequired: "Please select at least one option.",
    inputRequired: "Please specify details for 'Other'.",
    submitError: "Failed to submit the form. Please try again.",
    submitSuccess: "Form submitted successfully!",
  },
  mr: {
    answerRequired: "कृपया प्रश्नाचे उत्तर द्या.",
    followupRequired: "कृपया फॉलो-अप प्रश्नासाठी उत्तर द्या.",
    imageRequired: "कृपया किमान एक फोटो अपलोड करा.",
    checkboxRequired: "कृपया किमान एक पर्याय निवडा.",
    inputRequired: "कृपया 'इतर' साठी तपशील नमूद करा.",
    submitError: "फॉर्म सबमिट करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
    submitSuccess: "फॉर्म यशस्वीरित्या सबमिट झाला!",
  },
};

const OnlineSurveyQuestion = {
  formConfig,
  validationMessages,
};

export default OnlineSurveyQuestion;