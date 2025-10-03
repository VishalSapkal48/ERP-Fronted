import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function MaterialOrderForDispatch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dummy data
  const allDummyData = useMemo(() => ({
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
  }), []);

  // Combine all data for table
  const allData = useMemo(() => [
    ...allDummyData.nadbramha,
    ...allDummyData.yewale,
  ], [allDummyData]);

  // Search filter
  const filteredData = useMemo(() =>
    allData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.contact.includes(searchTerm)
    ),
    [allData, searchTerm]
  );

  // Navigate to proper page
  const handleOptionSelect = (option) => {
    setIsLoading(true);
    try {
      if (option === 'nadbramha') {
        navigate('/development/nadbramha/materialdispatchnadhbarma');
      } else if (option === 'yewale') {
        navigate('/development/yewale/materialdispatchyewale');
      }
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 font-sans max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Material Order for Dispatch</h2>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div
          onClick={() => handleOptionSelect('nadbramha')}
          className="p-6 border-2 border-blue-500 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors text-center"
        >
          <h3 className="text-lg font-semibold text-blue-600">Nadbramha</h3>
          <p className="text-sm text-gray-600">Click to open Nadbramha Material Dispatch Form</p>
        </div>
        <div
          onClick={() => handleOptionSelect('yewale')}
          className="p-6 border-2 border-green-500 rounded-lg cursor-pointer hover:bg-green-50 transition-colors text-center"
        >
          <h3 className="text-lg font-semibold text-green-600">Yewale</h3>
          <p className="text-sm text-gray-600">Click to open Yewale Material Dispatch Form</p>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Name, Email, or Contact..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        disabled={isLoading}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">Contact</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">Details</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5" className="border border-gray-200 p-3 text-center text-gray-600">
                  Loading...
                </td>
              </tr>
            ) : filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={`${item.email}-${index}`} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-3 text-sm text-gray-600">{item.id}</td>
                  <td className="border border-gray-200 p-3 text-sm text-gray-600">{item.name}</td>
                  <td className="border border-gray-200 p-3 text-sm text-gray-600">{item.email}</td>
                  <td className="border border-gray-200 p-3 text-sm text-gray-600">{item.contact}</td>
                  <td className="border border-gray-200 p-3 text-sm text-gray-600">{item.details}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border border-gray-200 p-3 text-center text-gray-600">
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

export default MaterialOrderForDispatch;