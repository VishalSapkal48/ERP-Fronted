// src/components/FormInput.jsx
const FormInput = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
};

export default FormInput;