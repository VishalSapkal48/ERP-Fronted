import React from "react";

const Leaves = () => {
  const [leaveBalance] = React.useState({
    annual: { total: 15, used: 0 },
    sick: { total: 5, used: 0 },
    casual: { total: 2, used: 0 },
  });

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">Leave Management</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Apply for Leave</h3>
          <input type="date" className="p-2 border rounded mb-2 w-full" />
          <input type="date" className="p-2 border rounded mb-2 w-full" />
          <select className="p-2 border rounded mb-2 w-full">
            <option>Annual Leave</option>
            <option>Sick Leave</option>
            <option>Casual Leave</option>
          </select>
          <textarea className="p-2 border rounded mb-2 w-full" placeholder="Reason"></textarea>
          <button className="bg-blue-500 text-white p-2 rounded">Submit Request</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Leave Balance</h3>
          <p>Annual Leave: {leaveBalance.annual.total - leaveBalance.annual.used} / {leaveBalance.annual.total} days</p>
          <p>Sick Leave: {leaveBalance.sick.total - leaveBalance.sick.used} / {leaveBalance.sick.total} days</p>
          <p>Casual Leave: {leaveBalance.casual.total - leaveBalance.casual.used} / {leaveBalance.casual.total} days</p>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">My Leave Requests</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th>From Date</th>
              <th>To Date</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-03-10</td>
              <td>2024-03-12</td>
              <td>Sick Leave</td>
              <td>Fever</td>
              <td><span className="bg-orange-500 text-white p-1 rounded">PENDING</span></td>
            </tr>
            <tr>
              <td>2024-02-01</td>
              <td>2024-02-05</td>
              <td>Annual Leave</td>
              <td>Vacation</td>
              <td><span className="bg-green-500 text-white p-1 rounded">APPROVED</span></td>
            </tr>
            <tr>
              <td>2024-01-15</td>
              <td>2024-01-15</td>
              <td>Casual Leave</td>
              <td>Personal appointment</td>
              <td><span className="bg-red-500 text-white p-1 rounded">REJECTED</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Pending Leave Requests (Admin View)</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th>Employee</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>2024-03-15</td>
              <td>2024-03-17</td>
              <td>Annual Leave</td>
              <td>Family trip</td>
              <td><span className="bg-orange-500 text-white p-1 rounded">PENDING</span></td>
              <td>
                <button className="bg-green-500 text-white p-1 rounded mr-1">Approve</button>
                <button className="bg-red-500 text-white p-1 rounded">Reject</button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>2024-03-20</td>
              <td>2024-03-20</td>
              <td>Sick Leave</td>
              <td>Migraine</td>
              <td><span className="bg-orange-500 text-white p-1 rounded">PENDING</span></td>
              <td>
                <button className="bg-green-500 text-white p-1 rounded mr-1">Approve</button>
                <button className="bg-red-500 text-white p-1 rounded">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaves;