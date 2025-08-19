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
    netSalary: '',
    hra: '',
    specialBonus: '',
    conveyance: '',
    travelAllowances: '',
    shiftAllowances: '',
    overtime: '',
    taxRate: '',
    paymentMethod: '',
    employeeType: '',
    bankName: '',
    accountTitle: '',
    accountNo: '',
    IFSCCode: '',
    location: '',
    designation: '',
    CNIC: '',
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
    esicType: '',
    employerContributionEsic: '',
    employeeContributionEsic: '',
    status: '',
    separationDate: '',
    username: '',
    password: '',
    reenterPassword: '',
    profileImage: '',
  });
  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      if (!id) {
        setError('Invalid employee ID');
        setLoading(false);
        return;
      }

      try {
        console.log(`Fetching employee with ID: ${id}`);
        const data = await hrmApi.getEmployeeById(id);
        console.log('Fetched data:', data);
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
          dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : '',
          address: data.address || '',
          city: data.city || '',
          country: data.country || '',
          hireDate: data.hireDate ? new Date(data.hireDate).toISOString().split('T')[0] : '',
          joiningDate: data.joiningDate ? new Date(data.joiningDate).toISOString().split('T')[0] : '',
          netSalary: data.netSalary || '',
          hra: data.hra || '',
          specialBonus: data.specialBonus || '',
          conveyance: data.conveyance || '',
          travelAllowances: data.travelAllowances || '',
          shiftAllowances: data.shiftAllowances || '',
          overtime: data.overtime || '',
          taxRate: data.taxRate || '',
          paymentMethod: data.paymentMethod || '',
          employeeType: data.employeeType || '',
          bankName: data.bankName || '',
          accountTitle: data.accountTitle || '',
          accountNo: data.accountNo || '',
          IFSCCode: data.IFSCCode || '',
          location: data.location || '',
          designation: data.designation || '',
          CNIC: data.CNIC || '',
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
          esicType: data.esicType || '',
          employerContributionEsic: data.employerContributionEsic || '',
          employeeContributionEsic: data.employeeContributionEsic || '',
          status: data.status ? data.status.toLowerCase() : '',
          separationDate: data.separationDate ? new Date(data.separationDate).toISOString().split('T')[0] : '',
          username: data.username || '',
          password: '',
          reenterPassword: '',
          profileImage: data.profileImage || '',
        });
        setProfileImage(data.profileImage || 'https://via.placeholder.com/100');
      } catch (err) {
        console.error('API Error:', err);
        setError(`Failed to fetch employee data: ${err.message || 'Unknown error'}`);
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
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.workPhone.trim()) newErrors.workPhone = 'Work phone is required';
      if (!formData.homePhone.trim()) newErrors.homePhone = 'Home phone is required';
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
      if (!formData.workLocation.trim()) newErrors.workLocation = 'Work Location is required';
      if (!formData.status) newErrors.status = 'Status is required';
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
      if (!formData.netSalary && formData.netSalary !== 0) newErrors.netSalary = 'Net Salary is required';
      if (!formData.basicSalary && formData.basicSalary !== 0) newErrors.basicSalary = 'Basic Salary is required';
      if (!formData.paymentMethod.trim()) newErrors.paymentMethod = 'Payment Method is required';
      if (!formData.employeeType.trim()) newErrors.employeeType = 'Employee Type is required';
      if (formData.paymentMethod === 'Bank Transfer') {
        if (!formData.bankName.trim()) newErrors.bankName = 'Bank Name is required';
        if (!formData.accountTitle.trim()) newErrors.accountTitle = 'Account Title is required';
        if (!formData.accountNo.trim()) newErrors.accountNo = 'Account Number is required';
        if (!formData.IFSCCode.trim()) newErrors.IFSCCode = 'IFSC Code is required';
      }
      const salaryFields = [
        'netSalary',
        'basicSalary',
        'hra',
        'specialBonus',
        'conveyance',
        'travelAllowances',
        'shiftAllowances',
        'overtime',
        'taxRate',
      ];
      salaryFields.forEach((field) => {
        if (formData[field] && isNaN(Number(formData[field]))) {
          newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} must be a number`;
        }
      });
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
      if (formData.esicType && !formData.employerContributionEsic && formData.employerContributionEsic !== 0)
        newErrors.employerContributionEsic = 'Employer ESIC Contribution is required';
      if (formData.esicType && !formData.employeeContributionEsic && formData.employeeContributionEsic !== 0)
        newErrors.employeeContributionEsic = 'Employee ESIC Contribution is required';
      const numericFields = [
        'employerContributionPf',
        'employeeContributionPf',
        'employerContributionSses',
        'employeeContributionSses',
        'employerContributionEobi',
        'employeeContributionEobi',
        'employerContributionEsic',
        'employeeContributionEsic',
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
      'netSalary',
      'hra',
      'specialBonus',
      'conveyance',
      'travelAllowances',
      'shiftAllowances',
      'overtime',
      'taxRate',
      'employerContributionPf',
      'employeeContributionPf',
      'employerContributionSses',
      'employeeContributionSses',
      'employerContributionEobi',
      'employeeContributionEobi',
      'employerContributionEsic',
      'employeeContributionEsic',
    ];
    const dateFields = ['dob', 'hireDate', 'joiningDate', 'separationDate'];

    let newValue = value;

    if (name === 'status') {
      newValue = value.toLowerCase();
    } else if (numericFields.includes(name)) {
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
      'netSalary',
      'hra',
      'specialBonus',
      'conveyance',
      'travelAllowances',
      'shiftAllowances',
      'overtime',
      'taxRate',
      'employerContributionPf',
      'employeeContributionPf',
      'employerContributionSses',
      'employeeContributionSses',
      'employerContributionEobi',
      'employeeContributionEobi',
      'employerContributionEsic',
      'employeeContributionEsic',
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
      console.log('Employee Data being sent:', employeeData);
      await hrmApi.updateEmployee(id, employeeData);
      setShowModal(true);
    } catch (error) {
      console.error('Error updating employee:', error.message);
      setErrors({ ...errors, submit: error.message || 'Failed to update employee' });
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/hrm/employees');
  };

  if (loading) return <div className="p-4 sm:p-6 text-center text-gray-600">Loading...</div>;
  if (error) return <div className="p-4 sm:p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="bg-gray-800 text-white p-4 rounded-t-lg mb-4 overflow-x-auto">
        <div className="flex space-x-2 sm:space-x-4 whitespace-nowrap">
          {['Employee Info', 'Contact', 'Payroll', 'PfAccount', 'Security'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm sm:text-base rounded ${
                activeTab === tab ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'
              } transition-colors duration-200`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-b-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 mb-6">
          <div className="w-full">
            {activeTab === 'Employee Info' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.profileImage && <p className="text-red-500 text-xs mt-1">{errors.profileImage}</p>}
                  <img src={profileImage} alt="Profile" className="mt-2 w-24 h-24 object-cover rounded-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employeeId && <p className="text-red-500 text-xs mt-1">{errors.employeeId}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Manager</label>
                  <input
                    type="text"
                    name="manager"
                    value={formData.manager}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Hire Date</label>
                  <input
                    type="date"
                    name="hireDate"
                    value={formData.hireDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="">Select</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Separation Date</label>
                  <input
                    type="date"
                    name="separationDate"
                    value={formData.separationDate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
            )}
            {activeTab === 'Contact' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Phone</label>
                  <input
                    type="text"
                    name="workPhone"
                    value={formData.workPhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.workPhone && <p className="text-red-500 text-xs mt-1">{errors.workPhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Home Phone</label>
                  <input
                    type="text"
                    name="homePhone"
                    value={formData.homePhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.homePhone && <p className="text-red-500 text-xs mt-1">{errors.homePhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Emergency Phone</label>
                  <input
                    type="text"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.emergencyPhone && <p className="text-red-500 text-xs mt-1">{errors.emergencyPhone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Location</label>
                  <input
                    type="text"
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.workLocation && <p className="text-red-500 text-xs mt-1">{errors.workLocation}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
            )}
            {activeTab === 'Payroll' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Net Salary</label>
                  <input
                    type="number"
                    name="netSalary"
                    value={formData.netSalary}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.netSalary && <p className="text-red-500 text-xs mt-1">{errors.netSalary}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">HRA</label>
                  <input
                    type="number"
                    name="hra"
                    value={formData.hra}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.hra && <p className="text-red-500 text-xs mt-1">{errors.hra}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Special Bonus</label>
                  <input
                    type="number"
                    name="specialBonus"
                    value={formData.specialBonus}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.specialBonus && <p className="text-red-500 text-xs mt-1">{errors.specialBonus}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Conveyance</label>
                  <input
                    type="number"
                    name="conveyance"
                    value={formData.conveyance}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.conveyance && <p className="text-red-500 text-xs mt-1">{errors.conveyance}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Travel Allowances</label>
                  <input
                    type="number"
                    name="travelAllowances"
                    value={formData.travelAllowances}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.travelAllowances && <p className="text-red-500 text-xs mt-1">{errors.travelAllowances}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Shift Allowances</label>
                  <input
                    type="number"
                    name="shiftAllowances"
                    value={formData.shiftAllowances}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.shiftAllowances && <p className="text-red-500 text-xs mt-1">{errors.shiftAllowances}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Overtime</label>
                  <input
                    type="number"
                    name="overtime"
                    value={formData.overtime}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.overtime && <p className="text-red-500 text-xs mt-1">{errors.overtime}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tax Rate (%)</label>
                  <input
                    type="number"
                    name="taxRate"
                    value={formData.taxRate}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.taxRate && <p className="text-red-500 text-xs mt-1">{errors.taxRate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="">Select</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="NFT">NFT</option>
                    <option value="RTGS">RTGS</option>
                    <option value="Cash">Cash</option>
                  </select>
                  {errors.paymentMethod && <p className="text-red-500 text-xs mt-1">{errors.paymentMethod}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Type</label>
                  <select
                    name="employeeType"
                    value={formData.employeeType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="">Select</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                  </select>
                  {errors.employeeType && <p className="text-red-500 text-xs mt-1">{errors.employeeType}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.bankName && <p className="text-red-500 text-xs mt-1">{errors.bankName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account Title</label>
                  <input
                    type="text"
                    name="accountTitle"
                    value={formData.accountTitle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.accountTitle && <p className="text-red-500 text-xs mt-1">{errors.accountTitle}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account No</label>
                  <input
                    type="text"
                    name="accountNo"
                    value={formData.accountNo}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.accountNo && <p className="text-red-500 text-xs mt-1">{errors.accountNo}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
                  <input
                    type="text"
                    name="IFSCCode"
                    value={formData.IFSCCode}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.IFSCCode && <p className="text-red-500 text-xs mt-1">{errors.IFSCCode}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CNIC</label>
                  <input
                    type="text"
                    name="CNIC"
                    value={formData.CNIC}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
            )}
            {activeTab === 'PfAccount' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">PF Account Number</label>
                  <input
                    type="text"
                    name="pfAccountNumber"
                    value={formData.pfAccountNumber}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">PF Type</label>
                  <select
                    name="pfType"
                    value={formData.pfType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employerContributionPf && <p className="text-red-500 text-xs mt-1">{errors.employerContributionPf}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution PF</label>
                  <input
                    type="number"
                    name="employeeContributionPf"
                    value={formData.employeeContributionPf}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employeeContributionPf && <p className="text-red-500 text-xs mt-1">{errors.employeeContributionPf}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">SSES Type</label>
                  <select
                    name="ssesType"
                    value={formData.ssesType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employerContributionSses && <p className="text-red-500 text-xs mt-1">{errors.employerContributionSses}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution SSES</label>
                  <input
                    type="number"
                    name="employeeContributionSses"
                    value={formData.employeeContributionSses}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employeeContributionSses && <p className="text-red-500 text-xs mt-1">{errors.employeeContributionSses}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">EOBI Type</label>
                  <select
                    name="eobiType"
                    value={formData.eobiType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employerContributionEobi && <p className="text-red-500 text-xs mt-1">{errors.employerContributionEobi}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution EOBI</label>
                  <input
                    type="number"
                    name="employeeContributionEobi"
                    value={formData.employeeContributionEobi}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employeeContributionEobi && <p className="text-red-500 text-xs mt-1">{errors.employeeContributionEobi}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ESIC Type</label>
                  <select
                    name="esicType"
                    value={formData.esicType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="">Select</option>
                    <option value="ESIC">ESIC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Contribution ESIC</label>
                  <input
                    type="number"
                    name="employerContributionEsic"
                    value={formData.employerContributionEsic}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employerContributionEsic && <p className="text-red-500 text-xs mt-1">{errors.employerContributionEsic}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee Contribution ESIC</label>
                  <input
                    type="number"
                    name="employeeContributionEsic"
                    value={formData.employeeContributionEsic}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.employeeContributionEsic && <p className="text-red-500 text-xs mt-1">{errors.employeeContributionEsic}</p>}
                </div>
              </div>
            )}
            {activeTab === 'Security' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Re-enter Password</label>
                  <input
                    type="password"
                    name="reenterPassword"
                    value={formData.reenterPassword}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.reenterPassword && <p className="text-red-500 text-xs mt-1">{errors.reenterPassword}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
        {errors.submit && (
          <div className="mt-4 text-red-500 text-sm text-center">{errors.submit}</div>
        )}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors duration-200"
          >
            Update
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800">Success</h2>
            <p className="mt-2 text-gray-600">Employee updated successfully!</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors duration-200"
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