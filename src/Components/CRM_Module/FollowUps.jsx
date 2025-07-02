import { useState } from "react";

function FollowUps() {
  const [followUps, setFollowUps] = useState([
    {
      id: 1,
      lead: "John Doe",
      dueDate: "2025-07-05",
      notes: "Discuss project scope",
    },
    {
      id: 2,
      lead: "Jane Smith",
      dueDate: "2025-07-06",
      notes: "Follow up on proposal",
    },
  ]);
  const [newFollowUp, setNewFollowUp] = useState({
    lead: "",
    dueDate: "",
    notes: "",
  });

  const handleAddFollowUp = (e) => {
    e.preventDefault();
    if (!newFollowUp.lead || !newFollowUp.dueDate || !newFollowUp.notes) return;
    setFollowUps([...followUps, { id: followUps.length + 1, ...newFollowUp }]);
    setNewFollowUp({ lead: "", dueDate: "", notes: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Follow-ups</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Schedule Follow-up</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddFollowUp}
        >
          <input
            type="text"
            placeholder="Lead Name"
            value={newFollowUp.lead}
            onChange={(e) =>
              setNewFollowUp({ ...newFollowUp, lead: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={newFollowUp.dueDate}
            onChange={(e) =>
              setNewFollowUp({ ...newFollowUp, dueDate: e.target.value })
            }
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Notes"
            value={newFollowUp.notes}
            onChange={(e) =>
              setNewFollowUp({ ...newFollowUp, notes: e.target.value })
            }
            className="p-2 border rounded col-span-1 md:col-span-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Follow-up
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Lead</th>
              <th className="p-2 border">Due Date</th>
              <th className="p-2 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {followUps.map((followUp) => (
              <tr key={followUp.id} className="hover:bg-gray-50">
                <td className="p-2 border">{followUp.id}</td>
                <td className="p-2 border">{followUp.lead}</td>
                <td className="p-2 border">{followUp.dueDate}</td>
                <td className="p-2 border">{followUp.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FollowUps;
