import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../../public/Images/BoardWorksListForm/logo.png'; // Adjust path as needed

// Data for thank-you message, customer details, material quotation, civil work, and quotation process
const projectData = {
  thankYouMessage: {
    mr: "सर आपले खूप खूप धन्यवाद की आपण वरील पूर्ण माहिती आम्हाला दिली आहे आम्ही तुम्हाला प्रोजेक्ट साठी लागणाऱ्या मटेरियल चे कोटेशन पुढील कामाच्या वेळेत 24 तासाच्या आत मध्ये पाठवू आणि त्यानंतर तुम्हाला सिव्हिल कामाबद्दल पूर्ण माहिती दिली जाईल इंजिनीयर कडून\n\nधन्यवाद",
    en: "Sir, thank you very much for providing us with the complete information above. We will send you the quotation for the project materials within 24 hours of working time, and thereafter, full details about the civil work will be provided by the engineer.\n\nThank you",
  },
  customer: {
    name: "Ashish Trimbakar",
    location: "12-D, Subhash Nagar Rd, Subhash Nagar, Jogeshwari East, Mumbai, Maharashtra 400060",
    email: "ashish_trimbakkar@rediffmail.com",
    contact: "91676 22365",
    secondaryEmail: "kedarsapar1996@gmail.com",
  },
  materials: [
    { item_en: "Letter Board Size", item_mr: "लेटर बोर्ड आकार", value: "20x4" },
    { item_en: "ACP Sheet", item_mr: "एसीपी शीट", value: "391 sq.ft" },
    { item_en: "Front Side", item_mr: "समोरचा भाग", value: "20x4" },
    { item_en: "Ceiling Side", item_mr: "छताचा भाग", value: "20x4" },
    { item_en: "Top Side", item_mr: "वरचा भाग", value: "20x2" },
    { item_en: "Left + Right Side", item_mr: "डावीकडे + उजवीकडे", value: "4x4x2" },
    { item_en: "Canopy", item_mr: "कॅनोपी", value: "00" },
    { item_en: "Back", item_mr: "मागचा भाग", value: "20x4" },
    { item_en: "Shop Sink Partition", item_mr: "दुकानातील सिंक विभाजन", value: "5x3" },
    { item_en: "Shutter Patta", item_mr: "शटर पट्टा", value: "8x2x4" },
    { item_en: "Fabrication", item_mr: "फॅब्रिकेशन", value: "395 sq.ft" },
  ],
  civilWork: [
    { item_en: "CCTV", item_mr: "सीसीटीव्ही", value: "Yes" },
    { item_en: "Internet", item_mr: "इंटरनेट", value: "Yes" },
    { item_en: "Painter Oil Paint", item_mr: "पेंटर ऑइल पेंट", value: "360 sq.ft (3 Shutter)" },
    { item_en: "Painter Luster", item_mr: "पेंटर लस्टर", value: "200 sq.ft" },
    { item_en: "Shutter Logo", item_mr: "शटर लोगो", value: "Yes" },
    { item_en: "Plumber", item_mr: "प्लंबर", value: "Regular Work (Water tank planning)" },
    { item_en: "Electrician", item_mr: "इलेक्ट्रिशियन", value: "Regular Work" },
    { item_en: "Wall Fan", item_mr: "वॉल फॅन", value: "02" },
    { item_en: "22W Light", item_mr: "22 वॅट लाइट", value: "03" },
    { item_en: "15W Light", item_mr: "15 वॅट लाइट", value: "12" },
    { item_en: "Exhaust Fan / Ducting Work", item_mr: "एक्झॉस्ट फॅन / डक्टिंग काम", value: "Exhaust Fan 18\"" },
    { item_en: "POP", item_mr: "पीओपी", value: "200 sq.ft (Only Shop)" },
    { item_en: "Floor Tiles", item_mr: "फ्लोअर टाइल्स", value: "200 sq.ft" },
    { item_en: "Otha Tiles", item_mr: "ओथा टाइल्स", value: "60 sq.ft" },
    { item_en: "Wall ACP Sheet", item_mr: "वॉल एसीपी शीट", value: "400 sq.ft (Height-9feet) (10+20+10x9)" },
    { item_en: "Fabrication", item_mr: "फॅब्रिकेशन", value: "300 sq.ft (Height-9feet) (10+20+10x9)" },
    { item_en: "Granite Marble", item_mr: "ग्रॅनाइट मार्बल", value: "11 sq.ft" },
    { item_en: "Plaster", item_mr: "प्लास्टर", value: "432 sq.ft" },
    { item_en: "Potmala", item_mr: "पोटमाला", value: "00 sq.ft" },
    { item_en: "Awning Shed", item_mr: "आच्छादन शेड", value: "Yes" },
    { item_en: "TodFod", item_mr: "तोड़फोड़", value: "Yes" },
  ],
  quotationProcess: [
    {
      question_en: "Has the developer team sent the quotation to the sales department?",
      question_mr: "डेवलपर टीमने सेल्स डिपार्टमेंटला कोटेशन पाठवले का?",
      status: "Yes",
      suggestion_en: "Quotation sent for Yewale project.",
      suggestion_mr: "येवले प्रकल्पासाठी कोटेशन पाठवले आहे.",
      suggestionRequired: false,
      no_suggestion_en: "Proceed after sending quotation.",
      no_suggestion_mr: "कोटेशन पाठवल्यानंतर पुढे जा.",
    },
    {
      question_en: "Has the sales department sent the quotation to the owner?",
      question_mr: "सेल डिपार्टमेंटने ओनरला कोटेशन पाठवले का?",
      status: "No",
      suggestion_en: "Any suggestion in quotation.",
      suggestion_mr: "कोटेशनमध्ये काही सूचना.",
      no_suggestion_en: "Proceed after sending quotation.",
      no_suggestion_mr: "कोटेशन पाठवल्यानंतर पुढे जा.",
      suggestionRequired: true,
    },
    {
      question_en: "Has the owner checked the full quotation?",
      question_mr: "ओनरने पूर्ण कोटेशन चेक केले का?",
      status: "No",
      suggestion_en: "Any suggestion in quotation.",
      suggestion_mr: "कोटेशनमध्ये काही सूचना.",
      no_suggestion_en: "Proceed after sending quotation.",
      no_suggestion_mr: "कोटेशन पाठवल्यानंतर पुढे जा.",
      suggestionRequired: true,
    },
    {
      question_en: "Has the sales department finalized the quotation with the owner?",
      question_mr: "ओनर सोबत सेल्स डिपार्टमेंटचे कोटेशन फायनल झाले का?",
      status: "No",
      suggestion_en: "Any suggestion in quotation.",
      suggestion_mr: "कोटेशनमध्ये काही सूचना.",
      no_suggestion_en: "Kindly finalize the quotation.",
      no_suggestion_mr: "कृपया कोटेशन फायनल करा.",
      suggestionRequired: true,
    },
    {
      question_en: "Has the owner read and understood the terms & conditions of the quotation?",
      question_mr: "ओनरने कोटेशनमधल्या अटी व शर्ती वाचल्या व समजल्या का?",
      status: "No",
      suggestion_en: "Proceed further.",
      suggestion_mr: "पुढे जा.",
      no_suggestion_en: "Kindly explain terms & conditions.",
      no_suggestion_mr: "कृपया अटी व शर्ती स्पष्ट करा.",
      suggestionRequired: false,
    },
    {
      question_en: "Is the owner satisfied with the price and payment terms in the quotation?",
      question_mr: "कोटेशनमधील किंमत व पेमेंट टर्म्सबाबत ओनर सहमत आहेत का?",
      status: "No",
      suggestion_en: "Proceed further.",
      suggestion_mr: "पुढे जा.",
      no_suggestion_en: "Kindly revise as per discussion.",
      no_suggestion_mr: "चर्चेनुसार कृपया सुधारणा करा.",
      suggestionRequired: false,
    },
    {
      question_en: "Has the owner provided written/email confirmation for the quotation?",
      question_mr: "कोटेशनबाबत ओनर कडून लिखित/मेल कन्फर्मेशन मिळाले का?",
      status: "No",
      suggestion_en: "Proceed with next step.",
      suggestion_mr: "पुढील पायरीवर जा.",
      no_suggestion_en: "Kindly follow up.",
      no_suggestion_mr: "कृपया फॉलोअप करा.",
      suggestionRequired: false,
    },
    {
      question_en: "Has the owner provided a Purchase Order (PO) after finalizing the quotation?",
      question_mr: "कोटेशन फाइनल झाल्यानंतर Purchase Order (PO) ओनर कडून मिळाला का?",
      status: "No",
      suggestion_en: "Proceed for execution.",
      suggestion_mr: "कार्यवाहीसाठी पुढे जा.",
      no_suggestion_en: "Kindly collect PO.",
      no_suggestion_mr: "कृपया PO गोळा करा.",
      suggestionRequired: false,
    },
    {
      question_en: "Has the agreement been prepared after finalizing the quotation?",
      question_mr: "कोटेशन फायनल झाल्यावर अॅग्रीमेंट तयार झाले का?",
      status: "No",
      suggestion_en: "Proceed for signature.",
      suggestion_mr: "सहीसाठी पुढे जा.",
      no_suggestion_en: "Kindly prepare agreement.",
      no_suggestion_mr: "कृपया अॅग्रीमेंट तयार करा.",
      suggestionRequired: false,
    },
    {
      question_en: "Has the owner signed the agreement?",
      question_mr: "अॅग्रीमेंट वर ओनरची साईन झाली का?",
      status: "No",
      suggestion_en: "Agreement process complete, proceed to next stage.",
      suggestion_mr: "करार प्रक्रिया पूर्ण, पुढील टप्प्यावर जा.",
      no_suggestion_en: "Follow-up with owner for signature.",
      no_suggestion_mr: "सहीसाठी ओनरशी फॉलोअप करा.",
      suggestionRequired: false,
    },
  ],
};

