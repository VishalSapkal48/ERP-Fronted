import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import hrmApi from '../../ApiCalling/Hrm_Api';

const ExperienceLetter = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    to: '',
    date: '',
    employeeName: '',
    address: '',
    position: '',
    startDate: '',
    endDate: '',
  });
  const [signatureAuth, setSignatureAuth] = useState(null);
  const [signatureAccepted, setSignatureAccepted] = useState(null);
  const [error, setError] = useState('');
  const [isApiData, setIsApiData] = useState(false); // Track if data is from API
  const letterRef = useRef(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'employeeId') {
      setError('');
      setIsApiData(false); // Reset API data flag when employeeId changes
    }
  };

  // Fetch employee data by employeeId
  const fetchEmployeeData = async (employeeId) => {
    if (!employeeId) {
      setFormData((prev) => ({
        ...prev,
        employeeName: '',
        address: '',
        position: '',
        startDate: prev.startDate || '', // Preserve manual startDate
        endDate: prev.endDate || '', // Preserve manual endDate
      }));
      setError('');
      setIsApiData(false);
      return;
    }
    try {
      const employee = await hrmApi.getEmployeeById(employeeId);
      setFormData((prev) => ({
        ...prev,
        employeeName: employee.name || '',
        address: employee.address || '',
        position: employee.jobTitle || '',
   startDate: prev.startDate ? prev.startDate : '', // Don't overwrite if already entered
  endDate: prev.endDate ? prev.endDate : '',       // Same here

      }));
      setError('');
      setIsApiData(true); // Mark data as from API
    } catch (err) {
      setError(err.message || 'Employee not found or invalid ID');
      setFormData((prev) => ({
        ...prev,
        employeeName: '',
        address: '',
        position: '',
       
      }));
      setIsApiData(false);
    }
  };

  // Debounce fetchEmployeeData
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchEmployeeData(formData.employeeId);
    }, 500);
    return () => clearTimeout(handler);
  }, [formData.employeeId]);

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === 'signatureAuth') {
          setSignatureAuth(reader.result);
        } else if (name === 'signatureAccepted') {
          setSignatureAccepted(reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // Handle PDF download
  const handleDownloadPDF = () => {
    const input = letterRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${formData.employeeName || 'employee'}_Experience_Letter.pdf`);
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      {/* Input Form */}
      <div className="bg-white p-6 max-w-3xl w-full shadow-lg rounded-lg mb-6 mx-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Enter Letter Details</h2>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Employee ID (e.g., EMP123)"
            />
          </div>
          {/* <div>
            <label className="block text-sm text-gray-600 mb-1">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee Name</label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isApiData}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isApiData}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isApiData}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Authorized Signature</label>
            <input
              type="file"
              name="signatureAuth"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Accepted Signature</label>
            <input
              type="file"
              name="signatureAccepted"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Letter Content */}
      <div ref={letterRef} className="bg-white p-8 max-w-3xl w-full shadow-lg rounded-lg mx-4 border border-gray-200">
        <div className="text-center mb-8">
          <img
            src="../../../public/Images/logo.png"
            alt="YNK Enterprises Logo"
            className="mx-auto mb-4 w-24 h-24 object-contain"
          />
          <h1 className="text-3xl font-bold text-blue-900">YNK ENTERPRISES</h1>
          <p className="text-sm text-gray-600 mt-2">
            Office no. 307, Sr. No. 34, Crystal Square, 3rd Floor, Near Bharat Petrol Pump,
            Khadi Machine Chowk, Kondhwa, Pune-411048.
          </p>
          <p className="text-sm text-gray-600">Tel. – 2026930007</p>
        </div>

        <div className="flex justify-between mb-8">
          <div>
            <p className="text-sm text-gray-600">To,</p>
            <p className="text-sm text-gray-600">{formData.employeeName || 'N/A'}</p>
            <p className="text-sm text-gray-600">{formData.address || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Date: {formData.date || 'N/A'}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 text-center mb-4">
            Experience Letter
          </h2>
          <p className="text-sm text-gray-600 mb-4">To Whom It May Concern,</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            This is to certify that {formData.employeeName || '[Employee Name]'}, holding the position of{' '}
            {formData.position || '[Position]'}, was employed with YNK ENTERPRISES from{' '}
            {formData.startDate || '[Start Date]'} to {formData.endDate || '[End Date]'}.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-4">
            During their tenure with us, they were found to be sincere, hardworking, and
            dedicated to their duties. {formData.employeeName || '[Employee Name]'} has shown excellent professional
            conduct and maintained good relationships with colleagues and management. We wish
            them all the best in their future endeavours.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Thanking you,</p>
            <p className="text-sm font-semibold text-blue-900">YNK ENTERPRISES</p>
            {signatureAuth ? (
              <img
                src={signatureAuth}
                alt="Authorized Signature"
                className="mt-4 w-32 h-auto object-contain"
              />
            ) : (
              <p className="text-sm text-gray-600 mt-4">_________________________</p>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600">Accepted:</p>
            {signatureAccepted ? (
              <img
                src={signatureAccepted}
                alt="Accepted Signature"
                className="mt-4 w-32 h-auto object-contain"
              />
            ) : (
              <p className="text-sm text-gray-600 mt-8">_________________________</p>
            )}
            <p className="text-sm text-gray-600">Date: {formData.date || 'N/A'}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all duration-300"
        disabled={!formData.employeeName || !formData.date}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default ExperienceLetter;