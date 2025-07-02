// src/components/DataTable.jsx
const DataTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 border">{col.label}</th>
            ))}
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 border">{item[col.key]}</td>
              ))}
              <td className="px-4 py-2 border">
                <button onClick={() => onEdit(item)} className="text-blue-600 mr-2">Edit</button>
                <button onClick={() => onDelete(item)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;