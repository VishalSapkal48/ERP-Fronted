import { useState } from "react";

function LeadManagement() {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "New",
      source: "Website",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Contacted",
      source: "Referral",
    },
  ]);
  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    status: "",
    source: "",
  });

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLead.name || !newLead.email || !newLead.status || !newLead.source)
      return;
    setLeads([...leads, { id: leads.length + 1, ...newLead }]);
    setNewLead({ name: "", email: "", status: "", source: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Lead Management</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Lead</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddLead}
        >
          <input
            type="text"
            placeholder="Name"
            value={newLead.name}
            onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={newLead.email}
            onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
            className="p-2 border rounded"
          />
          <select
            value={newLead.status}
            onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
            className="p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
          </select>
          <input
            type="text"
            placeholder="Source"
            value={newLead.source}
            onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Lead
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Source</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="p-2 border">{lead.id}</td>
                <td className="p-2 border">{lead.name}</td>
                <td className="p-2 border">{lead.email}</td>
                <td className="p-2 border">{lead.status}</td>
                <td className="p-2 border">{lead.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeadManagement;
