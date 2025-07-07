import React from "react";

const Employees = () => (
  <div className="p-6 ml-64">
    <h2 className="text-2xl font-bold mb-4">Employee Directory</h2>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search employees..."
        className="p-2 border rounded w-full"
      />
      <select className="p-2 border rounded ml-2">
        <option>All Departments</option>
      </select>
      <select className="p-2 border rounded ml-2">
        <option>All Roles</option>
      </select>
      <select className="p-2 border rounded ml-2">
        <option>All Statuses</option>
      </select>
    </div>
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src="https://via.placeholder.com/50"
          alt="Jane Doe"
          className="rounded-full mb-2"
        />
        <h3>Jane Doe</h3>
        <p className="text-gray-500">HR Manager, Human Resources</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src="https://via.placeholder.com/50"
          alt="John Smith"
          className="rounded-full mb-2"
        />
        <h3>John Smith</h3>
        <p className="text-gray-500">Senior Developer, Engineering</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src="https://via.placeholder.com/50"
          alt="Emily White"
          className="rounded-full mb-2"
        />
        <h3>Emily White</h3>
        <p className="text-gray-500">Marketing Specialist, Marketing</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src="https://via.placeholder.com/50"
          alt="Michael Brown"
          className="rounded-full mb-2"
        />
        <h3>Michael Brown</h3>
        <p className="text-gray-500">Sales Executive, Sales</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src="https://via.placeholder.com/50"
          alt="Sarah Green"
          className="rounded-full mb-2"
        />
        <h3>Sarah Green</h3>
        <p className="text-gray-500">UI/UX Designer, Engineering</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src="https://via.placeholder.com/50"
          alt="David Lee"
          className="rounded-full mb-2"
        />
        <h3>David Lee</h3>
        <p className="text-gray-500">HR Coordinator, Human Resources</p>
      </div>
    </div>
  </div>
);

export default Employees;