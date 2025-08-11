import React from 'react'


// Dashboard Component
function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">₹1,23,456</p>
          <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-700">Purchases</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">₹87,321</p>
          <p className="text-sm text-gray-500 mt-1">+8% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <h3 className="text-lg font-semibold text-gray-700">Pending Payments</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">₹45,678</p>
          <p className="text-sm text-gray-500 mt-1">5 vendors pending</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-700">Bank Balance</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">₹2,34,567</p>
          <p className="text-sm text-gray-500 mt-1">Across 3 accounts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Transactions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Sale Invoice #001</p>
                <p className="text-sm text-gray-600">ABC Company</p>
              </div>
              <span className="text-green-600 font-bold">+₹15,000</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Purchase Bill #PB001</p>
                <p className="text-sm text-gray-600">XYZ Suppliers</p>
              </div>
              <span className="text-red-600 font-bold">-₹8,500</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Vendor Payment</p>
                <p className="text-sm text-gray-600">DEF Industries</p>
              </div>
              <span className="text-red-600 font-bold">-₹25,000</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 font-medium transition-colors">
              New Sale Bill
            </button>
            <button className="p-4 bg-green-100 hover:bg-green-200 rounded-lg text-green-700 font-medium transition-colors">
              Purchase Entry
            </button>
            <button className="p-4 bg-orange-100 hover:bg-orange-200 rounded-lg text-orange-700 font-medium transition-colors">
              Make Payment
            </button>
            <button className="p-4 bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-700 font-medium transition-colors">
              Bank Statement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generic Content Component for other pages
function PageContent({ title }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          This is the {title} page. Content for this section will be implemented here.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-blue-800">
            <strong>Note:</strong> This page is under development. 
            Please check back later for full functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;