import React, { useState, useEffect } from "react";
import hrmApi from "../../ApiCalling/Hrm_Api";

const Payroll = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComponent, setNewComponent] = useState({
    employeeId: "",
    name: "",
    status: "Active",
    type: "Earning",
    amount: 0,
  });
  const [showAddForm, setShowAddForm] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(null);

  const fetchAllEmployeesPayroll = async (retryCount = 0) => {
    const maxRetries = 2;
    try {
      setLoading(true);
      setError(null);
      const data = await hrmApi.getAllEmployeesPayroll();
      console.log("Fetched employees:", data);
      setEmployees(data);
    } catch (error) {
      console.error("API Error in fetchAllEmployeesPayroll:", error, {
        status: error.response?.status,
        data: error.response?.data,
        retryCount,
      });
      if (retryCount < maxRetries) {
        console.log(`Retrying... Attempt ${retryCount + 1} of ${maxRetries}`);
        await new Promise((resolve) => setTimeout(resolve, 1000 * (retryCount + 1)));
        return fetchAllEmployeesPayroll(retryCount + 1);
      }
      setError(`Failed to fetch payroll data. Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEmployeesPayroll();
  }, []);

  const handleAddComponent = async (employeeId) => {
    console.log("Adding payroll component for employee ID:", employeeId);
    if (!employees.some((emp) => emp.employeeId === employeeId)) {
      setError("Invalid employee ID for adding component.");
      console.error("Employee not found for ID:", employeeId);
      return;
    }
    try {
      const componentData = { ...newComponent, employeeId };
      if (!componentData.name || !componentData.type) {
        setError("Name and type are required for new component");
        console.error("Invalid component data:", componentData);
        return;
      }
      const newComp = await hrmApi.createPayrollComponent(employeeId, componentData);
      setEmployees(
        employees.map((emp) =>
          emp.employeeId === employeeId
            ? { ...emp, payrollComponents: [...emp.payrollComponents, newComp] }
            : emp
        )
      );
      setNewComponent({ employeeId: "", name: "", status: "Active", type: "Earning", amount: 0 });
      setShowAddForm(null);
      console.log("Payroll component added successfully for ID:", employeeId);
    } catch (error) {
      setError(`Failed to add payroll component. Error: ${error.message}`);
      console.error("Add Error:", error);
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="p-6 ml-64">Loading...</div>;
  if (error) return <div className="p-6 ml-64 text-red-500">{error}</div>;

  return (
    <div className="p-6 ml-64">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Payroll Settings</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3 mb-4"
        />
      </div>
      {filteredEmployees.length === 0 && !loading && !error && (
        <div className="p-6 text-center text-gray-500">No employees found.</div>
      )}
      <table className="min-w-full bg-white border rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">Employee ID</th>
            <th className="py-2 px-4 border-r">Name</th>
            <th className="py-2 px-4 border-r">Net Salary</th>
            <th className="py-2 px-4 border-r">Payment Method</th>
            <th className="py-2 px-4 border-r">Employee Type</th>
            <th className="py-2 px-4 border-r">Bank Name</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
           {filteredEmployees.map((employee) => (
              <tr key={employee.employeeId} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 border-r text-center">{employee.employeeId}</td>
                <td className="py-2 px-4 border-r text-center">{employee.name || "N/A"}</td>
                <td className="py-2 px-4 border-r text-center">{employee.employeeDetails.netSalary || "N/A"}</td>
                <td className="py-2 px-4 border-r text-center">{employee.employeeDetails.paymentMethod || "N/A"}</td>
                <td className="py-2 px-4 border-r text-center">{employee.employeeDetails.employeeType || "N/A"}</td>
                <td className="py-2 px-4 border-r text-center">{employee.employeeDetails.bankName || "N/A"}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => setShowPopup(employee.employeeId)}
                    className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
                  >
                    View All
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {showAddForm && (
        <div className="mt-6 p-6 border rounded-lg bg-gray-50 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Add New Payroll Component</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Employee ID</label>
              <input
                type="text"
                value={showAddForm}
                readOnly
                className="mt-1 p-2 border rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Component Name *</label>
              <input
                type="text"
                value={newComponent.name}
                onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type *</label>
              <select
                value={newComponent.type}
                onChange={(e) => setNewComponent({ ...newComponent, type: e.target.value })}
                className="mt-1 p-2 border rounded w-full"
                required
              >
                <option value="Earning">Earning</option>
                <option value="Deduction">Deduction</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={newComponent.status}
                onChange={(e) => setNewComponent({ ...newComponent, status: e.target.value })}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                value={newComponent.amount}
                onChange={(e) =>
                  setNewComponent({ ...newComponent, amount: parseFloat(e.target.value) || 0 })
                }
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={() => handleAddComponent(showAddForm)}
              className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
            >
              Add Component
            </button>
            <button
              onClick={() => setShowAddForm(null)}
              className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Employee Details</h3>
            <div className="space-y-2">
              {Object.entries(employees.find((e) => e.employeeId === showPopup).employeeDetails).map(
                ([key, value]) => (
                  <div key={key}>
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                    <span className="ml-2">{value || "N/A"}</span>
                  </div>
                )
              )}
            </div>
            <button
              onClick={() => setShowPopup(null)}
              className="mt-4 bg-red-600 text-white p-2 rounded hover:bg-red-700 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payroll;