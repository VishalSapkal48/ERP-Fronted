import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function FiftiDaysVerification() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dummy data relevant to 50 days verification
  const allDummyData = useMemo(() => ({
    nadbramha: [
      {
        id: 1,
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        contact: '9876543210',
        details: 'Nadbramha verification - Day 5 (Started: 09/11/2025)',
      },
      {
        id: 2,
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        contact: '9876543211',
        details: 'Pending approval for 50 days',
      },
      {
        id: 3,
        name: 'Amit Kumar',
        email: 'amit.kumar@example.com',
        contact: '9876543212',
        details: 'Completed on 2025-09-11',
      },
      {
        id: 4,
        name: 'Sneha Desai',
        email: 'sneha.desai@example.com',
        contact: '9876543213',
        details: 'Error in day 15',
      },
    ],
    yewale: [
      {
        id: 1,
        name: 'Navnath Yewale',
        email: 'navnath.yewale@example.com',
        contact: '9876543214',
        details: 'Yewale entry - Initial setup (09/11/2025)',
      },
      {
        id: 2,
        name: 'Nilesh Yewale',
        email: 'nilesh.yewale@example.com',
        contact: '9876543215',
        details: '50-day countdown started',
      },
      {
        id: 3,
        name: 'Tejas Yewale',
        email: 'tejas.yewale@example.com',
        contact: '9876543216',
        details: 'Mid-point check on Day 25',
      },
      {
        id: 4,
        name: 'Sanjay Yewale',
        email: 'sanjay.yewale@example.com',
        contact: '9876543217',
        details: 'Final verification passed',
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
        item.contact.includes(searchTerm) ||
        item.details.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [allData, searchTerm]
  );

  // Navigate to proper page
  const handleOptionSelect = (option) => {
    setIsLoading(true);
    try {
      if (option === 'nadbramha') {
        navigate('/development/nadbramha/fifteen-days-target');
      } else if (option === 'yewale') {
        navigate('/development/yewale/fifteen-days-target');
      }
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 font-sans max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">50 Days Verification</h2>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div
          onClick={() => handleOptionSelect('nadbramha')}
          className="p-6 border-2 border-blue-500 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors text-center"
        >
          <h3 className="text-lg font-semibold text-blue-600">Nadbramha</h3>
          <p className="text-sm text-gray-600">View Nadbramha 50 Days Verification Form</p>
        </div>
        <div
          onClick={() => handleOptionSelect('yewale')}
          className="p-6 border-2 border-green-500 rounded-lg cursor-pointer hover:bg-green-50 transition-colors text-center"
        >
          <h3 className="text-lg font-semibold text-green-600">Yewale</h3>
          <p className="text-sm text-gray-600">View Yewale 50 Days Verification Form</p>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Name, Email, Contact, or Details..."
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

export default FiftiDaysVerification;