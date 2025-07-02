import React from 'react';
import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'Supplier A', contact: '123-456-7890' },
    { id: 2, name: 'Supplier B', contact: '987-654-3210' },
  ]);
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'name', label: 'Supplier Name' },
    { key: 'contact', label: 'Contact' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setSuppliers(suppliers.map((s) => (s.id === currentId ? { ...s, ...formData } : s)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setSuppliers([...suppliers, { id: suppliers.length + 1, ...formData }]);
    }
    setFormData({ name: '', contact: '' });
  };

  const handleEdit = (supplier) => {
    setFormData(supplier);
    setIsEditing(true);
    setCurrentId(supplier.id);
  };

  const handleDelete = (supplier) => {
    setSuppliers(suppliers.filter((s) => s.id !== supplier.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Supplier/Vendor Management System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Supplier Name" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <FormInput label="Contact" type="text" name="contact" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Supplier</button>
      </form>
      <DataTable columns={columns} data={suppliers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Suppliers;