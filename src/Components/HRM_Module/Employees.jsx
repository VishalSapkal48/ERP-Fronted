import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hrmApi from "../../ApiCalling/Hrm_Api";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const Employees = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ show: false, employeeId: null, employeeName: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await hrmApi.getEmployees();
        setEmployees(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to fetch employees");
        console.error("Error fetching employees:", err.response?.data || err);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleEdit = (employeeId) => {
    navigate(`/hrm/employee/edit/${employeeId}`);
  };

  const handleDelete = async () => {
    if (!deleteModal.employeeId) return;
    setLoading(true);
    setError(null);
    try {
      await hrmApi.deleteEmployee(deleteModal.employeeId);
      setEmployees(employees.filter((emp) => emp.employeeId !== deleteModal.employeeId));
      setDeleteModal({ show: false, employeeId: null, employeeName: "" });
    } catch (err) {
      setError(err.message || "Failed to delete employee");
      console.error("Error deleting employee:", err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (employeeId, employeeName) => {
    setDeleteModal({ show: true, employeeId, employeeName });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ show: false, employeeId: null, employeeName: "" });
    setError(null);
  };

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      (employee.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (employee.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (employee.employeeId?.toLowerCase() || "").includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || employee.department === selectedDepartment;
    const matchesRole = selectedRole === "All" || employee.jobTitle === selectedRole;
    const matchesStatus = selectedStatus === "All" || employee.status === selectedStatus;
    return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
  });

  const uniqueDepartments = ["All", ...new Set(employees.map((emp) => emp.department || "N/A"))];
  const uniqueRoles = ["All", ...new Set(employees.map((emp) => emp.jobTitle || "N/A"))];
  const uniqueStatuses = ["All", "active", "inactive"];

  const exportToExcel = () => {
    try {
      if (filteredEmployees.length === 0) {
        setError("No employees available to export.");
        return;
      }

      const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
      const fileName = "employees_data";

      const excludedFields = ["password", "_id", "reenterPassword", "profileImage"];
      const includedFields = [
        "employeeId",
        "name",
        "department",
        "jobTitle",
        "email",
        "netSalary",
        "hra",
        "specialBonus",
        "conveyance",
        "travelAllowances",
        "shiftAllowances",
        "overtime",
        "taxRate",
        "status",
        "workPhone",
        "homePhone",
        "emergencyPhone",
        "workLocation",
        "gender",
        "dob",
        "address",
        "city",
        "country",
        "hireDate",
        "joiningDate",
        "paymentMethod",
        "employeeType",
        "bankName",
        "accountTitle",
        "accountNo",
        "IFSCCode",
        "location",
        "designation",
        "CNIC",
        "pfAccountNumber",
        "pfType",
        "employerContributionPf",
        "employeeContributionPf",
        "ssesType",
        "employerContributionSses",
        "employeeContributionSses",
        "eobiType",
        "employerContributionEobi",
        "employeeContributionEobi",
        "esicType",
        "employerContributionEsic",
        "employeeContributionEsic",
        "username",
        "separationDate",
      ].filter((key) => !excludedFields.includes(key));

      const formattedHeaders = includedFields.map((header) =>
        header
          .replace(/([A-Z])/g, " $1")
          .trim()
          .replace(/^\w/, (c) => c.toUpperCase())
      );

      const data = filteredEmployees.map((employee) =>
        includedFields.map((header) => {
          const value = employee[header];
          if (value === null || value === undefined) return "N/A";
          if (value instanceof Date || (typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2}/))) {
            return new Date(value).toISOString().split("T")[0];
          }
          return value.toString();
        })
      );

      const ws = XLSX.utils.aoa_to_sheet([formattedHeaders, ...data]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Employees");

      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(blob, `${fileName}${fileExtension}`);
    } catch (err) {
      console.error("Error exporting to Excel:", err);
      setError("Failed to export data to Excel. Check console for details.");
    }
  };

  const InputField = ({ label, name, type = "text", value, onChange, ...props }) => (
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
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
      </div>
    </div>
  );

  const SelectField = ({ label, name, value, onChange, options }) => (
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
          className="w-full p-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className=" mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Employee Directory</h2>
         
        </div>
        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <InputField
            label="Search"
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, email, or ID..."
            aria-label="Search employees"
          />
          <SelectField
            label="Department"
            name="department"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            options={uniqueDepartments}
            aria-label="Filter by department"
          />
          <SelectField
            label="Job Title"
            name="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            options={uniqueRoles}
            aria-label="Filter by job title"
          />
          <SelectField
            label="Status"
            name="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            options={uniqueStatuses}
            aria-label="Filter by status"
          />
          <div className="flex items-end">
            <button
              onClick={exportToExcel}
              className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors disabled:bg-green-300"
              aria-label="Export employees to Excel"
              disabled={loading}
            >
              {loading ? "Exporting..." : "Export to Excel"}
            </button>
          </div>
        </div>
        {loading ? (
          <div className="text-center text-gray-600 py-10">
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
            Loading employees...
          </div>
        ) : filteredEmployees.length === 0 ? (
          <div className="text-center text-gray-600 py-10 text-sm">No employees found.</div>
        ) : (
          <>
            {/* Card Layout for Mobile */}
            <div className="block sm:hidden grid grid-cols-1 gap-4">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.employeeId}
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <img
                      src={employee.profileImage || "https://via.placeholder.com/40"}
                      alt={employee.name || "Employee"}
                      className="rounded-full w-10 h-10 object-cover mr-3"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/40";
                      }}
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-800">
                        {employee.name || "N/A"}
                      </h3>
                      <p className="text-sm text-gray-600">{employee.jobTitle || "N/A"}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Department:</span> {employee.department || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Email:</span> {employee.email || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Net Salary:</span>{" "}
                      {employee.netSalary != null ? `${employee.netSalary.toLocaleString()}` : "N/A"}
                    </p>
                    <p className="text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          employee.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {employee.status
                          ? employee.status.charAt(0).toUpperCase() + employee.status.slice(1)
                          : "N/A"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(employee.employeeId)}
                      className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm"
                      aria-label={`Edit ${employee.name || "employee"}`}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Edit"}
                    </button>
                    <button
                      onClick={() => openDeleteModal(employee.employeeId, employee.name)}
                      className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors text-sm"
                      aria-label={`Delete ${employee.name || "employee"}`}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Table Layout for Desktop */}
            <div className="hidden sm:block overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Photo</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Department</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Job Title</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Net Salary</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.employeeId} className="hover:bg-gray-50 transition duration-100">
                      <td className="py-2 px-4 border-b">
                        <img
                          src={employee.profileImage || "https://via.placeholder.com/40"}
                          alt={employee.name || "Employee"}
                          className="rounded-full w-10 h-10 object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/40";
                          }}
                        />
                      </td>
                      <td className="py-2 px-4 border-b text-sm text-gray-800">{employee.name || "N/A"}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-800">{employee.department || "N/A"}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-800">{employee.jobTitle || "N/A"}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-800">{employee.email || "N/A"}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-800">
                        {employee.netSalary != null ? `${employee.netSalary.toLocaleString()}` : "N/A"}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            employee.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {employee.status
                            ? employee.status.charAt(0).toUpperCase() + employee.status.slice(1)
                            : "N/A"}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b flex flex-wrap gap-2">
                        <button
                          onClick={() => handleEdit(employee.employeeId)}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm"
                          aria-label={`Edit ${employee.name || "employee"}`}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Edit"}
                        </button>
                        <button
                          onClick={() => openDeleteModal(employee.employeeId, employee.name)}
                          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors text-sm"
                          aria-label={`Delete ${employee.name || "employee"}`}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {deleteModal.show && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Confirm Deletion</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Are you sure you want to delete <strong>{deleteModal.employeeName || "this employee"}</strong>?
              </p>
              {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeDeleteModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors text-sm"
                  aria-label="Cancel deletion"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors text-sm disabled:bg-red-300"
                  disabled={loading}
                  aria-label="Confirm deletion"
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;