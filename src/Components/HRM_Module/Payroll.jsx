import React, { useState, useEffect } from "react";
import hrmApi from "../../ApiCalling/Hrm_Api";

const Payroll = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-gray-100 min-h-screen w-full overflow-x-hidden">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
          💸 Payroll Settings
        </h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 sm:p-3 border rounded-lg w-full max-w-md text-xs sm:text-sm md:text-base focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-6 sm:py-8">
          <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-4 text-xs sm:text-sm md:text-base">{error}</div>
      ) : filteredEmployees.length === 0 ? (
        <div className="text-gray-500 text-center py-4 text-xs sm:text-sm md:text-base">No employees found.</div>
      ) : (
        <>
          <div className="space-y-2 sm:hidden">
            {filteredEmployees.map((employee) => (
              <div key={employee.employeeId} className="border rounded-lg p-3 bg-white shadow hover:bg-gray-50">
                <p className="text-xs"><strong>ID:</strong> {employee.employeeId}</p>
                <p className="text-xs"><strong>Name:</strong> {employee.name || "N/A"}</p>
                <p className="text-xs"><strong>Net Salary:</strong> {employee.employeeDetails.netSalary || "N/A"}</p>
                <p className="text-xs"><strong>Payment Method:</strong> {employee.employeeDetails.paymentMethod || "N/A"}</p>
                <p className="text-xs"><strong>Employee Type:</strong> {employee.employeeDetails.employeeType || "N/A"}</p>
                <p className="text-xs"><strong>Bank Name:</strong> {employee.employeeDetails.bankName || "N/A"}</p>
                <div className="mt-2">
                  <button
                    onClick={() => setShowPopup(employee.employeeId)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-xs min-h-[36px] w-full"
                  >
                    View All
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full bg-white border rounded-lg shadow text-xs sm:text-sm md:text-base">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-2 px-3 sm:px-4 border-r text-left">Employee ID</th>
                  <th className="py-2 px-3 sm:px-4 border-r text-left">Name</th>
                  <th className="py-2 px-3 sm:px-4 border-r text-left">Net Salary</th>
                  <th className="py-2 px-3 sm:px-4 border-r text-left">Payment Method</th>
                  <th className="py-2 px-3 sm:px-4 border-r text-left">Employee Type</th>
                  <th className="py-2 px-3 sm:px-4 border-r text-left">Bank Name</th>
                  <th className="py-2 px-3 sm:px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.employeeId} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-3 sm:px-4 border-r">{employee.employeeId}</td>
                    <td className="py-2 px-3 sm:px-4 border-r">{employee.name || "N/A"}</td>
                    <td className="py-2 px-3 sm:px-4 border-r">{employee.employeeDetails.netSalary || "N/A"}</td>
                    <td className="py-2 px-3 sm:px-4 border-r">{employee.employeeDetails.paymentMethod || "N/A"}</td>
                    <td className="py-2 px-3 sm:px-4 border-r">{employee.employeeDetails.employeeType || "N/A"}</td>
                    <td className="py-2 px-3 sm:px-4 border-r">{employee.employeeDetails.bankName || "N/A"}</td>
                    <td className="py-2 px-3 sm:px-4">
                      <button
                        onClick={() => setShowPopup(employee.employeeId)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-xs sm:text-sm min-h-[36px]"
                      >
                        View All
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Employee Details</h3>
            <div className="space-y-2 text-xs sm:text-sm md:text-base">
              {Object.entries(employees.find((e) => e.employeeId === showPopup).employeeDetails).map(
                ([key, value]) => (
                  <div key={key} className="flex">
                    <span className="font-medium capitalize w-1/2">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                    <span className="w-1/2">{value || "N/A"}</span>
                  </div>
                )
              )}
            </div>
            <button
              onClick={() => setShowPopup(null)}
              className="mt-3 sm:mt-4 bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 rounded-lg w-full text-xs sm:text-sm md:text-base min-h-[44px]"
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