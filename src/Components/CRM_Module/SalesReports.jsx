import { useState } from "react";

function SalesReports() {
  const [sales, setSales] = useState([
    { id: 1, client: "Acme Corp", amount: 5000, date: "2025-07-01" },
    { id: 2, client: "Beta Inc", amount: 3000, date: "2025-07-02" },
  ]);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sales Reports</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Client</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-50">
                <td className="p-2 border">{sale.id}</td>
                <td className="p-2 border">{sale.client}</td>
                <td className="p-2 border">${sale.amount}</td>
                <td className="p-2 border">{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesReports;