// Validation messages for toast notifications
const validationMessages = {
  en: { submitSuccess: "Form submitted successfully!" },
  mr: { submitSuccess: "फॉर्म यशस्वीरित्या सबमिट केला!" },
};

// CSS styles for tables and sections
const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
  },
  th: {
    backgroundColor: "#f1f5f9",
    padding: "0.75rem",
    textAlign: "left",
    fontWeight: 600,
    border: "1px solid #e2e8f0",
  },
  td: {
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    verticalAlign: "top",
  },
  section: {
    marginBottom: "2rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.25rem",
  },
};

function internaldiscussionyewale() {
  const [language, setLanguage] = useState("en");
  const [currentStep, setCurrentStep] = useState("thankYou");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(projectData.quotationProcess.map((q) => q.status));
  const [suggestions, setSuggestions] = useState(projectData.quotationProcess.map((q) => q.suggestion_en));
  const [customerDetails, setCustomerDetails] = useState(projectData.customer);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleRadioChange = (index, value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      setSuggestions((prevSuggestions) => {
        const newSuggestions = [...prevSuggestions];
        newSuggestions[index] = value === "Yes" ? projectData.quotationProcess[index].suggestion_en : projectData.quotationProcess[index].no_suggestion_en;
        return newSuggestions;
      });
      return newAnswers;
    });
  };

  const handleSuggestionChange = (index, value) => {
    setSuggestions((prev) => {
      const newSuggestions = [...prev];
      newSuggestions[index] = value;
      return newSuggestions;
    });
  };

  const handleCustomerInputChange = (field, value) => {
    setCustomerDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep === "thankYou") {
      setCurrentStep("customer");
    } else if (currentStep === "customer" && currentQuestionIndex === 0) {
      if (answers[0] === "Yes") {
        setCurrentStep("yewaleData");
      } else {
        setCurrentStep("questions");
        setCurrentQuestionIndex(1);
      }
    } else if (currentStep === "yewaleData") {
      toast.success(validationMessages[language].submitSuccess, {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (currentStep === "questions") {
      if (currentQuestionIndex < projectData.quotationProcess.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        toast.success(validationMessages[language].submitSuccess, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep === "questions") {
      if (currentQuestionIndex > 1) {
        setCurrentQuestionIndex((prev) => prev - 1);
      } else if (currentQuestionIndex === 1) {
        setCurrentStep("customer");
        setCurrentQuestionIndex(0);
      }
    } else if (currentStep === "yewaleData") {
      setCurrentStep("customer");
      setCurrentQuestionIndex(0);
    } else if (currentStep === "customer") {
      setCurrentStep("thankYou");
    }
  };

  const renderThankYouMessage = () => {
    return (
      <div style={styles.section}>
        <h3 className="text-lg font-semibold mb-2">
          {language === "mr" ? "धन्यवाद संदेश" : "Thank You Message"}
        </h3>
        <div className="bg-white p-4 rounded border border-gray-300 whitespace-pre-wrap">
          {language === "mr" ? projectData.thankYouMessage.mr : projectData.thankYouMessage.en}
        </div>
      </div>
    );
  };

  const renderCustomerDetails = () => {
    return (
      <div style={styles.section}>
        <h3 className="text-lg font-semibold mb-2">
          {language === "mr" ? "ग्राहक तपशील" : "Customer Details"}
        </h3>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={styles.td}>{language === "mr" ? "नाव" : "Name"}</td>
              <td style={styles.td}>
                <input
                  type="text"
                  value={customerDetails.name}
                  onChange={(e) => handleCustomerInputChange("name", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>{language === "mr" ? "स्थान" : "Location"}</td>
              <td style={styles.td}>
                <input
                  type="text"
                  value={customerDetails.location}
                  onChange={(e) => handleCustomerInputChange("location", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>{language === "mr" ? "ईमेल" : "Email"}</td>
              <td style={styles.td}>
                <input
                  type="text"
                  value={customerDetails.email}
                  onChange={(e) => handleCustomerInputChange("email", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>{language === "mr" ? "संपर्क क्रमांक" : "Contact Number"}</td>
              <td style={styles.td}>
                <input
                  type="text"
                  value={customerDetails.contact}
                  onChange={(e) => handleCustomerInputChange("contact", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>{language === "mr" ? "दुसरा ईमेल" : "Secondary Email"}</td>
              <td style={styles.td}>
                <input
                  type="text"
                  value={customerDetails.secondaryEmail}
                  onChange={(e) => handleCustomerInputChange("secondaryEmail", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {renderQuotationQuestion(0)}
      </div>
    );
  };

  const renderMaterialQuotation = () => {
    return (
      <div style={styles.section}>
        <h3 className="text-lg font-semibold mb-2">
          {language === "mr" ? "मटेरियल कोटेशन" : "Material Quotation"}
        </h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === "mr" ? "आयटम" : "Item"}</th>
              <th style={styles.th}>{language === "mr" ? "मूल्य" : "Value"}</th>
            </tr>
          </thead>
          <tbody>
            {projectData.materials.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>{language === "mr" ? item.item_mr : item.item_en}</td>
                <td style={styles.td}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderCivilWork = () => {
    return (
      <div style={styles.section}>
        <h3 className="text-lg font-semibold mb-2">
          {language === "mr" ? "सिव्हिल काम" : "Civil Work"}
        </h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === "mr" ? "आयटम" : "Item"}</th>
              <th style={styles.th}>{language === "mr" ? "मूल्य" : "Value"}</th>
            </tr>
          </thead>
          <tbody>
            {projectData.civilWork.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>{language === "mr" ? item.item_mr : item.item_en}</td>
                <td style={styles.td}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderQuotationQuestion = (index) => {
    const currentQuestion = projectData.quotationProcess[index];
    return (
      <div style={styles.section}>
        <h3 className="text-lg font-semibold mb-2">
          {language === "mr" ? "कोटेशन प्रक्रिया" : "Quotation Process"}
        </h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === "mr" ? "प्रश्न" : "Question"}</th>
              <th style={styles.th}>{language === "mr" ? "स्थिती" : "Status"}</th>
              <th style={styles.th}>{language === "mr" ? "सूचना" : "Suggestion"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>
                {language === "mr" ? currentQuestion.question_mr : currentQuestion.question_en}
              </td>
              <td style={styles.td}>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="Yes"
                      checked={answers[index] === "Yes"}
                      onChange={() => handleRadioChange(index, "Yes")}
                      className="mr-2"
                    />
                    {language === "mr" ? "होय" : "Yes"}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="No"
                      checked={answers[index] === "No"}
                      onChange={() => handleRadioChange(index, "No")}
                      className="mr-2"
                    />
                    {language === "mr" ? "नाही" : "No"}
                  </label>
                </div>
              </td>
              <td style={styles.td}>
                {currentQuestion.suggestionRequired && answers[index] === "Yes" ? (
                  <input
                    type="text"
                    value={suggestions[index]}
                    onChange={(e) => handleSuggestionChange(index, e.target.value)}
                    style={styles.input}
                    placeholder={language === "mr" ? "सूचना प्रविष्ट करा" : "Enter suggestion"}
                  />
                ) : (
                  language === "mr"
                    ? (answers[index] === "Yes" ? currentQuestion.suggestion_mr : currentQuestion.no_suggestion_mr)
                    : (answers[index] === "Yes" ? currentQuestion.suggestion_en : currentQuestion.no_suggestion_en)
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-blue-100 p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Yewale Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">
              {language === "mr" ? "YNK" : "YNK"}
            </h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-lg text-center font-bold mb-4">
          {language === "mr" ? "येवले प्रकल्प तपशील" : "Yewale Project Details"}
        </h2>

        {currentStep === "thankYou" && renderThankYouMessage()}
        {currentStep === "customer" && renderCustomerDetails()}
        {currentStep === "yewaleData" && (
          <>
            {renderMaterialQuotation()}
            {renderCivilWork()}
          </>
        )}
        {currentStep === "questions" && renderQuotationQuestion(currentQuestionIndex)}

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="text-gray-500 underline disabled:text-gray-300 hover:text-blue-600"
            disabled={currentStep === "thankYou"}
          >
            {language === "mr" ? "मागे" : "Previous"}
          </button>
          <button
            onClick={handleNext}
            className={`${
              (currentStep === "yewaleData" || (currentStep === "questions" && currentQuestionIndex === projectData.quotationProcess.length - 1))
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-4 py-2 rounded font-medium`}
          >
            {(currentStep === "yewaleData" || (currentStep === "questions" && currentQuestionIndex === projectData.quotationProcess.length - 1))
              ? (language === "mr" ? "सबमिट करा" : "Submit")
              : (language === "mr" ? "पुढे" : "Next")}
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default internaldiscussionyewale;