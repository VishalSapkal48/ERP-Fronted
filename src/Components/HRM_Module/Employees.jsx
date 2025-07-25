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
    navigate(`/employee/edit/${employeeId}`);
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

      // Define fields to exclude
      const excludedFields = ["password", "_id", "reenterPassword", "profileImage"];

      // Define fields to include, including new salary components
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

      // Format headers for readability
      const formattedHeaders = includedFields.map((header) =>
        header
          .replace(/([A-Z])/g, " $1")
          .trim()
          .replace(/^\w/, (c) => c.toUpperCase())
      );

      // Map data to headers
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

  return (
    <div className="p-6 ml-64 min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Employee Directory</h2>
        </div>
        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Search by name, email, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
            aria-label="Search employees"
          />
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
            aria-label="Filter by department"
          >
            {uniqueDepartments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
            aria-label="Filter by job title"
          >
            {uniqueRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
            aria-label="Filter by status"
          >
            {uniqueStatuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
          <button
            onClick={exportToExcel}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 text-sm"
            aria-label="Export employees to Excel"
          >
            Export to Excel
          </button>
        </div>
        {loading ? (
          <div className="text-center text-gray-600 py-10">Loading employees...</div>
        ) : filteredEmployees.length === 0 ? (
          <div className="text-center text-gray-600 py-10">No employees found.</div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
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
                      {employee.netSalary ? `${employee.netSalary.toLocaleString()}` : "N/A"}
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
                    <td className="py-2 px-4 border-b flex space-x-2">
                      <button
                        onClick={() => handleEdit(employee.employeeId)}
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition duration-150"
                        aria-label={`Edit ${employee.name || "employee"}`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openDeleteModal(employee.employeeId, employee.name)}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm transition duration-150"
                        aria-label={`Delete ${employee.name || "employee"}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {deleteModal.show && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Deletion</h2>
              <p className="text-gray-600 mb-4">
                Are you sure you want to delete <strong>{deleteModal.employeeName || "this employee"}</strong>?
              </p>
              {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeDeleteModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm transition duration-150"
                  aria-label="Cancel deletion"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm transition duration-150"
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