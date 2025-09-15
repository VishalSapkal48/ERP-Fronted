// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import hrmApi from "../../ApiCalling/Hrm_Api";

// const AddEmployee = () => {
//   const navigate = useNavigate();
//   const tabs = ["Employee Info", "Contact", "Payroll", "PfAccount", "Security"];
//   const [activeTab, setActiveTab] = useState("Employee Info");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     employeeId: "",
//     name: "",
//     department: "",
//     jobTitle: "",
//     manager: "",
//     workLocation: "",
//     email: "",
//     workPhone: "",
//     homePhone: "",
//     emergencyPhone: "",
//     gender: "",
//     dob: "",
//     address: "",
//     city: "",
//     country: "",
//     hireDate: "",
//     joiningDate: "",
//     netSalary: "",
//     hra: "",
//     specialBonus: "",
//     conveyance: "",
//     travelAllowances: "",
//     shiftAllowances: "",
//     overtime: "",
//     taxRate: "",
//     paymentMethod: "",
//     employeeType: "",
//     bankName: "",
//     accountTitle: "",
//     accountNo: "",
//     IFSCCode: "",
//     location: "",
//     designation: "",
//     CNIC: "",
//     pfAccountNumber: "",
//     pfType: "",
//     employerContributionPf: "",
//     employeeContributionPf: "",
//     ssesType: "",
//     employerContributionSses: "",
//     employeeContributionSses: "",
//     eobiType: "",
//     employerContributionEobi: "",
//     employeeContributionEobi: "",
//     esicType: "",
//     employerContributionEsic: "",
//     employeeContributionEsic: "",
//     status: "active",
//     separationDate: "",
//     username: "",
//     password: "",
//     reenterPassword: "",
//     date: new Date().toISOString().split("T")[0],
//   });
//   const [errors, setErrors] = useState({});
//   const [profileImage, setProfileImage] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [dailySerial, setDailySerial] = useState(1);

//   // Fetch existing employees to determine the next serial number
//   useEffect(() => {
//     const fetchNextSerial = async () => {
//       try {
//         const employees = await hrmApi.getEmployees();
//         const today = new Date().toISOString().split("T")[0];
//         const todayEmployees = employees.filter(emp =>
//           emp.employeeId && emp.employeeId.startsWith(today.slice(2, 10).replace(/-/g, ""))
//         );
//         const maxSerial = todayEmployees.length > 0
//           ? Math.max(...todayEmployees.map(emp => parseInt(emp.employeeId.slice(-2)))) + 1
//           : 1;
//         setDailySerial(maxSerial);
//       } catch (error) {
//         console.error("Failed to fetch employees for serial number:", error);
//         setDailySerial(1); // Fallback to 1 if fetch fails
//       }
//     };
//     fetchNextSerial();
//   }, []);

//   // Generate Employee ID when dailySerial changes
//   useEffect(() => {
//     const today = new Date();
//     const year = today.getFullYear().toString().slice(-2);
//     const month = (today.getMonth() + 1).toString().padStart(2, "0");
//     const day = today.getDate().toString().padStart(2, "0");
//     const serial = dailySerial.toString().padStart(2, "0");
//     const employeeId = `${year}${month}${day}${serial}`;
//     setFormData((prev) => ({ ...prev, employeeId }));
//   }, [dailySerial]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (!file.type.startsWith("image/")) {
//         setErrors({ ...errors, profileImage: "Please upload a valid image file" });
//         return;
//       }
//       if (file.size > 5 * 1024 * 1024) {
//         setErrors({ ...errors, profileImage: "Image size should not exceed 5MB" });
//         return;
//       }
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfileImage(reader.result);
//         setErrors({ ...errors, profileImage: "" });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const numericFields = [
//       "netSalary", "hra", "specialBonus", "conveyance", "travelAllowances",
//       "shiftAllowances", "overtime", "taxRate", "employerContributionPf",
//       "employeeContributionPf", "employerContributionSses",
//       "employeeContributionSses", "employerContributionEobi",
//       "employeeContributionEobi", "employerContributionEsic",
//       "employeeContributionEsic",
//     ];
//     const dateFields = ["dob", "hireDate", "joiningDate", "separationDate", "date"];

//     let newValue = value;
//     if (numericFields.includes(name)) {
//       // Allow "0" as a valid numeric input
//       newValue = value === "" ? "" : value === "0" ? 0 : Number(value) || "";
//     } else if (dateFields.includes(name)) {
//       newValue = value ? new Date(value).toISOString().split("T")[0] : "";
//     }

