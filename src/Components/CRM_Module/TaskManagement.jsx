import { useState } from "react";

function TaskManagement() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Follow up with client",
      status: "To Do",
      assignee: "John",
    },
    {
      id: 2,
      title: "Prepare proposal",
      status: "In Progress",
      assignee: "Jane",
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    status: "To Do",
    assignee: "",
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.status || !newTask.assignee) return;
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    setNewTask({ title: "", status: "To Do", assignee: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Task Management</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Task</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddTask}
        >
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="p-2 border rounded"
          />
          <select
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
            className="p-2 border rounded"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <input
            type="text"
            placeholder="Assignee"
            value={newTask.assignee}
            onChange={(e) =>
              setNewTask({ ...newTask, assignee: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Task
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Assignee</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="p-2 border">{task.id}</td>
                <td className="p-2 border">{task.title}</td>
                <td className="p-2 border">{task.status}</td>
                <td className="p-2 border">{task.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskManagement;
