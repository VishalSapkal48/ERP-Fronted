import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import hrmApi from '../../ApiCalling/Hrm_Api';

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Employee Info');
  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    department: '',
    jobTitle: '',
    manager: '',
    workLocation: '',
    email: '',
    workPhone: '',
    homePhone: '',
    emergencyPhone: '',
    gender: '',
    dob: '',
    address: '',
    city: '',
    country: '',
    hireDate: '',
    joiningDate: '',
    basicSalary: '',
    paymentMethod: '',
    employeeType: '',
    bankName: '',
    accountTitle: '',
    branchCode: '',
    accountNo: '',
    swiftCode: '',
    location: '',
    designation: '',
    cnnic: '',
    pfAccountNumber: '',
    pfType: '',
    employerContributionPf: '',
    employeeContributionPf: '',
    ssesType: '',
    employerContributionSses: '',
    employeeContributionSses: '',
    eobiType: '',
    employerContributionEobi: '',
    employeeContributionEobi: '',
    status: '',
    separationDate: '',
    username: '',
    password: '',
    reenterPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await hrmApi.getEmployeeById(id);
        setFormData({
          employeeId: data.employeeId || '',
          name: data.name || '',
          department: data.department || '',
          jobTitle: data.jobTitle || '',
          manager: data.manager || '',
          workLocation: data.workLocation || '',
          email: data.email || '',
          workPhone: data.workPhone || '',
          homePhone: data.homePhone || '',
          emergencyPhone: data.emergencyPhone || '',
          gender: data.gender || '',
          dob: data.dob ? data.dob.split('T')[0] : '',
          address: data.address || '',
          city: data.city || '',
          country: data.country || '',
          hireDate: data.hireDate ? data.hireDate.split('T')[0] : '',
          joiningDate: data.joiningDate ? data.joiningDate.split('T')[0] : '',
          basicSalary: data.basicSalary || '',
          paymentMethod: data.paymentMethod || '',
          employeeType: data.employeeType || '',
          bankName: data.bankName || '',
          accountTitle: data.accountTitle || '',
          branchCode: data.branchCode || '',
          accountNo: data.accountNo || '',
          swiftCode: data.swiftCode || '',
          location: data.location || '',
          designation: data.designation || '',
          cnnic: data.cnnic || '',
          pfAccountNumber: data.pfAccountNumber || '',
          pfType: data.pfType || '',
          employerContributionPf: data.employerContributionPf || '',
          employeeContributionPf: data.employeeContributionPf || '',
          ssesType: data.ssesType || '',
          employerContributionSses: data.employerContributionSses || '',
          employeeContributionSses: data.employeeContributionSses || '',
          eobiType: data.eobiType || '',
          employerContributionEobi: data.employerContributionEobi || '',
          employeeContributionEobi: data.employeeContributionEobi || '',
          status: data.status || '',
          separationDate: data.separationDate ? data.separationDate.split('T')[0] : '',
          username: data.username || '',
          password: '',
          reenterPassword: '',
        });
        setProfileImage(data.profileImage || 'https://via.placeholder.com/100');
      } catch (err) {
        setError('Failed to fetch employee data');
        console.error('Error fetching employee:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    if (activeTab === 'Employee Info') {
      if (!formData.employeeId.trim()) newErrors.employeeId = 'Employee ID is required';
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.department.trim()) newErrors.department = 'Department is required';
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job Title is required';
    }
    if (activeTab === 'Contact') {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.workPhone.trim()) newErrors.workPhone = 'Work phone is required';
      if (!formData.homePhone.trim()) newErrors.homePhone = 'Home phone is required';
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
      if (!formData.workLocation.trim()) newErrors.workLocation = 'Work Location is required';
    }
    if (activeTab === 'Payroll') {
      if (!formData.basicSalary && formData.basicSalary !== 0) newErrors.basicSalary = 'Basic Salary is required';
      if (!formData.paymentMethod.trim()) newErrors.paymentMethod = 'Payment Method is required';
      if (!formData.employeeType.trim()) newErrors.employeeType = 'Employee Type is required';
      if (formData.paymentMethod === 'Bank Transfer') {
        if (!formData.bankName.trim()) newErrors.bankName = 'Bank Name is required';
        if (!formData.accountTitle.trim()) newErrors.accountTitle = 'Account Title is required';
        if (!formData.accountNo.trim()) newErrors.accountNo = 'Account Number is required';
      }
    }
    if (activeTab === 'PfAccount') {
      if (formData.pfType && !formData.employerContributionPf && formData.employerContributionPf !== 0)
        newErrors.employerContributionPf = 'Employer PF Contribution is required';
      if (formData.pfType && !formData.employeeContributionPf && formData.employeeContributionPf !== 0)
        newErrors.employeeContributionPf = 'Employee PF Contribution is required';
      if (formData.ssesType && !formData.employerContributionSses && formData.employerContributionSses !== 0)
        newErrors.employerContributionSses = 'Employer SSES Contribution is required';
      if (formData.ssesType && !formData.employeeContributionSses && formData.employeeContributionSses !== 0)
        newErrors.employeeContributionSses = 'Employee SSES Contribution is required';
      if (formData.eobiType && !formData.employerContributionEobi && formData.employerContributionEobi !== 0)
        newErrors.employerContributionEobi = 'Employer EOBI Contribution is required';
      if (formData.eobiType && !formData.employeeContributionEobi && formData.employeeContributionEobi !== 0)
        newErrors.employeeContributionEobi = 'Employee EOBI Contribution is required';
      const numericFields = [
        'employerContributionPf',
        'employeeContributionPf',
        'employerContributionSses',
        'employeeContributionSses',
        'employerContributionEobi',
        'employeeContributionEobi',
      ];
      numericFields.forEach((field) => {
        if (formData[field] && isNaN(Number(formData[field]))) {
          newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} must be a number`;
        }
      });
    }
    if (activeTab === 'Security') {
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      if (formData.password && formData.password !== formData.reenterPassword)
        newErrors.reenterPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      'basicSalary',
      'employerContributionPf',
      'employeeContributionPf',
      'employerContributionSses',
      'employeeContributionSses',
      'employerContributionEobi',
      'employeeContributionEobi',
    ];
    const dateFields = ['dob', 'hireDate', 'joiningDate', 'separationDate'];

    let newValue = value;

    if (numericFields.includes(name)) {
      newValue = value === '' ? '' : Number(value) || '';
    } else if (dateFields.includes(name)) {
      newValue = value ? new Date(value).toISOString().split('T')[0] : '';
    }

    setFormData({ ...formData, [name]: newValue });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors({ ...errors, profileImage: 'Please upload a valid image file' });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, profileImage: 'Image size should not exceed 5MB' });
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        setErrors({ ...errors, profileImage: '' });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const employeeData = { ...formData, profileImage };
    const numericFields = [
      'basicSalary',
      'employerContributionPf',
      'employeeContributionPf',
      'employerContributionSses',
      'employeeContributionSses',
      'employerContributionEobi',
      'employeeContributionEobi',
    ];
    const dateFields = ['dob', 'hireDate', 'joiningDate', 'separationDate'];

    numericFields.forEach((field) => {
      if (employeeData[field] === '') {
        employeeData[field] = null;
      } else {
        employeeData[field] = Number(employeeData[field]);
      }
    });

    dateFields.forEach((field) => {
      if (employeeData[field]) {
        employeeData[field] = new Date(employeeData[field]);
      } else {
        employeeData[field] = null;
      }
    });

    delete employeeData.reenterPassword;

    try {
      await hrmApi.updateEmployee(id, employeeData);
      setShowModal(true);
    } catch (error) {
      console.error('Error updating employee:', error.message);
      setErrors({ ...errors, submit: error.message || 'Failed to update employee' });
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/employees');
  };

  if (loading) return <div className="p-6 ml-64">Loading...</div>;
  if (error) return <div className="p-6 ml-64 text-red-500">{error}</div>;

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg mb-4">
        <div className="flex space-x-6">
          {['Employee Info', 'Contact', 'Payroll', 'PfAccount', 'Security'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-b-lg shadow-md">
        <div className="flex items-center space-x-6 mb-6">
          <div className="flex-1">
            {activeTab === 'Employee Info' && (
              <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Employee Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.profileImage && <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.employeeId && <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Manager</label>
                  <input
                    type="text"
                    name="manager"
                    value={formData.manager}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Hire Date</label>
                  <input
                    type="date"
                    name="hireDate"
                    value={formData.hireDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Separation Date</label>
                  <input
                    type="date"
                    name="separationDate"
                    value={formData.separationDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            )}
            {activeTab === 'Contact' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Phone</label>
                  <input
                    type="text"
                    name="workPhone"
                    value={formData.workPhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.workPhone && <p className="text-red-500 text-sm mt-1">{errors.workPhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Home Phone</label>
                  <input
                    type="text"
                    name="homePhone"
                    value={formData.homePhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.homePhone && <p className="text-red-500 text-sm mt-1">{errors.homePhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Emergency Phone</label>
                  <input
                    type="text"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Location</label>
                  <input
                    type="text"
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.workLocation && <p className="text-red-500 text-sm mt-1">{errors.workLocation}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            )}
            {activeTab === 'Payroll' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Basic Salary</label>
                  <input
                    type="number"
                    name="basicSalary"
                    value={formData.basicSalary}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.basicSalary && <p className="text-red-500 text-sm mt-1">{errors.basicSalary}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                  </select>
                  {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Type</label>
                  <select
                    name="employeeType"
                    value={formData.employeeType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                  </select>
                  {errors.employeeType && <p className="text-red-500 text-sm mt-1">{errors.employeeType}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account Title</label>
                  <input
                    type="text"
                    name="accountTitle"
                    value={formData.accountTitle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.accountTitle && <p className="text-red-500 text-sm mt-1">{errors.accountTitle}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Branch Code</label>
                  <input
                    type="text"
                    name="branchCode"
                    value={formData.branchCode}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account No</label>
                  <input
                    type="text"
                    name="accountNo"
                    value={formData.accountNo}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.accountNo && <p className="text-red-500 text-sm mt-1">{errors.accountNo}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Swift Code</label>
                  <input
                    type="text"
                    name="swiftCode"
                    value={formData.swiftCode}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CNIC</label>
                  <input
                    type="text"
                    name="cnnic"
                    value={formData.cnnic}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            )}
            {activeTab === 'PfAccount' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">PF Type</label>
                  <select
                    name="pfType"
                    value={formData.pfType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="PF">PF</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution PF</label>
                  <input
                    type="number"
                    name="employerContributionPf"
                    value={formData.employerContributionPf}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.employerContributionPf && <p className="text-red-500 text-sm mt-1">{errors.employerContributionPf}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution PF</label>
                  <input
                    type="number"
                    name="employeeContributionPf"
                    value={formData.employeeContributionPf}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.employeeContributionPf && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionPf}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">SSES Type</label>
                  <select
                    name="ssesType"
                    value={formData.ssesType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="SSES">SSES</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution SSES</label>
                  <input
                    type="number"
                    name="employerContributionSses"
                    value={formData.employerContributionSses}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.employerContributionSses && <p className="text-red-500 text-sm mt-1">{errors.employerContributionSses}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution SSES</label>
                  <input
                    type="number"
                    name="employeeContributionSses"
                    value={formData.employeeContributionSses}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.employeeContributionSses && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionSses}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">EOBI Type</label>
                  <select
                    name="eobiType"
                    value={formData.eobiType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="EOBI">EOBI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution EOBI</label>
                  <input
                    type="number"
                    name="employerContributionEobi"
                    value={formData.employerContributionEobi}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.employerContributionEobi && <p className="text-red-500 text-sm mt-1">{errors.employerContributionEobi}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution EOBI</label>
                  <input
                    type="number"
                    name="employeeContributionEobi"
                    value={formData.employeeContributionEobi}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.employeeContributionEobi && <p className="text-red-500 text-sm mt-1">{errors.employeeContributionEobi}</p>}
                </div>
              </div>
            )}
            {activeTab === 'Security' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Re-enter Password</label>
                  <input
                    type="password"
                    name="reenterPassword"
                    value={formData.reenterPassword}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.reenterPassword && <p className="text-red-500 text-sm mt-1">{errors.reenterPassword}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
        {errors.submit && (
          <div className="mt-4 text-red-500 text-sm">{errors.submit}</div>
        )}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Update
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800">Success</h2>
            <p className="mt-2 text-gray-600">Employee updated successfully!</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditEmployee;