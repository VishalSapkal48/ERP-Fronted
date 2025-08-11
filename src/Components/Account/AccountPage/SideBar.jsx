
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

function SideBar() {
  const [openSections, setOpenSections] = useState({});
  const location = useLocation();

  const menuItems = [
    {
      title: 'Bank Statement',
      items: [
        { key: 'bank-statement', label: 'Bank Statement', path: '/bank-statement' },
        { key: 'clear-suspense', label: 'Clear Suspense', path: '/clear-suspense' },
        { key: 'download-statement', label: 'Download Statement', path: '/download-statement' },
        { key: 'entry-done-payment', label: 'Entry Done Payment', path: '/entry-done-payment' },
        { key: 'match-closing-balance', label: 'Match Closing Balance', path: '/match-closing-balance' },
      ],
    },
    {
      title: 'Purchase Bill',
      items: [
        { key: 'advance-payment', label: 'Advance Payment', path: '/advance-payment' },
        { key: 'balance-payment', label: 'Balance Payment', path: '/balance-payment' },
        { key: 'enter-bill-tally', label: 'Enter Bill Tally', path: '/enter-bill-tally' },
        { key: 'material-and-tax-invoice', label: 'Material & Tax Invoice', path: '/material-and-tax-invoice' },
        { key: 'proforma-invoice', label: 'Proforma Invoice', path: '/proforma-invoice' },
        { key: 'purchase-bill', label: 'Purchase Bill', path: '/purchase-bill' },
        { key: 'send-purchase-order', label: 'Send Purchase Order', path: '/send-purchase-order' },
        { key: 'tally-ledger', label: 'Tally Ledger', path: '/tally-ledger' },
      ],
    },
    {
      title: 'Sale Bill',
      items: [
        { key: 'bill-sent-owner', label: 'Bill Sent Owner', path: '/bill-sent-owner' },
        { key: 'checked-receipt-amt', label: 'Checked Receipt Amt', path: '/checked-receipt-amt' },
        { key: 'deposit-short-amount', label: 'Deposit Short Amount', path: '/deposit-short-amount' },
        { key: 'prepared-bill', label: 'Prepared Bill', path: '/prepared-bill' },
        { key: 'required-gst-no', label: 'Required GST No', path: '/required-gst-no' },
        { key: 'sale-bill', label: 'Sale Bill', path: '/sale-bill' },
        { key: 'tally-ledger-sale', label: 'Tally Ledger Sale', path: '/tally-ledger-sale' },
        { key: 'vehicle-no', label: 'Vehicle No', path: '/vehicle-no' },
        { key: 'withdraw-extra-amount', label: 'Withdraw Extra Amount', path: '/withdraw-extra-amount' },
      ],
    },
    {
      title: 'Vendor Payment',
      items: [
        { key: 'pending-payment-list', label: 'Pending Payment List', path: '/pending-payment-list' },
        { key: 'payment-transaction-details', label: 'Payment Transaction Details', path: '/payment-transaction-details' },
        { key: 'transaction-details-snapshot', label: 'Transaction Details Snapshot', path: '/transaction-details-snapshot' },
        { key: 'vendor-payment', label: 'Vendor Payment', path: '/vendor-payment' },
      ],
    },
  ];

  const singleItems = [{ key: 'dashboard', label: 'Dashboard', path: '/dashboard' }];

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen overflow-y-auto fixed">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-6">Menu</h2>
        {singleItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`block mb-2 p-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {item.label}
          </Link>
        ))}
        {menuItems.map((section, index) => (
          <div key={index} className="mb-3">
            <button
              onClick={() => toggleSection(index)}
              className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span>{openSections[index] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</span>
            </button>
            {openSections[index] && (
              <div className="mt-2 ml-4 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`block p-2 text-sm rounded transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;