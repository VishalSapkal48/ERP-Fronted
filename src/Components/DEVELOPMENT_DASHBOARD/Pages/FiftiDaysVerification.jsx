import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FiftiDaysVerification() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data
  const allDummyData = {
    nadbramha: [
      { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@example.com', contact: '9876543210', details: 'Nadbramha verification - Day 5 (Started: 09/11/2025)' },
      { id: 2, name: 'Priya Patel', email: 'priya.patel@example.com', contact: '9876543211', details: 'Pending approval for 50 days' },
      { id: 3, name: 'Amit Kumar', email: 'amit.kumar@example.com', contact: '9876543212', details: 'Completed on 2025-09-11' },
      { id: 4, name: 'Sneha Desai', email: 'sneha.desai@example.com', contact: '9876543213', details: 'Error in day 15' },
    ],
    yewale: [
      { id: 1, name: 'Navnath Yewale', email: 'navnath.yewale@example.com', contact: '9876543214', details: 'Yewale entry - Initial setup (09/11/2025)' },
      { id: 2, name: 'Nilesh Yewale', email: 'nilesh.yewale@example.com', contact: '9876543215', details: '50-day countdown started' },
      { id: 3, name: 'Tejas Yewale', email: 'tejas.yewale@example.com', contact: '9876543216', details: 'Mid-point check on Day 25' },
      { id: 4, name: 'Sanjay Yewale', email: 'sanjay.yewale@example.com', contact: '9876543217', details: 'Final verification passed' },
    ],
  };

  // Merge all data into one array
  const allData = [...allDummyData.nadbramha, ...allDummyData.yewale];

  // Filter based on search
  const filteredData = allData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contact.includes(searchTerm)
  );

  const handleOptionSelect = (option) => {
    if (option === 'nadbramha') {
      navigate('/development/nadbramha/fifteen-days-target');
    } else if (option === 'yewale') {
      navigate('/development/yewale/fifteen-days-target');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Fifty Days Verification</h2>

      {/* Cards */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div
          onClick={() => handleOptionSelect('nadbramha')}
          style={{
            padding: '20px',
            border: '2px solid #007bff',
            borderRadius: '8px',
            cursor: 'pointer',
            width: '200px',
            textAlign: 'center',
          }}
        >
          <h3>Nadbramha</h3>
          <p>Click to open Nadbramha 15 Days Target Form</p>
        </div>
        <div
          onClick={() => handleOptionSelect('yewale')}
          style={{
            padding: '20px',
            border: '2px solid #28a745',
            borderRadius: '8px',
            cursor: 'pointer',
            width: '200px',
            textAlign: 'center',
          }}
        >
          <h3>Yewale</h3>
          <p>Click to open Yewale 15 Days Target Form</p>
        </div>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'flex-start' }}>
        <input
          type="text"
          placeholder="Search by Name, Email, or Contact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '300px',
          }}
        />
      </div>

      {/* Table (always all data) */}
      <div style={{ width: '100%' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Contact</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={`${item.email}-${index}`} style={{ border: '1px solid #ddd' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.email}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.contact}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.details}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  No data found matching the search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FiftiDaysVerification;
