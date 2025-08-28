import React, { useState, useEffect } from "react";
import hrmApi from "../../ApiCalling/Hrm_Api";

const AddAttendance = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    checkIn: "",
    checkOut: "",
    date: new Date().toISOString().split("T")[0],
    status: "present",
  });
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [workHoursPreview, setWorkHoursPreview] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    hrmApi
      .getEmployees()
      .then((data) => {
        console.log("Employees data:", data);
        if (Array.isArray(data) && data.length > 0) {
          setEmployees(data);
        } else {
          setError("No employees found in the system.");
        }
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch employees. Please try again.");
        console.error("Error fetching employees:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    // Reset errors and message on change
    setError(null);
    setMessage("");

    // Validate date not in the future
    if (name === "date") {
      const inputDate = new Date(value + "T00:00:00Z");
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      if (inputDate > today) {
        setError("Date cannot be in the future.");
        return;
      }
    }

    // Handle status change to clear times for absent/leave
    if (name === "status" && (value === "absent" || value === "leave")) {
      updatedFormData = { ...updatedFormData, checkIn: "", checkOut: "" };
      setWorkHoursPreview(null);
    }

    // Validate and calculate work hours preview
    if (name === "checkIn" || name === "checkOut" || name === "status") {
      const { checkIn, checkOut, status } = updatedFormData;
      if (status === "present" && checkIn && checkOut) {
        try {
          const checkInTime = new Date(`1970-01-01T${checkIn}:00Z`);
          const checkOutTime = new Date(`1970-01-01T${checkOut}:00Z`);
          if (checkOutTime > checkInTime) {
            const hours = (checkOutTime - checkInTime) / (1000 * 60 * 60);
            setWorkHoursPreview(hours.toFixed(2));
          } else {
            setWorkHoursPreview(null);
            setError("Check-out time must be after check-in time.");
          }
        } catch (err) {
          setWorkHoursPreview(null);
          setError("Invalid time format. Use HH:mm (e.g., 09:00).");
        }
      } else {
        setWorkHoursPreview(null);
      }
    }

    setFormData(updatedFormData);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.employeeId) {
      errors.employeeId = "Please select an employee.";
    }
    if (!formData.date) {
      errors.date = "Please select a date.";
    }
    const inputDate = new Date(formData.date + "T00:00:00Z");
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    if (inputDate > today) {
      errors.date = "Date cannot be in the future.";
    }
    if (formData.status === "present") {
      if (!formData.checkIn) errors.checkIn = "Check-in time is required.";
      if (!formData.checkOut) errors.checkOut = "Check-out time is required.";
      if (formData.checkIn && formData.checkOut) {
        try {
          const checkInTime = new Date(`1970-01-01T${formData.checkIn}:00Z`);
          const checkOutTime = new Date(`1970-01-01T${formData.checkOut}:00Z`);
          if (checkOutTime <= checkInTime) {
            errors.checkOut = "Check-out time must be after check-in time.";
          }
        } catch (err) {
          errors.checkIn = "Invalid time format. Use HH:mm (e.g., 09:00).";
        }
      }
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(Object.values(validationErrors)[0]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setMessage("");
    setError(null);

    console.log("Form data before submission:", { ...formData, currentTime: new Date().toISOString() });

    try {
      const submissionData = {
        ...formData,
        checkIn: formData.status === "present" ? formData.checkIn : undefined,
        checkOut: formData.status === "present" ? formData.checkOut : undefined,
      };
      await hrmApi.createAttendance(submissionData);
      setMessage("Attendance recorded successfully!");
      setFormData({
        employeeId: "",
        checkIn: "",
        checkOut: "",
        date: new Date().toISOString().split("T")[0],
        status: "present",
      });
      setWorkHoursPreview(null);
    } catch (error) {
      const errorMsg = error.message || "Error recording attendance. Please try again.";
      if (errorMsg.includes("already exists")) {
        setError("Attendance record already exists for this employee on this date.");
      } else if (errorMsg.includes("future")) {
        setError("Date cannot be in the future.");
      } else if (errorMsg.includes("Invalid employee ID")) {
        setError("Selected employee is invalid.");
      } else {
        setError(errorMsg);
      }
      console.error("Error recording attendance:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      employeeId: "",
      checkIn: "",
      checkOut: "",
      date: new Date().toISOString().split("T")[0],
      status: "present",
    });
    setWorkHoursPreview(null);
    setError(null);
    setMessage("");
  };

  const InputField = ({ label, name, type = "text", value, onChange, error, disabled, ...props }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${disabled ? 'bg-gray-100' : ''} ${error ? 'border-red-500' : ''}`}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  const SelectField = ({ label, name, value, onChange, error, options, disabled }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full p-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none ${disabled ? 'bg-gray-100' : ''} ${error ? 'border-red-500' : ''}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Add Attendance</h1>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          {message && (
            <div
              className={`mb-4 p-3 rounded-md ${
                message.includes("Error") ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
              }`}
            >
              {message}
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 rounded-md bg-red-100 text-red-800">{error}</div>
          )}
          {isLoading ? (
            <div className="p-4 text-center text-gray-600">
              <svg
                className="animate-spin h-5 w-5 mx-auto text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </div>
          ) : employees.length === 0 ? (
            <div className="p-4 text-center text-gray-600">No employees available.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <SelectField
                  label="Employee"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  error={error && !formData.employeeId ? "Please select an employee." : null}
                  options={[
                    { value: "", label: "Select Employee" },
                    ...employees.map((employee) => ({
                      value: employee._id,
                      label: `${employee.name} (${employee.department || "N/A"})`,
                    })),
                  ]}
                  aria-label="Select employee"
                />
                <InputField
                  label="Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  error={error && (!formData.date || new Date(formData.date + "T00:00:00Z") > new Date().setUTCHours(0, 0, 0, 0)) ? error : null}
                  max={new Date().toISOString().split("T")[0]}
                  required
                  aria-label="Select date"
                />
                <InputField
                  label="Check In"
                  name="checkIn"
                  type="time"
                  value={formData.checkIn}
                  onChange={handleChange}
                  error={error && formData.status === "present" && !formData.checkIn ? "Check-in time is required." : null}
                  disabled={formData.status !== "present"}
                  required={formData.status === "present"}
                  aria-label="Check-in time"
                />
                <InputField
                  label="Check Out"
                  name="checkOut"
                  type="time"
                  value={formData.checkOut}
                  onChange={handleChange}
                  error={error && formData.status === "present" && !formData.checkOut ? "Check-out time is required." : null}
                  disabled={formData.status !== "present"}
                  required={formData.status === "present"}
                  aria-label="Check-out time"
                />
                <SelectField
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  options={[
                    { value: "present", label: "Present" },
                    { value: "absent", label: "Absent" },
                    { value: "leave", label: "Leave" },
                  ]}
                  aria-label="Select status"
                />
                {workHoursPreview && formData.status === "present" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Work Hours (Preview)
                    </label>
                    <p className="mt-1 text-gray-600">{workHoursPreview} hours</p>
                  </div>
                )}
              </div>
              <div className="mt-6 flex flex-wrap justify-end gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors flex items-center gap-2 text-sm"
                  aria-label="Reset form"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h5m3 7h5v-5m-10 0v5h-5"
                    />
                  </svg>
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-300 transition-colors flex items-center gap-2 text-sm`}
                  aria-label="Record attendance"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  {isLoading ? "Recording..." : "Record Attendance"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddAttendance;