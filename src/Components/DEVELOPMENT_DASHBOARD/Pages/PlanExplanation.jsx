// src/Components/DEVELOPMENT_DASHBOARD/Pages/PlanExplanation.jsx
import React, { useState } from "react";
import OwnerMaterialChecklistForm from "../planexplanation/nadbramhacomponents/OwnerMaterialChecklistForm.jsx";
import WarrantyPeriodForm from "../planexplanation/nadbramhacomponents/WarrantyPeriodForm.jsx";
import WorkStepsForm from "../planexplanation/nadbramhacomponents/WorkStepsForm.jsx";

import MaterialChecklistForm from "../planexplanation/yewalecomponents/MaterialChecklistForm.jsx";
import WarrantyForm from "../planexplanation/yewalecomponents/WarrantyForm.jsx";
import ConstructionForm from "../planexplanation/yewalecomponents/ConstructionForm.jsx";

function PlanExplanation() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);

  // Map forms for each company
  const formsMap = {
    nadbramha: [
      { name: "Owner Material Checklist", component: <OwnerMaterialChecklistForm /> },
      { name: "Warranty Period", component: <WarrantyPeriodForm /> },
      { name: "Work Steps", component: <WorkStepsForm /> },
    ],
    yewale: [
      { name: "Material Checklist", component: <MaterialChecklistForm /> },
      { name: "Warranty Form", component: <WarrantyForm /> },
      { name: "Construction Form", component: <ConstructionForm /> },
    ],
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Plan Explanation</h2>

      {/* Company Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div
          onClick={() => {
            setSelectedCompany("nadbramha");
            setSelectedForm(null);
          }}
          style={{
            padding: "20px",
            border: "2px solid #007bff",
            borderRadius: "8px",
            cursor: "pointer",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h3>Nadbramha</h3>
          <p>Click to view Nadbramha forms</p>
        </div>

        <div
          onClick={() => {
            setSelectedCompany("yewale");
            setSelectedForm(null);
          }}
          style={{
            padding: "20px",
            border: "2px solid #28a745",
            borderRadius: "8px",
            cursor: "pointer",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h3>Yewale</h3>
          <p>Click to view Yewale forms</p>
        </div>
      </div>

      {/* Show form buttons for selected company */}
      {selectedCompany && (
        <div style={{ marginBottom: "20px" }}>
          <h3>
            {selectedCompany === "nadbramha" ? "Nadbramha Forms" : "Yewale Forms"}
          </h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {formsMap[selectedCompany].map((form, index) => (
              <button
                key={index}
                onClick={() => setSelectedForm(form.component)}
                style={{
                  padding: "10px 15px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                {form.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Render selected form */}
      {selectedForm && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Form</h3>
          {selectedForm}
        </div>
      )}
    </div>
  );
}

export default PlanExplanation;