//     setFormData({ ...formData, [name]: newValue });
//     if (errors[name] || errors.submit) {
//       setErrors({ ...errors, [name]: "", submit: "" });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (activeTab === "Employee Info") {
//       if (!formData.name.trim()) newErrors.name = "Name is required";
//       if (!formData.department.trim()) newErrors.department = "Department is required";
//       if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job Title is required";
//       if (!formData.hireDate) newErrors.hireDate = "Hire Date is required";
//       if (!formData.joiningDate) newErrors.joiningDate = "Joining Date is required";
//       if (!formData.gender) newErrors.gender = "Gender is required";
//     }
//     if (activeTab === "Contact") {
//       if (!formData.email.trim()) {
//         newErrors.email = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = "Invalid email format";
//       }
//       if (!formData.workPhone.trim()) newErrors.workPhone = "Work Phone is required";
//       if (!formData.homePhone.trim()) newErrors.homePhone = "Home Phone is required";
//       if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = "Emergency Phone is required";
//       if (!formData.workLocation.trim()) newErrors.workLocation = "Work Location is required";
//     }
//     if (activeTab === "Payroll") {
//       if (formData.netSalary === "" && formData.netSalary !== 0) newErrors.netSalary = "Net Salary is required";
//       if (formData.hra === "" && formData.hra !== 0) newErrors.hra = "HRA is required";
//       if (formData.specialBonus === "" && formData.specialBonus !== 0) newErrors.specialBonus = "Special Bonus is required";
//       if (formData.conveyance === "" && formData.conveyance !== 0) newErrors.conveyance = "Conveyance is required";
//       if (formData.travelAllowances === "" && formData.travelAllowances !== 0) newErrors.travelAllowances = "Travel Allowances is required";
//       if (formData.shiftAllowances === "" && formData.shiftAllowances !== 0) newErrors.shiftAllowances = "Shift Allowances is required";
//       if (formData.overtime === "" && formData.overtime !== 0) newErrors.overtime = "Overtime is required";
//       if (formData.taxRate === "" && formData.taxRate !== 0) newErrors.taxRate = "Tax Rate is required";
//       if (!formData.paymentMethod.trim()) newErrors.paymentMethod = "Payment Method is required";
//       if (!formData.employeeType.trim()) newErrors.employeeType = "Employee Type is required";
//       if (formData.paymentMethod === "Bank Transfer") {
//         if (!formData.bankName.trim()) newErrors.bankName = "Bank Name is required";
//         if (!formData.accountTitle.trim()) newErrors.accountTitle = "Account Title is required";
//         if (!formData.accountNo.trim()) newErrors.accountNo = "Account Number is required";
//         if (!formData.IFSCCode.trim()) newErrors.IFSCCode = "IFSC Code is required";
//       }
//     }
//     if (activeTab === "PfAccount") {
//       if (!formData.pfAccountNumber.trim()) newErrors.pfAccountNumber = "PF Account Number is required";
//       if (formData.pfType && formData.employerContributionPf === "" && formData.employerContributionPf !== 0)
//         newErrors.employerContributionPf = "Employer PF Contribution is required";
//       if (formData.pfType && formData.employeeContributionPf === "" && formData.employeeContributionPf !== 0)
//         newErrors.employeeContributionPf = "Employee PF Contribution is required";
//       if (formData.ssesType && formData.employerContributionSses === "" && formData.employerContributionSses !== 0)
//         newErrors.employerContributionSses = "Employer SSES Contribution is required";
//       if (formData.ssesType && formData.employeeContributionSses === "" && formData.employeeContributionSses !== 0)
//         newErrors.employeeContributionSses = "Employee SSES Contribution is required";
//       if (formData.eobiType && formData.employerContributionEobi === "" && formData.employerContributionEobi !== 0)
//         newErrors.employerContributionEobi = "Employer EOBI Contribution is required";
//       if (formData.eobiType && formData.employeeContributionEobi === "" && formData.employeeContributionEobi !== 0)
//         newErrors.employeeContributionEobi = "Employee EOBI Contribution is required";
//       if (formData.esicType && formData.employerContributionEsic === "" && formData.employerContributionEsic !== 0)
//         newErrors.employerContributionEsic = "Employer ESIC Contribution is required";
//       if (formData.esicType && formData.employeeContributionEsic === "" && formData.employeeContributionEsic !== 0)
//         newErrors.employeeContributionEsic = "Employee ESIC Contribution is required";
//     }
//     if (activeTab === "Security") {
//       if (!formData.username.trim()) newErrors.username = "Username is required";
//       if (!formData.password) newErrors.password = "Password is required";
//       if (!formData.reenterPassword) newErrors.reenterPassword = "Re-enter Password is required";
//       if (formData.password && formData.password !== formData.reenterPassword)
//         newErrors.reenterPassword = "Passwords do not match";
//     }
//     return newErrors;
//   };

