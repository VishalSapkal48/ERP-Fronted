import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const StockManagement = () => {
  const [stock, setStock] = useState([
    { id: 1, product: 'Product A', level: 50, status: 'Low' },
    { id: 2, product: 'Product B', level: 100, status: 'Normal' },
  ]);
  const [formData, setFormData] = useState({ product: '', level: '', status: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'product', label: 'Product' },
    { key: 'level', label: 'Stock Level' },
    { key: 'status', label: 'Status' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setStock(stock.map((s) => (s.id === currentId ? { ...s, ...formData } : s)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setStock([...stock, { id: stock.length + 1, ...formData }]);
    }
    setFormData({ product: '', level: '', status: '' });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
    setCurrentId(item.id);
  };

  const handleDelete = (item) => {
    setStock(stock.filter((s) => s.id !== item.id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Stock Management System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Product" type="text" name="product" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} required />
        <FormInput label="Stock Level" type="number" name="level" value={formData.level} onChange={(e) => setFormData({ ...formData, level: e.target.value })} required />
        <FormInput label="Status" type="text" name="status" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Stock</button>
      </form>
      <DataTable columns={columns} data={stock} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default StockManagement;