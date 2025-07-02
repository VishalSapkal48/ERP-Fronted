import React from 'react';
import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Customers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Customer A', category: 'Retail' },
    { id: 2, name: 'Customer B', category: 'Wholesale' },
  ]);
  const [formData, setFormData] = useState({ name: '', category: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'name', label: 'Customer Name' },
    { key: 'category', label: 'Category' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setCustomers(customers.map((c) => (c.id === currentId ? { ...c, ...formData } : c)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setCustomers([...customers, { id: customers.length + 1, ...formData }]);
    }
    setFormData({ name: '', category: '' });
  };

  const handleEdit = (customer) => {
    setFormData(customer);
    setIsEditing(true);
    setCurrentId(customer.id);
  };

  const handleDelete = (customer) => {
    setCustomers(customers.filter((c) => c.id !== customer.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customer Management System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Customer Name" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <FormInput label="Category" type="text" name="category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Customer</button>
      </form>
      <h3 className="text-xl font-bold mb-2">Category Based Management System</h3>
      <DataTable columns={columns} data={customers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Customers;