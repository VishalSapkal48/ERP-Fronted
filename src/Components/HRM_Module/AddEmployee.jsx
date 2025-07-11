import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hrmApi from "../../ApiCalling/Hrm_Api";

const AddEmployee = () => {
  const navigate = useNavigate();
  const tabs = ["Employee Info", "Contact", "Payroll", "PfAccount", "Security"];
  const [activeTab, setActiveTab] = useState("Employee Info");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    department: "",
    jobTitle: "",
    manager: "",
    workLocation: "",
    email: "",
    workPhone: "",
    homePhone: "",
    emergencyPhone: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    country: "",
    hireDate: "",
    joiningDate: "",
    nextSalary: "",
    paymentMethod: "",
    employeeType: "",
    bankName: "",
    accountTitle: "",
    accountNo: "",
    IFSCCode: "",
    location: "",
    designation: "",
    cnnic: "",
    pfAccountNumber: "",
    pfType: "",
    employerContributionPf: "",
    employeeContributionPf: "",
    ssesType: "",
    employerContributionSses: "",
    employeeContributionSses: "",
    eobiType: "",
    employerContributionEobi: "",
    employeeContributionEobi: "",
    esicType: "",
    employerContributionEsic: "",
    employeeContributionEsic: "",
    status: "active",
    separationDate: "",
    username: "",
    password: "",
    reenterPassword: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const requiredFields = {
    "Employee Info": ["employeeId", "name", "department", "jobTitle", "email", "nextSalary", "paymentMethod", "employeeType", "status", "date"],
    Contact: ["email", "workPhone", "homePhone", "emergencyPhone"],
    Payroll: ["nextSalary", "paymentMethod", "employeeType"],
    PfAccount: [],
    Security: ["username", "password", "reenterPassword"],
  };

  const validateForm = () => {
    const newErrors = {};
    const currentFields = requiredFields[activeTab];
    const phoneFields = ["workPhone", "homePhone", "emergencyPhone"];

    currentFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1").trim()} is required`;
      } else if (phoneFields.includes(field) && !/^\+?\d{10,15}$/.test(formData[field])) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1").trim()} must be a valid phone number (10-15 digits)`;
      }
    });

    if (activeTab === "Employee Info" && formData.employeeId) {
      if (!/^[a-zA-Z0-9]{3,20}$/.test(formData.employeeId)) {
        newErrors.employeeId = "Employee ID must be alphanumeric and 3-20 characters long";
      }
    }

    if (activeTab === "Employee Info" && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (activeTab === "Security" && formData.password !== formData.reenterPassword) {
      newErrors.reenterPassword = "Passwords do not match";
    }

    if (activeTab === "Security" && formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      "nextSalary",
      "employerContributionPf",
      "employeeContributionPf",
      "employerContributionSses",
      "employeeContributionSses",
      "employerContributionEobi",
      "employeeContributionEobi",
      "employerContributionEsic",
      "employeeContributionEsic",
    ];
    const dateFields = ["dob", "hireDate", "joiningDate", "separationDate", "date"];

    let newValue = value;

    if (numericFields.includes(name)) {
      newValue = value === "" ? "" : Number(value) || "";
    } else if (dateFields.includes(name)) {
      newValue = value ? value : "";
    } else if (name === "status") {
      newValue = value.toLowerCase();
    }

    setFormData({ ...formData, [name]: newValue });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors({ ...errors, profileImage: "Image size must be less than 2MB" });
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Store base64 string
        setErrors({ ...errors, profileImage: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (!validateForm()) {
      console.log("Validation errors:", errors);
      return;
    }
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all required fields across tabs
    let allErrors = {};
    Object.values(requiredFields).flat().forEach((field) => {
      if (!formData[field]) {
        allErrors[field] = `${field.replace(/([A-Z])/g, " $1").trim()} is required`;
      }
    });
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setActiveTab("Employee Info"); // Redirect to first tab with errors
      return;
    }

    if (!validateForm()) {
      console.log("Validation errors on submit:", errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const employeeData = {
        ...formData,
        employeeId: formData.employeeId.trim(),
        username: formData.username.trim(),
        email: formData.email.trim().toLowerCase(),
        profileImage: profileImage || "",
      };

      const numericFields = [
        "nextSalary",
        "employerContributionPf",
        "employeeContributionPf",
        "employerContributionSses",
        "employeeContributionSses",
        "employerContributionEobi",
        "employeeContributionEobi",
        "employerContributionEsic",
        "employeeContributionEsic",
      ];
      const dateFields = ["dob", "hireDate", "joiningDate", "separationDate", "date"];

      numericFields.forEach((field) => {
        employeeData[field] = employeeData[field] === "" ? null : Number(employeeData[field]);
      });

      dateFields.forEach((field) => {
        employeeData[field] = employeeData[field] ? new Date(employeeData[field]).toISOString() : null;
      });

      delete employeeData.reenterPassword;

      const response = await hrmApi.createEmployee(employeeData);
      console.log("API Response:", response);
      setShowModal(true);
    } catch (error) {
      const errorMessage =
        error.message.includes("duplicate key") || error.message.includes("Duplicate")
          ? "Email or Username already exists"
          : error.message || "Failed to add employee";
      console.error("Submit error:", errorMessage, error);
      setErrors({ ...errors, submit: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/employees");
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/employees");
  };

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg mb-4">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${activeTab === tab ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-b-lg shadow-md">
        <div className="flex items-center space-x-6 mb-6">
          <div className="flex-1">
            {activeTab === "Employee Info" && (
              <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Employee Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.profileImage && <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                    pattern="[a-zA-Z0-9]{3,20}"
                    title="Employee ID must be alphanumeric and 3-20 characters"
                  />
                  {errors.employeeId && <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Manager</label>
                  <input
                    type="text"
                    name="manager"
                    value={formData.manager}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Hire Date</label>
                  <input
                    type="date"
                    name="hireDate"
                    value={formData.hireDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Separation Date</label>
                  <input
                    type="date"
                    name="separationDate"
                    value={formData.separationDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>
              </div>
            )}
            {activeTab === "Contact" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Phone</label>
                  <input
                    type="text"
                    name="workPhone"
                    value={formData.workPhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.workPhone && <p className="text-red-500 text-sm mt-1">{errors.workPhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Home Phone</label>
                  <input
                    type="text"
                    name="homePhone"
                    value={formData.homePhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.homePhone && <p className="text-red-500 text-sm mt-1">{errors.homePhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Emergency Phone</label>
                  <input
                    type="text"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Location</label>
                  <input
                    type="text"
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            )}
            {activeTab === "Payroll" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Next Salary</label>
                  <input
                    type="number"
                    name="nextSalary"
                    value={formData.nextSalary}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.nextSalary && <p className="text-red-500 text-sm mt-1">{errors.nextSalary}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="NFT">NFT</option>
                    <option value="RTGS">RTGS</option>
                    <option value="Cash">Cash</option>
                  </select>
                  {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Type</label>
                  <select
                    name="employeeType"
                    value={formData.employeeType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                  </select>
                  {errors.employeeType && <p className="text-red-500 text-sm mt-1">{errors.employeeType}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account Title</label>
                  <input
                    type="text"
                    name="accountTitle"
                    value={formData.accountTitle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account No</label>
                  <input
                    type="text"
                    name="accountNo"
                    value={formData.accountNo}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
                  <input
                    type="text"
                    name="IFSCCode"
                    value={formData.IFSCCode}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CNIC</label>
                  <input
                    type="text"
                    name="cnnic"
                    value={formData.cnnic}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            )}
            {activeTab === "PfAccount" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    PF Type <span title="Provident Fund">(PF)</span>
                  </label>
                  <select
                    name="pfType"
                    value={formData.pfType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="PF">PF</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution PF</label>
                  <input
                    type="number"
                    name="employerContributionPf"
                    value={formData.employerContributionPf}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.pfType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution PF</label>
                  <input
                    type="number"
                    name="employeeContributionPf"
                    value={formData.employeeContributionPf}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.pfType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    SSES Type <span title="Social Security & Employee Savings">(SSES)</span>
                  </label>
                  <select
                    name="ssesType"
                    value={formData.ssesType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="SSES">SSES</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution SSES</label>
                  <input
                    type="number"
                    name="employerContributionSses"
                    value={formData.employerContributionSses}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.ssesType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution SSES</label>
                  <input
                    type="number"
                    name="employeeContributionSses"
                    value={formData.employeeContributionSses}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.ssesType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    EOBI Type <span title="Employees Old-Age Benefits Institution">(EOBI)</span>
                  </label>
                  <select
                    name="eobiType"
                    value={formData.eobiType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="EOBI">EOBI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution EOBI</label>
                  <input
                    type="number"
                    name="employerContributionEobi"
                    value={formData.employerContributionEobi}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.eobiType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution EOBI</label>
                  <input
                    type="number"
                    name="employeeContributionEobi"
                    value={formData.employeeContributionEobi}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.eobiType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ESIC Type <span title="Employees' State Insurance Corporation">(ESIC)</span>
                  </label>
                  <select
                    name="esicType"
                    value={formData.esicType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="ESIC">ESIC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution ESIC</label>
                  <input
                    type="number"
                    name="employerContributionEsic"
                    value={formData.employerContributionEsic}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.esicType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution ESIC</label>
                  <input
                    type="number"
                    name="employeeContributionEsic"
                    value={formData.employeeContributionEsic}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    disabled={!formData.esicType}
                  />
                </div>
              </div>
            )}
            {activeTab === "Security" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Re-enter Password</label>
                  <input
                    type="password"
                    name="reenterPassword"
                    value={formData.reenterPassword}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {errors.reenterPassword && <p className="text-red-500 text-sm mt-1">{errors.reenterPassword}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
        {errors.submit && <div className="mt-4 text-red-500 text-sm">{errors.submit}</div>}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Cancel
          </button>
          {activeTab !== "Employee Info" && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Previous
            </button>
          )}
          {activeTab !== "Security" && (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={isSubmitting}
            >
              Next
            </button>
          )}
          {activeTab === "Security" && (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800">Success</h2>
            <p className="mt-2 text-gray-600">Employee added successfully!</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;