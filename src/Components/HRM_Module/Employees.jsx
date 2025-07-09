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
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message || "Failed to fetch employees");
        console.error("Error fetching employees:", err);
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
    setError(null); // Clear previous errors
    try {
      await hrmApi.deleteEmployee(deleteModal.employeeId);
      setEmployees(employees.filter((emp) => emp._id !== deleteModal.employeeId));
      setDeleteModal({ show: false, employeeId: null, employeeName: "" });
    } catch (err) {
      setError(err.message || "Failed to delete employee");
      console.error("Error deleting employee:", err);
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
  const uniqueStatuses = ["All", "active", "inactive"]; // Enforce known statuses

  const exportToExcel = () => {
    try {
      if (filteredEmployees.length === 0) {
        setError("No employees available to export.");
        return;
      }

      const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
      const fileName = "employees_data";

      // Define headers explicitly to ensure consistency
      const headers = [
        "employeeId",
        "name",
        "department",
        "jobTitle",
        "email",
        "nextSalary",
        "status",
        "workPhone",
        "homePhone",
        "emergencyPhone",
        "gender",
        "dob",
        "hireDate",
        "joiningDate",
      ];

      // Map data to headers
      const data = filteredEmployees.map((employee) =>
        headers.map((header) => {
          const value = employee[header];
          if (value === null || value === undefined) return "N/A";
          if (value instanceof Date || (typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2}/))) {
            return new Date(value).toISOString().split("T")[0];
          }
          return value.toString();
        })
      );

      const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
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
      <h2 className="text-2xl font-bold mb-4">Employee Directory</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="mb-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search by name, email, or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search employees"
        />
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="p-2 border rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="p-2 border rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Export employees to Excel"
        >
          Export to Excel
        </button>
      </div>
      {loading ? (
        <div className="text-center">Loading employees...</div>
      ) : filteredEmployees.length === 0 ? (
        <div className="text-center text-gray-600">No employees found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Photo</th>
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Name</th>
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Department</th>
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Job Title</th>
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Email</th>
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Salary</th>
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Status</th>
                <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">
                    <img
                      src={employee.profileImage || "https://via.placeholder.com/50"}
                      alt={employee.name || "Employee"}
                      className="rounded-full w-10 h-10 object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/50";
                      }}
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{employee.name || "N/A"}</td>
                  <td className="py-2 px-4 border-b">{employee.department || "N/A"}</td>
                  <td className="py-2 px-4 border-b">{employee.jobTitle || "N/A"}</td>
                  <td className="py-2 px-4 border-b">{employee.email || "N/A"}</td>
                  <td className="py-2 px-4 border-b">
                    {employee.nextSalary ? `$${employee.nextSalary.toLocaleString()}` : "N/A"}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        employee.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {employee.status ? employee.status.charAt(0).toUpperCase() + employee.status.slice(1) : "N/A"}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEdit(employee._id)}
                      className="mr-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label={`Edit ${employee.name || "employee"}`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(employee._id, employee.name)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800">Confirm Deletion</h2>
            <p className="mt-2 text-gray-600">
              Are you sure you want to delete <strong>{deleteModal.employeeName || "this employee"}</strong>?
            </p>
            {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Cancel deletion"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
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
  );
};

export default Employees;