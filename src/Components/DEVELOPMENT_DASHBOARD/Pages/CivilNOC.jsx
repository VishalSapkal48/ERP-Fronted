// src/Components/DEVELOPMENT_DASHBOARD/Pages/CivilNOC.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CivilNOC() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data
  const allDummyData = {
    nadbramha: [
      {
        id: 1,
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        contact: '9876543210',
        details: 'Nadbramha Civil NOC submitted on 2025-09-10',
      },
      {
        id: 2,
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        contact: '9876543211',
        details: 'Pending Civil NOC approval',
      },
    ],
    yewale: [
      {
        id: 1,
        name: 'Navnath Yewale',
        email: 'navnath.yewale@example.com',
        contact: '9876543214',
        details: 'Yewale Civil NOC completed on 2025-09-09',
      },
      {
        id: 2,
        name: 'Nilesh Yewale',
        email: 'nilesh.yewale@example.com',
        contact: '9876543215',
        details: 'Civil NOC under review',
      },
    ],
  };

  // combine all data for table
  const allData = [...allDummyData.nadbramha, ...allDummyData.yewale];

  // search filter
  const filteredData = allData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contact.includes(searchTerm)
  );

  // navigate to proper page
  const handleOptionSelect = (option) => {
    if (option === 'nadbramha') {
      navigate('/development/nadbramha/civil-work-noc'); // Nadbramha page
    } else if (option === 'yewale') {
      navigate('/development/yewale/civil-work-noc'); // Yewale page
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Civil NOC</h2>

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
          <p>Click to open Nadbramha Civil Work NOC Form</p>
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
          <p>Click to open Yewale Civil Work NOC Form</p>
        </div>
      </div>

      {/* Search */}
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
          marginBottom: '15px',
        }}
      />

      {/* Table */}
      <div style={{ width: '100%' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #ddd',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Contact</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={`${item.email}-${index}`}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.email}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.contact}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.details}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    textAlign: 'center',
                  }}
                >
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

export default CivilNOC;
