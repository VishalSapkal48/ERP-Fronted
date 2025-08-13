import React, { useState, useEffect } from "react";
import hrmApi from "../../ApiCalling/Hrm_Api";

const AddAttendance = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    checkIn: "",
    checkOut: "",
    date: new Date().toISOString().split("T")[0], // Today's date in YYYY-MM-DD
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
      const inputDate = new Date(value + "T00:00:00Z"); // Normalize to UTC midnight
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0); // Normalize to UTC midnight
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

    // Calculate work hours preview only for 'present' status
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError(null);

    console.log("Form data before submission:", { ...formData, currentTime: new Date().toISOString() });

    // Validate form
    if (!formData.employeeId) {
      setError("Please select an employee.");
      setIsLoading(false);
      return;
    }
    if (!formData.date) {
      setError("Please select a date.");
      setIsLoading(false);
      return;
    }
    const inputDate = new Date(formData.date + "T00:00:00Z"); // Normalize to UTC midnight
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // Normalize to UTC midnight
    if (inputDate > today) {
      setError("Date cannot be in the future.");
      setIsLoading(false);
      return;
    }
    if (formData.status === "present") {
      if (!formData.checkIn || !formData.checkOut) {
        setError("Check-in and check-out times are required for present status.");
        setIsLoading(false);
        return;
      }
      try {
        const checkInTime = new Date(`1970-01-01T${formData.checkIn}:00Z`);
        const checkOutTime = new Date(`1970-01-01T${formData.checkOut}:00Z`);
        if (checkOutTime <= checkInTime) {
          setError("Check-out time must be after check-in time.");
          setIsLoading(false);
          return;
        }
      } catch (err) {
        setError("Invalid time format. Use HH:mm (e.g., 09:00).");
        setIsLoading(false);
        return;
      }
    }

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

  return (
    <div className=" p-6 bg-gray-screen100 min-h-">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Add Attendance</h1>
        <div className="bg-white p-6 rounded-lg shadow">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="employeeId">
                    Employee
                  </label>
                  <select
                    id="employeeId"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-label="Select employee"
                  >
                    <option value="">Select Employee</option>
                    {employees.map((employee) => (
                      <option key={employee._id} value={employee._id}>
                        {employee.name} ({employee.department || "N/A"})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="date">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    max={new Date().toISOString().split("T")[0]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-label="Select date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="checkIn">
                    Check In
                  </label>
                  <input
                    id="checkIn"
                    type="time"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={formData.status !== "present"}
                    required={formData.status === "present"}
                    aria-label="Check-in time"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="checkOut">
                    Check Out
                  </label>
                  <input
                    id="checkOut"
                    type="time"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={formData.status !== "present"}
                    required={formData.status === "present"}
                    aria-label="Check-out time"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Select status"
                  >
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="leave">Leave</option>
                  </select>
                </div>
                {workHoursPreview && formData.status === "present" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Work Hours (Preview)</label>
                    <p className="mt-1 text-gray-600">{workHoursPreview} hours</p>
                  </div>
                )}
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm ${
                    isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
                  }`}
                  aria-label="Record attendance"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Record Attendance
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 text-sm hover:bg-gray-400"
                  aria-label="Reset form"
                >
                  Reset
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