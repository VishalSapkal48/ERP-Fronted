import React, { useState } from "react";
import questions from "./call6Questions";

export default function YewaleCALL6() {
  const [lang, setLang] = useState("mr");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleAnswerChange = (value) => {
    setAnswers({ ...answers, [step]: value });
    setError("");
  };

  const handleNext = () => {
    if (questions[step].type !== "info" && !answers[step]) {
      setError(lang === "mr" ? "कृपया उत्तर निवडा" : "Please select an answer");
      return;
    }
    if (step < questions.length - 1) {
      setStep(step + 1);
      setError("");
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
      setError("");
    }
  };

  const handleSubmit = () => {
    if (questions[step].type !== "info" && !answers[step]) {
      setError(lang === "mr" ? "कृपया उत्तर निवडा" : "Please select an answer");
      return;
    }
    console.log("Form submitted with answers:", answers);
    alert(
      lang === "mr"
        ? "फॉर्म यशस्वीरीत्या सबमिट झाला!"
        : "Form submitted successfully!"
    );
  };

  const currentQuestion = questions[step];

  if (!currentQuestion) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f0f4f8",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "red" }}>No question available for step {step}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "#add8e6",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
            background: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "60px",
                height: "60px", // Corrected from "zijpx" to "60px"
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="../../../../../../public/Images/OnlineSurvey/logo.png"
                alt="YNK Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                margin: 0,
              }}
            >
              YNK
            </h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            style={{
              background: "none",
              border: "none",
              color: "#666",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            {lang === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "30px",
          }}
        >
          {lang === "mr"
            ? "येवले मासिक फीडबॅक फॉर्म"
            : "Yevale Monthly Feedback Form"}
        </h2>

        <div
          style={{
            backgroundColor: "#add8e6",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.5",
              marginBottom: "20px",
            }}
          >
            {currentQuestion[lang]}
          </p>

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              {error}
            </p>
          )}

          {currentQuestion.type === "yesno" && (
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <input
                  type="radio"
                  name="answer"
                  value="हो"
                  checked={answers[step] === "हो"}
                  onChange={() => handleAnswerChange("हो")}
                  style={{ transform: "scale(1.2)" }}
                />
                <span>{lang === "mr" ? "हो" : "Yes"}</span>
              </label>
              <label style={{ display: "flex", gap: "10px" }}>
                <input
                  type="radio"
                  name="answer"
                  value="नाही"
                  checked={answers[step] === "नाही"}
                  onChange={() => handleAnswerChange("नाही")}
                  style={{ transform: "scale(1.2)" }}
                />
                <span>{lang === "mr" ? "नाही" : "No"}</span>
              </label>
            </div>
          )}

          {currentQuestion.type === "text" && (
            <input
              type="text"
              value={answers[step] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder={
                lang === "mr" ? "उत्तर लिहा..." : "Type your answer..."
              }
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "20px",
              }}
            />
          )}

          {currentQuestion.type === "rating" && (
            <select
              value={answers[step] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "20px",
              }}
            >
              <option value="">
                {lang === "mr" ? "रेटिंग निवडा" : "Select Rating"}
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}

          {currentQuestion.type === "info" && (
            <p style={{ color: "#444", fontSize: "15px" }}>
              {lang === "mr"
                ? "ही माहिती फक्त तुमच्या माहितीसाठी आहे."
                : "This is an informational message."}
            </p>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={handlePrevious}
              disabled={step === 0}
              style={{
                padding: "8px 16px",
                backgroundColor: step === 0 ? "#ddd" : "#f5f5f5",
                color: step === 0 ? "#999" : "#666",
                border: "1px solid #ddd",
                borderRadius: "4px",
                cursor: step === 0 ? "not-allowed" : "pointer",
                fontSize: "14px",
              }}
            >
              {lang === "mr" ? "मागे" : "Previous"}
            </button>

            {step === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                style={{
                  padding: "8px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {lang === "mr" ? "सबमिट करा" : "Submit"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                style={{
                  padding: "8px 20px",
                  backgroundColor: "#4285f4",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {lang === "mr" ? "पुढे" : "Next"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}