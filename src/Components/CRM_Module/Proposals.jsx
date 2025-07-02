import { useState } from "react";

function Proposals() {
  const [proposals, setProposals] = useState([
    { id: 1, client: "Acme Corp", amount: 5000, status: "Sent" },
    { id: 2, client: "Beta Inc", amount: 3000, status: "Pending" },
  ]);
  const [newProposal, setNewProposal] = useState({
    client: "",
    amount: "",
    status: "",
  });

  const handleAddProposal = (e) => {
    e.preventDefault();
    if (!newProposal.client || !newProposal.amount || !newProposal.status)
      return;
    setProposals([...proposals, { id: proposals.length + 1, ...newProposal }]);
    setNewProposal({ client: "", amount: "", status: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Proposals/Quotations</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Create Proposal</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddProposal}
        >
          <input
            type="text"
            placeholder="Client Name"
            value={newProposal.client}
            onChange={(e) =>
              setNewProposal({ ...newProposal, client: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newProposal.amount}
            onChange={(e) =>
              setNewProposal({ ...newProposal, amount: e.target.value })
            }
            className="p-2 border rounded"
          />
          <select
            value={newProposal.status}
            onChange={(e) =>
              setNewProposal({ ...newProposal, status: e.target.value })
            }
            className="p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="Sent">Sent</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Proposal
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Client</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal) => (
              <tr key={proposal.id} className="hover:bg-gray-50">
                <td className="p-2 border">{proposal.id}</td>
                <td className="p-2 border">{proposal.client}</td>
                <td className="p-2 border">${proposal.amount}</td>
                <td className="p-2 border">{proposal.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Proposals;
