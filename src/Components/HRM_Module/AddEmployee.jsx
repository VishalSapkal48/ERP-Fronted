import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeManagement = () => {
  const navigate = useNavigate();

  // State for selected employee and form data
  const [selectedEmployee, setSelectedEmployee] = useState("Saira Khan");
  const [formData, setFormData] = useState({
    name: "Saira Khan",
    department: "Human Resource",
    email: "SairaKhan@hrworld.org.pk",
    workPhone: "0346-5699784",
    homePhone: "051-45678956",
    emergencyPhone: "0933-5566889",
    gender: "Female",
    dob: "9/30/2019 12:00:00 AM",
    address: "House No: 43, Street No:11",
    city: "Islamabad",
    country: "Pakistan",
    hireDate: "9/30/2019 12:00:00 AM",
    joiningDate: "9/30/2019 12:00:00 AM",
    basicSalary: "11000.00",
    paymentMethod: "Bank Transfer",
    employeeType: "Permanent",
    bankName: "Bank Al Habib",
    accountTitle: "Ibad Khan",
    branchCode: "124578985",
    accountNo: "1120189784563",
    swiftCode: "50008",
    location: "Islamabad",
    designation: "Officer",
    cnnic: "1120189784563",
    pfType: "",
    ssesType: "",
    eobiType: "",
    employerContributionPf: "",
    employeeContributionPf: "",
    employerContributionSses: "",
    employeeContributionSses: "",
    employerContributionEobi: "",
    employeeContributionEobi: "",
    status: "Active",
    separationDate: "",
  });
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.workPhone.trim()) newErrors.workPhone = "Work phone is required";
    if (!formData.homePhone.trim()) newErrors.homePhone = "Home phone is required";
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = "Emergency phone is required";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Employee Data:", formData);
    navigate("/employees");
  };

  // Handle employee selection
  const handleEmployeeSelect = (e) => {
    setSelectedEmployee(e.target.value);
    // Reset form data based on selected employee (simplified for now)
    setFormData({
      name: "Saira Khan",
      department: "Human Resource",
      email: "SairaKhan@hrworld.org.pk",
      workPhone: "0346-5699784",
      homePhone: "051-45678956",
      emergencyPhone: "0933-5566889",
      gender: "Female",
      dob: "9/30/2019 12:00:00 AM",
      address: "House No: 43, Street No:11",
      city: "Islamabad",
      country: "Pakistan",
      hireDate: "9/30/2019 12:00:00 AM",
      joiningDate: "9/30/2019 12:00:00 AM",
      basicSalary: "11000.00",
      paymentMethod: "Bank Transfer",
      employeeType: "Permanent",
      bankName: "Bank Al Habib",
      accountTitle: "Ibad Khan",
      branchCode: "124578985",
      accountNo: "1120189784563",
      swiftCode: "50008",
      location: "Islamabad",
      designation: "Officer",
      cnnic: "1120189784563",
      pfType: "",
      ssesType: "",
      eobiType: "",
      employerContributionPf: "",
      employeeContributionPf: "",
      employerContributionSses: "",
      employeeContributionSses: "",
      employerContributionEobi: "",
      employeeContributionEobi: "",
      status: "Active",
      separationDate: "",
    });
  };

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg">
        <span className="text-lg">Employee Info</span>
        <span className="text-sm">Ibad ur Rahman [inform.j]</span>
      </div>

      {/* Employee Selection and Actions */}
      <div className="bg-white p-6 rounded-b-lg shadow-md">
        <div className="flex space-x-4 mb-6">
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            >
              <option value="Human Resource">Human Resource</option>
            </select>
            {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">-- Select Employee --</label>
            <select
              value={selectedEmployee}
              onChange={handleEmployeeSelect}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            >
              <option value="Saira Khan">Saira Khan</option>
            </select>
          </div>
          <div className="w-1/3 flex space-x-2">
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Show</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Update</button>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Import</button>
          </div>
        </div>

        {/* Employee Profile */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="profile">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile Photo"
              className="rounded-full w-24 h-24"
            />
            <h3 className="mt-2 text-lg font-semibold">{formData.name}</h3>
            <div className="flex space-x-2">
              <input type="file" accept="image/*" className="hidden" id="photoUpload" />
              <label htmlFor="photoUpload" className="px-2 py-1 bg-gray-200 rounded cursor-pointer">
                Browse
              </label>
              <button className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">Update</button>
            </div>
          </div>

          {/* Employee Details */}
          <div className="flex-1 grid grid-cols-3 gap-4">
            {/* Contact Info */}
            <div>
              <h4 className="text-md font-semibold mb-2">Contact Info</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
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
                  />
                  {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
                </div>
              </div>
            </div>

            {/* Employment Info */}
            <div>
              <h4 className="text-md font-semibold mb-2">Employment Info</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Hire Date</label>
                  <input
                    type="text"
                    name="hireDate"
                    value={formData.hireDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                  <input
                    type="text"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="text"
                    name="dob"
                    value={formData.dob}
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
            </div>

            {/* Payroll Info */}
            <div>
              <h4 className="text-md font-semibold mb-2">Payroll</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Basic Salary</label>
                  <input
                    type="text"
                    name="basicSalary"
                    value={formData.basicSalary}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Type</label>
                  <select
                    name="employeeType"
                    value={formData.employeeType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                  </select>
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
                  <label className="block text-sm font-medium text-gray-700">Branch Code</label>
                  <input
                    type="text"
                    name="branchCode"
                    value={formData.branchCode}
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
                  <label className="block text-sm font-medium text-gray-700">Swift Code</label>
                  <input
                    type="text"
                    name="swiftCode"
                    value={formData.swiftCode}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Separation Date</label>
                  <input
                    type="text"
                    name="separationDate"
                    value={formData.separationDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Payroll Contributions */}
            <div>
              <h4 className="text-md font-semibold mb-2">Payroll Contributions</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">PF Type</label>
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
                    type="text"
                    name="employerContributionPf"
                    value={formData.employerContributionPf}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution PF</label>
                  <input
                    type="text"
                    name="employeeContributionPf"
                    value={formData.employeeContributionPf}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">SSES Type</label>
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
                    type="text"
                    name="employerContributionSses"
                    value={formData.employerContributionSses}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution SSES</label>
                  <input
                    type="text"
                    name="employeeContributionSses"
                    value={formData.employeeContributionSses}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">EOBI Type</label>
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
                    type="text"
                    name="employerContributionEobi"
                    value={formData.employerContributionEobi}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution EOBI</label>
                  <input
                    type="text"
                    name="employeeContributionEobi"
                    value={formData.employeeContributionEobi}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;