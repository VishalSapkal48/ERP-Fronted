import React, { useState, useMemo } from 'react';
import OwnerMaterialChecklistForm from '../planexplanation/nadbramhacomponents/OwnerMaterialChecklistForm.jsx';
import WarrantyPeriodForm from '../planexplanation/nadbramhacomponents/WarrantyPeriodForm.jsx';
import WorkStepsForm from '../planexplanation/nadbramhacomponents/WorkStepsForm.jsx';
import MaterialChecklistForm from '../planexplanation/yewalecomponents/MaterialChecklistForm.jsx';
import WarrantyForm from '../planexplanation/yewalecomponents/WarrantyForm.jsx';
import ConstructionForm from '../planexplanation/yewalecomponents/ConstructionForm.jsx';

function PlanExplanation() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dummy data relevant to plan explanations
  const allDummyData = useMemo(() => ({
    nadbramha: [
      {
        id: 1,
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        contact: '9876543210',
        details: 'Nadbramha: Plan explanation completed on 2025-09-10',
      },
      {
        id: 2,
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        contact: '9876543211',
        details: 'Nadbramha: Awaiting client approval for plan',
      },
    ],
    yewale: [
      {
        id: 1,
        name: 'Navnath Yewale',
        email: 'navnath.yewale@example.com',
        contact: '9876543214',
        details: 'Yewale: Plan explanation scheduled for 2025-09-15',
      },
      {
        id: 2,
        name: 'Nilesh Yewale',
        email: 'nilesh.yewale@example.com',
        contact: '9876543215',
        details: 'Yewale: Plan revisions requested by client',
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

  // Map forms for each company
  const formsMap = {
    nadbramha: [
      { name: 'Owner Material Checklist', component: <OwnerMaterialChecklistForm /> },
      { name: 'Warranty Period', component: <WarrantyPeriodForm /> },
      { name: 'Work Steps', component: <WorkStepsForm /> },
    ],
    yewale: [
      { name: 'Material Checklist', component: <MaterialChecklistForm /> },
      { name: 'Warranty Form', component: <WarrantyForm /> },
      { name: 'Construction Form', component: <ConstructionForm /> },
    ],
  };

  // Handle company selection
  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setSelectedForm(null); // Reset form selection when company changes
  };

  // Handle form selection
  const handleFormSelect = (formComponent) => {
    setSelectedForm(formComponent);
  };

  return (
    <div className="p-6 font-sans max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Plan Explanation</h2>

      {/* Company Cards */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div
          onClick={() => handleCompanySelect('nadbramha')}
          className="p-6 border-2 border-blue-500 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors text-center"
        >
          <h3 className="text-lg font-semibold text-blue-600">Nadbramha</h3>
          <p className="text-sm text-gray-600">View Nadbramha Forms</p>
        </div>
        <div
          onClick={() => handleCompanySelect('yewale')}
          className="p-6 border-2 border-green-500 rounded-lg cursor-pointer hover:bg-green-50 transition-colors text-center"
        >
          <h3 className="text-lg font-semibold text-green-600">Yewale</h3>
          <p className="text-sm text-gray-600">View Yewale Forms</p>
        </div>
      </div>
{/* Form Buttons for Selected Company */}
      {selectedCompany && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {selectedCompany === 'nadbramha' ? 'Nadbramha Forms' : 'Yewale Forms'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {formsMap[selectedCompany].map((form, index) => (
              <button
                key={`${selectedCompany}-${form.name}-${index}`}
                onClick={() => handleFormSelect(form.component)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                {form.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Render Selected Form */}
      {selectedForm && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Selected Form</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            {selectedForm}
          </div>
        </div>
      )}
      {/* Search */}
      <input
        type="text"
        placeholder="Search by Name, Email, Contact, or Plan Details..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        disabled={isLoading}
      />

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-3 text-left text-sm font-bold text-gray-700">ID</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-bold text-gray-700">Name</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-bold text-gray-700">Email</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-bold text-gray-700">Contact</th>
              <th className="border border-gray-200 p-3 text-left text-sm font-bold text-gray-700">Plan Details</th>
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

export default PlanExplanation;