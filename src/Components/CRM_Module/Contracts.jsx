import { useState } from "react";

function Contracts() {
  const [contracts, setContracts] = useState([
    { id: 1, client: "Acme Corp", status: "Active", expiry: "2026-07-01" },
    { id: 2, client: "Beta Inc", status: "Pending", expiry: "2026-12-01" },
  ]);
  const [newContract, setNewContract] = useState({
    client: "",
    status: "",
    expiry: "",
  });

  const handleAddContract = (e) => {
    e.preventDefault();
    if (!newContract.client || !newContract.status || !newContract.expiry)
      return;
    setContracts([...contracts, { id: contracts.length + 1, ...newContract }]);
    setNewContract({ client: "", status: "", expiry: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contracts</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Contract</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddContract}
        >
          <input
            type="text"
            placeholder="Client Name"
            value={newContract.client}
            onChange={(e) =>
              setNewContract({ ...newContract, client: e.target.value })
            }
            className="p-2 border rounded"
          />
          <select
            value={newContract.status}
            onChange={(e) =>
              setNewContract({ ...newContract, status: e.target.value })
            }
            className="p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Expired">Expired</option>
          </select>
          <input
            type="date"
            value={newContract.expiry}
            onChange={(e) =>
              setNewContract({ ...newContract, expiry: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Contract
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Client</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id} className="hover:bg-gray-50">
                <td className="p-2 border">{contract.id}</td>
                <td className="p-2 border">{contract.client}</td>
                <td className="p-2 border">{contract.status}</td>
                <td className="p-2 border">{contract.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contracts;
