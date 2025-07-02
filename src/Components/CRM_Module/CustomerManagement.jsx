import { useState } from "react";

function CustomerManagement() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Acme Corp",
      contact: "contact@acme.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Beta Inc",
      contact: "info@beta.com",
      phone: "098-765-4321",
    },
  ]);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    contact: "",
    phone: "",
  });

  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.contact || !newCustomer.phone) return;
    setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
    setNewCustomer({ name: "", contact: "", phone: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Customer Management</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Customer</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddCustomer}
        >
          <input
            type="text"
            placeholder="Company Name"
            value={newCustomer.name}
            onChange={(e) =>
              setNewCustomer({ ...newCustomer, name: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Contact Email"
            value={newCustomer.contact}
            onChange={(e) =>
              setNewCustomer({ ...newCustomer, contact: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={newCustomer.phone}
            onChange={(e) =>
              setNewCustomer({ ...newCustomer, phone: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Customer
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Company Name</th>
              <th className="p-2 border">Contact Email</th>
              <th className="p-2 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="p-2 border">{customer.id}</td>
                <td className="p-2 border">{customer.name}</td>
                <td className="p-2 border">{customer.contact}</td>
                <td className="p-2 border">{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerManagement;
