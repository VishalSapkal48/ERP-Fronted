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
        const data = await hrmApi.getEmployeeById(id);
        setFormData({
          ...formData,
          ...data,
          dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : '',
          hireDate: data.hireDate ? new Date(data.hireDate).toISOString().split('T')[0] : '',
          joiningDate: data.joiningDate ? new Date(data.joiningDate).toISOString().split('T')[0] : '',
          separationDate: data.separationDate ? new Date(data.separationDate).toISOString().split('T')[0] : '',
          status: data.status ? data.status.toLowerCase() : '',
          password: '', // Do not prefill password for security
          reenterPassword: '',
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
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.workPhone.trim()) newErrors.workPhone = 'Work phone is required';
      if (!formData.homePhone.trim()) newErrors.homePhone = 'Home phone is required';
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
      if (!formData.workLocation.trim()) newErrors.workLocation = 'Work Location is required';
      if (!formData.employeeType.trim()) newErrors.employeeType = 'Employee Type is required';
      if (!formData.status) newErrors.status = 'Status is required';
    }
    if (activeTab === 'Contact') {
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.workPhone.trim()) newErrors.workPhone = 'Work phone is required';
      if (!formData.homePhone.trim()) newErrors.homePhone = 'Home phone is required';
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
      if (!formData.workLocation.trim()) newErrors.workLocation = 'Work Location is required';
    }
    if (activeTab === 'Payroll') {
      if (!formData.netSalary && formData.netSalary !== 0) newErrors.netSalary = 'Net Salary is required';
      if (!formData.paymentMethod.trim()) newErrors.paymentMethod = 'Payment Method is required';
      if (formData.paymentMethod === 'Bank Transfer') {
        if (!formData.bankName.trim()) newErrors.bankName = 'Bank Name is required';
        if (!formData.accountTitle.trim()) newErrors.accountTitle = 'Account Title is required';
        if (!formData.accountNo.trim()) newErrors.accountNo = 'Account Number is required';
        if (!formData.IFSCCode.trim()) newErrors.IFSCCode = 'IFSC Code is required';
      }
      ['netSalary', 'hra', 'specialBonus', 'conveyance', 'travelAllowances', 'shiftAllowances', 'overtime', 'taxRate'].forEach(
        (field) => {
          if (formData[field] && isNaN(Number(formData[field]))) {
            newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} must be a number`;
          }
        }
      );
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
      ['employerContributionPf', 'employeeContributionPf', 'employerContributionSses', 'employeeContributionSses', 'employerContributionEobi', 'employeeContributionEobi', 'employerContributionEsic', 'employeeContributionEsic'].forEach(
        (field) => {
          if (formData[field] && isNaN(Number(formData[field]))) {
            newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} must be a number`;
          }
        }
      );
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
    if (name === 'status') newValue = value.toLowerCase();
    else if (numericFields.includes(name)) newValue = value === '' ? '' : Number(value) || '';
    else if (dateFields.includes(name)) newValue = value ? new Date(value).toISOString().split('T')[0] : '';

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
        setFormData({ ...formData, profileImage: reader.result });
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
      employeeData[field] = employeeData[field] === '' ? null : Number(employeeData[field]);
    });

    dateFields.forEach((field) => {
      employeeData[field] = employeeData[field] ? new Date(employeeData[field]) : null;
    });

    delete employeeData.reenterPassword;

    try {
      await hrmApi.updateEmployee(id, employeeData);
      setShowModal(true);
    } catch (error) {
      console.error('Error updating employee:', error);
      setErrors({ ...errors, submit: error.message || 'Failed to update employee. Please try again.' });
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/hrm/employees');
  };

  if (loading) return <div className="p-4 sm:p-6 text-center text-gray-600">Loading...</div>;
  if (error) return <div className="p-4 sm:p-6 text-center text-red-500">{error}</div>;

  const renderInput = (label, name, type = 'text', options = null, readOnly = false) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {options ? (
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          readOnly={readOnly}
          className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:bg-gray-100"
        />
      )}
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

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
                {renderInput('Employee ID', 'employeeId', 'text', null, true)}
                {renderInput('Name', 'name')}
                {renderInput('Department', 'department')}
                {renderInput('Job Title', 'jobTitle')}
                {renderInput('Manager', 'manager')}
                {renderInput('Hire Date', 'hireDate', 'date')}
                {renderInput('Joining Date', 'joiningDate', 'date')}
                {renderInput('Gender', 'gender', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' },
                ])}
                {renderInput('Date of Birth', 'dob', 'date')}
                {renderInput('Employee Type', 'employeeType', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'Employee', label: 'Employee' },
                  { value: 'Vendor', label: 'Vendor' },
                  { value: 'Guest', label: 'Guest' },
                  { value: 'Franchise Owner', label: 'Franchise Owner' },
                ])}
                {renderInput('Status', 'status', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'active', label: 'Active' },
                  { value: 'inactive', label: 'Inactive' },
                ])}
                {renderInput('Separation Date', 'separationDate', 'date')}
              </div>
            )}
            {activeTab === 'Contact' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {renderInput('Email', 'email', 'email')}
                {renderInput('Work Phone', 'workPhone')}
                {renderInput('Home Phone', 'homePhone')}
                {renderInput('Emergency Phone', 'emergencyPhone')}
                {renderInput('Work Location', 'workLocation')}
                {renderInput('Address', 'address')}
                {renderInput('City', 'city')}
                {renderInput('Country', 'country')}
              </div>
            )}
            {activeTab === 'Payroll' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {renderInput('Net Salary', 'netSalary', 'number')}
                {renderInput('HRA', 'hra', 'number')}
                {renderInput('Special Bonus', 'specialBonus', 'number')}
                {renderInput('Conveyance', 'conveyance', 'number')}
                {renderInput('Travel Allowances', 'travelAllowances', 'number')}
                {renderInput('Shift Allowances', 'shiftAllowances', 'number')}
                {renderInput('Overtime', 'overtime', 'number')}
                {renderInput('Tax Rate (%)', 'taxRate', 'number')}
                {renderInput('Payment Method', 'paymentMethod', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'Bank Transfer', label: 'Bank Transfer' },
                  { value: 'NFT', label: 'NFT' },
                  { value: 'RTGS', label: 'RTGS' },
                  { value: 'Cash', label: 'Cash' },
                ])}
                {renderInput('Bank Name', 'bankName')}
                {renderInput('Account Title', 'accountTitle')}
                {renderInput('Account No', 'accountNo')}
                {renderInput('IFSC Code', 'IFSCCode')}
                {renderInput('Location', 'location')}
                {renderInput('Designation', 'designation')}
                {renderInput('CNIC', 'CNIC')}
              </div>
            )}
            {activeTab === 'PfAccount' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {renderInput('PF Account Number', 'pfAccountNumber')}
                {renderInput('PF Type', 'pfType', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'PF', label: 'PF' },
                ])}
                {renderInput('Employer Contribution PF', 'employerContributionPf', 'number')}
                {renderInput('Employee Contribution PF', 'employeeContributionPf', 'number')}
                {renderInput('SSES Type', 'ssesType', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'SSES', label: 'SSES' },
                ])}
                {renderInput('Employer Contribution SSES', 'employerContributionSses', 'number')}
                {renderInput('Employee Contribution SSES', 'employeeContributionSses', 'number')}
                {renderInput('EOBI Type', 'eobiType', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'EOBI', label: 'EOBI' },
                ])}
                {renderInput('Employer Contribution EOBI', 'employerContributionEobi', 'number')}
                {renderInput('Employee Contribution EOBI', 'employeeContributionEobi', 'number')}
                {renderInput('ESIC Type', 'esicType', 'select', [
                  { value: '', label: 'Select' },
                  { value: 'ESIC', label: 'ESIC' },
                ])}
                {renderInput('Employer Contribution ESIC', 'employerContributionEsic', 'number')}
                {renderInput('Employee Contribution ESIC', 'employeeContributionEsic', 'number')}
              </div>
            )}
            {activeTab === 'Security' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {renderInput('Username', 'username')}
                {renderInput('Password', 'password', 'password')}
                {renderInput('Re-enter Password', 'reenterPassword', 'password')}
              </div>
            )}
          </div>
        </div>
        {errors.submit && <div className="mt-4 text-red-500 text-sm text-center">{errors.submit}</div>}
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