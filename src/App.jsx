import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          ERP Dashboard
        </h1>

        <div className="space-y-4">
          <div className="p-4 bg-blue-100 rounded-md shadow-sm hover:bg-blue-200 transition">
            <h2 className="text-xl font-semibold">Inventory Module</h2>
            <p className="text-sm text-gray-700">Manage stock, categories, invoices, and purchases.</p>
          </div>

          <div className="p-4 bg-green-100 rounded-md shadow-sm hover:bg-green-200 transition">
            <h2 className="text-xl font-semibold">Sales Module</h2>
            <p className="text-sm text-gray-700">Handle quotations, orders, dispatch, and invoices.</p>
          </div>

          <div className="p-4 bg-yellow-100 rounded-md shadow-sm hover:bg-yellow-200 transition">
            <h2 className="text-xl font-semibold">HR Module</h2>
            <p className="text-sm text-gray-700">Employee records, leave, payroll, and attendance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
