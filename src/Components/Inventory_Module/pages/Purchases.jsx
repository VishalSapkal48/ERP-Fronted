import React from 'react';
import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Purchases = () => {
  const [purchases, setPurchases] = useState([
    { id: 1, product: 'Product A', quantity: 10, date: '2025-06-30' },
    { id: 2, product: 'Product B', quantity: 20, date: '2025-06-29' },
  ]);
  const [formData, setFormData] = useState({ product: '', quantity: '', date: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'product', label: 'Product' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'date', label: 'Date' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPurchases(purchases.map((p) => (p.id === currentId ? { ...p, ...formData } : p)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setPurchases([...purchases, { id: purchases.length + 1, ...formData }]);
    }
    setFormData({ product: '', quantity: '', date: '' });
  };

  const handleEdit = (purchase) => {
    setFormData(purchase);
    setIsEditing(true);
    setCurrentId(purchase.id);
  };

  const handleDelete = (purchase) => {
    setPurchases(purchases.filter((p) => p.id !== purchase.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Purchase Management System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Product" type="text" name="product" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} required />
        <FormInput label="Quantity" type="number" name="quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} required />
        <FormInput label="Date" type="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Purchase</button>
      </form>
      <h3 className="text-xl font-bold mb-2">Stock Management System</h3>
      <DataTable columns={columns} data={purchases} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Purchases;