//   const handleNext = () => {
//     const currentIndex = tabs.indexOf(activeTab);
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     if (currentIndex < tabs.length - 1) {
//       setActiveTab(tabs[currentIndex + 1]);
//       setErrors({});
//     }
//   };

//   const handlePrevious = () => {
//     const currentIndex = tabs.indexOf(activeTab);
//     if (currentIndex > 0) {
//       setActiveTab(tabs[currentIndex - 1]);
//       setErrors({});
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const employeeData = {
//         ...formData,
//         employeeId: formData.employeeId.trim(),
//         username: formData.username.trim(),
//         email: formData.email.trim().toLowerCase(),
//         profileImage: profileImage || "",
//       };

//       const numericFields = [
//         "netSalary", "hra", "specialBonus", "conveyance", "travelAllowances",
//         "shiftAllowances", "overtime", "taxRate", "employerContributionPf",
//         "employeeContributionPf", "employerContributionSses",
//         "employeeContributionSses", "employerContributionEobi",
//         "employeeContributionEobi", "employerContributionEsic",
//         "employeeContributionEsic",
//       ];
//       const dateFields = ["dob", "hireDate", "joiningDate", "separationDate", "date"];

//       numericFields.forEach((field) => {
//         employeeData[field] = employeeData[field] === "" ? null : Number(employeeData[field]);
//       });

//       dateFields.forEach((field) => {
//         employeeData[field] = employeeData[field] ? new Date(employeeData[field]).toISOString() : null;
//       });

//       Object.keys(employeeData).forEach((field) => {
//         if (
//           !numericFields.includes(field) &&
//           !dateFields.includes(field) &&
//           typeof employeeData[field] === "string"
//         ) {
//           employeeData[field] = employeeData[field].trim() || null;
//         }
//       });

//       delete employeeData.reenterPassword;

//       console.log("Submitting data:", employeeData);
//       const response = await hrmApi.createEmployee(employeeData);
//       console.log("API Response:", response);
//       setShowModal(true);
//       setDailySerial((prev) => prev + 1);
//     } catch (error) {
//       let errorMessage = "Failed to add employee";
//       if (error.message.includes("duplicate key")) {
//         if (error.message.includes("email_1")) {
//           errorMessage = "This email is already registered. Please use a different email.";
//           setActiveTab("Employee Info");
//         } else if (error.message.includes("username_1")) {
//           errorMessage = "This username is already registered. Please use a different username.";
//           setActiveTab("Security");
//         }
//       } else {
//         errorMessage = error.message || "Failed to add employee";
//       }
//       console.error("Submit error:", errorMessage, error);
//       setErrors({ ...errors, submit: errorMessage });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//    navigate("/hrm/employees");
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   navigate("/hrm/employees");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
//       <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-t-lg mb-4">
//         <div className="flex flex-wrap gap-2 sm:gap-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded text-sm sm:text-base font-medium transition-colors ${
//                 activeTab === tab ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white p-4 sm:p-6 rounded-b-lg shadow-md overflow-auto">
//         {errors.submit && (
//           <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
//             {errors.submit}
//           </div>
//         )}
//         <div className="max-w-4xl mx-auto">
//           {activeTab === "Employee Info" && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee Photo</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.profileImage && (
//                   <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
//                 <input
//                   type="text"
//                   name="employeeId"
//                   value={formData.employeeId}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <input
//                   type="text"
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
//                 <input
//                   type="text"
//                   name="jobTitle"
//                   value={formData.jobTitle}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
//                 <input
//                   type="text"
//                   name="manager"
//                   value={formData.manager}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Hire Date</label>
//                 <input
//                   type="date"
//                   name="hireDate"
//                   value={formData.hireDate}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.hireDate && <p className="text-red-500 text-sm mt-1">{errors.hireDate}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
//                 <input
//                   type="date"
//                   name="joiningDate"
//                   value={formData.joiningDate}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.joiningDate && <p className="text-red-500 text-sm mt-1">{errors.joiningDate}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
//                 <input
//                   type="date"
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="active">Active</option>
//                   <option value="inactive">Inactive</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Separation Date</label>
//                 <input
//                   type="date"
//                   name="separationDate"
//                   value={formData.separationDate}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
//           )}
//           {activeTab === "Contact" && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Work Phone</label>
//                 <input
//                   type="text"
//                   name="workPhone"
//                   value={formData.workPhone}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.workPhone && <p className="text-red-500 text-sm mt-1">{errors.workPhone}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Home Phone</label>
//                 <input
//                   type="text"
//                   name="homePhone"
//                   value={formData.homePhone}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.homePhone && <p className="text-red-500 text-sm mt-1">{errors.homePhone}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Phone</label>
//                 <input
//                   type="text"
//                   name="emergencyPhone"
//                   value={formData.emergencyPhone}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Work Location</label>
//                 <input
//                   type="text"
//                   name="workLocation"
//                   value={formData.workLocation}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.workLocation && <p className="text-red-500 text-sm mt-1">{errors.workLocation}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
//           )}
//           {activeTab === "Payroll" && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Net Salary</label>
//                 <input
//                   type="number"
//                   name="netSalary"
//                   value={formData.netSalary}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.netSalary && <p className="text-red-500 text-sm mt-1">{errors.netSalary}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">HRA</label>
//                 <input
//                   type="number"
//                   name="hra"
//                   value={formData.hra}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.hra && <p className="text-red-500 text-sm mt-1">{errors.hra}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Special Bonus</label>
//                 <input
//                   type="number"
//                   name="specialBonus"
//                   value={formData.specialBonus}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.specialBonus && <p className="text-red-500 text-sm mt-1">{errors.specialBonus}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Conveyance</label>
//                 <input
//                   type="number"
//                   name="conveyance"
//                   value={formData.conveyance}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.conveyance && <p className="text-red-500 text-sm mt-1">{errors.conveyance}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Travel Allowances</label>
//                 <input
//                   type="number"
//                   name="travelAllowances"
//                   value={formData.travelAllowances}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.travelAllowances && <p className="text-red-500 text-sm mt-1">{errors.travelAllowances}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Shift Allowances</label>
//                 <input
//                   type="number"
//                   name="shiftAllowances"
//                   value={formData.shiftAllowances}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.shiftAllowances && <p className="text-red-500 text-sm mt-1">{errors.shiftAllowances}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Overtime</label>
//                 <input
//                   type="number"
//                   name="overtime"
//                   value={formData.overtime}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.overtime && <p className="text-red-500 text-sm mt-1">{errors.overtime}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
//                 <input
//                   type="number"
//                   name="taxRate"
//                   value={formData.taxRate}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.taxRate && <p className="text-red-500 text-sm mt-1">{errors.taxRate}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
//                 <select
//                   name="paymentMethod"
//                   value={formData.paymentMethod}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="Bank Transfer">Bank Transfer</option>
//                   <option value="NFT">NFT</option>
//                   <option value="RTGS">RTGS</option>
//                   <option value="Cash">Cash</option>
//                 </select>
//                 {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee Type</label>
//                 <select
//                   name="employeeType"
//                   value={formData.employeeType}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="Permanent">Permanent</option>
//                   <option value="Contract">Contract</option>
//                 </select>
//                 {errors.employeeType && <p className="text-red-500 text-sm mt-1">{errors.employeeType}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
//                 <input
//                   type="text"
//                   name="bankName"
//                   value={formData.bankName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Account Title</label>
//                 <input
//                   type="text"
//                   name="accountTitle"
//                   value={formData.accountTitle}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.accountTitle && <p className="text-red-500 text-sm mt-1">{errors.accountTitle}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Account No</label>
//                 <input
//                   type="text"
//                   name="accountNo"
//                   value={formData.accountNo}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.accountNo && <p className="text-red-500 text-sm mt-1">{errors.accountNo}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
//                 <input
//                   type="text"
//                   name="IFSCCode"
//                   value={formData.IFSCCode}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.IFSCCode && <p className="text-red-500 text-sm mt-1">{errors.IFSCCode}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
//                 <input
//                   type="text"
//                   name="designation"
//                   value={formData.designation}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">CNIC</label>
//                 <input
//                   type="text"
//                   name="CNIC"
//                   value={formData.CNIC}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
//           )}
//           {activeTab === "PfAccount" && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">PF Account Number</label>
//                 <input
//                   type="text"
//                   name="pfAccountNumber"
//                   value={formData.pfAccountNumber}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.pfAccountNumber && <p className="text-red-500 text-sm mt-1">{errors.pfAccountNumber}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   PF Type <span title="Provident Fund">(PF)</span>
//                 </label>
//                 <select
//                   name="pfType"
//                   value={formData.pfType}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="PF">PF</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution PF</label>
//                 <input
//                   type="number"
//                   name="employerContributionPf"
//                   value={formData.employerContributionPf}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.pfType}
//                 />
//                 {errors.employerContributionPf && <p className="text-red-500 text-sm mt-1">{errors.employerContributionPf}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution PF</label>
//                 <input
//                   type="number"
//                   name="employeeContributionPf"
//                   value={formData.employeeContributionPf}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.pfType}
//                 />
//                 {errors.employeeContributionPf && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionPf}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   SSES Type <span title="Social Security & Employee Savings">(SSES)</span>
//                 </label>
//                 <select
//                   name="ssesType"
//                   value={formData.ssesType}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="SSES">SSES</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution SSES</label>
//                 <input
//                   type="number"
//                   name="employerContributionSses"
//                   value={formData.employerContributionSses}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.ssesType}
//                 />
//                 {errors.employerContributionSses && <p className="text-red-500 text-sm mt-1">{errors.employerContributionSses}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution SSES</label>
//                 <input
//                   type="number"
//                   name="employeeContributionSses"
//                   value={formData.employeeContributionSses}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.ssesType}
//                 />
//                 {errors.employeeContributionSses && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionSses}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   EOBI Type <span title="Employees Old-Age Benefits Institution">(EOBI)</span>
//                 </label>
//                 <select
//                   name="eobiType"
//                   value={formData.eobiType}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="EOBI">EOBI</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution EOBI</label>
//                 <input
//                   type="number"
//                   name="employerContributionEobi"
//                   value={formData.employerContributionEobi}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.eobiType}
//                 />
//                 {errors.employerContributionEobi && <p className="text-red-500 text-sm mt-1">{errors.employerContributionEobi}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution EOBI</label>
//                 <input
//                   type="number"
//                   name="employeeContributionEobi"
//                   value={formData.employeeContributionEobi}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.eobiType}
//                 />
//                 {errors.employeeContributionEobi && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionEobi}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   ESIC Type <span title="Employees' State Insurance Corporation">(ESIC)</span>
//                 </label>
//                 <select
//                   name="esicType"
//                   value={formData.esicType}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="ESIC">ESIC</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution ESIC</label>
//                 <input
//                   type="number"
//                   name="employerContributionEsic"
//                   value={formData.employerContributionEsic}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.esicType}
//                 />
//                 {errors.employerContributionEsic && <p className="text-red-500 text-sm mt-1">{errors.employerContributionEsic}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution ESIC</label>
//                 <input
//                   type="number"
//                   name="employeeContributionEsic"
//                   value={formData.employeeContributionEsic}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={!formData.esicType}
//                 />
//                 {errors.employeeContributionEsic && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionEsic}</p>}
//               </div>
//             </div>
//           )}
//           {activeTab === "Security" && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Re-enter Password</label>
//                 <input
//                   type="password"
//                   name="reenterPassword"
//                   value={formData.reenterPassword}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.reenterPassword && <p className="text-red-500 text-sm mt-1">{errors.reenterPassword}</p>}
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="mt-6 flex flex-wrap justify-end gap-3 sm:gap-4">
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
//           >
//             Cancel
//           </button>
//           {activeTab !== "Employee Info" && (
//             <button
//               type="button"
//               onClick={handlePrevious}
//               className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
//             >
//               Previous
//             </button>
//           )}
//           {activeTab !== "Security" && (
//             <button
//               type="button"
//               onClick={handleNext}
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
//               disabled={isSubmitting}
//             >
//               Next
//             </button>
//           )}
//           {activeTab === "Security" && (
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-300 transition-colors"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Success</h2>
//             <p className="mt-2 text-gray-600 text-sm sm:text-base">Employee added successfully!</p>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddEmployee;


import React, { useState, useEffect } from "react";
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
    netSalary: "",
    hra: "",
    specialBonus: "",
    conveyance: "",
    travelAllowances: "",
    shiftAllowances: "",
    overtime: "",
    taxRate: "",
    paymentMethod: "",
    employeeType: "",
    bankName: "",
    accountTitle: "",
    accountNo: "",
    IFSCCode: "",
    location: "",
    designation: "",
    CNIC: "",
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
  const [dailySerial, setDailySerial] = useState(1);

  useEffect(() => {
    const fetchNextSerial = async () => {
      try {
        const employees = await hrmApi.getEmployees();
        const today = new Date().toISOString().split("T")[0];
        const todayEmployees = employees.filter(emp =>
          emp.employeeId && emp.employeeId.startsWith(today.slice(2, 10).replace(/-/g, ""))
        );
        const maxSerial = todayEmployees.length > 0
          ? Math.max(...todayEmployees.map(emp => parseInt(emp.employeeId.slice(-2)))) + 1
          : 1;
        setDailySerial(maxSerial);
      } catch (error) {
        console.error("Failed to fetch employees for serial number:", error);
        setDailySerial(1);
      }
    };
    fetchNextSerial();
  }, []);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const serial = dailySerial.toString().padStart(2, "0");
    let employeeId = `${year}${month}${day}${serial}`;
    if (formData.employeeType === "Employee") employeeId += "E";
    else if (formData.employeeType === "Vendor") employeeId += "V";
    else if (formData.employeeType === "Guest") employeeId += "G";
    else if (formData.employeeType === "Franchise Owner") employeeId += "F";
    else employeeId += "O";
    setFormData((prev) => ({ ...prev, employeeId }));
  }, [dailySerial, formData.employeeType]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors({ ...errors, profileImage: "Please upload a valid image file" });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, profileImage: "Image size should not exceed 5MB" });
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        setErrors({ ...errors, profileImage: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      "netSalary", "hra", "specialBonus", "conveyance", "travelAllowances",
      "shiftAllowances", "overtime", "taxRate", "employerContributionPf",
      "employeeContributionPf", "employerContributionSses",
      "employeeContributionSses", "employerContributionEobi",
      "employeeContributionEobi", "employerContributionEsic",
      "employeeContributionEsic",
    ];
    const dateFields = ["dob", "hireDate", "joiningDate", "separationDate", "date"];

    let newValue = value;
    if (numericFields.includes(name)) {
      newValue = value === "" ? "" : value === "0" ? 0 : Number(value) || "";
    } else if (dateFields.includes(name)) {
      newValue = value ? new Date(value).toISOString().split("T")[0] : "";
    }

    setFormData({ ...formData, [name]: newValue });
    if (errors[name] || errors.submit) {
      setErrors({ ...errors, [name]: "", submit: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (activeTab === "Employee Info") {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.department.trim()) newErrors.department = "Department is required";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job Title is required";
      if (!formData.hireDate) newErrors.hireDate = "Hire Date is required";
      if (!formData.joiningDate) newErrors.joiningDate = "Joining Date is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
    }
    if (activeTab === "Contact") {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.workPhone.trim()) newErrors.workPhone = "Work Phone is required";
      if (!formData.homePhone.trim()) newErrors.homePhone = "Home Phone is required";
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = "Emergency Phone is required";
      if (!formData.workLocation.trim()) newErrors.workLocation = "Work Location is required";
    }
    if (activeTab === "Payroll") {
      if (formData.netSalary === "" && formData.netSalary !== 0) newErrors.netSalary = "Net Salary is required";
      if (formData.hra === "" && formData.hra !== 0) newErrors.hra = "HRA is required";
      if (formData.specialBonus === "" && formData.specialBonus !== 0) newErrors.specialBonus = "Special Bonus is required";
      if (formData.conveyance === "" && formData.conveyance !== 0) newErrors.conveyance = "Conveyance is required";
      if (formData.travelAllowances === "" && formData.travelAllowances !== 0) newErrors.travelAllowances = "Travel Allowances is required";
      if (formData.shiftAllowances === "" && formData.shiftAllowances !== 0) newErrors.shiftAllowances = "Shift Allowances is required";
      if (formData.overtime === "" && formData.overtime !== 0) newErrors.overtime = "Overtime is required";
      if (formData.taxRate === "" && formData.taxRate !== 0) newErrors.taxRate = "Tax Rate is required";
      if (!formData.paymentMethod.trim()) newErrors.paymentMethod = "Payment Method is required";
      if (!formData.employeeType.trim()) newErrors.employeeType = "Employee Type is required";
      if (formData.paymentMethod === "Bank Transfer") {
        if (!formData.bankName.trim()) newErrors.bankName = "Bank Name is required";
        if (!formData.accountTitle.trim()) newErrors.accountTitle = "Account Title is required";
        if (!formData.accountNo.trim()) newErrors.accountNo = "Account Number is required";
        if (!formData.IFSCCode.trim()) newErrors.IFSCCode = "IFSC Code is required";
      }
    }
    if (activeTab === "PfAccount") {
      if (!formData.pfAccountNumber.trim()) newErrors.pfAccountNumber = "PF Account Number is required";
      if (formData.pfType && formData.employerContributionPf === "" && formData.employerContributionPf !== 0)
        newErrors.employerContributionPf = "Employer PF Contribution is required";
      if (formData.pfType && formData.employeeContributionPf === "" && formData.employeeContributionPf !== 0)
        newErrors.employeeContributionPf = "Employee PF Contribution is required";
      if (formData.ssesType && formData.employerContributionSses === "" && formData.employerContributionSses !== 0)
        newErrors.employerContributionSses = "Employer SSES Contribution is required";
      if (formData.ssesType && formData.employeeContributionSses === "" && formData.employeeContributionSses !== 0)
        newErrors.employeeContributionSses = "Employee SSES Contribution is required";
      if (formData.eobiType && formData.employerContributionEobi === "" && formData.employerContributionEobi !== 0)
        newErrors.employerContributionEobi = "Employer EOBI Contribution is required";
      if (formData.eobiType && formData.employeeContributionEobi === "" && formData.employeeContributionEobi !== 0)
        newErrors.employeeContributionEobi = "Employee EOBI Contribution is required";
      if (formData.esicType && formData.employerContributionEsic === "" && formData.employerContributionEsic !== 0)
        newErrors.employerContributionEsic = "Employer ESIC Contribution is required";
      if (formData.esicType && formData.employeeContributionEsic === "" && formData.employeeContributionEsic !== 0)
        newErrors.employeeContributionEsic = "Employee ESIC Contribution is required";
    }
    if (activeTab === "Security") {
      if (!formData.username.trim()) newErrors.username = "Username is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.reenterPassword) newErrors.reenterPassword = "Re-enter Password is required";
      if (formData.password && formData.password !== formData.reenterPassword)
        newErrors.reenterPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
      setErrors({});
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
        "netSalary", "hra", "specialBonus", "conveyance", "travelAllowances",
        "shiftAllowances", "overtime", "taxRate", "employerContributionPf",
        "employeeContributionPf", "employerContributionSses",
        "employeeContributionSses", "employerContributionEobi",
        "employeeContributionEobi", "employerContributionEsic",
        "employeeContributionEsic",
      ];
      const dateFields = ["dob", "hireDate", "joiningDate", "separationDate", "date"];

      numericFields.forEach((field) => {
        employeeData[field] = employeeData[field] === "" ? null : Number(employeeData[field]);
      });

      dateFields.forEach((field) => {
        employeeData[field] = employeeData[field] ? new Date(employeeData[field]).toISOString() : null;
      });

      Object.keys(employeeData).forEach((field) => {
        if (
          !numericFields.includes(field) &&
          !dateFields.includes(field) &&
          typeof employeeData[field] === "string"
        ) {
          employeeData[field] = employeeData[field].trim() || null;
        }
      });

      delete employeeData.reenterPassword;

      console.log("Submitting data:", employeeData);
      const response = await hrmApi.createEmployee(employeeData);
      console.log("API Response:", response);
      setShowModal(true);
      setDailySerial((prev) => prev + 1);
    } catch (error) {
      let errorMessage = "Failed to add employee";
      if (error.message.includes("duplicate key")) {
        if (error.message.includes("email_1")) {
          errorMessage = "This email is already registered. Please use a different email.";
          setActiveTab("Employee Info");
        } else if (error.message.includes("username_1")) {
          errorMessage = "This username is already registered. Please use a different username.";
          setActiveTab("Security");
        }
      } else {
        errorMessage = error.message || "Failed to add employee";
      }
      console.error("Submit error:", errorMessage, error);
      setErrors({ ...errors, submit: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/hrm/employees");
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/hrm/employees");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-t-lg mb-4">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded text-sm sm:text-base font-medium transition-colors ${
                activeTab === tab ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-b-lg shadow-md overflow-auto">
        {errors.submit && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
            {errors.submit}
          </div>
        )}
        <div className="max-w-4xl mx-auto">
          {activeTab === "Employee Info" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.profileImage && (
                  <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>
                )}
              </div>


 

            <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Employee Type</label>
  <div className="relative">
    <select
      name="employeeType"
      value={formData.employeeType}
      onChange={handleChange}

      className="w-full p-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
    >
      <option value="">Select</option>
      <option value="Employee">Employee</option>
      <option value="Vendor">Vendor</option>
      <option value="Guest">Guest</option>
      <option value="Franchise Owner">Franchise Owner</option>
    </select>
    {/* Custom arrow icon positioned with more space from border */}
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
  {errors.employeeType && <p className="text-red-500 text-sm mt-1">{errors.employeeType}</p>}
</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
                <input
                  type="text"
                  name="manager"
                  value={formData.manager}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hire Date</label>
                <input
                  type="date"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.hireDate && <p className="text-red-500 text-sm mt-1">{errors.hireDate}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.joiningDate && <p className="text-red-500 text-sm mt-1">{errors.joiningDate}</p>}
              </div>
            <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
  <div className="relative">
    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
      <option value="">Select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Separation Date</label>
                <input
                  type="date"
                  name="separationDate"
                  value={formData.separationDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            
            </div>
          )}
          {activeTab === "Contact" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Phone</label>
                <input
                  type="text"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.workPhone && <p className="text-red-500 text-sm mt-1">{errors.workPhone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Home Phone</label>
                <input
                  type="text"
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.homePhone && <p className="text-red-500 text-sm mt-1">{errors.homePhone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Phone</label>
                <input
                  type="text"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Location</label>
                <input
                  type="text"
                  name="workLocation"
                  value={formData.workLocation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.workLocation && <p className="text-red-500 text-sm mt-1">{errors.workLocation}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          {activeTab === "Payroll" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Net Salary</label>
                <input
                  type="number"
                  name="netSalary"
                  value={formData.netSalary}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.netSalary && <p className="text-red-500 text-sm mt-1">{errors.netSalary}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">HRA</label>
                <input
                  type="number"
                  name="hra"
                  value={formData.hra}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.hra && <p className="text-red-500 text-sm mt-1">{errors.hra}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Bonus</label>
                <input
                  type="number"
                  name="specialBonus"
                  value={formData.specialBonus}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.specialBonus && <p className="text-red-500 text-sm mt-1">{errors.specialBonus}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Conveyance</label>
                <input
                  type="number"
                  name="conveyance"
                  value={formData.conveyance}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.conveyance && <p className="text-red-500 text-sm mt-1">{errors.conveyance}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travel Allowances</label>
                <input
                  type="number"
                  name="travelAllowances"
                  value={formData.travelAllowances}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.travelAllowances && <p className="text-red-500 text-sm mt-1">{errors.travelAllowances}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Shift Allowances</label>
                <input
                  type="number"
                  name="shiftAllowances"
                  value={formData.shiftAllowances}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.shiftAllowances && <p className="text-red-500 text-sm mt-1">{errors.shiftAllowances}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Overtime</label>
                <input
                  type="number"
                  name="overtime"
                  value={formData.overtime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.overtime && <p className="text-red-500 text-sm mt-1">{errors.overtime}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
                <input
                  type="number"
                  name="taxRate"
                  value={formData.taxRate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.taxRate && <p className="text-red-500 text-sm mt-1">{errors.taxRate}</p>}
              </div>
            <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
  <div className="relative">
    <select
      name="paymentMethod"
      value={formData.paymentMethod}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
      <option value="">Select</option>
      <option value="Bank Transfer">Bank Transfer</option>
      <option value="NFT">NFT</option>
      <option value="RTGS">RTGS</option>
      <option value="Cash">Cash</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
  {errors.paymentMethod && (
    <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>
  )}
</div>

       
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Title</label>
                <input
                  type="text"
                  name="accountTitle"
                  value={formData.accountTitle}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.accountTitle && <p className="text-red-500 text-sm mt-1">{errors.accountTitle}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account No</label>
                <input
                  type="text"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.accountNo && <p className="text-red-500 text-sm mt-1">{errors.accountNo}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
                <input
                  type="text"
                  name="IFSCCode"
                  value={formData.IFSCCode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.IFSCCode && <p className="text-red-500 text-sm mt-1">{errors.IFSCCode}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CNIC</label>
                <input
                  type="text"
                  name="CNIC"
                  value={formData.CNIC}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          {activeTab === "PfAccount" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PF Account Number</label>
                <input
                  type="text"
                  name="pfAccountNumber"
                  value={formData.pfAccountNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.pfAccountNumber && <p className="text-red-500 text-sm mt-1">{errors.pfAccountNumber}</p>}
              </div>
            <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    PF Type <span title="Provident Fund">(PF)</span>
  </label>
  <div className="relative">
    <select
      name="pfType"
      value={formData.pfType}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
      <option value="">Select</option>
      <option value="PF">PF</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
  {errors.pfType && <p className="text-red-500 text-sm mt-1">{errors.pfType}</p>}
</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution PF</label>
                <input
                  type="number"
                  name="employerContributionPf"
                  value={formData.employerContributionPf}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.pfType}
                />
                {errors.employerContributionPf && <p className="text-red-500 text-sm mt-1">{errors.employerContributionPf}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution PF</label>
                <input
                  type="number"
                  name="employeeContributionPf"
                  value={formData.employeeContributionPf}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.pfType}
                />
                {errors.employeeContributionPf && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionPf}</p>}
              </div>
             <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    SSES Type <span title="Social Security & Employee Savings">(SSES)</span>
  </label>
  <div className="relative">
    <select
      name="ssesType"
      value={formData.ssesType}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
      <option value="">Select</option>
      <option value="SSES">SSES</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
  {errors.ssesType && (
    <p className="text-red-500 text-sm mt-1">{errors.ssesType}</p>
  )}
</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution SSES</label>
                <input
                  type="number"
                  name="employerContributionSses"
                  value={formData.employerContributionSses}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.ssesType}
                />
                {errors.employerContributionSses && <p className="text-red-500 text-sm mt-1">{errors.employerContributionSses}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution SSES</label>
                <input
                  type="number"
                  name="employeeContributionSses"
                  value={formData.employeeContributionSses}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.ssesType}
                />
                {errors.employeeContributionSses && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionSses}</p>}
              </div>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    EOBI Type <span title="Employees Old-Age Benefits Institution">(EOBI)</span>
  </label>
  <div className="relative">
    <select
      name="eobiType"
      value={formData.eobiType}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
      <option value="">Select</option>
      <option value="EOBI">EOBI</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
  {errors.eobiType && (
    <p className="text-red-500 text-sm mt-1">{errors.eobiType}</p>
  )}
</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution EOBI</label>
                <input
                  type="number"
                  name="employerContributionEobi"
                  value={formData.employerContributionEobi}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.eobiType}
                />
                {errors.employerContributionEobi && <p className="text-red-500 text-sm mt-1">{errors.employerContributionEobi}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution EOBI</label>
                <input
                  type="number"
                  name="employeeContributionEobi"
                  value={formData.employeeContributionEobi}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.eobiType}
                />
                {errors.employeeContributionEobi && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionEobi}</p>}
              </div>
             <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    ESIC Type <span title="Employees' State Insurance Corporation">(ESIC)</span>
  </label>
  <div className="relative">
    <select
      name="esicType"
      value={formData.esicType}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
      <option value="">Select</option>
      <option value="ESIC">ESIC</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
  {errors.esicType && (
    <p className="text-red-500 text-sm mt-1">{errors.esicType}</p>
  )}
</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution ESIC</label>
                <input
                  type="number"
                  name="employerContributionEsic"
                  value={formData.employerContributionEsic}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.esicType}
                />
                {errors.employerContributionEsic && <p className="text-red-500 text-sm mt-1">{errors.employerContributionEsic}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution ESIC</label>
                <input
                  type="number"
                  name="employeeContributionEsic"
                  value={formData.employeeContributionEsic}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!formData.esicType}
                />
                {errors.employeeContributionEsic && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionEsic}</p>}
              </div>
            </div>
          )}
          {activeTab === "Security" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Re-enter Password</label>
                <input
                  type="password"
                  name="reenterPassword"
                  value={formData.reenterPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.reenterPassword && <p className="text-red-500 text-sm mt-1">{errors.reenterPassword}</p>}
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Cancel
          </button>
          {activeTab !== "Employee Info" && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>
          )}
          {activeTab !== "Security" && (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
              disabled={isSubmitting}
            >
              Next
            </button>
          )}
          {activeTab === "Security" && (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-300 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Success</h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">Employee added successfully!</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
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