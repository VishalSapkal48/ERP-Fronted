import { useState } from "react";

function Settings() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", permissions: ["read", "write"] },
    { id: 2, name: "Jane Smith", role: "User", permissions: ["read"] },
  ]);
  const [newUser, setNewUser] = useState({
    name: "",
    role: "",
    permissions: [],
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.role || newUser.permissions.length === 0)
      return;
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", role: "", permissions: [] });
  };

  const handlePermissionChange = (e) => {
    const permission = e.target.value;
    setNewUser({
      ...newUser,
      permissions: e.target.checked
        ? [...newUser.permissions, permission]
        : newUser.permissions.filter((p) => p !== permission),
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Settings & Permissions</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New User</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddUser}
        >
          <input
            type="text"
            placeholder="User Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="p-2 border rounded"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="p-2 border rounded"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2">Permissions:</label>
            <label className="mr-4">
              <input
                type="checkbox"
                value="read"
                checked={newUser.permissions.includes("read")}
                onChange={handlePermissionChange}
              />{" "}
              Read
            </label>
            <label>
              <input
                type="checkbox"
                value="write"
                checked={newUser.permissions.includes("write")}
                onChange={handlePermissionChange}
              />{" "}
              Write
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add User
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Permissions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-2 border">{user.id}</td>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.role}</td>
                <td className="p-2 border">{user.permissions.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Settings;
