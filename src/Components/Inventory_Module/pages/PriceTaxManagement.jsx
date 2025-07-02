import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const PriceTaxManagement = () => {
  const [priceTax, setPriceTax] = useState([
    { id: 1, product: 'Product A', price: 100, taxRate: 10 },
    { id: 2, product: 'Product B', price: 50, taxRate: 5 },
  ]);
  const [formData, setFormData] = useState({ product: '', price: '', taxRate: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'product', label: 'Product' },
    { key: 'price', label: 'Price' },
    { key: 'taxRate', label: 'Tax Rate (%)' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPriceTax(priceTax.map((p) => (p.id === currentId ? { ...p, ...formData } : p)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setPriceTax([...priceTax, { id: priceTax.length + 1, ...formData }]);
    }
    setFormData({ product: '', price: '', taxRate: '' });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
    setCurrentId(item.id);
  };

  const handleDelete = (item) => {
    setPriceTax(priceTax.filter((p) => p.id !== item.id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Price & Tax Management</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Product" type="text" name="product" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} required />
        <FormInput label="Price" type="number" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
        <FormInput label="Tax Rate (%)" type="number" name="taxRate" value={formData.taxRate} onChange={(e) => setFormData({ ...formData, taxRate: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Price/Tax</button>
      </form>
      <DataTable columns={columns} data={priceTax} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default PriceTaxManagement;