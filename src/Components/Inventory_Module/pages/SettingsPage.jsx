import React, { useState } from 'react';

const SettingsPage = () => {
  const [companyProfile, setCompanyProfile] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const [taxSettings, setTaxSettings] = useState({
    gstRate: '',
    vatRate: ''
  });

  const [userRoles] = useState(['Admin', 'User']);
  const [currency, setCurrency] = useState('USD');
  const [priceTiers, setPriceTiers] = useState([{ type: 'retail', value: '' }]);
  const [errors, setErrors] = useState({});

  // 🔍 Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!companyProfile.name.trim()) newErrors.name = 'Company name is required';
    if (taxSettings.gstRate < 0 || taxSettings.vatRate < 0)
      newErrors.tax = 'Tax rates cannot be negative';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 📌 Handlers
  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyProfile(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleTaxChange = (e) => {
    const { name, value } = e.target;
    setTaxSettings(prev => ({ ...prev, [name]: value }));
    if (errors.tax) setErrors(prev => ({ ...prev, tax: '' }));
  };

  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  const handlePriceTierChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTiers = [...priceTiers];
    updatedTiers[index][name] = value;
    setPriceTiers(updatedTiers);
  };

  const addPriceTier = () => {
    setPriceTiers([...priceTiers, { type: '', value: '' }]);
  };

  const removePriceTier = (index) => {
    const updatedTiers = priceTiers.filter((_, i) => i !== index);
    setPriceTiers(updatedTiers);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log('✅ Saved Settings:', {
        companyProfile,
        taxSettings,
        userRoles,
        currency,
        priceTiers
      });
      alert('Settings saved successfully!');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Settings</h1>

      {/* Company Profile */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">🏢 Company Profile</h2>
        <div className="space-y-4">
          <input
            name="name"
            value={companyProfile.name}
            onChange={handleCompanyChange}
            placeholder="Company Name"
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          <input
            name="address"
            value={companyProfile.address}
            onChange={handleCompanyChange}
            placeholder="Address"
            className="w-full p-2 border rounded"
          />
          <input
            name="phone"
            value={companyProfile.phone}
            onChange={handleCompanyChange}
            placeholder="Phone"
            className="w-full p-2 border rounded"
          />
        </div>
      </section>

      {/* Tax Settings */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">💼 Tax Settings</h2>
        <div className="space-y-4">
          <input
            name="gstRate"
            type="number"
            min="0"
            value={taxSettings.gstRate}
            onChange={handleTaxChange}
            placeholder="GST Rate (%)"
            className="w-full p-2 border rounded"
          />
          <input
            name="vatRate"
            type="number"
            min="0"
            value={taxSettings.vatRate}
            onChange={handleTaxChange}
            placeholder="VAT Rate (%)"
            className="w-full p-2 border rounded"
          />
          {errors.tax && <p className="text-sm text-red-500">{errors.tax}</p>}
        </div>
      </section>

      {/* User Roles */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">👥 User Roles</h2>
        <ul className="list-disc list-inside text-gray-700">
          {userRoles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </section>

      {/* Currency Selection */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">💱 Currency</h2>
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="w-full p-2 border rounded"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="INR">INR - Indian Rupee</option>
        </select>
      </section>

      {/* Price Tiers */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">💲 Price Tiers</h2>
        {priceTiers.map((tier, index) => (
          <div key={index} className="flex gap-2 mb-3 items-center">
            <input
              name="type"
              value={tier.type}
              onChange={(e) => handlePriceTierChange(index, e)}
              placeholder="Tier Type (e.g. retail)"
              className="w-1/3 p-2 border rounded"
            />
            <input
              name="value"
              type="number"
              min="0"
              value={tier.value}
              onChange={(e) => handlePriceTierChange(index, e)}
              placeholder="Price"
              className="w-1/3 p-2 border rounded"
            />
            {priceTiers.length > 1 && (
              <button
                onClick={() => removePriceTier(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addPriceTier}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Add Price Tier
        </button>
      </section>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full py-2 bg-green-600 hover:bg-green-700 text-white text-lg rounded"
      >
        💾 Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;
