import React from 'react';
import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Account A', type: 'Savings' },
    { id: 2, name: 'Account B', type: 'Current' },
  ]);
  const [formData, setFormData] = useState({ name: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'name', label: 'Account Name' },
    { key: 'type', label: 'Account Type' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setAccounts(accounts.map((a) => (a.id === currentId ? { ...a, ...formData } : a)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setAccounts([...accounts, { id: accounts.length + 1, ...formData }]);
    }
    setFormData({ name: '', type: '' });
  };

  const handleEdit = (account) => {
    setFormData(account);
    setIsEditing(true);
    setCurrentId(account.id);
  };

  const handleDelete = (account) => {
    setAccounts(accounts.filter((a) => a.id !== account.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Account Management System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Account Name" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <FormInput label="Account Type" type="text" name="type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Account</button>
      </form>
      <h3 className="text-xl font-bold mb-2">Different Accounts Management System</h3>
      <DataTable columns={columns} data={accounts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Accounts;