import { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Travel", amount: 200, date: "2025-07-01" },
    { id: 2, category: "Office Supplies", amount: 150, date: "2025-07-02" },
  ]);
  const [newExpense, setNewExpense] = useState({
    category: "",
    amount: "",
    date: "",
  });

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpense.category || !newExpense.amount || !newExpense.date) return;
    setExpenses([...expenses, { id: expenses.length + 1, ...newExpense }]);
    setNewExpense({ category: "", amount: "", date: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Expenses</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Log New Expense</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddExpense}
        >
          <input
            type="text"
            placeholder="Category"
            value={newExpense.category}
            onChange={(e) =>
              setNewExpense({ ...newExpense, category: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={newExpense.date}
            onChange={(e) =>
              setNewExpense({ ...newExpense, date: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Expense
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="p-2 border">{expense.id}</td>
                <td className="p-2 border">{expense.category}</td>
                <td className="p-2 border">${expense.amount}</td>
                <td className="p-2 border">{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;
