import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Inventory = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product A', quantity: 50, unit: 'pcs', supplier: 'Supplier A' },
    { id: 2, name: 'Product B', quantity: 30, unit: 'pcs', supplier: 'Supplier B' },
  ]);
  const [formData, setFormData] = useState({ name: '', quantity: '', unit: '', supplier: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'name', label: 'Product Name' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'unit', label: 'Unit' },
    { key: 'supplier', label: 'Supplier' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setItems(items.map((i) => (i.id === currentId ? { ...i, ...formData } : i)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setItems([...items, { id: items.length + 1, ...formData }]);
    }
    setFormData({ name: '', quantity: '', unit: '', supplier: '' });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
    setCurrentId(item.id);
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Inventory Module</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Product Name" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <FormInput label="Quantity" type="number" name="quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} required />
        <FormInput label="Unit" type="text" name="unit" value={formData.unit} onChange={(e) => setFormData({ ...formData, unit: e.target.value })} required />
        <FormInput label="Supplier" type="text" name="supplier" value={formData.supplier} onChange={(e) => setFormData({ ...formData, supplier: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Item</button>
      </form>
      <DataTable columns={columns} data={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Inventory;