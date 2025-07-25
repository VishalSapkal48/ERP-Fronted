import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import hrmApi from "../../ApiCalling/Hrm_Api";

const SalarySlip = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    pan: "", // Maps to CNIC in schema
    doj: "",
    bank: "", // Maps to bankName in schema
    bankAccount: "", // Maps to accountNo in schema
    ifscCode: "", // Maps to IFSCCode in schema
    department: "",
    designation: "", // Maps to jobTitle in schema
    period: "",
    presentDays: "",
    absentDays: "",
    basic: "",
    hra: "",
    specialBonus: "",
    conveyance: "",
    travelAllowances: "",
    shiftAllowances: "",
    overtime: "",
    taxRate: "10", // Default tax rate
    tax: "",
    grossEarnings: "",
    grossDeductions: "",
    takeHomeSalary: "",
  });
  const [error, setError] = useState("");
  const letterRef = useRef(null);

  // Calculate tax based on percentage of gross earnings
  const calculateTax = (grossEarnings, taxRate) => {
    const rate = Number(taxRate || 0) / 100;
    return grossEarnings * rate;
  };

  // Fetch employee data by employeeId
  const fetchEmployeeData = async (employeeId) => {
    if (!employeeId) {
      setFormData((prev) => ({
        ...prev,
        employeeName: "",
        pan: "",
        doj: "",
        bank: "",
        bankAccount: "",
        ifscCode: "",
        department: "",
        designation: "",
        basic: "",
        hra: "",
        specialBonus: "",
        conveyance: "",
        travelAllowances: "",
        shiftAllowances: "",
        overtime: "",
        taxRate: "10",
      }));
      setError("");
      return;
    }
    try {
      const employee = await hrmApi.getEmployeeById(employeeId);
      console.log('Fetched employee data:', employee);
      setFormData((prev) => ({
        ...prev,
        employeeName: employee.name || "",
        pan: employee.CNIC || "",
        doj: employee.hireDate ? new Date(employee.hireDate).toISOString().split("T")[0] : "",
        bank: employee.bankName || "",
        bankAccount: employee.accountNo || "",
        ifscCode: employee.IFSCCode || "",
        department: employee.department || "",
        designation: employee.jobTitle || "",
        basic: employee.netSalary ? employee.netSalary.toString() : "",
        hra: employee.hra ? employee.hra.toString() : "",
        specialBonus: employee.specialBonus ? employee.specialBonus.toString() : "",
        conveyance: employee.conveyance ? employee.conveyance.toString() : "",
        travelAllowances: employee.travelAllowances ? employee.travelAllowances.toString() : "",
        shiftAllowances: employee.shiftAllowances ? employee.shiftAllowances.toString() : "",
        overtime: employee.overtime ? employee.overtime.toString() : "",
        taxRate: employee.taxRate ? employee.taxRate.toString() : "10",
      }));
      setError("");
    } catch (err) {
      console.error('Error fetching employee data:', err.message, err.response?.data, err.response?.status);
      setError(err.message || "कर्मचारी आढळला नाही किंवा चुकीचा ID");
      setFormData((prev) => ({
        ...prev,
        employeeName: "",
        pan: "",
        doj: "",
        bank: "",
        bankAccount: "",
        ifscCode: "",
        department: "",
        designation: "",
        basic: "",
        hra: "",
        specialBonus: "",
        conveyance: "",
        travelAllowances: "",
        shiftAllowances: "",
        overtime: "",
        taxRate: "10",
      }));
    }
  };

  // Debounce fetchEmployeeData
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchEmployeeData(formData.employeeId);
    }, 500);
    return () => clearTimeout(handler);
  }, [formData.employeeId]);

  // Calculate earnings, tax, deductions, and take-home salary
  useEffect(() => {
    const earningsFields = [
      "basic",
      "hra",
      "specialBonus",
      "conveyance",
      "travelAllowances",
      "shiftAllowances",
      "overtime",
    ];
    const totalEarnings = earningsFields.reduce(
      (sum, field) => sum + Number(formData[field] || 0),
      0
    );
    const tax = calculateTax(totalEarnings, formData.taxRate);
    const grossDeductions = tax;
    const takeHomeSalary = totalEarnings - grossDeductions;

    setFormData((prev) => ({
      ...prev,
      grossEarnings: totalEarnings.toString(),
      tax: tax.toString(),
      grossDeductions: grossDeductions.toString(),
      takeHomeSalary: takeHomeSalary.toString(),
    }));
  }, [
    formData.basic,
    formData.hra,
    formData.specialBonus,
    formData.conveyance,
    formData.travelAllowances,
    formData.shiftAllowances,
    formData.overtime,
    formData.taxRate,
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "employeeId") {
      setError("");
    }
  };

  const handleDownloadPDF = () => {
    const input = letterRef.current;
    if (!input) {
      console.error("Ref to salary slip content not found");
      setError("PDF जनरेशन अयशस्वी झाले. कृपया पुन्हा प्रयत्न करा.");
      return;
    }
    // Temporarily remove height restrictions
    input.style.height = "auto";
    input.style.overflow = "visible";

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: true,
      width: input.scrollWidth,
      height: input.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const margin = 10;
      const usableWidth = pageWidth - margin * 2;
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = usableWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = margin; // Start with margin

      // Add first page
      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - margin * 2;

      // Handle multi-page content
      while (heightLeft >= pageHeight - margin * 2) {
        position = heightLeft - imgHeight + margin;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight - margin * 2;
      }

      // Safe PDF filename handling
      const year = formData.period
        ? new Date(formData.period).getFullYear()
        : new Date().getFullYear();
      const month = formData.period
        ? new Date(formData.period).toLocaleString("en-US", { month: "long" })
        : new Date().toLocaleString("en-US", { month: "long" });
      pdf.save(
        `${formData.employeeName || "Employee"}_Salary_Slip_${month}_${year}.pdf`
      );
    }).catch((error) => {
      console.error("PDF generation failed:", error);
      setError("PDF जनरेशन अयशस्वी झाले. कृपया पुन्हा प्रयत्न करा.");
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <div className="bg-white p-6 max-w-3xl w-full shadow-lg rounded-lg mb-6 mx-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Enter Salary Slip Details</h2>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Employee ID", name: "employeeId", type: "text", placeholder: "Enter Employee ID (e.g., EMP123)" },
            { label: "Employee Name", name: "employeeName", type: "text", placeholder: "Enter Employee Name" },
            { label: "PAN", name: "pan", type: "text", placeholder: "Enter PAN Number" },
            { label: "DOJ", name: "doj", type: "date", placeholder: "Select Date of Joining" },
            { label: "Bank", name: "bank", type: "text", placeholder: "Enter Bank Name" },
            { label: "Bank A/c Number", name: "bankAccount", type: "text", placeholder: "Enter Bank Account Number" },
            { label: "IFSC Code", name: "ifscCode", type: "text", placeholder: "Enter IFSC Code" },
            { label: "Department", name: "department", type: "text", placeholder: "Enter Department" },
            { label: "Designation", name: "designation", type: "text", placeholder: "Enter Designation" },
            { label: "Period", name: "period", type: "month", placeholder: "Select Period" },
            { label: "Present Days", name: "presentDays", type: "number", placeholder: "Enter Present Days" },
            { label: "Absent Days", name: "absentDays", type: "number", placeholder: "Enter Absent Days" },
            { label: "Basic", name: "basic", type: "number", placeholder: "Enter Basic Salary" },
            { label: "HRA", name: "hra", type: "number", placeholder: "Enter HRA" },
            { label: "Special Bonus", name: "specialBonus", type: "number", placeholder: "Enter Special Bonus" },
            { label: "Conveyance", name: "conveyance", type: "number", placeholder: "Enter Conveyance Allowance" },
            { label: "Travel Allowances", name: "travelAllowances", type: "number", placeholder: "Enter Travel Allowances" },
            { label: "Shift Allowances", name: "shiftAllowances", type: "number", placeholder: "Enter Shift Allowances" },
            { label: "Overtime", name: "overtime", type: "number", placeholder: "Enter Overtime Pay" },
            { label: "Tax Rate (%)", name: "taxRate", type: "number", placeholder: "Enter Tax Rate" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm text-gray-600 mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </div>

      <div ref={letterRef} className="bg-white p-6 max-w-3xl w-full shadow-lg rounded-lg mx-4 border border-gray-200">
        <div className="bg-yellow-300 p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded">
              <img
                src="/Images/logo.png"
                alt="YNK Enterprises Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  console.error("Logo image failed to load");
                }}
              />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black">YNK ENTERPRISES</h1>
              <p className="text-sm text-gray-600">
                Address: Office No. 307 to 309, Crystal Square, 3rd Floor, Khadi Machine Chowk, Kondhwa, Pune-411048
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Salary slip for month of{" "}
            {formData.period
              ? new Date(formData.period).toLocaleString("en-US", { month: "long" })
              : "N/A"}{" "}
            {formData.period ? new Date(formData.period).getFullYear() : new Date().getFullYear()}
          </p>
        </div>
        <table className="w-full border-collapse text-center mt-4">
          <tbody>
            <tr>
              <td colSpan="4" className="border-b-2 p-2"></td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">ID Number</th>
              <td className="border p-2 text-sm text-gray-600">{formData.employeeId || "N/A"}</td>
              <th className="border p-2 text-sm text-gray-600">Name</th>
              <td className="border p-2 text-sm text-gray-600">{formData.employeeName || "N/A"}</td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Bank</th>
              <td className="border p-2 text-sm text-gray-600">{formData.bank || "N/A"}</td>
              <th className="border p-2 text-sm text-gray-600">PAN Number</th>
              <td className="border p-2 text-sm text-gray-600">{formData.pan || "N/A"}</td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">DOJ</th>
              <td className="border p-2 text-sm text-gray-600">{formData.doj || "N/A"}</td>
              <th className="border p-2 text-sm text-gray-600">Bank A/c Number</th>
              <td className="border p-2 text-sm text-gray-600">{formData.bankAccount || "N/A"}</td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">IFSC Code</th>
              <td className="border p-2 text-sm text-gray-600">{formData.ifscCode || "N/A"}</td>
              <th className="border p-2 text-sm text-gray-600">Department</th>
              <td className="border p-2 text-sm text-gray-600">{formData.department || "N/A"}</td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Designation</th>
              <td className="border p-2 text-sm text-gray-600">{formData.designation || "N/A"}</td>
              <th className="border p-2 text-sm text-gray-600">Present Days</th>
              <td className="border p-2 text-sm text-gray-600">{formData.presentDays || "N/A"}</td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Absent Days</th>
              <td className="border p-2 text-sm text-gray-600">{formData.absentDays || "N/A"}</td>
              <td className="border p-2 text-sm text-gray-600"></td>
              <td className="border p-2 text-sm text-gray-600"></td>
            </tr>
            <tr className="bg-yellow-300">
              <th colSpan="2" className="border p-2 font-semibold">Earnings</th>
              <th colSpan="2" className="border p-2 font-semibold">Deductions</th>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Basic</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.basic || 0).toLocaleString()}</td>
              <th className="border p-2 text-sm text-gray-600">Tax</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.tax || 0).toLocaleString()}</td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">HRA</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.hra || 0).toLocaleString()}</td>
              <td className="border p-2 text-sm text-gray-600"></td>
              <td className="border p-2 text-sm text-gray-600"></td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Special Bonus</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.specialBonus || 0).toLocaleString()}</td>
              <td className="border p-2 text-sm text-gray-600"></td>
              <td className="border p-2 text-sm text-gray-600"></td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Conveyance</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.conveyance || 0).toLocaleString()}</td>
              <td className="border p-2 text-sm text-gray-600"></td>
              <td className="border p-2 text-sm text-gray-600"></td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Travel Allowances</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.travelAllowances || 0).toLocaleString()}</td>
              <td className="border p-2 text-sm text-gray-600"></td>
              <td className="border p-2 text-sm text-gray-600"></td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Shift Allowances</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.shiftAllowances || 0).toLocaleString()}</td>
              <td className="border p-2 text-sm text-gray-600"></td>
              <td className="border p-2 text-sm text-gray-600"></td>
            </tr>
            <tr>
              <th className="border p-2 text-sm text-gray-600">Overtime</th>
              <td className="border p-2 text-sm text-gray-600">₹{Number(formData.overtime || 0).toLocaleString()}</td>
              <td className="border p-2 text-sm text-gray-600"></td>
              <td className="border p-2 text-sm text-gray-600"></td>
            </tr>
            <tr className="bg-green-300">
              <th className="border p-2 font-semibold">Take Home Salary</th>
              <td className="border p-2 font-semibold">₹{Number(formData.takeHomeSalary || 0).toLocaleString()}</td>
              <th className="border p-2 font-semibold">Gross Deductions</th>
              <td className="border p-2 font-semibold">₹{Number(formData.grossDeductions || 0).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all duration-300"
        disabled={!formData.employeeName || !formData.period}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default SalarySlip;