import React from 'react';

function SupplierForm() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Add New Supplier</h2>
      <form>
        <div className="mb-4">
          <label className="block">Name</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-green-500 text-white p-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default SupplierForm;